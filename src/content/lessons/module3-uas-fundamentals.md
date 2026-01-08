---
title: UAS Fundamentals (Concept)
slug: uas-fundamentals
module: 3
role_tracks: ['UAS ISR operator track']
level: 2
difficulty: intermediate
estimated_minutes: 15
prerequisites: ['mission-crew']
objectives:
  - Describe multirotor vs fixed-wing tradeoffs for reconnaissance.
  - Outline basic launch/landing site selection considerations.
  - Identify link budget factors that influence control and video.
key_terms: ['multirotor', 'fixed-wing', 'link budget']
checklists:
  - Match platform to mission duration, terrain, and recovery constraints.
  - Verify compass/GNSS health and home location before launch.
  - Conduct hover/trim check before committing to route.
failure_modes:
  - Choosing the wrong platform for endurance or payload needs.
  - Launching from RF-cluttered areas without mitigation.
  - Skipping a control check leading to early aborts.
references: []
---

### Field Checklist
- Inspect airframe, props, and control link connectors.
- Validate mission route, altitude bands, and weather limits.
- Confirm takeoff/landing direction with wind and obstacles in mind.

### Failure Modes & What to check first
- **Short endurance:** re-evaluate payload weight and battery readiness.
- **Video breakup:** check antennas, LOS, and power output limitations.
- **Navigation drift:** recalibrate sensors and verify GNSS lock before takeoff.

### Knowledge Check
1. When is fixed-wing preferred over multirotor for reconnaissance?
2. What site factors matter most when selecting a launch/landing point?
3. How does payload weight impact endurance and link margin?
4. Why run a hover or trim check before departure?
5. What mitigations help when launching in RF-dense environments?
