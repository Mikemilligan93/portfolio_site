---
title: "Building a family finance app with an AI"
summary: "A private finance app for two, built in two days with an AI writing every line of code. What made it work was specifying, judging, and getting through the dull technical basics."
client: "Personal project"
role: "Product owner, tester and operator"
year: "2026"
duration: "2 days"
tags: ["Web app", "Specification", "AI-assisted build", "Google Sheets"]
color: "green"
order: 3
highlights:
  - value: "2 days"
    label: "from idea to an app on both our phones"
  - value: "~40"
    label: "decisions written down before any code"
  - value: "4,700"
    label: "lines of code, all written by the AI"
hu:
  title: "Családi pénzügyi app építése AI-jal"
  summary: "Privát pénzügyi app két embernek, két nap alatt, minden kódsort AI írt. A siker kulcsa a specifikálás, az ítélőképesség és az unalmas technikai alapok voltak."
draft: false
---

In two days I went from "we should track our spending" to an app my wife and I have on our phones. An AI wrote every line of the code. The project still worked only because I could specify what I wanted, judge what I was given, and get through the dull technical parts where the AI could not help itself.

## The project in brief

Treassurance is a private finance app for two people. We record expenses, income and transfers by hand, each account belongs to one of us, and the app shows balances and monthly reports. It is installed on an iPhone and an Android phone from the same web address, works for adding entries without a connection, and keeps its data in a Google Sheet we own.

|  |  |
| --- | --- |
| Users | Two |
| Time | An afternoon and evening for design and build, the next day for polish and documents |
| Built with | Claude, in a chat session connected to a folder on my computer |
| Stack | A Next.js-style web app on Cloudflare Workers, Google Sheets as the database, Google sign-in |
| Size | About 4,700 lines in 62 source files; 15 screens; 11 server routes |
| Outside code used at run time | Five packages: the framework and React. Sign-in, sessions and the Sheets connection were written by hand |
| Documents | Design document, functional specification, technical specification, user manual |

## How the work was divided

The AI wrote, and I did everything around the writing.

<figure class="cs-figure"><svg class="cs-diagram" viewBox="0 0 760 272" role="img" aria-label="I specified, decided and tested; the AI wrote" font-size="11.5"><defs><marker id="lanes-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--line)"></path></marker></defs><text x="24" y="34" font-size="15" font-weight="600" fill="var(--text)">I specified, decided and tested; the AI wrote</text><g><text x="100" y="64" font-weight="600" fill="var(--muted)">1 Design</text><text x="228" y="64" font-weight="600" fill="var(--muted)">2 Riskiest part</text><text x="356" y="64" font-weight="600" fill="var(--muted)">3 Nine build steps</text><text x="484" y="64" font-weight="600" fill="var(--muted)">4 Polish</text><text x="612" y="64" font-weight="600" fill="var(--muted)">5 Hand-over</text><path d="M100 74H732" fill="none" stroke="var(--line)" stroke-width="2" marker-end="url(#lanes-arrow)"></path></g><g><text x="24" y="128" font-size="13" font-weight="600" fill="var(--text)">Me</text><rect x="100" y="88" width="120" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="228" y="88" width="120" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="356" y="88" width="120" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="484" y="88" width="120" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="612" y="88" width="120" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><text x="112" y="112" fill="var(--text)">Answer forty</text><text x="112" y="128" fill="var(--text)">questions,</text><text x="112" y="144" fill="var(--text)">change my mind</text><text x="240" y="112" fill="var(--text)">Set up Google,</text><text x="240" y="128" fill="var(--text)">run the check,</text><text x="240" y="144" fill="var(--text)">paste errors</text><text x="368" y="112" fill="var(--text)">Run, deploy,</text><text x="368" y="128" fill="var(--text)">test on phones,</text><text x="368" y="144" fill="var(--text)">report back</text><text x="496" y="120" fill="var(--text)">Say what feels</text><text x="496" y="136" fill="var(--text)">wrong in use</text><text x="624" y="120" fill="var(--text)">Order specs,</text><text x="624" y="136" fill="var(--text)">plan an audit</text></g><g><text x="24" y="216" font-size="13" font-weight="600" fill="var(--text)">Claude</text><rect x="100" y="176" width="120" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="228" y="176" width="120" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="356" y="176" width="120" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="484" y="176" width="120" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="612" y="176" width="120" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="112" y="200" fill="var(--muted)">Ask, propose,</text><text x="112" y="216" fill="var(--muted)">draw a mockup,</text><text x="112" y="232" fill="var(--muted)">write it down</text><text x="240" y="200" fill="var(--muted)">Write a small</text><text x="240" y="216" fill="var(--muted)">read-and-write</text><text x="240" y="232" fill="var(--muted)">check</text><text x="368" y="200" fill="var(--muted)">Write all code,</text><text x="368" y="216" fill="var(--muted)">test the logic</text><text x="368" y="232" fill="var(--muted)">it can isolate</text><text x="496" y="208" fill="var(--muted)">Find the cause,</text><text x="496" y="224" fill="var(--muted)">fix it</text><text x="624" y="200" fill="var(--muted)">Write specs,</text><text x="624" y="216" fill="var(--muted)">list its own</text><text x="624" y="232" fill="var(--muted)">weak points</text></g></svg></figure>

