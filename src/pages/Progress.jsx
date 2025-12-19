import React, { useEffect, useState } from 'react';

const levelKeys = [
  'Level 0 Orientation',
  'Level 1 Safe Operator',
  'Level 2 Mission Crew',
  'Level 3 Role Specialist',
  'Level 4 Integrator/Lead',
  'Level 5 Standardization/COE contributor',
];

const storageKey = 'uxs-progress-levels';

const Progress = () => {
  const [complete, setComplete] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(complete));
  }, [complete]);

  const toggle = (level) => {
    setComplete((prev) => ({ ...prev, [level]: !prev[level] }));
  };

  const completedCount = Object.values(complete).filter(Boolean).length;

  return (
    <div className="app-card">
      <h2>Progress & Levels</h2>
      <p className="lead">Track gating progress. Levels unlock as lessons, quizzes, and drills are completed.</p>
      <div className="small-text">Completed: {completedCount} / {levelKeys.length}</div>
      <ul className="list-compact">
        {levelKeys.map((level) => (
          <li key={level} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{level}</span>
            <input type="checkbox" checked={!!complete[level]} onChange={() => toggle(level)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
