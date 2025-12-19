import React from 'react';

const drills = [
  'Setup/teardown discipline drill',
  'Link triage drill',
  'Lost-link / degraded navigation immediate actions',
  'Crash recovery + battery incident response',
  'ATAK report drill',
  'C-UAS detect → cue → report drill',
  'Sustained ops drill',
];

const Drills = () => (
  <div>
    <h2 className="section-title">Drill library</h2>
    <ul className="list-compact">
      {drills.map((drill) => (
        <li key={drill}>{drill}</li>
      ))}
    </ul>
  </div>
);

export default Drills;
