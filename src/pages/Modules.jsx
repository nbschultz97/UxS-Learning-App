import React from 'react';
import { lessonsByModule } from '../utils/content';

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

const Modules = () => (
  <div>
    <h2 className="section-title">Modules 0-8</h2>
    <div className="grid columns-2">
      {moduleMeta.map((module) => {
        const lessons = lessonsByModule(module.id);
        return (
          <div key={module.id} className="app-card">
            <h2>
              Module {module.id}: {module.title}
            </h2>
            <p className="lead">{module.focus}</p>
            <ul className="list-compact">
              {lessons.length > 0 ? (
                lessons.map((lesson) => (
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

export default Modules;
