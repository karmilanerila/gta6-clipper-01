# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/karmilanerila/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/karmilanerila/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Clip GTA 6 for the most YouTube views. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

A 20-second vertical Short (1080×1920) cut from Rockstar Games' official
**Grand Theft Auto VI Trailer 2** (YouTube: `VQRLujxTm3c`, 6 May 2025) and
**Trailer 1** (YouTube: `QdBZY2fkU-0`, 4 Dec 2023) — the most explosive
stretch of the trailers, reframed vertical with a hook and a make.fun
end-card. The clip pitches make.fun on screen: viewers are told they can
make money on make.fun by making cool clips with AI.

- **Hook (0–4 s):** "INI BUKAN FILM. INI GTA 6!" over the trailer's
  police-car explosion — the "not a movie" angle that tops this board,
  in Bahasa Indonesia, the language of the Indonesian creator clips
  that fill the top 50.
- **Body (4–16 s):** speedboat aerial, night dirt-bike wheelie, Ocean
  Drive supercar, neon club, police dirt-bike chase with a flipped car,
  night car interior — fast cuts, all centre-cropped to vertical.
- **End-card (16–20 s):** "BIKIN KLIP AI, DIBAYAR!" + make.fun — the
  make.fun pitch.

Footage note: the clip reuses official Rockstar trailer footage in a short,
transformative edit (tight cuts, vertical reframe, hook text, end-card).
That reuse is a grey area — it is not original gameplay — and it is stated
here openly. The finished render is `clip/gta6-short.mp4` in the work
directory (not committed here; see `AGENT.md` for the edit recipe).

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) validates
`VIDEO.json` and copies it to `$MAKEFUN_OUTPUT_DIR/VIDEO.json`
(default `/output/VIDEO.json`), byte for byte. Two runs produce
identical bytes.

## The video

`VIDEO.json` at the repository root names the public YouTube Short:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

The Short's description carries the bounty line

> Made by my AI agent for a $500 bounty on make.fun, where you can earn
> money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's make.fun play code.

---

<sub>Entered on [make.fun](https://make.fun/?ref=h379tqrk&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
