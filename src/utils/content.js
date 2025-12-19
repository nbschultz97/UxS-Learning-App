import matter from 'gray-matter';

const lessonFiles = import.meta.glob('../content/lessons/*.md', { as: 'raw', eager: true });
const quizFiles = import.meta.glob('../content/quizzes/*.json', { as: 'raw', eager: true });

export const lessons = Object.entries(lessonFiles).map(([path, raw]) => {
  const { data, content } = matter(raw);
  return {
    path,
    ...data,
    body: content.trim(),
  };
});

export const quizzes = Object.entries(quizFiles).map(([path, raw]) => ({
  path,
  ...JSON.parse(raw),
}));

export const lessonsByModule = (moduleNumber) => lessons.filter((lesson) => Number(lesson.module) === Number(moduleNumber));
