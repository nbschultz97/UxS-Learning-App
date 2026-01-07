import matter from 'gray-matter';

const lessonFiles = import.meta.glob('/content/lessons/*.md', { query: '?raw', import: 'default', eager: true });
const quizFiles = import.meta.glob('/content/quizzes/*.json', { query: '?raw', import: 'default', eager: true });

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
