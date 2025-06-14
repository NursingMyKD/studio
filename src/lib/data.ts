
import type { ContentItem } from '@/types/content';

export const bodySystems: ContentItem[] = [
  {
    id: 'cardiovascular',
    slug: 'cardiovascular',
    title: 'Cardiovascular System',
    summary: 'In-depth review of the cardiovascular system, common ICU conditions, and nursing interventions, including advanced monitoring and pharmacology.',
    content: `The cardiovascular system, vital for tissue perfusion, comprises the heart, blood vessels, and blood. The heart, a four-chambered organ (right atrium, right ventricle, left atrium, left ventricle), propels blood through two circuits: pulmonary (to lungs for oxygenation) and systemic (to the rest of the body). Key valves ensure unidirectional flow: tricuspid (RA to RV), pulmonic (RV to pulmonary artery), mitral (LA to LV), and aortic (LV to aorta). The coronary arteries (left main, LAD, circumflex, RCA) supply the myocardium itself.

### Cardiac Physiology & Electrical Conduction

The cardiac cycle involves **diastole** (ventricular filling) and **systole** (ventricular contraction). Electrical impulses originating from the **sinoatrial (SA) node** (pacemaker, 60-100 bpm) travel through the **atrioventricular (AV) node** (delay allows atrial contraction, 40-60 bpm intrinsic rate), Bundle of His, bundle branches, and Purkinje fibers (20-40 bpm intrinsic rate), coordinating contraction. An ECG records this activity:

| Wave/Interval    | Description                                                                 | Normal Duration/Characteristics                                       |
|------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------|
| **P wave**       | Atrial depolarization (contraction)                                         | Upright, rounded, precedes QRS. Duration: 0.06-0.12s. Amplitude: <2.5mm |
| **PR Interval**  | Time for impulse from SA node through AV node to ventricles                 | 0.12-0.20 seconds                                                     |
| **QRS complex**  | Ventricular depolarization (contraction)                                    | Q (1st neg), R (1st pos), S (1st neg after R). Duration: 0.06-0.10(0.12)s |
| **ST Segment**   | Early ventricular repolarization                                            | Normally isoelectric. Elevation/depression indicates ischemia/injury. |
| **T wave**       | Ventricular repolarization (relaxation)                                     | Normally upright, rounded. Inversion/flattening indicates issues.     |
| **QT Interval**  | Total time for ventricular depolarization & repolarization (varies with HR) | QTc: <0.44s (males), <0.46s (females). Prolonged = arrhythmia risk.   |
| **U wave**       | Small wave sometimes after T wave                                           | Prominent may indicate hypokalemia.                                   |

### Common ICU Arrhythmias

| Arrhythmia                   | Key ECG Features                                                                    | Common Management Approaches                                      |
|------------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| **Atrial Fibrillation (AFib)** | Irregularly irregular rhythm, absent P waves replaced by chaotic fibrillatory (f) waves, variable ventricular rate. QRS usually narrow. | Rate control (beta-blockers, CCBs, Digoxin), rhythm control (Amiodarone, cardioversion), anticoagulation |
| **Ventricular Tachycardia (VTach)** | Wide QRS (>0.12s), rapid rate (typically 100-250 bpm), regular or slightly irregular rhythm. AV dissociation may be present. | ACLS protocol (pulse vs. pulseless), antiarrhythmics (Amiodarone, Lidocaine), synchronized cardioversion (if pulse), defibrillation (if pulseless) |
| **Ventricular Fibrillation (VFib)** | Chaotic, unorganized electrical activity, no discernible P, QRS, or T waves. "Quivering" baseline. Fatal if not treated. | Immediate defibrillation, ACLS protocol (CPR, Epinephrine, Amiodarone) |
| **Bradycardias (various)**   | Slow rate (<60 bpm). Includes Sinus Bradycardia (normal morphology, slow rate), AV Blocks (1st degree: prolonged PR; 2nd degree Mobitz I: progressive PR prolongation then dropped QRS; 2nd degree Mobitz II: intermittent non-conducted P waves without PR prolongation; 3rd degree: complete AV dissociation, P waves and QRS complexes independent). | Atropine (if symptomatic), transcutaneous/transvenous pacing, Dopamine/Epinephrine infusion |
| **Supraventricular Tachycardia (SVT)** | Narrow QRS (<0.12s), regular, rapid rate (often 150-250 bpm). P waves often hidden in preceding T wave or QRS. | Vagal maneuvers, Adenosine, synchronized cardioversion (if unstable or refractory) |
| **Asystole/PEA**             | Asystole: Flatline (no electrical activity). Pulseless Electrical Activity (PEA): Organized rhythm on monitor without a palpable pulse. | ACLS protocol (CPR, Epinephrine), identify and treat reversible causes (H's & T's) |

### Hemodynamic Monitoring

Crucial for assessing cardiovascular status and guiding therapy.

| Parameter                             | Normal Range/Value             | Significance                                                                 | Common Monitoring Device |
|---------------------------------------|--------------------------------|------------------------------------------------------------------------------|--------------------------|
| **Mean Arterial Pressure (MAP)**      | 70-105 mmHg                    | Average pressure driving tissue perfusion throughout cardiac cycle. Target >65 mmHg in shock. | Arterial Line, NIBP    |
| **Central Venous Pressure (CVP)**     | 2-8 mmHg                       | Reflects RV preload and right atrial pressure. Interpretation requires clinical context. | Central Venous Catheter (CVC) |
| **Pulmonary Artery Pressure (PAP)**   | Sys: 15-30 mmHg <br> Dia: 8-15 mmHg <br> Mean: 10-20 mmHg | Pressures within the pulmonary artery. Elevated in pulmonary hypertension.   | Pulmonary Artery Catheter (PAC) |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | 6-12 mmHg                      | Indirectly measures left atrial pressure, reflecting LV preload.         | PAC                      |
| **Cardiac Output (CO)**               | 4-8 L/min                      | Volume of blood pumped by the heart per minute (CO = HR x SV).               | PAC, other CO monitors   |
| **Cardiac Index (CI)**                | 2.5-4 L/min/m²                 | CO adjusted for Body Surface Area (BSA). More accurate patient comparison.   | Calculated (via PAC, etc.)|
| **Systemic Vascular Resistance (SVR)**| 800-1200 dynes·s/cm⁻⁵          | Resistance the left ventricle must overcome to eject blood (LV afterload).   | Calculated (via PAC)     |
| **Pulmonary Vascular Resistance (PVR)**| <250 dynes·s/cm⁻⁵                | Resistance the right ventricle must overcome to eject blood (RV afterload). | Calculated (via PAC)     |
| **Mixed Venous O2 Saturation (SvO2)** | 60-80%                         | Oxygen saturation of blood returning to the right heart. Reflects balance of O2 delivery and consumption. | PAC                      |
| **Stroke Volume (SV)**                | 60-100 mL/beat                 | Volume of blood ejected by the ventricle with each heartbeat.              | PAC, Echocardiography    |

**Arterial Line Troubleshooting (Waveform Issues)**:
*   **Damping**: Waveform appears flattened, with a slurred upstroke, absent dicrotic notch, and underestimated Systolic Blood Pressure (SBP), overestimated Diastolic Blood Pressure (DBP). Caused by air bubbles, clots, kinks, loose connections, compliant tubing, or low flush bag pressure. Intervention: Check system, flush, remove air, ensure connections are tight, maintain flush pressure at 300 mmHg.
*   **Resonance/Whip/Underdamping**: Waveform shows "ringing" or "overshoot," particularly in systole, leading to overestimated SBP and underestimated DBP. Caused by stiff/long tubing, excessive stopcocks, or catheter whip. Intervention: Use non-compliant, short tubing, minimize stopcocks, use a damping device if available.
*   **Zeroing and Leveling**: Essential for accuracy. Zero transducer to atmospheric pressure. Level transducer at the phlebostatic axis (4th intercostal space, mid-axillary line, approximating right atrial level). Re-level with patient position changes.

### Common Vasoactive Medications

A brief overview (see Critical Care Pharmacology for more detail):
*   **Norepinephrine (Levophed)**: First-line for septic shock (α1 & β1 agonist).
*   **Phenylephrine (Neo-Synephrine)**: Pure α1 agonist, increases SVR.
*   **Vasopressin**: V1 agonist, adjunct in septic shock.
*   **Epinephrine**: Potent α1, β1, β2 agonist; used in anaphylaxis, cardiac arrest.
*   **Dobutamine**: Primarily β1 agonist (inotropy); for cardiogenic shock, ADHF.
*   **Milrinone**: PDE3 inhibitor (inotropy & vasodilation); for ADHF.

Nurses titrate these medications based on parameters like MAP, CI, urine output, lactate, and mental status, while closely monitoring for adverse effects like arrhythmias, extravasation, and tissue ischemia.

### Key Cardiovascular Conditions in ICU

*   **Myocardial Infarction (MI)**: STEMI vs. NSTEMI. Diagnosed via ECG changes (ST elevation/depression, T-wave inversion, Q waves) and cardiac enzymes (Troponin elevation). Managed with MONA (Morphine, Oxygen, Nitrates, Aspirin - use cautiously), antiplatelets, anticoagulants, beta-blockers, ACE-inhibitors, statins, and reperfusion therapy (PCI, thrombolytics).
*   **Acute Decompensated Heart Failure (ADHF)**: Classified by perfusion (warm/cold) & congestion (wet/dry). Managed with diuretics, vasodilators (e.g., Nitroglycerin, Nitroprusside), inotropes.
*   **Shock States**: (Cardiogenic, Hypovolemic, Septic, Neurogenic, Anaphylactic) - critical hypoperfusion. Identify type, treat cause, support circulation with fluids and/or vasoactive medications.
*   **ACLS Protocols**: Fundamental for cardiac arrest and periarrest states. Emphasizes early CPR, defibrillation, and targeted medication administration.`,
    categoryType: 'Body System',
    keywordsForImage: 'heart anatomy',
  },
  {
    id: 'respiratory',
    slug: 'respiratory',
    title: 'Respiratory System',
    summary: 'Comprehensive guide to respiratory care, including advanced ventilation, ARDS management, and airway adjuncts.',
    content: `The respiratory system facilitates gas exchange (oxygen uptake, CO2 elimination). Upper airways (nose, pharynx, larynx) warm, filter, and humidify air. Lower airways (trachea, bronchi, bronchioles) conduct air to alveoli, the primary gas exchange units. The alveolar-capillary membrane is where O2 diffuses into blood and CO2 diffuses out.

### Arterial Blood Gas (ABG) Interpretation

A systematic approach is key:

| Parameter         | Normal Range         | Acid-Base Implication (if abnormal)                     |
|-------------------|----------------------|---------------------------------------------------------|
| **pH**            | 7.35-7.45            | <7.35: Acidemia; >7.45: Alkalemia                       |
| **PaCO2**         | 35-45 mmHg           | Respiratory component. >45: Respiratory Acidosis; <35: Respiratory Alkalosis |
| **HCO3**          | 22-26 mEq/L          | Metabolic component. <22: Metabolic Acidosis; >26: Metabolic Alkalosis |
| **PaO2**          | 80-100 mmHg          | Oxygenation status. <80: Hypoxemia                      |
| **SaO2**          | 95-100%              | Oxygen saturation of hemoglobin.                        |
| **Base Excess (BE)**| -2 to +2 mEq/L       | Overall metabolic status; negative BE indicates metabolic acidosis. |

**Steps for ABG Interpretation**:
1.  **Assess pH**: Acidemia or Alkalemia?
2.  **Assess PaCO2**: Is it consistent with the pH abnormality (respiratory cause)?
3.  **Assess HCO3**: Is it consistent with the pH abnormality (metabolic cause)?
4.  **Determine Primary Disorder**: Which component (PaCO2 or HCO3) matches the pH change?
5.  **Check for Compensation**: Has the other system started to counteract the primary disorder?
    *   *Respiratory Acidosis*: HCO3 will ↑ to compensate.
    *   *Respiratory Alkalosis*: HCO3 will ↓ to compensate.
    *   *Metabolic Acidosis*: PaCO2 will ↓ to compensate.
    *   *Metabolic Alkalosis*: PaCO2 will ↑ to compensate.
6.  **Assess Oxygenation**: Look at PaO2 and SaO2.

**Anion Gap (AG)**: Na - (Cl + HCO3). Normal: 8-12 mEq/L. Helps differentiate causes of metabolic acidosis (e.g., MUDPILES for high AG metabolic acidosis: Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates).

### Mechanical Ventilation (Overview)

See "Advanced Ventilator Management" topic for detailed waveform analysis. General principles include:

#### Common Ventilator Modes

| Mode                                     | Description                                                                                                | Key Features / Use                                                               |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Assist-Control Volume Control (AC-VC)** | Delivers a preset tidal volume (VT) for every breath, whether patient-triggered or ventilator-initiated.   | Ensures minimum minute ventilation; pressure varies with lung mechanics.           |
| **Assist-Control Pressure Control (AC-PC)**| Delivers a preset inspiratory pressure (Pinsp) for a set inspiratory time (Ti).                            | Ensures consistent peak pressure; VT varies with lung mechanics and patient effort. |
| **Synchronized Intermittent Mandatory Ventilation (SIMV)** | Delivers a set number of mandatory breaths (VC or PC). Patient can breathe spontaneously between mandatory breaths, often with Pressure Support (PS). | Allows patient to contribute to work of breathing; may prolong weaning.        |
| **Pressure Support Ventilation (PSV)**   | Patient triggers all breaths. Ventilator provides a set inspiratory pressure to support spontaneous effort.  | Used for spontaneous breathing trials (SBTs) and weaning; patient controls rate, VT. |
| **Continuous Positive Airway Pressure (CPAP)** | Provides a constant level of positive pressure throughout the respiratory cycle during spontaneous breathing. | Maintains alveolar recruitment; often used with PSV.                             |

#### Key Ventilator Settings

| Setting                          | Description / Typical Range                                       | Purpose                                                               |
|----------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------|
| **FiO2 (Fraction of Inspired O2)** | 0.21 (room air) - 1.0                                             | Adjust to maintain target SpO2 (>90-92%) or PaO2 (55-80 mmHg).         |
| **PEEP (Positive End-Expiratory Pressure)** | 5-20 cmH2O (or higher in severe ARDS)                           | Prevents alveolar collapse, improves oxygenation (recruits alveoli).  |
| **Respiratory Rate (RR)**        | 10-20 breaths/min (adjusted based on PaCO2/pH)                    | Controls minute ventilation and CO2 elimination.                      |
| **Tidal Volume (VT)**            | 4-8 mL/kg Ideal Body Weight (IBW)                                 | Volume of air delivered with each breath (lower for ARDS).            |
| **Inspiratory Pressure (Pinsp/PIP)** | Used in PC modes; target lowest effective pressure.               | Pressure applied during inspiration.                                  |
| **Plateau Pressure (Pplat)**     | Static pressure during inspiratory hold. Target <30 cmH2O.        | Reflects alveolar pressure; marker for lung protection.               |
| **Inspiratory Time (Ti)**        | Usually 0.8-1.2 seconds.                                          | Duration of inspiration.                                              |
| **I:E Ratio**                    | Typically 1:2 to 1:3 (longer E-time for obstructive disease).     | Ratio of inspiratory time to expiratory time.                         |
| **Flow Rate (in VCV)**           | 40-80 L/min (adjusted for patient comfort and I:E ratio).         | Speed at which VT is delivered.                                       |
| **Trigger Sensitivity**          | Pressure (-1 to -2 cmH2O) or Flow (1-3 L/min).                      | Effort required by patient to initiate a ventilator-assisted breath.  |

**Lung Protective Strategies (especially for ARDS)**: Low VT (4-6 mL/kg IBW), Pplat <30 cmH2O, appropriate PEEP.

**Monitoring Concepts**:
*   **Auto-PEEP (Intrinsic PEEP)**: Air trapping. Assessed with expiratory hold maneuver. Indicated on ventilator graphics by expiratory flow not returning to zero before the next breath starts.
*   **Compliance**: VT / (Pplat - PEEP). Change in volume per unit change in pressure. Decreased compliance suggests stiffer lungs.
*   **Resistance**: (PIP - Pplat) / Flow. Reflects airway resistance.

### Acute Respiratory Distress Syndrome (ARDS)

Acute, diffuse inflammatory lung injury leading to increased pulmonary vascular permeability, increased lung weight, and loss of aerated tissue.
**Berlin Criteria for ARDS**:
1.  **Timing**: Within 1 week of a known clinical insult or new/worsening respiratory symptoms.
2.  **Chest Imaging**: Bilateral opacities not fully explained by effusions, lobar/lung collapse, or nodules (on CXR or CT).
3.  **Origin of Edema**: Respiratory failure not fully explained by cardiac failure or fluid overload (objective assessment like echocardiogram needed if no clear risk factor).
4.  **Oxygenation (with PEEP ≥5 cmH2O)**:
    *   Mild: 200 mmHg < PaO2/FiO2 ≤ 300 mmHg
    *   Moderate: 100 mmHg < PaO2/FiO2 ≤ 200 mmHg
    *   Severe: PaO2/FiO2 ≤ 100 mmHg

**ARDS Management**: Lung Protective Ventilation, appropriate PEEP, prone positioning (for moderate/severe ARDS), conservative fluid management, consider neuromuscular blocking agents (NMBAs) for severe ARDS or patient-ventilator dyssynchrony.

### Ventilator-Associated Pneumonia (VAP) Prevention Bundle

*   Head of Bed (HOB) elevation: 30-45 degrees.
*   Daily sedation interruptions and assessment of readiness to extubate ("sedation vacation").
*   Oral care with chlorhexidine (or other antiseptic per policy).
*   Peptic Ulcer Disease (PUD) prophylaxis (e.g., H2 blockers, PPIs).
*   Deep Vein Thrombosis (DVT) prophylaxis (e.g., LMWH, UFH, SCDs).
*   Regular subglottic suctioning if specialized ETT is in place.

### Other Important Concepts

*   **Pulmonary Embolism (PE)**: Obstruction of pulmonary artery. Diagnosed via CT angiogram or V/Q scan. Treated with anticoagulation, thrombolysis for massive PE, or embolectomy.
*   **Non-Invasive Ventilation (NIV)**: BiPAP (Bilevel Positive Airway Pressure) for COPD exacerbation, cardiogenic pulmonary edema. CPAP (Continuous Positive Airway Pressure) for OSA, cardiogenic pulmonary edema.
*   **Tracheostomy Care**: Surgical airway. Involves stoma cleaning, inner cannula changes/cleaning, cuff pressure monitoring (target 20-30 cmH2O to prevent tracheal damage and aspiration), suctioning.
*   **Chest Tubes**: For pneumothorax, hemothorax, pleural effusion. Monitor drainage (amount, color, consistency), assess for air leaks (bubbling in water seal chamber), ensure suction set correctly if ordered, check for tidaling (fluctuations with respiration in water seal chamber).`,
    categoryType: 'Body System',
    keywordsForImage: 'lungs anatomy',
  },
  {
    id: 'neurological',
    slug: 'neurological',
    title: 'Neurological System',
    summary: 'Focus on advanced neurological assessments, ICP/CPP management, stroke, TBI, and seizure care in the ICU.',
    content: `The neurological system, encompassing the brain, spinal cord, and peripheral nerves, governs bodily functions and cognition.
**Key Brain Structures**:
*   **Cerebrum**: Largest part, divided into lobes (frontal - executive function, parietal - sensory, temporal - auditory/memory, occipital - vision) responsible for higher functions.
*   **Cerebellum**: Coordination, balance, fine motor control.
*   **Brainstem (Midbrain, Pons, Medulla)**: Controls vital functions like breathing, heart rate, consciousness, cranial nerve function.
The Circle of Willis provides collateral blood flow. Cerebrospinal Fluid (CSF), produced in choroid plexus, circulates in ventricles and subarachnoid space, providing cushioning and metabolic support.

### Intracranial Pressure (ICP) Monitoring

Essential for managing patients with TBI, SAH, or other conditions causing cerebral edema.
*   **Devices**: External Ventricular Drains (EVDs - gold standard, allows CSF drainage and ICP monitoring), intraparenchymal monitors (e.g., Codman, Camino).
*   **Normal ICP**: 5-15 mmHg. Increased ICP is sustained pressure >20-22 mmHg.
*   **Cerebral Perfusion Pressure (CPP)**: CPP = MAP - ICP. Target: 60-70 mmHg. (MAP = Mean Arterial Pressure).
*   **ICP Waveforms**:
    *   **P1 (Percussion wave)**: Arterial pulsation transmitted from choroid plexus. Sharp peak, normally tallest.
    *   **P2 (Tidal wave)**: Reflects intracranial compliance (brain's ability to accommodate volume changes). Rounded, normally shorter than P1. **If P2 is higher than P1, it indicates decreased compliance and is a sign of intracranial hypertension.**
    *   **P3 (Dicrotic wave)**: Follows P2, relates to aortic valve closure. Smallest of the three.
    *   **Normal Morphology**: P1 > P2 > P3.
    *   **Pathological (Lundberg) Waves**:
        *   **A waves (Plateau waves)**: Sustained elevations of ICP (50-100 mmHg) lasting 5-20 minutes. Indicate critically low compliance and impending herniation. Require urgent intervention.
        *   **B waves**: Rhythmic oscillations (0.5-2 per minute) up to 50 mmHg. Less ominous but may precede A waves.
        *   **C waves**: Smaller, more frequent oscillations, related to blood pressure variations. Clinical significance less clear.

#### Interventions for Increased ICP (Tiered Approach)

| Tier | Intervention                                     | Notes                                                              |
|------|--------------------------------------------------|--------------------------------------------------------------------|
| **Tier 0 (Basic)** | HOB 30-45°, head midline, avoid neck flexion/rotation | Promote venous outflow, prevent jugular compression.           |
|      | Maintain normothermia (treat fever aggressively)  | Fever increases metabolic demand and ICP.                          |
|      | Analgesia & Sedation (e.g., Fentanyl, Propofol)    | Minimize pain/agitation which can increase ICP.                    |
|      | Avoid hypoxia and hypercapnia                      | Hypoxia and hypercapnia cause vasodilation, increasing ICP.        |
| **Tier 1** | CSF Drainage via EVD                             | If EVD in place, drain CSF to target ICP.                          |
|      | Osmotic Therapy: Mannitol (0.25-1 g/kg IV)         | Creates osmotic gradient. Monitor serum osmolality (<320 mOsm/L), electrolytes. |
|      | Hypertonic Saline (e.g., 3% NaCl, 23.4% NaCl)      | Pulls fluid from brain. Monitor serum Na (target specific ranges).  |
| **Tier 2** | Controlled Hyperventilation (PaCO2 30-35 mmHg)   | Transient effect via vasoconstriction; use cautiously, short-term. |
|      | Neuromuscular Blocking Agents (NMBAs)              | If sedation insufficient to control agitation/coughing/posturing.  |
| **Tier 3 (Refractory)** | Barbiturate Coma (e.g., Pentobarbital)         | Reduces cerebral metabolic rate. Requires continuous EEG.        |
|      | Decompressive Craniectomy                        | Surgical removal of part of skull to allow brain expansion.      |
|      | Hypothermia (therapeutic, e.g., 32-34°C)         | Controversial, may reduce metabolic demand.                      |

### Stroke Management

Rapid assessment (e.g., FAST, NIHSS) is crucial.
**Ischemic Stroke (87%)**:
*   **tPA (Alteplase)**: If LKW <4.5 hrs (some centers up to 3 hrs) and no contraindications. Dose: 0.9mg/kg (max 90mg), 10% bolus over 1 min, rest infused over 1hr.
*   **BP control post-tPA**: Maintain SBP ≤180 mmHg and DBP ≤105 mmHg for 24 hrs.
*   **Mechanical Thrombectomy**: For Large Vessel Occlusion (LVO) up to 24 hrs in select patients (based on imaging criteria like DAWN/DEFUSE 3 trials).
**Hemorrhagic Stroke (13%) - Intracerebral (ICH), Subarachnoid (SAH)**:
*   **ICH**:
    *   BP control: Target SBP (e.g., <140-160 mmHg, varies by guidelines).
    *   Reverse anticoagulation: Vitamin K, FFP, PCCs (e.g., Kcentra), Idarucizumab (for Dabigatran), Andexanet Alfa (for Factor Xa inhibitors).
    *   Neurosurgical consultation for potential evacuation.
*   **SAH**:
    *   Often due to ruptured aneurysm. Secure aneurysm (coiling/clipping).
    *   Prevent/Manage vasospasm: Nimodipine PO, maintain euvolemia, monitor with TCDs.
    *   Manage hydrocephalus (EVD may be needed).

### Traumatic Brain Injury (TBI)

*   **Primary injury**: Occurs at impact (e.g., contusion, laceration, DAI).
*   **Secondary injury**: Cascade of events post-injury (e.g., hypoxia, hypotension, edema, increased ICP, seizures). Management focuses on preventing secondary injury.
*   **Glasgow Coma Scale (GCS)**: Standardized tool for assessing level of consciousness.
    *   Eye Opening (E): 4 (Spontaneous) to 1 (None).
    *   Verbal Response (V): 5 (Oriented) to 1 (None).
    *   Motor Response (M): 6 (Obeys commands) to 1 (None).
    *   Score ≤8 often indicates coma and need for intubation.

### Seizures

*   **Types**: Focal (aware/impaired awareness) vs. Generalized (e.g., tonic-clonic).
*   **Status Epilepticus**: Seizure lasting >5 minutes or ≥2 seizures without full recovery of consciousness between episodes. A neurological emergency.
*   **Management of Status Epilepticus**:
    1.  **Stabilize**: ABCs, IV access, glucose check.
    2.  **First-line (0-5 min)**: Benzodiazepines IV (Lorazepam 0.1 mg/kg, max 4mg; Diazepam 0.15-0.2 mg/kg, max 10mg; Midazolam IM if no IV access).
    3.  **Second-line (5-20 min)**: Load with IV Antiepileptic Drugs (AEDs) (Fosphenytoin 20 mg PE/kg; Valproic Acid 20-40 mg/kg; Levetiracetam 20-60 mg/kg).
    4.  **Third-line (20-40 min)**: If seizures continue, consider repeating second-line agents or adding another AED (e.g., Phenobarbital, Lacosamide).
    5.  **Refractory Status Epilepticus (>40-60 min)**: Anesthesia with continuous infusion (e.g., Midazolam, Propofol, Pentobarbital) and continuous EEG monitoring.
*   **Seizure Precautions**: Padded rails, airway equipment (O2/suction) at bedside, maintain patent airway.

### Spinal Cord Injury (SCI)

*   Immobilize spine (e.g., cervical collar, backboard).
*   Manage **spinal shock**: Transient flaccid paralysis, areflexia, and loss of sensation below injury level. Can last days to weeks.
*   Manage **neurogenic shock**: Due to disruption of sympathetic pathways (common in injuries T6 or above). Characterized by hypotension, bradycardia, and poikilothermia. Treat with fluids, vasopressors (often Norepinephrine or Phenylephrine), and Atropine for bradycardia.
*   Monitor for **Autonomic Dysreflexia**: Life-threatening syndrome in T6 injuries or above. Noxious stimulus below injury (e.g., full bladder, bowel impaction, tight clothing) triggers massive sympathetic response causing severe HTN, pounding headache, flushing/sweating above injury, bradycardia (reflex). Treat by elevating HOB, removing stimulus immediately, antihypertensives if needed.

### Neurological Assessments

*   **Pupillary Assessment**: Size (mm), equality, reactivity (brisk, sluggish, fixed/non-reactive), shape. Anisocoria (unequal pupils) can indicate herniation.
*   **Motor Function**: Strength (0-5 scale), symmetry, purposeful movement vs. posturing (decorticate, decerebrate).
*   **Cranial Nerves**: Assess as appropriate based on patient's condition.
*   **Sedation**: Balance ICP control with ability to perform neuro exams (e.g., "sedation holidays" using short-acting agents like Propofol or Dexmedetomidine). RASS/SAS scores.`,
    categoryType: 'Body System',
    keywordsForImage: 'brain anatomy',
  },
  {
    id: 'renal',
    slug: 'renal',
    title: 'Renal System',
    summary: 'Overview of renal physiology, acute kidney injury (AKI) management, continuous renal replacement therapy (CRRT), and electrolyte imbalances in the ICU.',
    content: `The renal system, consisting of kidneys, ureters, bladder, and urethra, is crucial for filtering waste products from blood, regulating fluid and electrolyte balance, maintaining acid-base homeostasis, and producing hormones.

### Basic Renal Physiology
*   **Nephron**: Functional unit of the kidney. Comprises glomerulus (filtration) and tubules (reabsorption/secretion).
*   **Glomerular Filtration Rate (GFR)**: Volume of fluid filtered from glomerular capillaries into Bowman's capsule per unit time. Normal GFR approx. 90-120 mL/min/1.73m².
*   **Key Functions**:
    *   Waste excretion (urea, creatinine, metabolic byproducts).
    *   Fluid balance regulation (via ADH, aldosterone).
    *   Electrolyte balance (Na⁺, K⁺, Ca²⁺, PO₄³⁻, Mg²⁺).
    *   Acid-base balance (HCO₃⁻ reabsorption/generation, H⁺ secretion).
    *   Blood pressure regulation (renin-angiotensin-aldosterone system - RAAS).
    *   Erythropoietin production (stimulates RBC production).
    *   Vitamin D activation.

### Acute Kidney Injury (AKI) in ICU
AKI is a common and serious complication in critically ill patients, characterized by a rapid decline in kidney function.
**Diagnostic Criteria (e.g., KDIGO)**:
*   Increase in serum creatinine by ≥0.3 mg/dL within 48 hours, OR
*   Increase in serum creatinine to ≥1.5 times baseline within 7 days, OR
*   Urine volume <0.5 mL/kg/hr for ≥6 hours.

**Types of AKI**:
| Type        | Description & Common Causes                                                                                                       | Examples in ICU                                                                                 |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **Prerenal**  | Decreased renal perfusion. Kidneys are structurally normal initially.                                                               | Hypovolemia (hemorrhage, dehydration, sepsis-induced vasodilation), decreased cardiac output (cardiogenic shock, HF), severe vasodilation (sepsis), renal artery stenosis, hepatorenal syndrome. |
| **Intrinsic (Intrarenal)** | Direct damage to kidney structures (glomeruli, tubules, interstitium, vessels).                                      | Acute Tubular Necrosis (ATN) from ischemia (prolonged prerenal state, shock) or nephrotoxins (contrast dye, aminoglycosides, vancomycin, NSAIDs, myoglobinuria from rhabdomyolysis), glomerulonephritis, interstitial nephritis (drugs), vasculitis. |
| **Postrenal** | Obstruction of urine flow from kidneys.                                                                                           | Prostatic hypertrophy (BPH), kidney stones, tumors compressing ureters, blocked Foley catheter, neurogenic bladder. |

**Management of AKI**:
*   **Identify and Treat Underlying Cause**: Crucial for reversing AKI.
*   **Optimize Hemodynamics**: Ensure adequate renal perfusion (MAP target often >65 mmHg, but individualized). Fluid resuscitation for prerenal causes, judicious use of vasopressors if needed.
*   **Fluid Management**: Careful assessment of fluid status. Avoid fluid overload, which worsens outcomes. Diuretics (e.g., furosemide) may be used if fluid overloaded and kidneys are responsive, but do not improve GFR or prevent AKI progression.
*   **Avoid Nephrotoxins**: Discontinue or dose-adjust nephrotoxic medications.
*   **Electrolyte & Acid-Base Monitoring**: Correct hyperkalemia, metabolic acidosis, hyperphosphatemia.
*   **Nutritional Support**: Provide adequate nutrition, may require protein restriction in non-dialyzed AKI, but often higher protein needs in CRRT.
*   **Renal Replacement Therapy (RRT)**: Indications include severe fluid overload refractory to diuretics, severe hyperkalemia, severe metabolic acidosis, uremic symptoms (encephalopathy, pericarditis), certain drug overdoses.

### Continuous Renal Replacement Therapy (CRRT)
Commonly used in hemodynamically unstable ICU patients requiring RRT. Slower, continuous solute and fluid removal compared to intermittent hemodialysis (IHD).
**Modalities**:
*   **SCUF (Slow Continuous Ultrafiltration)**: Primarily fluid removal.
*   **CVVH (Continuous Veno-Venous Hemofiltration)**: Solute removal via convection (solvent drag). Requires replacement fluid.
*   **CVVHD (Continuous Veno-Venous Hemodialysis)**: Solute removal via diffusion (concentration gradient). Uses dialysate.
*   **CVVHDF (Continuous Veno-Venous Hemodiafiltration)**: Combines convection and diffusion. Uses both replacement fluid and dialysate.

**Key Nursing Considerations for CRRT**:
*   Monitor hemodynamic stability, fluid balance (hourly I&Os critical), electrolytes, acid-base status.
*   Anticoagulation (e.g., heparin, citrate) to prevent filter clotting. Monitor for bleeding, HIT (if heparin), citrate toxicity (hypocalcemia if citrate not properly managed).
*   Maintain circuit patency. Troubleshoot alarms (pressure alarms, air detector, etc.).
*   Prevent infection (vascular access care).
*   Temperature regulation (fluid can be cool).
*   Medication dosing adjustments (many drugs are cleared by CRRT).

### Common Electrolyte Imbalances in ICU Renal Patients

| Electrolyte | Imbalance       | Causes in Renal Patients                                 | Signs/Symptoms & ECG Changes                               | Management                                                              |
|-------------|-----------------|----------------------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------|
| **Potassium (K⁺)** | **Hyperkalemia** | Decreased excretion (AKI/CKD), acidosis, cell lysis, K⁺-sparing drugs | Weakness, paralysis, arrhythmias. ECG: Peaked T waves, wide QRS, prolonged PR, sine wave, asystole. | IV Calcium (stabilize membrane), Insulin/Glucose, Sodium Bicarbonate, Beta-agonists (shift K⁺ intracellularly), Kayexalate, Diuretics (if UOP), RRT. |
|             | **Hypokalemia**  | Diuretics, GI losses, RRT, refeeding syndrome            | Weakness, ileus, arrhythmias. ECG: Flat/inverted T waves, U waves, ST depression, prolonged QT. | Oral/IV K⁺ replacement (slow IV infusion, monitor site).          |
| **Sodium (Na⁺)**   | **Hyponatremia** | Fluid overload (dilutional), SIADH, adrenal insufficiency | Confusion, seizures, coma (esp. if acute).                 | Fluid restriction, loop diuretics, hypertonic saline (if severe/symptomatic, slow correction). |
|             | **Hypernatremia**| Dehydration, diabetes insipidus, excessive saline admin  | Thirst, AMS, seizures, muscle weakness.                    | Free water replacement (PO/IV D5W), treat underlying cause.             |
| **Calcium (Ca²⁺)** | **Hypocalcemia** | CKD (↓Vit D activation, ↑PO₄), citrate (CRRT), pancreatitis | Tetany, Chvostek's/Trousseau's, seizures, prolonged QT.    | IV Calcium gluconate/chloride.                                          |
|             | **Hypercalcemia**| Malignancy, hyperparathyroidism, immobilization          | AMS, weakness, N/V, constipation, short QT, bradycardia.   | Hydration, loop diuretics, bisphosphonates, calcitonin, RRT.            |
| **Phosphate (PO₄³⁻)** | **Hyperphosphatemia** | Decreased excretion (AKI/CKD), cell lysis              | Often asymptomatic, Ca-PO₄ precipitation, hypocalcemia.    | Phosphate binders (with meals), dietary restriction, RRT.                 |
|             | **Hypophosphatemia**| Refeeding syndrome, DKA, antacids, CRRT, malnutrition    | Weakness, respiratory failure, AMS, rhabdomyolysis.      | Oral/IV phosphate replacement.                                          |
| **Magnesium (Mg²⁺)**| **Hypomagnesemia**| Diuretics, GI losses, alcoholism, certain drugs        | Weakness, tetany, seizures, arrhythmias (Torsades).     | IV/Oral Magnesium sulfate.                                              |
|             | **Hypermagnesemia**| Renal failure, excessive intake (antacids)             | Weakness, ↓reflexes, respiratory depression, bradycardia, hypotension. | IV Calcium (antagonizes), fluids, diuretics, RRT.                     |

Regular monitoring and prompt correction of fluid and electrolyte imbalances are critical components of ICU care for patients with renal dysfunction.`,
    categoryType: 'Body System',
    keywordsForImage: 'kidney anatomy',
  },
  {
    id: 'endocrine',
    slug: 'endocrine',
    title: 'Endocrine System',
    summary: 'Covers endocrine emergencies like DKA, HHS, thyroid storm, adrenal crisis, and management of glycemic control in critically ill patients.',
    content: `The endocrine system comprises glands that produce and secrete hormones, chemical messengers that regulate various bodily functions including metabolism, growth, stress response, and fluid/electrolyte balance. In the ICU, acute derangements of this system can be life-threatening.

### Glycemic Control in Critical Illness
Stress hyperglycemia is common in ICU patients due to increased counter-regulatory hormones (cortisol, glucagon, catecholamines) and insulin resistance.
*   **Target Glucose Range**: For most critically ill patients, target blood glucose is typically 140-180 mg/dL (7.8-10.0 mmol/L). More stringent targets (e.g., 110-140 mg/dL) may be considered in select patients if achievable without significant hypoglycemia.
*   **Insulin Therapy**: Continuous IV insulin infusion is often required for precise glycemic control. Use standardized protocols.
*   **Monitoring**: Frequent blood glucose monitoring (e.g., hourly for insulin drips, q4-6h for stable patients on SQ insulin).
*   **Hypoglycemia Management**: Treat promptly (e.g., IV Dextrose 50%). Identify and address cause.

### Diabetic Ketoacidosis (DKA)
Life-threatening complication of diabetes (more common in Type 1 DM) characterized by hyperglycemia, ketosis, and metabolic acidosis.
*   **Pathophysiology**: Insulin deficiency leads to increased glucose production, decreased glucose utilization (hyperglycemia), and increased lipolysis (ketone body formation -> acidosis).
*   **Diagnostic Criteria**:
    *   Blood glucose >250 mg/dL
    *   Arterial pH <7.3 and/or HCO3 <18 mEq/L
    *   Presence of ketones in blood (beta-hydroxybutyrate) or urine.
*   **Management Pillars**:
    1.  **Fluid Resuscitation**: Initial 1-2L isotonic saline (0.9% NaCl) rapidly, then adjust based on hydration status. Correct fluid deficit over 24-48h.
    2.  **Insulin Therapy**: Regular insulin IV infusion (e.g., 0.1 units/kg/hr or fixed low dose). **Do NOT start insulin until K⁺ >3.3 mEq/L.**
    3.  **Potassium Replacement**: DKA causes total body K⁺ depletion despite potentially normal/high serum K⁺ initially. Add K⁺ to IV fluids once UOP established and K⁺ ≤5.0-5.2 mEq/L.
    4.  **Bicarbonate**: Rarely indicated. Consider if pH <6.9 despite other measures.
    5.  **Identify and Treat Precipitating Cause**: Infection, non-compliance, new-onset DM, MI.
*   **Monitoring**: Hourly glucose, q2-4h electrolytes (esp. K⁺, HCO₃⁻, Anion Gap), anion gap closure (AG = Na - (Cl + HCO3)). Transition to SQ insulin when AG closed, patient eating, and acidosis resolved.

### Hyperosmolar Hyperglycemic State (HHS)
Life-threatening complication (more common in Type 2 DM) characterized by severe hyperglycemia, hyperosmolality, and profound dehydration, typically without significant ketosis/acidosis.
*   **Diagnostic Criteria**:
    *   Blood glucose >600 mg/dL
    *   Effective serum osmolality >320 mOsm/kg (Calculated: 2*Na + Glucose/18)
    *   Arterial pH >7.3, HCO3 >18 mEq/L (minimal or no ketosis)
*   **Management**: Similar to DKA but often with greater fluid deficits and more gradual correction.
    1.  **Aggressive Fluid Resuscitation**: Often larger volumes needed than DKA. Start with 0.9% NaCl, may switch to 0.45% NaCl if corrected Na⁺ is high/normal.
    2.  **Insulin Therapy**: IV insulin infusion (similar to DKA, may require lower doses initially).
    3.  **Electrolyte Replacement**: Especially K⁺.
    4.  **Identify and Treat Precipitating Cause**.
*   **Monitoring**: Glucose, electrolytes, serum osmolality, neurological status (risk of cerebral edema with rapid correction).

### Thyroid Storm (Thyrotoxic Crisis)
Life-threatening exacerbation of hyperthyroidism.
*   **Clinical Features**: Fever, tachycardia (often out of proportion to fever), atrial fibrillation, CHF, agitation, delirium, coma, N/V/D, jaundice.
*   **Management**:
    1.  **Beta-blockers**: (e.g., Propranolol) for sympathetic symptom control (HR, tremors).
    2.  **Antithyroid Drugs**: Propylthiouracil (PTU - also blocks peripheral T4 to T3 conversion) or Methimazole (MMI).
    3.  **Iodine Solution**: (e.g., SSKI, Lugol's solution) **AFTER** antithyroid drug administration (to prevent incorporation into new hormone).
    4.  **Glucocorticoids**: (e.g., Hydrocortisone, Dexamethasone) to reduce T4 to T3 conversion and treat potential relative adrenal insufficiency.
    5.  **Supportive Care**: Cooling measures, fluids, treat arrhythmias/CHF.
    6.  Identify and treat precipitating event (infection, surgery, trauma).

### Myxedema Coma
Life-threatening expression of severe hypothyroidism.
*   **Clinical Features**: Hypothermia, bradycardia, hypotension, hypoventilation, altered mental status (lethargy, coma), hyponatremia, hypoglycemia.
*   **Management**:
    1.  **IV Thyroid Hormone Replacement**: Levothyroxine (T4) IV. Liothyronine (T3) IV may be considered.
    2.  **Glucocorticoids**: (e.g., IV Hydrocortisone) until coexisting adrenal insufficiency is ruled out.
    3.  **Supportive Care**: Mechanical ventilation if needed, passive rewarming, IV fluids (cautious, risk of hyponatremia), vasopressors for hypotension, correct hypoglycemia.

### Adrenal Crisis (Acute Adrenal Insufficiency)
Life-threatening condition due to insufficient cortisol (and often aldosterone).
*   **Causes**: Stress in patients with known adrenal insufficiency, abrupt withdrawal of chronic steroids, bilateral adrenal hemorrhage/infarction.
*   **Clinical Features**: Hypotension refractory to fluids/vasopressors, shock, weakness, fatigue, N/V, abdominal pain, fever, AMS, hyponatremia, hyperkalemia, hypoglycemia.
*   **Management**:
    1.  **IV Glucocorticoids**: Hydrocortisone 100 mg IV bolus, then 50-100 mg IV q6-8h or continuous infusion. Dexamethasone if diagnosis uncertain (doesn't interfere with cortisol assay).
    2.  **Aggressive IV Fluid Resuscitation**: (e.g., 0.9% NaCl with dextrose).
    3.  **Correct Electrolyte Abnormalities**.
    4.  **Vasopressors**: If needed after fluids/steroids.
    5.  Identify and treat precipitating cause.

### Syndrome of Inappropriate Antidiuretic Hormone (SIADH)
Excess ADH secretion leading to impaired water excretion and dilutional hyponatremia.
*   **Causes**: CNS disorders, malignancies, pulmonary diseases, drugs.
*   **Clinical Features**: Hyponatremia, low serum osmolality, inappropriately concentrated urine (high urine osmolality, high urine Na⁺), euvolemia or mild hypervolemia.
*   **Management**:
    1.  **Treat Underlying Cause**.
    2.  **Fluid Restriction**: Primary treatment.
    3.  **Salt Tablets / Loop Diuretics**: If symptomatic or severe.
    4.  **Vasopressin Receptor Antagonists (Vaptans)**: (e.g., Tolvaptan) for resistant cases.
    5.  **Hypertonic Saline (3% NaCl)**: For severe symptomatic hyponatremia (e.g., seizures). Correct Na⁺ slowly to avoid osmotic demyelination syndrome.

### Diabetes Insipidus (DI)
Deficiency of ADH (Central DI) or renal resistance to ADH (Nephrogenic DI) leading to excretion of large volumes of dilute urine.
*   **Clinical Features**: Polyuria (>3L/day), polydipsia, hypernatremia, high serum osmolality, dilute urine (low urine osmolality, low urine specific gravity).
*   **Management**:
    1.  **Fluid Replacement**: Match urine output (PO or IV hypotonic fluids like D5W or 0.45% NaCl).
    2.  **Desmopressin (DDAVP)**: For Central DI (synthetic ADH).
    3.  **Thiazide Diuretics / NSAIDs**: For Nephrogenic DI (paradoxical effect to reduce urine volume).
    4.  **Treat Underlying Cause**.`,
    categoryType: 'Body System',
    keywordsForImage: 'endocrine glands',
  },
  {
    id: 'gastrointestinal',
    slug: 'gastrointestinal',
    title: 'Gastrointestinal System',
    summary: 'Management of GI bleeding, pancreatitis, liver failure, bowel obstruction, and nutritional support in critically ill patients.',
    content: `The gastrointestinal (GI) system is responsible for digestion, absorption of nutrients, and elimination of waste. Critical illness can significantly impact GI function.

### Upper GI Bleeding (UGIB)
Bleeding proximal to the ligament of Treitz.
*   **Causes**: Peptic ulcer disease (PUD), esophageal varices (liver disease), Mallory-Weiss tears, gastritis, esophagitis, tumors.
*   **Presentation**: Hematemesis (bright red or coffee-ground), melena (black, tarry stools). Signs of hypovolemia/shock if severe.
*   **Management**:
    1.  **ABCs & Resuscitation**: IV access (2 large-bore PIVs), O2, fluid resuscitation (crystalloids, blood products if needed - target Hgb >7-8 g/dL).
    2.  **Proton Pump Inhibitors (PPIs)**: IV bolus then infusion (e.g., Pantoprazole, Esomeprazole) for non-variceal UGIB.
    3.  **Octreotide**: For suspected variceal bleeding (reduces splanchnic blood flow).
    4.  **Antibiotics**: For variceal bleeding (e.g., Ceftriaxone) to prevent SBP.
    5.  **Endoscopy (EGD)**: Diagnostic and therapeutic (e.g., clipping, cautery, banding). Urgent EGD for active bleeding/hemodynamic instability.
    6.  **Transjugular Intrahepatic Portosystemic Shunt (TIPS)**: For refractory variceal bleeding.
    7.  Correct coagulopathy.

### Lower GI Bleeding (LGIB)
Bleeding distal to the ligament of Treitz.
*   **Causes**: Diverticulosis (most common), angiodysplasia, colitis (ischemic, infectious, IBD), hemorrhoids, neoplasms.
*   **Presentation**: Hematochezia (bright red blood per rectum), maroon stools. Melena possible with slow right-sided colonic bleed.
*   **Management**:
    1.  **ABCs & Resuscitation**: Similar to UGIB.
    2.  **Localization**: Often more challenging. Colonoscopy is primary diagnostic/therapeutic tool. Tagged RBC scan or CTA may help localize active bleeding if colonoscopy is non-diagnostic or bleeding is massive.
    3.  **Endoscopic Therapy**: Clipping, cautery, epinephrine injection.
    4.  **Angiography with Embolization or Surgery**: For refractory bleeding.

### Acute Pancreatitis
Inflammation of the pancreas, ranging from mild to severe necrotizing pancreatitis.
*   **Causes**: Gallstones, alcohol (most common). Others: hypertriglyceridemia, drugs, trauma, post-ERCP.
*   **Presentation**: Severe epigastric pain radiating to back, N/V, fever, tachycardia. Cullen's sign (periumbilical ecchymosis), Grey Turner's sign (flank ecchymosis) in severe cases.
*   **Diagnosis**: Requires 2 of 3: 1) Characteristic abdominal pain, 2) Amylase and/or Lipase >3x ULN, 3) Characteristic findings on imaging (CT/MRI/US).
*   **Severity Assessment**: Ranson's criteria, APACHE II, BISAP score, CT Severity Index.
*   **Management**:
    1.  **Fluid Resuscitation**: Aggressive IV fluids early (e.g., Lactated Ringer's) is crucial, especially in first 24-48h. Monitor response.
    2.  **Pain Control**: IV opioids.
    3.  **Nutritional Support**:
        *   Mild: NPO initially, advance diet as tolerated when pain improves and N/V resolves.
        *   Severe: Enteral nutrition (nasojejunal tube preferred over TPN if gut is functional) if NPO >5-7 days anticipated.
    4.  **Electrolyte Monitoring/Correction**: Esp. calcium (hypocalcemia common).
    5.  **Identify and Treat Cause**: E.g., ERCP for biliary pancreatitis.
    6.  **Monitor for Complications**: Necrosis, pseudocyst, abscess, systemic complications (ARDS, AKI, shock). Antibiotics only if infected necrosis suspected/confirmed (not prophylactic).

### Acute Liver Failure (ALF)
Rapid deterioration of liver function (coagulopathy INR ≥1.5, encephalopathy) in a patient without pre-existing cirrhosis, with illness duration <26 weeks.
*   **Causes**: Acetaminophen overdose (most common in US/UK), viral hepatitis (A, B, E), drug-induced liver injury (DILI), autoimmune hepatitis, Wilson's disease, ischemic hepatopathy, HELLP syndrome.
*   **Management**:
    1.  **Identify and Treat Cause**: E.g., N-acetylcysteine (NAC) for acetaminophen toxicity (regardless of time since ingestion if ALF suspected).
    2.  **Supportive Care in ICU**: Manage coagulopathy (FFP, Vitamin K - often ineffective), hypoglycemia, encephalopathy (Lactulose, Rifaximin), cerebral edema (ICP monitoring, mannitol), AKI (may need RRT).
    3.  **Infection Prophylaxis/Treatment**.
    4.  **Referral to Transplant Center**: Liver transplantation is definitive treatment for many. King's College Criteria or MELD score help assess prognosis/need for transplant.

### Bowel Obstruction
*   **Small Bowel Obstruction (SBO)**: Causes: Adhesions (most common), hernias, tumors. Presentation: Colicky abdominal pain, N/V (bilious/feculent), distension, obstipation.
*   **Large Bowel Obstruction (LBO)**: Causes: Tumors (most common), volvulus, diverticular stricture. Presentation: Gradual onset pain, distension, constipation/obstipation.
*   **Management**:
    1.  **NPO, IV Fluids, Electrolyte Correction**.
    2.  **Nasogastric (NG) Decompression**: For SBO, may be therapeutic.
    3.  **Pain Control**.
    4.  **Surgical Consultation**: For complete obstruction, signs of ischemia/strangulation (fever, tachycardia, leukocytosis, peritoneal signs), or failure of conservative management.

### ICU Nutritional Support
*   **Goal**: Provide adequate calories and protein to prevent malnutrition, support healing, and maintain organ function.
*   **Assessment**: Identify patients at nutritional risk.
*   **Enteral Nutrition (EN)**: Preferred route if gut is functional ("if the gut works, use it").
    *   Start early (within 24-48h of admission).
    *   Formulas: Standard, high-protein, fiber-containing, disease-specific (e.g., renal, diabetic).
    *   Gastric vs. Post-pyloric feeding.
    *   Monitor for tolerance (residuals, distension, diarrhea), aspiration risk (HOB elevation).
*   **Parenteral Nutrition (PN/TPN)**: Used when EN is contraindicated or insufficient.
    *   Administered via central line.
    *   Risks: CLABSI, hyperglycemia, electrolyte imbalances, liver dysfunction (cholestasis), refeeding syndrome.
    *   Monitor labs closely (glucose, LFTs, triglycerides, electrolytes).

### Refeeding Syndrome
Metabolic derangements occurring when nutrition is reintroduced after a period of starvation.
*   **Pathophysiology**: Insulin release -> intracellular shift of phosphate, potassium, magnesium.
*   **Key Feature**: Hypophosphatemia. Also hypokalemia, hypomagnesemia, thiamine deficiency, fluid overload.
*   **Risks**: Cardiac arrhythmias, respiratory failure, seizures, death.
*   **Prevention/Management**: Identify high-risk patients. Start nutrition slowly (e.g., 25-50% of goal initially). Aggressively monitor and replete electrolytes (especially phosphate, potassium, magnesium) *before* and during refeeding. Administer thiamine.`,
    categoryType: 'Body System',
    keywordsForImage: 'digestive system',
  },
  {
    id: 'hematologic',
    slug: 'hematologic',
    title: 'Hematologic System',
    summary: 'Focus on common hematologic issues in the ICU, including anemia, thrombocytopenia, coagulopathies, DIC, and transfusion reactions.',
    content: `The hematologic system involves blood and blood-forming organs. Critically ill patients often develop hematologic derangements due to their underlying illness, treatments, or complications.

### Anemia in the ICU
Common in ICU patients due to blood loss (overt or occult), frequent phlebotomy, inflammation (anemia of chronic disease/inflammation), nutritional deficiencies, hemolysis, or bone marrow suppression.
*   **Transfusion Thresholds**: Generally restrictive. Transfuse RBCs if Hgb <7 g/dL in stable patients. Higher thresholds (Hgb <8-9 g/dL) may be considered in symptomatic anemia, active bleeding, acute coronary syndrome, or septic shock with poor perfusion.
*   **Minimize Phlebotomy**: Use small volume tubes, batch lab draws.
*   **Iron, B12, Folate**: Assess and replete if deficient.

### Thrombocytopenia in the ICU
Platelet count <150,000/μL. Common and multifactorial.
*   **Causes**:
    *   Sepsis (most common ICU cause - due to consumption, bone marrow suppression).
    *   Medications (e.g., heparin - HIT, antibiotics, H2 blockers, diuretics).
    *   Dilutional (massive transfusion).
    *   Immune Thrombocytopenic Purpura (ITP).
    *   Thrombotic Thrombocytopenic Purpura (TTP) / Hemolytic Uremic Syndrome (HUS).
    *   Disseminated Intravascular Coagulation (DIC).
    *   Liver disease (splenic sequestration, ↓thrombopoietin).
    *   Bone marrow disorders.
*   **Management**:
    *   **Treat Underlying Cause**.
    *   **Platelet Transfusion**: Generally for active bleeding or if count <10,000-20,000/μL (higher if invasive procedure planned or high bleeding risk). Not indicated for HIT or TTP unless life-threatening bleed.
    *   **Investigate for HIT**: If patient on heparin and platelet count drops >50% or new thrombosis occurs (typically 5-14 days after heparin start). Confirm with HIT antibody testing (e.g., ELISA for PF4/heparin Ab) and serotonin release assay (SRA). If HIT suspected, stop all heparin products and start alternative anticoagulant (e.g., Argatroban, Bivalirudin).

### Coagulopathies
Disorders of blood clotting.
*   **Common Tests**:
    *   **Prothrombin Time (PT) / International Normalized Ratio (INR)**: Measures extrinsic and common pathways (Factors VII, X, V, II, fibrinogen). Prolonged in liver disease, Vitamin K deficiency, warfarin use.
    *   **Activated Partial Thromboplastin Time (aPTT)**: Measures intrinsic and common pathways (Factors XII, XI, IX, VIII, X, V, II, fibrinogen). Prolonged in heparin use, hemophilia, DIC.
    *   **Fibrinogen**: Assess fibrinogen levels.
    *   **Thromboelastography (TEG) / Rotational Thromboelastometry (ROTEM)**: Viscoelastic tests providing a global assessment of clot formation, strength, and lysis. Useful for guiding goal-directed transfusion in trauma/major bleeding.
*   **Management**:
    *   **Fresh Frozen Plasma (FFP)**: For correction of multiple factor deficiencies (e.g., liver disease, warfarin reversal with active bleeding, DIC). INR target <1.5-1.7.
    *   **Cryoprecipitate**: Rich in fibrinogen, Factor VIII, Factor XIII, von Willebrand factor. Used for hypofibrinogenemia, uremic bleeding.
    *   **Prothrombin Complex Concentrates (PCCs)**: Contain Vitamin K-dependent factors (II, VII, IX, X). Rapid warfarin reversal.
    *   **Vitamin K**: For warfarin reversal (slower onset) or Vitamin K deficiency.
    *   **Specific Factor Concentrates**: For hemophilia (Factor VIII or IX).
    *   **Desmopressin (DDAVP)**: For uremic platelet dysfunction or mild von Willebrand disease.

### Disseminated Intravascular Coagulation (DIC)
Systemic activation of coagulation leading to widespread microvascular thrombosis and subsequent consumption of clotting factors and platelets, resulting in bleeding. Always secondary to an underlying disorder.
*   **Causes**: Sepsis (most common), trauma, malignancy, obstetric complications, severe burns, pancreatitis.
*   **Clinical Features**: Bleeding (oozing from sites, petechiae, purpura, major hemorrhage) AND/OR thrombosis (organ dysfunction, DVT/PE).
*   **Lab Findings**: Thrombocytopenia, prolonged PT/INR, prolonged aPTT, low fibrinogen, elevated D-dimer/FDPs, schistocytes on peripheral smear.
*   **Management**:
    1.  **Treat Underlying Cause**: CRITICAL.
    2.  **Supportive Care**:
        *   **If Bleeding Dominant**: Transfuse platelets (target >20-50k), FFP (target INR <1.5-1.7), cryoprecipitate (target fibrinogen >100-150 mg/dL).
        *   **If Thrombosis Dominant (and no major bleeding)**: Anticoagulation (e.g., heparin) may be considered cautiously, but controversial.
    *   Avoid unnecessary invasive procedures.

### Transfusion Reactions

| Reaction Type             | Onset/Symptoms                                                                                    | Pathophysiology                                     | Management                                                                                                |
|---------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Acute Hemolytic**       | Immediate (or within 24h). Fever, chills, hypotension, tachycardia, flank pain, hemoglobinuria (red urine), DIC. | ABO incompatibility -> intravascular hemolysis.       | **STOP transfusion immediately!** Maintain IV access with NS. Notify provider/blood bank. Supportive care (BP, UOP), check for DIC. Send blood/urine samples. |
| **Febrile Non-Hemolytic (FNHTR)** | Within 1-2 hours. Fever (≥1°C rise), chills, rigors, headache. Common.                             | Cytokines from donor WBCs, or recipient Ab to donor WBCs. | **STOP transfusion.** Rule out hemolytic reaction. Antipyretics. May restart slowly if mild & no other signs. Leukoreduced products for future. |
| **Allergic (Mild/Urticarial)** | Within minutes to hours. Urticaria (hives), pruritus, flushing.                                  | Recipient Ab to donor plasma proteins.                | **STOP transfusion.** Antihistamines (e.g., diphenhydramine). May restart slowly if symptoms resolve.       |
| **Anaphylactic (Severe Allergic)** | Immediate (seconds to minutes). Hypotension, bronchospasm, angioedema, urticaria, shock. Rare, life-threatening. | IgA deficiency with anti-IgA antibodies (common cause). | **STOP transfusion immediately!** Epinephrine, antihistamines, steroids, airway/BP support. Washed RBCs/platelets for future. |
| **Transfusion-Associated Circulatory Overload (TACO)** | Within 6 hours. Dyspnea, orthopnea, cough, tachycardia, hypertension, pulmonary edema (rales, JVD). | Fluid overload, especially in susceptible patients (HF, renal failure). | **STOP or slow transfusion.** Diuretics, O2, supportive care. Sit patient upright. Prevent with slower infusion rates. |
| **Transfusion-Related Acute Lung Injury (TRALI)** | Within 6 hours. Acute dyspnea, hypoxemia, bilateral pulmonary infiltrates (non-cardiogenic pulmonary edema), fever, hypotension. | Donor antibodies reacting with recipient leukocytes -> pulmonary capillary damage. | **STOP transfusion immediately!** Supportive care (O2, mechanical ventilation if needed). Notify blood bank (donor deferral). |
| **Bacterial Contamination (Septic Reaction)** | Rapid onset (minutes to hours). High fever, chills, rigors, hypotension, shock, N/V/D.              | Bacterial contamination of blood product (esp. platelets). | **STOP transfusion immediately!** Blood cultures (patient & product). Broad-spectrum IV antibiotics. Supportive care for sepsis. |
| **Delayed Hemolytic**     | Days to weeks post-transfusion. Mild jaundice, falling Hgb, unexplained fever.                     | Alloantibodies (often Kidd, Duffy, Kell) from prior sensitization -> extravascular hemolysis. | Usually mild, supportive care. Notify blood bank for antibody identification for future transfusions.      |

**Transfusion Administration Procedure**:
*   Verify order, patient consent.
*   Two RN check at bedside: Patient ID (2 identifiers), blood product type, unit number, ABO/Rh compatibility, expiration date.
*   Use appropriate filter tubing. Start infusion slowly (e.g., 2 mL/min or 120 mL/hr for first 15 mins).
*   Stay with patient for first 15 mins, monitor vital signs frequently (pre, 15 min, post, and prn).
*   Complete transfusion within 4 hours from removal from blood bank.`,
    categoryType: 'Body System',
    keywordsForImage: 'blood cells',
  },
  {
    id: 'immune',
    slug: 'immune',
    title: 'Immune System & Sepsis',
    summary: 'Overview of the immune response, sepsis pathophysiology, recognition (SIRS, qSOFA, SOFA), and management bundles in critical care.',
    content: `The immune system defends the body against pathogens and abnormal cells. It involves innate (non-specific, rapid) and adaptive (specific, memory) responses. In critical illness, dysregulation of the immune system, particularly in sepsis, is a major concern.

### Sepsis and Septic Shock
Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection. Septic shock is a subset of sepsis with circulatory, cellular, and metabolic abnormalities profound enough to substantially increase mortality.

**Definitions (Sepsis-3 Criteria)**:
*   **Sepsis**: Suspected or documented infection AND an acute increase of ≥2 SOFA points (Sequential Organ Failure Assessment score) - a proxy for organ dysfunction.
*   **Septic Shock**: Sepsis AND vasopressor therapy needed to elevate MAP ≥65 mmHg AND lactate >2 mmol/L (18 mg/dL) despite adequate fluid resuscitation.

**Screening Tools**:
*   **qSOFA (quick SOFA)**: For use outside ICU. Identifies patients with suspected infection who are likely to have poor outcomes. ≥2 of:
    *   Respiratory rate ≥22/min
    *   Altered mentation (GCS <15)
    *   Systolic blood pressure ≤100 mmHg
*   **SIRS (Systemic Inflammatory Response Syndrome)**: Older criteria, less specific for sepsis but still used by some. ≥2 of:
    *   Temperature >38°C or <36°C
    *   Heart rate >90 bpm
    *   Respiratory rate >20/min or PaCO2 <32 mmHg
    *   WBC >12,000/mm³, <4,000/mm³, or >10% bands

### Pathophysiology of Sepsis
1.  **Infection**: Pathogen invasion triggers immune response.
2.  **Inflammatory Cascade**: Release of pro-inflammatory cytokines (TNF-α, IL-1, IL-6) and anti-inflammatory mediators.
3.  **Endothelial Dysfunction**: Increased vascular permeability, vasodilation, microthrombi formation.
4.  **Organ Dysfunction**: Hypoperfusion, cellular hypoxia, mitochondrial dysfunction lead to organ failure (lungs - ARDS, kidneys - AKI, heart - myocardial depression, brain - encephalopathy, liver - dysfunction, coagulation - DIC).
5.  **Immune Dysregulation**: Can lead to immunosuppression in later stages, increasing risk of secondary infections.

### Surviving Sepsis Campaign Bundles (Summarized - Refer to latest guidelines)

#### Hour-1 Bundle (Elements to be *initiated* within 1 hour of sepsis recognition):
1.  **Measure Lactate Level**: Remeasure if initial lactate is elevated (>2 mmol/L).
2.  **Obtain Blood Cultures BEFORE Administering Antibiotics**: (If it doesn't cause significant delay in antibiotic admin).
3.  **Administer Broad-Spectrum Antibiotics**: Within 1 hour. Tailor based on suspected source, local resistance patterns, patient factors.
4.  **Begin Rapid Administration of 30 mL/kg Crystalloid for Hypotension or Lactate ≥4 mmol/L**: Complete within 3 hours. Reassess fluid responsiveness.
5.  **Apply Vasopressors if Hypotensive During or After Fluid Resuscitation to Maintain MAP ≥65 mmHg**: Norepinephrine is first-line.

#### Ongoing Management
*   **Source Control**: Identify and treat/remove source of infection (e.g., drain abscess, remove infected line, debride tissue).
*   **Fluid Therapy**: Guided by dynamic measures of fluid responsiveness (e.g., PLR, SVV/PPV, Echo). Avoid fluid overload.
*   **Vasopressors**: Norepinephrine first-line. Add Vasopressin or Epinephrine if MAP goals not met with Norepinephrine alone. Consider Angiotensin II for refractory shock.
*   **Inotropes**: Consider Dobutamine if ongoing hypoperfusion despite adequate fluid and vasopressors, or evidence of myocardial dysfunction.
*   **Corticosteroids**: Consider IV hydrocortisone (e.g., 200 mg/day) for adult patients with septic shock and ongoing hemodynamic instability despite adequate fluid and vasopressor therapy (controversial, guidelines vary).
*   **Ventilation for ARDS**: Low tidal volume ventilation.
*   **Glucose Control**: Target 140-180 mg/dL.
*   **Renal Replacement Therapy**: If AKI with indications.
*   **DVT Prophylaxis**: Pharmacologic (LMWH/UFH unless contraindicated) and/or mechanical.
*   **Stress Ulcer Prophylaxis**: PPIs or H2 blockers for patients with risk factors.
*   **Nutrition**: Early enteral nutrition if tolerated.

### Anaphylaxis
Severe, life-threatening systemic hypersensitivity reaction.
*   **Triggers**: Foods, medications (esp. antibiotics, NSAIDs), insect stings, latex.
*   **Clinical Features**: Rapid onset. Skin (urticaria, angioedema, flushing), Respiratory (dyspnea, wheeze, stridor, hypoxemia), Cardiovascular (hypotension, tachycardia, shock), GI (N/V/D, abdominal pain).
*   **Management**:
    1.  **Epinephrine IM**: First-line and most critical treatment. 0.3-0.5 mg (1:1000) IM anterolateral thigh. Repeat q5-15 min prn.
    2.  **Airway Management**: Supplemental O2. Prepare for intubation if angioedema/respiratory distress.
    3.  **Circulatory Support**: IV fluids for hypotension. IV Epinephrine infusion for refractory hypotension/shock.
    4.  **Adjunctive Therapies**:
        *   Antihistamines: H1 blockers (Diphenhydramine IV/IM), H2 blockers (Ranitidine/Famotidine IV).
        *   Corticosteroids: (e.g., Methylprednisolone IV) to prevent prolonged/biphasic reaction (onset 4-6h).
        *   Bronchodilators: (e.g., Albuterol nebulized) for bronchospasm.
    5.  **Observation**: At least 4-8 hours (longer for severe reactions or biphasic risk).
    6.  **Discharge**: Prescribe epinephrine auto-injector, educate on use and avoidance of triggers, refer to allergist.

### Neutropenic Fever
Fever (single oral temp ≥38.3°C or ≥38.0°C sustained for ≥1h) in a patient with neutropenia (Absolute Neutrophil Count (ANC) <500/mm³ or <1000/mm³ and predicted to fall <500/mm³). A medical emergency.
*   **Management**:
    1.  **Prompt Empiric Broad-Spectrum Antibiotics**: Within 1 hour of presentation. Cover Pseudomonas (e.g., Cefepime, Piperacillin-Tazobactam, Meropenem). Add Vancomycin if suspected catheter infection, skin/soft tissue infection, pneumonia, or hemodynamic instability.
    2.  **Blood Cultures & Other Cultures**: Before antibiotics if no significant delay.
    3.  **Risk Stratification**: (e.g., MASCC score) to determine inpatient vs. outpatient management (ICU if unstable).
    4.  **Supportive Care**.
    5.  **Granulocyte Colony-Stimulating Factors (G-CSF)**: May be considered in high-risk patients.`,
    categoryType: 'Body System',
    keywordsForImage: 'immune cells antibody',
  },
  {
    id: 'musculoskeletal',
    slug: 'musculoskeletal',
    title: 'Musculoskeletal System',
    summary: 'Focuses on rhabdomyolysis, compartment syndrome, and mobility/VTE prophylaxis in critically ill patients.',
    content: `While not always the primary focus in ICU, musculoskeletal issues can significantly impact patient outcomes, morbidity, and length of stay.

### Rhabdomyolysis
Syndrome characterized by skeletal muscle injury and release of intracellular contents (myoglobin, creatine kinase (CK), potassium, phosphate) into circulation.
*   **Causes**:
    *   Trauma/Crush Injury
    *   Prolonged Immobilization / Coma
    *   Extreme Exertion (e.g., status epilepticus, hyperthermia)
    *   Drugs/Toxins (statins, colchicine, alcohol, cocaine, certain infections)
    *   Ischemia (compartment syndrome, arterial occlusion)
    *   Electrolyte abnormalities (hypokalemia, hypophosphatemia)
*   **Clinical Features**: Muscle pain, weakness, dark (tea-colored) urine (myoglobinuria). May be asymptomatic initially.
*   **Diagnosis**: Markedly elevated CK (typically >5x ULN, often >5,000-10,000 IU/L). Myoglobinuria. Hyperkalemia, hyperphosphatemia, hypocalcemia (early, then hypercalcemia later).
*   **Complications**:
    *   **Acute Kidney Injury (AKI)**: Myoglobin is nephrotoxic. Most serious complication.
    *   Electrolyte disturbances leading to arrhythmias.
    *   Compartment syndrome.
    *   DIC.
*   **Management**:
    1.  **Aggressive IV Fluid Resuscitation**: Early and high-volume (e.g., 0.9% NaCl or LR) to maintain high urine output (target >100-200 mL/hr or 1-3 mL/kg/hr) and flush myoglobin.
    2.  **Urinary Alkalinization (Controversial)**: Sodium bicarbonate infusion to raise urine pH >6.5 (may reduce myoglobin precipitation in tubules). Limited evidence, potential risks (hypocalcemia, fluid overload).
    3.  **Mannitol (Controversial)**: Osmotic diuretic.
    4.  **Monitor and Correct Electrolytes**: Especially K⁺, Ca²⁺, PO₄³⁻.
    5.  **Treat Underlying Cause**.
    6.  **Renal Replacement Therapy**: For severe AKI, refractory hyperkalemia, or severe fluid overload.

### Compartment Syndrome
Increased pressure within a closed fascial compartment, leading to impaired tissue perfusion and potential muscle/nerve damage. A surgical emergency.
*   **Causes**: Trauma (fractures, crush injuries), burns, reperfusion injury after ischemia, constrictive casts/dressings, rhabdomyolysis with significant swelling. Most common in lower leg and forearm.
*   **Pathophysiology**: Swelling/bleeding within compartment -> ↑pressure -> venous outflow obstruction -> ↑capillary hydrostatic pressure -> further fluid extravasation -> arterial inflow compromise -> ischemia -> necrosis.
*   **Clinical Features (6 P's - often late findings, high index of suspicion needed)**:
    *   **Pain**: Out of proportion to injury, especially with passive stretch of muscles in the compartment. Earliest and most reliable sign.
    *   **Paresthesia**: Numbness, tingling (nerve compression).
    *   **Pallor**: Late sign.
    *   **Pulselessness**: Very late and ominous sign.
    *   **Paralysis**: Late sign.
    *   **Poikilothermia (Coolness)**: Late sign.
    *   Affected compartment feels tense and swollen ("rock hard").
*   **Diagnosis**: Primarily clinical. Compartment pressure measurement can confirm (needle manometry). Normal compartment pressure 0-10 mmHg. Pressure >30 mmHg, or delta pressure (Diastolic BP - Compartment Pressure) <20-30 mmHg, suggests compartment syndrome.
*   **Management**:
    1.  **Immediate Fasciotomy**: Surgical decompression of the compartment. Time is critical to save limb and function.
    2.  **Remove Constricting Dressings/Casts**.
    3.  **Elevate Limb to Heart Level** (not above, to avoid compromising arterial inflow).
    4.  **Analgesia**.
    5.  Supportive care (fluids, O2).

### ICU-Acquired Weakness (ICUAW)
Generalized weakness developing after onset of critical illness, without other identifiable cause. Includes Critical Illness Polyneuropathy (CIP) and Critical Illness Myopathy (CIM).
*   **Risk Factors**: Sepsis, multi-organ failure, prolonged mechanical ventilation, immobility, corticosteroids, NMBAs.
*   **Clinical Features**: Diffuse, symmetric limb weakness (proximal > distal), difficulty weaning from ventilator, muscle atrophy.
*   **Prevention/Management**:
    *   **Early Mobilization and Physical Therapy**: Most important intervention.
    *   Optimize glycemic control.
    *   Minimize sedation.
    *   Judicious use of corticosteroids and NMBAs.
    *   Nutritional support.

### Pressure Injuries (Pressure Ulcers)
Localized damage to skin and underlying tissue, usually over a bony prominence, as a result of pressure or pressure in combination with shear and/or friction.
*   **Risk Factors**: Immobility, malnutrition, decreased perfusion, moisture, sensory impairment, medical devices.
*   **Prevention (Key Nursing Role)**:
    *   **Risk Assessment**: (e.g., Braden Scale) on admission and regularly.
    *   **Repositioning**: Turn/reposition q2h (or per individualized plan). Use pressure-relieving surfaces/mattresses.
    *   **Skin Care**: Keep skin clean and dry. Use moisturizers. Avoid massaging bony prominences.
    *   **Nutrition**: Optimize nutritional status.
    *   **Device-Related Pressure Injury Prevention**: Pad under medical devices (ET tubes, O2 masks, NG tubes, SCDs), ensure proper fit, reposition devices regularly.
    *   **Heel Protection**: Elevate heels off bed ("float heels").

### Venous Thromboembolism (VTE) Prophylaxis
Critically ill patients are at high risk for DVT and PE due to immobility, inflammation, and hypercoagulability.
*   **Pharmacologic Prophylaxis**: Unfractionated Heparin (UFH) SubQ or Low Molecular Weight Heparin (LMWH, e.g., Enoxaparin) SubQ, unless contraindicated (e.g., active bleeding, severe thrombocytopenia). Dose adjust for renal impairment.
*   **Mechanical Prophylaxis**: Intermittent Pneumatic Compression (IPC) devices or graduated compression stockings, especially if pharmacologic prophylaxis is contraindicated or in addition to it for very high-risk patients.
*   **Early Mobilization**.`,
    categoryType: 'Body System',
    keywordsForImage: 'human skeleton muscle',
  },
  {
    id: 'integumentary',
    slug: 'integumentary',
    title: 'Integumentary System',
    summary: 'Management of skin integrity, pressure injuries, burns, and common dermatological conditions in the ICU.',
    content: `The integumentary system (skin, hair, nails, glands) is the body's largest organ, providing protection, temperature regulation, sensation, and synthesis of Vitamin D. In the ICU, skin integrity is frequently compromised.

### Pressure Injury (Pressure Ulcer) Prevention and Management
A major focus in ICU nursing care.
*   **Staging of Pressure Injuries**:
    *   **Stage 1**: Non-blanchable erythema of intact skin.
    *   **Stage 2**: Partial-thickness skin loss with exposed dermis (e.g., abrasion, blister, shallow crater).
    *   **Stage 3**: Full-thickness skin loss. Adipose (fat) is visible. Slough/eschar may be present. Undermining/tunneling may occur.
    *   **Stage 4**: Full-thickness skin and tissue loss with exposed fascia, muscle, tendon, ligament, cartilage, or bone. Slough/eschar, undermining/tunneling common.
    *   **Unstageable**: Obscured full-thickness skin and tissue loss (depth cannot be determined due to slough/eschar covering wound bed).
    *   **Deep Tissue Pressure Injury (DTPI)**: Persistent non-blanchable deep red, maroon, or purple discoloration of intact or non-intact skin, or blood-filled blister.

*   **Prevention Strategies (Recap from Musculoskeletal, as it's a shared concern)**:
    *   Comprehensive skin assessment on admission and daily (or more frequently if high risk).
    *   Use a validated risk assessment tool (e.g., Braden Scale).
    *   Regular repositioning schedule (e.g., q2h, individualized). Use lifting devices.
    *   Support surfaces: Specialized mattresses/overlays that redistribute pressure.
    *   Keep skin clean and dry. Manage incontinence promptly. Use pH-balanced cleansers. Apply moisturizers to prevent dryness.
    *   Optimize nutrition and hydration.
    *   Minimize friction and shear (e.g., HOB ≤30° unless contraindicated, use draw sheets).
    *   Protect bony prominences (padding, heel elevation).
    *   Prevent medical device-related pressure injuries (assess skin under devices, pad, secure properly).

*   **Management of Existing Pressure Injuries**:
    *   **Wound Assessment**: Location, stage, size (length, width, depth), wound bed characteristics (granulation, slough, eschar), exudate (amount, type, odor), periwound skin condition, pain.
    *   **Cleansing**: Use normal saline or non-cytotoxic wound cleanser.
    *   **Debridement**: Removal of non-viable tissue (slough, eschar) by surgical, enzymatic, autolytic, or mechanical means (as appropriate for wound and patient).
    *   **Dressings**: Select based on wound characteristics (e.g., moisture balance, depth, presence of infection, periwound skin). Examples: hydrocolloids, foams, alginates, hydrogels, silver-impregnated dressings.
    *   **Manage Infection**: Monitor for signs of local or systemic infection. Obtain cultures if indicated. Topical or systemic antibiotics as ordered.
    *   **Nutritional Support**: Adequate protein, calories, vitamins (C, A), minerals (zinc) are crucial for healing.
    *   **Pain Management**.
    *   Consult Wound Care Specialist.

### Burn Management in ICU (Overview)
Major burns require specialized ICU care.
*   **Assessment**:
    *   **Type of Burn**: Thermal, chemical, electrical, radiation.
    *   **Total Body Surface Area (TBSA)**: Rule of Nines (adults), Lund-Browder chart (more accurate, esp. peds).
    *   **Depth of Burn**: Superficial (1st degree), Partial-thickness (2nd degree - superficial or deep), Full-thickness (3rd degree), Deeper (4th degree - involves muscle/bone).
    *   **Inhalation Injury Assessment**: Suspect if facial burns, singed nasal hairs, soot in sputum, hoarseness, history of burn in enclosed space. May require bronchoscopy.
*   **Initial Management (ABCDEs)**:
    *   **Airway**: Secure airway early if inhalation injury or extensive facial/neck burns (risk of edema).
    *   **Breathing**: Supplemental O2. Monitor for respiratory distress, CO poisoning (carboxyhemoglobin levels).
    *   **Circulation**: Aggressive fluid resuscitation using Parkland formula (4 mL LR x kg body weight x %TBSA burned = total fluid in first 24h; give 1/2 in first 8h post-burn, 1/2 in next 16h). Titrate to urine output (target 0.5-1 mL/kg/hr for adults, or 30-50 mL/hr; higher for electrical burns with rhabdo).
    *   **Disability**: Neurological assessment.
    *   **Exposure/Environment**: Remove clothing/jewelry, keep patient warm (risk of hypothermia).
*   **Wound Care**: Cleansing, debridement, topical antimicrobials (e.g., silver sulfadiazine, mafenide acetate, bacitracin), dressings.
*   **Pain Management**: IV opioids.
*   **Nutritional Support**: Hypermetabolic state requires high caloric and protein intake. Early EN.
*   **Infection Control**: Strict asepsis. Monitor for burn wound infection, sepsis.
*   **Complications**: Hypovolemic shock, ARDS, AKI, rhabdomyolysis (esp. electrical), compartment syndrome (circumferential burns - may need escharotomy/fasciotomy), contractures.

### Common ICU Dermatological Conditions
*   **Incontinence-Associated Dermatitis (IAD)**: Inflammation/irritation from exposure to urine/stool. Prevention: Gentle cleansing, moisture barrier creams/ointments, timely changes of incontinence products.
*   **Intertriginous Dermatitis (Intertrigo)**: Inflammation of skin folds due to moisture, friction. Keep areas clean and dry. Antifungal/antibacterial powders or creams if infected.
*   **Drug Rashes**: Morbilliform eruptions, urticaria, Stevens-Johnson Syndrome (SJS) / Toxic Epidermal Necrolysis (TEN) - severe, life-threatening mucocutaneous reactions (often to antibiotics, anticonvulsants). Requires immediate drug cessation, supportive care, often burn unit/dermatology consult for SJS/TEN.
*   **Fungal Infections**: Candidiasis common in moist areas, immunocompromised patients. Topical or systemic antifungals.
*   **Herpes Zoster (Shingles)**: Reactivation of varicella-zoster virus. Painful vesicular eruption in dermatomal distribution. Antivirals, pain control.

Meticulous skin assessment, preventive care, and prompt management of skin issues are vital to reduce complications, improve patient comfort, and support overall recovery in the critically ill.`,
    categoryType: 'Body System',
    keywordsForImage: 'skin layers anatomy',
  },
];

