import React from 'react';

const tracks = [
  'UAS ISR operator track',
  'FPV/ODB operator-builder track',
  'RF mapping/passive sensing track',
  'C-UAS specialist track',
  'Robotics/edge-compute integrator track',
  'Additive/CAD sustainment track',
];

const Roles = () => (
  <div>
    <h2 className="section-title">Role tracks</h2>
    <div className="grid columns-2">
      {tracks.map((track) => (
        <div key={track} className="app-card">
          <h2>{track}</h2>
          <p className="lead">Progression-aligned tasks and lessons tailored to this lane.</p>
          <div className="chip-row">
            <span className="chip">Levels</span>
            <span className="chip">Linked drills</span>
            <span className="chip">References</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Roles;
