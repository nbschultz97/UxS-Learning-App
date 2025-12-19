"""Simple local progress storage.

Uses ~/.uxs_learning/progress.json to remain offline and portable.
"""
from __future__ import annotations

import json
import os
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Dict


STORE_DIR = Path(os.environ.get("UXS_DATA_DIR", Path.home() / ".uxs_learning"))
STORE_FILE = STORE_DIR / "progress.json"


@dataclass
class ProgressRecord:
    correct: int = 0
    attempted: int = 0

    @property
    def accuracy(self) -> float:
        if self.attempted == 0:
            return 0.0
        return self.correct / self.attempted


class ProgressStore:
    def __init__(self, path: Path = STORE_FILE) -> None:
        self.path = path
        self.records: Dict[str, ProgressRecord] = {}
        self.load()

    def load(self) -> None:
        if not self.path.exists():
            self.records = {}
            return
        try:
            with self.path.open("r", encoding="utf-8") as handle:
                raw = json.load(handle)
        except (json.JSONDecodeError, OSError):
            self.records = {}
            return
        self.records = {
            slug: ProgressRecord(**entry) for slug, entry in raw.get("records", {}).items()
        }

    def save(self) -> None:
        self.path.parent.mkdir(parents=True, exist_ok=True)
        payload = {"records": {slug: asdict(rec) for slug, rec in self.records.items()}}
        with self.path.open("w", encoding="utf-8") as handle:
            json.dump(payload, handle, indent=2)

    def update(self, lesson_slug: str, correct: int, attempted: int) -> ProgressRecord:
        record = self.records.get(lesson_slug, ProgressRecord())
        record.correct += correct
        record.attempted += attempted
        self.records[lesson_slug] = record
        self.save()
        return record

    def reset(self) -> None:
        self.records = {}
        if self.path.exists():
            try:
                self.path.unlink()
            except OSError:
                pass


__all__ = ["ProgressRecord", "ProgressStore", "STORE_FILE", "STORE_DIR"]
