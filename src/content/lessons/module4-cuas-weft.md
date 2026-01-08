---
title: "Counter-UAS & WEFT Visual Recognition"
slug: "cuas-weft"
module: 4
role_tracks:
  - "C-UAS specialist track"
  - "FPV/ODB operator-builder track"
  - "RF mapping/passive sensing track"
level: 2
difficulty: "advanced"
estimated_minutes: 55
prerequisites:
  - "390a-role"
  - "rf-spectrum-jrfl"
objectives:
  - "Apply WEFT (Wings, Engine, Fuselage, Tail) visual recognition methodology"
  - "Identify UAS Group classifications (Group 1, 2, 3, 4, 5)"
  - "Distinguish between commercial and military UAS platforms"
  - "Recognize visual discriminators for threat platforms (Shahed-131 vs Shahed-136)"
  - "Execute threat reporting procedures using standardized formats"
key_terms:
  - "WEFT"
  - "Wings"
  - "Engine"
  - "Fuselage"
  - "Tail"
  - "C-UAS"
  - "Counter-UAS"
  - "Group 1"
  - "Group 3"
  - "Shahed-136"
  - "Geran-2"
  - "Shahed-131"
  - "DJI Mavic 3"
  - "AGL"
  - "Above Ground Level"
  - "SALUTE"
  - "Threat Report"
checklists:
  - "Observe platform from multiple angles (if safe to do so)"
  - "Note wing configuration (fixed, rotary, hybrid)"
  - "Identify engine type (electric, combustion, jet)"
  - "Assess fuselage shape and size relative to known platforms"
  - "Examine tail configuration (V-tail, conventional, none)"
  - "Estimate altitude, speed, and heading"
  - "Report using SALUTE format (Size, Activity, Location, Unit, Time, Equipment)"
failure_modes:
  - "Misidentification of friendly UAS as hostile (fratricide risk)"
  - "Delayed threat reporting due to incomplete WEFT analysis"
  - "Inability to distinguish between commercial and military platforms"
  - "Failure to recognize visual discriminators for near-identical platforms"
references: []
---

### Overview: Counter-UAS & Visual Recognition

The proliferation of unmanned aerial systems (UAS) in both civilian and military contexts has created a complex threat environment. **Counter-UAS (C-UAS)** operations require rapid, accurate identification of airborne platforms to determine threat level and appropriate response.

The **WEFT methodology** (Wings, Engine, Fuselage, Tail) is the standard visual recognition framework used by military forces worldwide. Mastery of WEFT enables you to:

- Distinguish between friendly, neutral, and hostile UAS
- Assess threat capability (ISR, strike, loitering munition)
- Provide accurate threat reports to command elements
- Support C-UAS engagement decisions

**Critical Principle:** Misidentification can result in fratricide (shooting down friendly assets) or failure to engage actual threats. When in doubt, report and request clarification—never assume.

---

### WEFT Methodology

WEFT is an acronym representing the four primary visual characteristics used to identify aircraft and UAS:

1. **W – Wings:** Configuration, span, position (high/low/mid-wing)
2. **E – Engine:** Type (electric, combustion), quantity, placement
3. **F – Fuselage:** Shape, size, payload integration
4. **T – Tail:** Configuration (V-tail, conventional, inverted-V, none)

Each characteristic provides critical clues for identification. When combined, they create a unique "signature" for each platform.

---

### UAS Group Classifications

The U.S. Department of Defense categorizes UAS into five groups based on weight, altitude, and operational characteristics:

| Group | Weight | Altitude Ceiling | Speed | Typical Use |
|-------|--------|------------------|-------|-------------|
| **Group 1** | 0–20 lbs | <1,200 ft AGL | <100 kts | Tactical ISR, consumer drones |
| **Group 2** | 21–55 lbs | <3,500 ft AGL | <250 kts | Company-level ISR |
| **Group 3** | 56–1,320 lbs | <18,000 ft MSL | <250 kts | Tactical strike, loitering munitions |
| **Group 4** | >1,320 lbs | <18,000 ft MSL | Any speed | Operational ISR (e.g., MQ-1 Predator) |
| **Group 5** | >1,320 lbs | >18,000 ft MSL | Any speed | Strategic ISR (e.g., MQ-9 Reaper) |

