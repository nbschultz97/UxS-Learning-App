---
title: Safe Operator Discipline
slug: safe-operator
module: 1
role_tracks: ['UAS ISR operator track', 'FPV/ODB operator-builder track']
level: 1
difficulty: beginner
estimated_minutes: 12
prerequisites: ['orientation']
objectives:
  - Apply pre-flight and post-flight checklists consistently.
  - Conduct a basic operational risk assessment for UxS sorties.
  - Explain the purpose of geofencing and procedural deconfliction.
key_terms: ['ORM', 'geofence', 'deconfliction']
checklists:
  - Run mission brief: objective, terrain, weather, airspace, risk mitigations.
  - Verify firmware/config versions and battery health prior to launch.
  - Establish abort criteria and lost-link triggers.
failure_modes:
  - Launching with stale firmware or unknown configs.
  - Incomplete battery inspection causing mid-mission faults.
  - No abort criteria leading to indecision under stress.
references: []
---

### Field Checklist
- Execute pre-flight checklist with a second set of eyes.
- Confirm home point, geofence, and RTL parameters.
- Verify log capture for flight and RF telemetry.

### Failure Modes & What to check first
- **Unexpected behavior on arming:** re-validate config hash and sensor calibrations.
- **Poor link margin at takeoff:** inspect antennas, cabling, and clear LOS.
- **Crew confusion:** restate abort criteria and comms plan before launch.

### Knowledge Check
1. What is the purpose of a configuration baseline before flying?
2. Which items must be inspected on every battery prior to use?
3. How does a geofence reduce risk during training flights?
4. When should abort criteria be briefed to the team?
5. Why is log capture valuable even during training sorties?
