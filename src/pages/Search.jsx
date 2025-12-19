import React, { useMemo, useState } from 'react';
import { lessons } from '../utils/content';

const Search = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return lessons;
    return lessons.filter(
      (lesson) =>
        lesson.title.toLowerCase().includes(q) ||
        (lesson.key_terms && lesson.key_terms.join(' ').toLowerCase().includes(q)) ||
        lesson.body.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      <div className="app-card">
        <h2>Search lessons</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, text, key terms"
          style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid rgba(148,163,184,0.3)' }}
        />
      </div>
      <div className="grid">
        {results.map((lesson) => (
          <div key={lesson.slug} className="app-card">
            <h2>{lesson.title}</h2>
            <div className="small-text">Module {lesson.module} · Level {lesson.level}</div>
            <p className="lead">{lesson.body.slice(0, 140)}...</p>
            <div className="chip-row">
              {lesson.key_terms?.map((term) => (
                <span key={term} className="chip">{term}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
