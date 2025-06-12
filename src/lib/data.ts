
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

*   **P wave**: Represents atrial depolarization (contraction). Normally upright, rounded, and precedes each QRS complex. Duration: 0.06-0.12 seconds. Amplitude: <2.5 mm.
*   **PR Interval**: Time from the beginning of the P wave to the beginning of the QRS complex. Represents time taken for impulse to travel from SA node through AV node to ventricles. Normal: 0.12-0.20 seconds.
*   **QRS complex**: Represents ventricular depolarization (contraction). Comprises Q wave (first negative deflection), R wave (first positive deflection), S wave (first negative deflection after R wave). Normal duration: 0.06-0.10 seconds (up to 0.12s).
    *   *Q wave*: Often small or absent. Pathological Q waves (deep and wide) can indicate previous myocardial infarction.
    *   *R wave*: Represents majority of ventricular muscle depolarization.
    *   *S wave*: Represents late ventricular depolarization.
*   **ST Segment**: Represents early ventricular repolarization. Normally isoelectric (flat). Elevation or depression can indicate myocardial ischemia or injury.
*   **T wave**: Represents ventricular repolarization (relaxation). Normally upright and rounded. Inversion or flattening can indicate ischemia, electrolyte imbalances.
*   **QT Interval**: Represents total time for ventricular depolarization and repolarization. Varies with heart rate (corrected QT, QTc, is used). Normal QTc: <0.44 seconds (males), <0.46 seconds (females). Prolonged QT increases risk of Torsades de Pointes.
*   **U wave**: Small wave sometimes seen after T wave; may indicate hypokalemia if prominent.

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
| **Pulmonary Artery Pressure (PAP)**   | Systolic: 15-30 mmHg <br> Diastolic: 8-15 mmHg <br> Mean: 10-20 mmHg | Pressures within the pulmonary artery. Elevated in pulmonary hypertension.   | Pulmonary Artery Catheter (PAC) |
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
    