**For SORD operations, focus on:**
- **Group 1:** Most common threat (consumer drones, small FPV)
- **Group 3:** Loitering munitions and one-way attack platforms (e.g., Shahed-136)

---

### Group 1 UAS: Small Commercial & FPV Drones

**Characteristics:**
- **Weight:** 0–20 lbs (0–9 kg)
- **Altitude:** Typically <400 ft AGL (regulatory limit for most consumer drones)
- **Range:** 1–10 km (depending on platform and C2 link)
- **Endurance:** 15–45 minutes

**Common Platforms:**

#### **DJI Mavic 3 (Commercial ISR)**

**WEFT Analysis:**

- **Wings:** Quadcopter (4 rotors, X-configuration)
- **Engine:** Electric brushless motors (4x)
- **Fuselage:** Compact, foldable arms, gimbal-stabilized camera underneath
- **Tail:** None (multirotor)

**Visual Discriminators:**
- Foldable arms (distinctive "X" shape when deployed)
- Visible gimbal camera on nose
- Size: Approximately 9 inches (rotor-to-rotor when folded)
- Color: Typically gray or black

**Threat Profile:**
- **ISR:** High-resolution camera (4K video, 20MP stills)
- **Range:** Up to 15 km with DJI O3 transmission
- **Altitude:** Capable of 6,000m MSL (typically operated <500 ft AGL)

**C-UAS Response:**
- **Low Threat:** Primarily ISR; non-explosive payload
- **Mitigation:** RF jamming (2.4 GHz / 5.8 GHz), kinetic (small arms), net capture

---

#### **FPV Racing/Attack Drone (One-Way Strike)**

**WEFT Analysis:**

- **Wings:** Quadcopter or hexacopter (4–6 rotors)
- **Engine:** Electric brushless motors (high-KV, 2300–2600KV)
- **Fuselage:** Minimalist carbon fiber frame, exposed components
- **Tail:** None (multirotor)

**Visual Discriminators:**
- Exposed carbon fiber frame (no enclosure)
- Visible flight controller and wiring
- Often carries visible payload (e.g., shaped charge, grenade)
- Fast, erratic flight profile (capable of 100+ mph)

**Threat Profile:**
- **Strike:** One-way attack with explosive payload (0.5–2 lbs)
- **Range:** 1–3 km (ELRS or Crossfire C2 link)
- **Speed:** 100+ mph in dive (70+ mph cruise)

**C-UAS Response:**
- **High Threat:** Imminent strike capability
- **Mitigation:** Kinetic (small arms, shotgun), RF jamming (2.4 GHz), directed energy (laser)

---

### Group 3 UAS: Loitering Munitions & Strike Platforms

**Characteristics:**
- **Weight:** 56–1,320 lbs (25–600 kg)
- **Altitude:** Up to 18,000 ft MSL (typical operating altitude: 1,000–5,000 ft AGL)
- **Range:** 10–500 km (depending on platform)
- **Endurance:** 2–24 hours

**Common Threat Platforms:**

---

#### **Shahed-136 / Geran-2 (Iranian Loitering Munition)**

**WEFT Analysis:**

- **Wings:** Delta-wing configuration (swept-back, triangular)
- **Engine:** Pusher propeller (rear-mounted, single engine, combustion)
- **Fuselage:** Elongated, streamlined body (approximately 3.5m length)
- **Tail:** Inverted-V stabilizers (extend **above and below** the wing)

**Visual Discriminators:**
- **Tail Configuration:** Shahed-136 has inverted-V stabilizers that extend **both above and below** the trailing edge of the wing (critical discriminator)
- **Engine Noise:** Loud, distinct "buzzing" sound from pusher propeller (audible at >1 km distance)
- **Size:** 3.5m length, 2.5m wingspan
- **Color:** Typically white or light gray

