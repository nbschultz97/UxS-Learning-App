"""Command-line interface for the UxS Learning App.

Designed to be lean, offline-first, and easy to extend toward CSI pose overlays.
"""
from __future__ import annotations

import argparse
import random
from typing import Iterable

from .lessons import Lesson, QuizQuestion, get_lesson, list_lessons
from .storage import ProgressStore


def format_lesson(lesson: Lesson) -> str:
    parts = [f"== {lesson.title} ({lesson.slug}) ==", lesson.summary, "-- Drills --"]
    parts.extend(f"- {drill}" for drill in lesson.drills)
    return "\n".join(parts)


def run_quiz(lesson: Lesson, store: ProgressStore, input_func=input) -> None:
    questions = lesson.quiz
    random.shuffle(questions)
    correct = 0
    for idx, question in enumerate(questions, start=1):
        print(f"\nQ{idx}: {question.prompt}")
        for option_index, option in enumerate(question.options):
            print(f"  [{option_index}] {option}")
        try:
            user_choice = int(input_func("Select option: ").strip())
        except ValueError:
            user_choice = -1
        if user_choice == question.answer_index:
            correct += 1
            print("✅ Correct.")
        else:
            print(f"❌ Incorrect. Correct answer: {question.answer_index}.")
        print(f"Rationale: {question.rationale}")
    record = store.update(lesson.slug, correct, len(questions))
    accuracy = record.accuracy * 100
    print(f"\nQuiz complete. {correct}/{len(questions)} correct. Cumulative accuracy: {accuracy:.1f}%")


def list_command() -> None:
    for lesson in list_lessons():
        print(f"{lesson.slug}: {lesson.title}")


def learn_command(slug: str) -> None:
    lesson = get_lesson(slug)
    print(format_lesson(lesson))


def quiz_command(slug: str, store: ProgressStore) -> None:
    lesson = get_lesson(slug)
    if not lesson.quiz:
        print("No quiz available for this lesson yet.")
        return
    run_quiz(lesson, store)


def reset_command(store: ProgressStore) -> None:
    store.reset()
    print("Progress cleared.")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Duolingo-style UxS learning CLI")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("list", help="List available lessons")

    learn_parser = subparsers.add_parser("learn", help="Show lesson drills and summary")
    learn_parser.add_argument("slug", help="Lesson slug to display")

    quiz_parser = subparsers.add_parser("quiz", help="Run a quiz for a lesson")
    quiz_parser.add_argument("slug", help="Lesson slug to quiz")

    subparsers.add_parser("reset", help="Clear stored progress")
    return parser


def main(argv: Iterable[str] | None = None) -> None:
    store = ProgressStore()
    parser = build_parser()
    args = parser.parse_args(argv)

    if args.command == "list":
        list_command()
    elif args.command == "learn":
        learn_command(args.slug)
    elif args.command == "quiz":
        quiz_command(args.slug, store)
    elif args.command == "reset":
        reset_command(store)
    else:
        parser.error("Unknown command")


if __name__ == "__main__":
    main()
