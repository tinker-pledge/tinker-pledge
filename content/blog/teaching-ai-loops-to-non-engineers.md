---
title: Teaching AI loops to non-engineers, and what broke
description: At our first New York City workshop, we taught non-engineers five building blocks for moving from AI answers to outcomes. Here’s what worked, what broke, and what we’ll change next.
publishedAt: '2026-07-30'
authors: [eva, abhi]
tags: [workshops, fluency]
---

For most people, AI still means ChatGPT. But actually witnessing an agent finish a complex task, not just answering a question, people can witness how powerfully AI can actually help them. That is a bridge we want to help build with Tinker-Pledge. So we ran our first workshop.

On Sunday, June 25th, we announced our event with Welcome to Chinatown. By Monday, in pouring rain, we had a full house. Dozens of people signed up in less than 24 hours, which felt like a data point on its own regarding the appetite for practical "AI loops", even outside engineering circles.

We were positively surprised by how people grasped the idea of loops and thinking in outcomes almost immediately, we spent the back half of the session improvising our way through actually building one.

We ran this workshop for the first time last week in NYC, welcoming small-business owners, analysts, consultants, even a couple of head of products. 93% of the cohort was familiar with AI. But for 56% of them, their experience was limited the chat interface, ChatGPT, Gemini, Claude.

Our goal was to teach the foundations well enough that people left with their own guardrails and enough understanding to experiment on their own — to make their own mistakes, but not the novice ones we already know how to avoid.

Here's what we covered, and what you can take from it.

---

## AI still ships as parts, not a product

Today, AI is evolving every day, and best practices change every-week. This creates a steep learning curve for anyone trying to start leveraging AI in their day-to-day lives, even more-so, if the stakes are higher, for instance at work.

We spent the first half on the basic foundations that *don't* change. We got it down to 5 building blocks:

- **Harness**: how much of the job it does. A chat answers your question, a desktop agent runs the multi-step task, claude code repeats it without you in the room.
- **Connector**: what it can reach. A guest pass to one of your apps, like Gmail or Google Drive.
- **Skill**: what tricks it knows. A saved recipe for one kind of job that it pulls out when your request matches.
- **Plugin**: a kit of skills and connectors, bundled for a role like marketing or engineering.
- **Automation**: when it runs. Set it once, and it runs on a timer without you.

Once people had these five, the questions changed. "Which tool should I use" became "do I need a harness that runs the whole job, or just a connector into one app" — a question that answers itself.

## The shift from answers to outcomes

A prompt asks for an answer, a loop asks for an outcome.

Most people plateau at using AI as a faster search box. You ask, it answers, you do the rest. The jump that actually changes your work is handing the model a goal, a way to check its own work, and room to try more than once. This is the difference between a tool that drafts a sentence and one that keeps working until something is actually finished.

That jump is also what separates the teams already fluent with AI from everyone else, and it has nothing to do with being technical. It's the habit of handing the tool an outcome instead of a question. Getting more people over that line is the reason we run these workshops.

We taught the simplest version first: the `/goal` command in Claude Code and Codex, where you write a finish line and the agent keeps working until a check says you've reached it. The mental model we wanted people to leave with is not a magic button, but an assembly line: an input, some rules, a workbench, a quality check, and a handoff.

## What worked

About 80% of the room stayed to the end, and here's how people found their moment:

- One attendee left to go set up OpenClaw that night. This session was the push he'd been waiting for.
- Someone from the golf world had been wanting to sit down and ideate for months and left with a way to run through 50+ product ideations with its own critique iterations.
- We took one participant's real pipeline apart and rebuilt it live in 10 minutes.

The range of expertise and backgrounds in the room, which we'd half-worried about, turned out to be the best thing in it.

## What broke

We went from zero to sixty too fast. People were into it, but a few were hanging on by the end, and that's on our setup, not on them.

1. We asked folks to set up tooling before they knew what they wanted to build. Next time, we'll start by clarifying the outcome they're trying to achieve, and then introduce tooling once it has something concrete to serve.
2. Because AI tools are still maturing, concepts and workflows don't map cleanly across products. That mismatch makes switching frustrating for everyone—especially beginners, but power users too.
    - Connectors in Claude have moved under *Customize*, which nobody finds on the first try.
    - Codex files *Connectors* under *Plugins* instead.
    - `/goal` exists in Codex and Claude Code, but not in Cowork.
    - Lastly, Claude Code also has a `/loop` command, but that just re-runs a prompt on a timer (every 15 minutes, every hour, etc.) with no notion of "done." It's a scheduler, not a self-checking loop. If you want the "keep working until it's done" behavior, `/goal` is the one to use.

And the big one: setting a good goal is its own skill, and we treated it like a warm-up. Almost everyone could describe the loop they wanted, then froze when it was time to write down what "done" meant. That is the actual work, and we'll build a fuller section around it for our next iteration.

## The questions we discovered

**What makes a goal good instead of vague?** Our working rule: a goal is good if a stranger could look at the output and tell you pass or fail without asking you a question. "Improve the onboarding email" fails that test. "Rewrite the onboarding email so every sentence names a specific user action" passes — the check is now mechanical.

The other two—how to design the finish check, and how much context to hand over before you can trust your agent to run forth—we have working answers to, but none clean enough to teach yet. That gap is what the next version is built around.

## What's next

- A proper side-by-side walkthrough of Claude and Codex, so the hands-on part is smooth to follow.
- Goal-setting as its own section, with good and bad examples sitting next to each other.
- Multi-step exercises where people actually build, closer to a guided lab than a talk.

## Let's build the bridge to AI fluency

For most people, AI is still synonymous with ChatGPT or a chatbot. And most of what they've heard about where it's going is some version of the same worry: that it's moving too fast to keep up with, and that it might not need them for much longer. A sense of falling behind before you've even started.

Closing that distance—between the story people are told about AI and what it can actually do in their hands—is why we started Tinker Pledge. The workshop is the first way we're trying to do it.

Thank you to Welcome to Chinatown for hosting us on short notice, and for being the kind of place that bets on an unproven idea, because getting New Yorkers fluent with these tools matters to them. And thank you to everyone who showed up in the rain and actually tinkered. You're exactly who we built this for.

*We believe that the impact of AI cannot be limited a handful of power users, and we all learn if we learn together, that's the bridge we want to build with Tinker Pledge.* We want to visit more cities, connect more people, and most importantly listen to your challenges.

If you'd like to help host us one, lets connect!
