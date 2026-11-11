#!/usr/bin/env python3
"""Regenerates the downloadable CVs (public/cv/*.pdf) from content/site.js.

Usage:  npm run cv        (needs Node 22+, Python 3 and `pip install reportlab`)
"""
import json
import os
import subprocess
import sys

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, KeepTogether, PageTemplate,
                                Paragraph, Spacer, Table, TableStyle)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# A font with Hungarian accents (ő, ű) is required; the PDF base fonts lack them.
FONT_CANDIDATES = [
    ('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
     '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'),
    ('/System/Library/Fonts/Supplemental/Arial.ttf',
     '/System/Library/Fonts/Supplemental/Arial Bold.ttf'),
    ('C:/Windows/Fonts/arial.ttf', 'C:/Windows/Fonts/arialbd.ttf'),
]

INK = colors.HexColor('#141414')
MUTED = colors.HexColor('#4d4a47')
PAPER = colors.HexColor('#f9f5f2')
ACCENTS = {
    'yellow': '#f8cb46', 'pink': '#ff90e8', 'green': '#a5fb8f',
    'purple': '#c4a1ff', 'blue': '#9fb2ff', 'orange': '#ffb48a',
}
TITLE = {'en': 'Business Analyst & Tech Writer', 'hu': 'Üzleti elemző és tech writer'}


def load_content():
    script = ("import('./content/site.js').then(m => console.log(JSON.stringify("
              "{site: m.site, ui: m.ui, jobs: m.jobs, education: m.education, skills: m.skills})))")
    out = subprocess.run(['node', '-e', script], cwd=ROOT, check=True,
                         capture_output=True, text=True).stdout
    return json.loads(out)


def register_fonts():
    for regular, bold in FONT_CANDIDATES:
        if os.path.exists(regular) and os.path.exists(bold):
            pdfmetrics.registerFont(TTFont('CV', regular))
            pdfmetrics.registerFont(TTFont('CV-Bold', bold))
            return
    sys.exit('No suitable TrueType font found; add one to FONT_CANDIDATES.')


def esc(text):
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def build(data, lang):
    site, t = data['site'], data['ui'][lang]
    path = os.path.join(ROOT, 'public', 'cv', f'bence-toth-cv-{lang}.pdf')
    name = site['nameLocal'][lang]

    def page_bg(canvas, doc):
        canvas.saveState()
        canvas.setFillColor(PAPER)
        canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
        canvas.setFont('CV', 8)
        canvas.setFillColor(MUTED)
        canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, f'{name} · {doc.page}')
        canvas.restoreState()

    doc = BaseDocTemplate(path, pagesize=A4, title=f'{name} – CV', author=name,
                          leftMargin=18 * mm, rightMargin=18 * mm,
                          topMargin=16 * mm, bottomMargin=18 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id='main',
                  leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id='page', frames=[frame], onPage=page_bg)])

    h_name = ParagraphStyle('name', fontName='CV-Bold', fontSize=26, leading=30, textColor=INK)
    h_title = ParagraphStyle('title', fontName='CV-Bold', fontSize=12, leading=16, textColor=INK)
    small = ParagraphStyle('small', fontName='CV', fontSize=9, leading=13, textColor=MUTED)
    body = ParagraphStyle('body', fontName='CV', fontSize=9.5, leading=14, textColor=INK)
    section = ParagraphStyle('section', fontName='CV-Bold', fontSize=11, leading=14, textColor=INK)
    role = ParagraphStyle('role', fontName='CV-Bold', fontSize=10.5, leading=14, textColor=INK)
    bullet = ParagraphStyle('bullet', parent=body, leftIndent=10, bulletIndent=0, spaceBefore=1.5)

    def section_title(text, color):
        tbl = Table([[Paragraph(esc(text.upper()), section)]], colWidths=[doc.width])
        tbl.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor(ACCENTS[color])),
            ('BOX', (0, 0), (-1, -1), 1.5, INK),
            ('LEFTPADDING', (0, 0), (-1, -1), 8), ('TOPPADDING', (0, 0), (-1, -1), 4),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ]))
        return [Spacer(1, 12), tbl, Spacer(1, 8)]

    contact = [site['location'][lang], site['linkedin'].replace('https://www.', ''),
               site['github'].replace('https://', '')]
    if site['email'] and not site['email'].endswith('@example.com'):
        contact.insert(1, site['email'])

    story = [
        Paragraph(esc(name), h_name),
        Paragraph(esc(TITLE[lang]), h_title),
        Spacer(1, 3),
        Paragraph(esc('  ·  '.join(contact)), small),
        Spacer(1, 10),
        # the first two intro paragraphs; the 'off the clock' line stays on the site
        *[Paragraph(esc(p), ParagraphStyle('intro', parent=body, spaceAfter=5)) for p in t['hero']['intro'][:2]],
    ]

    story += section_title(t['cv']['experience'], 'yellow')
    for job in data['jobs']:
        end = job['end'][lang] if job['end'] else t['cv']['present']
        head = Table(
            [[Paragraph(esc(job['role'][lang]), role),
              Paragraph(esc(f"{job['start'][lang]} – {end}"),
                        ParagraphStyle('r', parent=small, alignment=2))]],
            colWidths=[doc.width * 0.68, doc.width * 0.32])
        head.setStyle(TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0),
                                  ('RIGHTPADDING', (0, 0), (-1, -1), 0),
                                  ('TOPPADDING', (0, 0), (-1, -1), 0),
                                  ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
                                  ('VALIGN', (0, 0), (-1, -1), 'TOP')]))
        block = [head, Paragraph(esc(f"{job['company']} · {job['location'][lang]}"), small)]
        block += [Paragraph(esc(b), bullet, bulletText='•') for b in job['bullets'][lang]]
        block.append(Spacer(1, 9))
        story.append(KeepTogether(block))

    edu = section_title(t['cv']['education'], 'blue')
    for e in data['education']:
        edu.append(Paragraph(esc(e['school'][lang]), role))
        line = f"{e['degree'][lang]} · {e['years']}"
        edu.append(Paragraph(esc(line), body))
        if e['note']:
            edu.append(Paragraph(esc(e['note'][lang]), small))
        edu.append(Spacer(1, 6))
    story.append(KeepTogether(edu))

    story.append(KeepTogether(section_title(t['cv']['skills'], 'green')
                              + [Paragraph(esc('  ·  '.join(data['skills'])), body)]))

    doc.build(story)
    return path


if __name__ == '__main__':
    register_fonts()
    content = load_content()
    for language in ('en', 'hu'):
        print('written', os.path.relpath(build(content, language), ROOT))
