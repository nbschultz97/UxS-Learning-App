---
title: "RF Spectrum Management & JRFL Protocols"
slug: "rf-spectrum-jrfl"
module: 3
role_tracks:
  - "RF mapping/passive sensing track"
  - "FPV/ODB operator-builder track"
  - "C-UAS specialist track"
level: 2
difficulty: "advanced"
estimated_minutes: 50
prerequisites:
  - "390a-role"
  - "odb-hardware"
objectives:
  - "Understand the Joint Restricted Frequency List (JRFL) and its classifications"
  - "Identify Taboo, Protected, and Guarded frequency categories"
  - "Apply RF brevity codes in tactical communications"
  - "Manage spectrum deconfliction in multi-platform operations"
  - "Recognize frequency coordination requirements for UxS operations"
key_terms:
  - "JRFL"
  - "Joint Restricted Frequency List"
  - "Taboo"
  - "Protected"
  - "Guarded"
  - "Spectrum Management"
  - "RF Deconfliction"
  - "Brevity Code"
  - "ISM Band"
  - "CEASE BUZZER"
  - "SPARKLE"
  - "TORCH"
  - "EW"
  - "Electronic Warfare"
checklists:
  - "Verify mission frequency plan is deconflicted with JRFL"
  - "Confirm C2 link frequency does not overlap with Protected bands"
  - "Coordinate with EW assets before RF transmission"
  - "Monitor spectrum analyzer for unauthorized emissions"
  - "Brief aircrew on RF brevity codes (CEASE BUZZER, SPARKLE, TORCH)"
  - "Log all frequency assignments in mission planning documentation"
failure_modes:
  - "Jamming friendly comms by operating on Protected frequencies"
  - "Fratricide risk due to lack of RF coordination with adjacent units"
  - "C2 link loss due to uncoordinated spectrum congestion"
  - "Inadvertent triggering of adversary RF sensors or direction-finding systems"
references: []
---

### Overview: RF Spectrum Management in Joint Operations

The electromagnetic spectrum is a **shared, contested resource**. In joint special operations, multiple units may simultaneously operate UAS, communications systems, electronic warfare (EW) assets, and counter-UAS platforms—all within the same airspace and RF environment.

The **Joint Restricted Frequency List (JRFL)** is the foundational tool for preventing fratricide, ensuring mission success, and maintaining operational security. Understanding JRFL classifications and RF brevity codes is **mandatory** for all 390A personnel.

**Key Principle:** If you transmit on the wrong frequency, you can:
- Jam friendly communications
- Compromise intelligence operations
- Trigger adversary countermeasures
- Cause mission failure

---

### The Joint Restricted Frequency List (JRFL)

The JRFL is a theater-specific list of frequencies that require special handling due to operational, safety, or intelligence considerations. Frequencies are classified into three primary categories:

1. **Taboo**
2. **Protected**
3. **Guarded**

Each classification dictates how friendly forces must interact with those frequencies.

---

### JRFL Category 1: Taboo Frequencies

**Definition:** Frequencies that must **NEVER** be jammed or interfered with under any circumstances.

**Purpose:** Taboo frequencies are reserved for:
- Emergency distress signals (e.g., 121.5 MHz, 243.0 MHz)
- International search and rescue (SAR) operations
- "Stop Buzzer" emergency cease-fire signals
- Critical safety-of-flight communications

**Operational Rule:** Taboo frequencies are **off-limits** for all friendly RF emissions, including:
- UAS C2 links
- Electronic warfare jamming
- Training exercises
- Testing

**Example Taboo Frequencies (Common):**

| Frequency | Purpose | Why Taboo |
|-----------|---------|-----------|
| **121.5 MHz** | Aviation distress (VHF) | International SAR standard |
| **243.0 MHz** | Military distress (UHF) | Emergency locator beacons |
| **406.0–406.1 MHz** | COSPAS-SARSAT satellite | Global distress alerting |

**Consequence of Violation:** Jamming a Taboo frequency can result in:
- Loss of life (SAR interference)
- International incident
- Court-martial or disciplinary action

**Brevity Code:**
- **"STOP BUZZER"** – Emergency signal to cease all RF emissions immediately

---

### JRFL Category 2: Protected Frequencies

**Definition:** Frequencies used by friendly forces that must be **protected from friendly jamming**.

**Purpose:** Protected frequencies are actively used by:
- Friendly communications networks (Blue Force Tracker, SATCOM)
- Friendly radar systems (ground-based air defense, fire control)
- Friendly UAS C2 links (ISR assets, strike platforms)
- Intelligence collection platforms (SIGINT, COMINT)

