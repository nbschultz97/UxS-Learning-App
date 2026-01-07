import matter from 'gray-matter';

const lessonFiles = import.meta.glob('/content/lessons/*.md', { query: '?raw', import: 'default', eager: true });
const quizFiles = import.meta.glob('/content/quizzes/*.json', { query: '?raw', import: 'default', eager: true });

console.log('[Content] Raw lesson files object:', Object.keys(lessonFiles));
console.log('[Content] First file sample:', Object.entries(lessonFiles)[0]);

export const lessons = Object.entries(lessonFiles).map(([path, raw]) => {
  const { data, content } = matter(raw);
  return {
    path,
    ...data,
    body: content.trim(),
  };
});

console.log('[Content] Parsed lessons:', lessons.length, 'lessons loaded');
console.log('[Content] First lesson:', lessons[0]);

export const quizzes = Object.entries(quizFiles).map(([path, raw]) => ({
  path,
  ...JSON.parse(raw),
}));

export const lessonsByModule = (moduleNumber) => lessons.filter((lesson) => Number(lesson.module) === Number(moduleNumber));
