
import type { ContentItem } from '@/types/content';

const splitContent = (markdown: string): { generalOverview: string; inDepthConsiderations: string } => {
  const generalOverviewMarker = "## General Overview";
  const inDepthMarker = "## In-Depth ICU Considerations";
  
  let generalOverview = "";
  let inDepthConsiderations = "";

  const inDepthStartIndex = markdown.indexOf(inDepthMarker);

  if (inDepthStartIndex !== -1) {
    const generalOverviewEndIndex = markdown.substring(0, inDepthStartIndex).indexOf(generalOverviewMarker);
    if (generalOverviewEndIndex !== -1) {
      generalOverview = markdown.substring(generalOverviewEndIndex, inDepthStartIndex).trim();
    } else {
      // If no "## General Overview" marker but "## In-Depth" exists, assume content before in-depth is overview
      generalOverview = markdown.substring(0, inDepthStartIndex).trim();
    }
    inDepthConsiderations = markdown.substring(inDepthStartIndex).trim();
  } else {
    // If no "## In-Depth" marker, assume all content is general overview
    const generalOverviewStartIndex = markdown.indexOf(generalOverviewMarker);
    if (generalOverviewStartIndex !== -1) {
        generalOverview = markdown.substring(generalOverviewStartIndex).trim();
    } else {
        generalOverview = markdown.trim(); // Fallback if no markers at all
    }
  }
  
  // Remove the "## General Overview" heading from the start of generalOverview string if present
  if (generalOverview.startsWith(generalOverviewMarker)) {
      generalOverview = generalOverview.substring(generalOverviewMarker.length).trimStart();
      // Add it back if it wasn't just the marker itself
      if (generalOverview.length > 0) {
          generalOverview = `${generalOverviewMarker}\n\n${generalOverview}`;
      } else {
         generalOverview = ""; // case where content was ONLY "## General Overview"
      }
  }


  return { generalOverview, inDepthConsiderations };
};

