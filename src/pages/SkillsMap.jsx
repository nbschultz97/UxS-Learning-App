import React from 'react';

const skills = [
  'Mission & Team Integration',
  'UAS pilot skills (multirotor + fixed-wing concepts)',
  'UGV driver skills (concept-level)',
  'Build / Maintain / Repair',
  'Programming & autonomy',
  'Comms & RF link mastery',
  'EW & electromagnetic environment awareness',
  'C-UAS awareness + defensive habits',
  'ATAK/TAK integration',
  'Safety, risk, professional standards',
  'Operator mindset & crew roles under pressure',
];

const SkillsMap = () => (
  <div>
    <h2 className="section-title">Skills map (A–K)</h2>
    <ul className="list-compact">
      {skills.map((skill, idx) => (
        <li key={skill}>
          <strong>{String.fromCharCode(65 + idx)}.</strong> {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillsMap;
