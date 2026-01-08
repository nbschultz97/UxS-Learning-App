import React from 'react';
import { lessonsByModule, lessons } from '../utils/content';

const moduleMeta = [
  { id: 0, title: 'Orientation', focus: 'Mission set overview and safety pillars.' },
  { id: 1, title: 'Safe Operator', focus: 'Checklists, risk assessments, crew coordination.' },
  { id: 2, title: 'Mission Crew', focus: 'Crew roles, briefs, rehearsals, reporting.' },
  { id: 3, title: 'Role Specialist', focus: 'Platform-specific piloting and sensors.' },
  { id: 4, title: 'Integrator/Lead', focus: 'Networked effects, TAK workflows, RF hygiene.' },
  { id: 5, title: 'COE Contributor', focus: 'Standardization, instruction, and feedback loops.' },
  { id: 6, title: 'Advanced Autonomy', focus: 'Scripting, logs, autonomy safeguards.' },
  { id: 7, title: 'EW & C-UAS Awareness', focus: 'Concept-level threat awareness and mitigations.' },
  { id: 8, title: 'Capstone', focus: 'End-to-end crew validation and after-action learning.' },
];

const Modules = () => {
  // Defensive: ensure lessons is always an array
  const allLessons = Array.isArray(lessons) ? lessons : [];
  const lessonCount = allLessons.length;

  return (
    <div>
      <div style={{ background: '#fef3c7', border: '2px solid #f59e0b', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#92400e' }}>🔍 Debug Info</h3>
        <p style={{ margin: '0.25rem 0', fontSize: '14px' }}><strong>Total lessons:</strong> {lessonCount}</p>
        <p style={{ margin: '0.25rem 0', fontSize: '14px' }}><strong>Module 0:</strong> {lessonsByModule(0).length}</p>
        <p style={{ margin: '0.25rem 0', fontSize: '14px' }}><strong>Module 2:</strong> {lessonsByModule(2).length}</p>
        <p style={{ margin: '0.25rem 0', fontSize: '14px' }}><strong>Module 4:</strong> {lessonsByModule(4).length}</p>
        {lessonCount > 0 && (
          <details style={{ marginTop: '0.5rem' }}>
            <summary style={{ cursor: 'pointer', fontSize: '14px' }}>Show all lessons</summary>
            <ul style={{ fontSize: '12px', marginTop: '0.5rem' }}>
              {allLessons.map((l, i) => (
                <li key={i}>M{l.module}: {l.title || 'NO TITLE'}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
      <h2 className="section-title">Modules 0-8</h2>
      <div className="grid columns-2">
      {moduleMeta.map((module) => {
        const moduleLessons = lessonsByModule(module.id);
        return (
          <div key={module.id} className="app-card">
            <h2>
              Module {module.id}: {module.title}
            </h2>
            <p className="lead">{module.focus}</p>
            <ul className="list-compact">
              {moduleLessons.length > 0 ? (
                moduleLessons.map((lesson) => (
                  <li key={lesson.slug}>
                    <strong>{lesson.title}</strong>
                    <div className="small-text">Level {lesson.level} · {lesson.estimated_minutes} min</div>
                  </li>
                ))
              ) : (
                <li className="small-text">Lessons coming soon.</li>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Modules;
