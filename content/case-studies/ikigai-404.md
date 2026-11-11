---
title: "The spec was the bottleneck: building Ikigai 404 in 24 hours with an AI developer"
summary: "A browser game about burnout, built in a 24-hour company hackathon with Claude writing the code and me as product owner. The code was never the slow part."
client: "Company hackathon"
role: "Product owner"
year: "2026"
duration: "24 hours"
tags: ["Game", "Hackathon", "AI-assisted build", "Product ownership"]
color: "pink"
order: 1
highlights:
  - value: "24 h"
    label: "from first commit to the finished MVP"
  - value: "3,458"
    label: "lines of JavaScript, no dependencies"
  - value: "155 → 2.3 MB"
    label: "raw art shrunk by one processing script"
hu:
  title: "A specifikáció volt a szűk keresztmetszet: az Ikigai 404 24 óra alatt, AI-fejlesztővel"
  summary: "Böngészős játék a kiégésről egy 24 órás céges hackathonon. A kódot Claude írta, én voltam a product owner."
draft: false
---

In October 2026 my team built *Ikigai 404*, a browser game about burnout, in a 24-hour company hackathon. Claude wrote the code. I was the product owner. The code was never the slow part. Almost every real delay came from something nobody had specified clearly enough.

## The project in brief

You play a burnt-out bunny in a suit in a 1990s Japanese office. Your health bar is mental health. One email at your own desk wakes up a printer, a broken coffee machine, the air conditioner and an evil client, and at the end the CEO, a huge oni, tells you: "We're not a company… we're a FAMILY!" When your mental health hits zero you don't die, you burn out, and the game picks a new career for you. It is funny on the surface with a sincere point underneath, and it was built for a hackathon jury and our colleagues. It is live at [ikigai404.online](https://ikigai404.online).

|  |  |
| --- | --- |
| **Who it is for** | The hackathon jury and colleagues; anyone with a desktop browser |
| **Time** | 29 commits in about 24 hours (Friday 09:33 to Saturday 08:53); Level 2 added later, without a deadline |
| **How it was built** | I made the decisions; teammates wrote texts, designed characters and generated art; Claude wrote the code, the art pipeline and the docs |
| **Stack** | Plain JavaScript and HTML5 Canvas, no dependencies, no build step; Cloudflare Workers with KV for the leaderboard; Python for the art; ffmpeg for audio |
| **Size (hackathon build)** | 3,458 lines of JavaScript, 77 images, 37 sound files, 5.6 MB in total |
| **Documents** | A living design document (v0.4), art prompts, an audio list, a trailer script, an 11-slide jury deck |

## How the work was divided

Three parties worked on the game, and the split held for the whole project: I decided, the team made the content, Claude built.