The top lane is the part that is easy to underestimate. The AI's working environment had no network access, so it could not install packages, start the app or reach Google or Cloudflare. It wrote code into a folder on my computer and told me, each time, what it had and had not been able to test. I was the one who ran every command, read every error and tried every screen.

That made me the test environment and the operator, and both roles need some grounding. You cannot report a problem usefully if you cannot tell a build error from a browser error from a message on Google's side.

## Specification first

We wrote no code on the first afternoon. I had asked for a design document before anything was built, and for every open point to be put to me as a question. That produced about forty decisions, most of them multiple choice, and a document that recorded each one.

The questions were easy to answer. Knowing which answers mattered was the work. Three examples:

- **Where the data lives.** I chose a Google Sheet over a hosted database. That one answer shaped the architecture: the app became slow to write and needed to save locally first, and it needed a bridge between the phone and the sheet.
- **What "shared" means.** The first design gave every entry a label: joint, mine or hers. When I saw it drawn in a mockup I realised we don't need it: an entry is either mine or hers. Removing the label removed a field from every entry and a whole class of questions.
- **The card that goes negative.** I have a card I top up from my main account. The AI offered two models; I picked the simpler one, without the card as an account. A day later, using the app, I changed my mind and needed negative balances after all.

The second and third examples are the point. A specification is not a form to fill in once. I got those decisions wrong on paper, saw it in a mockup or in use, and corrected them. Because every decision was written down, each change was a small, traceable edit and not a rebuild.

The mockup did a second job. It was drawn before the build, so my reactions to colours and layout cost minutes. The same reactions after the build cost a round of code changes, as I found out with the colours.

## The architecture in one picture

The app is small, but it has the same parts as a large one: a client, a server, a login and a data store.

<figure class="cs-figure"><svg class="cs-diagram" viewBox="0 0 760 272" role="img" aria-label="One small server sits between the phones and the spreadsheet" font-size="11.5"><defs><marker id="cs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--line)"></path></marker></defs><text x="24" y="34" font-size="15" font-weight="600" fill="var(--text)">One small server sits between the phones and the spreadsheet</text><g fill="none" stroke="var(--line)" stroke-width="2"><path d="M184 100H208" marker-start="url(#cs-arrow)" marker-end="url(#cs-arrow)"></path><path d="M368 100H392" marker-start="url(#cs-arrow)" marker-end="url(#cs-arrow)"></path><path d="M552 100H576" marker-start="url(#cs-arrow)" marker-end="url(#cs-arrow)"></path><path d="M288 144V176" marker-end="url(#cs-arrow)"></path></g><g><rect x="24" y="56" width="160" height="88" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="36" y="80" font-size="13" font-weight="600" fill="var(--text)">Two phones</text><text x="36" y="96" fill="var(--muted)">Installed web app</text><text x="36" y="112" fill="var(--muted)">Keeps new entries</text><text x="36" y="128" fill="var(--muted)">while offline</text></g><g><rect x="208" y="56" width="160" height="88" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><text x="220" y="80" font-size="13" font-weight="600" fill="var(--text)">App on Cloudflare</text><text x="220" y="96" fill="var(--text)">Draws every screen</text><text x="220" y="112" fill="var(--text)">Checks the sign-in</text><text x="220" y="128" fill="var(--text)">Holds the keys</text></g><g><rect x="392" y="56" width="160" height="88" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="404" y="80" font-size="13" font-weight="600" fill="var(--text)">Google Sheets API</text><text x="404" y="96" fill="var(--muted)">Reads and writes rows</text><text x="404" y="112" fill="var(--muted)">for the app only</text></g><g><rect x="576" y="56" width="160" height="88" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="588" y="80" font-size="13" font-weight="600" fill="var(--text)">Our spreadsheet</text><text x="588" y="96" fill="var(--muted)">Entries, accounts,</text><text x="588" y="112" fill="var(--muted)">categories, templates</text><text x="588" y="128" fill="var(--muted)">Copied every week</text></g><g><rect x="208" y="176" width="160" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="220" y="200" font-size="13" font-weight="600" fill="var(--text)">Google sign-in</text><text x="220" y="216" fill="var(--muted)">Only our two</text><text x="220" y="232" fill="var(--muted)">accounts get in</text></g></svg></figure>

I did not design this, and I did not need to. I did need to understand it well enough to make three calls:

- **A web app, not two native apps.** We use different phone systems. One installable web app avoided app stores entirely.
- **Prove the risky part before building on it.** Nobody could say for sure that a Cloudflare server could write to a Google Sheet. So the first thing built was a throwaway check that wrote one row and read it back. It took about an hour, including my setup mistakes. Had it failed, the design would have had to change before any real code existed.
- **Beta tools are a risk I accepted knowingly.** The AI told me the recommended framework for this platform was still in beta, and what the fallback was. That is a decision for the owner, not for the tool.

Knowing the vocabulary is what made these conversations short. "Server", "secret", "redirect", "deploy" and "cache" each came up within the first evening.

## Where the basics mattered

None of the moments below was hard. Each one would still have stopped the project if I had not known roughly what I was looking at, or had not been able to describe it.

| What happened | What it actually was | What I needed to know |
| --- | --- | --- |
| "Cannot find module" on the first command | I ran it in a different folder from the one the files were in | What a working directory is |
| The same, a day later: "could not read package.json" | One folder too high | The same thing, again |
| The cloud check answered "404 not found" | A stray space pasted into a stored secret; the login itself had worked | That a 404 after a successful login points at the address, not the password |
| Google refused sign-in with "redirect_uri_mismatch" | The app's return address was not on Google's allow-list | That a login is a round trip between two parties who must agree on addresses |
| I could not open the settings file | Its name starts with a dot, so the file manager hides it | What a hidden file is, and that secrets live in files that are never shared |
| "What is SESSION_SECRET?" | A random password only the app knows, used to sign the login cookie | Nothing in advance, but enough to ask the question |
| Deploy failed with "no authentication token" | The deploy tool had its own login, separate from the one I had done | That tools keep their own credentials |
| The selected filter button showed no text | One general style rule was overriding the text colour of every link in the app | Only how to describe exactly what I saw and where |
| I could not enter a negative balance | The phone's number pad has no minus key | That a bug report is about the behaviour, not the guess at its cause |
| The date and note fields overlapped on my phone | A date field is wider on a phone than in the layout's assumption | That it had to be tested on the real device |

Three patterns are in that table.

- **Most of the problems were on my side, and all of those were basic.** Folders, pasted secrets, allow-lists, hidden files. No AI removes these, because they happen on my machine and in my accounts.
- **The AI's own mistakes were invisible to it.** It could not see the screen. The invisible filter text and the overlapping fields existed until I looked at the app and said so. A precise description was enough each time; a vague "it looks wrong" would not have been.
- **Reading an error message is the core skill.** In every row, the message said what was wrong. Pasting it whole, without interpreting it first, got a correct diagnosis on the first try.

## What the AI could not do

The AI was a fast and careful writer of code. It tested what it could in isolation, kept the documents in step with the decisions, and said plainly at each step what it had not been able to verify. These are the things it could not do, and they are where my part was.

- **Run or see its own work.** It never started the app or looked at a screen. Every "this works" in the project is mine.
- **Act in my accounts.** Creating the Google project, the service account and the sign-in client, and logging in to Cloudflare, were mine to do. Its instructions were written from memory and labelled as such, so I had to recognise when a menu had a different name.
- **Make the decisions.** It recommended, and it explained the trade-offs. Whether entries need a joint label, whether the card is an account, whether a beta framework is acceptable, were not its to answer.
- **Know how the app feels.** The first colours were too harsh and the background too black. That only shows when a person uses the thing.
- **Vouch for its own security.** It wrote the sign-in by hand, and then listed 21 weak or unverified points in the technical specification. I am having a different model audit that document and the code before we rely on the app.

The last point is the one I would stress to anyone doing this. I asked for a technical specification precisely so that someone else could check the work. If I had not known that such a document exists and what it is for, the app would have gone live on trust.

## The result, and what I would tell someone starting the same way

The app is deployed and installed on both our phones, with the features we specified: entries, transfers, balances and corrections, templates, four reports, offline entry and a weekly backup. Since the first working version I have asked for a dozen changes from real use, such as softer colours, reordering accounts and leaving an account out of the reports. Each was a short request, because the structure underneath was already agreed.

What I would tell someone starting the same way:

1. **Write the decisions down before any code exists.** A design document made every later change a small edit.
2. **Look at a mockup before the build.** Two of my early decisions did not survive seeing them drawn.
3. **Test the riskiest assumption first,** with something small you can throw away.
4. **Build in steps you can try.** Nine steps, each ending in something I could open, meant a mistake never hid behind another one.
5. **Report what you see, not what you think the cause is,** and paste error messages whole.
6. **Ask for the specifications and the weak points in writing,** and have someone else read them.
7. **Learn the basics that no tool will do for you.** Where a command runs, what a server and a secret are, how a login round trip works, how to read an error.

An AI can now write a working application in an evening. Turning that into a product two people can depend on still took someone who could say what it should do, tell whether it did, and know what to ask for when it did not. That part of software development has not gone anywhere.
