---
title: "ODB Hardware & Flight Stack Architecture"
slug: "odb-hardware"
module: 2
role_tracks:
  - "FPV/ODB operator-builder track"
  - "Robotics/edge-compute integrator track"
  - "Additive/CAD sustainment track"
level: 1
difficulty: "intermediate"
estimated_minutes: 45
prerequisites:
  - "390a-role"
objectives:
  - "Understand the SpeedyBee F405 V4 flight controller architecture and specifications"
  - "Identify key components: MCU, gyro, ESC, and C2 link"
  - "Implement Betaflight Two-Stage Failsafe logic"
  - "Diagnose common hardware failures and field repairs"
  - "Configure ELRS 2.4GHz C2 link for optimal performance"
key_terms:
  - "SpeedyBee F405 V4"
  - "STM32F405"
  - "ICM42688 Gyro"
  - "ESC"
  - "ELRS"
  - "ExpressLRS"
  - "C2 Link"
  - "Betaflight"
  - "Failsafe"
  - "GPS Rescue"
  - "ODB"
  - "One-Way Attack"
checklists:
  - "Verify flight controller firmware version (Betaflight 4.3+)"
  - "Confirm gyro calibration (ICM42688 initialized correctly)"
  - "Test ESC output (all four motor channels responding)"
  - "Bind ELRS receiver and verify <8ms latency"
  - "Configure GPS Rescue failsafe parameters"
  - "Perform pre-flight bench test (full stick deflections)"
  - "Verify 5V regulator output (critical for peripherals)"
failure_modes:
  - "Internal 5V regulator failure (requires bypass soldering)"
  - "Gyro initialization failure (check solder joints and SPI connection)"
  - "ESC desync at high throttle (adjust motor timing or PWM frequency)"
  - "ELRS link loss in urban environment (check antenna placement)"
  - "GPS Rescue failure due to poor satellite lock (verify GPS module placement)"
references: []
---

### Overview: ODB Hardware Benchmark

The **One-Way Attack / ODB (One-Direction Build)** platform represents the baseline hardware architecture for expendable and high-risk mission profiles. This module covers the **SpeedyBee F405 V4** flight controller—the recommended hardware benchmark for SORD FPV operations.

Understanding this flight stack is critical for:
- **Mission planning:** Knowing platform capabilities and limitations
- **Field troubleshooting:** Diagnosing failures under time pressure
- **Custom builds:** Adapting the architecture for specialized missions

---

### Hardware Benchmark: SpeedyBee F405 V4

The **SpeedyBee F405 V4** is an all-in-one (AIO) flight controller featuring integrated ESC, gyro, and MCU in a compact 20x20mm form factor.

#### **Core Specifications**

| Component | Specification | Purpose |
|-----------|---------------|---------|
| **MCU** | STM32F405RGT6 @ 180 MHz | Flight control processing, PID loops |
| **Gyro** | ICM42688-P | 6-axis motion sensing (3-axis gyro + 3-axis accel) |
| **ESC** | 55A Continuous (4-in-1) | Motor control for 4x brushless motors |
| **Mounting** | 20x20mm / M3 holes | Standard DJI/freestyle frame compatibility |
| **Firmware** | Betaflight 4.3+ | Open-source flight control software |
| **Input Voltage** | 2S–6S LiPo (7.4V–25.2V) | Wide voltage range for mission flexibility |
| **Weight** | 8.2g | Lightweight for high thrust-to-weight ratio |

#### **Key Features**

**STM32F405 MCU (180 MHz)**
- High-speed processing for sub-millisecond loop times
- Supports advanced features: GPS Rescue, dynamic filtering, RPM telemetry
- 1MB flash memory for blackbox logging

**ICM42688-P Gyro**
- Low-noise, high-precision motion sensing
- SPI interface for minimal latency
- Critical for stabilization and acrobatic maneuvers

**55A Continuous ESC**
- Supports motors up to 2306 size (2300KV–2600KV typical)
- BLHeli_32 or BLHeli_S firmware
- Bidirectional DShot for RPM filtering

---

### C2 Link: ELRS 2.4GHz Nano Receiver

