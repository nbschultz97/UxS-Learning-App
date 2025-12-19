---
title: RF Link Fundamentals (Concept)
slug: rf-basics
module: 4
role_tracks: ['RF mapping/passive sensing track', 'Robotics/edge-compute integrator track']
level: 2
difficulty: intermediate
estimated_minutes: 16
prerequisites: ['safe-operator']
objectives:
  - Explain how antenna placement and polarization affect link margin.
  - Outline quick diagnostics for control/video/data link degradation.
  - Record basic RF observations for after-action reporting.
key_terms: ['polarization', 'line of sight', 'interference']
checklists:
  - Inspect antennas for damage, secure connectors, and orientation.
  - Map likely interference sources near launch and route.
  - Capture link stats: RSSI/SNR indicators, retries, and dropout times.
failure_modes:
  - Flying behind terrain or structures without planning for LOS.
  - Ignoring interference from own-ship electronics or nearby emitters.
  - Missing cable faults or loose mounts.
references: []
---

### Field Checklist
- Perform antenna alignment check with pilot holding expected orientation.
- Validate link on ground with short-range maneuver before committing.
- Document link health in notebook or digital log for trend tracking.

### Failure Modes & What to check first
- **Sudden link loss:** check antenna connectors and nearby emitters.
- **Consistent dropouts in turns:** assess polarization and body masking.
- **Weak control at range:** lower data rate or adjust route for better LOS.

### Knowledge Check
1. How does antenna polarization mismatch show up during flight?
2. Which quick checks help isolate whether interference is internal or external?
3. Why log link stats even when no incidents occur?
4. What terrain considerations help preserve line of sight?
5. How can teams mitigate self-interference on multi-radio platforms?