const originalBodySystemsContent: Array<Omit<ContentItem, 'generalOverview' | 'inDepthConsiderations'> & { content: string }> = [
  {
    id: 'cardiovascular',
    slug: 'cardiovascular',
    title: 'Cardiovascular System',
    summary: 'In-depth review of the cardiovascular system, common ICU conditions, and nursing interventions, including advanced monitoring and pharmacology.',
    content: `## General Overview

The cardiovascular system, composed of the heart, blood vessels, and blood, is responsible for transporting oxygen, nutrients, hormones, and cellular waste products throughout the body. Its efficient functioning is critical for maintaining tissue perfusion and cellular homeostasis, especially in critically ill patients.

## In-Depth ICU Considerations

### Cardiac Anatomy & Physiology
The heart, a four-chambered muscular organ, acts as a dual pump.
*   **Chambers**: Right Atrium (RA), Right Ventricle (RV), Left Atrium (LA), Left Ventricle (LV).
*   **Valves**: Tricuspid (RA to RV), Pulmonic (RV to Pulmonary Artery), Mitral (LA to LV), Aortic (LV to Aorta). These ensure unidirectional blood flow.
*   **Circuits**:
    *   **Pulmonary Circuit**: RV pumps deoxygenated blood to the lungs via pulmonary arteries; oxygenated blood returns to LA via pulmonary veins.
    *   **Systemic Circuit**: LV pumps oxygenated blood to the body via the aorta; deoxygenated blood returns to RA via vena cavae.
*   **Coronary Arteries**: Supply myocardium (heart muscle) with oxygenated blood. Main vessels include Left Main, Left Anterior Descending (LAD), Circumflex (LCx), and Right Coronary Artery (RCA).

### Electrical Conduction System & ECG Interpretation
The heart's rhythmic contraction is controlled by an intrinsic electrical system.
*   **SA Node (Sinoatrial Node)**: Primary pacemaker (60-100 bpm).
*   **AV Node (Atrioventricular Node)**: Delays impulse to allow atrial contraction (intrinsic rate 40-60 bpm).
*   **Bundle of His, Bundle Branches, Purkinje Fibers**: Conduct impulse to ventricles (Purkinje intrinsic rate 20-40 bpm).

The electrocardiogram (ECG/EKG) records this electrical activity.

| Wave/Interval    | Represents                                                                  | Normal Duration/Characteristics                                         | Significance of Abnormalities                                                                          |
|------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **P wave**       | Atrial depolarization (contraction)                                         | Upright, rounded; Duration: 0.06-0.12s; Amplitude: <2.5mm               | Absent (e.g., AFib, Junctional rhythm), Peaked (RAE), Notched/Wide (LAE)                                 |
| **PR Interval**  | Time for impulse from SA node through AV node to just before ventricular depolarization | 0.12-0.20 seconds                                                       | Short (<0.12s): Pre-excitation (e.g., WPW). Long (>0.20s): AV blocks.                                   |
| **QRS complex**  | Ventricular depolarization (contraction)                                    | Q (1st neg), R (1st pos), S (1st neg after R). Duration: 0.06-0.10(0.12)s | Wide (>0.12s): Bundle branch block, ventricular rhythm, hyperkalemia. Pathological Q waves: Prior MI.      |
| **ST Segment**   | Early ventricular repolarization (interval between depolarization & repolarization) | Normally isoelectric (flat at baseline).                                | Elevation: Myocardial injury (STEMI), pericarditis. Depression: Myocardial ischemia, digoxin effect.       |
| **T wave**       | Ventricular repolarization (relaxation)                                     | Normally upright, rounded. Asymmetrical.                                | Inverted: Ischemia, bundle branch block. Peaked: Hyperkalemia. Flat: Hypokalemia, ischemia.             |
| **QT Interval**  | Total time for ventricular depolarization & repolarization (varies with HR) | QTc (corrected for HR): <0.44s (males), <0.46s (females).               | Prolonged: Risk of Torsades de Pointes (polymorphic VT). Caused by drugs, electrolyte imbalance. Short: Hypercalcemia, digoxin. |
| **U wave**       | Small wave sometimes seen after T wave (late ventricular repolarization of Purkinje fibers) | Not always present. If present, smaller than T wave.                    | Prominent U waves: Hypokalemia, bradycardia, certain drugs.                                             |

### Common ICU Arrhythmias

| Arrhythmia                   | Key ECG Features                                                                                               | Common Management Approaches                                                                                                     |
|------------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| **Atrial Fibrillation (AFib)** | Irregularly irregular rhythm, absent P waves replaced by chaotic fibrillatory (f) waves, variable ventricular rate (controlled <100 bpm, uncontrolled/RVR >100 bpm). QRS usually narrow. | Rate control (beta-blockers, CCBs e.g., Diltiazem, Digoxin), rhythm control (Amiodarone, cardioversion), anticoagulation (CHADS2-VASc score). |
| **Atrial Flutter**           | "Sawtooth" flutter (F) waves, often regular ventricular response (e.g., 2:1, 3:1 block). Atrial rate ~250-350 bpm.  | Similar to AFib: rate/rhythm control, anticoagulation. Catheter ablation can be curative.                                           |
| **Ventricular Tachycardia (VTach)** | Wide QRS (>0.12s), rapid rate (typically 100-250 bpm), regular or slightly irregular rhythm. AV dissociation may be present. Monomorphic vs. Polymorphic. | ACLS protocol (pulse vs. pulseless). Antiarrhythmics (Amiodarone, Lidocaine), synchronized cardioversion (if pulse), defibrillation (if pulseless). Treat underlying cause (ischemia, electrolytes). |
| **Ventricular Fibrillation (VFib)** | Chaotic, unorganized electrical activity, no discernible P, QRS, or T waves. "Quivering" baseline. Fatal if not treated. | Immediate defibrillation, ACLS protocol (CPR, Epinephrine, Amiodarone).                                                              |
| **Bradycardias (various)**   | Slow rate (<60 bpm). Includes Sinus Brady, AV Blocks (1st degree: prolonged PR; 2nd Mobitz I: progressive PR prolongation then dropped QRS; 2nd Mobitz II: intermittent non-conducted P waves; 3rd degree/Complete: complete AV dissociation, P waves and QRS independent). | Atropine (if symptomatic), transcutaneous/transvenous pacing, Dopamine/Epinephrine infusion. Identify and treat reversible causes.     |
| **Supraventricular Tachycardia (SVT)** | Narrow QRS (<0.12s), regular, rapid rate (often 150-250 bpm). P waves often hidden in preceding T wave or QRS, or retrograde. | Vagal maneuvers, Adenosine, beta-blockers, CCBs, synchronized cardioversion (if unstable or refractory).                          |
| **Asystole/Pulseless Electrical Activity (PEA)** | Asystole: Flatline (no electrical activity). PEA: Organized rhythm on monitor without a palpable pulse.                  | ACLS protocol (CPR, Epinephrine), identify and treat reversible causes (H's & T's: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypothermia; Tension pneumo, Tamponade, Toxins, Thrombosis (pulmonary/coronary)). |

### Hemodynamic Monitoring

| Parameter                             | Normal Range/Value             | Significance                                                                 | Common Monitoring Device |
|---------------------------------------|--------------------------------|------------------------------------------------------------------------------|--------------------------|
| **Mean Arterial Pressure (MAP)**      | 70-105 mmHg                    | Average pressure driving tissue perfusion. Target >65 mmHg in shock.         | Arterial Line, NIBP    |
| **Central Venous Pressure (CVP)**     | 2-8 mmHg                       | Reflects RV preload. Use with dynamic measures for fluid status.           | Central Venous Catheter (CVC) |
| **Pulmonary Artery Pressure (PAP)**   | Sys: 15-30 mmHg, Dia: 8-15 mmHg, Mean: 10-20 mmHg | Pressures in pulmonary artery. ↑ in pulmonary HTN, LV failure.              | Pulmonary Artery Catheter (PAC) |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | 6-12 mmHg                      | Indirectly measures left atrial pressure (LV preload).                       | PAC                      |
| **Cardiac Output (CO)**               | 4-8 L/min                      | Volume of blood pumped by heart/min (CO = HR x SV).                          | PAC, other CO monitors   |
| **Cardiac Index (CI)**                | 2.5-4 L/min/m²                 | CO adjusted for Body Surface Area (BSA).                                     | Calculated (via PAC, etc.)|
| **Systemic Vascular Resistance (SVR)**| 800-1200 dynes·s/cm⁻⁵          | Resistance the LV must overcome (LV afterload).                              | Calculated (via PAC)     |
| **Stroke Volume (SV)**                | 60-100 mL/beat                 | Volume ejected by ventricle per beat.                                        | PAC, Echocardiography    |

**Arterial Line Waveform Description & Square Wave Test**:
*   **Waveform Components**:
    *   **Anacrotic Limb (Systolic Upstroke)**: Rapid pressure increase as LV ejects blood.
    *   **Systolic Peak**: Highest pressure point.
    *   **Dicrotic Notch**: Brief dip caused by aortic valve closure. Marks end of systole/start of diastole.
    *   **Diastolic Runoff**: Gradual pressure decline as blood flows to periphery.
*   **Square Wave Test (Fast Flush Test)**: Assesses system accuracy.
    *   *Optimal*: Sharp upstroke, plateau, rapid downstroke with 1-2 oscillations before returning to baseline.
    *   *Overdamped*: Slurred upstroke, absent dicrotic notch, <1.5 oscillations. Underestimates SBP, overestimates DBP. Causes: air bubbles, clots, kinks, loose connections.
    *   *Underdamped*: >2-3 oscillations ("ringing"). Overestimates SBP, underestimates DBP. Causes: stiff/long tubing, excessive stopcocks.

### Key Cardiovascular Conditions in ICU
*   **Myocardial Infarction (MI)**: STEMI vs. NSTEMI. Diagnosis: ECG, cardiac enzymes (Troponin). Management: MONA (Morphine, Oxygen, Nitrates, Aspirin - cautiously), antiplatelets, anticoagulants, beta-blockers, ACE-I, statins, reperfusion (PCI, thrombolytics).
*   **Acute Decompensated Heart Failure (ADHF)**: Worsening HF symptoms. Management: Diuretics, vasodilators, inotropes.
*   **Shock States**: Cardiogenic, Hypovolemic, Septic, Neurogenic, Anaphylactic - all involve critical hypoperfusion.
*   **ACLS Protocols**: Standardized approach to cardiac arrest.

### Common Vasoactive Medications
(See Critical Care Pharmacology topic for full details)
*   **Norepinephrine**: First-line for septic shock.
*   **Dobutamine**: For cardiogenic shock, ADHF.
*   **Vasopressin**: Adjunct in septic shock.`,
    categoryType: 'Body System',
    keywordsForImage: 'heart anatomy cardiovascular',
  },
  {
    id: 'respiratory',
    slug: 'respiratory',
    title: 'Respiratory System',
    summary: 'Comprehensive guide to respiratory care, including advanced ventilation, ARDS management, and airway adjuncts.',
    content: `## General Overview

The respiratory system is responsible for gas exchange, supplying the body with oxygen and removing carbon dioxide. It includes the upper airways (nose, pharynx, larynx) and lower airways (trachea, bronchi, bronchioles), terminating in the alveoli where gas exchange with the pulmonary capillaries occurs.

## In-Depth ICU Considerations

### Arterial Blood Gas (ABG) Interpretation
Essential for assessing oxygenation, ventilation, and acid-base status.

| Parameter         | Normal Range         | Acid-Base Implication (if abnormal)                     |
|-------------------|----------------------|---------------------------------------------------------|
| **pH**            | 7.35-7.45            | <7.35: Acidemia; >7.45: Alkalemia                       |
| **PaCO2**         | 35-45 mmHg           | Respiratory component. >45: Resp Acidosis; <35: Resp Alkalosis |
| **HCO3**          | 22-26 mEq/L          | Metabolic component. <22: Met Acidosis; >26: Met Alkalosis |
| **PaO2**          | 80-100 mmHg          | Oxygenation status. <80: Hypoxemia                      |
| **SaO2**          | 95-100%              | Oxygen saturation of hemoglobin.                        |
| **Base Excess (BE)**| -2 to +2 mEq/L       | Overall metabolic status; negative BE suggests metabolic acidosis. |

**Systematic ABG Interpretation**:
1.  **Assess pH**: Acidemia or Alkalemia?
2.  **Assess PaCO2**: Is it consistent with pH (respiratory)?
3.  **Assess HCO3**: Is it consistent with pH (metabolic)?
4.  **Determine Primary Disorder**.
5.  **Check for Compensation**: Has the other system tried to correct the imbalance? (e.g., if Resp Acidosis, HCO3 should rise to compensate).
6.  **Assess Oxygenation**: PaO2 and SaO2.
7.  **Calculate Anion Gap (AG)** if metabolic acidosis is present: Na - (Cl + HCO3). Normal: 8-12 mEq/L. (High AG causes: MUDPILES).

### Mechanical Ventilation
(See "Advanced Ventilator Management" topic for more detailed waveform analysis)

#### Common Ventilator Modes

| Mode                                     | Description                                                                                                | Key Features / Use                                                               |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Assist-Control Volume Control (AC-VC)** | Delivers preset tidal volume (VT) for every breath (patient-triggered or ventilator-initiated).            | Ensures minimum minute ventilation; pressure varies.                             |
| **Assist-Control Pressure Control (AC-PC)**| Delivers preset inspiratory pressure (Pinsp) for a set inspiratory time (Ti).                            | Ensures consistent peak pressure; VT varies.                                     |
| **Synchronized Intermittent Mandatory Ventilation (SIMV)** | Delivers set number of mandatory breaths. Patient can breathe spontaneously between, often with Pressure Support (PS). | Allows patient contribution to WOB; may prolong weaning.                           |
| **Pressure Support Ventilation (PSV)**   | Patient triggers all breaths. Ventilator provides set inspiratory pressure.                                  | Used for SBTs, weaning; patient controls rate, VT.                               |
| **Continuous Positive Airway Pressure (CPAP)** | Constant positive pressure during spontaneous breathing.                                                     | Maintains alveolar recruitment.                                                  |

#### Key Ventilator Settings

| Setting                          | Description / Typical Range                                       | Purpose                                                               |
|----------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------|
| **FiO2 (Fraction of Inspired O2)** | 0.21 - 1.0                                                        | Adjust to maintain target SpO2/PaO2.                                  |
| **PEEP (Positive End-Expiratory Pressure)** | 5-20 cmH2O (or higher in ARDS)                                  | Prevents alveolar collapse, improves oxygenation.                       |
| **Respiratory Rate (RR)**        | 10-20 breaths/min (adjusted for PaCO2/pH)                         | Controls minute ventilation and CO2 elimination.                        |
| **Tidal Volume (VT)**            | 4-8 mL/kg Ideal Body Weight (IBW)                                 | Volume of air per breath (lower for ARDS).                            |
| **Inspiratory Pressure (Pinsp/PIP)** | Used in PC modes; target lowest effective.                        | Pressure applied during inspiration.                                  |
| **Plateau Pressure (Pplat)**     | Static pressure during inspiratory hold. Target <30 cmH2O.        | Reflects alveolar pressure; marker for lung protection.               |
| **Driving Pressure (ΔP)**        | Pplat - Total PEEP. Target <15 cmH2O.                             | Associated with ARDS mortality.                                       |

**Ventilator Waveform Interpretation (Brief Examples)**:
*   **Pressure-Time**: In VCV, PIP >> Pplat suggests high resistance. PIP ≈ Pplat (both high) suggests low compliance.
*   **Flow-Time**: Expiratory flow not returning to zero before next breath indicates Auto-PEEP. "Scooped" inspiratory flow suggests flow starvation.
*   **Volume-Time**: Expiratory volume not returning to baseline indicates an air leak.

### Acute Respiratory Distress Syndrome (ARDS)
Diffuse inflammatory lung injury leading to hypoxemia and stiff lungs.
**Berlin Criteria**:
1.  **Timing**: Within 1 week of known insult.
2.  **Imaging**: Bilateral opacities not explained by effusions/collapse.
3.  **Origin of Edema**: Respiratory failure not fully explained by cardiac failure/fluid overload.
4.  **Oxygenation (PaO2/FiO2 ratio on PEEP ≥5 cmH2O)**:
    *   Mild: 201-300 mmHg
    *   Moderate: 101-200 mmHg
    *   Severe: ≤100 mmHg

**ARDS Management**:
*   Lung Protective Ventilation: Low VT (4-6 mL/kg IBW), Pplat <30 cmH2O, ΔP <15 cmH2O.
*   Optimize PEEP.
*   Prone positioning for moderate/severe ARDS.
*   Conservative fluid management.
*   Consider NMBAs for severe ARDS.

### Ventilator-Associated Pneumonia (VAP) Prevention
*   HOB elevation 30-45 degrees.
*   Daily sedation interruptions & assessment of readiness to extubate.
*   Oral care with chlorhexidine.
*   PUD & DVT prophylaxis.
*   Subglottic suctioning (if ETT equipped).

### Other Key Concepts
*   **Non-Invasive Ventilation (NIV - BiPAP/CPAP)**: For COPD exacerbation, cardiogenic pulmonary edema.
*   **Chest Tubes**: For pneumothorax, hemothorax, effusion. Monitor drainage, air leaks, tidaling.
*   **Tracheostomy Care**: Stoma care, inner cannula, cuff pressure.`,
    categoryType: 'Body System',
    keywordsForImage: 'lungs anatomy respiratory',
  },
  {
    id: 'neurological',
    slug: 'neurological',
    title: 'Neurological System',
    summary: 'Focus on advanced neurological assessments, ICP/CPP management, stroke, TBI, and seizure care in the ICU.',
    content: `## General Overview

The neurological system, comprising the brain, spinal cord, and peripheral nerves, is the body's command center. It controls thought, movement, sensation, and vital autonomic functions. Neurological dysfunction in the ICU can be primary (e.g., stroke, TBI) or secondary to other critical illnesses (e.g., sepsis-associated encephalopathy).

## In-Depth ICU Considerations

### Intracranial Pressure (ICP) Monitoring
ICP reflects pressure within the skull. Normal ICP: 5-15 mmHg. Sustained ICP >20-22 mmHg is intracranial hypertension.
*   **Cerebral Perfusion Pressure (CPP)**: CPP = MAP - ICP. Target: 60-70 mmHg.
*   **ICP Waveform Components**:
    *   **P1 (Percussion wave)**: Arterial pulsation. Normally tallest.
    *   **P2 (Tidal wave)**: Reflects intracranial compliance. If P2 > P1, indicates poor compliance.
    *   **P3 (Dicrotic wave)**: Venous pulsation related to aortic valve closure. Smallest.
    *   **Normal Morphology**: P1 > P2 > P3.
*   **Lundberg Waves**:
    *   **A waves (Plateau waves)**: Sustained ICP elevations (50-100 mmHg) for 5-20 min. Ominous sign indicating critically low compliance.
    *   **B waves**: Rhythmic oscillations up to 50 mmHg. Less critical but may precede A waves.
    *   **C waves**: Smaller, more frequent, related to BP variations.

#### Interventions for Increased ICP (Tiered Approach)

| Tier | Intervention                                     | Rationale / Notes                                                         |
|------|--------------------------------------------------|---------------------------------------------------------------------------|
| **0 (Basic)** | HOB 30-45°, head midline, avoid neck flexion/rotation | Promote venous outflow.                                                  |
|      | Maintain normothermia                              | Fever increases metabolic demand and ICP.                                 |
|      | Analgesia & Sedation (e.g., Fentanyl, Propofol)    | Minimize pain/agitation.                                                  |
|      | Avoid hypoxia (PaO2 >60) & hypercapnia (PaCO2 35-45) | Both cause vasodilation, ↑ICP. Avoid prophylactic hyperventilation.          |
| **1**  | CSF Drainage via EVD (if present)                | Directly reduces CSF volume.                                              |
|      | Osmotic Therapy: Mannitol (0.25-1 g/kg IV)         | Creates osmotic gradient. Monitor serum osmolality (<320 mOsm/L), electrolytes. |
|      | Hypertonic Saline (e.g., 3% NaCl, 23.4% NaCl)      | Pulls fluid from brain. Monitor serum Na⁺ (target specific ranges).         |
| **2**  | Controlled Hyperventilation (PaCO2 30-35 mmHg)   | Transient effect via vasoconstriction; short-term use, monitor SjvO2/PbtO2. |
|      | Neuromuscular Blocking Agents (NMBAs)              | If sedation insufficient to control agitation/posturing/coughing.           |
| **3 (Refractory)** | Barbiturate Coma (e.g., Pentobarbital)         | Reduces cerebral metabolic rate (CMR_O2). Requires continuous EEG.        |
|      | Decompressive Craniectomy                        | Surgical removal of part of skull.                                        |
|      | Hypothermia (therapeutic, e.g., 32-34°C)         | Reduces CMR_O2. Controversial, strict temperature control needed.         |

### Stroke Management
(See "Acute Stroke Management Protocols" policy for full details)
*   **Ischemic Stroke**: Caused by occlusion. Management: IV tPA (if LKW <3-4.5h & eligible), mechanical thrombectomy (for LVO up to 24h in select patients).
*   **Hemorrhagic Stroke (ICH/SAH)**: Caused by bleeding. Management: BP control, reverse anticoagulation, manage ICP. For SAH: secure aneurysm, Nimodipine for vasospasm prevention.

### Traumatic Brain Injury (TBI)
*   **Primary Injury**: Occurs at impact.
*   **Secondary Injury**: Cascade of events post-injury (hypoxia, hypotension, edema, ↑ICP, seizures). Goal is to prevent/minimize secondary injury.
*   **Glasgow Coma Scale (GCS)**: Assesses LOC (Eye, Verbal, Motor). Score ≤8 suggests coma.

### Seizures & Status Epilepticus
*   **Status Epilepticus**: Seizure >5 min or ≥2 seizures without full recovery between.
*   **Management**: ABCs, Benzodiazepines (Lorazepam, Diazepam), then IV AEDs (Fosphenytoin, Levetiracetam, Valproate). Refractory -> anesthesia (Midazolam, Propofol, Pentobarbital) with cEEG.

### Neurological Assessments
*   **Level of Consciousness (LOC)**: GCS, RASS/SAS (if sedated).
*   **Pupillary Assessment**: Size, equality, reactivity (PERRLA). Anisocoria or fixed/dilated pupil is an emergency.
*   **Motor Function**: Strength, symmetry, purposeful movement vs. posturing (decorticate, decerebrate).
*   **Cranial Nerves**: Assess as appropriate.
*   **Reflexes**: Gag, cough, corneal. Brainstem reflexes for brain death assessment.

### Spinal Cord Injury (SCI)
*   **Spinal Shock**: Transient flaccid paralysis, areflexia, loss of sensation below injury.
*   **Neurogenic Shock**: Hypotension, bradycardia, poikilothermia (T6 or above).
*   **Autonomic Dysreflexia**: Life-threatening HTN, headache, bradycardia in T6 injuries or above due to noxious stimulus below injury. Elevate HOB, remove stimulus.`,
    categoryType: 'Body System',
    keywordsForImage: 'brain anatomy neurological',
  },
  {
    id: 'renal',
    slug: 'renal',
    title: 'Renal System',
    summary: 'Overview of renal physiology, acute kidney injury (AKI) management, continuous renal replacement therapy (CRRT), and electrolyte imbalances in the ICU.',
    content: `## General Overview

The renal system, consisting of the kidneys, ureters, bladder, and urethra, plays a vital role in maintaining homeostasis. Its primary functions include filtering waste products from the blood, regulating fluid volume and electrolyte balance, controlling acid-base balance, and producing hormones involved in blood pressure regulation (renin) and red blood cell production (erythropoietin).

## In-Depth ICU Considerations

### Basic Renal Physiology
*   **Nephron**: The functional unit of the kidney, responsible for filtration, reabsorption, and secretion.
*   **Glomerular Filtration Rate (GFR)**: Volume of plasma filtered by glomeruli per minute. Normal: ~90-120 mL/min/1.73m². Best overall index of kidney function.
*   **Key Functions**: Waste excretion (urea, creatinine), fluid balance (ADH, aldosterone), electrolyte balance (Na⁺, K⁺, Ca²⁺, PO₄³⁻, Mg²⁺), acid-base balance (HCO₃⁻ reabsorption/generation, H⁺ secretion), BP regulation (RAAS), erythropoietin production, Vitamin D activation.

### Acute Kidney Injury (AKI)
A rapid decline in kidney function. Common in ICU.
**Diagnostic Criteria (KDIGO)**: Any of the following:
*   Increase in Serum Creatinine (SCr) by ≥0.3 mg/dL within 48 hours; OR
*   Increase in SCr to ≥1.5 times baseline within prior 7 days; OR
*   Urine volume <0.5 mL/kg/hr for ≥6 hours.

**Types of AKI**:

| Type        | Pathophysiology & Common Causes                                                                                            | Examples in ICU                                                                                                |
|-------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| **Prerenal**  | Decreased renal perfusion. Kidneys structurally normal initially. (Most common)                                              | Hypovolemia (hemorrhage, dehydration), decreased cardiac output (cardiogenic shock, severe HF), severe vasodilation (sepsis, anaphylaxis), renal artery stenosis, hepatorenal syndrome, abdominal compartment syndrome. |
| **Intrinsic (Intrarenal)** | Direct damage to kidney structures (glomeruli, tubules, interstitium, vessels).                                               | **Acute Tubular Necrosis (ATN)** from ischemia (prolonged prerenal state) or nephrotoxins (contrast dye, aminoglycosides, vancomycin, amphotericin B, NSAIDs, myoglobinuria from rhabdomyolysis, hemoglobinuria from hemolysis), acute glomerulonephritis, acute interstitial nephritis (drugs, infections), vasculitis. |
| **Postrenal** | Obstruction of urine flow from kidneys. (Least common in ICU if Foley in place)                                              | Prostatic hypertrophy (BPH), kidney stones, tumors compressing ureters, blocked Foley catheter, retroperitoneal fibrosis. |

**Management of AKI**:
*   **Identify and Treat Underlying Cause**.
*   **Optimize Hemodynamics**: Ensure adequate renal perfusion (MAP target often >65 mmHg).
*   **Fluid Management**: Judicious fluid administration for prerenal causes. Avoid fluid overload. Diuretics only for fluid overload if kidneys responsive, do not improve AKI outcomes.
*   **Avoid Nephrotoxins**: Discontinue or dose-adjust nephrotoxic medications.
*   **Monitor and Correct Electrolytes & Acid-Base**: Especially hyperkalemia, metabolic acidosis.
*   **Nutritional Support**.
*   **Renal Replacement Therapy (RRT)**: Indications: AEIOU (Acidosis intractable, Electrolyte imbalance severe e.g., hyperkalemia, Intoxication with dialyzable drug, Overload of fluid refractory, Uremia symptomatic e.g., encephalopathy, pericarditis).

### Continuous Renal Replacement Therapy (CRRT)
Preferred RRT modality for hemodynamically unstable ICU patients.
**Common Modalities**:
*   **SCUF (Slow Continuous Ultrafiltration)**: Primarily fluid removal.
*   **CVVH (Continuous Veno-Venous Hemofiltration)**: Solute removal mainly by convection. Requires replacement fluid.
*   **CVVHD (Continuous Veno-Venous Hemodialysis)**: Solute removal mainly by diffusion. Uses dialysate.
*   **CVVHDF (Continuous Veno-Venous Hemodiafiltration)**: Combines convection and diffusion. Uses both replacement fluid and dialysate.

**Nursing Considerations for CRRT**: Monitor hemodynamics, fluid balance (strict I&Os), electrolytes, acid-base. Anticoagulation (heparin, citrate). Maintain circuit patency. Prevent infection. Temperature regulation. Medication dosing adjustments.

### Common Electrolyte Imbalances in ICU Renal Patients

| Electrolyte | Imbalance       | Common Causes in Renal Patients                          | Signs/Symptoms & ECG Changes                                                                     | Management                                                                                             |
|-------------|-----------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **Potassium (K⁺)** | **Hyperkalemia** | Decreased excretion (AKI/CKD), acidosis, cell lysis (rhabdo, tumor lysis), K⁺-sparing drugs, ACE-I/ARBs. | Weakness, paralysis, arrhythmias. ECG: Peaked T waves, wide QRS, prolonged PR, sine wave, asystole.      | **C**alcium (stabilize membrane), **B**icarbonate/Beta-agonists (shift K⁺ in), **I**nsulin/**G**lucose (shift K⁺ in), **K**ayexalate/diuretics (remove K⁺), **D**ialysis. |
|             | **Hypokalemia**  | Diuretics, GI losses (N/V/D, NG suction), RRT, refeeding syndrome, alkalosis. | Weakness, ileus, cramps, arrhythmias. ECG: Flat/inverted T waves, U waves, ST depression, prolonged QT. | Oral/IV K⁺ replacement (IV rate limits, monitor site). Magnesium repletion often needed.               |
| **Sodium (Na⁺)**   | **Hyponatremia** | Fluid overload (dilutional), SIADH, adrenal insufficiency, diuretics, severe hyperglycemia (pseudohyponatremia). | N/V, headache, confusion, seizures, coma (esp. if acute/severe).                                 | Fluid restriction, loop diuretics, salt tabs, hypertonic saline (3% NaCl for severe/symptomatic, slow correction to avoid osmotic demyelination). Treat cause. |
|             | **Hypernatremia**| Dehydration (↓intake, ↑insensible losses), diabetes insipidus (central/nephrogenic), excessive saline admin, Cushing's. | Thirst, AMS, lethargy, seizures, muscle weakness/twitching, coma.                                  | Free water replacement (PO/IV D5W or 0.45% NaCl), treat underlying cause (e.g., DDAVP for central DI). Correct slowly. |
| **Calcium (Ca²⁺)** | **Hypocalcemia** | CKD (↓Vit D activation, ↑PO₄), citrate (CRRT), pancreatitis, hypoparathyroidism, massive transfusions, loop diuretics. | Paresthesias, tetany (Chvostek's/Trousseau's), muscle cramps, seizures, laryngospasm, prolonged QT. | IV Calcium gluconate/chloride. Correct hypomagnesemia.                                                 |
|             | **Hypercalcemia**| Malignancy, hyperparathyroidism, immobilization, granulomatous diseases, thiazides, Vitamin D toxicity. | "Stones, bones, groans, psychiatric overtones": kidney stones, bone pain, N/V, constipation, AMS, weakness, short QT, bradycardia. | IV hydration (NS), loop diuretics (after hydration), bisphosphonates, calcitonin, glucocorticoids, RRT. |
| **Phosphate (PO₄³⁻)** | **Hyperphosphatemia** | Decreased excretion (AKI/CKD), cell lysis, rhabdomyolysis, excessive intake/enemas. | Often asymptomatic. Chronic: metastatic calcification, secondary hyperparathyroidism. Acute: Can cause hypocalcemia. | Phosphate binders (with meals), dietary restriction, RRT.                                                |
|             | **Hypophosphatemia**| Refeeding syndrome, DKA treatment, respiratory alkalosis, antacids, CRRT, malnutrition, alcoholism, burns. | Weakness (resp muscle failure), AMS, rhabdomyolysis, hemolysis, impaired cardiac function.         | Oral/IV phosphate replacement (caution with IV rate/dose).                                             |
| **Magnesium (Mg²⁺)**| **Hypomagnesemia**| Diuretics, GI losses, alcoholism, PPIs, amphotericin B, cisplatin, malnutrition, DKA. | Weakness, tetany, seizures, arrhythmias (Torsades de Pointes, VT/VF), concurrent hypokalemia/hypocalcemia. | IV/Oral Magnesium sulfate.                                                                               |
|             | **Hypermagnesemia**| Renal failure, excessive intake (antacids, laxatives), iatrogenic overdose (e.g., preeclampsia treatment). | Weakness, ↓reflexes, respiratory depression, hypotension, bradycardia, heart block, cardiac arrest.   | IV Calcium (antagonizes effects), fluids, diuretics (if UOP), RRT. Stop Mg sources.                     |`,
    categoryType: 'Body System',
    keywordsForImage: 'kidney anatomy renal',
  },
  {
    id: 'endocrine',
    slug: 'endocrine',
    title: 'Endocrine System',
    summary: 'Covers endocrine emergencies like DKA, HHS, thyroid storm, adrenal crisis, and management of glycemic control in critically ill patients.',
    content: `## General Overview

The endocrine system consists of glands that produce and secrete hormones, which are chemical messengers regulating a wide array of bodily functions. These include metabolism, growth and development, stress response, sexual function, sleep, and mood. In critical care, acute disturbances of this system, such as diabetic emergencies or thyroid/adrenal crises, can be life-threatening.

## In-Depth ICU Considerations

### Glycemic Control in Critical Illness
Stress hyperglycemia is very common in ICU patients due to increased counter-regulatory hormones (cortisol, glucagon, catecholamines) and insulin resistance. Both hyperglycemia and hypoglycemia are associated with poor outcomes.
*   **Target Blood Glucose Range**: For most critically ill patients, target is typically 140-180 mg/dL (7.8-10.0 mmol/L).
*   **Insulin Therapy**: Continuous IV insulin infusion is the preferred method for precise glycemic control in most ICU patients. Standardized protocols are essential.
*   **Monitoring**: Frequent blood glucose monitoring (e.g., hourly for insulin drips, q4-6h for stable patients). Point-of-care testing is common, but arterial/venous samples may be more accurate.
*   **Hypoglycemia Management**: Prompt treatment (e.g., IV Dextrose 50%) if glucose <70 mg/dL. Identify and address cause.

### Diabetic Ketoacidosis (DKA)
A life-threatening complication of diabetes (more common in Type 1 DM but can occur in Type 2 DM, especially with severe stress/infection) characterized by hyperglycemia, ketosis, and metabolic acidosis.
*   **Pathophysiology**: Absolute or relative insulin deficiency leads to:
    *   Increased hepatic glucose production (gluconeogenesis, glycogenolysis) -> Hyperglycemia.
    *   Decreased peripheral glucose utilization -> Hyperglycemia.
    *   Increased lipolysis (fat breakdown) -> Increased free fatty acids -> Ketone body formation (acetoacetate, β-hydroxybutyrate, acetone) -> Ketosis and Metabolic Acidosis.
*   **Diagnostic Criteria**:
    *   Blood glucose >250 mg/dL (though can be lower in "euglycemic DKA").
    *   Arterial pH <7.3 and/or Serum Bicarbonate (HCO3) <18 mEq/L.
    *   Presence of ketones in blood (elevated β-hydroxybutyrate is most specific) or urine.
    *   Anion Gap >10-12 (Anion Gap = Na - (Cl + HCO3)).
*   **Management Pillars**:
    1.  **Fluid Resuscitation**: Initial 1-2L isotonic saline (0.9% NaCl) over 1-2 hours, then adjust based on hydration status, electrolytes, and urine output. Goal is to correct fluid deficit over 24-48h. When glucose falls to ~200-250 mg/dL, change IV fluids to D5W with 0.45% NaCl to prevent hypoglycemia.
    2.  **Insulin Therapy**: Regular insulin IV infusion (e.g., 0.1 units/kg bolus then 0.1 units/kg/hr, or 0.14 units/kg/hr without bolus). **Crucial: Do NOT start insulin until serum K⁺ is >3.3 mEq/L.** If K⁺ is low, correct K⁺ first. Target glucose reduction of 50-75 mg/dL/hr.
    3.  **Potassium Replacement**: DKA causes significant total body K⁺ depletion despite potentially normal/high serum K⁺ initially (due to extracellular shift from acidosis and insulin deficiency). Add K⁺ (20-40 mEq/L) to IV fluids once UOP is established and serum K⁺ is ≤5.0-5.2 mEq/L to prevent severe hypokalemia as insulin and acidosis correction drive K⁺ intracellularly.
    4.  **Bicarbonate**: Rarely indicated. Consider only if severe acidosis (pH <6.9) causing hemodynamic instability, despite other measures.
    5.  **Phosphate**: Monitor; replete if severe hypophosphatemia (<1 mg/dL) or symptomatic.
    6.  **Identify and Treat Precipitating Cause**: Infection (most common), non-compliance with insulin, new-onset DM, MI, CVA, pancreatitis, drugs.
*   **Monitoring**: Hourly glucose, q2-4h electrolytes (esp. K⁺, HCO₃⁻, Anion Gap), anion gap closure. Transition to subcutaneous insulin when anion gap is closed, patient is eating, and acidosis has resolved (overlap IV and SQ insulin by 1-2 hours).

### Hyperosmolar Hyperglycemic State (HHS)
A life-threatening emergency (more common in Type 2 DM) characterized by extreme hyperglycemia, profound dehydration, and hyperosmolality, typically without significant ketosis or acidosis.
*   **Pathophysiology**: Relative insulin deficiency (enough to prevent ketosis but not hyperglycemia) combined with inadequate fluid intake leads to severe hyperglycemia, osmotic diuresis, and dehydration.
*   **Diagnostic Criteria**:
    *   Blood glucose >600 mg/dL.
    *   Effective serum osmolality >320 mOsm/kg (Calculated: 2*Na + Glucose/18).
    *   Arterial pH >7.3, Serum Bicarbonate (HCO3) >18 mEq/L (minimal or no ketosis).
*   **Management**: Similar principles to DKA but often with greater fluid deficits and more gradual correction.
    1.  **Aggressive Fluid Resuscitation**: Often requires larger volumes (e.g., 6-10L deficit). Start with 0.9% NaCl. If corrected Na⁺ is high/normal, may switch to 0.45% NaCl.
    2.  **Insulin Therapy**: IV insulin infusion (similar rates to DKA, e.g., 0.1 units/kg/hr; bolus may be omitted). Start after initial fluid resuscitation.
    3.  **Electrolyte Replacement**: Especially K⁺ (often significant deficits).
    4.  **Identify and Treat Precipitating Cause**: Often infection, MI, CVA, non-compliance with medications.
*   **Monitoring**: Glucose, electrolytes, serum osmolality, neurological status (risk of cerebral edema with rapid correction of osmolality, though less common than in DKA).

### Thyroid Storm (Thyrotoxic Crisis)
A rare, life-threatening exacerbation of hyperthyroidism. High mortality.
*   **Clinical Features**: High fever (>38.5°C or 101.3°F), tachycardia (often out of proportion to fever, e.g., AFib with RVR), hypertension initially (then hypotension/shock), CHF, agitation, delirium, psychosis, coma, N/V/D, jaundice.
*   **Management (Multi-modal Approach)**:
    1.  **Beta-blockers**: (e.g., Propranolol IV/PO, Esmolol infusion) for sympathetic symptom control (HR, tremors).
    2.  **Antithyroid Drugs (Thionamides)**: Propylthiouracil (PTU - also blocks peripheral T4 to T3 conversion) or Methimazole (MMI). Give PTU first if severe.
    3.  **Iodine Solution**: (e.g., SSKI, Lugol's solution) **Give at least 1 hour AFTER** antithyroid drug administration (to prevent iodine incorporation into new thyroid hormone). Blocks release of T4/T3.
    4.  **Glucocorticoids**: (e.g., IV Hydrocortisone, Dexamethasone) to reduce peripheral T4 to T3 conversion, treat potential relative adrenal insufficiency, and provide immune modulation.
    5.  **Supportive Care**: Cooling measures, IV fluids, oxygen, treat arrhythmias/CHF.
    6.  Identify and treat precipitating event (infection, surgery, trauma, radioactive iodine therapy, DKA).
    7.  Consider therapeutic plasma exchange or thyroidectomy in refractory cases.

### Myxedema Coma
Life-threatening expression of severe, longstanding hypothyroidism.
*   **Clinical Features**: Hypothermia (<35.5°C or 95.9°F), bradycardia, hypotension, hypoventilation (hypercapnic respiratory failure), altered mental status (lethargy, obtundation, coma), hyponatremia, hypoglycemia, non-pitting edema (myxedema).
*   **Management**:
    1.  **IV Thyroid Hormone Replacement**: Levothyroxine (T4) IV loading dose then daily. Liothyronine (T3) IV may be considered (potent, shorter half-life).
    2.  **Glucocorticoids**: (e.g., IV Hydrocortisone) until coexisting adrenal insufficiency (Schmidt's syndrome) is ruled out.
    3.  **Supportive Care**: Mechanical ventilation if needed, passive rewarming (avoid rapid rewarming), IV fluids (cautious, risk of worsening hyponatremia; hypertonic saline if severe Na+ deficit), vasopressors for refractory hypotension, correct hypoglycemia.
    4.  Identify and treat precipitating factors (infection, cold exposure, sedatives).

### Adrenal Crisis (Acute Adrenal Insufficiency)
Life-threatening condition due to insufficient cortisol (glucocorticoid) and often aldosterone (mineralocorticoid).
*   **Causes**: Stress (sepsis, surgery, trauma) in patients with known primary (Addison's) or secondary/tertiary adrenal insufficiency, abrupt withdrawal of chronic steroids, bilateral adrenal hemorrhage/infarction (e.g., Waterhouse-Friderichsen syndrome).
*   **Clinical Features**: Hypotension/shock refractory to fluids and vasopressors, weakness, fatigue, N/V, abdominal pain, fever, altered mental status, hyponatremia, hyperkalemia, hypoglycemia, eosinophilia.
*   **Management**:
    1.  **IV Glucocorticoids**: Hydrocortisone 100 mg IV bolus, then 50-100 mg IV q6-8h or 200mg/24hr continuous infusion. (Dexamethasone can be used if diagnosis is uncertain and ACTH stimulation test is planned as it doesn't interfere with cortisol assay).
    2.  **Mineralocorticoid Replacement**: Fludrocortisone PO once patient is stable and taking PO (if primary AI). IV hydrocortisone has some mineralocorticoid activity.
    3.  **Aggressive IV Fluid Resuscitation**: (e.g., 0.9% NaCl, often with D5% if hypoglycemic).
    4.  **Correct Electrolyte Abnormalities & Hypoglycemia**.
    5.  **Vasopressors**: May be needed initially but should respond better after steroid administration.
    6.  Identify and treat precipitating cause.

### Syndrome of Inappropriate Antidiuretic Hormone (SIADH)
Excess ADH (vasopressin) secretion leading to impaired free water excretion and dilutional hyponatremia with eu-/mild hypervolemia.
*   **Causes**: CNS disorders (stroke, hemorrhage, infection, trauma), malignancies (esp. small cell lung cancer), pulmonary diseases (pneumonia, TB), drugs (SSRIs, carbamazepine, opioids, NSAIDs), post-operative state.
*   **Diagnostic Criteria**: Hyponatremia (serum Na⁺ <135 mEq/L), low serum osmolality (<275 mOsm/kg), inappropriately concentrated urine (urine osmolality >100 mOsm/kg despite low serum osmolality), high urine Na⁺ (>40 mEq/L with normal salt/water intake), euvolemia (clinically), normal renal, adrenal, thyroid function.
*   **Management**:
    1.  **Treat Underlying Cause**.
    2.  **Fluid Restriction**: Primary treatment (e.g., 800-1000 mL/day).
    3.  **Salt Tablets / Loop Diuretics (e.g., Furosemide)**: If symptomatic or severe hyponatremia, to increase free water excretion.
    4.  **Vasopressin Receptor Antagonists ("Vaptans")**: (e.g., Tolvaptan PO, Conivaptan IV) for resistant/severe cases. Promote aquaresis.
    5.  **Hypertonic Saline (3% NaCl)**: For severe symptomatic hyponatremia (e.g., seizures, coma). Correct Na⁺ slowly (e.g., max 8-10 mEq/L in 24h) to avoid osmotic demyelination syndrome (central pontine myelinolysis).

### Diabetes Insipidus (DI)
Deficiency of ADH action, either due to decreased ADH secretion (Central DI) or renal resistance to ADH (Nephrogenic DI), leading to excretion of large volumes of dilute urine and potential hypernatremia.
*   **Clinical Features**: Polyuria (>3-4 L/day, up to 20L/day), polydipsia, hypernatremia (if inadequate water intake), high serum osmolality, dilute urine (low urine osmolality <300 mOsm/kg, low urine specific gravity <1.005).
*   **Causes**:
    *   **Central DI**: Idiopathic, head trauma, pituitary/hypothalamic surgery or tumors, anoxic brain injury, CNS infections.
    *   **Nephrogenic DI**: Genetic, drugs (lithium, demeclocycline), electrolyte disorders (hypercalcemia, hypokalemia), CKD.
*   **Management**:
    1.  **Fluid Replacement**: Match urine output with hypotonic fluids (PO water, IV D5W or 0.45% NaCl) to prevent dehydration/hypernatremia.
    2.  **Desmopressin (DDAVP)**: For Central DI (synthetic ADH analog). Given IV, SubQ, PO, or intranasally.
    3.  **For Nephrogenic DI**: Treat underlying cause/remove offending drug. Thiazide diuretics (paradoxical effect to reduce urine volume), NSAIDs (e.g., Indomethacin - reduce renal prostaglandin synthesis), amiloride (for lithium-induced DI). Salt restriction.
    4.  **Treat Underlying Cause**. Monitor UOP, serum Na⁺, osmolality closely.`,
    categoryType: 'Body System',
    keywordsForImage: 'endocrine glands hormones',
  },
  {
    id: 'gastrointestinal',
    slug: 'gastrointestinal',
    title: 'Gastrointestinal System',
    summary: 'Management of GI bleeding, pancreatitis, liver failure, bowel obstruction, and nutritional support in critically ill patients.',
    content: `## General Overview

The gastrointestinal (GI) system is responsible for the digestion of food, absorption of nutrients, and elimination of waste products. It extends from the mouth to the anus and includes organs like the esophagus, stomach, small intestine, large intestine, liver, gallbladder, and pancreas. In the ICU, GI dysfunction is common and can range from stress ulceration and ileus to life-threatening conditions like GI bleeding, pancreatitis, or liver failure.

## In-Depth ICU Considerations

### Upper GI Bleeding (UGIB)
Bleeding proximal to the ligament of Treitz.
*   **Common Causes**:
    *   **Peptic Ulcer Disease (PUD)**: Duodenal or gastric ulcers (H. pylori, NSAIDs).
    *   **Esophageal Varices**: Due to portal hypertension (often from cirrhosis). High mortality.
    *   **Mallory-Weiss Tears**: Mucosal tears at gastroesophageal junction from forceful vomiting/retching.
    *   **Gastritis/Duodenitis/Esophagitis**: Diffuse inflammation/erosion.
    *   **Arteriovenous Malformations (AVMs)**.
    *   **Tumors**.
*   **Presentation**: Hematemesis (bright red blood or "coffee-ground" emesis), melena (black, tarry stools). Signs of hypovolemia/shock if severe (tachycardia, hypotension, pallor, altered mental status).
*   **Management**:
    1.  **ABCs & Hemodynamic Resuscitation**: IV access (2 large-bore PIVs or central line), O2. Fluid resuscitation (crystalloids, colloids). Blood transfusion if Hgb <7-8 g/dL or active/massive bleeding (target Hgb varies). Correct coagulopathy.
    2.  **Risk Stratification**: (e.g., Glasgow-Blatchford Score, Rockall Score) to predict rebleeding/mortality.
    3.  **Pharmacotherapy**:
        *   **Proton Pump Inhibitors (PPIs)**: IV bolus then continuous infusion (e.g., Pantoprazole 80mg IV bolus, then 8mg/hr) for suspected non-variceal UGIB (especially high-risk ulcers).
        *   **Octreotide (or Somatostatin/Terlipressin)**: For suspected variceal bleeding (reduces splanchnic blood flow and portal pressure).
        *   **Prophylactic Antibiotics**: For patients with cirrhosis and variceal bleeding (e.g., Ceftriaxone) to prevent SBP and improve survival.
    4.  **Endoscopy (EGD)**: Diagnostic and therapeutic (e.g., injection, clipping, cautery, banding of varices). Urgent EGD (within 12-24h, sooner if unstable) for active bleeding.
    5.  **Transjugular Intrahepatic Portosystemic Shunt (TIPS)**: For refractory variceal bleeding.
    6.  **Angiography with Embolization or Surgery**: Rarely needed, for refractory bleeding not controlled by endoscopy.

### Lower GI Bleeding (LGIB)
Bleeding distal to the ligament of Treitz.
*   **Common Causes**:
    *   **Diverticulosis**: Most common cause of massive LGIB. Painless.
    *   **Angiodysplasia (AVMs)**.
    *   **Colitis**: Ischemic, infectious (e.g., C. difficile), inflammatory bowel disease (IBD - Crohn's, Ulcerative Colitis).
    *   **Hemorrhoids, Anal Fissures**: Typically minor bleeding, but can be significant.
    *   **Neoplasms (Polyps, Cancer)**.
    *   **Post-polypectomy bleeding**.
*   **Presentation**: Hematochezia (bright red blood per rectum), maroon stools. Melena possible with slow right-sided colonic bleed. Can present with hypovolemia/shock.
*   **Management**:
    1.  **ABCs & Resuscitation**: Similar to UGIB.
    2.  **Localization**: Often more challenging.
        *   **Colonoscopy**: Primary diagnostic/therapeutic tool after adequate bowel preparation (if patient stable enough).
        *   **Tagged RBC Scan or CT Angiography (CTA)**: May help localize active bleeding if colonoscopy is non-diagnostic/not feasible or bleeding is massive.
    3.  **Endoscopic Therapy**: Clipping, cautery, epinephrine injection.
    4.  **Angiography with Embolization or Surgery (Colectomy)**: For persistent or massive bleeding not controlled by endoscopy.

### Acute Pancreatitis
Inflammation of the pancreas, ranging from mild, self-limiting edema to severe, necrotizing pancreatitis with systemic complications.
*   **Common Causes**: Gallstones (choledocholithiasis), chronic alcohol abuse. Others: hypertriglyceridemia (>1000 mg/dL), drugs (e.g., thiazides, valproic acid, azathioprine), trauma, post-ERCP, autoimmune, infections, scorpion stings, idiopathic.
*   **Presentation**: Acute onset of severe, persistent epigastric pain, often radiating to the back. Nausea/vomiting. Fever, tachycardia. Abdominal tenderness/distension. Cullen's sign (periumbilical ecchymosis), Grey Turner's sign (flank ecchymosis) in severe hemorrhagic pancreatitis (rare, late signs).
*   **Diagnosis**: Requires 2 of 3:
    1.  Characteristic abdominal pain.
    2.  Serum Amylase and/or Lipase >3 times Upper Limit of Normal (ULN) (Lipase is more specific).
    3.  Characteristic findings on imaging (CT, MRI, or Ultrasound).
*   **Severity Assessment**: Ranson's criteria, APACHE II, BISAP score, CT Severity Index (Balthazar score). Predicts risk of complications/mortality.
*   **Management**:
    1.  **Fluid Resuscitation**: **Aggressive IV fluid resuscitation** is crucial, especially in the first 24-48 hours (e.g., 250-500 mL/hr of isotonic crystalloid like Lactated Ringer's initially, then titrated to UOP, HR, BP, Hct). Goal-directed fluid therapy.
    2.  **Pain Control**: IV opioids (e.g., Hydromorphone, Fentanyl).
    3.  **Nutritional Support**:
        *   Mild pancreatitis: NPO initially, advance diet as tolerated when pain improves and N/V resolves (typically low-fat diet).
        *   Severe pancreatitis: Enteral nutrition (EN) preferred over parenteral nutrition (PN) if NPO >5-7 days anticipated or signs of severe disease. Nasojejunal tube preferred over nasogastric to minimize pancreatic stimulation. Start early if possible.
    4.  **Electrolyte Monitoring/Correction**: Especially calcium (hypocalcemia common due to saponification).
    5.  **Identify and Treat Cause**: E.g., ERCP with sphincterotomy for biliary pancreatitis with cholangitis or biliary obstruction.
    6.  **Monitor for and Manage Complications**:
        *   **Local**: Pancreatic necrosis (sterile vs. infected - CT-guided FNA if infection suspected), pseudocyst, abscess, splenic/portal vein thrombosis.
        *   **Systemic**: SIRS, ARDS, AKI, shock, pleural effusions, DIC, hyperglycemia, hypocalcemia.
    7.  **Antibiotics**: Generally **not recommended prophylactically** for sterile necrosis. Use only if infected necrosis is suspected/confirmed (e.g., Carbapenems, Metronidazole + Fluoroquinolone).

### Acute Liver Failure (ALF)
Rapid deterioration of liver function (defined by coagulopathy INR ≥1.5 and any degree of hepatic encephalopathy) in a patient without pre-existing cirrhosis, with an illness duration of <26 weeks.
*   **Common Causes**: Acetaminophen overdose (most common in US/UK), viral hepatitis (A, B, E - rarely C), drug-induced liver injury (DILI - idiosyncratic reactions to various drugs like antibiotics, NSAIDs, antiepileptics, herbal supplements), autoimmune hepatitis, Wilson's disease, ischemic hepatopathy ("shock liver"), Budd-Chiari syndrome, HELLP syndrome, mushroom poisoning (Amanita phalloides).
*   **Management**:
    1.  **Identify and Treat Specific Cause**: E.g., N-acetylcysteine (NAC) for acetaminophen toxicity (give empirically if suspected, regardless of time since ingestion or levels if ALF present). Antivirals for viral hepatitis if indicated.
    2.  **Supportive Care in ICU**: Critical.
        *   **Hepatic Encephalopathy**: Lactulose (PO/NG/rectal), Rifaximin. Avoid sedatives that are hepatically metabolized. Protect airway if high grade encephalopathy.
        *   **Coagulopathy**: Monitor INR, platelets. Give Vitamin K (often ineffective). Transfuse FFP/platelets only for active bleeding or prior to invasive procedures (not for INR correction alone). Recombinant Factor VIIa in select cases.
        *   **Cerebral Edema/Increased ICP**: Common cause of death. HOB elevation, mannitol, hypertonic saline, ICP monitoring in select high-risk patients (Grade III/IV encephalopathy).
        *   **Hypoglycemia**: Frequent glucose monitoring, IV dextrose.
        *   **Renal Dysfunction (Hepatorenal Syndrome)**: Common. May require RRT.
        *   **Cardiovascular Support**: Manage hypotension with fluids/vasopressors.
        *   **Infection Prophylaxis/Treatment**: High risk of bacterial/fungal infections.
    3.  **Nutritional Support**: Provide adequate calories/protein.
    4.  **Referral to Liver Transplant Center**: Early referral is crucial. Liver transplantation is the definitive treatment for many ALF patients not improving with medical management. Criteria like King's College Criteria or MELD score help assess prognosis and need for transplant.

### Bowel Obstruction
*   **Small Bowel Obstruction (SBO)**: Most common causes: Adhesions (from prior surgery), hernias, tumors. Presentation: Colicky abdominal pain, N/V (bilious initially, then feculent), abdominal distension, obstipation (lack of flatus/stool). High-pitched bowel sounds early, then hypoactive.
*   **Large Bowel Obstruction (LBO)**: Most common causes: Tumors (colorectal cancer), volvulus (sigmoid, cecal), diverticular stricture. Presentation: More gradual onset of pain, significant distension, constipation/obstipation.
*   **Management**:
    1.  **NPO, IV Fluids, Electrolyte Correction**.
    2.  **Nasogastric (NG) Decompression**: For SBO (relieves distension, vomiting). May be therapeutic for partial SBO.
    3.  **Pain Control**.
    4.  **Surgical Consultation**: Urgent if signs of ischemia/strangulation (fever, tachycardia, leukocytosis, peritonitis, continuous severe pain) or closed-loop obstruction. Otherwise, for complete SBO/LBO or failure of conservative management for partial SBO.

### ICU Nutritional Support
*   **Goal**: Provide adequate calories and protein to prevent malnutrition, support wound healing, maintain immune function, and preserve lean body mass.
*   **Assessment**: Identify patients at nutritional risk (e.g., NRS-2002, NUTRIC score).
*   **Enteral Nutrition (EN)**: Preferred route if gut is functional ("if the gut works, use it").
    *   Start early (within 24-48h of ICU admission, if hemodynamically stable).
    *   Formulas: Standard polymeric, high-protein, fiber-containing, disease-specific (e.g., renal, diabetic, pulmonary).
    *   Access: Nasogastric (NG), nasoduodenal (ND), nasojejunal (NJ) tubes; gastrostomy (PEG), jejunostomy (PEJ) for long-term.
    *   Delivery: Continuous vs. intermittent/bolus. Start at low rate, advance as tolerated.
    *   Monitor for tolerance: Gastric residual volumes (GRVs - controversial, high GRVs alone not reason to stop EN unless other signs of intolerance), abdominal distension, N/V, diarrhea, constipation. Elevate HOB 30-45° to reduce aspiration risk.
*   **Parenteral Nutrition (PN/TPN)**: Used when EN is contraindicated (e.g., prolonged ileus, bowel obstruction, severe shock, high-output fistula) or EN is insufficient to meet needs after 7-10 days.
    *   Administered via central line (PPN via peripheral line is short-term, low concentration only).
    *   Components: Dextrose, amino acids, lipids, electrolytes, vitamins, trace elements.
    *   Risks: CLABSI, hyperglycemia, hypoglycemia (if abruptly stopped), electrolyte imbalances, liver dysfunction (cholestasis, steatosis - "PNALD"), refeeding syndrome, hypertriglyceridemia.
    *   Monitor labs closely: Glucose, LFTs, triglycerides, electrolytes.

### Refeeding Syndrome
Metabolic derangements that occur when nutrition is reintroduced after a period of significant starvation or malnutrition.
*   **Pathophysiology**: Carbohydrate intake -> insulin release -> rapid intracellular shift of phosphate, potassium, and magnesium. Thiamine deficiency is also common.
*   **Key Feature**: **Hypophosphatemia**. Also hypokalemia, hypomagnesemia. Fluid retention can occur.
*   **Clinical Consequences**: Can be severe/fatal. Cardiac arrhythmias, heart failure, respiratory failure (diaphragmatic weakness), seizures, rhabdomyolysis, coma, death.
*   **Prevention/Management**:
    *   Identify high-risk patients (e.g., BMI <16, unintentional weight loss >15% in 3-6mo, little/no intake >10 days, history of alcohol abuse, low baseline K/PO4/Mg).
    *   Correct electrolyte abnormalities *before* starting nutrition.
    *   Administer thiamine (e.g., 100-250mg IV/IM daily for 3-5 days) *before* starting carbohydrates.
    *   Start nutrition slowly (e.g., 10-15 kcal/kg/day or 25-50% of goal initially for high risk).
    *   Aggressively monitor and replete electrolytes (especially phosphate, potassium, magnesium) daily during refeeding.
    *   Monitor fluid balance carefully.`,
    categoryType: 'Body System',
    keywordsForImage: 'digestive system anatomy',
  },
  {
    id: 'hematologic',
    slug: 'hematologic',
    title: 'Hematologic System',
    summary: 'Focus on common hematologic issues in the ICU, including anemia, thrombocytopenia, coagulopathies, DIC, and transfusion reactions.',
    content: `## General Overview

The hematologic system comprises blood, blood cells (red blood cells, white blood cells, platelets), blood proteins (e.g., clotting factors, albumin), and the organs responsible for their production and regulation (bone marrow, spleen, lymph nodes, liver). In critically ill patients, derangements of this system are common and can significantly impact oxygen delivery, hemostasis, and immune function.

## In-Depth ICU Considerations

### Anemia in the ICU
A reduction in hemoglobin (Hgb) concentration or red blood cell (RBC) count. Very common in ICU patients.
*   **Causes**:
    *   **Blood Loss**: Overt (e.g., GI bleed, trauma, surgery) or occult.
    *   **Frequent Phlebotomy**: Iatrogenic blood loss from diagnostic testing.
    *   **Inflammation (Anemia of Inflammation/Critical Illness)**: Cytokine-mediated impaired erythropoiesis, altered iron metabolism, shortened RBC survival.
    *   **Nutritional Deficiencies**: Iron, Vitamin B12, Folate (less common as acute cause in ICU but can be underlying).
    *   **Hemolysis**: Destruction of RBCs (e.g., autoimmune, drug-induced, mechanical valve, DIC, TTP).
    *   **Bone Marrow Suppression**: Sepsis, medications (e.g., chemotherapy, certain antibiotics), renal failure (↓erythropoietin).
*   **Transfusion Thresholds**: Generally restrictive.
    *   **Restrictive Strategy**: Transfuse RBCs if Hgb <7 g/dL in hemodynamically stable patients without active bleeding or ACS.
    *   **Liberal Strategy (Hgb <9-10 g/dL)**: May be considered in specific situations like acute coronary syndrome with ongoing ischemia, symptomatic anemia, or septic shock with evidence of ongoing hypoperfusion despite other measures (controversial).
*   **Management**:
    *   Treat underlying cause of anemia.
    *   Minimize phlebotomy (use small volume tubes, batch lab draws).
    *   Assess and replete iron, B12, folate if deficient.
    *   Erythropoiesis-stimulating agents (ESAs) generally not recommended for ICU anemia unless specific indication (e.g., CKD).

### Thrombocytopenia in the ICU
Platelet count <150,000/μL. Also very common.
*   **Causes (often multifactorial)**:
    *   **Sepsis**: Most common ICU cause (due to consumption, bone marrow suppression by cytokines, endothelial damage).
    *   **Medications**: Heparin (Heparin-Induced Thrombocytopenia - HIT), antibiotics (e.g., vancomycin, beta-lactams), H2 blockers, diuretics, valproic acid, chemotherapy.
    *   **Dilutional Thrombocytopenia**: Massive transfusion of RBCs and crystalloids without platelet replacement.
    *   **Immune Thrombocytopenic Purpura (ITP)**.
    *   **Thrombotic Microangiopathies (TMA)**: e.g., Thrombotic Thrombocytopenic Purpura (TTP), Hemolytic Uremic Syndrome (HUS), DIC.
    *   **Disseminated Intravascular Coagulation (DIC)**.
    *   **Liver Disease with Portal Hypertension**: Splenic sequestration of platelets, decreased thrombopoietin production.
    *   **Bone Marrow Disorders**: Aplasia, leukemia, myelodysplasia.
    *   **Post-transfusion purpura, viral infections (HIV, HCV, CMV, EBV)**.
*   **Management**:
    *   **Treat Underlying Cause**.
    *   **Platelet Transfusion**:
        *   Generally for active bleeding with thrombocytopenia.
        *   Prophylactically if platelet count <10,000-20,000/μL (to prevent spontaneous hemorrhage).
        *   Higher threshold (e.g., <50,000/μL) if invasive procedure planned or high bleeding risk (e.g., major surgery, CNS bleed).
        *   **Not indicated** for HIT (unless life-threatening bleed, increases thrombosis risk) or TTP (can worsen condition).
    *   **Investigate for HIT**: If patient on heparin (UFH or LMWH) and platelet count drops >50% from baseline or new thrombosis occurs (typically 5-14 days after heparin initiation, but can be earlier if prior exposure).
        *   Calculate 4Ts score (Thrombocytopenia, Timing, Thrombosis, oTher causes).
        *   Stop all heparin products immediately if HIT suspected.
        *   Send HIT antibody testing (e.g., ELISA for PF4/heparin Ab) and functional assay (e.g., Serotonin Release Assay - SRA).
        *   Start alternative non-heparin anticoagulant (e.g., Argatroban, Bivalirudin, Fondaparinux - check renal function).

### Coagulopathies
Disorders affecting the blood's ability to clot, leading to either bleeding or thrombosis.
*   **Common Coagulation Tests**:
    *   **Prothrombin Time (PT) / International Normalized Ratio (INR)**: Measures extrinsic and common pathways (Factors VII, X, V, II (prothrombin), I (fibrinogen)). Prolonged in liver disease, Vitamin K deficiency, warfarin use, DIC.
    *   **Activated Partial Thromboplastin Time (aPTT)**: Measures intrinsic and common pathways (Factors XII, XI, IX, VIII, X, V, II, I). Prolonged in heparin use, hemophilia (A-Factor VIII def; B-Factor IX def), von Willebrand disease (severe), lupus anticoagulant, DIC.
    *   **Fibrinogen Level**: Measures amount of fibrinogen available for clot formation. Low in DIC, massive hemorrhage, severe liver disease.
    *   **D-dimer**: Fibrin degradation product. Elevated in DIC, DVT/PE, recent surgery/trauma, sepsis (non-specific).
    *   **Thromboelastography (TEG) / Rotational Thromboelastometry (ROTEM)**: Viscoelastic tests providing a global assessment of clot formation, strength, and lysis in whole blood. Useful for guiding goal-directed component transfusion in trauma/major bleeding.
*   **Management of Bleeding with Coagulopathy**:
    *   **Fresh Frozen Plasma (FFP)**: Replaces multiple clotting factors. Used for correction of coagulopathy (e.g., INR >1.7-2.0) with active bleeding, or prior to invasive procedure. Warfarin reversal (if PCC unavailable).
    *   **Cryoprecipitate**: Rich in fibrinogen, Factor VIII, Factor XIII, von Willebrand factor (vWF). Used for hypofibrinogenemia (<100-150 mg/dL) with bleeding, uremic bleeding, Factor XIII deficiency.
    *   **Prothrombin Complex Concentrates (PCCs)**: Contain Vitamin K-dependent factors (II, VII, IX, X). Rapid warfarin reversal (preferred over FFP for this). Some contain Protein C & S.
    *   **Vitamin K (Phytonadione)**: For warfarin reversal (slower onset - IV, PO) or Vitamin K deficiency (e.g., malnutrition, malabsorption, prolonged antibiotics).
    *   **Specific Factor Concentrates**: For hemophilia (Factor VIII or IX concentrates), von Willebrand disease (vWF-containing concentrates).
    *   **Antifibrinolytics (e.g., Tranexamic Acid - TXA, Aminocaproic Acid)**: Inhibit fibrinolysis. Used in trauma, major surgery, some types of bleeding.
    *   **Desmopressin (DDAVP)**: For uremic platelet dysfunction or mild Type 1 von Willebrand disease (releases stored vWF & Factor VIII).

### Disseminated Intravascular Coagulation (DIC)
A complex, life-threatening syndrome characterized by systemic activation of coagulation leading to widespread microvascular thrombosis and subsequent consumption of clotting factors and platelets, resulting in simultaneous bleeding and thrombosis. **Always secondary to an underlying disorder.**
*   **Common Causes**: Sepsis (most common), severe trauma (especially head injury, crush injury), malignancy (APL, adenocarcinomas), obstetric complications (amniotic fluid embolism, abruption), severe burns, pancreatitis, snakebites, ARDS, severe liver failure, transfusion reactions.
*   **Clinical Features**: Highly variable. Can be acute and fulminant or chronic and insidious.
    *   **Bleeding**: Oozing from IV sites/mucosa, petechiae, purpura, ecchymoses, hematuria, GI bleed, ICH.
    *   **Thrombosis**: Organ dysfunction (renal failure, ARDS, hepatic dysfunction, CNS changes), DVT/PE, digital ischemia/gangrene.
*   **Lab Findings**: **No single test is diagnostic.** Combination of:
    *   Thrombocytopenia (falling trend is key).
    *   Prolonged PT/INR.
    *   Prolonged aPTT.
    *   Low Fibrinogen (falling trend is key).
    *   Elevated D-dimer/Fibrin Degradation Products (FDPs) (highly sensitive but not specific).
    *   Schistocytes (fragmented RBCs) on peripheral smear (microangiopathic hemolytic anemia).
    *   Low levels of coagulation inhibitors (e.g., Antithrombin, Protein C).
*   **Management**:
    1.  **Treat Underlying Cause**: CRITICAL and most important step.
    2.  **Supportive Care (Managing the Coagulopathy)**: Guided by clinical picture (bleeding vs. thrombosis) and lab values.
        *   **If Bleeding Dominant**:
            *   Platelets: Transfuse to maintain count >20,000-50,000/μL if active bleeding.
            *   FFP: To replete clotting factors if INR/aPTT significantly prolonged and bleeding.
            *   Cryoprecipitate: If fibrinogen <100-150 mg/dL and bleeding.
        *   **If Thrombosis Dominant (and no major active bleeding)**: Therapeutic anticoagulation (e.g., heparin infusion) may be considered cautiously, but this is controversial and highly individualized.
    *   Avoid unnecessary invasive procedures. Monitor for end-organ damage.

### Transfusion Reactions

| Reaction Type             | Onset/Key Symptoms                                                                                    | Pathophysiology                                     | Management                                                                                                |
|---------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Acute Hemolytic Transfusion Reaction (AHTR)** | Immediate (minutes to <24h). Fever, chills, rigors, hypotension, tachycardia, dyspnea, chest/back/flank pain, hemoglobinuria (red/dark urine), oliguria/anuria, DIC, shock. | ABO incompatibility (most common, often clerical error) -> intravascular hemolysis by recipient IgM/IgG antibodies. | **STOP transfusion immediately!** Maintain IV access with NS. Notify provider/blood bank STAT. Recheck patient/unit ID. Send blood/urine samples (patient & unit bag) to lab/blood bank. Supportive care (BP, UOP, manage DIC). Diuresis. |
| **Febrile Non-Hemolytic Transfusion Reaction (FNHTR)** | Within 1-6 hours. Fever (≥1°C or 2°F rise from baseline), chills, rigors, headache, malaise. Common.                             | Cytokines released from donor WBCs during storage, or recipient antibodies to donor WBC antigens. | **STOP transfusion.** Rule out AHTR and sepsis. Antipyretics (acetaminophen). May restart slowly if mild & no other signs of severe reaction. Leukoreduced products for future transfusions. |
| **Allergic Reaction (Mild/Urticarial)** | Within minutes to hours. Urticaria (hives), pruritus (itching), flushing. No respiratory or hemodynamic compromise.                                  | Recipient IgE antibodies to donor plasma proteins.                | **STOP transfusion.** Administer antihistamines (e.g., diphenhydramine IV/PO). If symptoms resolve quickly, may restart transfusion slowly with close observation. |
| **Anaphylactic Reaction (Severe Allergic)** | Immediate (seconds to minutes). Severe hypotension, bronchospasm/laryngeal edema (stridor, dyspnea), angioedema, widespread urticaria, shock, loss of consciousness. Rare, life-threatening. | IgA-deficient recipient with anti-IgA antibodies reacting to IgA in donor plasma (most common cause). Other allergens. | **STOP transfusion immediately!** Epinephrine (IM/IV), antihistamines, corticosteroids, aggressive airway/hemodynamic support. Washed RBCs/platelets or IgA-deficient products for future. |
| **Transfusion-Associated Circulatory Overload (TACO)** | Within 6-12 hours (can be during or after). Dyspnea, orthopnea, cough, tachycardia, hypertension, JVD, crackles/rales, peripheral edema, positive fluid balance. Evidence of pulmonary edema on CXR. | Fluid volume overload, especially in patients with cardiac or renal dysfunction, or too rapid infusion. | **STOP or significantly slow transfusion.** Administer diuretics (e.g., furosemide IV). Provide O2, sit patient upright. Supportive care. Prevent with slower infusion rates, smaller volumes, pre-transfusion diuretics if indicated. |
| **Transfusion-Related Acute Lung Injury (TRALI)** | Within 6 hours (often 1-2h). Acute dyspnea, severe hypoxemia (PaO2/FiO2 <300 or SpO2 <90% on RA), bilateral pulmonary infiltrates on CXR (non-cardiogenic pulmonary edema). Often with fever, hypotension, cyanosis. | Donor antibodies (anti-HLA or anti-HNA) reacting with recipient leukocytes, leading to neutrophil activation and pulmonary endothelial damage/capillary leak. "Two-hit" model may involve patient factors. | **STOP transfusion immediately!** Aggressive respiratory support (O2, mechanical ventilation with lung protective strategy if needed). Supportive care for hypotension. Notify blood bank (to identify and defer implicated donors). Diuretics are NOT helpful and may be harmful. |
| **Bacterial Contamination (Septic Transfusion Reaction)** | Rapid onset (minutes to hours). High fever, severe chills/rigors, profound hypotension/shock, N/V/D, abdominal cramps.              | Bacterial contamination of blood product (platelets stored at room temp are highest risk; RBCs - Yersinia, Pseudomonas). Endotoxins. | **STOP transfusion immediately!** Obtain blood cultures (patient & product bag). Administer broad-spectrum IV antibiotics STAT. Aggressive hemodynamic support for septic shock. Notify blood bank. |
| **Delayed Hemolytic Transfusion Reaction (DHTR)**     | 3-30 days post-transfusion (typically 7-14 days). Unexplained fall in Hgb, mild jaundice, low-grade fever, malaise.                     | Anamnestic response to RBC antigen to which patient was previously sensitized (prior transfusion/pregnancy). Alloantibodies (often Kidd, Duffy, Rh (E, c), Kell) -> extravascular hemolysis. | Usually mild, often subclinical. Supportive care. Notify blood bank for antibody identification for future crossmatching (direct antiglobulin test - DAT - usually positive).      |
| **Transfusion-Associated Graft-versus-Host Disease (TA-GVHD)** | 8-10 days (up to 30 days) post-transfusion. Fever, skin rash, diarrhea, liver dysfunction, pancytopenia. Rare but highly fatal. | Viable donor lymphocytes in immunocompromised recipient (or HLA-similar donor) attack recipient tissues. | Prevention is key: **Irradiation** of cellular blood products for at-risk patients (immunocompromised, directed donations from relatives). Treatment largely ineffective (immunosuppression, steroids). |

**Transfusion Administration Procedure**:
*   Verify order, patient consent.
*   Two RN check at bedside: Patient ID (name, DOB, MRN) against MAR and blood product label; blood product type, unit number, ABO/Rh compatibility, expiration date/time.
*   Use appropriate filter tubing (standard 170-260 micron filter for RBCs/plasma/cryo; specific platelet filter if used).
*   Start infusion slowly (e.g., 1-2 mL/min or 60-120 mL/hr for first 15 mins).
*   Stay with patient for first 15 mins, monitor vital signs frequently (pre-transfusion, at 15 min, then per policy, and post-transfusion). Assess for any signs of reaction.
*   Complete transfusion within 4 hours from removal from blood bank for RBCs/plasma. Platelets often infused faster (e.g., over 30-60 mins).`,
    categoryType: 'Body System',
    keywordsForImage: 'blood cells hematology',
  },
  {
    id: 'immune',
    slug: 'immune',
    title: 'Immune System & Sepsis',
    summary: 'Overview of the immune response, sepsis pathophysiology, recognition (SIRS, qSOFA, SOFA), and management bundles in critical care.',
    content: `## General Overview

The immune system is a complex network of cells, tissues, and organs that work together to defend the body against pathogens (like bacteria, viruses, fungi, parasites) and abnormal cells (like cancer). It involves innate (non-specific, rapid first-line defense) and adaptive (specific, memory-based, slower to develop) responses. In critical illness, particularly sepsis, dysregulation of the immune system plays a central role in pathogenesis and outcomes.

## In-Depth ICU Considerations

### Sepsis and Septic Shock
Sepsis is a life-threatening organ dysfunction caused by a dysregulated host response to infection. Septic shock is a subset of sepsis with profound circulatory, cellular, and metabolic abnormalities associated with a greater risk of mortality than sepsis alone.

**Definitions (Sepsis-3 Criteria, 2016)**:
*   **Sepsis**: Suspected or documented infection AND an acute increase of ≥2 points in the Sequential [Sepsis-related] Organ Failure Assessment (SOFA) score. This reflects organ dysfunction.
*   **Septic Shock**: Sepsis AND persisting hypotension requiring vasopressor therapy to maintain MAP ≥65 mmHg AND serum lactate level >2 mmol/L (18 mg/dL) despite adequate fluid resuscitation.

**Screening/Recognition Tools**:
*   **qSOFA (quick SOFA)**: For use outside ICU to identify patients with suspected infection who are at higher risk of poor outcomes. Assigns 1 point for each:
    *   Respiratory rate ≥22/min
    *   Altered mentation (Glasgow Coma Scale <15)
    *   Systolic blood pressure ≤100 mmHg
    *   A score of ≥2 suggests higher risk and prompts further investigation for organ dysfunction (e.g., SOFA score).
*   **SOFA Score**: Assesses dysfunction in six organ systems (Respiration, Coagulation, Liver, Cardiovascular, CNS, Renal).
*   **SIRS (Systemic Inflammatory Response Syndrome)**: Older criteria, less specific for sepsis than SOFA, but still alerts to potential systemic inflammation. Defined by ≥2 of:
    *   Temperature >38°C (100.4°F) or <36°C (96.8°F)
    *   Heart rate >90 bpm
    *   Respiratory rate >20/min or PaCO2 <32 mmHg
    *   WBC >12,000/mm³, <4,000/mm³, or >10% immature band forms.

### Pathophysiology of Sepsis (Simplified)
1.  **Infection & Pathogen Recognition**: Invading pathogen (PAMPs - Pathogen-Associated Molecular Patterns) and damaged host cells (DAMPs - Damage-Associated Molecular Patterns) are recognized by immune cells.
2.  **Inflammatory Cascade**: Activation of innate immune cells (macrophages, neutrophils) leads to massive release of pro-inflammatory cytokines (e.g., TNF-α, IL-1, IL-6) and anti-inflammatory mediators.
3.  **Endothelial Dysfunction & Microcirculatory Failure**: Inflammation causes widespread endothelial activation and damage, leading to:
    *   Increased vascular permeability -> fluid leakage into interstitium (third spacing), hypovolemia.
    *   Vasodilation -> decreased systemic vascular resistance (SVR), hypotension.
    *   Procoagulant state -> microthrombi formation in small vessels (contributing to DIC and impaired organ perfusion).
    *   Impaired tissue oxygen extraction.
4.  **Organ Dysfunction**: Hypoperfusion, cellular hypoxia, mitochondrial dysfunction, and direct cellular damage lead to failure of multiple organs (e.g., lungs - ARDS; kidneys - AKI; heart - septic cardiomyopathy; brain - septic encephalopathy; liver - dysfunction; coagulation - DIC).
5.  **Immune Dysregulation & Immunosuppression**: Prolonged or severe sepsis can lead to a state of "immunoparalysis," characterized by impaired adaptive immunity, increasing susceptibility to secondary infections.

### Surviving Sepsis Campaign Bundles (Key Elements - Refer to latest guidelines for full details)

#### Hour-1 Bundle (Elements to be *initiated* as soon as possible and ideally completed within 1 hour of sepsis recognition):
1.  **Measure Lactate Level**: Remeasure within 2-4 hours if initial lactate is elevated (>2 mmol/L) to guide resuscitation.
2.  **Obtain Blood Cultures BEFORE Administering Antibiotics**: (If doing so does not cause significant delay (>45 min) in antibiotic administration). Obtain other cultures as indicated (urine, sputum, wound).
3.  **Administer Broad-Spectrum Antibiotics**: Administer IV antibiotics as soon as possible, ideally within 1 hour. Choice based on suspected source, local resistance patterns, patient comorbidities, and severity of illness.
4.  **Begin Rapid Administration of 30 mL/kg Crystalloid for Hypotension or Lactate ≥4 mmol/L**: Complete this initial fluid bolus within 3 hours. Use balanced crystalloids (e.g., Lactated Ringer's) or Normal Saline.
5.  **Apply Vasopressors if Hypotensive During or After Fluid Resuscitation to Maintain MAP ≥65 mmHg**: Norepinephrine is the first-line vasopressor.

#### Ongoing Management (Post Hour-1 Bundle)
*   **Source Control**: Identify and control/eliminate the source of infection as rapidly as possible (e.g., drain abscess, remove infected line/device, debride infected tissue, surgical intervention).
*   **Fluid Therapy**: After initial bolus, further fluid administration should be guided by careful assessment of fluid responsiveness using dynamic measures (e.g., passive leg raise, stroke volume variation, pulse pressure variation, echocardiography) or clinical signs of perfusion. Avoid indiscriminate fluid overload.
*   **Vasopressors**:
    *   **Norepinephrine**: First-line.
    *   **Vasopressin**: May be added to norepinephrine (up to 0.03 units/min) to increase MAP or decrease norepinephrine dosage. Do not use as a single agent initially.
    *   **Epinephrine**: May be added if MAP goals are not met with norepinephrine and vasopressin.
    *   **Angiotensin II**: Can be considered for refractory shock.
    *   **Dopamine**: Alternative to norepinephrine only in highly selected patients (e.g., absolute or relative bradycardia with low risk of tachyarrhythmias). Generally not recommended.
    *   **Phenylephrine**: Not recommended in septic shock except in specific circumstances (e.g., severe tachyarrhythmias with norepinephrine, known high CO with persistent hypotension).
*   **Inotropes**: Consider Dobutamine if ongoing hypoperfusion despite adequate fluid volume and vasopressor therapy, or evidence of myocardial dysfunction (e.g., low cardiac output, high CVP/PCWP, signs of cardiogenic shock).
*   **Corticosteroids**: Consider IV hydrocortisone (e.g., 200 mg/day, given as 50mg q6h or continuous infusion) for adult patients with septic shock and ongoing hemodynamic instability (i.e., requiring escalating vasopressor doses) despite adequate fluid and vasopressor therapy. (Benefit is debated, and guidelines vary; usually for refractory shock).
*   **Ventilation for ARDS**: Use lung protective strategies (low tidal volume, Pplat <30 cmH2O).
*   **Glucose Control**: Target blood glucose ≤180 mg/dL. IV insulin preferred for persistent hyperglycemia.
*   **Renal Replacement Therapy**: If AKI with indications.
*   **DVT Prophylaxis**: Pharmacologic (LMWH/UFH unless contraindicated) and/or mechanical.
*   **Stress Ulcer Prophylaxis**: PPIs or H2 blockers for patients with risk factors for GI bleeding.
*   **Nutrition**: Early enteral nutrition (within 24-48 hours) if tolerated and no contraindications.
*   **Goals of Care Discussion**: Discuss prognosis and goals of care with patients and families.

### Anaphylaxis
A severe, potentially life-threatening, systemic hypersensitivity reaction characterized by rapid onset of airway, breathing, and/or circulatory problems usually associated with skin and mucosal changes.
*   **Common Triggers**: Foods (peanuts, tree nuts, shellfish, milk, eggs), medications (esp. antibiotics like penicillins/cephalosporins, NSAIDs, opiates, radiocontrast media), insect stings (bees, wasps, ants), latex.
*   **Clinical Features (Rapid Onset, often within minutes to 2 hours)**:
    *   **Skin/Mucosal**: Urticaria (hives), angioedema (swelling of lips, tongue, face, periorbital area), flushing, pruritus. (Most common, but can be absent in ~10-20% of cases, esp. if rapid/severe).
    *   **Respiratory**: Dyspnea, wheeze, bronchospasm, stridor, cough, chest tightness, hoarseness, nasal congestion, hypoxemia.
    *   **Cardiovascular**: Hypotension, tachycardia (or bradycardia in some cases), dizziness, syncope, shock, chest pain.
    *   **Gastrointestinal**: Nausea, vomiting, diarrhea, abdominal pain/cramping.
    *   **Neurological**: Sense of impending doom, anxiety, confusion, headache, loss of consciousness.
*   **Management**:
    1.  **Epinephrine (Adrenaline) IM**: **First-line and most critical treatment.** 0.3-0.5 mg (0.3-0.5 mL of 1:1000 solution) IM into anterolateral thigh. Repeat q5-15 min as needed if symptoms persist or recur.
    2.  **Airway Management**: Call for help. Supplemental O2 (high flow). Prepare for early intubation if signs of angioedema, stridor, or severe respiratory distress. Cricothyrotomy if unable to intubate.
    3.  **Circulatory Support**: Place patient supine with legs elevated (if tolerated and no vomiting). IV access (large bore). Aggressive IV fluid resuscitation (crystalloids) for hypotension. IV Epinephrine infusion for refractory hypotension/shock not responding to IM epi and fluids.
    4.  **Adjunctive Therapies (Administer AFTER Epinephrine)**:
        *   **Antihistamines**: H1 blockers (e.g., Diphenhydramine 25-50mg IV/IM/PO), H2 blockers (e.g., Ranitidine 50mg IV or Famotidine 20mg IV). Help with skin symptoms but do not relieve airway obstruction or hypotension.
        *   **Corticosteroids**: (e.g., Methylprednisolone 1-2mg/kg IV or Prednisone PO) to potentially prevent prolonged or biphasic reactions (onset of action 4-6 hours).
        *   **Bronchodilators**: (e.g., Albuterol nebulized) for persistent bronchospasm despite epinephrine.
    5.  **Observation**: Observe for at least 4-8 hours (longer for severe reactions or those requiring multiple doses of epinephrine due to risk of biphasic reaction - recurrence of symptoms 1-72 hours later without re-exposure).
    6.  **Discharge Planning**: Prescribe epinephrine auto-injector (at least 2), educate on use and avoidance of known triggers, provide action plan, refer to allergist/immunologist.

### Neutropenic Fever
Defined as a single oral temperature ≥38.3°C (101°F) or a temperature ≥38.0°C (100.4°F) sustained for ≥1 hour in a patient with neutropenia (Absolute Neutrophil Count (ANC) <500/mm³ or ANC <1000/mm³ and predicted to fall to <500/mm³ within 48 hours). **A medical emergency.**
*   **Causes**: Most often due to bacterial infection (gram-positive cocci like Staph/Strep, or gram-negative bacilli like Pseudomonas, E. coli, Klebsiella). Fungal infections can occur with prolonged neutropenia. Viral infections also possible. Source often unidentified.
*   **Management**:
    1.  **Prompt Empiric Broad-Spectrum Antibiotics**: Administer within 1 hour of presentation after blood cultures obtained (if no significant delay).
        *   Initial monotherapy for high-risk patients: Antipseudomonal beta-lactam (e.g., Cefepime, Piperacillin-Tazobactam, Meropenem, Imipenem-Cilastatin).
        *   Add Vancomycin (or other gram-positive coverage like Linezolid, Daptomycin) if: hemodynamic instability/sepsis, suspected catheter-related infection, skin/soft tissue infection, pneumonia, or known colonization with MRSA.
    2.  **Blood Cultures & Other Cultures**: Obtain at least two sets of blood cultures (one from CVC if present, one peripheral) BEFORE antibiotics if no significant delay. Culture other suspected sites (urine, sputum, wounds).
    3.  **Risk Stratification**: (e.g., MASCC score - Multinational Association for Supportive Care in Cancer) to determine inpatient (high-risk) vs. outpatient (low-risk) management. Most ICU patients will be high-risk.
    4.  **Supportive Care**: IV fluids, antipyretics, manage complications.
    5.  **Granulocyte Colony-Stimulating Factors (G-CSF, e.g., Filgrastim, Pegfilgrastim)**: Therapeutic use controversial, generally not recommended for established neutropenic fever but may be considered in specific high-risk situations (e.g., profound neutropenia, sepsis syndrome, invasive fungal infection) or for prophylaxis.`,
    categoryType: 'Body System',
    keywordsForImage: 'immune cells antibody virus',
  },
  {
    id: 'musculoskeletal',
    slug: 'musculoskeletal',
    title: 'Musculoskeletal System',
    summary: 'Focuses on rhabdomyolysis, compartment syndrome, and mobility/VTE prophylaxis in critically ill patients.',
    content: `## General Overview

The musculoskeletal system, comprising bones, joints, muscles, tendons, and ligaments, provides structural support, facilitates movement, protects internal organs, and stores minerals. While often not the primary reason for ICU admission, musculoskeletal issues can be significant complications of critical illness or trauma, impacting recovery, mobility, and quality of life.

## In-Depth ICU Considerations

### Rhabdomyolysis
A syndrome characterized by the breakdown of skeletal muscle fibers, leading to the release of intracellular contents (myoglobin, creatine kinase (CK), potassium, phosphate, uric acid) into the systemic circulation.
*   **Causes**:
    *   **Trauma/Crush Injury**: Direct muscle damage.
    *   **Prolonged Immobilization/Coma**: Pressure necrosis of dependent muscles.
    *   **Extreme Exertion**: Status epilepticus, severe agitation, malignant hyperthermia, neuroleptic malignant syndrome, heat stroke, intense physical activity.
    *   **Drugs/Toxins**: Statins (especially with fibrates), colchicine, alcohol, cocaine, amphetamines, certain infections (e.g., influenza, Legionella), snake/spider venom.
    *   **Ischemia**: Arterial occlusion, prolonged tourniquet use, compartment syndrome.
    *   **Electrolyte Abnormalities**: Severe hypokalemia, hypophosphatemia.
    *   **Infections**: Viral myositis, bacterial pyomyositis.
*   **Clinical Features**: Classic triad (often not all present):
    *   **Muscle pain (myalgia)**: Often in large muscle groups (thighs, calves, back).
    *   **Muscle weakness**.
    *   **Dark urine (tea-colored or reddish-brown)**: Due to myoglobinuria.
    *   Other: Malaise, fever, tachycardia, N/V, abdominal pain. May be asymptomatic initially.
*   **Diagnosis**:
    *   **Markedly elevated Creatine Kinase (CK)**: Typically >5 times Upper Limit of Normal (ULN), often >5,000-10,000 IU/L, can be >100,000 IU/L. Peaks in 24-72h.
    *   **Myoglobinuria**: Urine dipstick positive for "blood" (heme) but few/no RBCs on microscopy. Serum myoglobin elevated (rapidly cleared).
    *   **Electrolyte Abnormalities**: Hyperkalemia (can be life-threatening), hyperphosphatemia, hypocalcemia (early, due to calcium deposition in damaged muscle), hyperuricemia. Hypercalcemia may occur later during recovery phase.
    *   Elevated AST/ALT, LDH (released from muscle).
*   **Complications**:
    *   **Acute Kidney Injury (AKI)**: Most serious common complication (15-50% of cases). Myoglobin is nephrotoxic (precipitates in tubules, direct toxicity, renal vasoconstriction).
    *   Life-threatening hyperkalemia -> cardiac arrhythmias.
    *   Compartment syndrome (due to muscle swelling).
    *   Disseminated Intravascular Coagulation (DIC).
    *   Hypovolemia (fluid sequestration in damaged muscle).
*   **Management**:
    1.  **Aggressive IV Fluid Resuscitation**: **Early and high-volume** isotonic crystalloids (e.g., 0.9% NaCl or Lactated Ringer's) is cornerstone. Aim for high urine output (e.g., target 100-300 mL/hr or 1-3 mL/kg/hr) to flush myoglobin and prevent AKI. Continue until CK levels are trending down significantly and urine is clear.
    2.  **Urinary Alkalinization (Controversial/Limited Evidence)**: Sodium bicarbonate infusion to raise urine pH >6.5-7.0 (may reduce myoglobin precipitation). Risks: volume overload, worsening hypocalcemia, metabolic alkalosis. Not routinely recommended by all guidelines.
    3.  **Mannitol (Controversial/Limited Evidence)**: Osmotic diuretic to promote myoglobin flushing. Risks: volume depletion if not matched with fluids, AKI in hypovolemic states.
    4.  **Monitor and Correct Electrolytes**: Especially K⁺ (treat hyperkalemia aggressively), Ca²⁺, PO₄³⁻.
    5.  **Treat Underlying Cause**.
    6.  **Fasciotomy**: If compartment syndrome develops.
    7.  **Renal Replacement Therapy (RRT)**: For severe AKI with anuria/oliguria, refractory hyperkalemia, severe acidosis, or severe fluid overload.

### Compartment Syndrome
A condition where increased pressure within a closed fascial compartment (e.g., in a limb) compromises circulation and function of tissues within that compartment. **A surgical emergency requiring prompt fasciotomy to prevent irreversible muscle and nerve damage.**
*   **Causes**:
    *   Trauma (fractures - esp. tibia, forearm; crush injuries, penetrating trauma).
    *   Burns (circumferential).
    *   Reperfusion injury after prolonged ischemia.
    *   Constrictive casts, dressings, splints.
    *   Rhabdomyolysis with significant muscle swelling.
    *   Vascular injury, bleeding into a compartment.
    *   Prolonged limb compression (e.g., unconscious patient).
*   **Pathophysiology**: Swelling/bleeding within a fixed-volume fascial compartment -> ↑ intracompartmental pressure -> venous outflow obstruction -> ↑ capillary hydrostatic pressure -> fluid extravasation -> further ↑ pressure -> arterial inflow compromise -> ischemia -> muscle and nerve necrosis.
*   **Clinical Features (The "6 P's" - often late findings; high index of suspicion is key)**:
    *   **Pain**: Out of proportion to the apparent injury, especially with passive stretch of muscles in the affected compartment. **Earliest and most reliable symptom.** Deep, burning, poorly localized.
    *   **Paresthesia**: Numbness, tingling, altered sensation in the distribution of nerves within the compartment (early sign of nerve ischemia).
    *   **Pallor**: Late sign of severe arterial compromise.
    *   **Pulselessness**: Very late and ominous sign. Often, pulses remain palpable even with established compartment syndrome due to pressure differences.
    *   **Paralysis/Paresis**: Weakness or inability to move digits/limb (late sign of muscle/nerve damage).
    *   **Poikilothermia (Coolness)**: Affected limb may feel cool compared to contralateral side (late sign).
    *   Affected compartment feels tense, firm, and swollen ("rock hard" or "wood-like" on palpation).
*   **Diagnosis**:
    *   Primarily clinical diagnosis based on high index of suspicion and thorough examination.
    *   **Compartment Pressure Measurement**: Can confirm diagnosis and guide treatment if clinical signs are equivocal.
        *   Needle manometry (e.g., Stryker device).
        *   Normal compartment pressure: 0-10 mmHg.
        *   Absolute pressure >30-40 mmHg often indicates need for fasciotomy.
        *   **Delta Pressure (ΔP)** = Diastolic BP - Compartment Pressure. ΔP <20-30 mmHg is highly suggestive of compartment syndrome and indicates need for fasciotomy.
*   **Management**:
    1.  **Immediate Fasciotomy**: Surgical decompression by incising the fascia of all involved compartments. **Time is critical** to save limb viability and function (irreversible damage can occur within 4-8 hours).
    2.  **Remove All Constricting Dressings, Casts, Splints**.
    3.  **Elevate Limb to Heart Level**: Avoid excessive elevation, as this can decrease arterial inflow and worsen ischemia if compartment pressures are high.
    4.  **Analgesia**.
    5.  Supportive care (IV fluids, oxygen). Monitor for rhabdomyolysis, AKI.

### ICU-Acquired Weakness (ICUAW)
A syndrome of generalized, diffuse, and symmetric limb weakness developing after the onset of critical illness, for which no other identifiable cause can be found. Encompasses Critical Illness Polyneuropathy (CIP - primarily axonal sensory-motor neuropathy) and Critical Illness Myopathy (CIM - primary muscle pathology). Often coexist (CIPM).
*   **Risk Factors**: Sepsis, Systemic Inflammatory Response Syndrome (SIRS), multi-organ failure, prolonged mechanical ventilation (>7 days), immobility, hyperglycemia, corticosteroids (especially high dose in combination with NMBAs), neuromuscular blocking agents (NMBAs), certain antibiotics (e.g., aminoglycosides).
*   **Clinical Features**: Diffuse, flaccid, symmetric weakness (often proximal > distal). Difficulty weaning from mechanical ventilator due to respiratory muscle weakness. Decreased or absent deep tendon reflexes (more in CIP). Muscle atrophy. Sensation may be impaired (CIP).
*   **Diagnosis**: Primarily clinical. Electrophysiological studies (nerve conduction studies, EMG) can help differentiate CIP, CIM, or mixed patterns, and rule out other causes. Muscle biopsy rarely needed.
*   **Prevention/Management**:
    *   **Early Mobilization and Physical Therapy**: Most important intervention. Active and passive range of motion, progressive mobility as tolerated.
    *   Treat underlying critical illness (e.g., sepsis).
    *   Optimize glycemic control (avoid hyperglycemia).
    *   Minimize sedation, daily sedation interruptions.
    *   Judicious use of corticosteroids and NMBAs (avoid prolonged use if possible).
    *   Adequate nutritional support.
    *   No specific pharmacological treatment for ICUAW itself. Focus on supportive care and rehabilitation. Recovery can be prolonged.

### Pressure Injuries (Pressure Ulcers)
Localized damage to the skin and/or underlying tissue, usually over a bony prominence or related to a medical device, as a result of intense and/or prolonged pressure or pressure in combination with shear. (See Integumentary System for full details on staging and management).
*   **Prevention in ICU**: Crucial due to immobility and acuity.
    *   Regular skin assessment and risk assessment (e.g., Braden Scale).
    *   Repositioning schedule (e.g., q2h, or per individualized plan).
    *   Use of pressure-redistributing support surfaces (mattresses, overlays).
    *   Manage moisture (incontinence care, keep skin dry).
    *   Optimize nutrition and hydration.
    *   Minimize friction and shear during repositioning/transfers.
    *   Protect heels (e.g., "float heels" with pillows, heel protector boots).
    *   Prevent medical device-related pressure injuries (pad under devices, ensure proper fit, reposition devices).

### Venous Thromboembolism (VTE) Prophylaxis
Critically ill patients are at very high risk for Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE) due to immobility, inflammation, hypercoagulability (e.g., sepsis, surgery, trauma), and use of central venous catheters.
*   **Assessment**: Assess VTE risk on admission and regularly.
*   **Pharmacologic Prophylaxis**: Standard for most ICU patients unless contraindicated (e.g., active major bleeding, severe thrombocytopenia, recent major surgery with high bleeding risk).
    *   Unfractionated Heparin (UFH) SubQ (e.g., 5000 units q8h or q12h).
    *   Low Molecular Weight Heparin (LMWH, e.g., Enoxaparin, Dalteparin) SubQ (e.g., Enoxaparin 40mg daily if normal renal function; dose adjust for renal impairment or obesity). LMWH often preferred due to more predictable anticoagulant response and lower risk of HIT.
*   **Mechanical Prophylaxis**: Used when pharmacologic prophylaxis is contraindicated, or sometimes in addition to it for very high-risk patients.
    *   Intermittent Pneumatic Compression (IPC) devices.
    *   Graduated Compression Stockings (GCS) - less effective than IPCs alone.
*   **Early Mobilization and Ambulation**: As soon as clinically feasible.`,
    categoryType: 'Body System',
    keywordsForImage: 'human skeleton muscle bone',
  },
  {
    id: 'integumentary',
    slug: 'integumentary',
    title: 'Integumentary System',
    summary: 'Management of skin integrity, pressure injuries, burns, and common dermatological conditions in the ICU.',
    content: `## General Overview

The integumentary system, consisting of the skin, hair, nails, and associated glands (sweat, sebaceous), is the body's largest organ. It serves as a primary protective barrier against environmental insults, pathogens, and dehydration. It also plays crucial roles in temperature regulation, sensation, vitamin D synthesis, and excretion of certain wastes. In critically ill patients, skin integrity is frequently compromised due to immobility, poor perfusion, malnutrition, edema, and medical devices, leading to increased risk of pressure injuries, infections, and delayed healing.

## In-Depth ICU Considerations

### Pressure Injury (Pressure Ulcer) Prevention and Management
A pressure injury is localized damage to the skin and/or underlying soft tissue usually over a bony prominence or related to a medical or other device. The injury can present as intact skin or an open ulcer and may be painful. It occurs as a result of intense and/or prolonged pressure or pressure in combination with shear.

#### Staging of Pressure Injuries (NPIAP/NPUAP Guidelines)

| Stage         | Description                                                                                                                               | Key Characteristics                                                                                                                                 |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Stage 1**   | Non-blanchable erythema of intact skin.                                                                                                     | Intact skin with a localized area of non-blanchable redness (erythema). Presence of blanchable erythema or changes in sensation, temperature, or firmness may precede visual changes. Color changes do not include purple or maroon discoloration; these may indicate deep tissue pressure injury. |
| **Stage 2**   | Partial-thickness skin loss with exposed dermis.                                                                                            | The wound bed is viable, pink or red, moist, and may also present as an intact or ruptured serum-filled blister. Adipose (fat) is not visible and deeper tissues are not visible. Granulation tissue, slough, and eschar are not present. These injuries commonly result from adverse microclimate and shear in the skin over the pelvis and shear in the heel. |
| **Stage 3**   | Full-thickness skin loss.                                                                                                                 | Adipose (fat) is visible in the ulcer and granulation tissue and epibole (rolled wound edges) are often present. Slough and/or eschar may be visible. The depth of tissue damage varies by anatomical location; areas of significant adiposity can develop deep wounds. Undermining and tunneling may occur. Fascia, muscle, tendon, ligament, cartilage and/or bone are NOT exposed. |
| **Stage 4**   | Full-thickness skin and tissue loss.                                                                                                      | Exposed or directly palpable fascia, muscle, tendon, ligament, cartilage or bone in the ulcer. Slough and/or eschar may be visible. Epibole, undermining, and/or tunneling often occur. Depth varies by anatomical location. |
| **Unstageable**| Obscured full-thickness skin and tissue loss.                                                                                               | The extent of tissue damage within the ulcer cannot be confirmed because it is obscured by slough or eschar. If slough or eschar is removed, a Stage 3 or Stage 4 pressure injury will be revealed. Stable eschar (i.e. dry, adherent, intact without erythema or fluctuance) on an ischemic limb or the heel(s) should not be softened or removed. |
| **Deep Tissue Pressure Injury (DTPI)** | Persistent non-blanchable deep red, maroon, or purple discoloration, or epidermal separation revealing a dark wound bed or blood-filled blister. | Intact or non-intact skin with localized area of persistent non-blanchable deep red, maroon, purple discoloration or epidermal separation revealing a dark wound bed or blood-filled blister. Pain and temperature change often precede skin color changes. Discoloration may appear differently in darkly pigmented skin. This injury results from intense and/or prolonged pressure and shear forces at the bone-muscle interface. The wound may evolve rapidly to reveal the actual extent of tissue injury, or may resolve without tissue loss. |

#### Medical Device-Related Pressure Injury (MDRPI)
Results from the use of devices designed and applied for diagnostic or therapeutic purposes. The resultant pressure injury generally conforms to the pattern or shape of the device. Stage using the staging system.

#### Prevention Strategies (Crucial Nursing Role)
*   **Risk Assessment**: Use a validated tool (e.g., Braden Scale, Norton Scale) on admission and regularly (e.g., daily or with change in condition) to identify at-risk patients.
*   **Skin Assessment**: Perform a comprehensive skin assessment at least daily, focusing on bony prominences and under medical devices.
*   **Support Surfaces**: Use appropriate pressure-redistributing support surfaces (e.g., specialized mattresses, overlays, chair cushions) for patients at risk.
*   **Repositioning**: Turn and reposition bed-bound patients frequently (e.g., q2h or per individualized plan, considering patient's condition and support surface). Use a written turning schedule. For chair-bound patients, reposition q1h. Use lifting devices/draw sheets to minimize friction/shear. Limit HOB elevation to ≤30° unless contraindicated, to reduce shear.
*   **Manage Moisture**: Keep skin clean and dry. Implement an incontinence management plan promptly. Use pH-balanced skin cleansers. Apply moisture barrier creams/ointments to protect skin from excessive moisture.
*   **Optimize Nutrition and Hydration**: Ensure adequate intake of protein, calories, fluids, vitamins (esp. C, A), and minerals (esp. zinc) to maintain skin health and support healing. Consult dietitian.
*   **Heel Protection**: "Float" heels off the bed using pillows or heel protection devices. Avoid doughnut-type devices.
*   **Medical Device Care**: Assess skin under and around medical devices (ET tubes, O2 masks/cannulas, NG/OG tubes, catheters, SCDs, braces) at least twice daily. Pad skin under devices, ensure proper fit, secure devices to prevent movement/pressure, consider repositioning devices regularly if possible.

#### Management of Existing Pressure Injuries
*   **Comprehensive Wound Assessment**: Document location, stage, size (length, width, depth in cm), wound bed characteristics (tissue type: granulation, slough, eschar; color, amount), exudate (amount, type, consistency, odor), periwound skin condition (erythema, maceration, induration), undermining/tunneling, pain.
*   **Cleansing**: Cleanse with normal saline or a non-cytotoxic wound cleanser with each dressing change. Avoid harsh antiseptics (e.g., povidone-iodine, hydrogen peroxide) on open wounds unless specifically indicated for infection control.
*   **Debridement**: Removal of non-viable tissue (slough, eschar) to promote healing. Methods: surgical/sharp, enzymatic, autolytic, mechanical, biologic (larval therapy). Choice depends on wound, patient condition, goals of care, and available resources. (Stable eschar on heels or ischemic limb should NOT be debrided).
*   **Dressings**: Select based on wound characteristics (goal is to maintain a moist wound environment, manage exudate, protect periwound skin, debride if needed, prevent/treat infection).
    *   Examples: Transparent films (Stage 1, superficial wounds), hydrocolloids (light-moderate exudate), foams (moderate-heavy exudate), alginates/hydrofibers (heavy exudate), hydrogels (dry wounds needing moisture), silver-impregnated dressings (infected wounds), collagenase (enzymatic debridement).
*   **Manage Infection**: Monitor for signs of local (increased pain, erythema, warmth, purulent drainage, delayed healing, new odor) or systemic infection (fever, leukocytosis). Obtain cultures if infection suspected (tissue biopsy or needle aspiration preferred over swabs for deep wounds). Topical or systemic antibiotics as ordered based on culture/sensitivity and clinical picture.
*   **Nutritional Support**: Critical for healing.
*   **Pain Management**: Assess and manage wound-related pain, especially during dressing changes.
*   **Consult Wound Care Specialist (WOC Nurse)**: For complex or non-healing wounds.

### Burn Management in ICU (Overview)
Major burns are complex traumatic injuries requiring specialized ICU care in a burn center.
*   **Assessment**:
    *   **Type of Burn**: Thermal (flame, scald, contact), chemical, electrical, radiation.
    *   **Total Body Surface Area (TBSA) Burned**: Rule of Nines (adults - quick estimate), Lund-Browder chart (more accurate, especially for children), palmar surface method (patient's palm ≈ 1% TBSA). Exclude superficial (1st degree) burns from TBSA calculation for fluid resuscitation.
    *   **Depth of Burn**:
        *   Superficial (First-degree): Epidermis only. Red, painful, dry, no blisters (e.g., sunburn).
        *   Partial-thickness (Second-degree): Epidermis and part of dermis.
            *   Superficial partial-thickness: Red, painful, moist, blisters. Heals in 7-21 days with minimal scarring.
            *   Deep partial-thickness: Mottled red/white, less painful (nerve damage), wet or waxy dry, blisters may be present. Heals in >21 days, often with scarring, may need grafting.
        *   Full-thickness (Third-degree): Epidermis and entire dermis destroyed, may involve subcutaneous tissue. White, waxy, leathery, charred, or translucent. Painless (nerve endings destroyed). Requires grafting.
        *   Fourth-degree: Extends into muscle, bone, or tendon. Requires extensive debridement and reconstruction.
    *   **Inhalation Injury Assessment**: Suspect if facial burns, singed nasal/facial hairs, soot in sputum/oropharynx, hoarseness, carbonaceous sputum, history of burn in enclosed space, altered mental status. Confirmed by bronchoscopy. Significantly increases morbidity/mortality.
*   **Initial Management (ABCDEs - Primary Survey)**:
    *   **Airway**: Assess for patency. Secure airway early with intubation if signs of inhalation injury, extensive facial/neck burns, or impending airway compromise (edema can be rapid and severe). Use larger ETT if possible.
    *   **Breathing**: Administer 100% humidified O2. Monitor respiratory status, work of breathing, SpO2. Assess for CO poisoning (obtain carboxyhemoglobin level - treat with 100% O2, consider hyperbaric O2 if severe). Assess for cyanide poisoning if products of combustion involved.
    *   **Circulation**: Establish IV access (2 large-bore peripheral IVs through unburned skin if possible; central line or intraosseous access if needed). **Aggressive fluid resuscitation** is critical for burns >15-20% TBSA.
        *   **Parkland Formula**: 4 mL Lactated Ringer's (LR) x kg body weight x %TBSA burned = total fluid volume in first 24 hours.
        *   Administer 1/2 of total in first 8 hours (from time of burn, not hospital arrival).
        *   Administer remaining 1/2 over next 16 hours.
        *   Titrate infusion rate to maintain adequate urine output (target 0.5-1 mL/kg/hr for adults; 30-50 mL/hr. For electrical burns with rhabdo, target 75-100 mL/hr). Monitor BP, HR, mental status.
    *   **Disability**: Neurological assessment (AVPU, GCS). Consider associated trauma.
    *   **Exposure/Environment**: Remove all clothing, jewelry (can constrict with edema). Cover patient with clean, dry sheets/blankets to prevent hypothermia (burn patients lose ability to regulate temperature). Maintain warm environment.
*   **Secondary Survey & Ongoing Care**:
    *   **Wound Care**: Initial cleansing (mild soap/water or saline). Debridement of loose skin/blisters (controversial for intact blisters). Application of topical antimicrobials (e.g., silver sulfadiazine, mafenide acetate, bacitracin - choice depends on depth, TBSA, flora) and dressings.
    *   **Pain Management**: Aggressive IV opioid analgesia. Anxiolytics. Non-pharmacologic methods.
    *   **Nutritional Support**: Burn patients are extremely hypermetabolic. Early enteral nutrition (within 6-12 hours) is crucial to meet high caloric and protein needs and prevent catabolism/support immune function.
    *   **Infection Control**: Strict asepsis. Monitor for signs of burn wound infection, sepsis. Systemic antibiotics only for documented infection, not prophylactic. Tetanus prophylaxis.
    *   **Prevent Complications**: Hypovolemic shock, ARDS, AKI, rhabdomyolysis (esp. electrical burns), compartment syndrome (circumferential burns may require escharotomy/fasciotomy), contractures (PT/OT involvement early), stress ulcers, VTE.

### Common ICU Dermatological Conditions
*   **Incontinence-Associated Dermatitis (IAD)**: Inflammation/erosion from prolonged exposure to urine/stool. Prevention: Gentle cleansing, moisture barrier creams/ointments (e.g., zinc oxide, dimethicone), timely changes of incontinence products/linens. Differentiate from pressure injury.
*   **Intertriginous Dermatitis (Intertrigo)**: Inflammation of skin folds (axillae, groin, under breasts, pannus) due to moisture, friction, and often yeast/bacterial overgrowth. Keep areas clean and dry. Use absorbent materials (e.g., interleaved cloths). Topical antifungals (e.g., nystatin, clotrimazole powder/cream) or mild corticosteroids if indicated.
*   **Drug Rashes/Cutaneous Adverse Drug Reactions (CADRs)**:
    *   **Morbilliform (Maculopapular) Eruptions**: Most common. Widespread, symmetric erythematous macules/papules. Often pruritic. Usually benign.
    *   **Urticaria (Hives)**: Wheals (transient, raised, erythematous, edematous plaques). Often pruritic.
    *   **Fixed Drug Eruption**: One or more sharply demarcated, round/oval erythematous plaques that recur at same site with re-exposure.
    *   **Severe Cutaneous Adverse Reactions (SCARs) - Life-threatening**:
        *   **Stevens-Johnson Syndrome (SJS) / Toxic Epidermal Necrolysis (TEN)**: Widespread blistering, epidermal detachment, mucosal involvement. High mortality. Requires immediate drug cessation, supportive care (often in burn unit), dermatology/ophthalmology consult. Common culprits: allopurinol, antibiotics (sulfonamides, penicillins), anticonvulsants (carbamazepine, lamotrigine, phenytoin), NSAIDs.
        *   **Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS) Syndrome**: aka Drug-Induced Hypersensitivity Syndrome (DIHS). Widespread rash, fever, lymphadenopathy, eosinophilia, internal organ involvement (liver, kidney, lung, heart). Prolonged course. Culprits similar to SJS/TEN.
*   **Fungal Infections (Cutaneous Candidiasis)**: Common in moist areas (intertriginous, under dressings), immunocompromised patients, prolonged antibiotic use. Erythematous patches, satellite pustules/papules. Topical or systemic antifungals.
*   **Viral Infections (e.g., Herpes Simplex Virus - HSV, Varicella-Zoster Virus - VZV)**:
    *   **Herpes Zoster (Shingles)**: Reactivation of VZV. Painful vesicular eruption in a dermatomal distribution. Antivirals (acyclovir, valacyclovir, famciclovir), pain control. Disseminated zoster in immunocompromised.
    *   **HSV**: Can cause oral (cold sores) or genital lesions, or herpetic whitlow. Eczema herpeticum (widespread HSV in patients with atopic dermatitis).
*   **Skin Tears**: Traumatic wounds caused by shear, friction, and/or blunt force resulting in separation of skin layers. Common in elderly or those with fragile skin. Gentle handling, proper wound care, protective dressings.`,
    categoryType: 'Body System',
    keywordsForImage: 'skin layers anatomy dermatology',
  },
];