**Operational Rule:** You may **operate on** Protected frequencies if authorized, but you must:
- Coordinate with the owning unit
- Deconflict frequency assignments
- Avoid jamming or interfering with friendly transmissions

**Example Protected Frequencies (Theater-Specific):**

| Frequency Range | User | Coordination Required |
|-----------------|------|----------------------|
| **2.4 GHz ISM** | UAS C2 (ELRS, DJI) | Coordinate with adjacent units |
| **5.8 GHz ISM** | FPV video downlink | Avoid overlap with friendly ISR |
| **1.2 GHz** | Long-range video TX | Coordinate with airspace manager |

**Consequence of Violation:** Interfering with Protected frequencies can:
- Cause C2 link loss for friendly UAS (potential crash/loss)
- Disrupt mission-critical communications
- Create blue-on-blue fratricide risk

**Brevity Code:**
- **"CEASE BUZZER"** – Stop jamming (friendly interference detected)

---

### JRFL Category 3: Guarded Frequencies

**Definition:** Frequencies used by **adversary forces** that are being exploited for intelligence purposes.

**Purpose:** Guarded frequencies are:
- Enemy communications channels under SIGINT surveillance
- Adversary radar emissions being analyzed for patterns
- Hostile C2 links being monitored for tactical intelligence

**Operational Rule:** Do **NOT** jam or interfere with Guarded frequencies unless explicitly authorized by the supported intelligence unit.

**Why?** Jamming or disrupting a Guarded frequency can:
- Alert the adversary that they are being monitored
- Cause the enemy to switch to unknown frequencies (losing intelligence access)
- Disrupt ongoing SIGINT collection operations

**Example Scenario:**

A Guarded frequency might be a known adversary drone C2 link operating at **5.8 GHz**. Intelligence units are monitoring this link to:
- Track enemy UAS flight patterns
- Identify adversary tactics, techniques, and procedures (TTPs)
- Geolocate enemy operators via direction-finding

If you jam this frequency without coordination, the enemy may switch to a new, unknown frequency—and friendly forces lose visibility.

**Coordination Requirement:** Always coordinate with the **J2 (Intelligence)** or **J3 (Operations)** before engaging Guarded frequencies.

**Brevity Code:**
- **"GUARDED"** – Frequency is under friendly intelligence exploitation (do not jam)

---

### RF Brevity Codes for Tactical Operations

Brevity codes provide clear, concise communication in high-stress environments. The following codes are standard for SORD RF operations:

| Brevity Code | Meaning | Context |
|--------------|---------|---------|
| **CEASE BUZZER** | Stop all jamming immediately | Friendly interference detected |
| **STOP BUZZER** | Emergency cease-fire for all RF | Life-threatening distress signal |
| **SPARKLE** | IR pointer active (marking target) | Coordination with air support |
| **TORCH** | High-Energy Laser (HEL) firing | C-UAS directed energy weapon active |
| **GUARDED** | Frequency under SIGINT exploitation | Do not jam without authorization |
| **TABOO** | Frequency is off-limits (never jam) | Safety-critical or international distress |

**Usage Example:**

*Radio Call:*
> "All stations, this is TOC. CEASE BUZZER on 5.8 GHz. Friendly ISR asset inbound. How copy?"

*Response:*
> "TOC, this is FPV-1. Roger, CEASE BUZZER. Switching to 2.4 GHz. Out."

---

### Spectrum Deconfliction Process

Before launching any RF-emitting platform (UAS, EW asset, etc.), complete the following deconfliction checklist:

#### **Step 1: Identify All RF Emitters in Your Package**
- UAS C2 link (e.g., ELRS 2.4 GHz)
- Video downlink (e.g., 5.8 GHz analog or DJI digital)
- Telemetry (e.g., 915 MHz LoRa)
- GPS/GNSS (receive-only, but can be jammed)

#### **Step 2: Check JRFL for Restrictions**
- Cross-reference your frequencies against the theater JRFL
- Identify any Taboo, Protected, or Guarded frequencies in your band

#### **Step 3: Coordinate with Adjacent Units**
- Contact adjacent ground units (within 5km radius)
- Notify airspace manager of RF emissions
- Coordinate with EW assets (if present)

#### **Step 4: Log Frequency Assignments**
- Document all frequencies in mission planning materials
- Brief aircrew on RF brevity codes
- Establish contingency frequencies (in case of interference)

