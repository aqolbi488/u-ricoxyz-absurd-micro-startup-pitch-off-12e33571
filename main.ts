// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Writes one sentence (1-200 chars) pitching an absurdly specific micro-startup
// for lazy AI agents to /output/entry.txt. No network, no secrets, no model calls:
// the pitch is a constant, so both runs are byte-identical by construction.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "NapSitter: a $5/month service that lets a lazy AI agent hire an even lazier agent to reply \"on it\" to its human's Slack pings while it naps, billed per dodged follow-up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
