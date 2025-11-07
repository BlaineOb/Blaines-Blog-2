---
title: I Don't Want to Code With LLM's
publishDate: 9/21/2025
---

# I Don't Want to Code With LLM's

If you frequent Hacker News or similar feeds you've probably read some version of this article
500 times by now. This probably won't be interesting to those who have. Still, there's growing
pressure on me to use LLM-coding tools and so I feel the need to refine my objections. I've
read those 500 articles too, so I've got a pretty strong inherent bias against these tools
now, but I don't know how to express that without regurgitating all of them for 3 hours.
Luckily that's what blogging is for! So bear with me as I wrestle these fragmented thoughts
and half-baked ideas into something sensible.

## LLM's aren't great at coding

The only reason I've seen people actually push these tools is because they believe using them
leads to productivity gains. Developers think "I can do the same work with less effort, so
that means less work for me!", while managers think "developers can do the same work with less
effort, so they'll work even more!". At large companies I suspect the developers are closer to
being right, since developer productivity is rarely the bottleneck in workflow. The bottleneck
is always the [coordination](https://en.wikipedia.org/wiki/The_Mythical_Man-Month)
needed between large sets of individuals and groups for non-trivial changes. So the mangers probably
won't be happy, but at least it's a win for developers right? I'm quite skeptical of this too.
Measuring developer productivity is notoriously difficult, but one recent popular
[study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
tried earnestly to measure the difference while using these tools. The results were stunning. Economists
and ML experts predicted a near 40% gain in productivity. Developers actually *in* the
study predicted around a 20% productivity gain, before AND after taking part in the study. The
real results showed a 19% producitivity **loss**. The developers, some of whom were experts
in their codebase and experienced with LLM's, genuinely thought they were doing a fifth more
work with these tools while they were actually doing a fifth less. That result, while only a
single study, should give huge pause to believing the many self-reported claims of
productivity gains from developers. It may be that we overrate the time saved from code
generation and underrate the time spent fixing errors.

## But they do some tasks well!

Yep, I've seen and heard of many tiny, well defined problems that LLM's are a good fit for.
File conversions to different formats/languages, simple data mapping, basic test case
generation, etc. I'm not going to dispute any of this. There's plenty of small, irritating
tasks in modern software development. If anyone is able to effectively automate these tasks
then good for them. My only problem here is that this is such a minor gain. This is comparable
to many standard features you'd find in an IDE. It could probably be handled by a much simpler
tool, and use of that tool certainly wouldn't be compulsory, just a nice-to-have. And it
really wouldn't be a new paradigm for software development that you must learn or be left
behind. I'll also lump in using LLM's as a search engine here. If there was any future for
LLM's in my workflow, it'd be here. Getting a link to that thing that's on the tip of your
tongue but you totally forgot the name of is awesome. I'd only caveat this by saying again,
this is pretty minor. Most of the things I look up are the documentation of technologies I
work with frequently, or idiomatic solutions to common problems. For these cases LLM's are
functionally identical to Google, as I only want a link to an answer or an article that a real
person actually wrote. LLM's are wrong too frequently for me to trust <i>their</i> answer, but
if they can point me to a helpful link then great. The problem is that Google is already good
enough here<sup id="footnote-ref-1">[1](#footnote1)</sup>.

## What about the hard stuff?

There's a huge amount of debate online about how well LLM's handle complex tasks with huge
contexts. The opaque, ever-changing nature of the models make mapping out exact capabilities a
largely futile effort, but it's still clear that they all break down eventually. You can't
vibe-code your way to greatness, and it's [unlikely](https://www.newyorker.com/culture/open-questions/what-if-ai-doesnt-get-much-better-than-this)
you ever could with just an LLM. Those who try [inevitably](https://cendyne.dev/posts/2025-03-19-vibe-coding-vs-reality.html)
[hit](https://www.reddit.com/r/ChatGPTCoding/comments/1jingvi/vibe_coding_doesnt_work/) [a wall](https://www.reddit.com/r/vibecoding/comments/1nl0cp7/unpopular_opinion_just_vibe_coding_is_not/).
People reach a point where further prompting no longer fixes the errors, and because they didn't
write anything they have little understanding of the code themselves, so they become completely
stuck. The hope of Silicon Valley wasn't that these models would be able to produce good guesses
for a little while. It was that they could create models that had real emergent understanding of
the world just by training them with huge amounts of data. But, to quote Cal Newport on the
[Rob Montz Show](https://youtu.be/emHCav2pxLA?feature=shared&t=1451):

> We were hoping if it got enough examples of people doing logical reasoning it would get
general logic circuits. Then you could just give it a novel problem and it'd be like "let's
apply this type of logic to it". That didn't end up happening.

If your code requires someone to have a deep understanding of the whole system, an LLM is
simply not a good fit.

## Reviewing is worse than writing

The simple objection to vibe-coders is that there's supposed to be a human in the loop. Of
course we don't want to give the reins over to the LLM completely! Instead we should be
carefully reviewing the results of each prompt or commit before we allow the code to go live.
For the reasons above I suspect this workflow is overall slower than just writing the code
yourself, but even if it wasn't I still wouldn't want to work like this. Remember my first
paragraph? I described writing this post as an effort to collect my thoughts, allowing me to
succintly argue against LLM's in the future. Mike Grindle [summarized](https://mikegrindle.com/posts/write-to-think)
this process as, "I don't know what I think until I write it down." This idea has a long history
amongst writers. They repeatedly realized that writing is effectively structuring your thoughts
and building an understanding of a subject. My older post on the value of web performance was made
almost entirely out of thoughts I already had bouncing around in my head, but I struggled to make
sense of them all together. With some earnest chewing I managed to collect them into a sensible
argument, and now I feel like my understanding of the subject is far clearer. I believe this process
happens when I code too. I might have some jumbled idea of how a certain part works in theory,
but I don't really **know** unless I wrote it myself. This is why legacy codebases are so
notoriously difficult to work with: you didn't write any of it yourself. You don't know the
real constraints the solution had to navigate because you didn't get to actually wrestle with
those issues. Writing is simply not a part of the job I'm willing to outsource to a tool. It
is how we understand. It is [theory-building](https://pages.cs.wisc.edu/~remzi/Naur.pdf),
and it is the *most critical part* of what I do.

## Use it or lose it

Let's say LLM's make me slightly more productive and I'm still able to build a solid
understanding of the system just by reviewing their code. I still don't want to use them. Some
heavy LLM users have noticed that their coding abilities have [atrophied](https://vvvincent.me/llms-are-making-me-dumber/)
over time. This makes perfect sense, as the human brain is constantly adapting istelf on the
principle of "use it or lose it". This is why most people are terrible at arithmetic now that we
carry calculators in our pocket, or why I'm completely hopeless with spanish despite supposedly
studying it for 7 years. The neuronal pathways we use consistently become more connected and literally
faster over time. The ones we don't are gradually pruned away. To use an LLM regularly is to deliberately
allow your main competency to atrophy. I imagine the counter to this would be that the only skills
that would atrophy are the ones that LLM's can handle. Much like arithmetic, they would be skills
you don't really need anymore. But again, to write code IS to build an understanding of it. How
much can you be said to understand a language or a library if you've never written anything with
it? How much will you understand features in generated code that you've never seen before? How
well will you understand the pitfalls of a particular approach? When CEO's say things like "90%
of code will be written by AI in the future", I picture vast seas of code that are barely functional
being maintained by a handful of humans who barely understand what they're looking at.

## When did butterflies become uncool?

![XCKD comic about using different text editors to code](../assets/real_programmers.png)

I vividly remember reading this comic when I began my career. I always felt a little silly for
relying on the behemoth IDE's Eclipse and Intellij on Windows. The real gurus all seemed to be
hacking away using highly customized, minimal editors and command-line tools in Linux. My
takeaway was that the less abstract a tool you used, the closer you were to the real computer
and the more you needed to know your shit. Of course new programmers like myself would reach
for any tool or library that let us be productive asap, but the sign of mastery was to shed
that baggage. If you knew exactly what your tools were doing, you could abandon the fluff and
do it yourself, writing a solution that better fit your tradeoffs. Stripped down tools also
tend to be fast as hell, which gives a bigger productivity boost than any LLM could give an
expert.

I just don't understand why this zietgeist flipped. When did getting closer to the metal
become considered a waste of time? Now there's so many developers who have 20+ years of
experience bragging about how *little* they have to touch their code. LLM-coding is an abstraction
gone wild, attempting to move all of programming into a black box. I don't get why being able to
make that box bigger has become a point of pride. It's no longer "Look how much I know", it's "Look
how much I can do while knowing nothing". I understand why business leaders would be excited by
this, but developers? Hackers? Where did pride in mastery go?

I'm deliberately choosing not to use LLM's in my career as a software developer. I don't think
they work well, and even when they do they make it so that **I don't work well**. I don't
think this fundamental situation will change for some time, so I'm comfortable missing out.
Maybe one day AI will improve to the point where writing software becomes entirely obsolete,
but I'm not counting on it. I'm gonna keep hacking away.

<div class="footnote" id="footnote1">
	1. And probably <em>much</em> cheaper.<a href="#footnote-ref-1"><sup>[return]</sup></a>
</div>