**Threat Profile:**
- **Strike:** One-way attack (loitering munition)
- **Warhead:** 30–50 kg high-explosive
- **Range:** 2,000+ km (with waypoint navigation)
- **Speed:** 185 km/h (115 mph) cruise

**Operational Behavior:**
- Pre-programmed GPS waypoint navigation (minimal C2 link required)
- Loiters over target area before diving to strike
- Often launched in swarms (multiple units attacking simultaneously)

**C-UAS Response:**
- **Critical Threat:** Large warhead, high accuracy
- **Mitigation:** Long-range air defense (MANPADS, gun systems), RF jamming (GPS spoofing), kinetic intercept

---

#### **Shahed-131 (Smaller Variant)**

**WEFT Analysis:**

- **Wings:** Delta-wing configuration (similar to Shahed-136)
- **Engine:** Pusher propeller (rear-mounted, single engine, combustion)
- **Fuselage:** Shorter, more compact (approximately 2.6m length)
- **Tail:** Inverted-V stabilizers (extend **only above** the wing)

**Critical Visual Discriminator:**

**Shahed-131 vs. Shahed-136 Tail Comparison:**

- **Shahed-131:** Stabilizers extend **only above** the trailing edge of the wing
- **Shahed-136:** Stabilizers extend **both above and below** the trailing edge of the wing

**Mnemonic Device:**
- **131 = "One-Thirty-One" = "One side" (above only)**
- **136 = "One-Thirty-Six" = "Sandwich" (above and below)**

**Threat Profile:**
- **Strike:** One-way attack (loitering munition)
- **Warhead:** 15–30 kg high-explosive (smaller than Shahed-136)
- **Range:** 900 km
- **Speed:** 185 km/h (115 mph) cruise

**C-UAS Response:**
- **High Threat:** Smaller warhead, but still significant
- **Mitigation:** Same as Shahed-136 (air defense, RF jamming, kinetic)

---

### WEFT Recognition Drills

To build proficiency, practice the following recognition drills:

#### **Drill 1: Static Image Identification**
- Review photos/videos of known platforms
- Apply WEFT methodology systematically (don't skip steps)
- Identify group classification (1, 2, 3, 4, 5)

#### **Drill 2: Silhouette Recognition**
- Study platform silhouettes from multiple angles (top, side, front)
- Practice rapid identification (<5 seconds)
- Focus on tail and wing configurations (most distinctive features)

#### **Drill 3: Audio Recognition**
- Listen to engine sounds (electric vs. combustion)
- Distinguish between multirotor buzz and fixed-wing propeller
- Recognize Shahed-136 "buzzing" signature

#### **Drill 4: Field Observation**
- Observe friendly UAS during training
- Practice estimating altitude, speed, heading
- Compare observed characteristics to known platform specs

---

### Threat Reporting: SALUTE Format

When you observe a potential threat UAS, report using the **SALUTE** format:

**S – Size:** Number of platforms, physical dimensions
**A – Activity:** What is it doing? (loitering, transiting, diving)
**L – Location:** Grid coordinates, landmark reference
**U – Unit:** Platform type (if identified) or "Unknown UAS"
**T – Time:** Observation time (ZULU time)
**E – Equipment:** Visible payload, camera, weapons

**Example SALUTE Report:**

> "TOC, this is OP-1. SALUTE report follows:
> **Size:** Single platform, estimated 3-meter wingspan.
> **Activity:** Loitering at low altitude, circling overhead.
> **Location:** Grid 38T LK 123 456, approximately 500 meters west of checkpoint Alpha.
> **Unit:** Possible Shahed-136, delta wing with inverted-V tail extending above and below wing.
> **Time:** 1430 ZULU.
> **Equipment:** No visible payload, but consistent with loitering munition profile.
> Request guidance on C-UAS engagement. How copy?"

**Response Time:** Transmit SALUTE report within **60 seconds** of initial observation.

---

### Visual Recognition Cheat Sheet

| Platform | Wing Type | Engine | Tail | Key Discriminator |
|----------|-----------|--------|------|-------------------|
| **DJI Mavic 3** | Quadcopter | Electric (4x) | None | Foldable arms, gimbal camera |
| **FPV Drone** | Quad/Hex | Electric | None | Exposed carbon frame, fast/erratic |
| **Shahed-131** | Delta | Pusher prop | Inverted-V (above only) | Stabilizers above wing only |
| **Shahed-136** | Delta | Pusher prop | Inverted-V (above & below) | Stabilizers above + below wing |

**Memory Aid:** "Tail tells the tale" — When in doubt, focus on tail configuration first.

---

### Common Identification Errors

#### **Error 1: Confusing Friendly FPV with Hostile**

**Scenario:** A friendly FPV operator launches a training sortie without notifying adjacent units. Observer reports as hostile.

**Prevention:**
- Coordinate all UAS flights with TOC and adjacent units
- Use visual markers (e.g., colored LEDs, tape) on friendly platforms
- Establish no-fly zones for deconfliction

---

#### **Error 2: Misidentifying Shahed-131 as Shahed-136**

**Scenario:** Observer reports Shahed-136, but platform is actually the smaller Shahed-131.

**Impact:** Overestimation of threat (warhead size, range)

**Prevention:**
- Focus on tail discriminator (above only vs. above + below)
- Estimate size relative to known landmarks (3.5m vs. 2.6m)

---

#### **Error 3: Assuming All Quadcopters are Non-Threatening**

**Scenario:** Observer dismisses a quadcopter as "just a DJI," but it's carrying an explosive payload.

**Impact:** Failure to report imminent threat

**Prevention:**
- **Never assume intent based on platform type alone**
- Report all unidentified UAS, regardless of appearance
- Use binoculars/optics to identify payload

---

### Knowledge Check

1. What does WEFT stand for?
2. What is the altitude ceiling for Group 1 UAS?
3. What is the key visual discriminator between Shahed-131 and Shahed-136?
4. What is the SALUTE format, and why is it important?
5. Name two C-UAS mitigation techniques for Group 1 UAS.
6. Why is it critical to report all unidentified UAS, even if they appear to be commercial?

---

### Field Checklist: UAS Threat Identification

Use this checklist when observing a potential threat UAS:

- [ ] Observe platform from multiple angles (if safe)
- [ ] Apply WEFT methodology (Wings, Engine, Fuselage, Tail)
- [ ] Estimate altitude, speed, and heading
- [ ] Note any visible payload or equipment
- [ ] Classify by group (1, 2, 3, 4, 5)
- [ ] Check for visual discriminators (Shahed tail configuration, etc.)
- [ ] Prepare SALUTE report (Size, Activity, Location, Unit, Time, Equipment)
- [ ] Transmit report to TOC within 60 seconds
- [ ] Maintain observation (if safe) and provide updates
- [ ] Await C-UAS engagement guidance from command

---

### Failure Modes & Consequences

**Failure Mode 1: Delayed Threat Reporting**

**Consequence:** Insufficient time for C-UAS response; platform reaches target

**Mitigation:** Pre-brief SALUTE format; practice recognition drills regularly

---

**Failure Mode 2: Misidentification Leading to Fratricide**

**Consequence:** Friendly UAS shot down; loss of asset and mission failure

**Mitigation:** Always coordinate UAS flights; use IFF (Identification Friend or Foe) when available

---

**Failure Mode 3: Inability to Distinguish Between Similar Platforms**

**Consequence:** Incorrect threat assessment; improper C-UAS response

**Mitigation:** Focus on tail and wing discriminators; use reference materials (photos, silhouettes)

---

### Summary

The **WEFT methodology** is your primary tool for visual UAS identification. Focus on **Group 1** (commercial and FPV drones) and **Group 3** (loitering munitions like Shahed-136) as the most common threats. Always apply the full WEFT analysis, use the **SALUTE** reporting format, and never assume intent based on appearance alone.

**Remember:** The tail tells the tale. Shahed-131 stabilizers extend only above the wing; Shahed-136 extends both above and below.

Stay vigilant. Report accurately. Your identification saves lives.