The **ExpressLRS (ELRS) 2.4GHz Nano** receiver is the recommended command-and-control (C2) link for ODB platforms.

#### **ELRS 2.4GHz Specifications**

| Metric | Value | Operational Impact |
|--------|-------|-------------------|
| **Latency** | <8ms (at 250Hz mode) | Near-zero pilot input delay |
| **Range** | 1.5km (urban core) / 10km+ (LOS) | Mission radius flexibility |
| **Packet Rate** | 50Hz–500Hz (configurable) | Trade-off: range vs. latency |
| **Frequency** | 2.4GHz ISM band | Crowded spectrum; requires coordination |
| **Protocol** | ExpressLRS (open-source) | Community-driven, rapidly updated |
| **Antenna** | Ceramic or dipole | Ceramic: compact; Dipole: longer range |
| **Power** | 10mW–250mW (region-dependent) | Higher power = greater range + heat |

#### **Configuration Best Practices**

1. **Packet Rate Selection**
   - **500Hz:** Minimum latency, short range (race/acro missions)
   - **250Hz:** Balanced (recommended for most SORD ops)
   - **50Hz:** Maximum range (long-distance ISR or strike)

2. **Antenna Placement**
   - Orient perpendicular to flight direction for optimal polarization
   - Avoid carbon fiber blockage (carbon is RF-opaque)
   - Use T-antenna or dual-antenna diversity when possible

3. **Failsafe Binding**
   - Always bind receiver with "No Pulses" failsafe mode
   - Configure Betaflight to trigger Stage 2 failsafe on signal loss

---

### Betaflight Two-Stage Failsafe Logic

Understanding failsafe behavior is **mission-critical**. The Betaflight Two-Stage Failsafe prevents flyaways and mitigates platform loss.

#### **Stage 1: Guard Period (0.3s–1.5s)**

When the flight controller detects C2 link loss:

1. **Hold Last Values:** Maintains throttle/attitude from last valid packet
2. **Timer Starts:** Countdown begins (default: 1.0s)
3. **Awaits Reconnection:** If link restored, resume normal operation

**Use Case:** Brief RF interference or momentary obstruction (e.g., flying behind a building)

#### **Stage 2: GPS Rescue or Drop (After Guard Period)**

If link loss persists beyond the guard period, Stage 2 activates:

**Option A: GPS Rescue (Recommended for ISR platforms)**

GPS Rescue executes a five-phase autonomous return-to-home sequence:

| Phase | Action | Duration |
|-------|--------|----------|
| **1. Level** | Stabilize aircraft (prevent crash dive) | 1–2s |
| **2. Ascend** | Climb to safe altitude (configurable, e.g., 50m AGL) | 3–10s |
| **3. Rotate** | Turn toward home point (takeoff location) | 2–5s |
| **4. Fly Home** | Cruise at safe altitude until overhead home | Variable |
| **5. Land** | Descend vertically and disarm motors | 10–30s |

**Option B: Drop (Default for ODB/expendable platforms)**

- Disarm motors immediately
- Platform falls to ground
- Use for one-way attack missions where recovery is not intended

#### **Configuring GPS Rescue in Betaflight**

Key parameters (CLI or GUI):

```
set gps_rescue_initial_alt = 50        # Initial climb altitude (meters)
set gps_rescue_ascend_rate = 500       # Climb rate (cm/s)
set gps_rescue_ground_speed = 750      # Return cruise speed (cm/s)
set gps_rescue_descent_dist = 20       # Distance from home to start descent (m)
set gps_rescue_landing_alt = 4         # Altitude to disarm motors (m)
set gps_rescue_throttle_min = 1200     # Minimum throttle during rescue
set gps_rescue_throttle_max = 1700     # Maximum throttle during rescue
set gps_rescue_sanity_checks = ON      # Abort if GPS invalid
```

**Critical:** Always test GPS Rescue on the bench (with props off) before field deployment.

---

### Common Hardware Failures & Field Repairs

#### **Failure 1: Internal 5V Regulator Failure**

**Symptoms:**
- Flight controller powers on, but peripherals (GPS, receiver) do not respond
- Inconsistent voltage on 5V pad (measured <4.5V)