export const topics: ContentItem[] = [
  {
    id: 'hemodynamics',
    slug: 'hemodynamics',
    title: 'Advanced Hemodynamics',
    summary: 'Deep dive into hemodynamic principles, monitoring techniques, interpretation, and therapeutic interventions in critical care.',
    content: `Hemodynamics is the study of blood flow and the forces involved (pressure, resistance, flow). Understanding these principles is crucial for managing critically ill patients by optimizing tissue perfusion and oxygen delivery.

### Key Hemodynamic Parameters

| Parameter                             | Formula / Normal Value                      | Description                                                                 |
|---------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------|
| **Heart Rate (HR)**                   | Normal: 60-100 beats/min                    | Number of heartbeats per minute.                                            |
| **Stroke Volume (SV)**                | Normal: 60-100 mL/beat                      | Volume of blood ejected by the ventricle with each heartbeat.               |
| **Cardiac Output (CO)**               | CO = HR x SV; Normal: 4-8 L/min             | Volume of blood pumped by the heart per minute.                             |
| **Cardiac Index (CI)**                | CI = CO / BSA; Normal: 2.5-4 L/min/m²       | CO adjusted for body surface area (BSA). More accurate patient comparison.  |
| **Mean Arterial Pressure (MAP)**      | MAP ≈ (SBP + 2*DBP)/3; Normal: 70-105 mmHg  | Average arterial pressure during a cardiac cycle. Target >65 mmHg in shock.   |
| **Central Venous Pressure (CVP)**     | Normal: 2-8 mmHg                            | Pressure in the right atrium; estimates RV preload. Dynamic measures preferred for fluid responsiveness. |
| **Pulmonary Artery Pressure (PAP)**   | Systolic: 15-30 mmHg, Diastolic: 8-15 mmHg  | Pressures within the pulmonary artery.                                        |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | Normal: 6-12 mmHg                         | Indirectly measures left atrial pressure, reflecting LV preload.            |
| **Systemic Vascular Resistance (SVR)**| SVR = [(MAP - CVP) / CO] x 80; Normal: 800-1200 dynes·s/cm⁻⁵ | Resistance the left ventricle must overcome to eject blood (LV afterload).|
| **Pulmonary Vascular Resistance (PVR)**| PVR = [(MPAP - PAWP) / CO] x 80; Normal: <250 dynes·s/cm⁻⁵ | Resistance the right ventricle must overcome to eject blood (RV afterload).|
| **Mixed Venous Oxygen Saturation (SvO2)** | Normal: 60-80%                              | Oxygen saturation of blood returning to the right heart; reflects global tissue oxygen extraction (balance of DO2/VO2). |
| **Central Venous Oxygen Saturation (ScvO2)** | Normal: >70% (slightly higher than SvO2)    | Oxygen saturation from CVC in superior vena cava; surrogate for SvO2.         |

### Determinants of Stroke Volume

*   **Preload**: Ventricular end-diastolic volume/stretch.
    *   *Assessment*: CVP (RV preload), PAWP (LV preload) - static measures. Dynamic measures (SVV, PPV, PLR) are better predictors of fluid responsiveness.
    *   *Frank-Starling Law*: Increased preload (to a point) increases SV.
    *   *Factors increasing preload*: Fluid administration, positive pressure ventilation (can decrease initially then increase with recruitment), heart failure (volume overload).
    *   *Factors decreasing preload*: Diuretics, vasodilators, hemorrhage, dehydration, third spacing.
*   **Afterload**: Resistance to ventricular ejection.
    *   *Assessment*: SVR (LV afterload), PVR (RV afterload).
    *   *Factors increasing LV afterload*: Hypertension, aortic stenosis, vasopressors (e.g., Phenylephrine).
    *   *Factors decreasing LV afterload*: Vasodilators (e.g., Nitroglycerin, Nitroprusside), sepsis (distributive shock).
*   **Contractility (Inotropy)**: Intrinsic myocardial pump function/strength.
    *   *Assessment*: Difficult to measure directly; inferred from CI, SV, ejection fraction (via Echo).
    *   *Factors increasing contractility (Positive Inotropes)*: Dobutamine, Milrinone, Epinephrine, Dopamine (beta effects).
    *   *Factors decreasing contractility (Negative Inotropes)*: Beta-blockers, calcium channel blockers, acidosis, hypoxia, myocardial ischemia.

### Fluid Responsiveness Assessment

Predicting if a patient will increase their CO in response to a fluid bolus. Static measures (CVP, PAWP) are poor predictors.
*   **Passive Leg Raise (PLR)**: Transiently increases venous return (autotransfusion). Positive if CO/SV increases by 10-15%. Requires continuous CO monitoring.
*   **Stroke Volume Variation (SVV)** / **Pulse Pressure Variation (PPV)**: Variation in SV/PP during mechanical ventilation. SVV/PPV >10-15% suggests fluid responsiveness. Requires controlled mechanical ventilation, regular rhythm, no spontaneous breathing.
*   **Echocardiography**: Can assess LV filling, IVC diameter/collapsibility, and SV changes with maneuvers.

### Arterial Line Management & Waveform Analysis

Provides continuous BP, MAP calculation, and access for ABGs.
*   **Phlebostatic Axis**: 4th intercostal space (ICS), mid-axillary line (approximates RA level for accurate transducer placement).
*   **Arterial Waveform Components**:
    *   **Anacrotic Limb (Systolic Upstroke)**: Rapid rise in pressure as LV ejects blood into aorta. Slope indicates contractility and SVR.
    *   **Systolic Peak Pressure**: Highest point of waveform, represents peak systolic pressure.
    *   **Dicrotic Notch**: Small notch on downstroke, signifies aortic valve closure and beginning of diastole. Should be clearly visible.
    *   **Diastolic Runoff**: Gradual decline in pressure as blood flows to periphery during diastole.
*   **Square Wave Test (Fast Flush Test)**: Assesses system dynamic response (accuracy of pressure transduction).
    *   **Optimal Response**: After activating the fast flush, the waveform should show a sharp upstroke to the flush pressure, a clear plateau, and then a rapid drop. Following the drop, 1-2 oscillations (rings) should occur before the waveform returns to the patient's baseline pressure tracing. This indicates an accurately transmitting system.
    *   **Overdamped Response**: Fewer than 1.5 oscillations (or a slurred, blunted return to baseline) after the flush. The waveform will underestimate systolic pressure and overestimate diastolic pressure. Dicrotic notch may be absent or slurred.
        *   *Textual Description*: Imagine pulling a guitar string and it barely vibrates, returning to still very quickly and smoothly.
        *   *Causes*: Air bubbles in tubing/transducer, loose connections, kinks, blood clots in catheter, compliant tubing, low flush bag pressure.
    *   **Underdamped (Resonant) Response**: More than 2-3 oscillations ("ringing" or "whip") after the flush. The waveform will overestimate systolic pressure and underestimate diastolic pressure. Systolic peaks appear exaggerated or "spiked."
        *   *Textual Description*: Imagine pulling a guitar string and it vibrates excessively and for too long before settling.
        *   *Causes*: Stiff/long tubing, excessive stopcocks, catheter movement (whip), arteriosclerosis in patient, small catheter size.
*   **Troubleshooting Waveform Issues**:
    *   Always check patient first. Then, check connections from catheter to transducer to monitor.
    *   Ensure flush bag pressure is 300 mmHg.
    *   Zero and level transducer at phlebostatic axis with position changes.
    *   Remove air bubbles. Ensure no kinks.

### Pulmonary Artery Catheter (PAC / Swan-Ganz)

Provides comprehensive hemodynamic data including RA (CVP), RV, PA pressures (systolic, diastolic, mean), PAWP, CO (thermodilution), CI, SVR, PVR, and SvO2. Waveforms from each chamber are distinct:
*   **Right Atrial (RA) Waveform**: Low pressure, similar to CVP, with 'a', 'c', and 'v' waves.
*   **Right Ventricular (RV) Waveform**: Pulsatile, sharp upstroke to RV systolic pressure, rapid downstroke to near zero RV end-diastolic pressure. Risk of VTach during insertion.
*   **Pulmonary Artery (PA) Waveform**: Pulsatile, similar morphology to arterial line but lower pressures. Clear dicrotic notch indicates pulmonic valve closure.
*   **Pulmonary Artery Wedge Pressure (PAWP)**: Non-pulsatile, damped waveform reflecting left atrial pressure when balloon is inflated. Over-wedging (persistent inflation or migration) can cause PA rupture.

### Shock States & Hemodynamic Profiles

| Shock Type                     | CO/CI       | CVP/PAWP    | SVR         | SvO2/ScvO2  | Other Key Features / Treatment Focus                                           |
|--------------------------------|-------------|-------------|-------------|-------------|--------------------------------------------------------------------------------|
| **Hypovolemic**                | ↓↓↓         | ↓↓↓         | ↑↑          | ↓           | Hemorrhage, dehydration. Restore volume (crystalloids, colloids, blood products). |
| **Cardiogenic**                | ↓↓↓         | ↑↑↑         | ↑↑          | ↓           | MI, severe heart failure. Inotropes, vasopressors, mechanical support, reduce afterload. |
| **Septic (Distributive - early/hyperdynamic)** | ↑ or Normal | ↓ or Normal | ↓↓↓         | ↑ or Normal | Infection, vasodilation. Fluids, vasopressors (Norepinephrine), antibiotics.      |
| **Septic (Distributive - late/hypodynamic)** | ↓           | Variable    | Variable (can be low or high) | ↓           | Worsening sepsis, myocardial depression. Fluids, vasopressors, consider inotropes. |
| **Neurogenic (Distributive)**  | ↓           | ↓           | ↓↓↓         | Normal      | Spinal cord injury (T6 or above). Fluids, vasopressors (Phenylephrine often), Atropine. |
| **Anaphylactic (Distributive)**| ↓           | ↓           | ↓↓↓         | Normal      | Allergic reaction, vasodilation, bronchospasm. Epinephrine, antihistamines, steroids. |
| **Obstructive**                | ↓↓↓         | ↑↑ (CVP/RV specific findings) | Variable    | ↓           | PE, tamponade, tension pneumothorax. Relieve obstruction (e.g., thrombolysis, pericardiocentesis, needle decompression). |

*(↓ = Decreased, ↑ = Increased. Number of arrows indicates magnitude.)*

### Therapeutic Interventions

*   **Fluid Resuscitation**: Guided by dynamic parameters of fluid responsiveness. Crystalloids (e.g., Normal Saline, Lactated Ringer's) are often first-line.
*   **Vasopressors**: For hypotension despite adequate fluid resuscitation (target MAP usually >65 mmHg). Titrate to effect.
*   **Inotropes**: For cardiogenic shock or low CO states with evidence of end-organ hypoperfusion.
*   **Vasodilators**: To reduce afterload in conditions like hypertensive crisis or severe heart failure with high SVR, if BP allows.`,
    categoryType: 'Topic',
    keywordsForImage: 'hemodynamic monitor',
  },
  {
    id: 'critical-care-pharmacology',
    slug: 'critical-care-pharmacology',
    title: 'Critical Care Pharmacology Deep Dive',
    summary: 'Detailed pharmacology of common ICU medications, including vasoactive drugs, sedatives, analgesics, and antimicrobials.',
    content: `Critical care pharmacology involves a complex array of medications, often with narrow therapeutic windows and significant potential for interactions and adverse effects. Understanding their mechanisms, effects, and monitoring parameters is crucial.

### Vasoactive Medications

These drugs act on the cardiovascular system to alter heart rate, contractility, and vascular tone.

#### Vasopressors

Used to increase blood pressure, primarily by vasoconstriction, in shock states.

| Drug Name                     | Primary Receptors | Key Hemodynamic Effects               | Common Uses                     | Key Risks / Considerations                                   |
|-------------------------------|-------------------|---------------------------------------|---------------------------------|--------------------------------------------------------------|
| **Norepinephrine (Levophed)** | α1 > β1           | ↑↑SVR, ↑MAP, modest ↑CO/HR            | Septic shock (1st line), cardiogenic shock (if hypotensive) | Peripheral/mesenteric ischemia, extravasation, arrhythmias    |
| **Epinephrine**               | α1, β1, β2 (dose-dependent) | Low dose: ↑HR, ↑CO, ↓SVR (β2); High dose: ↑↑SVR, ↑↑CO, ↑↑HR (α1, β1 dominant) | Anaphylaxis, cardiac arrest, refractory shock, severe asthma | Tachyarrhythmias, myocardial ischemia, hyperglycemia, ↑lactate |
| **Phenylephrine (Neo-Synephrine)** | Pure α1           | ↑↑SVR, ↑MAP, may ↓HR (reflex bradycardia) | Hypotension (esp. with tachycardia, neurogenic shock) | Reflex bradycardia, severe vasoconstriction, reduced CO         |
| **Vasopressin**               | V1 (vascular), V2 (renal) | Vasoconstriction (non-adrenergic), ADH effect | Septic shock (adjunct, 0.03-0.04 units/min), GI bleed | Splanchnic/digital ischemia, hyponatremia, coronary ischemia |
| **Dopamine**                  | Dose-dependent: Low (renal): D1; Mid (cardiac): β1; High (vasopressor): α1 | Variable effects on HR, CO, SVR.  | Shock (less common now, considered 2nd line for bradycardia) | Tachyarrhythmias (more than norepinephrine), use with caution |
| **Angiotensin II (Giapreza)** | AT1 receptor      | Potent vasoconstriction, ↑aldosterone | Distributive shock refractory to other vasopressors | Thromboembolic events, peripheral ischemia                   |

#### Inotropes

Used to increase myocardial contractility in states of low cardiac output (e.g., cardiogenic shock, severe heart failure).

| Drug Name        | Mechanism / Receptors | Key Hemodynamic Effects                        | Common Uses                        | Key Risks / Considerations                          |
|------------------|-----------------------|------------------------------------------------|------------------------------------|-----------------------------------------------------|
| **Dobutamine**   | Primarily β1, some β2 | ↑↑Contractility, ↑CO, mild vasodilation (↓SVR) | Cardiogenic shock, ADHF, stress echo | Hypotension (if hypovolemic), tachyarrhythmias, tolerance |
| **Milrinone**    | PDE3 inhibitor        | ↑↑Contractility, significant vasodilation (↓SVR, ↓PVR), "inodilator" | ADHF, right heart failure, pulmonary HTN | Hypotension, arrhythmias, longer half-life (renal excretion) |
| **Epinephrine (low dose)** | β1, β2          | ↑Contractility, ↑HR, may ↓SVR                 | Post-cardiac surgery, refractory shock | As above for Epinephrine                            |
| **Isoproterenol**| Non-selective β (β1, β2)| Potent ↑HR, ↑Contractility, ↓↓SVR              | Bradycardia refractory to other treatments, AV block | Significant tachycardia, arrhythmias, hypotension        |

### Sedatives & Analgesics

Essential for patient comfort, anxiolysis, and to facilitate mechanical ventilation. Aim for light sedation (e.g., RASS -1 to 0) when possible.

#### Sedatives

| Drug Name                     | Class / Mechanism                     | Key Features / Effects                                     | Common Uses in ICU                | Key Risks / Considerations                                    |
|-------------------------------|---------------------------------------|------------------------------------------------------------|-----------------------------------|---------------------------------------------------------------|
| **Propofol (Diprivan)**       | GABA agonist                          | Rapid onset/offset, ↓ICP, anticonvulsant, antiemetic        | Sedation for ventilation, status epilepticus | Hypotension, bradycardia, respiratory depression, PRIS (Propofol Infusion Syndrome), hypertriglyceridemia, pain on injection |
| **Dexmedetomidine (Precedex)**| α2 agonist                            | "Cooperative sedation" (arousable), analgesia-sparing, minimal respiratory depression | Light-moderate sedation, weaning from ventilation, delirium prevention | Bradycardia, hypotension (initial hypertension possible), not for deep sedation |
| **Benzodiazepines (Midazolam, Lorazepam, Diazepam)** | GABA agonists                         | Anxiolysis, amnesia, anticonvulsant                        | Agitation, alcohol withdrawal, status epilepticus (less favored for routine sedation) | Delirium, respiratory depression, tolerance, withdrawal, accumulation (esp. Lorazepam with renal/hepatic impair) |
| **Ketamine**                  | NMDA antagonist                       | Dissociative anesthetic, analgesia, bronchodilation, preserves respiratory drive/BP | Sedation, analgesia (adjunct), procedural sedation, status asthmaticus | Emergence reactions (hallucinations), ↑secretions, ↑HR, ↑BP, ↑ICP (use cautiously in TBI) |

#### Analgesics

| Drug Name                          | Class / Mechanism                               | Key Features / Effects                                | Common Uses in ICU                | Key Risks / Considerations                                    |
|------------------------------------|-------------------------------------------------|-------------------------------------------------------|-----------------------------------|---------------------------------------------------------------|
| **Opioids (Fentanyl, Hydromorphone, Morphine, Remifentanil)** | Mu receptor agonists                          | Potent analgesia, sedation (dose-dependent)           | Pain management (acute, procedural) | Respiratory depression, hypotension, sedation, constipation, N/V, tolerance, withdrawal, chest wall rigidity (Fentanyl) |
| **Acetaminophen (IV/PO)**          | COX inhibitor (central)                         | Analgesia, antipyretic                                | Mild-moderate pain, fever, opioid-sparing | Hepatotoxicity (max dose 4g/day, lower if liver disease)      |
| **NSAIDs (e.g., Ketorolac IV)**    | COX-1 & COX-2 inhibitors                        | Analgesia, anti-inflammatory                          | Mild-moderate pain, inflammation, opioid-sparing | GI bleeding, renal dysfunction, platelet inhibition, bronchospasm (aspirin-sensitive asthma) |
| **Gabapentinoids (Gabapentin, Pregabalin)** | Alpha-2-delta ligands (calcium channels)  | Neuropathic pain                                      | Neuropathic pain, opioid-sparing (adjunct) | Sedation, dizziness, edema, renal dose adjustment             |

### Neuromuscular Blocking Agents (NMBAs)

Used for paralysis in specific situations (e.g., severe ARDS to improve ventilator synchrony, facilitate intubation, refractory increased ICP, control shivering). **Crucially, patients MUST have adequate sedation and analgesia when paralyzed.** Monitor with Train-of-Four (TOF) stimulation (target 1-2 twitches out of 4).

| Drug Name              | Class             | Onset/Duration     | Metabolism / Elimination | Key Considerations                                             |
|------------------------|-------------------|--------------------|--------------------------|----------------------------------------------------------------|
| **Succinylcholine**    | Depolarizing      | Rapid / Ultra-short| Plasma cholinesterase    | Intubation. Risks: hyperkalemia, malignant hyperthermia, ↑ICP/IOP |
| **Rocuronium**         | Non-depolarizing (Aminosteroid) | Rapid / Intermediate| Primarily hepatic        | Intubation, continuous infusion. Reversible with Sugammadex. |
| **Vecuronium**         | Non-depolarizing (Aminosteroid) | Intermediate / Intermediate | Hepatic, renal         | Continuous infusion. Accumulates in renal/hepatic failure.     |
| **Cisatracurium (Nimbex)** | Non-depolarizing (Benzylisoquinolinium) | Intermediate / Intermediate | Hofmann elimination (pH/temp dependent), ester hydrolysis | Preferred in renal/hepatic failure. Less histamine release. |

### Antimicrobials

Initiate broad-spectrum empiric therapy for suspected infections, then de-escalate based on culture results and sensitivities.
*   **Common Classes**: Beta-lactams (Penicillins, Cephalosporins, Carbapenems, Monobactams), Vancomycin (for MRSA - monitor troughs, risk of nephrotoxicity, Red Man Syndrome), Linezolid, Daptomycin, Fluoroquinolones, Aminoglycosides (monitor peaks/troughs, nephro/ototoxicity), Macrolides, Tetracyclines, Clindamycin.
*   **Antifungals (e.g., Fluconazole, Echinocandins, Amphotericin B)**: Used for fungal infections.
*   **Antivirals (e.g., Acyclovir, Oseltamivir)**: Used for viral infections.

Understanding pharmacokinetics (absorption, distribution, metabolism, excretion - ADME) and pharmacodynamics (drug effects) is vital in the ICU due to altered physiology in critical illness (e.g., organ dysfunction, fluid shifts, protein binding changes). Dose adjustments are frequently necessary.`,
    categoryType: 'Topic',
    keywordsForImage: 'medication pills',
  },
  {
    id: 'ventilator-management',
    slug: 'ventilator-management',
    title: 'Advanced Ventilator Management',
    summary: 'Principles and practices of mechanical ventilation, including modes, settings, troubleshooting, and liberation strategies.',
    content: `Mechanical ventilation is a life-sustaining intervention in the ICU. Its goals are to support gas exchange (oxygenation/ventilation), reduce the work of breathing, reverse respiratory muscle fatigue, and allow lung healing.

### Key Ventilator Settings

| Setting                          | Description & Typical Range/Target                                 | Purpose                                                                |
|----------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------------|
| **FiO2 (Fraction of Inspired Oxygen)** | 0.21 (room air) - 1.0. Titrate to SpO2 >90-92% or PaO2 55-80 mmHg. | Optimize oxygen delivery. Use lowest effective FiO2 to avoid O2 toxicity. |
| **PEEP (Positive End-Expiratory Pressure)** | Usually 5-10 cmH2O; higher in ARDS (up to 20-24 cmH2O).        | Prevents alveolar collapse at end-expiration, improves oxygenation (recruits alveoli), reduces atelectrauma. |
| **Tidal Volume (VT)**            | Target 6-8 mL/kg Predicted Body Weight (PBW); 4-6 mL/kg PBW for ARDS. | Volume of air delivered with each breath.                              |
| **Respiratory Rate (RR)**        | Usually 10-20 breaths/min. Adjusted based on PaCO2/pH and minute ventilation. | Controls minute ventilation (VE = RR x VT) and CO2 removal.            |
| **Inspiratory Time (Ti)**        | Typically 0.8-1.2 seconds.                                           | Duration of inspiration.                                               |
| **I:E Ratio**                    | Typically 1:2 to 1:3. Longer E-time for obstructive disease (e.g., 1:4, 1:5). | Ratio of inspiratory time to expiratory time.                          |
| **Inspiratory Pressure (Pinsp/PIP in PCV)** | Pressure delivered during inspiration in PC modes. Target for lowest effective to achieve VT. | Pressure limit for inspiration in PCV.                                 |
| **Pressure Support (PS)**        | Usually 5-20 cmH2O above PEEP during spontaneous breaths.            | Assists patient's spontaneous inspiratory effort, overcomes ETT resistance. |
| **Flow Rate (in VCV)**           | 40-100 L/min (adjusted for patient comfort and desired Ti/I:E ratio). | Speed at which VT is delivered. Higher flow = shorter Ti.                |
| **Flow Waveform (in VCV)**       | Square (constant flow) or Descending Ramp (decelerating flow).     | Pattern of flow delivery. Descending ramp may improve distribution of ventilation and reduce PIP. |
| **Trigger Sensitivity**          | Pressure (-0.5 to -2 cmH2O below PEEP) or Flow (1-3 L/min).        | Effort required by patient to initiate a ventilator-assisted breath.     |

### Common Ventilator Modes

| Mode                                     | Description                                                                                                | Key Features / Use                                                                    |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Volume Control Ventilation (VCV / AC-VC)** | Delivers a preset tidal volume. Inspiratory pressure varies with lung mechanics.                           | Guarantees minute ventilation. Risk of high pressures if compliance ↓ or resistance ↑.  |
| **Pressure Control Ventilation (PCV / AC-PC)** | Delivers a preset inspiratory pressure for a set inspiratory time. Tidal volume varies.                  | Limits peak airway pressure. VT can vary with patient effort and lung mechanics.      |
| **Pressure Support Ventilation (PSV)**   | Patient-triggered, pressure-assisted breaths. Patient controls rate, Ti, and inspiratory flow.             | Used for weaning, SBTs. Patient must have reliable respiratory drive.                   |
| **Synchronized Intermittent Mandatory Ventilation (SIMV-VC or SIMV-PC)** | Delivers a set number of mandatory breaths (VC or PC). Allows spontaneous breaths (often with PS) between mandatory breaths. | Allows patient to contribute to work of breathing; less common now due to potential for dyssynchrony and increased WOB. |
| **CPAP (Continuous Positive Airway Pressure)** | Provides a constant level of positive pressure throughout the respiratory cycle during spontaneous breathing. Often used with PSV. | Maintains alveolar recruitment, supports oxygenation.                               |
| **PRVC (Pressure Regulated Volume Control)** | Volume-targeted, pressure-limited mode. Ventilator adjusts pressure breath-by-breath to deliver set VT using lowest possible pressure. | Combines benefits of VC and PC.                                                       |
| **APRV (Airway Pressure Release Ventilation)** | High continuous positive airway pressure (Phigh) held for a long duration (Thigh), with brief releases to a lower pressure (Plow) for a short duration (Tlow) to facilitate CO2 clearance. Essentially inverse ratio ventilation. | Used in severe ARDS for alveolar recruitment and oxygenation.                         |
| **ASV (Adaptive Support Ventilation)**   | Adjusts settings (RR, VT, Pinsp) based on patient lung mechanics (Otis formula) and effort to achieve target minute ventilation with minimal WOB. | Highly automated, requires careful monitoring.                                        |

### Ventilator Waveform Analysis (Scalars)

Ventilator graphics (scalars) display pressure, flow, and volume over time. They are essential for assessing patient-ventilator interaction and lung mechanics.

#### Pressure-Time Waveform
*   **VCV**: Rises during inspiration to PIP, then drops to PEEP. Pplat visible during inspiratory pause.
    *   *Shape*: If PIP is significantly higher than Pplat, indicates high airway resistance. If PIP and Pplat are both high and close together, indicates poor lung compliance.
*   **PCV**: Rapid rise to set inspiratory pressure, maintained for Ti, then drops to PEEP.
    *   *Shape*: Should be rectangular. If pressure droops during inspiration, patient effort is exceeding set pressure or flow.

#### Flow-Time Waveform
*   **VCV (Square Waveform Flow Pattern)**: Inspiratory flow is constant (rectangular shape), then drops to zero. Expiratory flow is passive, decelerating curve.
*   **VCV (Descending Ramp Flow Pattern)**: Inspiratory flow starts high and decelerates. Expiratory flow is passive.
*   **PCV**: Inspiratory flow is high initially, then decelerates as alveolar pressure equilibrates with set inspiratory pressure. Should ideally reach zero before inspiration ends (if Ti is adequate). Expiratory flow is passive.
*   **Common Findings**:
    *   **Flow Starvation (Air Hunger)**: In VCV or PCV, if the inspiratory flow waveform appears "scooped" or concave during inspiration, it suggests patient demand exceeds delivered flow. Increase flow rate (VCV), or increase pressure/shorten Ti (PCV if flow doesn't reach zero).
    *   **Auto-PEEP (Air Trapping)**: Expiratory flow does not return to baseline (zero) before the next breath begins. Indicates incomplete exhalation.
    *   **Bronchospasm/Increased Resistance**: Prolonged expiratory flow, reduced peak expiratory flow.
    *   **Active Expiration**: Patient actively exhaling against ventilator, seen as an abrupt spike in expiratory flow.

#### Volume-Time Waveform
*   Smooth rise during inspiration to set VT (VCV) or delivered VT (PCV), then smooth fall during exhalation.
*   **Common Findings**:
    *   **Air Leak**: Expiratory portion of the volume curve does not return to baseline (zero), or measured exhaled VT is consistently less than inhaled VT. Indicates leak in circuit or around ETT cuff.

### Monitoring & Troubleshooting

*   **Peak Inspiratory Pressure (PIP)**: Highest pressure during inspiration (dynamic pressure). Reflects airway resistance + elastic recoil.
*   **Plateau Pressure (Pplat)**: Static pressure during an inspiratory pause (0.5-1 sec). Reflects alveolar pressure (keep <30 cmH2O).
*   **Driving Pressure (ΔP)**: Pplat - Total PEEP. Associated with ARDS mortality; aim for <15 cmH2O.
*   **Auto-PEEP (Intrinsic PEEP / Dynamic Hyperinflation)**: Air trapping. Measure with an expiratory hold maneuver and observe on flow-time waveform.
*   **Patient-Ventilator Dyssynchrony**: Mismatch between patient effort and ventilator delivery.
    *   *Flow Asynchrony*: Flow starvation or excessive flow.
    *   *Trigger Asynchrony*: Missed triggers, double triggering, auto-triggering.
    *   *Cycle Asynchrony*: Premature cycling or delayed cycling.
    *   Management: Adjust settings, optimize sedation, consider mode change.

#### Common Ventilator Alarms

| Alarm Type              | Possible Causes                                                                                                | Initial Actions                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **High Pressure Alarm** | Kinked tube, secretions (need suction), patient biting ETT, bronchospasm, pneumothorax, ARDS, pulmonary edema, patient-ventilator dyssynchrony, water in circuit. | **Assess patient first!** Disconnect and manually ventilate if severe distress. Suction, check ETT position, assess breath sounds, check circuit for kinks/water. |
| **Low Pressure/Low Minute Ventilation Alarm** | Disconnection (patient, ventilator, or circuit), cuff leak, circuit leak, ETT displacement, apnea (if not in full support mode). | **Assess patient first!** Check all connections from ventilator to patient, check ETT cuff, assess respiratory effort. |
| **Apnea Alarm**         | Insufficient patient respiratory effort (in spontaneous/support modes), oversedation, neurological issue.      | **Assess patient!** Stimulate patient, ensure adequate ventilatory support, review sedation. |
| **High Respiratory Rate Alarm** | Pain, anxiety, hypoxia, hypercapnia, metabolic acidosis, patient-ventilator dyssynchrony.                   | **Assess patient!** Check ABG, vital signs, comfort, sedation. Address underlying cause. |
| **Low PEEP/CPAP Alarm** | Circuit leak, disconnection, inadequate flow to maintain PEEP.                                                   | Check circuit integrity, connections.                                                    |

**Always assess the patient first**, then the circuit, then the ventilator.

### ARDS Management Strategies

*   **Low Tidal Volume Ventilation (LTVV)**: 4-6 mL/kg PBW.
*   **Plateau Pressure <30 cmH2O**.
*   **Appropriate PEEP**: Use PEEP/FiO2 tables (e.g., ARDSNet) or titrate to best compliance/oxygenation/driving pressure.
*   **Permissive Hypercapnia**: Allow PaCO2 to rise (maintaining pH >7.20-7.25) to facilitate LTVV.
*   **Prone Positioning**: For moderate to severe ARDS (PaO2/FiO2 <150 mmHg on PEEP ≥5, FiO2 ≥0.6), typically 12-16 hours/day.
*   **Conservative Fluid Management**.
*   Consider **Neuromuscular Blocking Agents (NMBAs)** for early severe ARDS.

### Weaning and Liberation from Mechanical Ventilation

*   **Daily Spontaneous Awakening Trials (SATs)**.
*   **Daily Spontaneous Breathing Trials (SBTs)**.
*   **Weaning Parameters**: RSBI <105, NIF > -20 to -30 cmH2O, VC >10-15 mL/kg PBW.
*   **Extubation Criteria**: Successful SBT, effective cough, patent airway, adequate mentation, stable hemodynamics.`,
    categoryType: 'Topic',
    keywordsForImage: 'ICU ventilator screen',
  },
];

