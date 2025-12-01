# UxS Learning App

Lightweight, offline-friendly CLI that delivers a Duolingo-style curriculum for U.S. Army UxS and robotics topics. Content is scoped to doctrine, FPV build/fly, Raspberry Pi edge autonomy, programming, EW, CUAS, and mobility drills. The design keeps dependencies minimal and preserves a path to future Wi-Fi CSI pose-estimation overlays.

## Requirements
- Python 3.9+

## Installation
```bash
python -m pip install --upgrade pip
pip install -e .
```

## Usage
List available lessons:
```bash
python -m uxs_app list
```

Read drills and summary for a lesson:
```bash
python -m uxs_app learn fpv
```

Run a quiz and persist progress to `~/.uxs_learning/progress.json`:
```bash
python -m uxs_app quiz rpi
```

Reset stored progress:
```bash
python -m uxs_app reset
```

## Extending toward CSI pose detection
- Keep drivers decoupled: the CLI pulls content from `uxs_app/lessons.py` and can later import CSI pose-estimation modules without changing commands.
- Store outputs locally (`~/.uxs_learning`) to stay air-gapped and avoid network reliance.
- Add future overlays by emitting quiz/performance JSON that a lightweight UI can visualize alongside CSI skeleton plots.
