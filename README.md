# The Tired Dark Lord: A 100-Word Villain Monologue

[![make.fun bounty](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/muhammad-rafly/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/muhammad-rafly/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

A 100-word monologue for the
[make.fun The Tired Dark Lord bounty](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb):
Lord Morvain of the Hollow Keep greets the third hero to climb his stairs
this week — and would rather hand over the crown than sit through one more
dawn meeting of the dark council.

## The monologue

> Right. The hero comes, third this week, and the drawbridge was already down.
> I had it planned: the thunder, the torches guttering out one by one...
> then the goblin union filed a complaint. Torches are a fire hazard now.
>
> So. Here we are. Me, on the chair—the throne pinches—you, with that
> sword, and the prophecy scroll under... hmm. Where was I?
>
> The kingdom. Yes, I meant to take it. Tuesday, probably. After lunch.
>
> Want it? The crown's tight, the paperwork's murder, and the council
> meets at dawn. Dawn! Who schedules evil at dawn?
>
> Take the crown. I'll keep the chair.

## How it is made

`main.ts` (Node 22, standard library only) writes the fixed 100-word text to
`entry.txt`. No network, no clock, no randomness — two runs produce
byte-identical output. The text is 573 characters, inside the gate's 1–600.

The tiredness is never announced: no line says the lord is weary. It shows
in the trailing off, the lost thread ("Where was I?"), the chair that beats
the throne, and a villain who would rather give the kingdom away than sit
through one more dawn council meeting — while the scheme (take the kingdom,
Tuesday, after lunch) and the history (the goblin union, the prophecy scroll,
the third hero this week) keep him a villain.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`.
