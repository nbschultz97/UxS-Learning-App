from uxs_app.lessons import LESSONS, get_lesson, list_lessons


def test_lessons_present():
    expected = {"doctrine", "fpv", "rpi", "programming", "ew", "cuas", "mobility"}
    assert expected.issubset(set(LESSONS.keys()))


def test_get_lesson_returns_expected_instance():
    lesson = get_lesson("fpv")
    assert lesson.slug == "fpv"
    assert lesson.title.startswith("FPV")
    assert lesson.quiz


def test_list_lessons_sorted():
    slugs = [lesson.slug for lesson in list_lessons()]
    assert slugs == sorted(slugs)
