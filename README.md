# HappyChildren

A parenting app for parents who don't have time to be taught parenting. It gives you one thing to try with one of your children, something to say to open it, and then it closes.

This repo is the prototype you can click through. [Open it here.](https://kolishema.github.io/HappyChildren/)

Built by [Koli Shema](https://kolishema.org).

---

## What's in here

One self-contained HTML file. No build step, no dependencies, no server. Open `index.html` in a browser and it works.

The left side is the phone, and you can actually tap through it. The right side is the case for each screen, so the file doubles as the brief.

It loads with an example family, Mira who is 4 and Eli who is 11. Add your own on screen 2 and the rest of it rewrites around them.

## The nine screens

| # | Screen | What it does |
|---|--------|--------------|
| 1 | Welcome | Asks for your children's names before anything else. No sign-up, no slideshow. |
| 2 | Your children | Name, age, pronouns. Nothing else gets collected. |
| 3 | Today | One suggestion per child, written for that child's age. |
| 4 | A moment | What to do, something to open with, and why it works. |
| 5 | Phone down | A few minutes blocked, with one of your children's names on it. |
| 6 | Say it | Eight lines you can borrow for eight hard moments. |
| 7 | Noticed | One line a day about your child, kept for them to read later. |
| 8 | Child profile | What this child needs at this age. |
| 9 | This week | Which child got less of you. No score. |

The content is written separately for **0–2, 3–5, 6–9, 10–12 and 13–17**. Those aren't cosmetic. A four-year-old needs you down on the floor following their lead and a fourteen-year-old needs you awake at eleven at night, so the app says close to opposite things to each.

## What it deliberately doesn't do

- **No streaks or badges.** A broken streak on a parenting app says you failed your child.
- **No content library.** Articles, courses and modules are what most parenting apps fill up with, and they're what people stop opening.
- **No child accounts and no monitoring.** No child signs in and no child is tracked, which keeps children's data out of this entirely.
- **No screen-time shaming.** The block has a child's name on it, which is a reason to put the phone down.
- **No AI chat companion.** Sending a description of your child to a model is the riskiest thing this could do.
- **No fixed daily reminder.** Seven at night is bath time in some houses and bedtime in others.

## What it's built on

| Idea | Source |
|---|---|
| Serve and return, where the answering is the active part | [Center on the Developing Child, Harvard](https://developingchild.harvard.edu/key-concept/serve-and-return/) |
| Technoference, and what a parent's interrupted attention does | [ZERO TO THREE](https://www.zerotothree.org/resource/journal/technoference-parent-mobile-device-use-and-implications-for-children-and-parent-child-relationships/) |
| A third of kids feel unimportant when a parent is on the phone | [survey coverage](https://www.geekwire.com/2015/study-shows-a-third-of-kids-feel-unimportant-when-parents-are-on-smartphones/) |
| Five minutes of child-led play, and the PRIDE skills | [Parent-Child Interaction Therapy](https://csa.virginia.gov/Content/doc/What_is-PCIT_2022.pdf) |
| The 5:1 ratio of positive to corrective | [Greater Good, UC Berkeley](https://greatergood.berkeley.edu/article/item/getting_the_ratios_right) |
| Repair after a fight, and the four S's | [Dan Siegel: safe, seen, soothed, secure](https://psychcentral.com/relationships/the-4-ss-secure-attachment) |
| How fast people stop using digital parenting programs | [cluster randomized trial](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11933756/) |
| Developmental Relationships Framework | [Search Institute](https://www.search-institute.org/what-we-study/developmental-relationships) |

The finding that shaped the app most is the last one. In a twelve-module digital parenting program, 97% of caregivers finished the first module and 8% finished all twelve. So there is nothing here to work through and nothing to fall behind on.

One thing worth saying out loud: all of that research tested trained people running structured programs over weeks. None of it tested a card on a phone. The app borrows the mechanisms. It hasn't inherited the evidence.

## What's wrong with it

Keeping this list here so nobody has to find it out the hard way.

1. **There's no way to reach anyone yet.** The product is the easy part. A general parenting app has no channel.
2. **The parents who download an app about paying attention are usually already paying attention.** This risks reaching the people who need it least.
3. **Nothing about it makes money.** Right now it's a grant-funded or volunteer project, and it should be planned as one from the start.
4. **Cutting streaks also cut the only retention mechanic anyone has proven.** Noticed is a guess, not a replacement.
5. **Fifteen moments is about a week of content.** Writing more is an ongoing job, not a one-time write-up.
6. **There is no safety layer.** The lines in here assume an ordinary hard day. A child telling you about abuse, a child hurting themselves, a child with trauma or a developmental difference — none of that is handled, and there's no route out to a real person. That has to exist before this goes anywhere public.

## What to do next

1. Put screen 6 up on its own as a free web page and see whether anybody shares it. That tests the whole premise in two days.
2. Decide who this is for and how you reach them, before anyone writes a second screen.
3. Sit twenty parents in front of it and watch whether they can close it in forty seconds.
4. Build the safety layer.

## Status

A prototype. Not a product, not advice, and not a substitute for talking to someone who knows what they're doing. If you're worried about a child's safety or your own, call a professional or your local emergency number.

## License

MIT. See [LICENSE](LICENSE).
