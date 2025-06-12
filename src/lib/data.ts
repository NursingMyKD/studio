
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
*   **P wave**: Atrial depolarization
*   **QRS complex**: Ventricular depolarization
*   **T wave**: Ventricular repolarization

### Common ICU Arrhythmias

| Arrhythmia                   | Key ECG Features                      | Common Management Approaches                     |
|------------------------------|---------------------------------------|--------------------------------------------------|
| **Atrial Fibrillation (AFib)** | Irregular rhythm, absent P waves, fibrillatory waves | Rate control (beta-blockers, CCBs), anticoagulation |
| **Ventricular Tachycardia (VTach)** | Wide QRS, rapid rate                 | ACLS (pulse vs. pulseless), antiarrhythmics, cardioversion/defibrillation |
| **Ventricular Fibrillation (VFib)** | Chaotic, no discernible waves        | Immediate defibrillation, ACLS                   |
| **Bradycardias (various)**   | Slow rate, specific block patterns   | Atropine, pacing (transcutaneous/transvenous)   |
| **Supraventricular Tachycardia (SVT)** | Narrow QRS, regular, rapid rate    | Vagal maneuvers, adenosine, cardioversion         |

### Hemodynamic Monitoring

Crucial for assessing cardiovascular status.

| Parameter                   | Normal Range/Value       | Significance                                       | Common Monitoring Device |
|-----------------------------|--------------------------|----------------------------------------------------|--------------------------|
| **Mean Arterial Pressure (MAP)** | 70-105 mmHg              | Average pressure driving tissue perfusion          | Arterial Line            |
| **Central Venous Pressure (CVP)** | 2-8 mmHg                 | RV preload/volume status (interpret with caution)  | Central Line             |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | 6-12 mmHg        | Indirect LA pressure, LV preload                 | PA Catheter (Swan-Ganz)  |
| **Cardiac Output (CO)**         | 4-8 L/min                | Volume of blood pumped per minute                  | PA Catheter, other devices |
| **Cardiac Index (CI)**          | 2.5-4 L/min/m²           | CO adjusted for body surface area                  | PA Catheter, other devices |
| **Systemic Vascular Resistance (SVR)** | 800-1200 dynes/sec/cm⁻⁵ | LV afterload                                       | Calculated (via PA Catheter) |
| **Mixed Venous O2 Saturation (SvO2)** | 60-80%                 | Global balance of O2 delivery and consumption    | PA Catheter              |

**Arterial Line Troubleshooting**:
*   **Damping**: Under-reading SBP, over-reading DBP, flattened waveform. Check for air bubbles, clots, kinks.
*   **Resonance**: Over-reading SBP, under-reading DBP, "ringing" waveform. Check tubing length, stopcocks.

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

