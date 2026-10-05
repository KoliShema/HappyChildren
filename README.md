# HappyChildren

A clickable prototype for a parenting app built on one idea: hand a parent **one small thing to do with one specific child today**, tell them what to say, and get out of the way.

---

## What this repo is

A single self-contained HTML file. No build step, no dependencies, no server. Open `index.html` in a browser, or enable GitHub Pages on this repo for a live link.

The left side is the prototype — a phone you can actually tap through. The right side is the argument for each screen, so the file doubles as the product brief.

It ships with an example family (Mira, 4 and Eli, 11). Add your own children on screen 2 and every other screen rewrites around them.

## The nine screens

| # | Screen | What it does |
|---|--------|--------------|
| 1 | Welcome | Asks for children's names before anything else. No account, no carousel. |
| 2 | Your children | Name, age, pronouns. Nothing else is collected. |
| 3 | Today | One suggestion per child, written for that child's age band. |
| 4 | A moment | What to do, the opening sentence to say, and why it works. |
| 5 | Phone down | A short voluntary block with a named child attached to it. |
| 6 | Say it | Eight borrowed sentences for the eight hard moments. |
| 7 | Noticed | One line a day about your child, kept for them to read later. |
| 8 | Child profile | What this child needs, at this age. |
| 9 | This week | Which child got less of you. No score, no streak. |

Content is age-banded across **0–2, 3–5, 6–9, 10–12, 13–17**. The bands are not cosmetic — a four-year-old needs you to follow their lead on the floor and a fourteen-year-old needs you awake at eleven at night, and the app says opposite things to each.

## What it deliberately doesn't do

- **No streaks or badges.** A broken streak on a parenting app reads as "you failed your child."
- **No content library.** Articles, courses and modules are where parenting apps go to die.
- **No child accounts and no monitoring.** No child logs in, no child is tracked. That keeps children's data out of the system entirely.
- **No screen-time shaming.** The phone-down block carries a child's name, which is a reason rather than a scold.
- **No AI chat companion.** It would replace the thing that works — the parent talking to the child — with the parent talking to a phone.
- **No fixed daily reminder.** 7pm is bathtime in some houses and bedtime in others.

## What the design rests on

| Idea | Source |
|---|---|
| Serve and return — the response is the active ingredient | [Center on the Developing Child, Harvard](https://developingchild.harvard.edu/key-concept/serve-and-return/) |
| Technoference — parents' interrupted attention and child outcomes | [ZERO TO THREE](https://www.zerotothree.org/resource/journal/technoference-parent-mobile-device-use-and-implications-for-children-and-parent-child-relationships/) |
| A third of children feel unimportant when a parent is on their phone | [survey coverage](https://www.geekwire.com/2015/study-shows-a-third-of-kids-feel-unimportant-when-parents-are-on-smartphones/) |
| Five minutes of child-led play, PRIDE skills | [Parent-Child Interaction Therapy](https://csa.virginia.gov/Content/doc/What_is-PCIT_2022.pdf) |
| The 5:1 ratio of positive to corrective interaction | [Greater Good, UC Berkeley](https://greatergood.berkeley.edu/article/item/getting_the_ratios_right) |
| Repair after rupture — the four S's | [Dan Siegel's safe, seen, soothed, secure](https://psychcentral.com/relationships/the-4-ss-secure-attachment) |
| Engagement collapse in digital parenting programmes | [cluster randomised trial](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11933756/) |
| Developmental Relationships Framework | [Search Institute](https://www.search-institute.org/what-we-study/developmental-relationships) |

The engagement finding is the one that shaped the product most: in a twelve-module digital parenting programme, 97% of caregivers finished module one and 8% finished all twelve. Anything shaped like a curriculum goes unused — hence one card a day and nothing to fall behind on.

Caveat worth keeping in view: the research above validates trained people delivering structured programmes over weeks. None of it has been tested as a daily card on a phone. The app borrows the mechanisms; it has not inherited the evidence.

## Known weaknesses

Honest list, kept here so nobody has to rediscover them:

1. **Distribution is unsolved.** The product is the easy part. A general-market parenting app has no channel.
2. **The parents who download a presence app are already the attentive ones.** The intervention risks reaching the people who need it least.
3. **No business model.** Nothing here monetises. This is currently a grant-funded or volunteer project, and should be planned as one.
4. **Removing streaks removes the only proven retention mechanic.** "Noticed" is a hypothesis, not a replacement.
5. **Fifteen moments is a week of content.** Scaling it is an ongoing editorial job, not a one-off write-up.
6. **No safety layer.** The scripts assume an ordinary hard day. A child disclosing abuse, self-harm, or a child with trauma or a developmental difference needs triage and an exit to real help, and the prototype has neither. This has to be built before anything ships publicly.

## Next steps

1. Ship screen 6 (**Say it**) on its own as a free web page and see whether anyone shares it. Demand test before build.
2. Decide who this is for and which channel reaches them, before writing a second screen.
3. Put twenty parents in front of this and watch whether they can close it in forty seconds.
4. Add the safety layer before anything ships publicly.

## Status

Prototype. Not a product, not clinical advice, not a substitute for professional support. If you are worried about a child's safety or your own, contact a qualified professional or your local emergency service.

## Licence

MIT — see [LICENSE](LICENSE).
