import matter from 'gray-matter';

const lessonFiles = import.meta.glob('../content/lessons/*.md', { query: '?raw', import: 'default', eager: true });
const quizFiles = import.meta.glob('../content/quizzes/*.json', { query: '?raw', import: 'default', eager: true });

// Parse lesson files with error handling
export const lessons = (() => {
  try {
    const entries = Object.entries(lessonFiles || {});
    if (entries.length === 0) return [];

    return entries.map(([path, raw]) => {
      const { data, content } = matter(raw);
      return {
        path,
        ...data,
        body: content.trim(),
      };
    });
  } catch (error) {
    console.error('Error loading lessons:', error);
    return [];
  }
})();

// Parse quiz files with error handling
export const quizzes = (() => {
  try {
    const entries = Object.entries(quizFiles || {});
    return entries.map(([path, raw]) => ({
      path,
      ...JSON.parse(raw),
    }));
  } catch (error) {
    console.error('Error loading quizzes:', error);
    return [];
  }
})();

export const lessonsByModule = (moduleNumber) => {
  try {
    return lessons.filter((lesson) => Number(lesson.module) === Number(moduleNumber));
  } catch (error) {
    console.error('Error filtering lessons by module:', error);
    return [];
  }
};
