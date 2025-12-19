import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="grid">
    <section className="app-card">
      <h2>Special Operations Robotics Operator Path</h2>
      <p className="lead">
        Mobile-first learning for mission-focused robotics crews. Track modules, roles, drills,
        and references with offline-friendly progress.
      </p>
      <div className="chip-row">
        <span className="chip">Modules 0-8</span>
        <span className="chip">Role tracks</span>
        <span className="chip">Drills</span>
        <span className="chip">Progress gating</span>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Link className="button-link" to="/modules">Start Modules</Link>
        <Link className="button-link" to="/roles" style={{ background: 'rgba(6, 182, 212, 0.2)', color: '#e0f2fe', border: '1px solid rgba(6, 182, 212, 0.6)' }}>View Roles</Link>
      </div>
    </section>
    <section className="app-card">
      <h2>Crew Roles (quick reference)</h2>
      <ul className="list-compact">
        {['Mission Lead', 'Pilot/Driver', 'Payload/Sensor', 'TAK/Comms', 'Maintainer/Integrator', 'Security/Recovery'].map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </section>
    <section className="app-card">
      <h2>Next actions</h2>
      <ul className="list-compact">
        <li>Complete Orientation and Safe Operator modules.</li>
        <li>Run Setup/Teardown and Link Triage drills.</li>
        <li>Review References for doctrine-aligned resources.</li>
      </ul>
    </section>
  </div>
);

export default Home;