<figure class="cs-figure"><svg class="cs-diagram" viewBox="0 0 760 340" role="img" aria-label="Decisions and accounts stayed with me; the code went to Claude" font-size="11.5"><text x="24" y="30" font-size="15" font-weight="600" fill="var(--text)">Decisions and accounts stayed with me; the code went to Claude</text><g><text x="186" y="64" text-anchor="middle" font-size="13" font-weight="600" fill="var(--text)">Design</text><text x="342" y="64" text-anchor="middle" font-size="13" font-weight="600" fill="var(--text)">Build</text><text x="498" y="64" text-anchor="middle" font-size="13" font-weight="600" fill="var(--text)">Art and sound</text><text x="654" y="64" text-anchor="middle" font-size="13" font-weight="600" fill="var(--text)">Ship and present</text></g><g><text x="24" y="118" font-size="13" font-weight="600" fill="var(--text)">Me</text><rect x="112" y="80" width="148" height="68" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="268" y="80" width="148" height="68" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="424" y="80" width="148" height="68" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><rect x="580" y="80" width="148" height="68" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><text x="124" y="102" font-weight="600" fill="var(--text)">Design doc</text><text x="124" y="120" fill="var(--text)">Living, v0.1 to v0.4</text><text x="124" y="136" fill="var(--text)">Must, Should, Could</text><text x="280" y="102" font-weight="600" fill="var(--text)">Review every build</text><text x="280" y="120" fill="var(--text)">Exact feedback on</text><text x="280" y="136" fill="var(--text)">rooms, text, layout</text><text x="436" y="102" font-weight="600" fill="var(--text)">Pick the style</text><text x="436" y="120" fill="var(--text)">Approve style test</text><text x="436" y="136" fill="var(--text)">Call the pixel pivot</text><text x="592" y="102" font-weight="600" fill="var(--text)">Git and accounts</text><text x="592" y="120" fill="var(--text)">Cloudflare, KV, domain</text><text x="592" y="136" fill="var(--text)">Demo to the jury</text></g><g><text x="24" y="202" font-size="13" font-weight="600" fill="var(--text)">Team</text><rect x="112" y="164" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="268" y="164" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="424" y="164" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="124" y="186" font-weight="600" fill="var(--text)">Characters</text><text x="124" y="204" fill="var(--text)">Bosses, minions,</text><text x="124" y="220" fill="var(--text)">colleagues, lines</text><text x="280" y="186" font-weight="600" fill="var(--text)">Texts</text><text x="280" y="204" fill="var(--text)">Dialogue edited</text><text x="280" y="220" fill="var(--text)">in texts.json</text><text x="436" y="186" font-weight="600" fill="var(--text)">Art and sound</text><text x="436" y="204" fill="var(--text)">Images from ChatGPT</text><text x="436" y="220" fill="var(--text)">Sound files</text></g><g><text x="24" y="286" font-size="13" font-weight="600" fill="var(--text)">Claude</text><rect x="112" y="248" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="268" y="248" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="424" y="248" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><rect x="580" y="248" width="148" height="68" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="124" y="270" font-weight="600" fill="var(--text)">Questions</text><text x="124" y="288" fill="var(--text)">Asked in batches</text><text x="124" y="304" fill="var(--text)">Asset list, prompts</text><text x="280" y="270" font-weight="600" fill="var(--text)">All the code</text><text x="280" y="288" fill="var(--text)">Plain JS and Canvas</text><text x="280" y="304" fill="var(--text)">Tested headless</text><text x="436" y="270" font-weight="600" fill="var(--text)">Art pipeline</text><text x="436" y="288" fill="var(--text)">process_art.py</text><text x="436" y="304" fill="var(--text)">ffmpeg mastering</text><text x="592" y="270" font-weight="600" fill="var(--text)">Deploy and pitch</text><text x="592" y="288" fill="var(--text)">Wrangler config</text><text x="592" y="304" fill="var(--text)">Deck, trailer, stats</text></g></svg></figure>

The top lane is the one that mattered. Every box in it is a decision or an account, and those are the two things I could not hand over.

## The decisions

I wrote a design document before any code, and we kept it as a living file: every decision went into it, and it reached v0.4. Three decisions in it shaped the result.

**A hard MVP line.** The document split everything into Must, Should and Could. Name entry, the intro, the office level, combat, the CEO fight, the burnout screen and an online leaderboard were Musts. A second level was a Could, and it stayed out of the hackathon build. That line is the reason the hackathon build was finished rather than half of something bigger.

**Everything editable lives outside the code.** All tunable numbers went into `config.json`, all on-screen text into `texts.json`, and every image and sound had a fixed file name, with a coloured placeholder until the real file existed. The writers could edit dialogue without touching code, and the game was playable from the first hour, before any art.

**The art style, which I got wrong first.** The first direction was a woodblock print crossed with an illuminated manuscript. It passed a three-image style test, but once the team produced real sheets it did not work as a top-down game, and on 16 October we switched to 8-bit Japanese pixel art. The code side of the switch was cheap, because nothing in it waited for art: the file names stayed and the placeholders covered the gap. The prompt side was expensive. Every image prompt was rewritten, first 34 and then 49 of them, and a new processing script had to be built for the new look.

The spec also changed under us once. My first version said the final boss was "a dragon in a suit". When the team's own character sheet arrived, the CEO became their oni and the three minibosses became four. Because the design document was the single source, that was one edit, not an argument.

## The system in one picture

The game is a folder of static files. The only code that runs on a server is the leaderboard.