*   **Myocardial Infarction (MI)**: STEMI vs. NSTEMI. Diagnosed via ECG and cardiac enzymes (troponin). Managed with MONA (Morphine, Oxygen, Nitrates, Aspirin), PCI, thrombolytics, beta-blockers, ACE-I.
*   **Acute Decompensated Heart Failure (ADHF)**: Classified by perfusion (warm/cold) & congestion (wet/dry). Managed with diuretics, vasodilators, inotropes.
*   **Shock States**: (Cardiogenic, Hypovolemic, Septic, Neurogenic, Anaphylactic) - critical hypoperfusion. Identify type, treat cause, support circulation.
*   **ACLS Protocols**: Fundamental for cardiac arrest and periarrest states.`,
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
1.  **pH (Normal: 7.35-7.45)**: Indicates overall acid-base status (acidemia <7.35, alkalemia >7.45).
2.  **PaCO2 (Normal: 35-45 mmHg)**: Respiratory component. High in respiratory acidosis, low in respiratory alkalosis.
3.  **HCO3 (Normal: 22-26 mEq/L)**: Metabolic component. Low in metabolic acidosis, high in metabolic alkalosis.
4.  **PaO2 (Normal: 80-100 mmHg)**: Oxygenation status.
5.  **Base Excess (BE) (Normal: -2 to +2 mEq/L)**: Overall metabolic status; negative BE indicates metabolic acidosis.
6.  **Compensation Assessment**: If primary PaCO2 issue, HCO3 changes to compensate (and vice versa).

**Anion Gap (AG)**: Na - (Cl + HCO3). Normal: 8-12 mEq/L. Helps differentiate causes of metabolic acidosis (e.g., MUDPILES for high AG metabolic acidosis).

### Mechanical Ventilation

**Common Modes**:
*   **Assist-Control (AC)**: Ventilator delivers a set volume (AC-VC) or pressure (AC-PC) for every breath, whether patient-triggered or time-triggered.
*   **Synchronized Intermittent Mandatory Ventilation (SIMV)**: Delivers a set number of mandatory breaths (VC or PC). Patient can breathe spontaneously between mandatory breaths, often with Pressure Support (PS).
*   **Pressure Support Ventilation (PSV)**: Patient triggers all breaths. Ventilator provides a set inspiratory pressure to support spontaneous effort.

**Key Settings**:
*   **FiO2**: Fraction of inspired oxygen (0.21-1.0). Lowest to maintain SpO2 >90-92%.
*   **PEEP (Positive End-Expiratory Pressure)**: 5-20 cmH2O. Recruits alveoli, improves oxygenation, prevents atelectrauma.
*   **Respiratory Rate (RR)**: Breaths per minute, adjusted for PaCO2/pH.
*   **Tidal Volume (VT)**: Volume per breath. For ARDSNet protocol: 4-8 mL/kg Ideal Body Weight (IBW).
*   **Inspiratory Pressure (PIP/Pinsp)**: Pressure delivered during inspiration in PC modes.
*   **Plateau Pressure (Pplat)**: Pressure in alveoli at end-inspiration (static measure during inspiratory hold). Keep <30 cmH2O to minimize barotrauma.

**Lung Protective Strategies (especially for ARDS)**: Low VT, Pplat <30 cmH2O.

**Monitoring**:
*   **Auto-PEEP**: Air trapping. Assess with expiratory hold maneuver.
*   **Compliance**: VT / (Pplat - PEEP). Change in volume per unit change in pressure.

### Acute Respiratory Distress Syndrome (ARDS)

Acute, diffuse inflammatory lung injury leading to increased pulmonary vascular permeability, increased lung weight, and loss of aerated tissue.
**Berlin Criteria for ARDS**:
1.  **Timing**: Within 1 week of a known clinical insult or new/worsening respiratory symptoms.
2.  **Chest Imaging**: Bilateral opacities not fully explained by effusions, lobar/lung collapse, or nodules.
3.  **Origin of Edema**: Respiratory failure not fully explained by cardiac failure or fluid overload (objective assessment like echocardiogram needed if no clear risk factor).
4.  **Oxygenation (with PEEP ≥5 cmH2O)**:
    *   Mild: 200 mmHg < PaO2/FiO2 ≤ 300 mmHg
    *   Moderate: 100 mmHg < PaO2/FiO2 ≤ 200 mmHg
    *   Severe: PaO2/FiO2 ≤ 100 mmHg

**ARDS Management**: Lung Protective Ventilation, prone positioning (for moderate/severe ARDS), conservative fluid management, consider neuromuscular blocking agents (NMBAs) for severe ARDS or patient-ventilator dyssynchrony.

### Ventilator-Associated Pneumonia (VAP) Prevention Bundle

*   Head of Bed (HOB) elevation: 30-45 degrees.
*   Daily sedation interruptions and assessment of readiness to extubate ("sedation vacation").
*   Oral care with chlorhexidine.
*   Peptic Ulcer Disease (PUD) prophylaxis.
*   Deep Vein Thrombosis (DVT) prophylaxis.

### Other Important Concepts

*   **Pulmonary Embolism (PE)**: Obstruction of pulmonary artery. Diagnosed via CT angiogram or V/Q scan. Treated with anticoagulation, thrombolysis for massive PE, or embolectomy.
*   **Non-Invasive Ventilation (NIV)**: BiPAP (Bilevel Positive Airway Pressure) for COPD exacerbation, cardiogenic pulmonary edema. CPAP (Continuous Positive Airway Pressure) for OSA, cardiogenic pulmonary edema.
*   **Tracheostomy Care**: Surgical airway. Involves stoma cleaning, inner cannula changes/cleaning, cuff pressure monitoring (20-30 cmH2O), suctioning.
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
*   **Cerebrum**: Largest part, divided into lobes (frontal, parietal, temporal, occipital) responsible for higher functions.
*   **Cerebellum**: Coordination, balance, motor control.
*   **Brainstem (Midbrain, Pons, Medulla)**: Controls vital functions like breathing, heart rate, consciousness.
The Circle of Willis provides collateral blood flow. Cerebrospinal Fluid (CSF), produced in choroid plexus, circulates in ventricles and subarachnoid space, providing cushioning and metabolic support.

### Intracranial Pressure (ICP) Monitoring

Essential for managing patients with TBI, SAH, or other conditions causing cerebral edema.
*   **Devices**: External Ventricular Drains (EVDs - gold standard, allows CSF drainage and ICP monitoring), intraparenchymal monitors.
*   **Normal ICP**: 5-15 mmHg. Increased ICP is >20 mmHg.
*   **Cerebral Perfusion Pressure (CPP)**: CPP = MAP - ICP. Target: 60-70 mmHg.
*   **ICP Waveforms**: P1 (percussion wave, arterial pulsation), P2 (tidal wave, reflects brain compliance - P2 rises above P1 with low compliance), P3 (dicrotic wave, aortic valve closure).

**Interventions for Increased ICP**:
*   HOB elevation to 30 degrees, head midline.
*   Osmotic therapy: Mannitol (creates osmotic gradient), Hypertonic Saline (pulls fluid from brain).
*   Controlled hyperventilation (PaCO2 30-35 mmHg - transient effect via vasoconstriction, use cautiously).
*   Sedation and analgesia.
*   Neuromuscular blocking agents (NMBAs).
*   Temperature control (prevent fever).
*   CSF drainage via EVD.
*   Barbiturate coma (refractory ICP).
*   Decompressive craniectomy.

### Stroke Management

Rapid assessment (e.g., FAST, NIHSS) is crucial.
**Ischemic Stroke (87%)**:
*   **tPA (Alteplase)**: If LKW <4.5 hrs and no contraindications. Dose: 0.9mg/kg (max 90mg), 10% bolus, rest over 1hr.
*   **BP control post-tPA**: Maintain <180/105 mmHg.
*   **Mechanical Thrombectomy**: For Large Vessel Occlusion (LVO) up to 24 hrs in select patients.
**Hemorrhagic Stroke (13%) - ICH, SAH**:
*   **BP control**: Target SBP typically <140-160 mmHg.
*   **Reverse anticoagulation**: Vitamin K, FFP, PCCs (e.g., Kcentra), specific reversal agents for DOACs.
*   **SAH specific**: Monitor for vasospasm (Nimodipine), potential EVD/coiling/clipping for aneurysms.

### Traumatic Brain Injury (TBI)

*   **Primary injury**: Occurs at impact.
*   **Secondary injury**: Hypoxia, hypotension, edema, increased ICP. Management focuses on preventing secondary injury.
*   **Glasgow Coma Scale (GCS)**: Eye (1-4), Verbal (1-5), Motor (1-6). Score ≤8 often indicates coma.

### Seizures

*   **Types**: Focal vs. Generalized.
*   **Status Epilepticus**: Seizure >5 min or recurrent seizures without full recovery between episodes.
*   **Management**:
    1.  Benzodiazepines IV (Lorazepam, Diazepam, Midazolam).
    2.  Load with Antiepileptic Drugs (AEDs) (Phenytoin, Fosphenytoin, Levetiracetam, Valproic Acid).
*   Continuous EEG monitoring for non-convulsive seizures/status or refractory seizures.
*   **Seizure Precautions**: Padded rails, O2/suction available, maintain airway.

### Spinal Cord Injury (SCI)

*   Immobilize spine.
*   Manage **spinal shock** (transient flaccid paralysis, areflexia below injury level).
*   Manage **neurogenic shock** (hypotension, bradycardia, poikilothermia due to sympathetic disruption).
*   Monitor for **Autonomic Dysreflexia** (in T6 injuries or above): Noxious stimulus below injury (e.g., full bladder) triggers massive sympathetic response (severe HTN, headache, flushing above injury, bradycardia). Treat by removing stimulus, elevating HOB, antihypertensives.

### Neurological Assessments

*   **Pupillary Assessment**: Size (mm), equality, reactivity (brisk, sluggish, non-reactive), shape. Anisocoria (unequal pupils) can indicate herniation.
*   **Sedation**: Balance ICP control with ability to perform neuro exams (sedation holidays when appropriate using agents like Propofol or Dexmedetomidine).`,
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
    content: `Hemodynamics is the study of blood flow and the forces involved. Understanding these principles is crucial for managing critically ill patients.

### Key Hemodynamic Parameters

| Parameter             | Formula / Normal Value            | Description                                     |
|-----------------------|-----------------------------------|-------------------------------------------------|
| **Cardiac Output (CO)** | HR x SV; Normal: 4-8 L/min        | Volume of blood pumped by the heart per minute. |
| **Cardiac Index (CI)**  | CO / BSA; Normal: 2.5-4 L/min/m²  | CO adjusted for body surface area.              |
| **Stroke Volume (SV)**  | Dependent on preload, afterload, contractility | Volume of blood ejected per heartbeat.          |
| **Mean Arterial Pressure (MAP)** | (SBP + 2*DBP)/3; Normal: 70-105 mmHg | Average arterial pressure during a cardiac cycle. |
| **Central Venous Pressure (CVP)** | Normal: 2-8 mmHg                | Pressure in the right atrium; estimates RV preload. |
| **Pulmonary Artery Wedge Pressure (PAWP)** | Normal: 6-12 mmHg             | Pressure in pulmonary capillaries; estimates LV preload. |
| **Systemic Vascular Resistance (SVR)** | (MAP - CVP) / CO x 80; Normal: 800-1200 dynes·s/cm⁻⁵ | Resistance the LV must overcome to eject blood. |
| **Pulmonary Vascular Resistance (PVR)** | (MPAP - PAWP) / CO x 80; Normal: <250 dynes·s/cm⁻⁵ | Resistance the RV must overcome to eject blood. |
| **Mixed Venous Oxygen Saturation (SvO2)** | Normal: 60-80%                  | Oxygen saturation of blood returning to the right heart; reflects tissue oxygen extraction. |

### Determinants of Stroke Volume

*   **Preload**: Ventricular end-diastolic volume/stretch. Assessed by CVP (RV) and PAWP (LV). The Frank-Starling law describes how increased preload (to a point) increases SV.
    *   *Factors increasing preload*: Fluid administration, heart failure.
    *   *Factors decreasing preload*: Diuretics, vasodilation, hypovolemia.
*   **Afterload**: Resistance to ventricular ejection. Assessed by SVR (LV) and PVR (RV).
    *   *Factors increasing afterload*: Vasopressors, hypertension, aortic stenosis.
    *   *Factors decreasing afterload*: Vasodilators, sepsis (distributive shock).
*   **Contractility (Inotropy)**: Intrinsic myocardial pump function. Difficult to measure directly; inferred from CI, SV, ejection fraction. Inotropes (e.g., Dobutamine, Milrinone) increase contractility.

### Fluid Responsiveness

Dynamic measures (e.g., Stroke Volume Variation [SVV], Pulse Pressure Variation [PPV] in mechanically ventilated patients with regular rhythm, Passive Leg Raise [PLR]) are more reliable than static pressures (CVP, PAWP) for predicting if a patient will increase their CO in response to fluids.

### Arterial Line Management

Provides continuous BP, MAP calculation, and access for ABGs.
*   **Phlebostatic Axis**: 4th ICS, mid-axillary line (approximates RA level for accurate transducer placement).
*   **Waveform Components**: Anacrotic limb (upstroke), systolic peak, dicrotic notch (aortic valve closure), diastolic runoff.
*   **Square Wave Test (Fast Flush Test)**: Assesses system accuracy.
    *   *Optimal*: 1-2 oscillations before returning to baseline.
    *   *Overdamped*: Few/no oscillations; underestimates SBP, overestimates DBP.
    *   *Underdamped*: >2 oscillations ("ringing"); overestimates SBP, underestimates DBP.

### Pulmonary Artery Catheter (PAC / Swan-Ganz)

Provides comprehensive hemodynamic data including RA (CVP), RV, PA pressures (systolic, diastolic, mean), PAWP, CO (thermodilution), CI, SVR, PVR, and SvO2.

### Shock States & Hemodynamic Profiles

| Shock Type             | CO/CI       | CVP/PAWP    | SVR         | Other Key Features                  |
|------------------------|-------------|-------------|-------------|-------------------------------------|
| **Hypovolemic**        | ↓           | ↓           | ↑           | Hemorrhage, dehydration             |
| **Cardiogenic**        | ↓           | ↑           | ↑           | MI, severe heart failure            |
| **Septic (Distributive - early/hyperdynamic)** | ↑ or Normal | ↓ or Normal | ↓↓          | Infection, vasodilation             |
| **Septic (Distributive - late/hypodynamic)** | ↓           | Variable    | Variable    | Worsening sepsis, myocardial depression |
| **Neurogenic (Distributive)** | ↓           | ↓           | ↓           | Spinal cord injury, bradycardia     |
| **Anaphylactic (Distributive)** | ↓           | ↓           | ↓           | Allergic reaction, bronchospasm     |
| **Obstructive**        | ↓           | ↑ (CVP)     | Variable    | PE, tamponade, tension pneumothorax |

*(↓ = Decreased, ↑ = Increased)*

### Therapeutic Interventions

*   **Fluid Resuscitation**: Guided by dynamic parameters of fluid responsiveness.
*   **Vasopressors**: For hypotension despite adequate fluid resuscitation (target MAP usually >65 mmHg).
*   **Inotropes**: For cardiogenic shock or low CO states.
*   **Vasodilators**: To reduce afterload in conditions like hypertensive crisis or severe heart failure with high SVR.`,
    categoryType: 'Topic',
    keywordsForImage: 'hemodynamic chart',
  },
  {
    id: 'critical-care-pharmacology',
    slug: 'critical-care-pharmacology',
    title: 'Critical Care Pharmacology Deep Dive',
    summary: 'Detailed pharmacology of common ICU medications, including vasoactive drugs, sedatives, analgesics, and antimicrobials.',
    content: `Critical care pharmacology involves a complex array of medications, often with narrow therapeutic windows and significant potential for interactions and adverse effects.

### Vasoactive Medications

These drugs act on the cardiovascular system to alter heart rate, contractility, and vascular tone.

**Vasopressors**: Used to increase blood pressure, primarily by vasoconstriction.

| Drug Name        | Primary Receptors | Key Effects                      | Common Uses        | Key Risks                                   |
|------------------|-------------------|----------------------------------|--------------------|---------------------------------------------|
| **Norepinephrine (Levophed)** | α1 > β1         | ↑SVR, ↑MAP, modest ↑CO           | Septic shock (1st line) | Peripheral ischemia, arrhythmias             |
| **Epinephrine**    | α1, β1, β2      | ↑SVR, ↑HR, ↑CO, bronchodilation | Anaphylaxis, cardiac arrest, refractory shock | Tachyarrhythmias, myocardial ischemia, hyperglycemia |
| **Phenylephrine (Neo-Synephrine)** | Pure α1         | ↑SVR, ↑MAP                       | Hypotension with tachycardia | Reflex bradycardia, severe vasoconstriction   |
| **Vasopressin**    | V1 (vascular), V2 (renal) | Vasoconstriction (non-adrenergic), ADH effect | Septic shock (adjunct) | Splanchnic/digital ischemia, hyponatremia   |
| **Dopamine**       | Dose-dependent  | Low: renal; Mid: β1; High: α1    | Shock (less common now) | Tachyarrhythmias, use with caution      |

**Inotropes**: Used to increase myocardial contractility.

| Drug Name      | Mechanism / Receptors | Key Effects                | Common Uses         | Key Risks                          |
|----------------|-----------------------|----------------------------|---------------------|------------------------------------|
| **Dobutamine** | Primarily β1, some β2 | ↑Contractility, ↑CO, mild vasodilation | Cardiogenic shock, ADHF | Hypotension (if hypovolemic), tachyarrhythmias |
| **Milrinone**  | PDE3 inhibitor        | ↑Contractility, vasodilation ("inodilator") | ADHF              | Hypotension, arrhythmias, longer half-life |

### Sedatives & Analgesics

Essential for patient comfort, anxiolysis, and to facilitate mechanical ventilation.

**Sedatives**:
*   **Propofol**: GABA agonist. Rapid onset/offset, ↓ICP. Risks: hypotension, bradycardia, respiratory depression, PRIS (Propofol Infusion Syndrome).
*   **Dexmedetomidine (Precedex)**: α2 agonist. "Cooperative sedation," minimal respiratory depression. Risks: bradycardia, hypotension.
*   **Benzodiazepines (Midazolam, Lorazepam)**: GABA agonists. Anxiolysis, amnesia. Risks: delirium, respiratory depression, tolerance, withdrawal.

**Analgesics**:
*   **Opioids (Fentanyl, Hydromorphone, Morphine)**: Mu receptor agonists. Potent analgesia. Risks: respiratory depression, hypotension, sedation, constipation.
*   **Ketamine**: NMDA antagonist. Analgesia, amnesia, bronchodilation, preserves respiratory drive/BP. Risks: emergence reactions, ↑secretions.
*   **Non-opioids**: Acetaminophen, NSAIDs (use cautiously due to renal/GI risks).

### Neuromuscular Blocking Agents (NMBAs)

Used for paralysis in specific situations (e.g., severe ARDS, refractory increased ICP, shivering). **Crucially, patients MUST have adequate sedation and analgesia when paralyzed.**
*   **Depolarizing (Succinylcholine)**: Rapid onset, short duration (intubation). Risks: hyperkalemia, malignant hyperthermia.
*   **Non-depolarizing (Rocuronium, Vecuronium, Cisatracurium)**: Longer acting. Monitor with Train-of-Four (TOF) stimulation (target 1-2 twitches). Cisatracurium undergoes Hofmann elimination (good for renal/hepatic failure). Risk: prolonged weakness (Acute Quadriplegic Myopathy).

### Antimicrobials

Initiate broad-spectrum empiric therapy for suspected infections, then de-escalate based on culture results and sensitivities.
*   **Common Classes**: Beta-lactams (Penicillins, Cephalosporins, Carbapenems), Vancomycin (for MRSA - monitor troughs, risk of nephrotoxicity, Red Man Syndrome), Fluoroquinolones, Aminoglycosides (monitor peaks/troughs, nephro/ototoxicity), Macrolides.
*   **Antifungals**: Used for fungal infections.
*   **Antivirals**: Used for viral infections.

Understanding pharmacokinetics (absorption, distribution, metabolism, excretion) and pharmacodynamics (drug effects) is vital in the ICU due to altered physiology in critical illness.`,
    categoryType: 'Topic',
    keywordsForImage: 'drug vials',
  },
  {
    id: 'ventilator-management',
    slug: 'ventilator-management',
    title: 'Advanced Ventilator Management',
    summary: 'Principles and practices of mechanical ventilation, including modes, settings, troubleshooting, and liberation strategies.',
    content: `Mechanical ventilation is a life-sustaining intervention in the ICU. Its goals are to support gas exchange (oxygenation/ventilation), reduce the work of breathing, reverse respiratory muscle fatigue, and allow lung healing.

### Key Ventilator Settings

| Setting                  | Description & Typical Range/Target                                       | Purpose                                                      |
|--------------------------|--------------------------------------------------------------------------|--------------------------------------------------------------|
| **FiO2 (Fraction of Inspired Oxygen)** | 0.21 (room air) - 1.0. Titrate to SpO2 >90-92% or PaO2 55-80 mmHg. | Optimize oxygen delivery.                                    |
| **PEEP (Positive End-Expiratory Pressure)** | Usually 5-10 cmH2O; higher in ARDS.                                    | Prevents alveolar collapse at end-expiration, improves oxygenation. |
| **Tidal Volume (VT)**    | Target 6-8 mL/kg Predicted Body Weight (PBW); 4-6 mL/kg PBW for ARDS.    | Volume of air delivered with each breath.                    |
| **Respiratory Rate (RR)** | Usually 12-20 breaths/min. Adjusted based on PaCO2/pH.                 | Controls minute ventilation and CO2 removal.                  |
| **Inspiratory Time (I-time) / I:E Ratio** | Typically 1:2 to 1:3. Longer E-time for obstructive disease.           | Duration of inspiration vs. expiration.                       |
| **Inspiratory Pressure (Pinsp/PIP in PCV)** | Pressure delivered during inspiration in PC modes. Target for lowest effective. | Pressure limit for inspiration in PCV.                       |
| **Pressure Support (PS)** | Usually 5-20 cmH2O above PEEP during spontaneous breaths.                 | Assists patient's spontaneous inspiratory effort.             |

### Common Ventilator Modes

*   **Volume Control Ventilation (VCV / AC-VC)**: Delivers a preset tidal volume. Inspiratory pressure varies with lung mechanics.
*   **Pressure Control Ventilation (PCV / AC-PC)**: Delivers a preset inspiratory pressure for a set inspiratory time. Tidal volume varies with lung mechanics.
*   **Pressure Support Ventilation (PSV)**: Patient-triggered, pressure-assisted breaths. Used for weaning or spontaneous breathing.
*   **Synchronized Intermittent Mandatory Ventilation (SIMV-VC or SIMV-PC)**: Delivers a set number of mandatory breaths (VC or PC). Allows spontaneous breaths (often with PS) between mandatory breaths.
*   **Advanced Modes**:
    *   **PRVC (Pressure Regulated Volume Control)**: Volume-targeted, pressure-limited mode. Ventilator adjusts pressure breath-by-breath to deliver set VT.
    *   **APRV (Airway Pressure Release Ventilation)**: High continuous positive airway pressure (Phigh) with brief releases to a lower pressure (Plow) for CO2 clearance. Inverse I:E ratio.
    *   **ASV (Adaptive Support Ventilation)**: Adjusts settings based on patient lung mechanics and effort to achieve target minute ventilation.

### Monitoring & Troubleshooting

*   **Peak Inspiratory Pressure (PIP)**: Highest pressure during inspiration (dynamic pressure). Reflects airway resistance + elastic recoil.
*   **Plateau Pressure (Pplat)**: Static pressure during an inspiratory pause. Reflects alveolar pressure (keep <30 cmH2O).
*   **Driving Pressure (ΔP)**: Pplat - PEEP. Associated with ARDS mortality; aim for <15 cmH2O.
*   **Auto-PEEP (Intrinsic PEEP)**: Air trapping. Measure with an expiratory hold. Caused by high RR, short expiratory time, or airway obstruction.
*   **Patient-Ventilator Dyssynchrony**: Mismatch between patient effort and ventilator delivery.
    *   *Flow Asynchrony*: Flow starvation or excessive flow.
    *   *Trigger Asynchrony*: Missed triggers, double triggering, auto-triggering.
    *   *Cycle Asynchrony*: Premature or delayed cycling from inspiration to expiration.
    *   Management: Adjust settings, optimize sedation, consider mode change.

**Common Ventilator Alarms**:
*   **High Pressure Alarm**: Kinked tube, secretions, patient biting tube, bronchospasm, pneumothorax, ARDS, pulmonary edema.
*   **Low Pressure/Volume Alarm**: Disconnection, cuff leak, circuit leak.
*   **Apnea Alarm**: Insufficient patient respiratory effort.
*   **Always assess the patient first**, then the circuit, then the ventilator.

### ARDS Management Strategies

*   **Low Tidal Volume Ventilation (LTVV)**: 4-6 mL/kg PBW.
*   **Plateau Pressure <30 cmH2O**.
*   **Appropriate PEEP**: Use PEEP/FiO2 tables or titrate to best compliance/oxygenation.
*   **Permissive Hypercapnia**: Allow PaCO2 to rise (maintaining pH >7.20-7.25) to facilitate LTVV.
*   **Prone Positioning**: For moderate to severe ARDS (PaO2/FiO2 <150 mmHg), typically 12-16 hours/day.
*   **Conservative Fluid Management**.
*   Consider **Neuromuscular Blocking Agents (NMBAs)** for early severe ARDS or severe dyssynchrony.

### Weaning and Liberation from Mechanical Ventilation

*   **Daily Spontaneous Awakening Trials (SATs)**: "Sedation vacations."
*   **Daily Spontaneous Breathing Trials (SBTs)**: Patient breathes with minimal support (e.g., PSV 5-7 cmH2O with PEEP 5 cmH2O) for 30-120 minutes.
*   **Weaning Parameters (assess before SBT)**:
    *   Rapid Shallow Breathing Index (RSBI = RR/VT in Liters): Target <105.
    *   Negative Inspiratory Force (NIF/MIP): Target > -20 to -30 cmH2O.
    *   Vital Capacity (VC): Target >10-15 mL/kg PBW.
*   **Extubation Criteria**: Successful SBT, effective cough, patent airway, adequate mentation, stable hemodynamics, underlying cause of respiratory failure resolved or improving.`,
    categoryType: 'Topic',
    keywordsForImage: 'hospital ventilator',
  },
];