export const policies: ContentItem[] = [
  {
    id: 'stroke-protocols',
    slug: 'stroke-protocols',
    title: 'Acute Stroke Management Protocols',
    summary: 'Unit-specific guidelines for rapid assessment, diagnosis, and intervention in acute ischemic and hemorrhagic stroke.',
    content: `**"Time is Brain."** Rapid identification and intervention are critical for improving outcomes in acute stroke. These protocols are guidelines and should be adapted to institutional policies and individual patient needs.

### Initial Actions (Suspected Stroke - Pre-Hospital & ED Arrival)

1.  **Activate Stroke Alert/Team Immediately.**
2.  **ABCs**: Assess airway, breathing, circulation. Provide O2 if SpO2 <94%.
3.  **Establish Last Known Well (LKW) Time**: Or last known normal. This is crucial for all treatment decisions.
4.  **Rapid Neurological Assessment**: Perform Cincinnati Prehospital Stroke Scale (CPSS: Facial droop, Arm drift, Speech abnormality) or Los Angeles Motor Scale (LAMS). In-hospital, a certified provider performs the full NIH Stroke Scale (NIHSS).
5.  **Vital Signs & Fingerstick Glucose**: Correct hypoglycemia (<60 mg/dL) promptly. Treat severe hypertension per guidelines.
6.  **STAT Non-Contrast Head CT**: Must be obtained and interpreted rapidly (e.g., within 20-25 minutes of arrival for ED patients) to differentiate ischemic vs. hemorrhagic stroke. This is the most critical initial diagnostic test.
7.  **IV Access**: Establish 2 large-bore IVs if possible.
8.  **Labs**: CBC, CMP, PT/INR, aPTT, troponin. Consider type & screen. **Do not delay CT or tPA (if eligible) for lab results, except for glucose and INR/aPTT if patient is on anticoagulants.**

### Ischemic Stroke Protocol

#### IV Thrombolysis (Alteplase/tPA)

*   **Eligibility Criteria (General - refer to specific institutional checklist)**:
    *   Diagnosis of ischemic stroke causing measurable neurological deficit (NIHSS typically >4 or disabling deficit).
    *   LKW within **3 hours** for most patients.
    *   LKW within **3 to 4.5 hours** for a select group of patients (e.g., age <80, not on oral anticoagulants, NIHSS <25, no history of both diabetes and prior stroke).
    *   Age ≥18 years.
*   **Strict Exclusion Criteria (Selected Examples - consult full checklist)**:
    *   Evidence of hemorrhage on CT.
    *   Active internal bleeding or clinically significant bleeding (e.g., GI bleed within 3 weeks).
    *   Recent (within 3 months) intracranial/intraspinal surgery, serious head trauma, or previous stroke.
    *   Uncontrolled hypertension (SBP >185 mmHg or DBP >110 mmHg **despite initial treatment** to lower it).
    *   Known AVM, aneurysm, or neoplasm.
    *   Current use of anticoagulants with INR >1.7 or significantly elevated aPTT (varies by lab). Use of DOACs within 48 hours (or longer with renal impairment) unless specific reversal agents given and normal coagulation tests.
    *   Therapeutic LMWH in last 24 hours.
    *   Platelet count <100,000/mm³.
    *   Glucose <50 mg/dL or >400 mg/dL.
    *   Seizure at stroke onset if believed to be the cause of deficits.
*   **Alteplase Dosing**: 0.9 mg/kg (maximum 90 mg).
    *   10% of total dose as IV bolus over 1 minute.
    *   Remaining 90% infused IV over 60 minutes.
*   **Blood Pressure Management**:
    *   **Prior to tPA**: If SBP >185 or DBP >110, gently lower with IV Labetalol (10-20mg IVP, may repeat) or Nicardipine infusion (start 5mg/hr, titrate).
    *   **During and for 24 hours post-tPA**: Maintain SBP ≤180 mmHg and DBP ≤105 mmHg. More aggressive lowering may be considered.
*   **Post-tPA Care**:
    *   Avoid antiplatelets (aspirin)/anticoagulants for 24 hours. Follow-up CT at 24 hours before starting.
    *   Frequent neurological checks (e.g., NIHSS or modified NIHSS q15min x2h, q30min x6h, q1h x16h).
    *   Monitor for signs of intracranial hemorrhage (ICH) (acute worsening neuro status, severe headache, N/V, acute HTN) – if suspected, **stop tPA immediately** and obtain stat head CT.
    *   Monitor for angioedema (especially if on ACE inhibitors).

#### Mechanical Thrombectomy (Endovascular Therapy - EVT)

*   For Large Vessel Occlusion (LVO) in the anterior circulation (e.g., ICA, M1/M2 MCA). Select posterior circulation LVOs may also be considered.
*   **Time Window**:
    *   Up to **6 hours** from LKW if meeting core criteria (e.g., NIHSS ≥6, ASPECTS ≥6 on CT).
    *   Up to **24 hours** from LKW for select patients based on advanced imaging (e.g., CT perfusion or MRI DWI-FLAIR mismatch) as per DAWN/DEFUSE 3 trial criteria.
*   Often performed in conjunction with or after IV tPA if patient is eligible for both.
*   Requires CTA or MRA to identify LVO.

### Hemorrhagic Stroke Protocol

#### Intracerebral Hemorrhage (ICH)

*   **Goal**: Limit hematoma expansion, manage ICP, control BP, and prevent complications.
*   **Blood Pressure Control**: Rapidly lower SBP if >220 mmHg. For SBP 150-220 mmHg, target SBP <140 mmHg if safe, or at least <160 mmHg. Use IV Labetalol, Nicardipine, Clevidipine, or Esmolol. Avoid excessive or rapid BP drops that could compromise cerebral perfusion.
*   **Reversal of Anticoagulation (if applicable)**:
    *   Warfarin: Vitamin K IV (slow infusion), Prothrombin Complex Concentrate (PCC, e.g., Kcentra), or FFP if PCC unavailable. Target INR <1.4.
    *   DOACs: Specific reversal agents (Idarucizumab for Dabigatran; Andexanet Alfa for Factor Xa inhibitors like Rivaroxaban, Apixaban) or PCCs if specific agents unavailable or contraindicated.
*   **ICP Management**: As per general neurocritical care guidelines (HOB elevation, osmotic therapy, etc.). Consider EVD for hydrocephalus or ICP monitoring.
*   **Seizure Prophylaxis**: Generally not recommended unless seizure occurs or high risk. If seizures occur, treat with AEDs.
*   **Neurosurgical Consultation**: For potential hematoma evacuation, especially for cerebellar hematomas >3cm causing brainstem compression, or supratentorial hematomas with significant mass effect/herniation and neurological deterioration.

#### Subarachnoid Hemorrhage (SAH)

*   Often due to ruptured cerebral aneurysm.
*   **Secure Aneurysm**: Prompt endovascular coiling or surgical clipping to prevent rebleeding.
*   **Blood Pressure Control**: Maintain SBP typically <160 mmHg (or per neurosurgeon/neurointensivist) until aneurysm secured.
*   **Prevent/Manage Vasospasm** (typically occurs 4-14 days post-SAH):
    *   Nimodipine PO (60mg q4h) for 21 days.
    *   Maintain euvolemia (avoid hypovolemia).
    *   Monitor with daily Transcranial Dopplers (TCDs) and neurological exams.
    *   If vasospasm develops: Induced hypertension (e.g., with vasopressors), endovascular therapy (intra-arterial vasodilators, angioplasty). "Triple H" therapy (hypervolemia, hypertension, hemodilution) is less commonly used now; focus on euvolemia and targeted MAP augmentation.
*   **Manage Hydrocephalus**: EVD may be required for CSF diversion and ICP monitoring.
*   **Seizure Prophylaxis**: May be considered in the immediate post-hemorrhage period; treat seizures if they occur.
*   **Hyponatremia Management**: Common (SIADH, cerebral salt wasting). Careful fluid and sodium management.

### General Supportive Care (All Stroke Types)

*   **Airway/Breathing**: Oxygen to maintain SpO2 >94%. Intubate if airway is unprotected (e.g., GCS ≤8) or respiratory failure occurs.
*   **Dysphagia Screen**: Perform bedside swallow screen before any oral intake. Formal swallow evaluation by Speech Therapy if screen is failed or high risk.
*   **Nutrition**: Early enteral nutrition (within 24-48 hours) if patient is NPO and unable to take PO safely.
*   **Glycemic Control**: Target blood glucose 140-180 mg/dL. Avoid hypoglycemia.
*   **Temperature Control**: Treat fever (>38°C) aggressively (e.g., acetaminophen, cooling measures).
*   **VTE Prophylaxis**: Intermittent pneumatic compression (IPC) devices initially. Pharmacologic prophylaxis (LMWH/UFH) once bleeding risk is stable (e.g., 24-48 hours post-ischemic stroke if no tPA and no hemorrhagic conversion; timing varies for hemorrhagic stroke based on stability and neurosurgical input).
*   **Mobilization**: Early PT/OT/ST involvement.
*   **Depression Screening**: Monitor and treat as needed.`,
    categoryType: 'Policy',
    keywordsForImage: 'brain CT scan',
  },
  {
    id: 'medication-administration',
    slug: 'medication-administration',
    title: 'Safe Medication Administration Guidelines',
    summary: 'ICU-specific policies for ensuring accuracy and safety in medication administration, including high-alert drugs and infusion management.',
    content: `Safe medication administration is paramount in the ICU setting, where patients are vulnerable and medications are often potent and carry a high risk of harm if administered incorrectly.

### The "10 Rights" of Medication Administration (Expanded)

A cornerstone of safe practice, ensuring a systematic check before administration:
1.  **Right Patient**: Use at least two patient identifiers (e.g., name & DOB, scan patient armband against MAR).
2.  **Right Drug**: Check medication label against MAR three times: 1) When removing from storage, 2) When preparing/drawing up, 3) At bedside before administration. Be aware of Look-Alike/Sound-Alike (LASA) drugs.
3.  **Right Dose**: Verify dose calculation, ensure appropriateness for patient's weight, age, renal/hepatic function. Use leading zeros for doses <1 (e.g., 0.5 mg), avoid trailing zeros (e.g., 5 mg, not 5.0 mg). Double-check calculations, especially for pediatric or weight-based dosing.
4.  **Right Route**: Confirm suitability of the ordered route (e.g., IV, PO, IM, SubQ, NG/OG). Ensure correct line is used for IV medications (e.g., central vs. peripheral, dedicated lumens).
5.  **Right Time/Frequency**: Administer within the institutionally defined window (typically 30-60 minutes before/after scheduled time). Consider drug interactions, pharmacokinetics (e.g., half-life), and timing with meals or other medications.
6.  **Right Documentation**: Document on the MAR immediately after administration, not before. Include site for injections, patient response for PRNs and titrations, and any withheld doses with reason.
7.  **Right Reason/Indication**: Understand why the patient is receiving the medication and if it's appropriate for their current condition. Question orders that don't seem logical.
8.  **Right Response/Evaluation**: Monitor for desired therapeutic effects and any adverse reactions or side effects. Document findings.
9.  **Right to Refuse**: Competent patients have the right to refuse medication. Educate the patient on the potential consequences of refusal, document the refusal and reason, and notify the provider.
10. **Right Education**: Inform the patient (or family if appropriate) about the medication: name, purpose, common side effects, and what to report.

### High-Alert Medications in the ICU

These medications have an increased risk of causing significant patient harm when used in error. They require enhanced vigilance and often specific safety protocols (e.g., independent double-checks, standardized concentrations, specific labeling).

| Category / Examples                      | Common Risks                                              | Key Safeguards                                                                                                 |
|------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **Insulin (IV & SubQ)**                  | Hypoglycemia (severe), hyperglycemia (errors in dosing)     | Independent double-check for all doses, standardized concentrations for infusions, clear labeling (U-100, U-500), frequent glucose monitoring, no abbreviations (e.g., "U" for units). |
| **Anticoagulants (Heparin, Warfarin, LMWHs, DOACs)** | Bleeding, thrombosis (subtherapeutic dose or error)         | Independent double-check, baseline/monitoring labs (PT/INR, aPTT, anti-Xa, platelets), standardized protocols/nomograms, reversal agents available, patient education. |
| **Narcotics/Opioids (IV, Epidural, PCA)**| Respiratory depression, oversedation, hypotension, errors in programming PCA | Independent double-check for PCA/epidural setup and dose changes, use of standardized concentrations, careful titration, continuous SaO2/ETCO2 monitoring if high risk, frequent sedation/pain/respiratory assessment. |
| **Sedatives (IV infusions - Propofol, Benzodiazepines, Dexmedetomidine)** | Respiratory depression, hypotension, delirium (benzos), PRIS (Propofol) | Independent double-check for infusion rates, careful titration to sedation scale (e.g., RASS, SAS), continuous cardiorespiratory monitoring, awareness of accumulation. |
| **Concentrated Electrolytes (e.g., KCl, KPhos, MgSO4, Hypertonic Saline >0.9%)** | Arrhythmias, neurological changes, tissue damage (if given incorrectly/rapidly or extravasated) | Pharmacy preparation preferred for IV infusions, remove concentrated forms from floor stock where possible, clear labeling ("High Alert," "Dilute Before Use"), infusion pump for IV, rate limits, verify compatibility. |
| **Vasoactive Agents (e.g., Norepinephrine, Epinephrine, Dopamine, Dobutamine, Vasopressin)** | Extravasation/tissue necrosis, arrhythmias, severe hypertension/hypotension, end-organ ischemia | Central line preferred for continuous infusions, infusion pump with safety limits, frequent BP/HR/perfusion monitoring, clear titration orders with goals, extravasation kit readily available. Independent double-check for initiation/rate changes. |
| **Neuromuscular Blocking Agents (NMBAs - e.g., Cisatracurium, Rocuronium)** | Respiratory arrest (if not ventilated or ETT dislodged), patient awareness (if not adequately sedated), prolonged muscle weakness (Acute Quadriplegic Myopathy) | **MUST ensure adequate sedation/analgesia (assess with validated scales)**, mechanical ventilation, TOF monitoring, clear labeling ("Paralytic Agent"), separate from other infusions. |
| **Chemotherapeutic Agents**                | Myelosuppression, organ toxicities, extravasation, hypersensitivity | Specialized training/certification for handling and administration, specific institutional protocols, spill kits, PPE, independent double-checks. |
| **Antiarrhythmics (e.g., Amiodarone, Lidocaine, Diltiazem infusion)** | Proarrhythmias, hypotension, bradycardia, organ toxicity (Amiodarone) | Continuous ECG monitoring, frequent vital signs, awareness of drug interactions, loading dose vs. maintenance infusion protocols, independent double-checks. |

**Independent Double-Check**: Required for many high-alert medications and high-risk procedures (e.g., starting/changing vasoactive drips, insulin drips, NMBAs, PCA/epidural setup). Two licensed nurses separately verify the drug, dose, route, patient identification, calculations, and infusion pump settings (if applicable) against the order before administration.

**Barcode Medication Administration (BCMA)**: Use consistently. Scan patient armband and medication barcode to verify the "rights" at the bedside. Investigate and resolve any discrepancies before administration.

### IV Medication Safety Practices

*   **Compatibility**: Always check compatibility resources (pharmacist, Trissel's, Micromedex, institutional references) before mixing medications or Y-siting infusions. Flush lines between incompatible medications.
*   **Labeling**: Clearly label all IV lines at the patient-end port (distal hub) and the source container with: drug name, concentration/amount, diluent (if applicable), date/time prepared/hung, and initials of preparer/checker. Label tubing channels on infusion pumps.
*   **Smart Infusion Pumps**: Utilize drug libraries with standardized concentrations and pre-set dose limits (soft/hard stops). Always verify pump programming against the order, even when using the library.
*   **Line Tracing**: Trace lines from the infusion bag/syringe, through the pump, to the patient access site before starting or changing an infusion to ensure correct connection and prevent misconnections.
*   **Titratable Infusions**: Orders must be clear and include: drug name, starting dose/rate, titration parameters (e.g., titrate by X amount every Y minutes), specific goal parameter (e.g., MAP >65 mmHg, RASS -2, pain score <4), and a maximum dose or rate. Document titrations and patient response meticulously.
*   **Extravasation Management**: For vesicant or irritant drugs (e.g., vasopressors, chemotherapy, hypertonic solutions, calcium chloride/gluconate, promethazine), monitor IV site frequently, especially peripheral sites.
    *   If extravasation is suspected: Stop infusion immediately. Leave catheter in place (may attempt aspiration of residual drug). Notify provider. Administer antidote if available and ordered (e.g., Phentolamine for vasopressors, Hyaluronidase for some agents). Apply cool or warm compresses as indicated by drug type and institutional policy. Elevate limb. Document incident thoroughly (photos if permitted).
    *   Use central lines for continuous vesicant infusions whenever possible. Assess patency and blood return before and during administration.

### Medication Reconciliation

Perform a thorough medication reconciliation (comparing patient's home meds with ordered meds) upon admission, transfer between units/levels of care, and at discharge to prevent discrepancies, omissions, duplications, and potential interactions.

### Reporting Errors and Near Misses

Report all medication errors and near misses promptly through the institution's confidential reporting system. This is crucial for a culture of safety, allowing for system-level analysis and improvements to prevent future events. Reporting should be non-punitive. Root Cause Analysis (RCA) should be conducted for significant medication events.`,
    categoryType: 'Policy',
    keywordsForImage: 'medication safety',
  },
  {
    id: 'central-line-care',
    slug: 'central-line-care',
    title: 'Central Line Associated Bloodstream Infection (CLABSI) Prevention',
    summary: 'Comprehensive protocols for CVC insertion, maintenance, dressing changes, and hub care to prevent CLABSIs.',
    content: `Central Line-Associated Bloodstream Infection (CLABSI) is a serious but often preventable healthcare-associated infection (HAI). Strict adherence to evidence-based bundles for insertion and maintenance is critical to patient safety.

### Central Line Insertion Bundle

This bundle outlines key practices to be followed by the inserting provider, with nursing oversight and checklist verification.
1.  **Hand Hygiene**: Perform rigorous hand hygiene (soap and water or alcohol-based hand rub) before starting the procedure.
2.  **Maximal Barrier Precautions**:
    *   Inserter and any assistants must wear: cap, mask, sterile gown, and sterile gloves.
    *   Patient must be covered with a large sterile drape from head to toe, with a small fenestration for the insertion site.
3.  **Skin Antisepsis**:
    *   Cleanse the insertion site with >0.5% Chlorhexidine with alcohol (e.g., ChloraPrep™ or equivalent). Use a back-and-forth friction scrub for at least 30 seconds.
    *   Allow the antiseptic to **air dry completely** (typically 30 seconds to 2 minutes, or per manufacturer's instructions) before skin puncture. Do not fan or blot dry.
4.  **Optimal Site Selection**:
    *   For adult patients, the subclavian vein is generally preferred for non-tunneled CVCs to minimize infection risk, if not contraindicated (e.g., coagulopathy, CKD patient needing future fistula).
    *   Avoid the femoral site in adults if possible due to higher infection risk and DVT risk, unless other sites are unavailable or contraindicated.
    *   Use ultrasound guidance for internal jugular vein placement to reduce mechanical complications and number of attempts.
5.  **Daily Review of Line Necessity with Prompt Removal**:
    *   Assess the need for the CVC every day (e.g., during multidisciplinary rounds).
    *   Remove the CVC promptly when it is no longer clinically indicated (e.g., patient can take PO medications, peripheral IV access is sufficient).
    *   Document this daily assessment and the rationale for continued use or removal.

### Central Line Maintenance Bundle (Nursing Responsibility)

Consistent, meticulous care is essential to prevent CLABSI.
1.  **Hand Hygiene**: Perform hand hygiene before and after any CVC manipulation (e.g., palpating the site, accessing the line, performing a dressing change).
2.  **"Scrub the Hub" / Disinfection of Needleless Connectors**:
    *   Before each access, vigorously scrub the surface of all needleless connectors and injection ports for at least **15 seconds** with an appropriate antiseptic (e.g., 70% alcohol, chlorhexidine-based solution, or povidone-iodine – check institutional policy).
    *   Allow the port to **air dry completely** before accessing.
    *   Consider using antiseptic-impregnated port protectors/caps on all lumens when not in use.
3.  **Dressing Care**:
    *   Use a sterile, transparent, semipermeable dressing (TSM) or a chlorhexidine-impregnated sponge/dressing (e.g., Biopatch™, Tegaderm CHG) if there is no contraindication (e.g., allergy, patient <2 months old, site irritation).
    *   **TSM Dressing Change Frequency**: Change every 5-7 days (or per institutional policy), and sooner if the dressing becomes soiled, loose, or damp, or if integrity is compromised.
    *   **Gauze Dressing Change Frequency**: If a gauze dressing is used (e.g., if there is oozing at the site or patient diaphoresis), change it every 2 days (48 hours), or sooner if soiled, loose, or damp.
    *   **CHG Sponge/Dressing**: If used, change with each dressing change. Ensure proper skin contact.
    *   **Dressing Change Procedure**:
        *   Perform hand hygiene. Wear clean or sterile gloves (per institutional policy) and a mask. Patient should also wear a mask or turn head away from site.
        *   Remove old dressing carefully to avoid dislodging the catheter.
        *   Assess site for signs of infection (redness, pain, swelling, tenderness, purulence, drainage) and catheter securement.
        *   Cleanse the site with chlorhexidine (>0.5% with alcohol) using friction and allow to air dry completely before applying the new sterile dressing.
        *   Document dressing change, site appearance, and any issues.
4.  **Tubing and Needleless Connector Care**:
    *   **Administration Sets (Tubing)**:
        *   For continuous infusions (not blood, blood products, or lipid emulsions): Change no more frequently than every 96 hours, but at least every 7 days (or per institutional policy).
        *   For blood/blood products: Change tubing within 4 hours of initiating the transfusion or after each unit, or every 24 hours if multiple units are given sequentially through the same set (check specific policy).
        *   For lipid emulsions (e.g., propofol, TPN with lipids): Change tubing every 12-24 hours (propofol typically every 12 hours or with each vial/bag change).
    *   **Needleless Connectors**: Change according to institutional policy (e.g., every 72-96 hours, with primary tubing changes, or if blood/debris is visible within the connector or if integrity is compromised).
    *   Ensure all lumens are clamped when not in use or when changing caps or tubing to prevent air embolism and contamination. Maintain sterility during changes.
5.  **Bathing**: Daily bathing with chlorhexidine gluconate (CHG) cloths/solution for ICU patients >2 months old (unless contraindicated) has been shown to reduce CLABSI rates and other HAIs.
6.  **Securement**: Ensure the CVC is properly secured to prevent migration and pistoning at the insertion site, which can introduce bacteria. Use an engineered securement device if available, or sterile tape/sutures as appropriate.

### Blood Sampling from CVCs

*   Minimize blood draws from CVCs to reduce the risk of contamination and infection. Use peripheral venipuncture when possible, especially for routine labs.
*   If drawing from a CVC, use strict aseptic technique: hand hygiene, scrub the hub, use sterile syringe/vacutainer.
*   **Discard Volume**: Discard an appropriate volume of blood (e.g., 3-5 times the catheter lumen volume, or 5-10 mL, or per institutional policy) before obtaining the sample for most tests to avoid contamination with flush solution or infusates. Exception: blood cultures or certain coagulation studies where the initial draw may be required (check policy).
*   **Blood Cultures for Suspected CLABSI**: If CLABSI is suspected, draw paired blood cultures:
    *   One set from a CVC lumen (or each lumen if multi-lumen catheter and suspicion is high for a specific lumen).
    *   One set from a peripheral venipuncture.
    *   Draw samples ideally simultaneously or close in time. Clearly label the source of each culture.
    *   Differential time to positivity (DTP) can help diagnose CLABSI (CVC culture positive ≥2 hours before peripheral culture).

### Staff Education and Competency

*   Regular training and competency validation for all staff involved in CVC insertion, care, and maintenance are essential.
*   Monitor adherence to CLABSI prevention bundles through audits and provide feedback to staff.
*   Investigate all CLABSIs thoroughly using a root cause analysis approach to identify contributing factors and implement corrective actions for system improvement.`,
    categoryType: 'Policy',
    keywordsForImage: 'central line CVC',
  },
];

export const getAllContentItems = (): ContentItem[] => {
  return [...bodySystems, ...topics, ...policies];
};
    