<figure class="cs-figure"><svg class="cs-diagram" viewBox="0 0 760 424" role="img" aria-label="The game is static files; the only server code is the leaderboard" font-size="11.5"><defs><marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--line)"></path></marker></defs><text x="24" y="30" font-size="15" font-weight="600" fill="var(--text)">The game is static files; the only server code is the leaderboard</text><g fill="none" stroke="var(--line)" stroke-width="2"><path d="M224 92H280" marker-end="url(#arch-arrow)"></path><path d="M480 92H536" marker-end="url(#arch-arrow)"></path><path d="M636 128V156H356V208" marker-end="url(#arch-arrow)"></path><path d="M544 244H584" marker-end="url(#arch-arrow)"></path><path d="M296 336V280" marker-end="url(#arch-arrow)"></path><path d="M464 336V280" marker-end="url(#arch-arrow)"></path></g><g><rect x="24" y="56" width="200" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="36" y="80" font-size="13" font-weight="600" fill="var(--text)">Image model</text><text x="36" y="100" fill="var(--text)">sprite sheets on flat</text><text x="36" y="116" fill="var(--text)">magenta (#FF00FF)</text></g><g><rect x="280" y="56" width="200" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="292" y="80" font-size="13" font-weight="600" fill="var(--text)">process_art.py</text><text x="292" y="100" fill="var(--text)">keys out magenta, cuts</text><text x="292" y="116" fill="var(--text)">frames, 16-colour palette</text></g><g><rect x="536" y="56" width="200" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="548" y="80" font-size="13" font-weight="600" fill="var(--text)">Game files</text><text x="548" y="100" fill="var(--text)">src, assets, manifest</text><text x="548" y="116" fill="var(--text)">config.json, texts.json</text></g><text x="466" y="150" text-anchor="middle" fill="var(--muted)">git push, Cloudflare deploys</text><g><rect x="200" y="172" width="360" height="124" rx="8" fill="var(--bg)" stroke="var(--line)" stroke-width="2"></rect><text x="216" y="194" font-size="13" font-weight="600" fill="var(--text)">Cloudflare Worker</text><rect x="216" y="208" width="160" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="228" y="232" font-size="13" font-weight="600" fill="var(--text)">Static assets</text><text x="228" y="252" fill="var(--text)">served as they are,</text><text x="228" y="268" fill="var(--text)">no build step</text><rect x="384" y="208" width="160" height="72" rx="8" fill="var(--yellow)" fill-opacity="0.55" stroke="var(--line)" stroke-width="2"></rect><text x="396" y="232" font-size="13" font-weight="600" fill="var(--text)">/api/scores</text><text x="396" y="252" fill="var(--text)">basic name and</text><text x="396" y="268" fill="var(--text)">score checks</text></g><g><rect x="584" y="208" width="152" height="72" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="596" y="232" font-size="13" font-weight="600" fill="var(--text)">KV namespace</text><text x="596" y="252" fill="var(--text)">the leaderboard</text></g><text x="302" y="316" fill="var(--muted)">loads files</text><text x="470" y="316" fill="var(--muted)">posts scores</text><g><rect x="216" y="336" width="328" height="64" rx="8" fill="none" fill-opacity="1" stroke="var(--line)" stroke-width="2"></rect><text x="228" y="360" font-size="13" font-weight="600" fill="var(--text)">Player&#x27;s browser</text><text x="228" y="380" fill="var(--text)">Canvas game; scores fall back to local</text><text x="228" y="394" fill="var(--text)">storage when the API is not there</text></g></svg></figure>

Three calls in this picture were mine:

- **No engine.** The plan was the Phaser engine, but packages could not be downloaded in Claude's build environment. I accepted plain JavaScript instead, and it paid off: the folder deploys as it is.
- **Basic anti-cheat only.** The leaderboard checks name length, characters and score range, nothing more. For a hackathon toy that was enough.
- **Images go through one script.** Raw images from the image model never enter the game directly. The script shrank 155 MB of them into 2.3 MB and made them look like one game.

## Where it got stuck

None of the real delays was a hard programming problem. They were gaps in what someone, or something, had been told.

| What happened | What it actually was | What I needed to know |
| --- | --- | --- |
| The first Cloudflare build failed while trying to build a Hugo site | With no config file, Wrangler guessed the project type and took our `config.json` for a Hugo site | Deploy tools guess when they are not told. One `wrangler.jsonc` file ended it |
| A later deploy failed again | Cloudflare's GitHub app had lost its permission on the repo | Claude found it from a screenshot I sent, but reconnecting was mine to do |
| Scores saved only in each player's browser | The KV namespace the leaderboard used did not exist, and a rate limit was stricter than it needed to be | Check that every binding the code expects is really there |
| The game stopped at "Loading…" | I had two Claude sessions on the code at once. One replaced `engine.js` and deleted a function the other had made `main.js` depend on | One session on the code at a time |
| Readability fixes disappeared after a commit | A teammate saved over two files from an older local copy | Re-read files before editing, and build on top of other people's work, never over it |
| A git lock file blocked later commands | Claude's own read-only `git status` checks had left it in my folder | Git in my folder is mine: commits and pushes go through me |
| Two of three sound effects played nothing | They were silent exports | Check every uploaded file |
| Two new art sheets did not show up | They were saved as `prop_desks_a/b.png` instead of `props_desks_a/b.png` | The file names are the contract between the team and the code |

Three patterns show in this table.

1. **Most problems sat at a boundary:** between our files and a hosting service, between two people's copies, between an artist's file name and the code's. Inside the code, things mostly worked.
2. **The cause was usually a missing sentence, not a wrong one.** Nobody had told Wrangler what the project was, or the team that file names were fixed, or me that parallel sessions would collide.
3. **Each fix became a written rule.** After the hackathon I collected them into a set of instructions for the next game project, so the next spec starts with them.

## What the tool and the team could not do

The gaps in what each party could do defined my part of the work.

- **Claude could not make the art.** It wrote every image prompt and processed every image, but the pictures themselves came from the team, generated in ChatGPT.
- **Claude could not reach our accounts.** Creating the KV namespace, reconnecting GitHub, setting the build command and buying the domain were all clicks in dashboards only I could make.
- **Claude could not judge whether it felt right.** It tested every build in a headless browser and checked screenshots, so things rarely broke. Whether the text was readable enough, or a room too crowded, was my call. Several rounds of feedback on text readability passed before we settled on one font and outlined panels.
- **Claude could not read a vague request.** When I asked for the office to look "natural", it came back with questions: more greenery, or a less grid-like layout? On a bigger change I learned to say it outright: "Ask any question do not make any assumption."
- **The team could not write code, and did not need to.** That was the point of keeping text, numbers and file names outside it.

## The result and the lessons

At the end of the 24 hours the whole MVP list was in: a skippable side-view intro with a crow ticket inspector, a 64 × 40-tile office with themed rooms and 39 background colleagues, four minibosses, the CEO fight, a lift scene, the burnout screen and a live leaderboard. For the presentation we also had an 11-slide jury deck in Hungarian, a 90-second trailer, and a team photo hidden behind the manager's desk.

After the hackathon I kept going without a deadline. Level 2, the canteen, was built on 21 October: you just want to eat your lunch, and the whole company won't let you. I wrote its texts myself. This time it came with test links that jump straight to any step, meal or seat, because in the hackathon I had to replay the whole game to check one boss.

If you are starting a project the same way, with an AI writing the code, this is what I would do again:

1. **Write the design document before the first prompt,** and update it with every decision. It is the only thing every person and every session reads.
2. **Draw the MVP line on paper.** Must, Should, Could. The Could list is where the hours are saved.
3. **Put everything non-developers touch outside the code:** texts, numbers, file names. Then they can work in parallel with the AI instead of through it.
4. **Tell the tool to ask before it assumes,** and to ask in one batch.
5. **Decide on day one who owns git and the accounts,** and run one session on the code at a time.
6. **Build the test setup first.** Every feature should be reachable without playing through the game.

An AI developer made the code fast and cheap. That moved the cost to the description: most of the hours lost on Ikigai 404 went to something nobody had written down.