**Root Cause:**
- Onboard 5V regulator overheated or damaged (common with high-current GPS modules)

**Field Repair:**
- **Bypass Solution:** Solder an external 2A 5V regulator (e.g., Pololu D24V22F5)
  - Input: Connect to VBAT (battery voltage)
  - Output: Connect to 5V pad on FC
  - GND: Common ground
- **Time Required:** 10–15 minutes with field soldering kit

**Prevention:**
- Use low-current GPS modules (≤150mA)
- Add heat sinks to voltage regulator IC

---

#### **Failure 2: Gyro Initialization Error**

**Symptoms:**
- Flight controller boots but displays "GYRO NOT FOUND" or "ACC NOT CALIBRATED"
- Betaflight Configurator shows no gyro data in Receiver tab

**Root Cause:**
- Cold solder joint on SPI connection
- Physical shock damaged gyro IC

**Field Repair:**
- **Reflow solder joints** on gyro IC (requires hot air station)
- **Replace gyro IC** if reflow fails (advanced repair)

**Workaround:**
- If gyro is unrecoverable, use external gyro (e.g., MPU6000 breakout) via SPI

---

#### **Failure 3: ESC Desync at High Throttle**

**Symptoms:**
- Motors cut out or stutter during rapid throttle inputs
- Betaflight blackbox shows RPM oscillations

**Root Cause:**
- Motor timing mismatch or PWM frequency too high

**Field Fix:**
- Lower motor PWM frequency in Betaflight (default: 48kHz → reduce to 24kHz)
- Adjust motor timing in BLHeli configurator (increase by 1–2 degrees)

---

### Pre-Flight Bench Test Checklist

Perform this test before **every** mission:

1. [ ] Power on flight controller with LiPo connected
2. [ ] Verify solid LED (no blinking error codes)
3. [ ] Connect Betaflight Configurator via USB
4. [ ] Check gyro data (should show stable values near zero)
5. [ ] Test all four motor channels (spin test, props OFF)
6. [ ] Verify receiver bind (check RX RSSI >95)
7. [ ] Test full stick deflections (roll, pitch, yaw, throttle)
8. [ ] Arm aircraft and test motor response (props OFF)
9. [ ] Test failsafe (turn off transmitter, verify correct behavior)
10. [ ] Disconnect USB and verify all peripherals powered via 5V

**Failure Criteria:** If any step fails, do NOT fly. Diagnose and repair first.

---

### Failsafe Configuration Workflow

**Step 1: Bind ELRS Receiver**
- Set failsafe mode to "No Pulses" in ELRS TX module
- Bind receiver to transmitter

**Step 2: Configure Betaflight Failsafe**
- Navigate to Failsafe tab in Betaflight Configurator
- Set Stage 1 Guard Time: 1.0s (default)
- Set Stage 2 Procedure:
  - **GPS Rescue** (if GPS installed)
  - **Drop** (if ODB/expendable mission)

**Step 3: Test Failsafe on Bench**
- Arm aircraft (props OFF)
- Turn off transmitter
- Observe:
  - Stage 1: Hold last throttle for 1.0s
  - Stage 2: GPS Rescue activates (or drop if configured)

**Step 4: Field Test (Optional)**
- Fly to safe altitude (50m AGL)
- Trigger failsafe manually (TX module)
- Verify GPS Rescue returns aircraft to home and lands

---

### Knowledge Check

1. What is the MCU used in the SpeedyBee F405 V4, and what is its clock speed?
2. What is the maximum continuous ESC current rating for the V4?
3. What is the typical latency of ELRS 2.4GHz at 250Hz packet rate?
4. Describe the five phases of GPS Rescue in order.
5. What is the field repair for an internal 5V regulator failure?
6. Why is "No Pulses" the correct failsafe mode for ELRS binding?

---

### Summary

The **SpeedyBee F405 V4** and **ELRS 2.4GHz** represent the hardware benchmark for SORD ODB operations. Mastery of this flight stack—including failsafe logic, common failures, and field repairs—is essential for mission success. Always perform pre-flight bench tests, configure failsafe correctly, and carry field repair supplies for critical components.

Your hardware is your lifeline. Know it inside and out.