const originalTopicsContent: Array<Omit<ContentItem, 'generalOverview' | 'inDepthConsiderations'> & { content: string }> = [
  {
    id: 'hemodynamics',
    slug: 'hemodynamics',
    title: 'Advanced Hemodynamics',
    summary: 'Deep dive into hemodynamic principles, monitoring techniques, interpretation, and therapeutic interventions in critical care.',
    content: `## General Overview

Hemodynamics is the study of the physical principles governing blood flow within the circulatory system. In critical care, a thorough understanding of hemodynamics is essential for assessing cardiovascular function, diagnosing shock states, guiding therapeutic interventions (like fluid administration and vasoactive drug use), and optimizing tissue perfusion and oxygen delivery to vital organs.

## In-Depth ICU Considerations

### Key Hemodynamic Parameters & Their Determinants

| Parameter                             | Formula / Normal Value                      | Description                                                                 | Key Determinants / Clinical Significance                                                                                                                            |
|---------------------------------------|---------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Heart Rate (HR)**                   | Normal: 60-100 beats/min                    | Number of cardiac contractions per minute.                                  | Influenced by autonomic nervous system, medications, metabolic state. Tachycardia can ↓ diastolic filling time. Bradycardia can ↓ CO if SV doesn't compensate.          |
| **Stroke Volume (SV)**                | Normal: 60-100 mL/beat                      | Volume of blood ejected by the ventricle with each heartbeat.               | Determined by **Preload, Afterload, and Contractility**.                                                                                                                |
| **Cardiac Output (CO)**               | CO = HR x SV; Normal: 4-8 L/min             | Volume of blood pumped by the heart per minute.                             | Key indicator of overall cardiac function and blood delivery to tissues.                                                                                              |
| **Cardiac Index (CI)**                | CI = CO / BSA; Normal: 2.5-4 L/min/m²       | CO adjusted for body surface area (BSA). Standardizes CO across different patient sizes. | More accurate for comparing cardiac function between individuals. CI <2.2 L/min/m² often indicates cardiogenic shock or severe hypoperfusion.                               |
| **Mean Arterial Pressure (MAP)**      | MAP ≈ (SBP + 2*DBP)/3 or [(SBP-DBP)/3] + DBP; Normal: 70-105 mmHg  | Average arterial pressure during a cardiac cycle; represents organ perfusion pressure. | Target >65 mmHg in most shock states. MAP is determined by CO and SVR (MAP ≈ CO x SVR).                                                                               |
| **Central Venous Pressure (CVP)**     | Normal: 2-8 mmHg                            | Pressure in the right atrium/vena cava; approximates RV end-diastolic pressure (RV preload). | Static measure; poor predictor of fluid responsiveness alone. Trends and context are important. Influenced by intravascular volume, venous tone, intrathoracic pressure, RV compliance/function. |
| **Pulmonary Artery Pressure (PAP)**   | Systolic (PASP): 15-30 mmHg, Diastolic (PADP): 8-15 mmHg, Mean (MPAP): 10-20 mmHg | Pressures within the pulmonary artery.                                        | PASP reflects RV systolic function & PVR. PADP often approximates PAWP and LA pressure (LV preload) in absence of lung disease/mitral stenosis. ↑ in pulmonary HTN, LV failure, PE. |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | Normal: 6-12 mmHg                         | Pressure measured by occluding a small pulmonary artery branch; indirectly reflects left atrial pressure and LV end-diastolic pressure (LV preload). | Requires PAC. Interpreted cautiously (Zone 3 lung conditions needed for accuracy). ↑ in LV failure, mitral stenosis/regurgitation, hypervolemia. ↓ in hypovolemia.          |
| **Systemic Vascular Resistance (SVR)**| SVR = [(MAP - CVP) / CO] x 80; Normal: 800-1200 dynes·s/cm⁻⁵ | Resistance the left ventricle must overcome to eject blood (LV afterload).    | ↑ in hypovolemic/cardiogenic shock, vasoconstrictor use. ↓ in distributive shock (sepsis, anaphylaxis), vasodilator use.                                           |
| **Pulmonary Vascular Resistance (PVR)**| PVR = [(MPAP - PAWP) / CO] x 80; Normal: <250 dynes·s/cm⁻⁵ | Resistance the right ventricle must overcome to eject blood into pulmonary circulation (RV afterload). | ↑ in pulmonary HTN, hypoxia, acidosis, ARDS, PE.                                                                                                                      |
| **Mixed Venous Oxygen Saturation (SvO2)** | Normal: 60-80% (PAC sample)                 | Oxygen saturation of blood returning to the right heart from systemic circulation; reflects global balance between oxygen delivery (DO2) and oxygen consumption (VO2). | ↓ indicates ↑O2 extraction due to ↓DO2 (anemia, hypoxia, ↓CO) or ↑VO2 (fever, shivering, pain). ↑ may indicate ↓VO2 (sepsis maldistribution, cyanide) or ↑DO2.        |
| **Central Venous Oxygen Saturation (ScvO2)** | Normal: >70% (CVC sample from SVC)          | Oxygen saturation from CVC in superior vena cava; surrogate for SvO2.         | Often used in early goal-directed therapy for sepsis. Values typically 2-5% higher than SvO2.                                                                         |

#### Determinants of Stroke Volume (SV)
*   **Preload**: Ventricular end-diastolic volume (EDV) or stretch on myocardial fibers just before contraction.
    *   *Frank-Starling Law*: Increased preload (to an optimal point) leads to increased force of contraction and thus increased SV. Beyond this point, overstretching can decrease SV (descending limb, rare in normal hearts but relevant in severe HF).
    *   *Factors increasing preload*: Fluid administration, venoconstriction, bradycardia (longer filling time).
    *   *Factors decreasing preload*: Hypovolemia (hemorrhage, dehydration), venodilation (e.g., nitrates, sepsis), diuretics, tachycardia (shorter filling time), positive pressure ventilation (↑intrathoracic pressure can ↓venous return).
*   **Afterload**: Resistance or load against which the ventricle must contract to eject blood.
    *   *For LV*: SVR, aortic impedance, blood viscosity, arterial stiffness.
    *   *For RV*: PVR, pulmonary artery impedance.
    *   *Factors increasing LV afterload*: Hypertension, aortic stenosis, vasopressors (e.g., Phenylephrine).
    *   *Factors decreasing LV afterload*: Vasodilators (e.g., Nitroglycerin, Nitroprusside), sepsis (distributive shock), ACE inhibitors.
*   **Contractility (Inotropy)**: Intrinsic strength and velocity of myocardial contraction, independent of preload and afterload.
    *   *Assessment*: Difficult to measure directly; inferred from CI, SV, ejection fraction (via Echo), dP/dt (rate of pressure rise in LV).
    *   *Factors increasing contractility (Positive Inotropes)*: Sympathetic stimulation (catecholamines like Epinephrine, Norepinephrine, Dopamine), Dobutamine, Milrinone, Digoxin, Calcium.
    *   *Factors decreasing contractility (Negative Inotropes)*: Beta-blockers, calcium channel blockers, acidosis, hypoxia, myocardial ischemia/infarction, sepsis (myocardial depression), anesthetic agents.

### Fluid Responsiveness Assessment
Predicting whether a patient's CO/SV will increase significantly (typically >10-15%) in response to a fluid bolus. Static measures (CVP, PAWP) are poor predictors. Dynamic measures are preferred:
*   **Passive Leg Raise (PLR)**: Patient moved from semi-recumbent to supine with legs raised to 45°. Creates a transient increase in venous return (autotransfusion of ~150-300mL). Positive if CO/SV (measured continuously) increases by 10-15%. Requires no arrhythmias, no spontaneous breathing for some CO monitors. Reversible.
*   **Stroke Volume Variation (SVV) / Pulse Pressure Variation (PPV)**: Beat-to-beat variation in SV or pulse pressure during positive pressure mechanical ventilation. SVV/PPV >10-15% suggests fluid responsiveness.
    *   *Requirements*: Controlled mechanical ventilation (no spontaneous breaths), regular sinus rhythm, tidal volume ≥8 mL/kg PBW, absence of right heart failure or severe intra-abdominal hypertension.
*   **Respiratory Variation in IVC Diameter**: Echocardiographic assessment of inferior vena cava diameter changes with respiration. Greater collapsibility (>50% in spontaneous breathing, >12-18% distensibility in mechanical ventilation) suggests fluid responsiveness.
*   **End-Expiratory Occlusion Test (EEOT)**: Brief (15-30s) occlusion of ventilator circuit at end-expiration. Prevents cyclic decrease in venous return caused by PPV. An increase in CO/pulse pressure by >5% suggests fluid responsiveness.
*   **Mini-Fluid Challenge**: Small fluid bolus (e.g., 100-250 mL crystalloid over 5-10 min) with assessment of CO/SV response.

### Arterial Line Management & Waveform Analysis
Provides continuous BP monitoring, MAP calculation, and easy access for ABGs/labs.
*   **Site Selection**: Radial (most common), femoral, brachial, axillary, dorsalis pedis.
*   **Transducer Setup**:
    *   **Leveling**: Transducer at phlebostatic axis (4th intercostal space, mid-axillary line - approximates right atrial level). Re-level with significant patient position changes.
    *   **Zeroing**: Expose transducer to atmospheric pressure and zero monitor. Perform at start of monitoring, with position changes, or if values suspect.
    *   **Pressurized Flush System**: Maintain continuous flush (e.g., 3 mL/hr heparinized or non-heparinized saline) at 300 mmHg to ensure patency and accurate waveform.
*   **Arterial Waveform Components & Interpretation**:
    *   **Anacrotic Limb (Systolic Upstroke)**: Rapid rise in pressure as LV ejects blood. Slope reflects contractility and SVR. Steep = good contractility, low SVR. Slurred = poor contractility, high SVR.
    *   **Systolic Peak Pressure (SPP)**: Highest point, represents peak systolic pressure.
    *   **Dicrotic Notch**: Small notch on downstroke; signifies aortic valve closure and beginning of diastole. Should be clearly visible for accurate system.
    *   **Diastolic Runoff**: Gradual decline in pressure as blood flows to periphery during diastole. Rate of decline reflects SVR. Rapid runoff = low SVR. Slow runoff = high SVR.
    *   **Pulse Pressure (PP)**: SBP - DBP. Proportional to SV if arterial compliance is constant.
*   **Square Wave Test (Dynamic Response Test / Fast Flush Test)**: Assesses system's ability to accurately reproduce physiological pressures. Activate fast flush device for 1-2 seconds.
    *   **Optimal Response**: Sharp upstroke to flush pressure, clear plateau, rapid drop below baseline creating 1-2 distinct oscillations (rings) before returning to patient's baseline pressure tracing within 0.12 seconds. Indicates an accurately transmitting system.
    *   **Overdamped Response**: Fewer than 1.5 oscillations, or a slurred, blunted return to baseline after flush. Waveform will underestimate SBP and overestimate DBP. Dicrotic notch may be absent or slurred.
        *   *Causes*: Air bubbles in tubing/transducer, loose connections, kinks, blood clots in catheter, compliant tubing, low flush bag pressure, very soft tissues.
        *   *Intervention*: Check system for and remove air/clots/kinks. Tighten connections. Ensure flush pressure is 300 mmHg. Use stiff, non-compliant tubing.
    *   **Underdamped (Resonant) Response**: More than 2-3 sharp oscillations ("ringing" or "whip") after flush. Waveform will overestimate SBP and underestimate DBP. Systolic peaks appear exaggerated or "spiked."
        *   *Causes*: Stiff/long tubing, excessive stopcocks, catheter movement ("catheter whip"), arteriosclerosis in patient, small catheter size, hypertension, tachycardia.
        *   *Intervention*: Remove excess stopcocks/tubing. Use a damping device or add a male-to-male connector to reduce resonance. Ensure catheter is secure.

### Pulmonary Artery Catheter (PAC / Swan-Ganz Catheter)
Provides comprehensive hemodynamic data: RA (CVP), RV, PA pressures (systolic, diastolic, mean), PAWP, CO (thermodilution or continuous), CI, SVR, PVR, and SvO2. Use has declined but still valuable in select complex patients (e.g., severe cardiogenic shock, RV failure, pulmonary HTN, post-cardiac surgery).
*   **Waveform Progression during Insertion**:
    *   **Right Atrium (RA)**: Low pressure (2-8 mmHg), similar to CVP, with 'a' (atrial contraction), 'c' (tricuspid valve closure), and 'v' (atrial filling) waves.
    *   **Right Ventricle (RV)**: Pulsatile, sharp upstroke to RV systolic pressure (15-30 mmHg), rapid downstroke to near zero RV end-diastolic pressure (0-8 mmHg). **Risk of ventricular arrhythmias (VTach, PVCs) during passage through RV.**
    *   **Pulmonary Artery (PA)**: Pulsatile waveform similar to arterial line but lower pressures (PASP 15-30, PADP 8-15 mmHg). Clear dicrotic notch indicates pulmonic valve closure.
    *   **Pulmonary Artery Wedge Pressure (PAWP)**: Non-pulsatile, damped waveform (6-12 mmHg) reflecting mean left atrial pressure when balloon (at catheter tip) is inflated, occluding a small PA branch. Balloon should be inflated slowly with minimal air (max 1.5 mL) only for brief periods to obtain reading. Over-wedging (persistent inflation, migration into smaller vessel, or >1.5mL air) can cause PA rupture (rare but fatal).

### Shock States & Hemodynamic Profiles (Typical Findings)

| Shock Type                     | CO/CI       | CVP/PAWP    | SVR         | SvO2/ScvO2  | Other Key Features / Treatment Focus                                           |
|--------------------------------|-------------|-------------|-------------|-------------|--------------------------------------------------------------------------------|
| **Hypovolemic**                | ↓↓↓         | ↓↓↓         | ↑↑          | ↓           | Hemorrhage, dehydration. Restore intravascular volume (crystalloids, colloids, blood products). |
| **Cardiogenic**                | ↓↓↓         | ↑↑↑         | ↑↑          | ↓           | MI, severe heart failure, myocarditis. Improve contractility (inotropes), reduce afterload (vasodilators if BP allows), vasopressors for BP support, mechanical circulatory support (IABP, Impella, ECMO). |
| **Septic (Distributive - early/hyperdynamic "warm shock")** | ↑ or Normal | ↓ or Normal | ↓↓↓         | ↑ or Normal | Infection, massive vasodilation. Fluids, vasopressors (Norepinephrine), antibiotics, source control.      |
| **Septic (Distributive - late/hypodynamic "cold shock")** | ↓           | Variable (can be low, normal, or high if myocardial depression) | Variable (can be low or high if compensatory vasoconstriction fails) | ↓           | Worsening sepsis, myocardial depression. Fluids, vasopressors, consider inotropes. |
| **Neurogenic (Distributive)**  | ↓           | ↓           | ↓↓↓         | Normal      | Spinal cord injury (typically T6 or above) causing loss of sympathetic tone. Fluids, vasopressors (Phenylephrine or Norepinephrine), Atropine for bradycardia. |
| **Anaphylactic (Distributive)**| ↓           | ↓           | ↓↓↓         | Normal      | Allergic reaction, massive histamine release -> vasodilation, bronchospasm, increased capillary permeability. Epinephrine (IM/IV), antihistamines, steroids, fluids. |
| **Obstructive**                | ↓↓↓         | ↑↑ (CVP often very high, specific findings depend on cause e.g., pulsus paradoxus in tamponade) | Variable (often ↑) | ↓           | Impaired diastolic filling or systolic contraction due to physical obstruction. E.g., Cardiac Tamponade, Tension Pneumothorax, Massive Pulmonary Embolism, Constrictive Pericarditis. Relieve obstruction (e.g., pericardiocentesis, needle decompression/chest tube, thrombolysis/embolectomy). |

*(↓ = Decreased, ↑ = Increased. Number of arrows indicates relative magnitude of change.)*

### Therapeutic Interventions Guided by Hemodynamics
*   **Fluid Resuscitation**: Guided by dynamic parameters of fluid responsiveness to optimize preload.
*   **Vasopressors**: For hypotension refractory to fluids (target MAP usually >65 mmHg). Titrate to improve perfusion while minimizing adverse effects.
*   **Inotropes**: For low CO states with evidence of end-organ hypoperfusion and adequate preload.
*   **Vasodilators**: To reduce afterload in conditions like hypertensive emergencies or severe heart failure with high SVR, if BP allows.`,
    categoryType: 'Topic',
    keywordsForImage: 'hemodynamic monitor waveform',
  },
  {
    id: 'critical-care-pharmacology',
    slug: 'critical-care-pharmacology',
    title: 'Critical Care Pharmacology Deep Dive',
    summary: 'Detailed pharmacology of common ICU medications, including vasoactive drugs, sedatives, analgesics, and antimicrobials.',
    content: `## General Overview

Critical care pharmacology involves the use of potent medications to manage life-threatening conditions. These drugs often have narrow therapeutic windows, significant potential for drug interactions, and require careful titration based on physiological responses. Understanding their mechanisms of action, pharmacokinetics (how the body affects the drug), pharmacodynamics (how the drug affects the body), indications, and adverse effects is crucial for safe and effective ICU care.

## In-Depth ICU Considerations

### Vasoactive Medications
These drugs act on the cardiovascular system to alter heart rate (chronotropy), contractility (inotropy), and vascular tone (vasoconstriction/vasodilation). They are essential in managing shock states, heart failure, and hypertension.

#### Vasopressors
Used to increase blood pressure, primarily by vasoconstriction, in shock states characterized by vasodilation or inadequate vascular tone. Titrated to achieve a target MAP (usually ≥65 mmHg) and improve tissue perfusion.

| Drug Name                     | Primary Receptors & Mechanism                                   | Key Hemodynamic Effects                                 | Common ICU Uses                                          | Key Risks / Considerations                                                                                                |
|-------------------------------|-----------------------------------------------------------------|---------------------------------------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **Norepinephrine (Levophed)** | Potent α1 agonist (vasoconstriction) > β1 agonist (↑HR, ↑contractility). | ↑↑SVR, ↑MAP, modest ↑CO/HR.                             | Septic shock (1st line), cardiogenic shock (if hypotensive), other distributive shocks. | Peripheral/mesenteric ischemia, extravasation (tissue necrosis - treat with Phentolamine), arrhythmias, reflex bradycardia (rare). |
| **Epinephrine (Adrenaline)**  | Potent α1, β1, β2 agonist (effects are dose-dependent).         | Low dose (β dominant): ↑HR, ↑CO, ↓SVR (β2 vasodilation). High dose (α dominant): ↑↑SVR, ↑↑CO, ↑↑HR, ↑MAP. | Anaphylaxis (drug of choice), cardiac arrest (ACLS), refractory septic shock (adjunct), severe asthma/bronchospasm, symptomatic bradycardia (2nd line). | Tachyarrhythmias (esp. VT), myocardial ischemia, hyperglycemia, ↑lactate (due to β2 stimulation, not necessarily worsening shock), anxiety, tremors. |
| **Phenylephrine (Neo-Synephrine)** | Pure α1 agonist (vasoconstriction).                             | ↑↑SVR, ↑MAP. May cause reflex bradycardia (baroreceptor mediated) and potentially ↓CO due to ↑afterload. | Hypotension (esp. with normal/high CO and tachycardia, e.g., neurogenic shock, anesthesia-induced hypotension). Used to counteract vasodilator effects. | Reflex bradycardia, severe peripheral/splanchnic vasoconstriction, reduced CO (esp. in HF), extravasation. Use with caution in poor LV function. |
| **Vasopressin (ADH Analogue)**| V1 receptor agonist in vascular smooth muscle (vasoconstriction). Also V2 receptor (renal - antidiuretic). | Vasoconstriction (non-α-adrenergic, potentiates other vasopressors). ↑SVR, ↑MAP. Minimal direct cardiac effects. | Septic shock (adjunct, often fixed low dose e.g., 0.03-0.04 units/min), refractory shock, GI bleed (variceal - older use). | Splanchnic/digital ischemia (esp. at higher doses), hyponatremia (V2 effect), coronary ischemia. Not titratable for BP in septic shock (fixed dose). |
| **Dopamine**                  | Dose-dependent receptor activity: Low (1-3 mcg/kg/min, "renal dose" - D1, D2): Renal/mesenteric vasodilation (clinical benefit controversial, not routinely recommended). Mid (3-10 mcg/kg/min, "cardiac dose" - β1): ↑HR, ↑contractility, ↑CO. High (>10 mcg/kg/min, "vasopressor dose" - α1): Vasoconstriction, ↑SVR, ↑MAP. | Variable effects on HR, CO, SVR depending on dose.      | Shock (less common now, considered 2nd line for symptomatic bradycardia refractory to atropine). Hypotension in specific settings. | Tachyarrhythmias (more arrhythmogenic than norepinephrine), N/V, headache, extravasation.                                        |
| **Angiotensin II (Giapreza)** | Potent AT1 receptor agonist.                                    | Potent vasoconstriction, ↑aldosterone release. ↑SVR, ↑MAP. | Distributive shock (e.g., septic shock) refractory to other vasopressors. | Thromboembolic events (arterial & venous - DVT/PE prophylaxis important), peripheral ischemia, delirium.                             |

#### Inotropes
Used to increase myocardial contractility (positive inotropic effect) in states of low cardiac output, such as cardiogenic shock or severe decompensated heart failure.

| Drug Name        | Mechanism / Receptors                                   | Key Hemodynamic Effects                                        | Common ICU Uses                                               | Key Risks / Considerations                                                                                             |
|------------------|---------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Dobutamine**   | Primarily β1 agonist, some β2 agonist (mild vasodilation), weak α1 activity. | ↑↑Contractility, ↑CO, often mild ↓SVR (net effect on BP can be variable or ↓). Mild ↑HR. | Cardiogenic shock, acute decompensated heart failure (ADHF) with low CO, stress echocardiography. | Hypotension (especially if patient is hypovolemic), tachyarrhythmias, tolerance with prolonged use (downregulation of β-receptors). |
| **Milrinone**    | Phosphodiesterase-3 (PDE3) inhibitor. Increases intracellular cAMP. | ↑↑Contractility (inotropy), significant arterial and venous vasodilation (↓SVR, ↓PVR - "inodilator"), ↓preload, ↓afterload. Lusitropic (improves diastolic relaxation). | ADHF (especially with high SVR/PVR), right heart failure, pulmonary hypertension. Weaning from CPB. | Hypotension (due to vasodilation - may require co-administration of vasopressor), arrhythmias (VT), longer half-life (requires dose adjustment in renal impairment). |
| **Epinephrine (low dose)** | β1, β2 agonist dominant at lower doses.                 | ↑Contractility, ↑HR, ↑CO. May ↓SVR due to β2 effect.           | Post-cardiac surgery low CO states, refractory shock needing inotropic support. | As above for Epinephrine (tachyarrhythmias, ischemia, hyperglycemia).                                                  |
| **Isoproterenol (Isuprel)**| Non-selective potent β-agonist (β1 and β2).             | Potent ↑HR (chronotropy), ↑Contractility (inotropy), significant ↓↓SVR (vasodilation from β2). | Symptomatic bradycardia refractory to other treatments (e.g., atropine, pacing), AV block (temporary measure), Torsades de Pointes (shortens QT), bronchospasm (rarely). | Profound tachycardia, arrhythmias, hypotension (due to vasodilation), myocardial ischemia. Limited use.                    |
| **Digoxin**      | Na⁺/K⁺-ATPase inhibitor. Increases intracellular Ca²⁺.    | Mild positive inotrope. Negative chronotrope (slows AV conduction). | Atrial fibrillation/flutter (rate control - less used acutely in ICU vs beta-blockers/CCBs), chronic systolic HF (less common now). | Narrow therapeutic window. Risk of toxicity (N/V, visual changes - yellow halos, arrhythmias - PVCs, VT, AV block). Monitor levels, K⁺, Mg²⁺, renal function. |

### Sedatives & Analgesics
Essential for patient comfort, anxiolysis, amnesia, and to facilitate mechanical ventilation and procedures. Goal is often light sedation (patient calm and arousable, e.g., RASS -1 to 0) when clinically appropriate, using validated sedation scales. "Analgesia-first" sedation (treat pain before sedating) is a key principle.

#### Sedatives

| Drug Name                     | Class / Mechanism                                              | Key Features / Effects                                                                   | Common ICU Uses                                                    | Key Risks / Considerations                                                                                                                               |
|-------------------------------|----------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Propofol (Diprivan)**       | GABA-A receptor agonist (potentiates inhibitory effects of GABA). Lipid emulsion. | Rapid onset (30-60s), short duration of action (5-10 min after infusion stopped). ↓Cerebral metabolic rate (CMRO2), ↓ICP, anticonvulsant, antiemetic properties. | Sedation for mechanically ventilated patients (short to medium term), procedural sedation, status epilepticus. | Hypotension (vasodilation, myocardial depression), bradycardia, respiratory depression/apnea, Propofol Infusion Syndrome (PRIS - rare but fatal: metabolic acidosis, rhabdo, hyperkalemia, renal/cardiac failure, with high doses/prolonged use), hypertriglyceridemia, pain on injection (can be reduced with lidocaine). Green urine (benign). |
| **Dexmedetomidine (Precedex)**| Highly selective α2-adrenergic agonist in CNS.                 | "Cooperative sedation" (patient sedated but easily arousable, can interact), analgesia-sparing, anxiolysis, minimal respiratory depression. May reduce delirium. | Light to moderate sedation for mechanically ventilated or non-intubated patients, weaning from ventilation, delirium prevention/management. | Bradycardia, hypotension (can cause initial transient hypertension with loading dose due to peripheral α2 agonism). Not suitable for deep sedation or if NMBAs used. |
| **Benzodiazepines (Midazolam, Lorazepam, Diazepam)** | GABA-A receptor agonists.                                        | Anxiolysis, amnesia, sedation, anticonvulsant, muscle relaxation.                          | Agitation, alcohol withdrawal syndrome, status epilepticus, procedural sedation (less favored for routine ICU sedation due to delirium risk). | Delirium (strong association), respiratory depression, hypotension, tolerance, withdrawal syndrome with prolonged use. Accumulation, especially Lorazepam (propylene glycol toxicity with high doses/renal impairment) and Diazepam (long-acting metabolites). Midazolam is short-acting but active metabolites can accumulate in renal failure. |
| **Ketamine**                  | NMDA receptor antagonist. Dissociative anesthetic.             | Analgesia, amnesia, sedation. Preserves respiratory drive and pharyngeal reflexes (at lower doses). Bronchodilation. Sympathomimetic effects (↑HR, ↑BP). | Sedation (often as adjunct), analgesia (especially for neuropathic/opioid-tolerant pain), procedural sedation, status asthmaticus, rapid sequence intubation (RSI). | Emergence reactions (hallucinations, delirium, vivid dreams - can be reduced with benzodiazepines), ↑secretions (may need antisialagogue like glycopyrrolate), ↑HR, ↑BP. May ↑ICP (controversial, use with caution in TBI if ICP is a concern). |

#### Analgesics

| Drug Name                          | Class / Mechanism                                                                | Key Features / Effects                                                       | Common ICU Uses                                                | Key Risks / Considerations                                                                                                                               |
|------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Opioids (Fentanyl, Hydromorphone, Morphine, Remifentanil)** | Mu, Kappa, Delta opioid receptor agonists (primarily Mu for analgesia). | Potent analgesia. Sedation (dose-dependent), euphoria, cough suppression.      | Management of acute pain (nociceptive, procedural), adjunct to sedation. | Respiratory depression, hypotension (esp. morphine due to histamine release), sedation/oversedation, N/V, constipation, ileus, pruritus, tolerance, physical dependence, withdrawal with abrupt cessation. Fentanyl: rapid onset, short duration (bolus), lipophilic (accumulates). Hydromorphone: potent, intermediate duration. Morphine: longer duration, active metabolite (morphine-6-glucuronide) accumulates in renal failure (risk of prolonged effects/narcosis). Remifentanil: ultra-short acting (metabolized by plasma esterases), used as continuous infusion, no accumulation. Chest wall rigidity with rapid high-dose Fentanyl. |
| **Acetaminophen (Paracetamol) (IV/PO/PR)** | Inhibits prostaglandin synthesis in CNS (COX inhibitor, primarily central). | Analgesia (mild-moderate pain), antipyretic. Opioid-sparing.                  | Mild to moderate pain, fever. Part of multimodal analgesia.      | Hepatotoxicity with overdose (max dose 4g/day for adults with normal liver function; lower in liver disease, chronic alcohol use, malnutrition). Monitor LFTs. |
| **NSAIDs (e.g., Ketorolac IV/IM, Ibuprofen IV/PO)** | Non-selective COX-1 & COX-2 inhibitors (inhibit prostaglandin synthesis). | Analgesia (mild-moderate pain), anti-inflammatory, antipyretic. Opioid-sparing. | Mild to moderate pain, inflammation. Part of multimodal analgesia. | GI bleeding/ulceration, renal dysfunction (AKI via afferent arteriole constriction), platelet inhibition (bleeding risk), bronchospasm (in aspirin-sensitive asthma), cardiovascular risks (MI, stroke with chronic use of some NSAIDs). Ketorolac: limit use to ≤5 days. Avoid in renal impairment, active PUD, high bleeding risk. |
| **Gabapentinoids (Gabapentin, Pregabalin)** | Bind to alpha-2-delta subunit of voltage-gated calcium channels in CNS.      | Neuropathic pain, anxiolysis, anticonvulsant. Opioid-sparing (adjunct).     | Neuropathic pain, chronic pain. May be used for anxiety or as adjunct for acute pain. | Sedation, dizziness, ataxia, peripheral edema. Require renal dose adjustment. Potential for misuse/dependence.                                            |
| **Lidocaine (IV infusion)**        | Sodium channel blocker.                                                          | Analgesia (neuropathic, visceral), antiarrhythmic, anti-inflammatory. Opioid-sparing. | Refractory neuropathic pain, post-operative pain (adjunct).        | CNS toxicity (paresthesias, tinnitus, seizures), cardiotoxicity (bradycardia, hypotension, arrhythmias) at high doses/rapid infusion. Monitor for signs of toxicity. |

### Neuromuscular Blocking Agents (NMBAs / Paralytics)
Used to induce skeletal muscle paralysis. **Crucially, patients MUST have adequate and continuous sedation and analgesia when paralyzed, as NMBAs do not provide sedation or analgesia.** Monitor depth of paralysis with Train-of-Four (TOF) stimulation (target 1-2 twitches out of 4 on ulnar nerve/orbicularis oculi).
*   **Indications**: Facilitate endotracheal intubation, improve patient-ventilator synchrony in severe ARDS, reduce oxygen consumption (e.g., severe shivering), manage refractory increased ICP, facilitate certain procedures.
*   **Complications**: Prolonged muscle weakness/ICU-Acquired Weakness (Acute Quadriplegic Myopathy - esp. with corticosteroids), risk of corneal abrasions (provide eye care), DVT (immobility), patient awareness if inadequately sedated (psychological trauma).

| Drug Name              | Class             | Onset/Duration      | Metabolism / Elimination                                      | Key Considerations                                                                                                                                |
|------------------------|-------------------|---------------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| **Succinylcholine**    | Depolarizing      | Rapid (30-60s) / Ultra-short (5-10 min) | Plasma cholinesterase (pseudocholinesterase).                 | Primarily for RSI. Risks: hyperkalemia (esp. in burn/crush injury, neuromuscular disease, renal failure - can cause cardiac arrest), malignant hyperthermia (rare), ↑ICP/IOP/IGP, bradycardia (esp. in children or with repeat doses), muscle fasciculations/myalgias. |
| **Rocuronium**         | Non-depolarizing (Aminosteroid) | Rapid (1-2 min) / Intermediate (30-90 min) | Primarily hepatic metabolism, some renal excretion.             | RSI (alternative to succinylcholine, esp. if contraindications), maintenance of paralysis (infusion or bolus). Reversible with Sugammadex (specific binding agent). |
| **Vecuronium**         | Non-depolarizing (Aminosteroid) | Intermediate (2-4 min) / Intermediate (30-60 min) | Primarily hepatic metabolism, active metabolites renally excreted. | Maintenance of paralysis. Accumulates in renal/hepatic failure, leading to prolonged paralysis.                                                     |
| **Cisatracurium (Nimbex)** | Non-depolarizing (Benzylisoquinolinium) | Intermediate (3-5 min) / Intermediate (45-75 min) | Hofmann elimination (pH/temperature dependent spontaneous degradation in plasma), ester hydrolysis. | Preferred in renal/hepatic failure (organ-independent elimination). Less histamine release than other benzylisoquinoliniums (e.g., atracurium). Laudanosine (metabolite) can accumulate in renal failure (theoretical CNS effects, rarely clinically significant). |

### Antimicrobials
Selection based on suspected/confirmed pathogen, site of infection, local resistance patterns (antibiogram), patient factors (allergies, organ function, comorbidities), and severity of illness.
*   **Empiric Therapy**: Broad-spectrum antibiotics initiated promptly for suspected severe infections (e.g., sepsis) before culture results are available.
*   **De-escalation**: Narrowing antibiotic spectrum once pathogen and sensitivities are known, to reduce resistance development and side effects.
*   **Pharmacokinetics (PK) / Pharmacodynamics (PD)**: Crucial in critical illness due to altered PK (e.g., increased volume of distribution, altered renal/hepatic clearance).
    *   **Time-dependent killing (e.g., Beta-lactams)**: Efficacy related to time drug concentration remains above Minimum Inhibitory Concentration (MIC). May require more frequent dosing or continuous/extended infusions.
    *   **Concentration-dependent killing (e.g., Aminoglycosides, Fluoroquinolones)**: Efficacy related to peak concentration (Cmax/MIC) or Area Under Curve (AUC/MIC). May use once-daily high dosing for aminoglycosides.
*   **Therapeutic Drug Monitoring (TDM)**: For drugs with narrow therapeutic windows or variable PK (e.g., Vancomycin - trough levels or AUC/MIC; Aminoglycosides - peak/trough levels).
*   **Common Classes & Examples**:
    *   **Beta-lactams**: Penicillins (Piperacillin-Tazobactam), Cephalosporins (Ceftriaxone, Cefepime), Carbapenems (Meropenem, Imipenem-Cilastatin), Monobactams (Aztreonam).
    *   **Glycopeptides**: Vancomycin (for MRSA, C. difficile PO). Risks: nephrotoxicity, ototoxicity, Red Man Syndrome (infusion-related reaction).
    *   **Oxazolidinones**: Linezolid (MRSA, VRE). Risks: myelosuppression (thrombocytopenia), serotonin syndrome with SSRIs, peripheral/optic neuropathy with prolonged use.
    *   **Lipopeptides**: Daptomycin (MRSA, VRE - not for pneumonia as inactivated by surfactant). Risks: myopathy (monitor CPK).
    *   **Fluoroquinolones**: Ciprofloxacin, Levofloxacin, Moxifloxacin. Risks: QTc prolongation, tendonitis/rupture, C. difficile, CNS effects.
    *   **Aminoglycosides**: Gentamicin, Tobramycin, Amikacin. Risks: nephrotoxicity, ototoxicity.
    *   **Macrolides**: Azithromycin, Erythromycin. Risks: QTc prolongation, GI upset, drug interactions (CYP inhibitors).
    *   **Tetracyclines**: Doxycycline, Tigecycline.
    *   **Lincosamides**: Clindamycin. Risk of C. difficile.
    *   **Metronidazole**: Anaerobic and protozoal coverage.
*   **Antifungals (e.g., Fluconazole, Voriconazole, Echinocandins like Caspofungin/Micafungin, Amphotericin B)**: For suspected/confirmed fungal infections.
*   **Antivirals (e.g., Acyclovir, Ganciclovir, Oseltamivir, Remdesivir)**: For specific viral infections.

Understanding medication compatibility, dilution requirements, infusion rates, and monitoring parameters for each drug is essential for ICU nurses. Always consult pharmacy and institutional guidelines.`,
    categoryType: 'Topic',
    keywordsForImage: 'medication pills pharmacy',
  },
  {
    id: 'ventilator-management',
    slug: 'ventilator-management',
    title: 'Advanced Ventilator Management',
    summary: 'Principles and practices of mechanical ventilation, including modes, settings, troubleshooting, and liberation strategies.',
    content: `## General Overview

Mechanical ventilation is a life-sustaining intervention used in the ICU to support patients with respiratory failure. Its primary goals are to improve gas exchange (oxygenation and carbon dioxide elimination), reduce the work of breathing, reverse respiratory muscle fatigue, and allow the underlying lung pathology to heal. Effective ventilator management requires a deep understanding of respiratory physiology, ventilator mechanics, and patient-ventilator interactions.

## In-Depth ICU Considerations

### Key Ventilator Settings & Parameters

| Setting/Parameter                | Description & Typical Range/Target                                                                        | Purpose & Clinical Significance                                                                                                                                  |
|----------------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **FiO2 (Fraction of Inspired Oxygen)** | 0.21 (room air) - 1.0. Titrate to maintain SpO2 >90-92% (or PaO2 55-80 mmHg, or as per specific goals). | Optimize arterial oxygen content. Use lowest effective FiO2 to avoid oxygen toxicity (absorption atelectasis, oxidative stress).                                         |
| **PEEP (Positive End-Expiratory Pressure)** | Usually 5-10 cmH2O; can be higher in ARDS (up to 20-24 cmH2O or more, guided by PEEP titration).       | Prevents alveolar collapse at end-expiration (maintains functional residual capacity - FRC), improves oxygenation (recruits alveoli), reduces atelectrauma. Optimal PEEP balances recruitment against overdistension and hemodynamic compromise. |
| **Tidal Volume (VT)**            | Target 6-8 mL/kg Predicted Body Weight (PBW) for most patients; **4-6 mL/kg PBW for ARDS (lung protective strategy)**. | Volume of air delivered with each breath. PBW calculated based on sex and height.                                                                                     |
| **Respiratory Rate (RR or f)**   | Usually 10-20 breaths/min for adults. Adjusted based on target PaCO2/pH and minute ventilation (VE).         | Controls minute ventilation (VE = RR x VT) and thus CO2 elimination.                                                                                                |
| **Minute Ventilation (VE)**      | VE = RR x VT. Normal: 5-10 L/min.                                                                         | Total volume of air moved in/out of lungs per minute.                                                                                                                  |
| **Inspiratory Time (Ti)**        | Typically 0.8-1.2 seconds for adults.                                                                     | Duration of the inspiratory phase of each breath.                                                                                                                      |
| **I:E Ratio**                    | Typically 1:2 to 1:3 for adults. Longer expiratory time (e.g., 1:4, 1:5) for obstructive lung disease (asthma, COPD) to allow complete exhalation and prevent air trapping. Inverse ratio (e.g., 2:1) sometimes used in severe ARDS (with APRV or specific PCV strategies). | Ratio of inspiratory time to expiratory time.                                                                                                                          |
| **Inspiratory Pressure (Pinsp or PIP - in PCV modes)** | Pressure delivered during inspiration in Pressure Control modes. Target lowest effective pressure to achieve desired VT. | Limits peak airway pressure during PCV.                                                                                                                                |
| **Pressure Support (PS or Psupp)** | Usually 5-20 cmH2O above PEEP during spontaneous breaths (e.g., in PSV or SIMV spontaneous breaths).       | Assists patient's spontaneous inspiratory effort, helps overcome resistance of ETT and ventilator circuit, reduces work of breathing.                                |
| **Flow Rate (Peak Inspiratory Flow - in VCV modes)** | 40-100 L/min (typically 60 L/min). Adjusted for patient comfort and to achieve desired Ti and I:E ratio. | Speed at which the tidal volume is delivered in Volume Control modes. Higher flow = shorter Ti.                                                                       |
| **Flow Waveform (in VCV modes)** | **Square (Constant Flow)**: Delivers constant flow throughout inspiration. **Descending Ramp (Decelerating Flow)**: Flow is highest at start of inspiration and decreases. | Pattern of flow delivery. Descending ramp may improve gas distribution, reduce PIP, and improve comfort for some patients.                                              |
| **Trigger Sensitivity**          | **Pressure Trigger**: -0.5 to -2 cmH2O below PEEP. **Flow Trigger**: 1-3 L/min.                           | Effort required by patient to initiate a ventilator-assisted breath. Should be sensitive enough to detect patient effort but not so sensitive as to cause auto-triggering. |
| **Peak Inspiratory Pressure (PIP or Ppeak)** | Highest pressure reached in airways during inspiration (dynamic pressure).                             | Reflects airway resistance (e.g., bronchospasm, secretions, ETT kink) + elastic recoil of lung/chest wall. Keep <35-40 cmH2O if possible.                             |
| **Plateau Pressure (Pplat)**     | Static pressure measured during an end-inspiratory pause (0.5-1 sec).                                       | Reflects alveolar pressure (static compliance). **Key parameter for lung protection: keep <30 cmH2O** to minimize barotrauma/volutrauma.                             |
| **Driving Pressure (ΔP)**        | ΔP = Pplat - Total PEEP.                                                                                  | Pressure distending the lungs. **Strongly associated with ARDS mortality; aim for <15 cmH2O.**                                                                     |
| **Auto-PEEP (Intrinsic PEEP / Dynamic Hyperinflation)** | Unintentional PEEP due to incomplete exhalation (air trapping).                                         | Measured with an end-expiratory hold maneuver. Increases WOB, risk of barotrauma, hemodynamic compromise. Common in obstructive diseases or high VE.                |
| **Static Compliance (Cst)**      | Cst = VT / (Pplat - Total PEEP). Normal: 50-100 mL/cmH2O.                                                  | Measure of lung/chest wall distensibility. ↓Cst (stiff lungs) in ARDS, pneumonia, pulmonary edema, atelectasis, pneumothorax, obesity, abdominal distension.         |
| **Airway Resistance (Raw)**      | Raw = (PIP - Pplat) / Inspiratory Flow. Normal: <10-15 cmH2O/L/s.                                          | Measure of opposition to airflow. ↑Raw in bronchospasm, secretions, ETT obstruction/kinking, airway edema.                                                           |

### Common Ventilator Modes

| Mode                                     | Description                                                                                                                               | Key Features / Advantages / Disadvantages                                                                                                                                                                                             |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Volume Control Ventilation (VCV / AC-VC - Assist-Control Volume Control)** | Delivers a preset tidal volume (VT) for every breath, whether patient-triggered (assisted) or ventilator-initiated (controlled). Inspiratory pressure (PIP) varies with lung mechanics (compliance, resistance). | **Guarantees minute ventilation.** Pressure can become excessively high if compliance decreases or resistance increases (risk of barotrauma). Patient can trigger breaths above set rate.                                                         |
| **Pressure Control Ventilation (PCV / AC-PC - Assist-Control Pressure Control)** | Delivers a preset inspiratory pressure (Pinsp) for a set inspiratory time (Ti). Tidal volume (VT) varies with lung mechanics and patient effort.                                                                 | **Limits peak airway pressure** (protects against barotrauma). VT can be variable, potentially leading to hypo/hyperventilation if lung mechanics change or patient effort varies. Patient can trigger breaths above set rate.                   |
| **Pressure Support Ventilation (PSV)**   | Patient triggers all breaths. Ventilator provides a set level of inspiratory pressure support (PS) to assist spontaneous effort. Patient controls RR, Ti, inspiratory flow, and VT. Requires reliable respiratory drive.                         | Used for weaning/spontaneous breathing trials (SBTs). Improves comfort, reduces WOB. No backup rate (unless combined with apnea ventilation).                                                                                               |
| **Synchronized Intermittent Mandatory Ventilation (SIMV-VC or SIMV-PC)** | Delivers a set number of mandatory breaths (either VC or PC) at set intervals. Patient can breathe spontaneously between mandatory breaths, often with added pressure support (PS) for the spontaneous breaths. | Allows patient to contribute to work of breathing. Mandatory breaths are synchronized with patient effort if possible. May prolong weaning compared to PSV or AC modes if set inappropriately (can lead to high WOB for spontaneous breaths). |
| **CPAP (Continuous Positive Airway Pressure)** | Provides a constant level of positive pressure throughout the entire respiratory cycle (inspiration and expiration) during spontaneous breathing. Often used with PSV (CPAP level = PEEP level with PS added). | Maintains alveolar recruitment, improves FRC and oxygenation. Used for OSA, cardiogenic pulmonary edema, weaning.                                                                                                                           |
| **PRVC (Pressure Regulated Volume Control)** / VC+ (Volume Control Plus) / AVAPS (Average Volume Assured Pressure Support) - (Mode names vary by ventilator) | A dual-control mode: Volume-targeted, pressure-limited. Ventilator delivers a target VT using the lowest possible inspiratory pressure, adjusting pressure breath-by-breath based on previous breath's VT and compliance. Operates like PCV but with an adaptive pressure target. | Combines benefits of VC (guaranteed VT) and PC (pressure limitation). May improve comfort and synchrony.                                                                                                                             |
| **APRV (Airway Pressure Release Ventilation)** / BiLevel / BiVent | Provides two levels of CPAP: a high pressure (Phigh) held for a long duration (Thigh), with brief, intermittent releases to a lower pressure (Plow) for a short duration (Tlow) to facilitate CO2 clearance. Patient can breathe spontaneously at both Phigh and Plow. Essentially a form of inverse ratio PCV. | Used in severe ARDS for alveolar recruitment and oxygenation. Aims to maintain high mean airway pressure. Can be complex to manage. Spontaneous breathing is encouraged.                                                                           |
| **ASV (Adaptive Support Ventilation)**   | A highly automated mode that adjusts settings (RR, VT, Pinsp) based on calculated patient lung mechanics (using Otis formula for optimal WOB) and patient effort to achieve a clinician-set target minute ventilation (e.g., % of predicted). | Aims to optimize ventilation pattern, minimize WOB, and facilitate weaning. Requires careful monitoring and understanding by clinician.                                                                                                       |

### Ventilator Waveform Analysis (Scalars: Pressure, Flow, Volume vs. Time)
Essential for assessing patient-ventilator interaction, lung mechanics, and troubleshooting.

#### Pressure-Time Waveform
*   **VCV**: Rises during inspiration to PIP, then drops to PEEP. A distinct Pplat is visible during an inspiratory pause maneuver.
    *   *Interpretation*: If PIP is significantly higher than Pplat, indicates high airway resistance. If PIP and Pplat are both high and close together, indicates poor lung compliance.
*   **PCV**: Rapid rise to the set inspiratory pressure (Pinsp), maintained for Ti, then drops to PEEP.
    *   *Interpretation*: Waveform should be rectangular. If pressure "droops" or "sags" during inspiration, it suggests patient inspiratory effort is exceeding the set pressure or the delivered flow from the ventilator (flow starvation).

#### Flow-Time Waveform
*   **VCV (Square Flow Pattern)**: Inspiratory flow is constant (rectangular shape), then abruptly drops to zero at end-inspiration. Expiratory flow is passive, decelerating (curved shape).
*   **VCV (Descending Ramp Flow Pattern)**: Inspiratory flow starts high and linearly decelerates to zero (or near zero) at end-inspiration. Expiratory flow is passive, decelerating.
*   **PCV**: Inspiratory flow is high initially (driven by pressure difference), then decelerates as alveolar pressure equilibrates with set Pinsp. Ideally, inspiratory flow should reach zero (or close to it) just before inspiration ends (if Ti is adequate). Expiratory flow is passive, decelerating.
*   **Common Findings & Interpretations**:
    *   **Flow Starvation (Air Hunger)**: In VCV (square flow), if inspiratory flow waveform appears "scooped" or concave, it suggests patient demand exceeds delivered flow. In PCV, if inspiratory flow rapidly drops to zero and stays there for a significant portion of Ti while the patient is still making effort, or if the pressure waveform sags, it indicates insufficient flow/pressure. *Action: Increase flow rate (VCV), increase Pinsp or shorten Ti (PCV if flow reaches zero too early and Pplat is acceptable).*
    *   **Auto-PEEP (Air Trapping/Dynamic Hyperinflation)**: Expiratory flow does not return to baseline (zero) before the next breath begins. Indicates incomplete exhalation. *Action: Reduce RR, reduce VT, shorten Ti (to lengthen Te), treat bronchospasm, reduce external PEEP if appropriate and auto-PEEP is significant.*
    *   **Bronchospasm/Increased Airway Resistance**: Peak expiratory flow rate is reduced, and expiratory flow is prolonged (takes longer to return to baseline).
    *   **Active Expiration**: Patient actively exhaling against the ventilator, seen as an abrupt spike or irregularity in the expiratory flow waveform.
    *   **Double Triggering**: Patient's inspiratory effort outlasts the ventilator's set Ti, leading to a second ventilator breath being delivered immediately after the first. Often due to insufficient VT or Ti.

#### Volume-Time Waveform
*   Smooth rise during inspiration to the set VT (in VCV) or the delivered VT (in PCV), then a smooth fall during exhalation back to baseline (zero, representing FRC).
*   **Common Findings & Interpretations**:
    *   **Air Leak**: Expiratory portion of the volume curve does not return to baseline (zero), or measured exhaled VT is consistently less than inhaled VT. Indicates a leak in the ventilator circuit, around the ETT cuff, or a bronchopleural fistula.

### Monitoring & Troubleshooting
*   **Patient Assessment**: Always assess the patient first. Look for signs of distress, changes in vital signs, chest movement, breath sounds, SpO2.
*   **Ventilator Circuit**: Check for disconnections, kinks, water/condensation, ETT position and cuff leak.
*   **Ventilator Settings & Alarms**: Verify settings are appropriate. Understand and respond to alarms promptly.

#### Common Ventilator Alarms

| Alarm Type              | Possible Causes                                                                                                                                  | Initial Actions (Always Assess Patient First!)                                                                                                                             |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **High Pressure Alarm** (PIP limit exceeded) | Kinked tube, secretions/mucus plug (need suction), patient biting ETT, bronchospasm, pneumothorax, worsening ARDS/pulmonary edema, patient-ventilator dyssynchrony (coughing, fighting ventilator), water in circuit, mainstem intubation. | Disconnect patient from ventilator and manually ventilate with bag-valve-mask if severe distress. Suction ETT, check for kinks/water, ensure ETT patency/position, assess breath sounds, provide sedation/analgesia if needed, consider bronchodilator. Obtain CXR if pneumothorax suspected. |
| **Low Pressure/Low Minute Ventilation/Low Tidal Volume Alarm** | Disconnection (patient from ventilator, circuit components loose), ETT cuff leak or rupture, circuit leak, ETT displacement/extubation, apnea or insufficient respiratory effort (if not in full support mode). | Check all connections from ventilator to patient. Check ETT cuff pressure and listen for leak. Assess patient's respiratory effort and level of consciousness. If disconnected, reconnect immediately. |
| **Apnea Alarm**         | Insufficient patient respiratory effort (in spontaneous/support modes like PSV, CPAP), oversedation, neurological impairment, respiratory muscle fatigue.                                                                    | Stimulate patient. Ensure adequate ventilatory support (may need to switch to a control mode or adjust settings). Review sedation/analgesia. Assess for underlying causes.   |
| **High Respiratory Rate Alarm** | Pain, anxiety, agitation, hypoxia, hypercapnia, metabolic acidosis, fever, patient-ventilator dyssynchrony, inappropriate ventilator settings (e.g., too low VT or flow).                                             | Assess patient for cause of tachypnea (ABG, vital signs, comfort, sedation level). Address underlying cause. Optimize ventilator settings to improve synchrony.             |
| **Low PEEP/CPAP Alarm** | Circuit leak, disconnection, inadequate flow from ventilator to maintain PEEP.                                                                     | Check circuit integrity and connections. Ensure ventilator is functioning correctly.                                                                                     |

### ARDS Management Strategies on Ventilator
*   **Low Tidal Volume Ventilation (LTVV)**: 4-6 mL/kg PBW.
*   **Plateau Pressure <30 cmH2O**.
*   **Driving Pressure (ΔP = Pplat - Total PEEP) <15 cmH2O**.
*   **Optimize PEEP**: Use PEEP/FiO2 tables (e.g., ARDSNet low or high PEEP/FiO2 tables) or perform decremental PEEP titration to find "best PEEP" (balances alveolar recruitment, oxygenation, and minimizes overdistension/hemodynamic compromise).
*   **Permissive Hypercapnia**: Allow PaCO2 to rise (typically maintaining arterial pH >7.20-7.25) as a consequence of LTVV to protect lungs, provided there are no contraindications (e.g., severe metabolic acidosis, increased ICP).
*   **Prone Positioning**: For moderate to severe ARDS (PaO2/FiO2 <150 mmHg on PEEP ≥5 cmH2O and FiO2 ≥0.6). Typically for 12-16 hours per day. Improves oxygenation by recruiting dorsal lung regions, improving V/Q matching.
*   **Conservative Fluid Management**: After initial resuscitation, aim for even or negative fluid balance in ARDS patients without shock, to reduce pulmonary edema.
*   **Consider Neuromuscular Blocking Agents (NMBAs)**: For early (first 48h) severe ARDS (PaO2/FiO2 <150) to improve patient-ventilator synchrony, reduce oxygen consumption, and potentially improve outcomes. Requires deep sedation and careful monitoring.
*   **Recruitment Maneuvers (RMs)**: Controversial. Brief, sustained increases in airway pressure to reopen collapsed alveoli. Potential benefits but also risks (barotrauma, hemodynamic instability). If used, monitor closely.

### Weaning and Liberation from Mechanical Ventilation
Process of discontinuing mechanical ventilation and removing the artificial airway.
*   **Criteria for Weaning Readiness**:
    *   Resolution or significant improvement of underlying cause of respiratory failure.
    *   Adequate oxygenation (e.g., PaO2/FiO2 >150-200 on PEEP ≤5-8 cmH2O and FiO2 ≤0.4-0.5).
    *   Hemodynamic stability (minimal or no vasopressors).
    *   Afebrile or fever controlled.
    *   Adequate mental status (awake, alert, cooperative, able to follow commands).
    *   Adequate cough and ability to clear secretions.
    *   No major procedures planned.
*   **Daily Spontaneous Awakening Trials (SATs)**: Interrupting or reducing sedation to assess neurological status and readiness for SBT.
*   **Daily Spontaneous Breathing Trials (SBTs)**: Patient breathes with minimal or no ventilator support (e.g., low PSV ~5-7 cmH2O, CPAP ~5 cmH2O, or T-piece trial) for 30-120 minutes.
    *   **SBT Failure Criteria**: Tachypnea (RR >35/min), hypoxemia (SpO2 <90%), tachycardia (HR >140/min or >20% increase), bradycardia, arrhythmias, hypertension or hypotension, agitation, anxiety, diaphoresis, altered mental status, signs of increased WOB (accessory muscle use, paradoxical breathing).
*   **Objective Weaning Parameters (use in conjunction with clinical assessment)**:
    *   **Rapid Shallow Breathing Index (RSBI)**: RR / VT (in Liters) during SBT. RSBI <105 breaths/min/L predicts weaning success.
    *   **Negative Inspiratory Force (NIF) / Maximal Inspiratory Pressure (MIP)**: > -20 to -30 cmH2O.
    *   **Vital Capacity (VC)**: >10-15 mL/kg PBW.
    *   **Minute Ventilation (VE)**: <10-12 L/min while maintaining normal PaCO2.
*   **Extubation Criteria**: Successful SBT, effective cough, patent airway (e.g., cuff leak test positive), adequate mentation.
*   **Post-Extubation Care**: Monitor closely for respiratory distress, stridor (may need racemic epinephrine or heliox), inability to clear secretions. Non-invasive ventilation (NIV) may be used post-extubation in select high-risk patients to prevent reintubation.`,
    categoryType: 'Topic',
    keywordsForImage: 'ICU ventilator screen patient',
  },
  {
    id: 'electrolyte-imbalances',
    slug: 'electrolyte-imbalances',
    title: 'Electrolyte Imbalances in the ICU',
    summary: 'Recognition and management of common and critical electrolyte disturbances like hyperkalemia, hyponatremia, and hypomagnesemia in the ICU setting.',
    categoryType: 'Topic',
    keywordsForImage: 'electrolyte panel ICU',
    content: `## General Overview
Electrolytes are minerals in the body that have an electric charge. They are essential for many bodily functions, including nerve and muscle function, hydration, blood pH, and blood pressure. In critically ill patients, electrolyte imbalances are common due to underlying disease states, organ dysfunction (especially renal), medications, and therapeutic interventions (e.g., IV fluids, diuretics, RRT). Prompt recognition and management are crucial to prevent severe complications.

## In-Depth ICU Considerations

This section will focus on the most frequently encountered and clinically significant electrolyte imbalances in the ICU: Potassium, Sodium, Calcium, Magnesium, and Phosphate.

### Potassium (K⁺)
Normal Range: 3.5 - 5.0 mEq/L. Critical for neuromuscular function, cardiac excitability, and cellular metabolism.

#### Hyperkalemia (Serum K⁺ >5.0-5.5 mEq/L)
*   **Causes**:
    *   **Decreased Excretion**: Acute Kidney Injury (AKI), Chronic Kidney Disease (CKD), adrenal insufficiency (Addison's disease, hypoaldosteronism), K⁺-sparing diuretics (spironolactone, amiloride), ACE inhibitors, ARBs, NSAIDs.
    *   **Increased Intake**: Excessive K⁺ administration (IV or PO), salt substitutes.
    *   **Shift from Intracellular to Extracellular Space**: Acidosis (metabolic or respiratory), tissue breakdown (rhabdomyolysis, tumor lysis syndrome, burns, crush injuries, hemolysis), insulin deficiency (DKA), beta-blocker overdose, digoxin toxicity, succinylcholine.
    *   **Pseudohyperkalemia**: Hemolysis during blood draw, thrombocytosis, leukocytosis.
*   **Clinical Manifestations**:
    *   **Muscular**: Weakness (can progress to flaccid paralysis), paresthesias, fatigue.
    *   **Cardiac (Most Serious)**: Arrhythmias, palpitations.
        *   **ECG Changes (Progressive)**:
            1.  **Peaked T waves** (earliest sign, often tall and narrow).
            2.  Prolonged PR interval.
            3.  Loss of P waves.
            4.  Widening of QRS complex (can merge with T wave to form sine wave pattern).
            5.  Ventricular fibrillation (VFib), asystole.
    *   **GI**: Nausea, vomiting, diarrhea, abdominal cramping.
*   **Management (Urgency based on K⁺ level and ECG changes)**:
    1.  **Stabilize Cardiac Membrane (if ECG changes or K⁺ >6.5-7.0 mEq/L)**:
        *   **Calcium Gluconate 10%**: 10-20 mL IV over 2-5 minutes (onset <5 min, duration 30-60 min). **Does NOT lower serum K⁺**, but antagonizes cardiac effects. Calcium Chloride can be used (contains 3x more elemental Ca²⁺ per gram, preferred in cardiac arrest, but more irritating to veins).
    2.  **Shift K⁺ Intracellularly (Temporary Measures)**:
        *   **Insulin (Regular) + Glucose**: 10 units IV Regular Insulin with 25-50g Dextrose (e.g., D50W) IV over 15-30 min (onset 15-30 min, duration 4-6h). Monitor glucose.
        *   **Beta-2 Agonists**: Albuterol 10-20 mg nebulized over 10 min (onset 30 min, duration 2-4h). Use with caution in cardiac patients (tachycardia).
        *   **Sodium Bicarbonate**: 1 amp (50 mEq) IV over 5 min if severe metabolic acidosis (pH <7.1-7.2) coexists (onset 30-60 min, duration variable). Controversial, less effective if no acidosis.
    3.  **Remove K⁺ from Body (Definitive Measures)**:
        *   **Loop Diuretics**: Furosemide 20-80 mg IV (if renal function preserved).
        *   **Cation-Exchange Resins**: Sodium Polystyrene Sulfonate (Kayexalate) PO or PR (onset hours to days, risk of colonic necrosis, esp. with sorbitol). Patiromer or Sodium Zirconium Cyclosilicate (newer, more selective, better tolerated).
        *   **Hemodialysis/CRRT**: Most effective and rapid method, especially in AKI/CKD or severe/refractory hyperkalemia.
    4.  Discontinue exogenous K⁺ sources. Identify and treat underlying cause.

#### Hypokalemia (Serum K⁺ <3.5 mEq/L)
*   **Causes**:
    *   **Decreased Intake**: Malnutrition, NPO status.
    *   **Increased Loss**:
        *   **GI Losses**: Diarrhea (most common GI cause), vomiting, NG suction, laxative abuse, fistulas.
        *   **Renal Losses**: Diuretics (loop and thiazide), hyperaldosteronism, Cushing's syndrome, renal tubular acidosis (RTA), hypomagnesemia (impairs K⁺ reabsorption).
        *   **Skin Losses**: Profuse sweating (rarely significant alone).
    *   **Shift from Extracellular to Intracellular Space**: Alkalosis (metabolic or respiratory), insulin administration, beta-2 agonist use, refeeding syndrome, hypothermic diuresis, treatment of pernicious anemia.
*   **Clinical Manifestations**:
    *   **Muscular**: Weakness, fatigue, muscle cramps, myalgias, rhabdomyolysis (severe).
    *   **Cardiac**: Arrhythmias (PVCs, VT, VFib), palpitations, potentiation of digoxin toxicity.
        *   **ECG Changes**: Flattened or inverted T waves, prominent U waves, ST segment depression, prolonged QT/QU interval.
    *   **GI**: Ileus, constipation, N/V.
    *   **Renal**: Polyuria, polydipsia (nephrogenic DI).
    *   **Metabolic**: Glucose intolerance.
*   **Management**:
    1.  **Oral K⁺ Replacement**: Preferred if mild-moderate and gut is functional (e.g., Potassium Chloride tablets/liquid).
    2.  **IV K⁺ Replacement**: For severe hypokalemia (K⁺ <2.5 mEq/L), symptomatic patients, or NPO.
        *   **Peripheral IV**: Max concentration typically 10-20 mEq/100 mL, max rate 10 mEq/hr (to avoid pain, phlebitis, and arrhythmias).
        *   **Central Line**: Max concentration up to 40 mEq/100 mL, max rate 20 mEq/hr (requires cardiac monitoring). Higher rates only in emergent situations (e.g., K⁺ <2.0 with arrhythmias).
        *   **Never IV Push Potassium.**
    3.  **Correct Hypomagnesemia**: Magnesium is a cofactor for Na⁺/K⁺-ATPase. K⁺ repletion is often ineffective if hypomagnesemia is not corrected concurrently.
    4.  Monitor serum K⁺ levels frequently during repletion. Identify and treat underlying cause.

### Sodium (Na⁺)
Normal Range: 135 - 145 mEq/L. Major extracellular cation, crucial for fluid balance, nerve impulse transmission, and muscle function. Disorders reflect water imbalance more than sodium imbalance.

#### Hyponatremia (Serum Na⁺ <135 mEq/L)
Classified by volume status (hypovolemic, euvolemic, hypervolemic).
*   **Causes**:
    *   **Hypovolemic**: Renal losses (diuretics, adrenal insufficiency, salt-wasting nephropathy), Extra-renal losses (GI - V/D, NG suction; skin - burns, excessive sweating) with hypotonic fluid replacement.
    *   **Euvolemic**: SIADH (most common euvolemic cause), psychogenic polydipsia, hypothyroidism, glucocorticoid deficiency, beer potomania, endurance exercise.
    *   **Hypervolemic**: Heart failure, cirrhosis, nephrotic syndrome, AKI/CKD (impaired water excretion).
    *   **Pseudohyponatremia**: Severe hyperlipidemia or hyperproteinemia (older lab methods). Hyperglycemia (osmotic shift of water into ECF, Na⁺ decreases ~1.6-2.4 mEq/L for every 100 mg/dL glucose increase above 100 mg/dL - "corrected sodium").
*   **Clinical Manifestations (depend on severity and acuity)**:
    *   **Mild (Na⁺ 130-134)**: Often asymptomatic.
    *   **Moderate (Na⁺ 120-129)**: Nausea, malaise, headache, lethargy, confusion.
    *   **Severe (Na⁺ <120 or rapid fall)**: Vomiting, seizures, coma, respiratory arrest, brainstem herniation (due to cerebral edema).
*   **Management (based on severity, symptoms, acuity, and volume status)**:
    1.  **Acute Symptomatic Hyponatremia (e.g., seizures, coma)**: Medical emergency.
        *   Administer **Hypertonic Saline (3% NaCl)** IV bolus (e.g., 100-150 mL over 10-20 min, may repeat) to rapidly increase serum Na⁺ by a few mEq/L to alleviate severe symptoms.
        *   Goal of correction: Raise serum Na⁺ by max 8-10 mEq/L in first 24h, and max 18 mEq/L in 48h to prevent **Osmotic Demyelination Syndrome (ODS)** / Central Pontine Myelinolysis (CPM).
    2.  **Chronic or Mild/Moderate Asymptomatic Hyponatremia**: Slower correction.
        *   **Hypovolemic**: Isotonic saline (0.9% NaCl) to restore volume.
        *   **Euvolemic (SIADH)**: Fluid restriction (e.g., 800-1000 mL/day), oral salt tablets, loop diuretics (with salt tabs), vasopressin receptor antagonists (vaptans - e.g., Tolvaptan PO, Conivaptan IV).
        *   **Hypervolemic**: Fluid and sodium restriction, diuretics, treat underlying cause (HF, cirrhosis, nephrosis).
    3.  Treat underlying cause. Monitor serum Na⁺, osmolality, urine Na⁺/osmolality, volume status closely.

#### Hypernatremia (Serum Na⁺ >145 mEq/L)
Indicates a free water deficit.
*   **Causes**:
    *   **Decreased Water Intake**: Impaired thirst (elderly, altered mental status), inability to access water (intubated/sedated patients).
    *   **Increased Water Loss**:
        *   **Renal Losses**: Diabetes Insipidus (DI - central or nephrogenic), osmotic diuresis (hyperglycemia, mannitol, high protein tube feeds).
        *   **Extra-renal Losses**: GI (diarrhea, vomiting), Skin (fever, burns, excessive sweating, open wounds), Respiratory (hyperventilation).
    *   **Excessive Sodium Intake/Retention**: Hypertonic saline administration, sodium bicarbonate infusion, hyperaldosteronism, Cushing's syndrome.
*   **Clinical Manifestations**:
    *   Thirst (if thirst mechanism intact), dry mucous membranes, decreased skin turgor.
    *   Neurological (due to brain cell shrinkage): Lethargy, weakness, irritability, confusion, twitching, seizures, coma.
*   **Management**:
    1.  **Replace Free Water Deficit**: Orally if possible, or IV with hypotonic fluids (D5W, 0.45% NaCl, 0.2% NaCl).
        *   Calculate free water deficit: e.g., Water Deficit (L) = (Current Na⁺/140 - 1) x Total Body Water (TBW). (TBW ≈ 0.6 x body weight in kg for men, 0.5 for women; adjust for elderly/obese).
        *   Correct slowly: Aim to lower serum Na⁺ by max 8-10 mEq/L per 24h to prevent cerebral edema.
    2.  **Treat Underlying Cause**:
        *   Central DI: Desmopressin (DDAVP).
        *   Nephrogenic DI: Thiazide diuretics, amiloride, salt restriction.
    3.  Discontinue/reduce sources of Na⁺ gain. Monitor serum Na⁺, osmolality, urine output closely.

### Calcium (Ca²⁺)
Normal Total Calcium: 8.5 - 10.5 mg/dL. Normal Ionized Calcium (iCa): 4.5 - 5.6 mg/dL (1.12-1.32 mmol/L) - **physiologically active form.**
Total calcium levels are affected by albumin (low albumin = low total Ca²⁺, but iCa may be normal). Corrected Total Ca = Measured Total Ca + [0.8 x (4.0 - Measured Albumin)].
Focus on ionized calcium in ICU.

#### Hypocalcemia (iCa <4.5 mg/dL or <1.12 mmol/L)
*   **Causes**: Hypoparathyroidism (post-surgical, autoimmune), Vitamin D deficiency, CKD (impaired Vit D activation, hyperphosphatemia), pancreatitis, hypomagnesemia (impairs PTH secretion/action), massive blood transfusions (citrate chelates calcium), rhabdomyolysis (calcium deposition), sepsis, certain drugs (loop diuretics, bisphosphonates, cinacalcet, foscarnet, phenytoin).
*   **Clinical Manifestations**:
    *   **Neuromuscular Excitability**: Paresthesias (perioral, fingers, toes), muscle cramps, tetany (Chvostek's sign - facial twitch; Trousseau's sign - carpal spasm with BP cuff), laryngospasm, bronchospasm, seizures.
    *   **Cardiovascular**: Hypotension, myocardial dysfunction, prolonged QT interval (risk of Torsades de Pointes).
*   **Management**:
    1.  **Symptomatic/Severe Hypocalcemia**: IV Calcium Gluconate 1-2g over 10-20 min, followed by continuous infusion if needed. Calcium Chloride (more elemental Ca²⁺, more irritating) can be used. Requires cardiac monitoring.
    2.  **Asymptomatic/Mild Hypocalcemia**: Oral calcium supplements (e.g., calcium carbonate, calcium citrate) + Vitamin D if deficient.
    3.  Correct hypomagnesemia. Monitor iCa, total Ca, albumin, Mg, PO4.

#### Hypercalcemia (iCa >5.6 mg/dL or >1.32 mmol/L)
*   **Causes**: Primary hyperparathyroidism (most common outpatient), Malignancy (bone mets, PTHrP production - most common inpatient/ICU), granulomatous diseases (sarcoidosis, TB - increased Vit D activation), immobilization, Vitamin D toxicity, thiazide diuretics, milk-alkali syndrome, adrenal insufficiency.
*   **Clinical Manifestations ("Stones, bones, groans, psychiatric overtones")**:
    *   **Renal**: Nephrolithiasis, polyuria/polydipsia (nephrogenic DI), AKI.
    *   **Skeletal**: Bone pain, fractures.
    *   **GI**: Nausea, vomiting, constipation, abdominal pain, pancreatitis.
    *   **Neurological**: Weakness, fatigue, confusion, lethargy, depression, coma.
    *   **Cardiovascular**: Hypertension, bradycardia, short QT interval, arrhythmias.
*   **Management (depends on severity and symptoms)**:
    1.  **Hydration**: Aggressive IV isotonic saline (0.9% NaCl) to promote calciuresis (e.g., 200-300 mL/hr, monitor for fluid overload).
    2.  **Loop Diuretics (e.g., Furosemide)**: **After volume repletion**, to enhance calcium excretion. Avoid thiazides.
    3.  **Bisphosphonates (e.g., Pamidronate, Zoledronic Acid)**: Inhibit osteoclast activity. Onset 2-4 days. For malignancy-associated hypercalcemia.
    4.  **Calcitonin**: Rapid onset (hours), short duration. Inhibits bone resorption, increases renal excretion. Tachyphylaxis occurs.
    5.  **Glucocorticoids**: For hypercalcemia due to granulomatous diseases, Vitamin D toxicity, or hematologic malignancies (lymphoma, myeloma).
    6.  **Dialysis**: For severe, life-threatening hypercalcemia or if renal failure.
    7.  Treat underlying cause.

### Magnesium (Mg²⁺)
Normal Range: 1.7 - 2.2 mg/dL. Essential for enzyme function, neuromuscular transmission, cardiac excitability, PTH secretion.

#### Hypomagnesemia (Serum Mg²⁺ <1.7 mg/dL)
*   **Causes**: Decreased intake (malnutrition, alcoholism, PN without adequate Mg), GI losses (diarrhea, NG suction, fistulas, malabsorption), Renal losses (diuretics - loop/thiazide, aminoglycosides, amphotericin B, cisplatin, cyclosporine, proton pump inhibitors - PPIs), DKA, refeeding syndrome, hungry bone syndrome, acute pancreatitis.
*   **Clinical Manifestations**:
    *   **Neuromuscular**: Weakness, tremors, tetany, Chvostek's/Trousseau's signs, seizures, hyperreflexia.
    *   **Cardiovascular**: Arrhythmias (PVCs, VT, **Torsades de Pointes**, AFib), prolonged QT/PR intervals, ST depression.
    *   **Associated Electrolyte Abnormalities**: Hypokalemia (due to renal K⁺ wasting), Hypocalcemia (due to impaired PTH release/action).
*   **Management**:
    1.  **Symptomatic/Severe (<1 mg/dL or arrhythmias)**: IV Magnesium Sulfate. E.g., 1-2g over 15-60 min for non-emergent; 1-2g over 5-15 min for Torsades (if pulse present) or severe symptoms. Follow with infusion if ongoing losses.
    2.  **Asymptomatic/Mild**: Oral magnesium (e.g., magnesium oxide - often causes diarrhea).
    3.  Monitor Mg levels, DTRs, renal function. Correct other electrolyte abnormalities.

#### Hypermagnesemia (Serum Mg²⁺ >2.2 mg/dL)
*   **Causes**: Renal failure (most common), excessive intake (Mg-containing antacids/laxatives, iatrogenic overdose - e.g., treatment of preeclampsia/eclampsia or asthma), tumor lysis syndrome, rhabdomyolysis.
*   **Clinical Manifestations (dose-dependent)**:
    *   **Mild (>2.5-4 mg/dL)**: N/V, flushing, headache.
    *   **Moderate (4-7 mg/dL)**: Drowsiness, lethargy, hyporeflexia/areflexia, weakness, hypotension, bradycardia, ECG changes (prolonged PR/QT, wide QRS).
    *   **Severe (>7-10 mg/dL)**: Respiratory depression, apnea, complete heart block, cardiac arrest.
*   **Management**:
    1.  Discontinue exogenous magnesium sources.
    2.  **IV Calcium Gluconate**: 1-2g IV to antagonize neuromuscular and cardiac effects (if symptomatic or severe).
    3.  Enhance elimination: IV fluids + loop diuretics (if normal renal function).
    4.  **Hemodialysis**: For severe hypermagnesemia or renal failure.

### Phosphate (PO₄³⁻)
Normal Range: 2.5 - 4.5 mg/dL. Crucial for ATP production, bone metabolism, cell membrane function, oxygen transport (2,3-DPG).

#### Hypophosphatemia (Serum PO₄³⁻ <2.5 mg/dL)
*   **Causes**: Decreased intake (malnutrition, alcoholism), Decreased absorption (antacids containing aluminum/magnesium, Vit D deficiency), Increased excretion (hyperparathyroidism, Fanconi syndrome, osmotic diuresis, diuretics), Intracellular shift (Refeeding syndrome - most common ICU cause, respiratory alkalosis, DKA treatment, hungry bone syndrome).
*   **Clinical Manifestations (usually when <1-1.5 mg/dL)**:
    *   **Muscular**: Weakness (can lead to respiratory failure from diaphragmatic weakness), myalgia, rhabdomyolysis.
    *   **Neurological**: Paresthesias, confusion, seizures, coma.
    *   **Cardiac**: Impaired contractility, heart failure, arrhythmias.
    *   **Hematologic**: Hemolytic anemia, platelet dysfunction, impaired WBC function.
    *   **Skeletal**: Bone pain, osteomalacia (chronic).
*   **Management**:
    1.  **Severe/Symptomatic (<1-1.5 mg/dL)**: IV phosphate replacement (e.g., Sodium Phosphate or Potassium Phosphate). **Administer slowly** (e.g., 0.08-0.16 mmol/kg over 4-6h, up to 0.24 mmol/kg in severe cases) to avoid hypocalcemia and metastatic calcification. Monitor serum phosphate, calcium, potassium, renal function.
    2.  **Mild/Moderate Asymptomatic**: Oral phosphate supplements (e.g., K-Phos Neutral, Neutra-Phos). Often causes diarrhea.
    3.  Treat underlying cause (e.g., manage refeeding syndrome carefully).

#### Hyperphosphatemia (Serum PO₄³⁻ >4.5 mg/dL)
*   **Causes**: Decreased excretion (AKI/CKD - most common cause), Increased intake (phosphate-containing laxatives/enemas, excessive IV/PO supplementation), Shift from intracellular to extracellular (Tumor lysis syndrome, rhabdomyolysis, DKA, metabolic acidosis), Vitamin D toxicity, hypoparathyroidism.
*   **Clinical Manifestations**: Often asymptomatic. Symptoms usually related to secondary hypocalcemia (tetany, paresthesias, seizures). Chronic: metastatic calcification (vascular, soft tissue - leading to pruritus, organ damage), renal osteodystrophy.
*   **Management**:
    1.  Treat underlying cause.
    2.  Dietary phosphate restriction.
    3.  **Phosphate Binders (with meals)**: Calcium-based (calcium carbonate, calcium acetate), Non-calcium based (sevelamer, lanthanum carbonate).
    4.  Enhance excretion: IV saline hydration + loop diuretics (if renal function permits).
    5.  **Hemodialysis**: For severe hyperphosphatemia or renal failure.`,
    categoryType: 'Topic',
    keywordsForImage: 'electrolyte panel ICU',
  },
  {
    id: 'acid-base-balance-abg-interpretation',
    slug: 'acid-base-balance-abg-interpretation',
    title: 'Acid-Base Balance and ABG Interpretation',
    summary: 'Comprehensive guide to interpreting arterial blood gases (ABGs) and managing complex acid-base disorders encountered in critically ill patients.',
    categoryType: 'Topic',
    keywordsForImage: 'ABG analysis chart',
    content: `## General Overview
Acid-base balance refers to the physiological mechanisms that maintain the hydrogen ion (H⁺) concentration, and thus the pH, of body fluids within a narrow, optimal range. This balance is crucial for normal cellular function, enzyme activity, and overall homeostasis. Arterial Blood Gas (ABG) analysis is a vital diagnostic tool in critical care, providing key information about a patient's oxygenation status, ventilatory function, and acid-base equilibrium.

## In-Depth ICU Considerations

### Key Components of an ABG
*   **pH**: Reflects the net H⁺ concentration. Normal: 7.35-7.45.
    *   <7.35: Acidemia (excess H⁺)
    *   >7.45: Alkalemia (deficit of H⁺)
*   **PaCO2 (Partial Pressure of Carbon Dioxide)**: Respiratory component. Normal: 35-45 mmHg.
    *   CO2 acts as an acid (CO2 + H2O ↔ H2CO3 ↔ H⁺ + HCO3⁻).
    *   >45 mmHg: Respiratory acidosis (hypoventilation, CO2 retention).
    *   <35 mmHg: Respiratory alkalosis (hyperventilation, CO2 washout).
*   **HCO3⁻ (Bicarbonate)**: Metabolic component. Normal: 22-26 mEq/L.
    *   HCO3⁻ acts as a base.
    *   <22 mEq/L: Metabolic acidosis (bicarbonate loss or acid gain).
    *   >26 mEq/L: Metabolic alkalosis (bicarbonate gain or acid loss).
*   **PaO2 (Partial Pressure of Oxygen)**: Oxygenation status. Normal: 80-100 mmHg (on room air).
*   **SaO2 (Oxygen Saturation)**: Percentage of hemoglobin saturated with oxygen. Normal: 95-100%.
*   **Base Excess (BE) / Base Deficit (BD)**: Indicates overall metabolic status. Normal: -2 to +2 mEq/L.
    *   Negative BE (Base Deficit): Suggests metabolic acidosis.
    *   Positive BE: Suggests metabolic alkalosis.

### Systematic Approach to ABG Interpretation
1.  **Assess pH**: Is it acidemia (<7.35), alkalemia (>7.45), or normal (7.35-7.45)?
2.  **Identify the Primary Disturbance**:
    *   Look at PaCO2: If pH is low and PaCO2 is high (>45), primary disorder is **Respiratory Acidosis**. If pH is high and PaCO2 is low (<35), primary disorder is **Respiratory Alkalosis**.
    *   Look at HCO3⁻: If pH is low and HCO3⁻ is low (<22), primary disorder is **Metabolic Acidosis**. If pH is high and HCO3⁻ is high (>26), primary disorder is **Metabolic Alkalosis**.
    *   If both PaCO2 and HCO3⁻ are abnormal and consistent with the pH change, it indicates a mixed disorder or a primary disorder with compensation. Determine which change (PaCO2 or HCO3⁻) is more aligned with the degree of pH change to identify the primary disorder.
3.  **Determine if Compensation is Present**: The body attempts to normalize pH by altering the component not primarily affected.
    *   **Respiratory Compensation for Metabolic Disorders**: Lungs compensate by altering ventilation.
        *   Metabolic Acidosis: Lungs hyperventilate to blow off CO2 (↓PaCO2). Expected PaCO2 = (1.5 x HCO3⁻) + 8 (±2) (Winter's Formula).
        *   Metabolic Alkalosis: Lungs hypoventilate to retain CO2 (↑PaCO2). Expected PaCO2 = 0.7 x (Actual HCO3⁻ - 24) + 40 (±2), or PaCO2 rises 0.6-0.7 mmHg for every 1 mEq/L rise in HCO3⁻.
    *   **Metabolic (Renal) Compensation for Respiratory Disorders**: Kidneys compensate by altering HCO3⁻ reabsorption/excretion. This is slower (hours to days).
        *   **Acute Respiratory Acidosis**: For every 10 mmHg ↑ in PaCO2, HCO3⁻ ↑ by 1 mEq/L.
        *   **Chronic Respiratory Acidosis**: For every 10 mmHg ↑ in PaCO2, HCO3⁻ ↑ by 3-4 mEq/L.
        *   **Acute Respiratory Alkalosis**: For every 10 mmHg ↓ in PaCO2, HCO3⁻ ↓ by 2 mEq/L.
        *   **Chronic Respiratory Alkalosis**: For every 10 mmHg ↓ in PaCO2, HCO3⁻ ↓ by 4-5 mEq/L.
    *   **Fully Compensated**: pH is within normal range (7.35-7.45), but PaCO2 and HCO3⁻ are abnormal.
    *   **Partially Compensated**: pH is still abnormal, but the compensatory system is moving in the correct direction.
    *   **Uncompensated**: pH is abnormal, and the compensatory system has not yet responded.
4.  **Assess Oxygenation**: Look at PaO2 and SaO2. Calculate PaO2/FiO2 ratio (P/F ratio) if on supplemental O2 (Normal >400; <300 indicates hypoxemia, <200 ARDS).
5.  **Calculate Anion Gap (if Metabolic Acidosis is present)**:
    *   Anion Gap (AG) = Na⁺ - (Cl⁻ + HCO3⁻). Normal: 8-12 mEq/L.
    *   Helps differentiate causes of metabolic acidosis.
    *   **High Anion Gap Metabolic Acidosis (HAGMA)**: Due to accumulation of unmeasured anions.
        *   Mnemonic: **MUDPILES**
            *   **M**ethanol
            *   **U**remia (CKD)
            *   **D**iabetic Ketoacidosis (DKA)
            *   **P**ropylene Glycol (solvent in some IV meds like lorazepam), Paraldehyde
            *   **I**ron, Isoniazid, Inborn errors of metabolism
            *   **L**actic Acidosis (most common cause in ICU)
            *   **E**thylene Glycol
            *   **S**alicylates
    *   **Normal Anion Gap Metabolic Acidosis (NAGMA) / Hyperchloremic Metabolic Acidosis**: Due to loss of HCO3⁻ or gain of Cl⁻.
        *   Mnemonic: **HARDUPS** or **USED CARP**
            *   **H**yperalimentation (TPN with high chloride content)
            *   **A**cetazolamide, Addison's disease
            *   **R**enal Tubular Acidosis (RTA)
            *   **D**iarrhea (most common cause of NAGMA)
            *   **U**reteroenteric fistula/diversion
            *   **P**ancreatic fistula/drainage
            *   **S**aline administration (large volumes of 0.9% NaCl)

### Specific Acid-Base Disorders

#### Respiratory Acidosis (pH ↓, PaCO2 ↑)
*   **Cause**: Alveolar hypoventilation -> CO2 retention.
*   **Common ICU Etiologies**: CNS depression (opioids, sedatives, head injury), neuromuscular disorders (Guillain-Barré, myasthenia gravis, ICUAW, NMBAs), airway obstruction (COPD/asthma exacerbation, foreign body), restrictive lung disease, severe pneumonia/ARDS (if inadequate VE), chest wall trauma/deformity, ventilator malfunction or inappropriate settings.
*   **Compensation**: Kidneys retain HCO3⁻ (takes hours to days).
*   **Management**: Improve alveolar ventilation (treat underlying cause, reverse sedatives, bronchodilators, mechanical ventilation if severe, adjust ventilator settings to ↑VE).

#### Respiratory Alkalosis (pH ↑, PaCO2 ↓)
*   **Cause**: Alveolar hyperventilation -> CO2 washout.
*   **Common ICU Etiologies**: Hypoxia (stimulates respiratory drive), anxiety, pain, fever, sepsis, CNS injury (stroke, tumor), salicylate toxicity (early), pulmonary embolism, CHF, liver failure, pregnancy, mechanical hyperventilation (ventilator settings too high).
*   **Compensation**: Kidneys excrete HCO3⁻ (takes hours to days).
*   **Management**: Treat underlying cause. If iatrogenic (ventilator), reduce VE. Rebreathing CO2 (paper bag) for psychogenic hyperventilation (rarely used in ICU). Sedation/anxiolytics if appropriate.

#### Metabolic Acidosis (pH ↓, HCO3⁻ ↓)
*   **Cause**: Increased acid production, loss of HCO3⁻, or decreased renal acid excretion.
*   **Common ICU Etiologies**:
    *   **HAGMA**: Lactic acidosis (sepsis, shock, hypoxia, ischemia), DKA, AKI/CKD (uremia), toxic ingestions (methanol, ethylene glycol, salicylates).
    *   **NAGMA**: Diarrhea, RTA, excessive NS infusion, pancreatic/biliary fistula, ureteral diversions.
*   **Compensation**: Lungs hyperventilate to ↓PaCO2 (Kussmaul respirations).
*   **Management**: Treat underlying cause. IV fluids. Bicarbonate therapy is controversial (consider if pH <7.1-7.15 with severe hemodynamic instability, but risks include fluid/Na⁺ overload, ↓ionized Ca²⁺, paradoxical intracellular acidosis, overshoot alkalosis). Renal replacement therapy if severe AKI/CKD.

#### Metabolic Alkalosis (pH ↑, HCO3⁻ ↑)
*   **Cause**: Loss of H⁺ or gain of HCO3⁻.
*   **Common ICU Etiologies**:
    *   **Chloride-Responsive (Urine Cl⁻ <20 mEq/L)**: Vomiting/NG suction (loss of HCl), diuretic therapy (loop/thiazide - volume and Cl⁻ depletion), post-hypercapnic state (after rapid correction of chronic respiratory acidosis).
    *   **Chloride-Resistant (Urine Cl⁻ >20 mEq/L)**: Hyperaldosteronism, Cushing's syndrome, severe K⁺ depletion, excessive alkali administration (bicarbonate, citrate in blood transfusions, antacids).
*   **Compensation**: Lungs hypoventilate to ↑PaCO2 (limited by hypoxic drive).
*   **Management**: Treat underlying cause.
    *   Chloride-Responsive: Administer isotonic saline (0.9% NaCl) and KCl to correct volume and Cl⁻/K⁺ deficits. Discontinue offending agents (e.g., diuretics). Acetazolamide (carbonic anhydrase inhibitor, promotes HCO3⁻ excretion) may be used if volume overloaded. HCl infusion (rarely, via central line for severe cases).
    *   Chloride-Resistant: Treat underlying endocrine disorder. Correct severe hypokalemia.

### Mixed Acid-Base Disorders
Common in critically ill patients. More than one primary disorder is present simultaneously.
*   Example: Sepsis patient with lactic acidosis (Metabolic Acidosis) and concurrent respiratory failure requiring intubation with inadequate ventilation (Respiratory Acidosis).
*   Interpretation requires careful assessment of pH, PaCO2, HCO3⁻, AG, and clinical context. The expected compensatory response for one disorder may be blunted or exaggerated by another coexisting primary disorder.

### Advanced Concepts
*   **Stewart Approach / Physicochemical Approach**: Considers strong ions (Strong Ion Difference - SID), weak acids (Atot), and PCO2 as independent determinants of pH. More complex but can explain some "unexplained" metabolic acidoses.
*   **Delta-Delta Gap (ΔAG/ΔHCO3⁻)**: (Calculated AG - Normal AG) / (Normal HCO3⁻ - Measured HCO3⁻). Ratio ~1-2 suggests pure HAGMA. <1 suggests coexisting NAGMA. >2 suggests coexisting metabolic alkalosis.
*   **Urine Anion Gap (UAG)**: UAG = (Urine Na⁺ + Urine K⁺) - Urine Cl⁻. Helps differentiate causes of NAGMA (e.g., positive UAG suggests renal cause like RTA; negative UAG suggests GI HCO3⁻ loss like diarrhea).

Monitoring serial ABGs and correlating with clinical status and other lab data is essential for managing acid-base disturbances in the ICU.`,
    categoryType: 'Topic',
    keywordsForImage: 'ABG analysis chart',
  },
  {
    id: 'nutrition-critical-care',
    slug: 'nutrition-critical-care',
    title: 'Nutrition in Critical Care',
    summary: 'Principles of enteral and parenteral nutrition, assessing nutritional risk, managing refeeding syndrome, and metabolic support for ICU patients.',
    categoryType: 'Topic',
    keywordsForImage: 'nutrition support ICU',
    content: `## General Overview
Nutritional support is a cornerstone of managing critically ill patients. Critical illness induces a hypermetabolic and catabolic state, leading to rapid loss of lean body mass, impaired immune function, weakened respiratory muscles, and delayed wound healing if nutritional needs are not met. The primary goals of nutritional support in the ICU are to preserve lean body mass, support organ function, modulate the stress response, prevent oxidative cellular injury, and improve overall outcomes.

## In-Depth ICU Considerations

### Metabolic Response to Critical Illness
*   **Hypermetabolism**: Increased resting energy expenditure (REE) due to stress hormones (catecholamines, cortisol, glucagon), cytokines, and fever.
*   **Catabolism**: Accelerated breakdown of protein (especially skeletal muscle) and fat to provide substrates for gluconeogenesis, acute phase protein synthesis, and energy. Leads to negative nitrogen balance.
*   **Insulin Resistance**: Common, leading to stress-induced hyperglycemia.
*   **Altered Nutrient Utilization**: Changes in carbohydrate, lipid, and protein metabolism.

### Nutritional Assessment in the ICU
Traditional markers (albumin, prealbumin) are often unreliable in critical illness as they are negative acute phase reactants and affected by fluid status/inflammation.
*   **Risk Screening Tools**:
    *   **NRS-2002 (Nutritional Risk Screening 2002)**: Considers nutritional status and disease severity.
    *   **NUTRIC Score (Nutrition Risk in Critically Ill)**: ICU-specific, incorporates APACHE II, SOFA, age, comorbidities, days from hospital to ICU admission, IL-6 levels (if available). Score ≥5 indicates high nutritional risk.
*   **Clinical Assessment**: History of recent intake, weight loss, physical exam for signs of malnutrition (muscle wasting, edema, skin changes).
*   **Indirect Calorimetry**: "Gold standard" for measuring REE, but not widely available or practical for all patients. Can help guide calorie targets if available.
*   **Predictive Equations**: Harris-Benedict, Mifflin-St Jeor, Penn State equations are used to estimate energy needs if indirect calorimetry is unavailable. Often less accurate in ICU. Simple weight-based targets (e.g., 25-30 kcal/kg/day) are commonly used.

### Timing and Route of Nutritional Support

#### Enteral Nutrition (EN) - "If the gut works, use it."
EN is the preferred route for nutritional support in critically ill patients with a functional GI tract.
*   **Benefits over Parenteral Nutrition (PN)**:
    *   Maintains gut mucosal integrity and barrier function (prevents bacterial translocation).
    *   Supports gut-associated lymphoid tissue (GALT) and immune function.
    *   Lower risk of infectious complications (e.g., CLABSI).
    *   More physiologic.
    *   Less costly.
*   **Timing**:
    *   **Early EN**: Initiate within 24-48 hours of ICU admission in patients who are unable to maintain volitional oral intake and are hemodynamically stable.
    *   Delay EN in patients with severe hemodynamic instability (e.g., escalating vasopressor requirements, uncontrolled shock) until resuscitation and stabilization are achieved.
*   **Access**:
    *   **Nasogastric (NG) tube**: Most common for short-term EN.
    *   **Nasoduodenal (ND) / Nasojejunal (NJ) tubes (post-pyloric)**: Used if high risk of aspiration, gastroparesis, or intolerance to gastric feeding. Placement often requires endoscopic or fluoroscopic guidance.
    *   **Gastrostomy (PEG) / Jejunostomy (PEJ) tubes**: For long-term EN (>4-6 weeks).
*   **Formula Selection**:
    *   **Standard Polymeric Formulas**: 1-1.5 kcal/mL, contain intact proteins, carbohydrates, fats. Suitable for most patients.
    *   **High-Protein Formulas**: For patients with increased protein needs (e.g., burns, trauma, sepsis).
    *   **Fiber-Containing Formulas**: May help with diarrhea or constipation in some patients. Avoid in patients at high risk for bowel ischemia.
    *   **Concentrated Formulas (1.5-2.0 kcal/mL)**: For fluid-restricted patients.
    *   **Disease-Specific Formulas** (e.g., renal, diabetic, pulmonary, immune-modulating): Use is controversial and generally recommended only in specific patient populations based on current evidence and guidelines.
*   **Initiation and Advancement**:
    *   Start at a low rate (e.g., 10-20 mL/hr).
    *   Advance by 10-20 mL/hr every 4-8 hours as tolerated, towards goal rate (usually within 24-48h).
    *   Goal: Provide ≥80% of estimated energy and protein needs within 48-72 hours.
*   **Monitoring for Tolerance & Complications**:
    *   **Gastric Residual Volumes (GRVs)**: Routine monitoring is controversial. High GRVs alone (e.g., >250-500 mL) without other signs of intolerance should not solely prompt cessation of EN. Consider trends, patient symptoms. If GRV >500mL, hold EN, reassess.
    *   **Signs of Intolerance**: Nausea, vomiting, abdominal distension, pain, diarrhea, constipation.
    *   **Aspiration**: Elevate Head of Bed (HOB) 30-45°. Consider prokinetics (e.g., metoclopramide, erythromycin) for gastroparesis. Consider post-pyloric feeding.
    *   **Diarrhea**: Rule out C. difficile. Consider changing formula (e.g., to fiber-containing or peptide-based), use of antidiarrheals if infectious cause ruled out.
    *   **Constipation**: Ensure adequate hydration, consider fiber, laxatives/stool softeners.
    *   **Metabolic Complications**: Hyperglycemia (monitor glucose, insulin if needed), electrolyte imbalances (monitor and replete K, PO4, Mg).

#### Parenteral Nutrition (PN / TPN)
IV administration of nutrients. Used when EN is contraindicated or insufficient to meet needs.
*   **Indications**:
    *   Prolonged inability to use GI tract (e.g., severe ileus, bowel obstruction, high-output fistula, severe pancreatitis with intolerance to EN, short bowel syndrome).
    *   EN not meeting >60% of needs after 7-10 days.
    *   Severe malnutrition when EN is not feasible.
*   **Timing**:
    *   If patient is well-nourished on admission, delay PN for 7 days if EN not feasible.
    *   If patient is malnourished or at high nutritional risk, initiate PN earlier if EN is not feasible or tolerated within a few days.
*   **Access**: Requires central venous access (PPN - peripheral parenteral nutrition - is short-term, low osmolarity/concentration only, rarely sufficient for ICU).
*   **Components**: Dextrose (carbohydrate), amino acids (protein), intravenous fat emulsion (IVFE/lipids), electrolytes, vitamins, trace elements. Formulated by pharmacy.
*   **Complications**:
    *   **Catheter-Related Bloodstream Infection (CLABSI)**: Strict aseptic technique for CVC care.
    *   **Hyperglycemia**: Common. Monitor glucose frequently, use insulin infusion as needed.
    *   **Hypoglycemia**: If PN abruptly stopped. Taper PN rate, or provide IV dextrose.
    *   **Electrolyte Imbalances**: Monitor and adjust PN formulation.
    *   **Parenteral Nutrition-Associated Liver Disease (PNALD)**: Cholestasis, steatosis, fibrosis. More common with long-term PN.
    *   **Hypertriglyceridemia**: Monitor triglycerides. Hold/reduce lipids if severe.
    *   **Refeeding Syndrome**: See below.
    *   **Fluid Overload**.
*   **Monitoring**: Daily labs (glucose, electrolytes, LFTs, triglycerides - especially initially), fluid balance, infection signs.

### Protein and Energy Requirements
*   **Energy**: Typically 25-30 kcal/kg actual body weight/day. Adjust based on clinical condition, nutritional status, and indirect calorimetry if available. Avoid overfeeding (can lead to hyperglycemia, hypercapnia, hepatic steatosis).
*   **Protein**: Needs are increased in critical illness. Typically 1.2-2.0 g/kg actual body weight/day. Higher in burns, trauma, some catabolic states.
*   **Hypocaloric, High-Protein Feeding**: In some obese patients (BMI >30), providing ~60-70% of estimated energy needs but high protein (e.g., 2-2.5 g/kg Ideal Body Weight) may be beneficial.

### Refeeding Syndrome
A potentially fatal condition caused by rapid fluid and electrolyte shifts (especially phosphate, potassium, magnesium) that occur when nutrition (enteral or parenteral) is reintroduced after a period of significant starvation or malnutrition. Thiamine deficiency is also a key component.
*   **Pathophysiology**: Reintroduction of carbohydrates -> insulin secretion -> stimulates cellular uptake of glucose, phosphate, potassium, magnesium, and water. Thiamine is consumed as a cofactor in carbohydrate metabolism.
*   **High-Risk Patients**: History of significant weight loss, prolonged NPO/starvation (>7-10 days), chronic alcoholism, anorexia nervosa, malabsorptive syndromes, morbid obesity with massive weight loss, baseline low K/PO4/Mg.
*   **Clinical Manifestations (can affect multiple organ systems)**:
    *   **Hypophosphatemia (Hallmark)**: Weakness (respiratory muscle failure), cardiac dysfunction, rhabdomyolysis, AMS, seizures.
    *   **Hypokalemia**: Arrhythmias, weakness.
    *   **Hypomagnesemia**: Arrhythmias (Torsades), tetany, seizures.
    *   **Thiamine Deficiency (Wernicke's Encephalopathy)**: Confusion, ataxia, ophthalmoplegia.
    *   **Fluid Overload / Cardiac Failure**: Due to sodium and water retention.
*   **Prevention and Management**:
    1.  **Identify High-Risk Patients**.
    2.  **Correct Electrolyte Abnormalities (K, PO4, Mg) BEFORE starting nutrition.**
    3.  **Administer Thiamine**: (e.g., 100-300mg IV/IM daily for 3-5 days, or more) **BEFORE** starting carbohydrates or glucose-containing fluids.
    4.  **Start Nutrition Slowly ("Start Low, Go Slow")**: Initiate at a low caloric level (e.g., 10-15 kcal/kg/day or 25-50% of goal for high-risk patients). Advance gradually over several days.
    5.  **Monitor Electrolytes Closely**: Check K, PO4, Mg at least daily (or more frequently) during the first week of refeeding and replete aggressively.
    6.  Monitor fluid balance, vital signs, cardiac and respiratory status.

### Adjunctive Therapies & Specific Nutrients
*   **Immune-Modulating Formulas** (e.g., supplemented with arginine, glutamine, omega-3 fatty acids, antioxidants): Role is controversial. Some guidelines recommend for specific populations (e.g., major surgery, trauma, burns) but not routinely for all septic patients.
*   **Glutamine**: May be beneficial in burn and trauma patients, but routine supplementation in general ICU patients is not consistently supported.
*   **Omega-3 Fatty Acids**: May have anti-inflammatory effects. Some evidence for use in ARDS.
*   **Antioxidants (e.g., Selenium, Vitamin C, Vitamin E, Zinc)**: May be considered, role still under investigation.
*   **Probiotics**: Role in preventing VAP or C. difficile in ICU is not yet established.

Transitioning from EN/PN to oral diet should occur as soon as the patient is clinically stable, alert, and able to swallow safely (pass dysphagia screen).`,
    categoryType: 'Topic',
    keywordsForImage: 'nutrition support ICU',
  },
];

