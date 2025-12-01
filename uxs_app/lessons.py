"""Static lesson content for the UxS Learning App.

The structure keeps everything offline-friendly and easy to extend.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List


@dataclass
class QuizQuestion:
    prompt: str
    options: List[str]
    answer_index: int
    rationale: str


@dataclass
class Lesson:
    slug: str
    title: str
    summary: str
    drills: List[str]
    quiz: List[QuizQuestion] = field(default_factory=list)


LESSONS: Dict[str, Lesson] = {
    "doctrine": Lesson(
        slug="doctrine",
        title="Army Doctrine Foundations",
        summary=(
            "Core principles for employing small UxS assets in accordance with Army"
            " doctrine—prioritizing risk management, deconfliction, and reporting"
            " discipline."
        ),
        drills=[
            "Review ATP 3-04.18 and draft a 5-line UAS mission request for your team.",
            "Map reporting triggers to SALUTE format for observations during UxS missions.",
            "Define success criteria for an RSTA (Reconnaissance, Surveillance, and Target"
            " Acquisition) lane using UAS."
        ],
        quiz=[
            QuizQuestion(
                prompt="What is the primary purpose of a 5-line UAS request?",
                options=[
                    "Authorize lethal engagement",
                    "Align airspace, mission intent, and risk controls",
                    "Request weather products",
                    "Initiate call for fire"
                ],
                answer_index=1,
                rationale="The 5-line ensures mission, airspace, and risk are coordinated."
            ),
            QuizQuestion(
                prompt="Which report format captures observed enemy activity from a UAS?",
                options=["SALUTE", "SPOTREP", "LACE", "SITREP"],
                answer_index=0,
                rationale="SALUTE standardizes Size, Activity, Location, Unit, Time, and Equipment."
            ),
        ],
    ),
    "fpv": Lesson(
        slug="fpv",
        title="FPV Drones: Build and Fly",
        summary=(
            "Hands-on FPV setup covering soldering, PID tuning, prop selection, and"
            " preflight checklists for contested environments."
        ),
        drills=[
            "Flash Betaflight and verify receiver binding on a 5-inch quad.",
            "Run a preflight: props-off radio check, failsafe test, and GPS lock verification.",
            "Practice LOS hover with altitude holds disabled to build manual stick skills."
        ],
        quiz=[
            QuizQuestion(
                prompt="Why conduct a failsafe test before flight?",
                options=[
                    "To confirm video link clarity",
                    "To validate craft response to lost control link",
                    "To calibrate compass",
                    "To adjust VTX power"
                ],
                answer_index=1,
                rationale="Failsafe testing ensures the craft disarms or returns safely on link loss."
            ),
            QuizQuestion(
                prompt="What do higher KV motors generally provide?",
                options=["More torque at low RPM", "Longer flight time", "Higher RPM capability", "Reduced electrical noise"],
                answer_index=2,
                rationale="Higher KV motors spin faster given the same voltage, trading efficiency for agility."
            ),
        ],
    ),
    "rpi": Lesson(
        slug="rpi",
        title="Raspberry Pi for Edge Autonomy",
        summary=(
            "Deploying mission-tuned images, hardening interfaces, and managing sensors"
            " on Pi 4/5 for autonomous tasks."
        ),
        drills=[
            "Write an Ansible playbook to harden SSH and enable UFW on the Pi.",
            "Deploy a CSI capture script and log data to tmpfs to minimize SD wear.",
            "Benchmark CPU/GPU utilization while running a lightweight pose model stub."
        ],
        quiz=[
            QuizQuestion(
                prompt="Why log to tmpfs during rapid prototyping?",
                options=["It increases SD card endurance", "It accelerates Wi-Fi", "It improves radio range", "It reduces CPU load"],
                answer_index=0,
                rationale="Tmpfs avoids excessive writes that prematurely wear microSD media."
            ),
            QuizQuestion(
                prompt="Which interface should be disabled if unused on a deployed Pi for security?",
                options=["UART", "I2C", "Unused wireless radios", "SPI"],
                answer_index=2,
                rationale="Turning off unused wireless reduces attack surface and emissions."
            ),
        ],
    ),
    "programming": Lesson(
        slug="programming",
        title="Python and Autonomy Control",
        summary=(
            "Writing resilient Python 3.9+ control loops, asyncio telemetry bridges, and"
            " modular drivers that stay compatible with CSI-based pose detection."
        ),
        drills=[
            "Build a CLI that polls telemetry over UDP and logs JSON lines to disk.",
            "Simulate a waypoint loop with watchdog timers to force safe hover on error.",
            "Stub a CSI pose estimation module and ensure drivers can swap in later."
        ],
        quiz=[
            QuizQuestion(
                prompt="Why favor asyncio for telemetry ingest?",
                options=["It hides exceptions", "It simplifies blocking I/O", "It scales concurrent sockets efficiently", "It accelerates CPU-bound tasks"],
                answer_index=2,
                rationale="Asyncio keeps multiple I/O channels responsive on constrained hardware."
            ),
            QuizQuestion(
                prompt="What is a safe pattern for sensor driver design?",
                options=["Global mutable state", "Tight coupling to UI", "Clear interfaces with dependency injection", "Thread-only callbacks"],
                answer_index=2,
                rationale="Defined interfaces let you swap drivers (e.g., CSI capture) without breaking control code."
            ),
        ],
    ),
    "ew": Lesson(
        slug="ew",
        title="Electronic Warfare Awareness",
        summary=(
            "Spectrum fundamentals, emission control (EMCON), and deconfliction for UxS"
            " teams working in congested or denied environments."
        ),
        drills=[
            "Profile local spectrum with a handheld SDR and log interferers by time/frequency.",
            "Develop an EMCON checklist covering VTX power, beacon rates, and Wi-Fi channels.",
            "Plan a primary/alternate communications scheme with frequency offsets."
        ],
        quiz=[
            QuizQuestion(
                prompt="Why lower beacon rates on Wi-Fi control links?",
                options=["Reduce CPU usage", "Minimize RF signature and channel occupancy", "Increase throughput", "Boost GPS accuracy"],
                answer_index=1,
                rationale="Lower beaconing reduces unnecessary airtime and emissions."
            ),
            QuizQuestion(
                prompt="What is the risk of operating near civilian LTE bands?",
                options=["Higher GPS drift", "Interference with and from broadband systems", "Reduced battery life", "Increased motor heat"],
                answer_index=1,
                rationale="LTE interference can degrade control/video links and create detectability issues."
            ),
        ],
    ),
    "cuas": Lesson(
        slug="cuas",
        title="Counter-UAS Fundamentals",
        summary=(
            "Detection, identification, and defeat considerations aligned with CUAS TTPs"
            " and rules of engagement."
        ),
        drills=[
            "Map likely UAS ingress routes and assign observation sectors.",
            "Pair visual spotters with RF detectors and compare detection latency.",
            "Document escalation steps: detect, track, decision, defeat."],
        quiz=[
            QuizQuestion(
                prompt="What is the first action after detecting a hostile UAS?",
                options=["Jam immediately", "Report and maintain track while following ROE", "Disable local Wi-Fi", "Shut down generators"],
                answer_index=1,
                rationale="Detection should trigger reporting and tracking within the ROE before action."
            ),
            QuizQuestion(
                prompt="Why fuse visual and RF sensing?",
                options=["To reduce operator workload", "To validate detections and improve tracking", "To increase VTX power", "To bypass line-of-sight"],
                answer_index=1,
                rationale="Fusion cross-checks detections and reduces false positives."
            ),
        ],
    ),
    "mobility": Lesson(
        slug="mobility",
        title="Mobility and Launch Techniques",
        summary=(
            "Rapid setup/teardown, launch/recovery drills, and pack-out discipline for"
            " small UxS teams."
        ),
        drills=[
            "Practice 90-second launch from pack to airborne with checklist validation.",
            "Repack ground control station with cables coiled and labeled for night ops.",
            "Track battery swaps and temperature to prevent inflight sag."],
        quiz=[
            QuizQuestion(
                prompt="Why standardize pack layout?",
                options=["Looks professional", "Supports muscle memory and rapid checks", "Reduces RF noise", "Improves GPS lock"],
                answer_index=1,
                rationale="Consistent layout speeds retrieval and verification under stress."
            ),
            QuizQuestion(
                prompt="What should be logged for every battery?",
                options=["ESC firmware", "Prop brand", "Charge cycles and IR/temperature", "Motor KV"],
                answer_index=2,
                rationale="Tracking cycles and internal resistance helps predict sag and failures."
            ),
        ],
    ),
}


def get_lesson(slug: str) -> Lesson:
    """Retrieve a lesson by slug, raising KeyError when missing."""
    return LESSONS[slug]


def list_lessons() -> List[Lesson]:
    """Return all lessons in a stable order by slug."""
    return [LESSONS[key] for key in sorted(LESSONS.keys())]
