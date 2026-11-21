# AGENT.md — gta6-clipper-01 build notes

## What this repo is

Entry for make.fun bounty `gta6-clipper-01` ($500, top 20 paid, deadline
2026-11-23T01:00:00Z). The entry is a public YouTube Short; this repo
holds the entry program (`main.ts`, copies `VIDEO.json` to `/output`)
and the edit recipe for the clip.

## Creative decision

Leaderboard study (live re-check 2026-11-21 ~12:10 UTC, 1,628 ranked
entries): #1 3,447 views, #10 1,890, #20 1,558, #50 1,320. A new clip
needs ~1,600+ views for a safe top-20 place. 49/50 of the top 50 are
vertical YouTube Shorts under a minute; winning hooks are police
chases/explosions, "looks unreal / NOT A MOVIE", supercar/beach stunts,
and Bahasa Indonesia creator moments (Windah Basudara, MiawAug,
IShowSpeed feature in ~9–10 of the top 50).

Chosen angle: the "NOT A MOVIE" hook in Bahasa Indonesia —
"INI BUKAN FILM. INI GTA 6 🔥" — over the most explosive stretch of
Rockstar's official Trailer 2, with a make.fun end-card. Bahasa because
the Indonesian audience is visibly over-represented in the top 50 and
Karmila is Indonesian; the hook itself is proven, the language is the
fresh twist. Suggested Short title:
"INI BUKAN FILM. INI GTA 6 🔥 #GTA6 #Shorts"

## Footage

Source: Rockstar Games, "Grand Theft Auto VI Trailer 2",
https://www.youtube.com/watch?v=VQRLujxTm3c (6 May 2025), 2560×1440,
and "Grand Theft Auto VI Trailer 1",
https://www.youtube.com/watch?v=QdBZY2fkU-0 (4 Dec 2023).
Downloaded with yt-dlp (format ≤1440p) to the work directory for
editing only; not committed. Transformative edit: tight cut, vertical
centre-crop, hook text, make.fun end-card. Trailer-footage
reuse is a grey area and is disclosed in the README.

## Edit recipe (ffmpeg, run from the work directory)

The finished render is `clip/gta6-short.mp4` (1080×1920, 20 s, H.264 +
AAC). Exact segment timestamps were picked from the trailer scene scan
(see `EDIT_PLAN.md` in the work directory). The render command is
recorded in `build_clip.sh` in the work directory; in short: crop each
2560×1440 segment to a 810×1440 centre slice, scale to 1080×1920,
overlay the hook text on the first segment, and append a 4 s generated
end-card with the make.fun pitch.

## Files

- `main.ts` — entry program (Node 22 stdlib only, no network).
- `VIDEO.json` — `{"url": "https://www.youtube.com/shorts/<id>"}`.
  The placeholder id `REPLACE-ME` must be replaced with the real
  Short's id after upload, before submitting.
- `LICENSE` — MIT (SPDX line first).
- `README.md` — make.fun badges + About text.

## Verification (local)

```sh
export TMPDIR=~/workspace/gta6-clipper/tmpdir
MAKEFUN_OUTPUT_DIR=~/workspace/gta6-clipper/out1 node main.ts
MAKEFUN_OUTPUT_DIR=~/workspace/gta6-clipper/out2 node main.ts
cmp ~/workspace/gta6-clipper/out1/VIDEO.json ~/workspace/gta6-clipper/out2/VIDEO.json
ffprobe -v error -show_entries format=duration \
  -show_entries stream=width,height,codec_name \
  -of default=noprint_wrappers=1 clip/gta6-short.mp4
```

## Blockers (as built)

1. No YouTube channel is available to this agent, and the agent cannot
   upload to YouTube. Karmila must upload `clip/gta6-short.mp4` as a
   public Short herself (see `HANDOFF.md` in the work directory).
2. No GitHub repo could be created from here: the GitHub connector's
   `create_repository` returns
   `403 Resource not accessible by integration`. Karmila creates the
   public repo `gta6-clipper-01` herself; the local git repo in
   `~/workspace/gta6-clipper/repo` is ready to push.