const originalPoliciesContent: Array<Omit<ContentItem, 'generalOverview' | 'inDepthConsiderations'> & { content: string }> = [
  {
    id: 'stroke-protocols',
    slug: 'stroke-protocols',
    title: 'Acute Stroke Management Protocols',
    summary: 'Unit-specific guidelines for rapid assessment, diagnosis, and intervention in acute ischemic and hemorrhagic stroke.',
    content: `## General Overview: Purpose of Policy

This policy outlines the standardized, evidence-based approach to the rapid assessment, diagnosis, and management of adult patients presenting with signs and symptoms of acute stroke (ischemic or hemorrhagic) within this institution. The primary goal is to ensure timely intervention to minimize brain injury, reduce mortality, and improve functional outcomes. **"Time is Brain"** is the guiding principle. This protocol emphasizes interdisciplinary collaboration and adherence to established timelines.

## In-Depth Protocol Details & Procedures

### I. Initial Actions & Stroke Alert Activation (Pre-Hospital & Emergency Department)

1.  **Immediate Stroke Alert/Team Activation**:
    *   **Pre-hospital**: EMS to notify receiving hospital of suspected stroke ("Stroke Alert"), providing LKW time, vital signs, glucose, and pre-hospital stroke scale findings.
    *   **In-Hospital (ED/Floor)**: Any staff member recognizing acute stroke symptoms must immediately activate the institutional Stroke Alert system.
2.  **ABCs & Vital Signs**:
    *   Assess and ensure patent Airway, adequate Breathing, and Circulation.
    *   Administer Oxygen if SpO2 <94% or signs of hypoxia.
    *   Obtain full set of vital signs (BP, HR, RR, Temp).
    *   Perform STAT fingerstick blood glucose. Correct hypoglycemia (<60 mg/dL) promptly with D50W IV.
3.  **Establish Last Known Well (LKW) Time**: Or last known normal. This is the single most critical piece of historical information for determining eligibility for time-sensitive therapies. Document clearly. If LKW is unknown or unwitnessed, use time patient was last seen at their baseline.
4.  **Rapid Neurological Assessment**:
    *   Perform a standardized stroke scale (e.g., Cincinnati Prehospital Stroke Scale - CPSS: Facial droop, Arm drift, Abnormal speech; or Los Angeles Motor Scale - LAMS).
    *   Upon arrival or activation, a certified provider (Neurology resident/attending, ED physician, stroke nurse) performs the full NIH Stroke Scale (NIHSS). Document score.
5.  **IV Access & Labs**:
    *   Establish at least one, preferably two, large-bore IV access lines (e.g., 18-20 gauge).
    *   Draw blood for STAT labs: CBC with differential and platelets, CMP (electrolytes, BUN, Cr, Glucose, LFTs), PT/INR, aPTT. For patients on DOACs, consider specific DOAC levels or anti-Xa activity if available and timely. Troponin may be indicated. Type & screen if high likelihood of intervention.
    *   **Crucially, do NOT delay STAT non-contrast head CT or IV thrombolysis (if eligible) waiting for lab results, except for glucose. For patients on anticoagulants, INR/aPTT/platelets are needed before tPA.**
6.  **STAT Non-Contrast Head CT (NCCT)**:
    *   This is the **most critical initial diagnostic test** to differentiate ischemic from hemorrhagic stroke.
    *   Target "door-to-CT" time: ≤20 minutes from ED arrival.
    *   Target "CT interpretation time": ≤20 minutes from CT completion (total door-to-CT interpretation ≤45 minutes).
    *   Neuroradiologist or qualified physician to interpret immediately.
7.  **History & Physical Exam**: Focused H&P concurrently with other actions. Include medications (especially anticoagulants/antiplatelets), allergies, comorbidities, recent trauma/surgery.

### II. Acute Ischemic Stroke (AIS) Management (NCCT shows no hemorrhage)

#### A. IV Thrombolysis (Alteplase/tPA)

*   **Eligibility Criteria (General Summary - Refer to Institutional Detailed Checklist)**:
    1.  Age ≥18 years.
    2.  Clinical diagnosis of ischemic stroke causing a measurable neurological deficit (defined by NIHSS).
    3.  Time from LKW to initiation of tPA:
        *   **≤ 3 hours**: Standard window for most eligible patients.
        *   **3 to 4.5 hours**: Extended window for select patients (e.g., age ≤80, not on oral anticoagulants irrespective of INR, NIHSS score ≤25, no history of both diabetes and prior stroke).
*   **Strict Exclusion Criteria (Selected Major Examples - Consult Full Institutional Checklist for ALL Exclusions)**:
    *   Evidence of intracranial hemorrhage (ICH) on NCCT.
    *   Active internal bleeding or clinically significant bleeding (e.g., GI bleed within last 3 weeks, arterial puncture at non-compressible site within 7 days).
    *   Recent (within 3 months) significant head trauma, intracranial or intraspinal surgery, or previous stroke.
    *   Symptoms suggestive of Subarachnoid Hemorrhage (SAH) even if CT negative initially.
    *   Uncontrolled hypertension: SBP >185 mmHg or DBP >110 mmHg **despite initial aggressive treatment** to lower it to within these limits before tPA.
    *   Known AVM, aneurysm, or intracranial neoplasm.
    *   Current use of direct thrombin inhibitors or direct factor Xa inhibitors with evidence of anticoagulant effect (e.g., elevated aPTT, INR, anti-Xa, or recent intake within 48h if normal renal function - specific lab parameters vary).
    *   Use of warfarin with INR >1.7 or PT >15 seconds.
    *   Receipt of therapeutic dose LMWH within last 24 hours.
    *   Platelet count <100,000/mm³.
    *   Blood glucose <50 mg/dL (treat and reassess) or >400 mg/dL (consider treatment, risk/benefit).
    *   Seizure at stroke onset if postictal deficits are believed to be the cause of NIHSS findings.
    *   Extensive regions of obvious hypodensity/ischemia on initial NCCT (suggesting large established infarct, e.g., >1/3 MCA territory).
*   **Alteplase (tPA) Administration**:
    *   **Target "Door-to-Needle" (tPA initiation) time: ≤60 minutes from ED arrival.**
    *   **Dose**: 0.9 mg/kg total dose. Maximum total dose is 90 mg.
        *   Administer 10% of the total dose as an IV bolus over 1 minute.
        *   Infuse the remaining 90% of the total dose IV over 60 minutes via infusion pump.
    *   Confirm patient weight accurately. Double-check dose calculations independently by two licensed professionals.
*   **Blood Pressure Management for tPA Candidates**:
    *   **Prior to tPA**: If SBP >185 mmHg or DBP >110 mmHg, gently lower BP to ≤185/110 mmHg before initiating tPA.
        *   Labetalol 10-20 mg IV over 1-2 minutes, may repeat x1; OR
        *   Nicardipine infusion 5 mg/hr IV, titrate up by 2.5 mg/hr every 5-15 minutes, max 15 mg/hr; OR
        *   Other agents per institutional protocol (e.g., Clevidipine, Hydralazine, Enalaprilat). Avoid Nitroglycerin.
    *   **During and for 24 hours Post-tPA**: Maintain SBP ≤180 mmHg and DBP ≤105 mmHg.
        *   Monitor BP q15min for 2h, then q30min for 6h, then q1h for 16h.
        *   Treat BP elevations aggressively using protocolized IV antihypertensives.
*   **Post-tPA Care & Monitoring**:
    *   Admit to Stroke Unit or ICU.
    *   **No antiplatelets (aspirin) or anticoagulants for 24 hours post-tPA.**
    *   Follow-up head CT or MRI at 24 hours (or sooner if neurological worsening) before initiating antiplatelets/anticoagulants.
    *   Frequent neurological checks (NIHSS or modified NIHSS): q15min during infusion and for 2h post-infusion, then q30min for 6h, then q1h for 16h.
    *   Monitor for signs of Intracranial Hemorrhage (ICH): Acute neurological worsening (↑NIHSS), severe headache, acute hypertension, nausea/vomiting. **If suspected, stop tPA infusion immediately, obtain STAT NCCT, and notify Neurology/Neurosurgery.**
    *   Monitor for angioedema (especially if on ACE inhibitors) or other allergic reactions. Manage per protocol.
    *   Avoid unnecessary invasive procedures (e.g., NG tube, Foley catheter) for first few hours if possible, or ideally for 24 hours.

#### B. Mechanical Thrombectomy (Endovascular Therapy - EVT)

*   For acute ischemic stroke due to Large Vessel Occlusion (LVO) in the anterior circulation (internal carotid artery - ICA, middle cerebral artery - M1 or M2 segments). Select posterior circulation LVOs (e.g., basilar artery) may also be considered.
*   **Imaging for LVO**: Requires CT Angiography (CTA) of head & neck, or MR Angiography (MRA) to identify LVO. This should be performed as soon as possible, often concurrently with or immediately after NCCT if stroke is suspected.
*   **Time Windows & Eligibility (General Summary)**:
    *   **LKW within 0 to 6 hours**: Eligible if meet core criteria (e.g., pre-stroke mRS 0-1, causative LVO, NIHSS ≥6, ASPECTS score on NCCT ≥6).
    *   **LKW within 6 to 24 hours**: Eligible if meet specific advanced imaging criteria (e.g., CT Perfusion or MRI DWI-FLAIR mismatch showing small core infarct and larger salvageable penumbra) as per DAWN / DEFUSE 3 trial criteria.
*   **Procedure**: Performed by Neurointerventional team. Patient may receive IV tPA prior to or during transfer for EVT if eligible ("drip and ship" or "mothership" models).
*   **Post-EVT Care**: Similar to post-tPA care regarding BP management (target often SBP <160-180 mmHg, specific targets per Neurointerventionalist), neurological monitoring, and management of potential complications (e.g., reperfusion hemorrhage, access site issues).

### III. Acute Hemorrhagic Stroke Management

#### A. Intracerebral Hemorrhage (ICH) - Non-traumatic

*   **Goal**: Limit hematoma expansion, manage ICP, aggressively control BP, prevent complications.
*   **Blood Pressure Control**: Crucial to limit ongoing bleeding.
    *   If SBP >220 mmHg: Aggressive BP reduction with continuous IV antihypertensive infusion to target SBP (e.g., 140-160 mmHg).
    *   If SBP 150-220 mmHg: Acute lowering of SBP to target **140 mmHg** is generally considered safe and can be effective (per AHA/ASA guidelines).
    *   Use IV Labetalol, Nicardipine, Clevidipine, Esmolol. Avoid excessive or precipitous BP drops that could compromise cerebral perfusion to penumbral regions.
*   **Reversal of Anticoagulation (if applicable and patient presents within window of drug effect)**:
    *   **Warfarin**: Discontinue. Administer Vitamin K 10mg IV (slow infusion over 30min to avoid anaphylaxis). Administer Prothrombin Complex Concentrate (PCC - e.g., Kcentra, Octaplex) based on INR and weight. FFP if PCC unavailable. Target INR <1.4 rapidly.
    *   **Direct Oral Anticoagulants (DOACs)**:
        *   Dabigatran: Idarucizumab (Praxbind) 5g IV.
        *   Factor Xa inhibitors (Rivaroxaban, Apixaban, Edoxaban): Andexanet Alfa (Andexxa) if available. If not, PCC (activated or non-activated) or FEIBA may be considered.
        *   Activated charcoal if last dose taken <2-4 hours (consult toxicology/pharmacy).
    *   **Antiplatelet Agents (Aspirin, Clopidogrel, Ticagrelor)**: Platelet transfusion generally not recommended for antiplatelet-associated ICH unless neurosurgical intervention is planned or specific circumstances. Desmopressin (DDAVP) may be considered by some for platelet dysfunction.
*   **ICP Management**: As per general neurocritical care guidelines (HOB elevation 30°, analgesia/sedation, osmotic therapy - Mannitol or hypertonic saline if signs of herniation or ↑ICP). Consider EVD for hydrocephalus or ICP monitoring if indicated.
*   **Seizure Prophylaxis/Treatment**: Prophylactic AEDs generally not recommended unless seizure occurs or very high risk (e.g., lobar ICH). If seizures occur, treat promptly with IV AEDs (e.g., Levetiracetam, Fosphenytoin).
*   **Neurosurgical Consultation**: Consider for potential hematoma evacuation, especially for:
    *   Cerebellar hematomas >3cm causing brainstem compression or hydrocephalus (often surgical emergency).
    *   Supratentorial hematomas with significant mass effect, neurological deterioration, or refractory ↑ICP.
*   **Temperature Control**: Treat fever (>38°C) aggressively.
*   **Glycemic Control**: Target blood glucose 140-180 mg/dL.

#### B. Subarachnoid Hemorrhage (SAH) - Typically Aneurysmal

*   **Goal**: Prevent rebleeding, manage vasospasm, treat hydrocephalus, control ICP.
*   **Secure Aneurysm**: Prompt diagnosis with CTA/MRA/DSA. Early endovascular coiling or surgical clipping of ruptured aneurysm (typically within 24-72 hours) to prevent rebleeding.
*   **Blood Pressure Control**: Maintain SBP typically <160 mmHg (or as directed by Neurosurgeon/Neurointensivist) until aneurysm is secured to reduce rebleeding risk. After securing, BP targets may be more liberal to maintain CPP if vasospasm occurs.
*   **Prevent/Manage Cerebral Vasospasm** (typically occurs 4-14 days post-SAH):
    *   **Nimodipine PO/NG**: 60mg every 4 hours for 21 days for all aneurysmal SAH patients.
    *   Maintain euvolemia (avoid hypovolemia).
    *   Monitor with daily Transcranial Dopplers (TCDs) and frequent neurological exams.
    *   If vasospasm develops and causes neurological deficits: "Triple H" therapy (Hypervolemia, Hypertension, Hemodilution - largely historical, focus now on euvolemia and induced hypertension). Endovascular therapy (intra-arterial vasodilators like Nicardipine/Verapamil, balloon angioplasty).
*   **Manage Hydrocephalus**: External Ventricular Drain (EVD) may be required for CSF diversion and ICP monitoring if acute hydrocephalus develops.
*   **Seizure Prophylaxis**: May be considered in the immediate post-hemorrhage period (e.g., for 7 days); treat seizures if they occur.
*   **Hyponatremia Management**: Common (SIADH or Cerebral Salt Wasting). Careful fluid and sodium management. Avoid hypotonic fluids. Hypertonic saline or salt tablets may be needed. Fludrocortisone for CSW.

### IV. General Supportive Care & Secondary Prevention (All Stroke Types After Acute Phase)

*   **Airway/Breathing**: Maintain SpO2 >94%. Intubate if GCS ≤8, unprotected airway, or respiratory failure.
*   **Dysphagia Screen**: Perform bedside swallow screen by trained personnel before any oral intake. Formal swallow evaluation by Speech Language Pathologist (SLP) if screen failed or high risk. Implement aspiration precautions.
*   **Nutrition**: Initiate enteral nutrition within 24-72 hours if patient is NPO and unable to take PO safely. Consult dietitian.
*   **Glycemic Control**: Target blood glucose 140-180 mg/dL. Avoid hypoglycemia.
*   **Temperature Control**: Treat fever (>38°C) aggressively (e.g., acetaminophen, cooling measures).
*   **VTE Prophylaxis**: Intermittent pneumatic compression (IPC) devices for all immobile stroke patients. Pharmacologic prophylaxis (LMWH/UFH) once bleeding risk is deemed stable (e.g., 24-48 hours post-ischemic stroke if no tPA and no hemorrhagic conversion; timing for hemorrhagic stroke is individualized based on stability and neurosurgical input, often delayed).
*   **Mobilization & Rehabilitation**: Early involvement of PT, OT, SLP.
*   **Secondary Prevention (Ischemic Stroke)**:
    *   Antiplatelet therapy (Aspirin, Clopidogrel, Aspirin/Dipyridamole ER) initiated within 24-48h (if no tPA) or after 24h (if tPA given and follow-up CT clear). Dual antiplatelet therapy (DAPT - Aspirin + Clopidogrel) for short duration (21-90 days) in minor stroke (NIHSS ≤3-5) or TIA.
    *   Statin therapy (high-intensity) regardless of baseline cholesterol.
    *   Anticoagulation for atrial fibrillation or other cardioembolic sources (timing individualized).
    *   BP management (long-term goal <130/80 mmHg).
    *   Diabetes management. Smoking cessation. Lifestyle modification.
*   **Depression Screening**: Common post-stroke. Monitor and treat as needed.
*   **Stroke Education**: Provide education to patient and family regarding stroke, risk factors, recovery, and secondary prevention.

### V. Quality Metrics & Continuous Improvement
*   Monitor and report on key stroke performance metrics (e.g., door-to-CT, door-to-needle, door-to-puncture times, NIHSS documentation, dysphagia screening, VTE prophylaxis, discharge on antiplatelets/statins/anticoagulants as indicated).
*   Regular multidisciplinary stroke case reviews and process improvement initiatives.`,
    categoryType: 'Policy',
    keywordsForImage: 'brain CT scan stroke',
  },
  {
    id: 'medication-administration',
    slug: 'medication-administration',
    title: 'Safe Medication Administration Guidelines',
    summary: 'ICU-specific policies for ensuring accuracy and safety in medication administration, including high-alert drugs and infusion management.',
    content: `## General Overview: Purpose of Policy

This policy establishes guidelines for the safe preparation, administration, and documentation of medications for all patients within the Intensive Care Unit (ICU). The purpose is to minimize medication errors, prevent adverse drug events (ADEs), and ensure optimal therapeutic outcomes. Given the complexity of ICU patients and the frequent use of high-alert medications, strict adherence to these guidelines by all healthcare professionals involved in the medication use process is mandatory.

## In-Depth Policy Details & Procedures

### I. The "Rights" of Medication Administration (Expanded for Critical Care)

A systematic check must be performed by the administering licensed professional (e.g., RN) before any medication is given. The "10 Rights" include:

1.  **Right Patient**:
    *   Verify using at least **two unique patient identifiers** (e.g., patient's full name and date of birth, or name and medical record number).
    *   Compare identifiers on the Medication Administration Record (MAR) with the patient's identification band.
    *   Utilize Barcode Medication Administration (BCMA) system if available – scan patient armband.
2.  **Right Drug (Medication)**:
    *   Check medication label against the MAR **three times**:
        1.  When removing the medication from storage (e.g., Pyxis, medication cart, pharmacy).
        2.  When preparing or drawing up the medication.
        3.  At the bedside immediately before administration.
    *   Be vigilant for Look-Alike/Sound-Alike (LASA) drugs. Note Tall Man lettering if used. Question any discrepancies.
    *   Utilize BCMA – scan medication barcode.
3.  **Right Dose**:
    *   Verify the ordered dose is appropriate for the patient's age, weight, clinical condition, and renal/hepatic function.
    *   Double-check all calculations, especially for pediatric patients, weight-based dosing, titrations, and high-alert medications. **Independent double-check by a second licensed professional is required for specific high-alert medications and calculations (see Section II).**
    *   Use leading zeros for doses less than 1 (e.g., **0.5 mg**, not .5 mg). Avoid trailing zeros for whole numbers (e.g., **5 mg**, not 5.0 mg).
    *   Ensure correct concentration is used, especially for IV infusions.
4.  **Right Route**:
    *   Confirm the ordered route (e.g., IV, IM, SubQ, PO, NG/OG, SL, PR, Inhaled, Topical) is appropriate and safe for the specific medication and patient.
    *   For IV medications, ensure correct line access (e.g., peripheral vs. central line, dedicated lumen for specific drugs like TPN or incompatible infusions). Label all IV lines at the hub closest to the patient.
5.  **Right Time/Frequency**:
    *   Administer medications within the institutionally defined window (typically 30-60 minutes before or after the scheduled time for non-time-critical meds). Time-critical medications (e.g., antibiotics for sepsis, insulin with meals, anticoagulants) must be given at the exact time or within a very narrow window.
    *   Consider pharmacokinetics (e.g., half-life, peak/trough levels), drug interactions, and timing related to meals or other medications/procedures.
6.  **Right Documentation**:
    *   Document medication administration on the MAR **immediately after** giving the drug, never before.
    *   Documentation must include: drug name, dose, route, time of administration, and signature/initials of the administering nurse.
    *   For PRN medications: Document reason for administration and patient's response/effectiveness.
    *   For titrated infusions: Document start time, initial rate, all rate changes, and corresponding patient responses/parameters (e.g., BP, HR, pain score, sedation score).
    *   Document any withheld or refused doses with the reason and notification to the provider.
7.  **Right Reason/Indication**:
    *   Understand *why* the patient is receiving the medication and if it aligns with their current clinical condition and diagnoses.
    *   Question any medication orders that seem inappropriate, unclear, or illogical.
8.  **Right Response/Evaluation**:
    *   Monitor the patient for the desired therapeutic effects of the medication.
    *   Assess for and document any adverse reactions, side effects, or allergic responses. Report significant findings to the provider.
9.  **Right to Refuse**:
    *   Competent adult patients have the right to refuse medication after being fully informed of the potential benefits and risks/consequences of refusal.
    *   Educate the patient. If refusal persists, document the refusal, the reason provided, patient education given, and notification of the provider.
10. **Right Education**:
    *   Inform the patient (and/or family if appropriate and patient consents) about the medication: name, purpose/intended effect, common side effects, and important information to report to the nurse/provider.

### II. High-Alert Medications in the ICU

These medications have an increased risk of causing significant patient harm when used in error. They require enhanced vigilance, standardized protocols, and often specific safety procedures.

| Category / Examples                                                  | Common Risks Associated with Errors                                          | Key Safeguards & ICU-Specific Policies                                                                                                                                                                                                                                                                |
|----------------------------------------------------------------------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Insulin (IV continuous infusions & SubQ)**                         | Severe hypoglycemia (can lead to brain injury/death), hyperglycemia (from errors in dosing/omission). | **Independent Double-Check (IDC)** required for all IV insulin doses, rates, and concentration changes by two licensed nurses. Standardized concentrations for IV infusions. Clear labeling of U-100 vs. U-500 insulin. Frequent blood glucose monitoring per protocol. Hypoglycemia treatment protocol readily available. No abbreviations (e.g., write "units," not "U"). |
| **Anticoagulants (Heparin IV infusion, Warfarin, LMWHs, DOACs, Thrombolytics)** | Severe bleeding (hemorrhage), thrombosis (from subtherapeutic dosing or errors). | **IDC** for initiation and rate changes of IV heparin infusions, and for doses of thrombolytics. Baseline and ongoing monitoring of appropriate labs (PT/INR for warfarin, aPTT or anti-Xa for heparin, platelets). Standardized protocols/nomograms for anticoagulation. Reversal agents readily available. Patient/family education on bleeding precautions. |
| **Narcotics/Opioids (IV continuous infusions, PCA, Epidural, IVP boluses)** | Respiratory depression, oversedation, hypotension, errors in programming PCA/epidural pumps. | **IDC** for PCA/epidural pump setup, loading doses, and rate/concentration changes. Use of standardized concentrations. Careful titration based on validated pain/sedation scales. Continuous SaO2 and/or ETCO2 monitoring for patients on infusions or at high risk. Frequent assessment of pain, sedation, and respiratory status. Naloxone readily available. |
| **Sedatives (IV continuous infusions - Propofol, Benzodiazepines, Dexmedetomidine)** | Respiratory depression, hypotension, delirium (esp. benzodiazepines), PRIS (Propofol), bradycardia (Dexmedetomidine). | **IDC** for initiation and rate changes of continuous infusions. Titration based on validated sedation scales (e.g., RASS, SAS) to achieve targeted sedation level (often light sedation). Daily sedation interruption/assessment unless contraindicated. Continuous cardiorespiratory monitoring. Awareness of drug accumulation and potential for withdrawal. |
| **Concentrated Electrolytes (e.g., Potassium Chloride IV, Potassium Phosphate IV, Magnesium Sulfate IV, Hypertonic Saline >0.9%)** | Life-threatening arrhythmias (esp. K⁺), neurological changes, vein irritation/phlebitis, tissue damage/necrosis if extravasated, fluid overload (hypertonic saline). | **Pharmacy preparation** of all IV electrolyte infusions is strongly preferred. Remove concentrated forms from patient care unit floor stock where possible. Clear "High Alert" labeling ("Dilute Before Use," "Contains Potassium," etc.). Administer via infusion pump with rate limits. Verify compatibility. Monitor serum electrolyte levels closely. Maximum infusion rates and concentrations as per institutional policy (e.g., KCl generally ≤10-20 mEq/hr via peripheral line, higher via central line with cardiac monitoring). |
| **Vasoactive Agents (e.g., Norepinephrine, Epinephrine, Dopamine, Dobutamine, Vasopressin, Phenylephrine, Milrinone, Nitroprusside, Nitroglycerin IV infusions)** | Extravasation leading to tissue necrosis, severe hypertension/hypotension, arrhythmias, end-organ ischemia (digital, mesenteric). | **Administer via Central Venous Catheter (CVC)** whenever possible, especially for prolonged or high-dose infusions. If peripheral IV must be used short-term, use large vein, monitor site q1h for extravasation. **IDC** for initiation, concentration changes, and rate changes. Use infusion pump with safety limits/drug library. Continuous hemodynamic monitoring (BP, HR, ECG, perfusion). Clear titration orders with specific target parameters (e.g., MAP >65 mmHg) and titration steps. Extravasation kit (containing phentolamine for α-agonists, or other antidotes as appropriate) readily available. |
| **Neuromuscular Blocking Agents (NMBAs / Paralytics - e.g., Cisatracurium, Rocuronium, Vecuronium)** | Respiratory arrest (if patient becomes disconnected from ventilator or ETT is dislodged), patient awareness and distress (if inadequately sedated/analgesized), prolonged muscle weakness (Acute Quadriplegic Myopathy - esp. with corticosteroids). | **MUST ensure adequate and continuous sedation and analgesia** prior to and during NMBA administration (assess with validated scales, e.g., RASS, CPOT). Mechanical ventilation mandatory. **IDC** for initiation and dose changes. Monitor depth of paralysis with Train-of-Four (TOF) stimulation (target 1-2 twitches). Clear "PARALYTIC AGENT - CAUSES RESPIRATORY ARREST" labeling on infusion bags and lines. Physically separate from other infusions if possible. Provide eye care (lubrication, taping). DVT prophylaxis. |
| **Chemotherapeutic Agents (Cytotoxic Drugs)**                               | Myelosuppression, severe organ toxicities (cardiac, renal, hepatic, pulmonary), hypersensitivity reactions, extravasation with severe tissue damage. | Specialized training/certification required for handling and administration. Adherence to specific institutional chemotherapy protocols. Use of appropriate Personal Protective Equipment (PPE). Spill kits readily available. **IDC** for all doses and infusion rates. Strict procedures for preparation, administration, and disposal. |
| **Antiarrhythmics (IV infusions - e.g., Amiodarone, Lidocaine, Diltiazem, Procainamide)** | Proarrhythmic effects (can cause new or worsened arrhythmias), hypotension, bradycardia, heart block, specific organ toxicities (e.g., Amiodarone: pulmonary, thyroid, liver). | Continuous ECG monitoring during initiation and titration. Frequent vital signs. Awareness of drug interactions and QTc prolonging potential. Standardized loading dose and maintenance infusion protocols. **IDC** for initiation and rate changes. |

**Independent Double-Check (IDC) Procedure**:
*   Two licensed professionals (e.g., RN-RN, RN-Pharmacist, RN-MD) independently verify the medication order against the prepared medication and pump settings (if applicable) *before* administration or initiation of infusion.
*   This includes verifying: Right Patient, Right Drug, Right Dose, Right Route, Right Time, Right Concentration, Right Diluent, Right Rate, Right Pump Settings, Line Tracing (from bag to patient).
*   Both professionals sign/document the check as per institutional policy.

### III. IV Medication Safety Practices

*   **Compatibility**: Always verify medication compatibility before mixing or Y-siting infusions. Consult pharmacist, Trissel's, Micromedex, or other institutional compatibility resources. Flush lines thoroughly with compatible solution (e.g., Normal Saline) between administration of incompatible medications.
*   **Labeling**:
    *   All IV bags/syringes must be clearly labeled with: patient name, second identifier, drug name (generic & brand if appropriate), dose, concentration, diluent and volume, date/time prepared, expiration date/time, and initials of preparer/checker.
    *   All IV tubing and extension sets must be labeled at the patient-end port (distal hub) indicating the drug being infused and the date/time tubing was initiated.
    *   Label channels on infusion pumps clearly.
*   **Smart Infusion Pumps**: Utilize institutional drug libraries with standardized concentrations and pre-set dose limits (soft and hard stops) whenever available. **Always verify pump programming against the order, even when using the library.**
*   **Line Tracing**: Before initiating any new IV infusion, or when taking over care, trace all IV lines from the infusion container, through the pump (if used), to the patient access site to ensure correct connection and prevent misconnections. Perform this tracing systematically.
*   **Titratable Infusions**:
    *   Orders must be clear, complete, and include: drug name, starting dose/rate, titration parameters (e.g., titrate by X amount every Y minutes), specific goal/target parameter (e.g., MAP >65 mmHg, RASS -2, pain score <4, blood glucose 140-180 mg/dL), and a maximum dose or rate.
    *   Document all titrations (rate changes) and the corresponding patient response/parameter meticulously on the flowsheet or MAR.
*   **Extravasation Management (for vesicant or irritant drugs)**:
    *   Vesicants (e.g., vasopressors, chemotherapy, hypertonic solutions, calcium chloride/gluconate, promethazine) can cause severe tissue damage if they leak outside the vein.
    *   Monitor IV site frequently (e.g., q1h for peripheral vesicant infusions, or per policy), especially peripheral sites. Assess for pain, swelling, redness, blanching, coolness, lack of blood return.
    *   If extravasation is suspected:
        1.  **Stop infusion immediately.**
        2.  Leave catheter in place initially (may attempt to aspirate residual drug - use small syringe, gentle suction).
        3.  Notify provider STAT.
        4.  Disconnect tubing from catheter.
        5.  Administer antidote if available and ordered (e.g., Phentolamine for vasopressors, Hyaluronidase for some agents, Sodium Thiosulfate for mechlorethamine). Follow specific antidote protocol.
        6.  Apply cool or warm compresses as indicated by drug type and institutional policy (e.g., cool for most vesicants, warm for vinca alkaloids/epipodophyllotoxins).
        7.  Elevate affected limb.
        8.  Document incident thoroughly (including assessment, interventions, patient response, photos if permitted by policy).
    *   Use central venous catheters for continuous vesicant infusions whenever possible. For peripheral administration, use a new IV site in a large vein, avoid areas of flexion (e.g., AC fossa, wrist). Assess patency and blood return before and during administration.

### IV. Medication Reconciliation
*   Perform a thorough medication reconciliation (comparing patient's home medications with currently ordered medications) upon ICU admission, transfer to/from other units/levels of care, and at discharge.
*   Identify and resolve any discrepancies (omissions, duplications, dosing errors, contraindications, interactions) in consultation with the provider and pharmacist.

### V. Reporting Medication Errors and Near Misses
*   Report **all** medication errors (whether they reach the patient or not) and near misses (errors caught before reaching the patient) promptly through the institution's confidential, non-punitive event reporting system.
*   This is crucial for a culture of safety, allowing for system-level analysis, identification of trends, and implementation of corrective actions to prevent future events.
*   Participate in Root Cause Analysis (RCA) for significant medication events as appropriate.`,
    categoryType: 'Policy',
    keywordsForImage: 'medication safety nurse',
  },
  {
    id: 'central-line-care',
    slug: 'central-line-care',
    title: 'Central Line Associated Bloodstream Infection (CLABSI) Prevention',
    summary: 'Comprehensive protocols for CVC insertion, maintenance, dressing changes, and hub care to prevent CLABSIs.',
    content: `## General Overview: Purpose of Policy

This policy outlines the evidence-based practices for the insertion, care, and maintenance of central venous catheters (CVCs) to prevent Central Line-Associated Bloodstream Infections (CLABSIs) in all patient care areas, with specific emphasis on the Intensive Care Unit (ICU). CLABSIs are serious, costly, and largely preventable healthcare-associated infections (HAIs) that significantly increase patient morbidity, mortality, length of stay, and healthcare costs. Strict adherence to these bundled interventions by all healthcare personnel is mandatory.

## In-Depth Policy Details & Procedures

### I. Central Line Insertion Bundle ("Maximal Sterile Barrier Precautions")

This bundle outlines key infection prevention practices to be followed by the inserting provider and all assisting personnel during the insertion of any CVC (non-tunneled, PICCs, tunneled, implanted ports). A checklist verifying adherence should be used for every CVC insertion.

1.  **Hand Hygiene**:
    *   All personnel involved in the procedure must perform meticulous hand hygiene using soap and water or an alcohol-based hand rub (ABHR) before donning sterile gloves and any time hands become soiled.
2.  **Maximal Barrier Precautions During Insertion**:
    *   **Inserter**: Must wear a cap, mask (covering nose and mouth), sterile gown, and sterile gloves.
    *   **All other personnel in the room during insertion**: Must wear a cap and mask.
    *   **Patient**: Cover the patient from head to toe with a large sterile drape, with a small fenestration for the insertion site.
3.  **Skin Antisepsis at Insertion Site**:
    *   Cleanse the insertion site with an **alcoholic chlorhexidine gluconate (CHG) solution (>0.5% CHG with alcohol, e.g., 2% CHG in 70% isopropyl alcohol - ChloraPrep™ or equivalent)**.
    *   Use a vigorous back-and-forth friction scrub for at least **30 seconds**.
    *   Allow the antiseptic solution to **air dry completely** (typically 30 seconds to 2 minutes, or per manufacturer's instructions) before skin puncture. **Do not fan or blot dry.**
    *   For patients with CHG contraindication (e.g., allergy, <2 months old per some guidelines), use an alternative antiseptic such as povidone-iodine (allow 2 minutes to dry) or 70% alcohol (allow to dry).
4.  **Optimal Site Selection & Catheter Choice**:
    *   **Adult Patients (Non-tunneled CVCs)**:
        *   The **subclavian vein** is generally the preferred site for non-tunneled CVCs to minimize infection risk, provided it is not contraindicated (e.g., severe coagulopathy, patient with chronic kidney disease (CKD) who may need future AV fistula/graft in that extremity, ipsilateral trauma/pneumothorax).
        *   Avoid the **femoral vein** if possible due to higher risk of CLABSI and DVT, unless other sites are unavailable or contraindicated (e.g., emergency access, extensive burns/trauma to upper body).
        *   The **internal jugular (IJ) vein** is an acceptable alternative to subclavian.
    *   **Use ultrasound guidance** for all IJ CVC insertions and consider for subclavian CVCs to increase success rates, reduce mechanical complications (e.g., arterial puncture, pneumothorax), and minimize the number of insertion attempts.
    *   Select the catheter with the minimum number of lumens necessary for the patient's therapy.
5.  **Daily Review of Line Necessity with Prompt Removal**:
    *   Assess the continued need for the CVC **every day** (e.g., during multidisciplinary rounds).
    *   Document this daily assessment in the patient's medical record, including the rationale for continued CVC use.
    *   Remove the CVC **promptly** when it is no longer clinically indicated (e.g., patient can take PO medications, peripheral IV access is sufficient, therapy completed).

### II. Central Line Maintenance Bundle (Nursing & Provider Responsibility)

Consistent, meticulous care and handling of the CVC post-insertion are crucial to prevent CLABSI.

1.  **Hand Hygiene**:
    *   Perform hand hygiene (soap/water or ABHR) **before and after** any CVC manipulation, including: palpating the insertion site, accessing any part of the CVC system (hubs, tubing, stopcocks), performing dressing changes, or administering medications.
2.  **Disinfection of Needleless Connectors/Injection Ports ("Scrub the Hub")**:
    *   Before **each and every access** (e.g., medication administration, IV fluid initiation, blood sampling, flushing):
        *   Vigorously scrub the surface of all needleless connectors and injection ports for at least **15 seconds** using friction with an appropriate antiseptic (e.g., 70% isopropyl alcohol prep pad, chlorhexidine-based solution, or povidone-iodine - check institutional policy for approved disinfectant and contact time).
        *   Allow the port to **air dry completely** (typically 5-15 seconds for alcohol) before accessing with a sterile syringe or IV tubing.
    *   Consider using antiseptic-impregnated port protectors/caps (e.g., Curos™ caps, SwabCaps™) on all lumens when not in active use to maintain disinfection and provide a physical barrier. Replace with each access or per institutional policy.
3.  **Dressing Care & Site Assessment**:
    *   **Dressing Type**:
        *   Use a **sterile, transparent, semipermeable polyurethane dressing (TSM)** to cover the CVC insertion site to allow continuous visualization.
        *   Consider using a **chlorhexidine-impregnated sponge dressing (e.g., Biopatch™, Tegaderm CHG)** at the insertion site for patients older than 2 months if the CLABSI rate is not decreasing despite adherence to basic prevention measures (unless contraindicated due to allergy or site irritation).
    *   **Dressing Change Frequency**:
        *   **TSM Dressings**: Change every **5-7 days** (or per institutional policy, typically not more frequently than q7d unless indicated).
        *   **Gauze Dressings (if used, e.g., if site is oozing/bleeding or patient is diaphoretic)**: Change every **2 days (48 hours)**.
        *   **CHG Sponge/Dressing**: Change with each TSM/gauze dressing change.
        *   **Change any dressing immediately** if it becomes soiled, loose, damp, or if its integrity is compromised.
    *   **Dressing Change Procedure (Aseptic Technique)**:
        *   Perform hand hygiene. Wear clean or sterile gloves (per institutional policy, sterile gloves often recommended for CVC dressing changes in ICU) and a mask. Patient should also wear a mask or turn their head away from the site during the procedure.
        *   Carefully remove the old dressing to avoid dislodging the catheter.
        *   Assess the insertion site visually and by palpation (through intact dressing if not due for change) daily for signs of infection (redness, pain, swelling, tenderness, warmth, purulence, drainage) and catheter securement.
        *   Cleanse the skin around the insertion site with alcoholic CHG (>0.5%) using friction and allow to air dry completely before applying the new sterile dressing.
        *   Document the dressing change, site appearance, catheter position (e.g., external length if marked), and any issues in the medical record.
4.  **IV Tubing, Needleless Connectors, and Solution Care**:
    *   **Administration Sets (IV Tubing)**:
        *   For continuous infusions (not blood, blood products, or lipid emulsions): Change no more frequently than every **96 hours**, but at least every **7 days** (or per institutional policy).
        *   For intermittent infusions or when tubing is disconnected: Consider changing every 24 hours.
        *   For blood/blood products: Change tubing within **4 hours** of initiating the transfusion for each unit, or after completion of 2 units if given sequentially (max 4 hours per unit), or every 24 hours if multiple units are given through the same set (check specific blood bank/institutional policy).
        *   For lipid emulsions (e.g., propofol, TPN with lipids): Change tubing every **12-24 hours** (propofol typically every 12 hours or with each vial/bag change if sooner).
    *   **Needleless Connectors**: Change according to institutional policy (e.g., every 72-96 hours, with primary IV tubing changes, or if blood/debris is visible within the connector, if the septum is damaged, or if integrity is compromised).
    *   Keep all components of the IV system closed and sterile. Ensure all lumens are clamped or capped with sterile devices when not in use or during changes to prevent air embolism and contamination.
5.  **Bathing**:
    *   Daily bathing with **chlorhexidine gluconate (CHG) cloths/solution** for all ICU patients >2 months old (unless contraindicated, e.g., CHG allergy, severe skin breakdown) has been shown to reduce CLABSI rates and other HAIs.
6.  **Catheter Securement**:
    *   Ensure the CVC is properly secured to prevent movement, migration, and pistoning at the insertion site, which can introduce bacteria and cause mechanical complications.
    *   Use an engineered sutureless securement device whenever possible. If sutures are used, ensure they are intact and the site is clean. The dressing should also help secure the catheter.

### III. Blood Sampling from CVCs

*   Minimize blood draws from CVCs to reduce the risk of contamination and infection. Use peripheral venipuncture when possible, especially for routine labs not requiring immediate results.
*   If drawing from a CVC, use strict aseptic technique: hand hygiene, meticulously "scrub the hub," use sterile syringe/vacutainer.
*   **Discard Volume**: Discard an appropriate volume of blood (e.g., 3-5 times the catheter lumen volume, typically 5-10 mL, or per institutional policy) before obtaining the sample for most laboratory tests to avoid contamination with flush solution or infusates. **Exception**: Blood cultures or certain coagulation studies where the initial draw may be required or a smaller discard is indicated (check specific lab/institutional policy).
*   **Blood Cultures for Suspected CLABSI**: If CLABSI is suspected (e.g., new fever, chills, leukocytosis, hypotension with no other obvious source in a patient with a CVC):
    *   Obtain at least **two sets of blood cultures**.
    *   One set should be drawn from a CVC lumen (or each lumen if multi-lumen catheter and suspicion is high for a specific lumen being the source).
    *   At least one set must be drawn from a **peripheral venipuncture site**.
    *   Draw samples ideally simultaneously or as close in time as possible. Clearly label the source (CVC lumen #, peripheral site) of each culture bottle.
    *   **Differential Time to Positivity (DTP)**: If the CVC-drawn culture becomes positive ≥2 hours before the peripheral culture, it is highly suggestive of CLABSI.

### IV. Staff Education, Competency, and Surveillance
*   Regular training and competency validation for all healthcare personnel involved in CVC insertion, care, and maintenance are essential. This includes physicians, nurses, and other relevant staff.
*   Monitor adherence to CLABSI prevention bundles through direct observation audits and checklist completion. Provide regular feedback to staff on performance.
*   Conduct surveillance for CLABSIs using standardized definitions (e.g., NHSN criteria).
*   Investigate all CLABSIs thoroughly using a root cause analysis (RCA) approach to identify contributing factors and implement targeted corrective actions for system improvement.
*   Foster a culture of safety where all team members feel empowered to speak up if they observe a breach in infection prevention practices.`,
    categoryType: 'Policy',
    keywordsForImage: 'central line CVC care',
  },
  {
    id: 'massive-transfusion-protocol',
    slug: 'massive-transfusion-protocol',
    title: 'Massive Transfusion Protocol (MTP)',
    summary: 'Guidelines for activating and managing massive transfusion in patients with severe hemorrhage, including blood product ratios and monitoring.',
    categoryType: 'Policy',
    keywordsForImage: 'blood transfusion emergency',
    content: `## General Overview: Purpose of Policy
This policy outlines the standardized procedure for the activation and management of Massive Transfusion Protocol (MTP) in adult patients experiencing, or at high risk for, severe, life-threatening hemorrhage. The goal of MTP is to rapidly provide balanced resuscitation with blood products (Red Blood Cells, Plasma, Platelets) to correct coagulopathy, restore tissue perfusion, and improve survival in massively bleeding patients.

## In-Depth Protocol Details & Procedures

### I. Definition of Massive Transfusion
Massive transfusion is commonly defined as:
*   Replacement of >1 blood volume in 24 hours (approximately 10 units of Packed Red Blood Cells - PRBCs - in a 70kg adult).
*   Transfusion of >4 units of PRBCs within 1 hour when ongoing bleeding is anticipated.
*   Replacement of 50% of total blood volume within 3 hours.
*   Specific clinical triggers (see below) may also activate the MTP.

### II. MTP Activation Criteria
MTP should be activated by a designated attending physician (e.g., Trauma Surgeon, Emergency Physician, Anesthesiologist, Intensivist) based on clinical judgment and/or predefined criteria. Consider MTP activation for patients with:
1.  **Physiological Triggers**:
    *   SBP <90 mmHg and HR >120 bpm despite initial fluid resuscitation (e.g., 1-2L crystalloid).
    *   Persistent hemodynamic instability.
    *   Evidence of poor end-organ perfusion (e.g., altered mental status, oliguria, mottled skin).
    *   Base Deficit > -6 mEq/L or Lactate >4 mmol/L in the setting of hemorrhage.
2.  **Anatomical Triggers (Trauma)**:
    *   Penetrating torso, neck, or proximal extremity trauma with hemodynamic instability.
    *   Multiple long bone fractures with hemodynamic instability.
    *   Unstable pelvic fracture.
    *   Significant active bleeding from any site.
3.  **Laboratory Triggers (if rapidly available and patient is actively bleeding)**:
    *   Severe coagulopathy (e.g., INR >1.8, PTT >60s) in a bleeding patient.
    *   Severe acidosis (pH <7.2) with active bleeding.
4.  **Scoring Systems (if used by institution)**:
    *   Assessment of Blood Consumption (ABC) Score ≥2.
    *   Trauma Associated Severe Hemorrhage (TASH) Score.
    *   Emergency Transfusion Score (ETS).
5.  **Clinical Gestalt**: Experienced clinician's judgment that massive transfusion is imminent or ongoing.

**Notification**: Once MTP is activated, the provider must **clearly announce "MTP ACTIVATION"** and notify:
*   Blood Bank/Transfusion Service STAT.
*   Operating Room (if applicable).
*   ICU (if patient is there or anticipated destination).
*   Designated MTP runner/team.

### III. Blood Product Resuscitation Strategy
The MTP aims for a balanced resuscitation approach, often targeting a ratio of:
*   **1:1:1 (PRBCs : FFP : Platelets)**
    *   This means for every 1 unit of PRBCs, approximately 1 unit of FFP and 1 apheresis unit of platelets (or equivalent 5-6 whole blood-derived platelets) should be administered.
*   **MTP "Packs"**: Blood bank will typically issue blood products in predefined "packs" or coolers containing these ratios to facilitate rapid administration.
    *   Example MTP Pack: 6 units PRBCs, 6 units FFP, 1 apheresis unit Platelets.
*   **Early Use of Plasma and Platelets**: Do not wait for severe coagulopathy or thrombocytopenia to develop. Administer FFP and platelets empirically along with PRBCs from the outset of MTP.
*   **Type O Blood**:
    *   **Type O Rh-negative PRBCs**: Use for females of childbearing potential or if Rh status unknown in emergent situations.
    *   **Type O Rh-positive PRBCs**: May be used for males or females beyond childbearing potential if O-negative is scarce.
    *   Switch to type-specific blood as soon as feasible after crossmatch.
*   **Plasma**: Type AB plasma is universal donor plasma and can be used if ABO type unknown or type-specific is unavailable. Thaw FFP in advance if MTP anticipated or use thawed plasma (if available per institutional policy).
*   **Cryoprecipitate**: Consider administering cryoprecipitate (1-2 pools, typically 10 units) if fibrinogen level is <100-150 mg/dL or if viscoelastic testing (TEG/ROTEM) indicates fibrinogen deficiency. May be included in later MTP packs or ordered separately.
*   **Tranexamic Acid (TXA)**:
    *   For trauma patients with, or at risk of, significant hemorrhage: Administer 1 gram IV over 10 minutes **within 3 hours of injury**, followed by 1 gram IV infusion over 8 hours.
    *   Consider for other causes of massive hemorrhage (e.g., PPH, some surgical bleeding) per specific guidelines. **Do NOT administer if >3 hours from injury in trauma (potential harm).**

### IV. Monitoring and Laboratory Goals During MTP
Continuous clinical assessment and frequent laboratory monitoring are crucial.
*   **Hemodynamics**: Continuous BP, HR, SpO2. Target SBP >90 mmHg or MAP >65 mmHg (may be lower targets in "permissive hypotension" for uncontrolled hemorrhage pre-operatively).
*   **Temperature**: Prevent and treat hypothermia (target >35°C or 95°F). Use fluid warmers, forced air warmers, warm blankets. Hypothermia worsens coagulopathy.
*   **Acid-Base Status**: Serial ABGs. Correct severe acidosis (pH <7.1-7.2 may impair coagulation).
*   **Coagulation Parameters (q30-60min or after each MTP pack)**:
    *   PT/INR: Target <1.5-1.8
    *   aPTT: Target <1.5 x control
    *   Fibrinogen: Target >150-200 mg/dL
    *   Platelet Count: Target >50,000/μL (consider >100,000/μL for CNS trauma or severe bleeding).
    *   Viscoelastic Testing (TEG/ROTEM) if available: Provides real-time global assessment of coagulation and can guide component therapy more precisely (e.g., specific need for fibrinogen, platelets, or factor replacement).
*   **Ionized Calcium (iCa)**: Citrate in transfused blood products chelates calcium, leading to hypocalcemia. Monitor iCa frequently and replete with IV calcium chloride or calcium gluconate to maintain normal levels (e.g., iCa >1.1 mmol/L). Hypocalcemia impairs myocardial contractility and coagulation.
*   **Potassium (K⁺)**: Stored PRBCs leak potassium. Risk of hyperkalemia, especially with rapid transfusion rates and renal impairment. Monitor closely.
*   **Hemoglobin/Hematocrit**: Target Hgb typically 7-9 g/dL.

### V. Adjunctive Measures
*   **Identify and Control Bleeding Source**: Definitive surgical or interventional radiological control of hemorrhage is paramount. MTP is a bridge to definitive hemostasis.
*   **Damage Control Resuscitation (DCR)**: Encompasses MTP, permissive hypotension (until bleeding controlled), prevention/treatment of hypothermia and acidosis, and damage control surgery (abbreviated initial surgery to control hemorrhage/contamination, followed by resuscitation in ICU and planned re-operation).
*   **Fluid Warmers**: All blood products and IV fluids should be warmed to prevent hypothermia.
*   **Rapid Infusion Devices**: May be necessary to deliver products quickly.
*   **Minimize Crystalloid Use**: Excessive crystalloid administration can lead to dilutional coagulopathy, acidosis, and edema. Focus on blood product resuscitation.

### VI. MTP Deactivation
The activating physician should clearly announce **"MTP DEACTIVATION"** to all relevant teams (especially Blood Bank) when:
*   Hemorrhage is controlled.
*   Patient is hemodynamically stabilizing.
*   Coagulation parameters are improving/normalizing.
*   Blood Bank will stop automatic issuance of MTP packs but will continue to provide products as ordered.

### VII. Complications of Massive Transfusion
*   Transfusion Reactions (hemolytic, febrile, allergic, TRALI, TACO - see Hematologic System).
*   Coagulopathy (dilutional or consumptive).
*   Hypothermia.
*   Acid-Base disturbances (metabolic acidosis from hypoperfusion, metabolic alkalosis from citrate metabolism).
*   Electrolyte abnormalities (hyperkalemia, hypocalcemia, hypomagnesemia).
*   Volume overload (TACO).
*   Acute Respiratory Distress Syndrome (ARDS).
*   Infection (rare).
*   Alloimmunization.

### VIII. Documentation
Thorough documentation is essential:
*   Time of MTP activation and deactivation.
*   Clinical indication for MTP.
*   All blood products administered (type, unit number, volume, start/end times).
*   All medications administered (e.g., TXA, calcium).
*   Vital signs, laboratory results, and patient response.
*   Any complications or adverse events.

### IX. Team Communication & Roles
Clear, closed-loop communication between all team members (physicians, nurses, blood bank staff, runners, OR/ICU staff) is critical for successful MTP. Pre-defined roles and responsibilities can improve efficiency. Regular MTP drills and debriefings are recommended.`,
    categoryType: 'Policy',
    keywordsForImage: 'blood transfusion emergency',
  },
  {
    id: 'ventilator-weaning-protocol',
    slug: 'ventilator-weaning-protocol',
    title: 'Ventilator Weaning/Liberation Protocol',
    summary: 'Standardized approach for assessing readiness for weaning, conducting spontaneous breathing trials (SBTs), and extubation criteria in ICU patients.',
    categoryType: 'Policy',
    keywordsForImage: 'ventilator weaning patient',
    content: `## General Overview: Purpose of Policy
This policy outlines a standardized, evidence-based protocol for the assessment of readiness for weaning, conduct of Spontaneous Breathing Trials (SBTs), and criteria for liberation from mechanical ventilation (extubation) for adult patients in the Intensive Care Unit (ICU). The goals are to minimize the duration of mechanical ventilation, reduce ventilator-associated complications (e.g., VAP, ICUAW), improve patient comfort, and facilitate timely liberation while ensuring patient safety.

## In-Depth Protocol Details & Procedures

### I. Daily Screening for Weaning Readiness
All mechanically ventilated patients should be screened daily by the RN and/or RT, in collaboration with the physician, for readiness to begin the weaning process.
**Criteria for Daily Screening (All must be met to proceed to SBT assessment):**
1.  **Resolution or significant improvement of the underlying cause of respiratory failure.**
2.  **Adequate Oxygenation**:
    *   PaO2/FiO2 ratio >150-200 mmHg (or SpO2 ≥90-92%)
    *   FiO2 ≤0.4-0.5
    *   PEEP ≤5-8 cm H2O
3.  **Hemodynamic Stability**:
    *   Heart Rate <140 bpm (and stable).
    *   Systolic Blood Pressure 90-160 mmHg (and stable).
    *   No or minimal vasopressor support (e.g., Norepinephrine ≤0.1 mcg/kg/min or equivalent, specific thresholds may vary by institution).
    *   No evidence of active myocardial ischemia.
4.  **Afebrile**: Temperature ≤38.0-38.5°C.
5.  **No Active Sedation or Minimal Sedation**: Patient is arousable (e.g., RASS 0 to -2). Ideally, daily Spontaneous Awakening Trial (SAT) has been performed and patient remains comfortable/cooperative off heavy sedation.
6.  **Adequate Hematocrit/Hemoglobin**: Hgb ≥7-8 g/dL (or patient-specific target).
7.  **Acceptable Metabolic Status**: No significant uncorrected metabolic acidosis or alkalosis that would impair respiratory drive or muscle function.
8.  **No planned major surgical procedures or interventions in the next 24 hours that would require ongoing mechanical ventilation.**

### II. Spontaneous Awakening Trial (SAT) / Sedation Interruption
*   Perform daily SATs in eligible patients by holding or significantly reducing continuous sedative infusions.
*   **Safety Screen for SAT**:
    *   No active seizures.
    *   No active alcohol withdrawal.
    *   No active agitation (e.g., RASS >+1).
    *   No NMBAs.
    *   No evidence of active myocardial ischemia or significantly increased ICP.
*   **SAT Failure Criteria (Stop SAT and restart sedation at ~50% of prior dose, titrate as needed)**:
    *   Sustained anxiety, agitation, or pain (e.g., RASS ≥+2 or >2 point increase in pain score).
    *   Respiratory rate >35/min for >5 minutes.
    *   SpO2 <88-90% for >5 minutes.
    *   Acute cardiac arrhythmia.
    *   Signs of hemodynamic instability (e.g., SBP <80 or >180 mmHg, HR <50 or >140 bpm).
    *   Signs of respiratory distress (accessory muscle use, paradoxical breathing, diaphoresis).
*   If SAT is successful (patient remains comfortable and stable off sedation), proceed to SBT assessment.

### III. Spontaneous Breathing Trial (SBT)
If daily screening criteria and SAT (if applicable) are met, the patient should undergo an SBT to assess their ability to breathe spontaneously with minimal or no ventilator support.
**SBT Methods (choose one, duration typically 30-120 minutes):**
1.  **Low-Level Pressure Support (PSV)**: PS of 5-7 cm H2O with PEEP of 0-5 cm H2O.
2.  **CPAP**: CPAP of 0-5 cm H2O.
3.  **T-piece (or Tracheostomy Collar for tracheostomized patients)**: Patient breathes humidified oxygen via T-piece circuit connected to ETT/trach. FiO2 typically similar to pre-SBT setting or slightly higher.
**During SBT, monitor the patient closely for signs of intolerance.**

**SBT Failure Criteria (Stop SBT and return patient to pre-SBT ventilator settings):**
*   **Respiratory Distress/Increased Work of Breathing**:
    *   Respiratory Rate (RR) >35 breaths/min for >5 minutes (or >20% increase from baseline).
    *   Use of accessory muscles, paradoxical abdominal breathing, intercostal retractions.
    *   Diaphoresis.
*   **Inadequate Gas Exchange**:
    *   SpO2 <90% for >5 minutes (or PaO2 <55-60 mmHg on ABG if obtained).
    *   PaCO2 increase >10 mmHg from baseline or pH <7.30-7.32 (if ABG obtained).
    *   Change in ETCO2 if continuously monitored.
*   **Hemodynamic Instability**:
    *   Heart Rate (HR) >140 bpm or sustained increase/decrease >20% from baseline.
    *   Systolic Blood Pressure (SBP) >180 mmHg or <90 mmHg.
    *   Development of new cardiac arrhythmias (e.g., AFib with RVR, frequent PVCs, VT).
*   **Altered Mental Status/Patient Distress**:
    *   Agitation, anxiety, combativeness.
    *   Somnolence, obtundation (not attributable to ongoing sedation).
    *   Patient complains of severe dyspnea or fatigue.

**Successful SBT**: Patient tolerates the SBT for the predetermined duration (30-120 minutes) without developing any failure criteria.

### IV. Assessment for Extubation (If SBT is Successful)
If the SBT is successful, assess the patient for readiness for extubation.
**Key Extubation Criteria**:
1.  **Successful SBT completion.**
2.  **Adequate Mental Status**: Patient is alert, cooperative, able to follow commands (e.g., RASS 0 to -1). Able to protect airway.
3.  **Effective Cough and Ability to Clear Secretions**:
    *   Assess cough strength (subjectively or Peak Cough Flow >60 L/min).
    *   Assess quantity and consistency of secretions. Minimal, thin secretions are ideal. Patient should be able to manage secretions without frequent suctioning.
4.  **Patent Upper Airway**:
    *   **Cuff Leak Test (CLT)**: Perform if concern for laryngeal edema (e.g., prolonged intubation >48-72h, traumatic intubation, history of stridor, burns, anaphylaxis).
        *   Procedure: Fully deflate ETT cuff. Occlude ETT lumen. Assess for audible air leak around the ETT during mechanical breaths (VC mode) or spontaneous breaths.
        *   Interpretation: Presence of a leak suggests minimal laryngeal edema and lower risk of post-extubation stridor. Absence of a leak (or very small leak volume, e.g., <110-130 mL or <10-20% of delivered VT) is concerning for edema. Consider prophylactic systemic steroids (e.g., methylprednisolone 24h prior to planned extubation) if CLT is negative or patient is high risk.
5.  **No other factors contraindicating extubation** (e.g., impending surgery, unstable condition requiring ongoing airway control).

### V. Extubation Procedure
*   Explain procedure to patient.
*   Gather necessary equipment: Suction (oral and ETT), oxygen delivery device (e.g., nasal cannula, face mask, NIV interface if planned), manual resuscitation bag with mask, equipment for potential re-intubation (laryngoscope, ETTs, etc.).
*   Elevate HOB to semi-Fowler's or high-Fowler's position.
*   Thoroughly suction oropharynx and ETT.
*   Pre-oxygenate with 100% FiO2 for a few minutes if tolerated.
*   Fully deflate ETT cuff.
*   Instruct patient to take a deep breath or cough as the tube is removed.
*   Smoothly withdraw ETT at peak inspiration or during cough.
*   Apply oxygen immediately post-extubation.
*   Encourage patient to cough and deep breathe.
*   Assess for stridor, respiratory distress, voice quality, SpO2, RR, HR, BP.

### VI. Post-Extubation Management
*   **Close Monitoring**: Vital signs, SpO2, work of breathing, mental status, ability to clear secretions, especially in the first 1-2 hours and then regularly.
*   **Oxygen Therapy**: Titrate to maintain SpO2 target. High-flow nasal cannula (HFNC) may be beneficial in select patients at high risk of re-intubation.
*   **Pulmonary Hygiene**: Encourage coughing, deep breathing, incentive spirometry. Chest physiotherapy if indicated.
*   **Non-Invasive Ventilation (NIV)**:
    *   Consider prophylactic NIV immediately post-extubation for patients at high risk of post-extubation respiratory failure (e.g., hypercapnic respiratory failure like COPD, CHF, obesity hypoventilation, some neuromuscular disease).
    *   NIV for established post-extubation respiratory failure is less effective and may delay re-intubation; use cautiously.
*   **Stridor Management**: If mild stridor, humidified oxygen, nebulized racemic epinephrine. If severe or unresponsive, prepare for re-intubation. IV steroids may be considered.
*   **Assess Swallowing**: Perform dysphagia screen before initiating oral intake if not already done.

### VII. Re-intubation
If patient develops significant respiratory distress, hypoxemia, hypercapnia, or inability to protect airway post-extubation, re-intubation should be performed promptly by skilled personnel. Delaying necessary re-intubation can worsen outcomes.

### VIII. Protocol Failure and Reassessment
*   If a patient fails an SBT or is not extubated, return to a stable, non-fatiguing mode of ventilation for at least 24 hours (or until underlying issues resolve).
*   Re-evaluate daily for weaning readiness. Identify and address factors contributing to weaning failure (e.g., fluid overload, bronchospasm, electrolyte imbalance, ICUAW, delirium, cardiac dysfunction, excessive secretions, psychological factors).

### IX. Documentation
Thoroughly document all aspects of the weaning process:
*   Daily screening for weaning readiness.
*   SAT process and outcome.
*   SBT method, duration, patient tolerance, reason for failure if applicable.
*   Objective weaning parameters (RSBI, NIF, VC if measured).
*   Cuff leak test results (if performed).
*   Extubation procedure, patient response.
*   Post-extubation monitoring and interventions.`,
    categoryType: 'Policy',
    keywordsForImage: 'ventilator weaning patient',
  },
  {
    id: 'padis-guidelines',
    slug: 'padis-guidelines',
    title: 'Pain, Agitation, Delirium, Immobility, and Sleep Disruption (PADIS) Guidelines',
    summary: 'Key recommendations for managing PADIS in adult ICU patients, including assessment tools and non-pharmacologic/pharmacologic interventions.',
    categoryType: 'Policy',
    keywordsForImage: 'ICU patient care comfort',
    content: `## General Overview: Purpose of Policy
This policy outlines an integrated, evidence-based approach to the assessment, prevention, and management of Pain, Agitation, Delirium, Immobility, and Sleep Disruption (collectively known as PADIS) in adult patients in the Intensive Care Unit (ICU). Effective management of PADIS is associated with improved patient outcomes, including reduced duration of mechanical ventilation, shorter ICU and hospital length of stay, decreased mortality, and better long-term cognitive function. This policy promotes a patient-centered, interprofessional approach.

## In-Depth Policy Details & Procedures

### I. Pain Assessment and Management ("Analgesia First")
Pain is a common and distressing experience for ICU patients. Untreated pain contributes to agitation, delirium, sleep disruption, and physiological stress.
**A. Assessment**:
1.  **Frequency**: Routinely assess pain in all ICU patients (e.g., at least every 4 hours and PRN, with vital signs, after painful procedures, with changes in condition).
2.  **Tools**:
    *   **Self-Report (Gold Standard)**: If patient is able to communicate, use a validated scale like the Numeric Rating Scale (NRS 0-10), Visual Analog Scale (VAS), or Faces Pain Scale-Revised (FPS-R).
    *   **Behavioral Pain Scales (for non-verbal/unable to self-report patients)**:
        *   **Behavioral Pain Scale (BPS)**: Scores facial expression, upper limb movements, compliance with ventilation (for intubated patients) or vocalization (for non-intubated). Score 3-12.
        *   **Critical-Care Pain Observation Tool (CPOT)**: Scores facial expression, body movements, muscle tension, compliance with ventilator (intubated) or vocalization (non-intubated). Score 0-8.
    *   **Physiological Indicators (Adjunctive, Not Diagnostic Alone)**: Changes in HR, BP, RR, diaphoresis. These are non-specific and should be interpreted cautiously in conjunction with behavioral indicators or patient report.
3.  **Documentation**: Document pain scores, interventions, and reassessment of effectiveness.

**B. Management**:
1.  **Non-Pharmacologic Interventions (First-line or Adjunctive)**:
    *   Proper positioning, splinting.
    *   Application of cold/heat (as appropriate).
    *   Massage, relaxation techniques (e.g., guided imagery, music therapy).
    *   Environmental modifications (reduce noise, comfortable temperature).
    *   Reassurance and emotional support.
2.  **Pharmacologic Interventions (Multimodal Analgesia)**:
    *   **Opioids (IV)**: First-line for moderate to severe nociceptive pain (e.g., Fentanyl, Hydromorphone, Morphine). Titrate to effect using smallest effective dose.
        *   Consider patient factors (renal/hepatic function, hemodynamic stability, prior opioid exposure).
        *   Fentanyl: Rapid onset, short duration (bolus), good for hemodynamically unstable patients.
        *   Hydromorphone: Potent, intermediate duration.
        *   Morphine: Longer duration, histamine release (can cause hypotension), active metabolites accumulate in renal failure.
    *   **Non-Opioid Analgesics (Opioid-Sparing)**:
        *   **Acetaminophen (IV/PO/PR)**: For mild-moderate pain, antipyretic.
        *   **NSAIDs (e.g., Ketorolac IV/IM, Ibuprofen IV/PO)**: For mild-moderate pain, anti-inflammatory. Use cautiously (risk of GI bleed, AKI, platelet dysfunction). Limit duration.
        *   **Neuropathic Pain Agents**: Gabapentin, Pregabalin, Ketamine (low-dose infusion), Lidocaine infusion. Consider for neuropathic pain or as adjuncts.
    *   **Analgesia-First Sedation**: Ensure adequate pain control *before* initiating or escalating sedatives for agitation.
    *   **Regional Analgesia**: Epidural analgesia, peripheral nerve blocks for specific types of pain (e.g., post-operative, rib fractures).

### II. Agitation and Sedation Management
Goal: Maintain a calm, comfortable, and cooperative patient (light sedation, e.g., RASS 0 to -2) whenever possible. Avoid deep/prolonged sedation.
**A. Assessment**:
1.  **Frequency**: Routinely assess agitation/sedation levels (e.g., q2-4h and PRN).
2.  **Tools**:
    *   **Richmond Agitation-Sedation Scale (RASS)**: Score +4 (Combative) to -5 (Unarousable). Target RASS is often 0 to -2.
    *   **Sedation-Agitation Scale (SAS)**: Score 1 (Unarousable) to 7 (Dangerous Agitation).
3.  **Identify and Treat Reversible Causes of Agitation**: Pain, delirium, hypoxia, hypercapnia, hypoglycemia, electrolyte imbalance, drug/alcohol withdrawal, ventilator dyssynchrony, fear, anxiety, unmet needs (thirst, full bladder, uncomfortable position).

**B. Management**:
1.  **Non-Pharmacologic Interventions**: Address reversible causes, optimize environment (reduce stimuli, day/night cycle), reorientation, family presence, music, relaxation.
2.  **Pharmacologic Interventions (Analgesia-First Approach)**:
    *   **Ensure adequate analgesia is provided first.**
    *   **Sedative Choice (Non-Benzodiazepines Preferred over Benzodiazepines for routine sedation)**:
        *   **Propofol (IV infusion)**: Rapid onset, short half-life, easy titration. Good for deep sedation if needed or for neurological conditions requiring ICP control. Risks: hypotension, bradycardia, PRIS.
        *   **Dexmedetomidine (IV infusion)**: Provides light to moderate sedation where patient remains rousable ("cooperative sedation"). Minimal respiratory depression. Analgesia-sparing. May reduce delirium. Risks: bradycardia, hypotension (can have initial transient hypertension with loading dose).
        *   **Benzodiazepines (e.g., Midazolam, Lorazepam IV)**: Associated with increased risk of delirium and prolonged ventilation. Reserve for specific indications like alcohol/benzodiazepine withdrawal, active seizures, or if other agents are contraindicated/ineffective, or for deep sedation for NMBAs. Use intermittent boluses or lowest effective infusion rate for shortest possible duration.
        *   **Ketamine (IV infusion, low dose)**: May be used as an adjunct for sedation and analgesia, especially in opioid-tolerant patients or those with bronchospasm.
3.  **Daily Sedation Interruption / Spontaneous Awakening Trials (SATs)**:
    *   Hold or significantly reduce sedative infusions daily in eligible patients to assess neurological status, facilitate weaning, and reduce drug accumulation.
    *   Monitor for SAT failure criteria (agitation, pain, respiratory distress, hemodynamic instability). Restart sedation at ~50% of prior dose if SAT fails.
4.  **Targeted Sedation**: Titrate sedatives to achieve the lightest possible level of sedation consistent with patient safety and comfort, using a validated scale (e.g., RASS 0 to -2).

### III. Delirium Assessment, Prevention, and Management
Delirium is an acute brain dysfunction characterized by inattention, disorganized thinking, and altered level of consciousness. It is common in ICU and associated with poor outcomes.
**A. Assessment**:
1.  **Frequency**: Routinely assess for delirium in all ICU patients (e.g., q8-12h or per shift) once RASS is >-4 (i.e., not deeply sedated/comatose).
2.  **Tools**:
    *   **Confusion Assessment Method for the ICU (CAM-ICU)**.
    *   **Intensive Care Delirium Screening Checklist (ICDSC)**.
3.  **Identify Delirium Subtypes**: Hyperactive, Hypoactive (most common, often missed), Mixed.
4.  **Identify and Address Modifiable Risk Factors**:
    *   **Pre-existing**: Advanced age, dementia, baseline cognitive impairment, hypertension, prior stroke, alcohol abuse.
    *   **ICU-related**: Sepsis, hypoxia, metabolic disturbances, electrolyte imbalance, dehydration, immobility, restraints, sensory deprivation/overload, sleep disruption, medications (benzodiazepines, opioids, anticholinergics).

**B. Prevention (Multicomponent, Non-Pharmacologic Interventions - "ABCDEF Bundle")**:
*   **A**wakening (SATs) and **B**reathing (SBTs) Coordination.
*   **C**hoice of Analgesia and Sedation (avoid benzodiazepines if possible).
*   **D**elirium Monitoring and Management.
*   **E**arly Mobility and Exercise.
*   **F**amily Engagement and Empowerment.
*   Other strategies: Frequent reorientation, cognitive stimulation, optimizing sleep (see below), providing hearing aids/glasses, minimizing noise/light at night.

**C. Management**:
1.  **Non-Pharmacologic Interventions (Primary Approach)**: Focus on prevention strategies listed above. Treat underlying medical conditions contributing to delirium.
2.  **Pharmacologic Interventions (Limited Role, Symptom Control)**:
    *   **Antipsychotics (e.g., Haloperidol, Quetiapine, Olanzapine, Risperidone)**: Not recommended for routine prevention or treatment of delirium. May be considered for short-term use to manage distressing symptoms (e.g., severe agitation, hallucinations, delusions causing harm to self/others) at the lowest effective dose for the shortest duration, if non-pharmacologic measures fail. Monitor for side effects (QTc prolongation, EPS).
    *   **Dexmedetomidine**: May be considered for agitated delirium if sedation is also required, potentially reducing duration of delirium compared to benzodiazepines.
    *   **Avoid Benzodiazepines**: May worsen or prolong delirium.

### IV. Immobility Prevention and Early Mobilization
Prolonged immobility contributes to ICUAW, VTE, pressure injuries, delirium, prolonged ventilation.
**A. Assessment**:
1.  Assess patient's functional status and readiness for mobilization daily.
2.  Identify contraindications to mobilization (e.g., unstable spine/fractures, severe hemodynamic instability, active myocardial ischemia, uncontrolled ↑ICP, unsecured airway).

**B. Interventions**:
1.  **Minimize Sedation**: To facilitate active participation.
2.  **Early and Progressive Mobilization Protocol**:
    *   Initiate as soon as patient is physiologically stable (often within 24-72h of ICU admission).
    *   Multidisciplinary approach (RN, PT, OT, RT, MD).
    *   Progression: Passive range of motion (PROM) -> Active-assisted ROM (AAROM) -> Active ROM (AROM) -> Dangling legs at bedside -> Sitting in chair -> Standing -> Ambulation.
    *   Use of specialized equipment (e.g., cycle ergometers, slings, lifts) may be beneficial.
3.  **Reduce Physical Restraints**: Use only when essential for patient safety and least restrictive method. Remove as soon as possible.

### V. Sleep Disruption Prevention and Management
Sleep disruption is nearly universal in ICU and contributes to delirium, immune dysfunction, and poor recovery.
**A. Assessment**:
1.  Subjective assessment if patient can report (e.g., Richards-Campbell Sleep Questionnaire - RCSQ).
2.  Objective measures (polysomnography) are not practical for routine use. Observe sleep-wake patterns.

**B. Prevention and Management (Non-Pharmacologic Focus)**:
1.  **Optimize Environment**:
    *   Reduce noise levels at night (e.g., dim alarms, quiet conversations, earplugs for patient).
    *   Cluster care activities to allow for uninterrupted sleep periods (at least 2-4 hours).
    *   Control light (dim lights at night, natural light during day if possible).
    *   Maintain comfortable room temperature.
2.  **Promote Circadian Rhythm**: Maintain day-night routines, encourage daytime activity/mobilization.
3.  **Manage Pain and Discomfort**: Ensure adequate analgesia.
4.  **Review Medications**: Minimize use of sleep-disrupting medications (e.g., steroids, diuretics, stimulants) especially at night.
5.  **Pharmacologic Interventions (Use Cautiously, Short-Term if Needed)**:
    *   **Melatonin or Ramelteon (melatonin receptor agonist)**: May be considered.
    *   **Non-Benzodiazepine Hypnotics (e.g., Zolpidem, Zaleplon)**: Use with caution, short-term, potential for delirium/side effects in elderly/critically ill.
    *   **Trazodone**: Low dose may be used for sedative effects.
    *   **Avoid Benzodiazepines and Diphenhydramine** for sleep due to risk of delirium.
    *   Dexmedetomidine (if used for sedation) may promote more natural sleep architecture compared to other sedatives.

### VI. Documentation and Interprofessional Collaboration
*   Document all PADIS assessments, interventions, and patient responses.
*   Utilize interprofessional team rounds (MD, RN, PharmD, RT, PT/OT, Dietitian) to discuss and coordinate PADIS management strategies daily.
*   Regularly evaluate the effectiveness of PADIS protocols and make improvements as needed.`,
    categoryType: 'Policy',
    keywordsForImage: 'ICU patient care comfort',
  }
];

export const bodySystems: ContentItem[] = originalBodySystemsContent.map(item => {
  const { generalOverview, inDepthConsiderations } = splitContent(item.content);
  // Create a new object without the original 'content' field
  const { content, ...restOfItem } = item;
  return {
    ...restOfItem,
    generalOverview,
    inDepthConsiderations,
  };
});

export const topics: ContentItem[] = originalTopicsContent.map(item => {
  const { generalOverview, inDepthConsiderations } = splitContent(item.content);
  const { content, ...restOfItem } = item;
  return {
    ...restOfItem,
    generalOverview,
    inDepthConsiderations,
  };
});

export const policies: ContentItem[] = originalPoliciesContent.map(item => {
  const { generalOverview, inDepthConsiderations } = splitContent(item.content);
  const { content, ...restOfItem } = item;
  return {
    ...restOfItem,
    generalOverview,
    inDepthConsiderations,
  };
});

export const getAllContentItems = (): ContentItem[] => {
  return [...bodySystems, ...topics, ...policies];
};
