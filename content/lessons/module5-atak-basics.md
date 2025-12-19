---
title: ATAK/TAK Integration Basics
slug: atak-basics
module: 5
role_tracks: ['UAS ISR operator track', 'C-UAS specialist track']
level: 2
difficulty: intermediate
estimated_minutes: 12
prerequisites: ['mission-crew']
objectives:
  - Explain how to publish position and sensor markers to TAK for team awareness.
  - Configure channels/rooms for training events with proper labeling.
  - Capture quick reports using standard fields: marker, timestamp, confidence, narrative.
key_terms: ['ATAK', 'marker', 'confidence']
checklists:
  - Verify device time sync and maps offline cached before movement.
  - Create mission-specific channel with clear naming and access control.
  - Test location and chat updates before leaving staging area.
failure_modes:
  - Out-of-sync time leading to confusing tracks.
  - Using default channels that leak location beyond intended audience.
  - Reports missing key fields for follow-on action.
references: []
---

### Field Checklist
- Confirm map packages and imagery cached for the area.
- Add team markers for launch/recovery points and hazards.
- Send a test report with marker + timestamp + confidence + short narrative.

### Failure Modes & What to check first
- **No updates on teammate devices:** check network path (cell, Wi-Fi, mesh) and channel permissions.
- **Marker clutter:** agree on naming conventions and delete stale markers.
- **Inaccurate time stamps:** resync device clock before mission.

### Knowledge Check
1. What fields make an effective TAK report?
2. Why is time synchronization important for TAK overlays?
3. How should channels be set up for a training event?
4. What steps ensure offline maps are available?
5. How do you handle marker clutter after an evolution?
