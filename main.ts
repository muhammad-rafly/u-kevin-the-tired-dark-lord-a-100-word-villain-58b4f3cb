// The Tired Dark Lord: A 100-Word Villain Monologue
// Deterministic entry writer for the make.fun bounty
// u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.
// Node 22, standard library only. No network, no clock, no randomness:
// two runs produce byte-identical output.
//
// The monologue is exactly 100 words. The tiredness is never announced:
// it lives in the trailing off, the lost thread ("Where was I?"), the
// chair that beats the throne, and a dark lord who would rather hand the
// whole kingdom over than sit through one more dawn council meeting.

import * as fs from "node:fs";
import * as path from "node:path";

// The entry: one monologue, spoken by Lord Morvain of the Hollow Keep
// to the third hero who has climbed his stairs this week.
const ENTRY = [
  "Right. The hero comes, third this week, and the drawbridge was already down.",
  "I had it planned: the thunder, the torches guttering out one by one...",
  "then the goblin union filed a complaint. Torches are a fire hazard now.",
  "",
  "So. Here we are. Me, on the chair—the throne pinches—you, with that",
  "sword, and the prophecy scroll under... hmm. Where was I?",
  "",
  "The kingdom. Yes, I meant to take it. Tuesday, probably. After lunch.",
  "",
  "Want it? The crown's tight, the paperwork's murder, and the council",
  "meets at dawn. Dawn! Who schedules evil at dawn?",
  "",
  "Take the crown. I'll keep the chair.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