#### **Step 5: Monitor Spectrum During Mission**
- Use spectrum analyzer (e.g., TinySA, RF Explorer) to detect interference
- Be prepared to switch frequencies if deconfliction fails

---

### Common RF Bands for UxS Operations

Understanding which bands are commonly used helps anticipate deconfliction challenges:

| Band | Frequency Range | Typical Use | Congestion Level |
|------|-----------------|-------------|-----------------|
| **433 MHz** | 433.05–434.79 MHz | Telemetry, LoRa | Low (in US) |
| **915 MHz** | 902–928 MHz | Telemetry, LoRa | Medium (ISM band) |
| **1.2 GHz** | 1.2–1.3 GHz | Long-range video TX | Low |
| **2.4 GHz** | 2.4–2.5 GHz | C2 link (ELRS, Wi-Fi) | **Very High** |
| **5.8 GHz** | 5.8–5.9 GHz | FPV video downlink | **Very High** |

**Key Insight:** The **2.4 GHz** and **5.8 GHz** ISM bands are extremely crowded. Always assume interference and plan backup frequencies.

---

### ISM Band Considerations

The **Industrial, Scientific, and Medical (ISM)** bands are unlicensed, meaning anyone can use them without a license. This creates unique challenges:

**Advantages:**
- No licensing requirements
- Wide equipment availability
- Low regulatory burden

**Disadvantages:**
- High congestion (Wi-Fi, Bluetooth, consumer drones)
- Susceptible to unintentional interference
- No legal protection from other users

**Best Practices for ISM Band Operations:**
1. Use frequency-hopping protocols (e.g., ELRS, Crossfire)
2. Minimize transmit power (reduce interference footprint)
3. Use directional antennas when possible
4. Monitor spectrum before and during flight

---

### Failure Modes & Consequences

#### **Failure Mode 1: Operating on Protected Frequency Without Coordination**

**Scenario:** You launch an FPV drone on 5.8 GHz without checking if a friendly ISR asset is already using that frequency.

**Consequence:**
- Your video downlink jams the ISR platform's C2 link
- ISR platform loses control and crashes
- Mission failure + loss of expensive asset

**Mitigation:** Always coordinate with TOC and adjacent units before flight.

---

#### **Failure Mode 2: Jamming a Guarded Frequency**

**Scenario:** You use a C-UAS jammer on a known adversary drone frequency without coordinating with J2.

**Consequence:**
- Adversary detects jamming and switches to unknown frequency
- Friendly SIGINT loses track of enemy UAS operations
- Intelligence collection mission compromised

**Mitigation:** Coordinate with J2 before engaging any Guarded frequency.

---

#### **Failure Mode 3: Inadvertent Taboo Frequency Violation**

**Scenario:** Your UAS C2 link drifts into 243.0 MHz due to misconfiguration.

**Consequence:**
- Emergency distress signals are jammed
- Potential loss of life in SAR operations
- Court-martial or disciplinary action

**Mitigation:** Verify frequency plan before every mission; use frequency counters to confirm actual emissions.

---

### Knowledge Check

1. What are the three primary categories of the JRFL?
2. Why are Taboo frequencies never jammed?
3. What is the difference between Protected and Guarded frequencies?
4. What does "CEASE BUZZER" mean, and when would you use it?
5. Why is the 2.4 GHz ISM band considered "very high" congestion?
6. What is the deconfliction process before launching an RF-emitting UAS?

---

### Field Checklist: RF Spectrum Deconfliction

Use this checklist before every mission:

- [ ] Identify all RF emitters in mission package (C2, video, telemetry)
- [ ] Check theater JRFL for Taboo, Protected, Guarded frequencies
- [ ] Coordinate with adjacent units (within 5km radius)
- [ ] Notify airspace manager of RF emissions
- [ ] Coordinate with EW assets (if present)
- [ ] Log all frequency assignments in mission documentation
- [ ] Brief aircrew on RF brevity codes
- [ ] Test spectrum analyzer for interference monitoring
- [ ] Establish contingency frequencies (backup plan)
- [ ] Confirm all frequencies are clear before launch

---

### Summary

The **Joint Restricted Frequency List (JRFL)** is your guide to operating safely in the contested electromagnetic spectrum. Taboo frequencies must never be jammed, Protected frequencies require coordination, and Guarded frequencies must be left alone unless authorized. Always deconflict your RF emissions, use proper brevity codes, and monitor the spectrum during operations.

Failure to manage the spectrum correctly can result in mission failure, fratricide, or loss of life. **Know the JRFL. Use it every time.**