export const policies: ContentItem[] = [
  {
    id: 'stroke-protocols',
    slug: 'stroke-protocols',
    title: 'Acute Stroke Management Protocols',
    summary: 'Unit-specific guidelines for rapid assessment, diagnosis, and intervention in acute ischemic and hemorrhagic stroke.',
    content: `**"Time is Brain."** Rapid identification and intervention are critical for improving outcomes in acute stroke.

### Initial Actions (Suspected Stroke)

1.  **Activate Stroke Alert/Team Immediately.**
2.  **ABCs**: Assess airway, breathing, circulation. Provide O2 if SpO2 <94%.
3.  **Establish Last Known Well (LKW) Time**: Crucial for treatment decisions.
4.  **NIH Stroke Scale (NIHSS)**: Perform by certified personnel.
5.  **Vital Signs & Fingerstick Glucose**: Correct hypoglycemia (<60 mg/dL) promptly.
6.  **STAT Non-Contrast Head CT**: To differentiate ischemic vs. hemorrhagic stroke. This is the most critical initial diagnostic.
7.  **IV Access**: 2 large-bore IVs if possible.
8.  **Labs**: CBC, CMP, PT/INR, aPTT, troponin, type & screen. Do not delay CT for lab results.

### Ischemic Stroke Protocol

**IV Thrombolysis (Alteplase/tPA)**:
*   **Eligibility Criteria**:
    *   Diagnosis of ischemic stroke causing measurable neurological deficit.
    *   LKW within 4.5 hours (FDA approved up to 3 hours; AHA/ASA guidelines support up to 4.5 hours for select patients).
    *   Age ≥18 years.
*   **Strict Exclusion Criteria (selected examples)**:
    *   Evidence of hemorrhage on CT.
    *   Active internal bleeding or clinically significant bleeding (e.g., GI bleed within 3 weeks).
    *   Recent (within 3 months) intracranial/intraspinal surgery, serious head trauma, or previous stroke.
    *   Uncontrolled hypertension (SBP >185 mmHg or DBP >110 mmHg despite treatment).
    *   Known AVM, aneurysm, or neoplasm.
    *   Current use of anticoagulants with INR >1.7 or significantly elevated aPTT.
    *   Therapeutic LMWH in last 24 hours.
    *   Use of direct thrombin inhibitors or direct factor Xa inhibitors with evidence of effect.
    *   Platelet count <100,000/mm³.
    *   Glucose <50 mg/dL.
*   **Alteplase Dosing**: 0.9 mg/kg (maximum 90 mg).
    *   10% of total dose as IV bolus over 1 minute.
    *   Remaining 90% infused IV over 60 minutes.
*   **Blood Pressure Management during/after tPA**:
    *   Prior to tPA: If SBP >185 or DBP >110, gently lower with IV Labetalol or Nicardipine.
    *   During and for 24 hours post-tPA: Maintain SBP ≤180 mmHg and DBP ≤105 mmHg.
*   **Post-tPA Care**:
    *   Avoid antiplatelets/anticoagulants for 24 hours.
    *   Frequent neurological checks (e.g., q15min x2h, q30min x6h, q1h x16h).
    *   Monitor for signs of intracranial hemorrhage (ICH) (severe headache, N/V, acute HTN, worsening neuro status) – if suspected, stop tPA immediately and obtain stat head CT.
    *   Monitor for angioedema.

**Mechanical Thrombectomy**:
*   For Large Vessel Occlusion (LVO) in the anterior circulation.
*   Window up to 6-24 hours from LKW depending on imaging criteria (e.g., DAWN/DEFUSE 3 trials).
*   Requires CTA or MRA to identify LVO.
*   Tenecteplase (TNK) may be used as an alternative thrombolytic in some centers, particularly prior to thrombectomy.

### Hemorrhagic Stroke Protocol

**Intracerebral Hemorrhage (ICH)**:
*   **Goal**: Limit hematoma expansion and manage complications.
*   **Blood Pressure Control**: Aggressive reduction to a target SBP (e.g., <140-160 mmHg, specific targets may vary by institution/guideline) using IV Labetalol, Nicardipine, or Esmolol. Avoid excessive or rapid BP drops.
*   **Reversal of Anticoagulation**:
    *   Warfarin: Vitamin K IV, Prothrombin Complex Concentrate (PCC, e.g., Kcentra), or FFP.
    *   DOACs: Specific reversal agents (Idarucizumab for Dabigatran; Andexanet Alfa for Factor Xa inhibitors like Rivaroxaban, Apixaban) or PCCs if specific agents unavailable.
*   **ICP Management**: As per general neurocritical care guidelines (HOB elevation, osmotic therapy, etc.).
*   **Neurosurgical Consultation**: For potential hematoma evacuation, especially for cerebellar hematomas >3cm or supratentorial hematomas with significant mass effect/herniation.

**Subarachnoid Hemorrhage (SAH)**:
*   Often due to ruptured aneurysm.
*   **Secure Aneurysm**: Endovascular coiling or surgical clipping.
*   **Prevent/Manage Vasospasm**:
    *   Nimodipine PO for 21 days.
    *   Maintain euvolemia.
    *   Monitor with Transcranial Dopplers (TCDs).
    *   Induced hypertension/hypervolemia/hemodilution ("Triple H" therapy) is less commonly used now; focus on euvolemia and MAP augmentation if vasospasm occurs.
*   **Manage Hydrocephalus**: EVD may be required.
*   **Seizure Prophylaxis**: Controversial, treat seizures if they occur.

### General Supportive Care (All Stroke Types)

*   **Airway/Breathing**: Oxygen to maintain SpO2 >94%. Intubate if airway is unprotected or respiratory failure occurs.
*   **Dysphagia Screen**: Perform before any oral intake. Formal swallow evaluation if screen is failed.
*   **Nutrition**: Early enteral nutrition if patient is unable to take PO.
*   **Glycemic Control**: Target blood glucose 140-180 mg/dL. Avoid hypoglycemia.
*   **Fever**: Treat aggressively (e.g., acetaminophen, cooling measures).
*   **VTE Prophylaxis**: Intermittent pneumatic compression devices initially. Pharmacologic prophylaxis (LMWH/UFH) once bleeding risk is stable (e.g., 24-48 hours post-ischemic stroke if no tPA; timing varies for hemorrhagic stroke based on stability).
*   **Mobilization**: Early PT/OT involvement.
*   **Depression Screening**.`,
    categoryType: 'Policy',
    keywordsForImage: 'stroke brain',
  },
  {
    id: 'medication-administration',
    slug: 'medication-administration',
    title: 'Safe Medication Administration Guidelines',
    summary: 'ICU-specific policies for ensuring accuracy and safety in medication administration, including high-alert drugs and infusion management.',
    content: `Safe medication administration is paramount in the ICU setting, where patients are vulnerable and medications are often potent.

### The "10 Rights" of Medication Administration

A cornerstone of safe practice:
1.  **Right Patient**: Use at least two identifiers (e.g., name & DOB, scan armband).
2.  **Right Drug**: Check MAR, original order, and drug label. Be aware of Look-Alike/Sound-Alike (LASA) drugs.
3.  **Right Dose**: Verify calculation, ensure appropriateness for patient's weight, age, renal/hepatic function. Use leading zeros for doses <1 (e.g., 0.5 mg), avoid trailing zeros (e.g., 5.0 mg).
4.  **Right Route**: Confirm suitability of the ordered route (e.g., IV, PO, IM, SubQ).
5.  **Right Time**: Administer within the specified window (typically 30-60 minutes before/after scheduled time). Consider drug interactions and timing with food/other meds.
6.  **Right Documentation**: Document on the MAR immediately after administration. Include site for injections, patient response for PRNs and titrations.
7.  **Right Reason/Indication**: Understand why the patient is receiving the medication.
8.  **Right Response/Evaluation**: Monitor for therapeutic effects and adverse reactions.
9.  **Right to Refuse**: Educate the patient on consequences if they refuse, document the refusal, and notify the provider.
10. **Right Education**: Inform the patient (or family if appropriate) about the medication.

### High-Alert Medications in the ICU

These medications have an increased risk of causing significant patient harm when used in error. They require enhanced vigilance and often specific safety protocols.

| Category/Examples                  | Common Risks                                        | Key Safeguards                                                                 |
|------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------|
| **Insulin (IV & SubQ)**            | Hypoglycemia, hyperglycemia (errors)                | Independent double-check, standardized concentrations, clear labeling, glucose monitoring |
| **Anticoagulants (Heparin, Warfarin, DOACs)** | Bleeding, thrombosis (subtherapeutic)               | Independent double-check, baseline/monitoring labs (PT/INR, aPTT, anti-Xa), standardized protocols |
| **Narcotics/Opioids (IV, Epidural)** | Respiratory depression, oversedation, hypotension   | Independent double-check for PCA/epidural, careful titration, monitoring (sedation, RR, BP) |
| **Sedatives (Propofol, Benzodiazepines)** | Respiratory depression, hypotension, delirium (benzos) | Careful titration, monitoring (sedation scores like RASS, RR, BP), awareness of PRIS (Propofol) |
| **Concentrated Electrolytes (KCl, KPhos, MgSO4, Hypertonic Saline)** | Arrhythmias, neurological changes (if given incorrectly/rapidly) | Pharmacy preparation preferred, remove from floor stock, clear labeling, infusion pump for IV, rate limits |
| **Vasoactive Agents (Norepinephrine, Dopamine, Dobutamine)** | Extravasation, arrhythmias, hemodynamic instability | Central line preferred, infusion pump, frequent BP/HR monitoring, clear titration orders |
| **Neuromuscular Blocking Agents (NMBAs)** | Respiratory arrest (if not ventilated), awareness (if not sedated), prolonged weakness | **MUST ensure adequate sedation/analgesia**, mechanical ventilation, TOF monitoring, clear labeling |
| **Chemotherapeutic Agents**          | Toxicities (various), extravasation                 | Specialized training/handling, specific administration protocols, spill kits      |

**Independent Double-Check**: Required for many high-alert medications. Two licensed nurses separately verify the drug, dose, route, patient identification, and infusion pump settings (if applicable) before administration.

**Barcode Medication Administration (BCMA)**: Use consistently. Scan patient armband and medication barcode to verify rights at the bedside.

### IV Medication Safety Practices

*   **Compatibility**: Always check compatibility resources (pharmacist, Trissel's, Micromedex) before mixing medications or Y-siting infusions.
*   **Labeling**: Clearly label all IV lines at the patient-end port and the source container with: drug name, concentration, date/time prepared/hung, and initials of preparer/checker.
*   **Smart Infusion Pumps**: Utilize drug libraries with standardized concentrations and pre-set dose limits (soft/hard stops). Always verify pump programming against the order.
*   **Line Tracing**: Trace lines from the infusion pump to the patient before starting or changing an infusion to ensure correct connection.
*   **Titratable Infusions**: Orders must be clear and include: starting dose, titration parameters (e.g., titrate by X amount every Y minutes), specific goal parameter (e.g., MAP >65 mmHg, RASS -2), and a maximum dose or rate. Document titrations and patient response meticulously.
*   **Extravasation Management**: For vesicant or irritant drugs (e.g., vasopressors, chemotherapy, hypertonic solutions, calcium chloride/gluconate), monitor IV site frequently, especially peripheral sites.
    *   If extravasation occurs: Stop infusion immediately. Leave catheter in place (may attempt aspiration of residual drug). Notify provider. Administer antidote if available (e.g., Phentolamine for vasopressors, Hyaluronidase for some agents). Apply cool or warm compresses as indicated by drug type. Elevate limb. Document incident thoroughly.
    *   Use central lines for continuous vesicant infusions whenever possible.

### Medication Reconciliation

Perform a thorough medication reconciliation upon admission, transfer between units/levels of care, and at discharge to prevent discrepancies, omissions, and duplications.

### Reporting Errors and Near Misses

Report all medication errors and near misses promptly through the institution's reporting system. This is crucial for a culture of safety, allowing for system-level analysis and improvements to prevent future events. Reporting should be non-punitive. Root Cause Analysis (RCA) should be conducted for significant medication events.`,
    categoryType: 'Policy',
    keywordsForImage: 'nurse medication',
  },
  {
    id: 'central-line-care',
    slug: 'central-line-care',
    title: 'Central Line Associated Bloodstream Infection (CLABSI) Prevention',
    summary: 'Comprehensive protocols for CVC insertion, maintenance, dressing changes, and hub care to prevent CLABSIs.',
    content: `Central Line-Associated Bloodstream Infection (CLABSI) is a serious but often preventable healthcare-associated infection (HAI). Strict adherence to evidence-based bundles for insertion and maintenance is critical.

### Central Line Insertion Bundle (Physician/APP Responsibility, RN to Ensure/Document Compliance)

This bundle outlines key practices to be followed by the inserting provider, with nursing oversight and checklist verification.
1.  **Hand Hygiene**: Perform rigorous hand hygiene before starting the procedure.
2.  **Maximal Barrier Precautions**:
    *   Inserter and any assistants must wear: cap, mask, sterile gown, and sterile gloves.
    *   Patient must be covered with a large sterile drape from head to toe, exposing only the insertion site.
3.  **Skin Antisepsis**:
    *   Cleanse the insertion site with >0.5% Chlorhexidine with alcohol (e.g., ChloraPrep™).
    *   Apply friction and allow the antiseptic to air dry completely (typically 30 seconds to 2 minutes) before skin puncture.
4.  **Optimal Site Selection**:
    *   For adult patients, the subclavian vein is generally preferred for non-dialysis/non-plasmapheresis CVCs to minimize infection risk, if not contraindicated.
    *   Avoid the femoral site in adults if possible due to higher infection risk and DVT risk.
5.  **Ultrasound Guidance**: Use real-time ultrasound guidance for cannulation of the internal jugular and femoral veins. This increases success rates, reduces the number of attempts, and minimizes mechanical complications (e.g., arterial puncture, pneumothorax).
6.  **Daily Review of Line Necessity**:
    *   Assess the need for the CVC every day.
    *   Remove the CVC promptly when it is no longer indicated.
    *   Document this daily assessment.

### Central Line Maintenance Bundle (Nursing Responsibility)

Consistent, meticulous care is essential to prevent CLABSI.
1.  **Hand Hygiene**: Perform hand hygiene before and after any CVC manipulation (e.g., palpating the site, accessing the line, performing a dressing change).
2.  **"Scrub the Hub"**:
    *   Vigorously disinfect all needleless connectors and injection ports for at least **15 seconds** with an appropriate antiseptic (e.g., chlorhexidine-based solution, 70% alcohol, povidone-iodine).
    *   Allow the port to **air dry completely** before each access.
3.  **Dressing Care**:
    *   Use a sterile, transparent, semipermeable dressing (TSM) or a chlorhexidine-impregnated sponge/dressing (e.g., Biopatch™) if there is no contraindication (e.g., allergy, patient <2 months old).
    *   **TSM Dressing Change Frequency**: Change every 7 days, or sooner if the dressing becomes soiled, loose, or damp.
    *   **Gauze Dressing Change Frequency**: If a gauze dressing is used (e.g., if there is oozing at the site), change it every 2 days, or sooner if soiled, loose, or damp.
    *   **CHG Sponge**: If used, change with each dressing change.
    *   **Dressing Change Procedure**: Perform hand hygiene. Wear clean or sterile gloves (per institutional policy) and a mask. Cleanse the site with chlorhexidine and allow it to dry completely before applying the new dressing.
    *   **Site Assessment**: Assess the CVC insertion site for signs of infection (redness, pain, swelling, tenderness, purulence) with each dressing change and document findings.
4.  **Tubing and Needleless Connector Care**:
    *   **Administration Sets (Tubing)**:
        *   For continuous infusions (not blood or lipids): Change no more frequently than every 96 hours, but at least every 7 days.
        *   For blood/blood products: Change tubing within 4 hours of completing the transfusion, or every 24 hours if multiple units are given sequentially.
        *   For lipid emulsions (e.g., propofol, TPN with lipids): Change tubing every 12-24 hours (propofol typically every 12 hours or with each vial change).
    *   **Needleless Connectors**: Change according to institutional policy (e.g., every 72-96 hours, with tubing changes, or if blood/debris is visible within the connector).
    *   Ensure all lumens are clamped when not in use or when changing caps or tubing to prevent air embolism and contamination.
5.  **Bathing**: Daily bathing with chlorhexidine gluconate (CHG) for ICU patients >2 months old (unless contraindicated) has been shown to reduce CLABSI rates.

### Blood Sampling from CVCs

*   Minimize blood draws from CVCs to reduce the risk of contamination and infection. Use peripheral venipuncture when possible.
*   If drawing from a CVC, use strict aseptic technique.
*   Discard an appropriate volume of blood (e.g., 5-10 mL, or per institutional policy) before obtaining the sample for most tests, unless it is a blood culture or certain coagulation studies where the initial draw is required.
*   **Blood Cultures for Suspected CLABSI**: If CLABSI is suspected, draw paired blood cultures: one from a CVC lumen and one from a peripheral venipuncture, ideally drawn simultaneously. Clearly label the source of each culture. Differential time to positivity can help diagnose CLABSI.

### Staff Education and Competency

*   Regular training and competency validation for all staff involved in CVC insertion, care, and maintenance are essential.
*   Monitor adherence to CLABSI prevention bundles through audits and provide feedback to staff.
*   Investigate all CLABSIs thoroughly to identify contributing factors and implement corrective actions.`,
    categoryType: 'Policy',
    keywordsForImage: 'central line',
  },
];

export const getAllContentItems = (): ContentItem[] => {
  return [...bodySystems, ...topics, ...policies];
};
