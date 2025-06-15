
import type { ContentItem } from '@/types/content';

const splitContent = (markdown: string): { generalOverview: string; inDepthConsiderations: string } => {
  const generalOverviewMarker = "## General Overview";
  const inDepthMarker = "## In-Depth ICU Considerations";
  
  let generalOverview = "";
  let inDepthConsiderations = "";

  const inDepthStartIndex = markdown.indexOf(inDepthMarker);

  if (inDepthStartIndex !== -1) {
    const generalOverviewStartIndexInRelevantText = markdown.substring(0, inDepthStartIndex).indexOf(generalOverviewMarker);
    if (generalOverviewStartIndexInRelevantText !== -1) {
      generalOverview = markdown.substring(generalOverviewStartIndexInRelevantText, inDepthStartIndex).trim();
    } else {
      generalOverview = markdown.substring(0, inDepthStartIndex).trim();
    }
    inDepthConsiderations = markdown.substring(inDepthStartIndex).trim();
  } else {
    const generalOverviewStartIndex = markdown.indexOf(generalOverviewMarker);
    if (generalOverviewStartIndex !== -1) {
        generalOverview = markdown.substring(generalOverviewStartIndex).trim();
    } else {
        generalOverview = markdown.trim();
    }
  }
  
  if (generalOverview.length > 0 && !generalOverview.startsWith(generalOverviewMarker)) {
      generalOverview = `${generalOverviewMarker}\n\n${generalOverview}`;
  }


  if (inDepthConsiderations.length > 0 && !inDepthConsiderations.startsWith(inDepthMarker)) {
    inDepthConsiderations = `${inDepthMarker}\n\n${inDepthConsiderations}`;
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

The cardiovascular system, also known as the circulatory system, is a vital organ system responsible for the transport of essential substances throughout the body. It is composed of three main components: the heart, an intricate network of blood vessels (arteries, veins, and capillaries), and blood. The heart, a powerful muscular pump, propels blood through these vessels, delivering oxygen, nutrients, hormones, and immune cells to all tissues and organs. Simultaneously, it facilitates the removal of metabolic waste products, such as carbon dioxide and urea, ensuring they are transported to excretory organs. The efficiency of this system is paramount for cellular respiration, energy production, and overall physiological balance.

Arteries are thick-walled vessels that carry oxygenated blood away from the heart under high pressure (with the exception of the pulmonary artery, which carries deoxygenated blood to the lungs). Veins, on the other hand, are thinner-walled vessels that return deoxygenated blood to the heart (except for the pulmonary veins, which carry oxygenated blood from the lungs). Capillaries form a vast network of microscopic vessels connecting arteries and veins; their thin walls are crucial for the exchange of gases, nutrients, and waste products between the blood and the body's tissues. Blood itself is a complex fluid tissue, containing erythrocytes (red blood cells) for oxygen transport via hemoglobin, leukocytes (white blood cells) for immune defense against pathogens, thrombocytes (platelets) essential for hemostasis and blood clotting, and plasma—the liquid matrix carrying various proteins, electrolytes, hormones, and clotting factors.

Maintaining cardiovascular homeostasis, which includes adequate blood pressure, cardiac output (the volume of blood pumped by the heart per minute), and sufficient tissue perfusion, is absolutely critical for survival and organ function. In the Intensive Care Unit (ICU), a significant number of patients suffer from conditions that directly or indirectly compromise cardiovascular function. These conditions can range from acute myocardial infarctions (heart attacks), severe heart failure, various forms of shock (cardiogenic, septic, hypovolemic), and life-threatening arrhythmias. Therefore, a comprehensive and profound understanding of cardiovascular physiology, pathophysiology, advanced hemodynamic monitoring techniques, and relevant pharmacology is paramount for critical care nurses to effectively assess, manage, and support these high-acuity patients. Therapeutic interventions in the ICU often involve a complex interplay of fluid management, administration of vasoactive medications to support blood pressure, antiarrhythmic drugs, and mechanical circulatory support when necessary.

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

The respiratory system is fundamental to life, primarily responsible for the intricate process of gas exchange: supplying vital oxygen (O2) to the body's tissues and efficiently removing carbon dioxide (CO2), a primary metabolic waste product. This system is structurally divided into the upper airways (nasal cavity, pharynx, larynx), which warm, filter, and humidify incoming air, and the lower airways (trachea, bronchi, bronchioles), which serve as conduits for air to reach the alveoli. The alveoli are millions of tiny, thin-walled air sacs within the lungs; it is here, across the delicate alveolar-capillary membrane, that the crucial exchange of oxygen from inhaled air into the blood and carbon dioxide from the blood into exhaled air occurs. This exchange is driven by differences in partial pressures of these gases.

The mechanics of breathing, or ventilation, involve the coordinated action of the diaphragm (a large, dome-shaped muscle at the base of the chest) and the intercostal muscles (located between the ribs). Contraction of these muscles expands the thoracic cavity, decreasing intrapulmonary pressure and causing air to flow into the lungs (inhalation). Relaxation allows the chest to recoil, increasing intrapulmonary pressure and forcing air out (exhalation). Effective oxygenation of the blood and removal of CO2 depend on several factors: adequate ventilation (airflow), sufficient perfusion (blood flow) of the pulmonary capillaries surrounding the alveoli, and unimpeded diffusion of gases across the alveolar-capillary membrane. The respiratory system also plays a significant role in maintaining the body's acid-base balance by regulating the concentration of CO2 in the blood, which in turn influences pH levels.

In the Intensive Care Unit (ICU), respiratory compromise is a frequent and often critical issue, posing significant challenges to patient management. A multitude of conditions such as pneumonia (infection of the lungs), Acute Respiratory Distress Syndrome (ARDS - a severe form of lung injury), exacerbations of chronic obstructive pulmonary disease (COPD), pulmonary embolism (blockage of pulmonary arteries), and thoracic trauma can severely impair gas exchange, significantly increase the work of breathing, and ultimately lead to respiratory failure. Critical care nurses must therefore be highly adept at performing comprehensive respiratory assessments, accurately interpreting diagnostic data (such as arterial blood gases (ABGs) and chest imaging), proficiently managing artificial airways (like endotracheal tubes and tracheostomies), and understanding the complex principles of mechanical ventilation and various oxygen delivery therapies.

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

The neurological system serves as the body's intricate command and control center, orchestrating a vast array of functions including thoughts, emotions, learning, memory, voluntary and involuntary movements, sensations, and the regulation of essential autonomic processes like breathing, heart rate, and digestion. It is broadly divided into two main parts: the Central Nervous System (CNS) and the Peripheral Nervous System (PNS). The CNS, comprising the brain and spinal cord, acts as the primary processing and integration hub. The brain, a highly complex organ, is responsible for higher cognitive functions (such as reasoning, problem-solving, and language), processing sensory information from the environment, initiating and coordinating movement, and maintaining overall bodily homeostasis. The spinal cord, a long bundle of nerve tissue extending from the brain, serves as the main conduit for transmitting nerve signals between the brain and the rest of the body, and also controls reflexes.

The Peripheral Nervous System (PNS) includes all the nerves that branch out from the CNS to connect it to limbs, organs, and other body parts. The PNS is further subdivided into the somatic nervous system, which controls voluntary muscle movements and relays sensory information, and the autonomic nervous system (ANS). The ANS unconsciously regulates vital visceral functions such as heart rate, blood pressure, digestion, respiratory rate, and glandular secretions. The ANS itself has two main branches: the sympathetic nervous system (often associated with the "fight or flight" response) and the parasympathetic nervous system (associated with "rest and digest" functions).

In the Intensive Care Unit (ICU), neurological dysfunction is a common and serious concern. It can be the primary reason for admission, as seen in patients with acute ischemic or hemorrhagic stroke, traumatic brain injury (TBI), status epilepticus (prolonged seizures), meningitis, or encephalitis. Alternatively, neurological complications can arise secondary to other critical illnesses, such as sepsis-associated encephalopathy, hypoxic-ischemic brain injury following cardiac arrest, or metabolic encephalopathies due to organ failure (e.g., hepatic or uremic encephalopathy). Continuous and astute neurological assessment, including vigilant monitoring of level of consciousness (using tools like the Glasgow Coma Scale), pupillary responses, motor function, cranial nerve integrity, and, when indicated, intracranial pressure (ICP), is crucial for the early detection of deterioration and for guiding timely interventions. The primary goals in managing critically ill neurological patients often revolve around protecting the brain from secondary injury, optimizing cerebral perfusion and oxygenation, and managing seizures or increased intracranial pressure.

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

The renal system, often referred to as the urinary system, is a critical regulatory and excretory system in the body. It is primarily composed of two kidneys, two ureters, the bladder, and the urethra. The kidneys are the main organs of this system, acting as highly sophisticated and efficient filters that process approximately 180 liters of blood daily. Their fundamental and most well-known role is to maintain homeostasis by filtering metabolic waste products—such as urea (from protein metabolism), creatinine (from muscle metabolism), and uric acid (from nucleic acid metabolism)—from the blood and excreting them from the body in the form of urine. This filtration process is vital for preventing the accumulation of toxic substances.

Beyond simple waste excretion, the renal system meticulously regulates several critical aspects of the body's internal environment. This includes maintaining fluid volume by adjusting water reabsorption, controlling electrolyte concentrations (including sodium, potassium, calcium, phosphate, and magnesium) through selective reabsorption or secretion processes in the nephron tubules, and ensuring acid-base balance (pH) by reabsorbing bicarbonate and secreting hydrogen ions. Furthermore, the kidneys have vital endocrine functions: they produce renin, an enzyme crucial for blood pressure regulation via the renin-angiotensin-aldosterone system (RAAS); erythropoietin, a hormone that stimulates red blood cell production in the bone marrow, thus preventing anemia; and they are responsible for converting inactive Vitamin D into its active form (calcitriol), which is essential for calcium absorption from the gut and overall bone health. The nephron is the microscopic functional unit of the kidney, with each kidney containing about a million nephrons, where the complex processes of glomerular filtration, tubular reabsorption, and tubular secretion occur. Glomerular Filtration Rate (GFR), a measure of how much blood passes through the glomeruli each minute, is a key indicator of overall kidney function.

In the Intensive Care Unit (ICU) setting, acute kidney injury (AKI)—a rapid decline in kidney function—is a common and serious complication that significantly impacts patient morbidity and mortality. AKI can result from various causes prevalent in critical illness, such as sepsis, shock, major surgery, nephrotoxic medications, or direct kidney trauma. A thorough understanding of renal physiology, the pathophysiology of AKI, and principles of fluid and electrolyte balance is essential for critical care nurses. This knowledge enables them to implement appropriate management strategies, including precise fluid and electrolyte management, careful avoidance or dose adjustment of nephrotoxic agents, and adeptly supporting patients undergoing renal replacement therapies like continuous renal replacement therapy (CRRT) or intermittent hemodialysis.

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

The endocrine system is a complex network of glands and organs that produce and secrete hormones. These hormones are chemical messengers that travel through the bloodstream to target cells and organs located throughout the body, regulating a vast array of critical physiological processes. Unlike the nervous system, which provides rapid, short-term electrical control, the endocrine system typically governs slower, more sustained regulatory activities necessary for long-term homeostasis and development. Key functions managed by this intricate system include metabolism (controlling how the body utilizes and stores energy from food), growth and development from infancy to adulthood, tissue function and repair, the body's response to stress (both physical and psychological), fluid and electrolyte balance, sexual function and reproduction, sleep-wake cycles, and mood regulation.

Major endocrine glands include the pituitary gland (often called the "master gland" due to its role in controlling other endocrine glands), the thyroid gland (regulating metabolism), parathyroid glands (controlling calcium levels), adrenal glands (producing stress hormones like cortisol and adrenaline, as well as aldosterone for salt/water balance), and the pancreas (which has both endocrine functions, such as secreting insulin and glucagon to regulate blood glucose levels, and exocrine functions related to digestion). The gonads (ovaries in females and testes in males) are also key endocrine glands, producing sex hormones. These glands synthesize and release specific hormones in response to various internal and external stimuli. Hormone secretion is often meticulously regulated by intricate feedback loops, primarily negative feedback, which help maintain stable internal conditions (homeostasis). For instance, when blood glucose rises after a meal, the pancreas releases insulin, which promotes glucose uptake by cells, thereby lowering blood glucose; this drop in glucose then signals the pancreas to reduce insulin secretion.

In critical care settings, patients may experience acute and severe dysregulation of the endocrine system. This can occur due to their underlying critical illness (e.g., sepsis-induced adrenal insufficiency), trauma, major surgery, or as a side effect of medications (e.g., steroid-induced hyperglycemia). Endocrine emergencies such as Diabetic Ketoacidosis (DKA), Hyperosmolar Hyperglycemic State (HHS), thyroid storm (severe hyperthyroidism), myxedema coma (severe hypothyroidism), and adrenal crisis (acute adrenal insufficiency) are life-threatening conditions that require prompt recognition and highly specific, often complex, management protocols. Furthermore, maintaining appropriate glycemic control is a significant aspect of ICU care for almost all patients, as stress-induced hyperglycemia is a common phenomenon and has been associated with adverse outcomes, including increased infection risk and mortality. Critical care nurses must be knowledgeable about these conditions, their presentations, and their management.

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

The gastrointestinal (GI) system, also commonly referred to as the digestive system, is a long, complex, and continuous tube that extends from the mouth (oral cavity) to the anus. Its primary and overarching functions are the mechanical and chemical digestion of food into smaller, absorbable molecules, the subsequent absorption of these vital nutrients (such as carbohydrates, proteins, fats, vitamins, and minerals) and water into the bloodstream and lymphatic system, and ultimately, the elimination of indigestible waste products (feces) from the body. This multifaceted system includes several major organs arranged sequentially: the esophagus (a muscular tube connecting the pharynx to the stomach), the stomach (a J-shaped organ responsible for initial protein digestion and food storage), the small intestine (a long, coiled tube divided into three parts: the duodenum, jejunum, and ileum, where most digestion and nutrient absorption occurs), and the large intestine (comprising the cecum, colon, rectum, and anal canal, primarily responsible for water absorption and formation of feces). Accessory organs such as the liver (which produces bile essential for fat digestion and performs numerous metabolic functions), the gallbladder (which stores and concentrates bile), and the pancreas (which secretes digestive enzymes and bicarbonate into the small intestine, as well as hormones like insulin and glucagon) also play crucial, indispensable roles by producing and secreting enzymes, bile, hormones, and other substances necessary for efficient digestion and nutrient metabolism.

The GI tract possesses a remarkable and highly specialized mucosal barrier. This barrier not only facilitates the complex processes of digestion and absorption but also serves a critical protective function, defending the body from harmful pathogens (bacteria, viruses, parasites), toxins, and antigens present within the gut lumen. This barrier integrity, along with the gut-associated lymphoid tissue (GALT)—a significant component of the body's immune system located along the GI tract—is vital for maintaining immune homeostasis and preventing systemic infections.

In the Intensive Care Unit (ICU), patients are frequently susceptible to various forms of GI dysfunction due to the severity of their illness, underlying conditions, medications, or the stress response to critical illness itself. This dysfunction can manifest in numerous ways, including impaired motility (e.g., ileus, which is a lack of intestinal movement; or gastroparesis, which is delayed stomach emptying), stress-related mucosal injury leading to potentially life-threatening GI bleeding, malabsorption of nutrients, or more severe and acute conditions such as acute pancreatitis (inflammation of the pancreas), acute liver failure, bowel obstruction, or intestinal ischemia (insufficient blood flow to the intestines). Nutritional support, often administered via enteral routes (feeding directly into the GI tract), is a cornerstone of ICU care for most patients, and a functional GI tract is highly preferred for this purpose as it helps maintain gut integrity and function. Critical care nurses play a significant and multifaceted role in assessing GI function, managing a wide array of GI-related complications, administering specialized nutritional therapies, and monitoring for adverse effects.

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

The hematologic system is integral to overall body function, encompassing the blood itself, its various cellular components, and the organs and tissues responsible for its production (hematopoiesis) and regulation. Blood is a highly specialized connective tissue that circulates throughout the body, performing numerous vital functions. It is primarily composed of red blood cells (erythrocytes), which contain hemoglobin responsible for oxygen transport from the lungs to tissues and carbon dioxide transport back to the lungs; white blood cells (leukocytes), which are diverse cells crucial for immune defense against pathogens and foreign substances; and platelets (thrombocytes), which are small cell fragments essential for hemostasis (the process of blood clotting to stop bleeding). These cellular components are suspended in plasma, a complex fluid matrix primarily made of water, but also containing electrolytes, a wide array of proteins (such as albumin for osmotic balance, globulins for immune function and transport, and critical clotting factors like fibrinogen), hormones, nutrients (glucose, amino acids, lipids), and waste products.

Key organs and tissues are involved in the hematologic system. The bone marrow, found within the cavities of larger bones, is the primary site of hematopoiesis, where all blood cells originate from hematopoietic stem cells. The spleen plays a significant role in filtering blood, removing old or damaged red blood cells, recycling iron, and storing platelets and white blood cells; it also has important immune functions. Lymph nodes, part of the lymphatic and immune systems, filter lymph fluid and house lymphocytes. The liver is crucial for synthesizing many essential plasma proteins, including most clotting factors and albumin, and it also plays a role in clearing waste products and metabolizing substances related to blood cell breakdown.

In critically ill patients, derangements of the hematologic system are frequently encountered and can be life-threatening, significantly complicating their clinical course. These hematologic abnormalities may include anemia (a deficiency in red blood cells or hemoglobin, leading to impaired oxygen delivery to tissues), thrombocytopenia (a low platelet count, increasing the risk of bleeding), various coagulopathies (disorders of the clotting cascade that can lead to either excessive bleeding or inappropriate thrombosis), or thrombotic disorders (conditions predisposing to clot formation). Severe conditions like Disseminated Intravascular Coagulation (DIC) represent a catastrophic dysregulation of the entire hemostasis system, characterized by widespread clotting and subsequent bleeding due to consumption of clotting factors and platelets. Nurses in the ICU are pivotal in closely monitoring hematologic parameters (e.g., complete blood count, coagulation profiles), administering blood products safely and appropriately, managing anticoagulation therapy, and diligently recognizing early signs of bleeding or thrombosis to facilitate timely intervention.

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

The immune system is an extraordinarily complex and sophisticated defense network that protects the body against a vast array of pathogens, including bacteria, viruses, fungi, and parasites, as well as abnormal or cancerous cells. It functions as a highly coordinated biological surveillance system, constantly distinguishing self from non-self (foreign invaders or altered self-cells). The immune system comprises a diverse collection of specialized cells (such as various types of lymphocytes like B cells and T cells, macrophages, neutrophils, dendritic cells, and natural killer cells), primary and secondary lymphoid tissues and organs (like bone marrow, thymus, lymph nodes, spleen, tonsils, and gut-associated lymphoid tissue), and a plethora of soluble molecules (including antibodies, cytokines, chemokines, and complement proteins).

The immune response is broadly categorized into two interconnected and cooperative branches:
1.  **Innate (or Non-specific) Immunity**: This is the body's first and immediate line of defense, providing a rapid, pre-existing, and non-specific response to common features of pathogens or cellular damage. It includes physical barriers (such as intact skin and mucous membranes), chemical barriers (like stomach acid, lysozyme in tears, and antimicrobial peptides), and cellular components. Key cellular players in innate immunity include phagocytes (macrophages and neutrophils) that engulf and destroy pathogens, natural killer (NK) cells that target virally infected or cancerous cells, and mast cells that release inflammatory mediators. The complement system, a cascade of plasma proteins, also plays a crucial role by directly lysing pathogens, opsonizing them for phagocytosis, and promoting inflammation. The inflammatory response, characterized by redness, heat, swelling, and pain, is a hallmark feature of innate immunity, designed to recruit immune cells and molecules to the site of infection or injury.
2.  **Adaptive (Acquired or Specific) Immunity**: This system provides a highly specific and targeted response that develops over a longer period (days to weeks) after initial exposure to a particular pathogen or antigen (a molecule recognized by the immune system). The adaptive immune response is characterized by its remarkable specificity for individual antigens and by immunological memory, which allows for a faster, stronger, and more effective response upon subsequent encounters with the same pathogen. Key players in adaptive immunity are lymphocytes: T lymphocytes (T cells), which mature in the thymus and include helper T cells (CD4+) that coordinate immune responses and cytotoxic T cells (CD8+) that directly kill infected or cancerous cells; and B lymphocytes (B cells), which mature in the bone marrow and, upon activation, differentiate into plasma cells that produce and secrete antibodies (immunoglobulins). Antibodies are proteins that specifically bind to antigens, neutralizing them or marking them for destruction.

In critical illness, the immune system is often profoundly affected, leading to a state of dysregulation. Sepsis, defined as a life-threatening organ dysfunction caused by a dysregulated host response to infection, vividly exemplifies this. In sepsis, an initial, often overwhelming, hyperinflammatory state (sometimes referred to as a "cytokine storm") can lead to widespread endothelial damage, microcirculatory failure, and multiple organ dysfunction. Paradoxically, this can be followed or accompanied by a period of profound immunosuppression or "immunoparalysis," characterized by impaired function of both innate and adaptive immune cells. This immunosuppressive phase increases the patient's susceptibility to secondary or opportunistic infections and contributes to poor outcomes. Understanding these complex immune dynamics and the interplay between pro-inflammatory and anti-inflammatory responses is vital for effectively managing critically ill patients and developing targeted immunomodulatory therapies.

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

The musculoskeletal system provides the essential structural framework, support, stability, and means of movement for the human body. It is a complex and integrated system comprising bones, which form the rigid skeleton providing shape and leverage; joints (articulations), where bones connect and allow for varying degrees of movement; skeletal muscles, which are under voluntary control and generate force to produce movement by contracting and pulling on bones; tendons, which are tough, fibrous cords that connect muscles to bones, transmitting the force of muscle contraction; and ligaments, which are strong, fibrous bands that connect bones to other bones, stabilizing joints and limiting excessive movement. Cartilage, a resilient connective tissue, covers the ends of bones at joints, reducing friction and absorbing shock.

Beyond its primary roles in locomotion and structural integrity, the musculoskeletal system performs other vital functions. It serves to protect delicate internal organs; for instance, the rib cage shields the heart and lungs, and the skull encases and protects the brain. Bones also act as a major reservoir for essential minerals, particularly calcium and phosphorus, releasing them into the bloodstream as needed to maintain physiological balance. Furthermore, the red bone marrow, housed within certain bones, is the primary site of blood cell production (hematopoiesis), including red blood cells, white blood cells, and platelets. Skeletal muscles are also metabolically active, playing a crucial role in glucose uptake and utilization (thus influencing blood sugar levels), and in generating body heat through processes like shivering. While skeletal muscle is under voluntary control, other muscle types include smooth muscle (found in the walls of internal organs and blood vessels, operating involuntarily) and cardiac muscle (the specialized muscle of the heart, also involuntary).

While primary musculoskeletal disorders are not always the direct cause for admission to the Intensive Care Unit (ICU)—except in cases of severe trauma (e.g., multiple fractures, crush injuries), major orthopedic surgery, or acute systemic conditions like severe rhabdomyolysis—the musculoskeletal system is profoundly affected by critical illness and its management. Prolonged immobility, a common consequence of critical illness and sedation, can lead to significant musculoskeletal complications. These include ICU-acquired weakness (ICUAW), a debilitating condition encompassing both muscle weakness (myopathy) and nerve dysfunction (neuropathy), rapid muscle atrophy (loss of muscle mass), joint contractures (stiffness and limited range of motion), an increased risk of pressure injuries (bedsores), and a higher likelihood of developing venous thromboembolism (VTE), such as deep vein thrombosis (DVT) and pulmonary embolism (PE). Specific conditions like rhabdomyolysis (rapid breakdown of muscle tissue) and compartment syndrome (increased pressure within a muscle compartment compromising circulation) are also critical musculoskeletal issues managed in the ICU. Therefore, early mobilization, physical and occupational therapy, and diligent preventative care are crucial components of comprehensive ICU management to mitigate these adverse effects and improve long-term functional outcomes for patients.

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

The integumentary system is the body's largest and most externally visible organ system. It is primarily composed of the skin, which forms a continuous protective covering, along with its various appendages. These appendages include hair (found over most of the body surface), nails (on the fingers and toes), and several types of glands, such as sweat glands (eccrine and apocrine, involved in thermoregulation and excretion) and sebaceous glands (which produce sebum, an oily substance that lubricates the skin and hair). The skin itself is a complex, multi-layered structure consisting of the outermost epidermis (a stratified squamous epithelium that provides the primary barrier), the underlying dermis (a dense connective tissue layer containing blood vessels, nerves, hair follicles, and glands), and the deeper subcutaneous tissue or hypodermis (composed mainly of adipose tissue and loose connective tissue, providing insulation, cushioning, and energy storage).

This extensive system serves a multitude of critical and diverse functions essential for survival and interaction with the environment. Its foremost role is protection: the skin acts as a formidable physical barrier against mechanical injury (abrasions, impacts), invasion by pathogens (such as bacteria, viruses, and fungi), damage from harmful ultraviolet (UV) radiation from the sun, and excessive water loss (dehydration). The skin also plays a vital role in thermoregulation, helping to maintain core body temperature by controlling heat loss through mechanisms like sweating (evaporative cooling) and the vasodilation (widening) or vasoconstriction (narrowing) of cutaneous blood vessels. It is a major sensory organ, equipped with a vast network of diverse sensory receptors that detect stimuli such as touch, pressure, vibration, pain, and temperature, allowing us to perceive and interact with our environment. Furthermore, the skin is involved in important metabolic functions, such as the synthesis of Vitamin D (cholecalciferol) when exposed to UVB radiation from sunlight; Vitamin D is crucial for calcium absorption and bone health. The skin also participates in the excretion of certain waste products like urea, salts, and water through sweat, albeit to a lesser extent than the kidneys.

In the Intensive Care Unit (ICU), the integrity of the integumentary system is often under significant threat and can be easily compromised. Critically ill patients are particularly vulnerable due to a confluence of factors commonly present in this setting. These include prolonged immobility (leading to sustained pressure on bony prominences), impaired tissue perfusion (due to shock states or vasoactive medications), malnutrition or inadequate nutritional support, edema (swelling), the presence and use of various medical devices (such as endotracheal tubes, catheters, monitoring lines, and external fixation devices), altered sensory perception (due to sedation or underlying neurological conditions), and incontinence. These factors dramatically increase the risk of developing pressure injuries (formerly known as pressure ulcers or bedsores), skin tears, device-related injuries, secondary skin infections, and delayed wound healing. Such complications can significantly contribute to increased patient morbidity, prolonged hospital and ICU length of stay, increased healthcare costs, and substantial patient discomfort and pain. Therefore, vigilant skin assessment, proactive preventative care, and appropriate management of any skin breakdown are essential and integral components of comprehensive ICU nursing care.

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
  }
];

const originalTopicsContent: Array<Omit<ContentItem, 'generalOverview' | 'inDepthConsiderations'> & { content: string }> = [
  {
    id: 'hemodynamics',
    slug: 'hemodynamics',
    title: 'Advanced Hemodynamics',
    summary: 'Deep dive into hemodynamic principles, monitoring techniques, interpretation, and therapeutic interventions in critical care.',
    content: `## General Overview

Hemodynamics refers to the study of blood flow and the physical principles governing the circulation of blood within the cardiovascular system. It encompasses the forces that drive blood through the body's intricate network of arteries, veins, and capillaries, as well as the factors that oppose this flow. Understanding hemodynamics is absolutely fundamental in critical care because it provides insights into the adequacy of tissue perfusion—the delivery of oxygen and nutrients to cells—which is essential for organ function and survival. Key parameters used to describe and assess hemodynamics include blood pressure (arterial, venous, and pulmonary), cardiac output (the volume of blood pumped by the heart per minute), vascular resistance (the opposition to blood flow), and measures of cardiac preload (ventricular filling) and afterload (resistance the heart pumps against).

In the Intensive Care Unit (ICU), patients often exhibit profound hemodynamic instability due to a variety of critical illnesses such as sepsis, shock (of various etiologies including cardiogenic, hypovolemic, distributive, or obstructive), heart failure, major trauma, or post-operative complications. Effective management of these patients relies heavily on the ability to accurately monitor, interpret, and manipulate hemodynamic variables. This involves not only non-invasive monitoring like blood pressure cuffs and clinical assessment but often necessitates invasive techniques such as arterial lines for continuous blood pressure measurement, central venous catheters for assessing central venous pressure (an indicator of right ventricular preload), and, in some cases, pulmonary artery catheters (PACs) for more comprehensive assessment of cardiac output, pulmonary pressures, and mixed venous oxygen saturation. The goal of hemodynamic management in the ICU is typically to optimize oxygen delivery to tissues, maintain adequate organ perfusion, and support cardiovascular function until the underlying condition can be resolved. This often involves a combination of fluid resuscitation, vasoactive medications (vasopressors to increase blood pressure, vasodilators to decrease resistance, and inotropes to improve cardiac contractility), and mechanical circulatory support if needed.

## In-Depth ICU Considerations

### Key Hemodynamic Parameters and Their Significance

| Parameter                        | Normal Range/Value                | Description                                                                                                  | Clinical Significance in ICU                                                                                                                                |
|----------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Heart Rate (HR)**              | 60-100 bpm                        | Number of heartbeats per minute.                                                                             | Tachycardia can decrease filling time, increase myocardial O2 demand. Bradycardia can decrease CO.                                                              |
| **Blood Pressure (BP)**          | Systolic <120, Diastolic <80 mmHg | Force exerted by blood against vessel walls.                                                                 | Hypertension or hypotension indicates various underlying issues. MAP is key for perfusion.                                                                      |
| **Mean Arterial Pressure (MAP)** | 70-105 mmHg                       | Average arterial pressure during a single cardiac cycle. MAP = (SBP + 2*DBP)/3.                              | Crucial for organ perfusion. Target MAP >65 mmHg often used in shock states.                                                                                |
| **Cardiac Output (CO)**          | 4-8 L/min                         | Volume of blood pumped by the heart per minute. CO = HR x Stroke Volume (SV).                                | Low CO indicates inadequate blood flow to meet tissue demands (e.g., shock, HF). High CO can be seen in early sepsis or hyperdynamic states.                  |
| **Cardiac Index (CI)**           | 2.5-4.0 L/min/m²                  | CO adjusted for Body Surface Area (BSA). More precise measure of cardiac pump function relative to body size. | Similar significance to CO but normalized for patient size.                                                                                                   |
| **Stroke Volume (SV)**           | 60-100 mL/beat                    | Volume of blood ejected by the left ventricle with each heartbeat. SV = EDV - ESV.                             | Affected by preload, afterload, and contractility. Low SV contributes to low CO.                                                                              |
| **Stroke Volume Index (SVI)**    | 33-47 mL/beat/m²                  | SV adjusted for BSA.                                                                                         | Similar significance to SV but normalized.                                                                                                                  |
| **Systemic Vascular Resistance (SVR)** | 800-1200 dynes·s/cm⁻⁵             | Resistance the left ventricle must overcome to eject blood into the systemic circulation (LV afterload).     | High SVR (vasoconstriction) increases workload on the heart (e.g., cardiogenic shock, hypovolemia). Low SVR (vasodilation) seen in distributive shock (e.g., sepsis). |
| **Systemic Vascular Resistance Index (SVRI)** | 1970-2390 dynes·s/cm⁻⁵/m²     | SVR adjusted for BSA.                                                                                        | Similar significance to SVR but normalized.                                                                                                                  |
| **Central Venous Pressure (CVP)**| 2-8 mmHg                          | Pressure in the vena cava near the right atrium. Reflects right atrial pressure and approximates RV preload. | High CVP can indicate fluid overload, RV failure, or increased intrathoracic pressure. Low CVP suggests hypovolemia. **Static measure, interpret with caution.** |
| **Pulmonary Artery Pressure (PAP)** | Systolic: 15-30 mmHg, Diastolic: 8-15 mmHg, Mean: 10-20 mmHg | Pressure within the pulmonary artery.                                                                      | Elevated in pulmonary hypertension, LV failure, PE, ARDS.                                                                                                     |
| **Pulmonary Artery Wedge Pressure (PAWP/PCWP)** | 6-12 mmHg                         | Pressure measured by inflating a balloon in a pulmonary artery branch, reflecting left atrial pressure (LV preload). | Elevated in LV failure, mitral stenosis/regurgitation, fluid overload. Low in hypovolemia. Requires PAC.                                                      |
| **Pulmonary Vascular Resistance (PVR)** | <250 dynes·s/cm⁻⁵ (or <3 Wood units) | Resistance the right ventricle must overcome to eject blood into the pulmonary circulation (RV afterload).   | Elevated in pulmonary hypertension, PE, hypoxia, ARDS.                                                                                                      |
| **Mixed Venous Oxygen Saturation (SvO2)** | 60-80%                            | Percentage of O2 bound to hemoglobin in blood returning to the right side of the heart (pulmonary artery).  | Reflects overall tissue oxygen extraction. Low SvO2 (<60%) suggests increased O2 extraction due to inadequate O2 delivery or increased O2 consumption. High SvO2 (>80%) can indicate decreased O2 extraction (e.g., sepsis, shunting, cyanide poisoning) or very high O2 delivery. Requires PAC. |
| **Central Venous Oxygen Saturation (ScvO2)** | >70% (target in early sepsis)     | O2 saturation of blood in superior vena cava. Surrogate for SvO2. Measured via CVC.                        | Similar interpretation to SvO2 but generally slightly higher. Used to guide resuscitation in early septic shock.                                           |

### Principles of Preload, Afterload, and Contractility
*   **Preload**: The degree of ventricular stretch or muscle fiber length at the end of diastole (end-diastolic volume - EDV). Determined by venous return.
    *   Frank-Starling Law: Increased preload (up to a point) leads to increased stroke volume.
    *   Assessment: CVP (right heart), PAWP (left heart) - static measures. Dynamic measures (SVV, PPV, passive leg raise response) are better predictors of fluid responsiveness.
*   **Afterload**: The resistance the ventricle must overcome to eject blood during systole.
    *   Systemic Vascular Resistance (SVR) for the left ventricle.
    *   Pulmonary Vascular Resistance (PVR) for the right ventricle.
    *   Increased afterload decreases stroke volume (if contractility constant).
*   **Contractility (Inotropy)**: The intrinsic ability of the cardiac muscle to shorten and develop force, independent of preload and afterload.
    *   Difficult to measure directly. Inferred from SV, CO, ejection fraction, and response to inotropic drugs.
    *   Increased contractility increases stroke volume.

### Fluid Responsiveness
Predicting whether a patient will increase their stroke volume (and thus cardiac output) in response to a fluid bolus. Critical for guiding fluid therapy and avoiding fluid overload.
*   **Static Measures (Poor Predictors)**: CVP, PAWP.
*   **Dynamic Measures (Better Predictors in mechanically ventilated patients with no arrhythmias)**:
    *   **Stroke Volume Variation (SVV)**: Variation in SV during the respiratory cycle. SVV >10-15% suggests fluid responsiveness. Requires arterial line and specific monitor.
    *   **Pulse Pressure Variation (PPV)**: Variation in pulse pressure during the respiratory cycle. PPV >10-15% suggests fluid responsiveness. Requires arterial line.
    *   **Passive Leg Raise (PLR)**: Transiently increases venous return (autotransfusion of ~300mL). A significant increase (e.g., >10-15%) in SV or CO after PLR suggests fluid responsiveness. Can be used in spontaneously breathing patients and those with arrhythmias. Requires continuous CO/SV monitoring.
    *   **End-Expiratory Occlusion Test (EEOT)**: Brief (15-sec) ventilator hold at end-expiration. Increase in CO/SV by >5% suggests fluid responsiveness.
    *   **Fluid Challenge**: Small bolus (e.g., 250-500mL crystalloid over 5-10 min) with assessment of SV/CO response.

### Types of Shock and Their Hemodynamic Profiles

| Shock Type       | Preload (CVP/PAWP) | Afterload (SVR) | Contractility | Cardiac Output (CO) | Key Interventions                                                                                                  |
|------------------|--------------------|-----------------|---------------|---------------------|--------------------------------------------------------------------------------------------------------------------|
| **Hypovolemic**  | ↓↓↓                | ↑↑              | Normal/↑ (comp) | ↓↓↓                 | Volume resuscitation (crystalloids, blood products), control source of loss.                                         |
| **Cardiogenic**  | ↑↑                 | ↑↑              | ↓↓↓           | ↓↓↓                 | Inotropes (Dobutamine), vasopressors if hypotensive (Norepinephrine), reduce afterload (vasodilators cautiously), mechanical support (IABP, Impella, ECMO), treat cause (e.g., MI). |
| **Distributive** (e.g., Septic, Anaphylactic, Neurogenic) | ↓ or Normal        | ↓↓↓             | Normal/↑/↓ (septic cardiomyopathy) | Variable (↑ early sepsis, then ↓) | Septic: Fluids, vasopressors (Norepinephrine), antibiotics, source control. Anaphylactic: Epinephrine, fluids, antihistamines, steroids. Neurogenic: Fluids, vasopressors (often with alpha-agonist activity like Phenylephrine or Norepinephrine), Atropine for bradycardia. |
| **Obstructive**  | ↑↑ (RV preload often very high) | ↑               | Normal (initially) | ↓↓↓                 | Relieve obstruction: PE (thrombolysis/embolectomy), Tamponade (pericardiocentesis), Tension Pneumothorax (needle decompression/chest tube). |

### Vasoactive Medications in ICU
(Brief overview - see Pharmacology section for details)
*   **Vasopressors (Increase BP by vasoconstriction)**:
    *   **Norepinephrine (Levophed)**: α1 > β1 agonist. First-line for septic shock.
    *   **Epinephrine**: Potent α and β agonist. Used in anaphylaxis, cardiac arrest, refractory shock.
    *   **Phenylephrine (Neo-Synephrine)**: Pure α1 agonist. Increases SVR. Useful if tachyarrhythmias limit norepinephrine, or in neurogenic shock. Can decrease CO.
    *   **Vasopressin**: V1 agonist. Adjunct to norepinephrine in septic shock. Not titrated.
    *   **Dopamine**: Dose-dependent effects (β1 at moderate doses, α1 at high doses). Less favored now due to arrhythmogenic potential.
*   **Inotropes (Increase contractility)**:
    *   **Dobutamine**: Primarily β1 agonist. Increases CO, can cause vasodilation/hypotension. Used in cardiogenic shock, severe HF.
    *   **Milrinone**: PDE3 inhibitor. Inodilator (increases contractility, causes vasodilation). Longer half-life. Useful in HF.
    *   **Epinephrine**: (at lower doses can have significant inotropic effects).
*   **Vasodilators (Decrease BP/afterload)**:
    *   **Nitroglycerin**: Venodilator > Arteriodilator. Used for ACS, hypertensive emergencies, acute pulmonary edema.
    *   **Nitroprusside**: Potent arterial and venous vasodilator. Used for hypertensive emergencies. Risk of cyanide toxicity with prolonged use/renal impairment.
    *   **Nicardipine/Clevidipine**: Calcium channel blockers (arterial vasodilators). Used for hypertension control.

### Advanced Monitoring: Pulmonary Artery Catheter (PAC)
*   Placement: Inserted via large central vein (IJ, subclavian) into RA, RV, then "floated" into pulmonary artery.
*   Measures: CVP, PAP, PAWP, CO (thermodilution), SvO2. Allows calculation of SVR, PVR, O2 delivery/consumption.
*   Indications: Complex shock states, severe cardiogenic shock, severe pulmonary hypertension, assessment of fluid status/cardiac function when less invasive measures are inconclusive. Use has declined due to risks and lack of proven mortality benefit in many routine ICU settings, but can be invaluable in specific, complex cases.
*   Complications: Arrhythmias (during insertion), PA rupture (rare, catastrophic), infection, thrombosis, valvular damage, catheter knotting.`,
    categoryType: 'Topic',
    keywordsForImage: 'hemodynamic chart blood pressure',
  },
  {
    id: 'pharmacology',
    slug: 'pharmacology',
    title: 'Critical Care Pharmacology',
    summary: 'Essential guide to common ICU medications, including sedatives, analgesics, paralytics, vasoactive drugs, and antimicrobials.',
    content: `## General Overview

Critical care pharmacology involves the specialized study and application of medications used in the Intensive Care Unit (ICU) setting. Patients in the ICU are often physiologically unstable, with multi-organ dysfunction, and require potent medications that have narrow therapeutic windows and significant potential for adverse effects. Understanding the mechanisms of action, pharmacokinetics (how the body absorbs, distributes, metabolizes, and excretes drugs), pharmacodynamics (how drugs affect the body), indications, contraindications, dosing considerations, and potential interactions of these medications is paramount for safe and effective patient care.

Common classes of drugs frequently utilized in the ICU include sedatives and analgesics to manage pain and anxiety and facilitate mechanical ventilation; neuromuscular blocking agents (paralytics) for specific procedures or severe ARDS; vasoactive agents (vasopressors, inotropes, vasodilators) to manage hemodynamic instability and shock; antimicrobials to treat life-threatening infections; anticoagulants for VTE prophylaxis and treatment; and medications for managing specific organ dysfunctions (e.g., diuretics for renal support, antiarrhythmics for cardiac issues). ICU nurses play a critical role in the administration, titration, and monitoring of these high-alert medications, requiring continuous vigilance, precise calculations, and a deep understanding of their effects and potential complications. Adjustments for organ dysfunction (e.g., renal or hepatic impairment) are frequently necessary.

## In-Depth ICU Considerations

### Sedatives and Analgesics

Goal: Maintain patient comfort, relieve pain and anxiety, facilitate tolerance of mechanical ventilation and ICU procedures, reduce oxygen consumption, and prevent self-harm or device dislodgement. Use the lightest effective level of sedation. Regular assessment using validated scales (e.g., RASS, SAS for sedation; CPOT, BPS for pain in non-verbal patients) is crucial.

| Drug Class         | Examples                                    | Mechanism of Action                                      | Key Pharmacokinetics/Dynamics                      | Common Side Effects / Considerations                                                                                               |
|--------------------|---------------------------------------------|----------------------------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Opioids (Analgesia)** | Fentanyl, Morphine, Hydromorphone (Dilaudid), Remifentanil | Mu-opioid receptor agonists                            | **Fentanyl**: Rapid onset, short duration (IV bolus), lipophilic (accumulates). **Morphine**: Longer duration, active metabolite (renal excretion - caution in RI). **Hydromorphone**: Potent, intermediate duration. **Remifentanil**: Ultra-short acting (esterase metabolism), good for neuro exams. | Respiratory depression, hypotension (esp. Morphine due to histamine release), constipation, N/V, itching, tolerance, withdrawal. Fentanyl can cause chest wall rigidity with high doses/rapid infusion. |
| **Benzodiazepines (Sedation, Anxiolysis, Amnesia)** | Midazolam (Versed), Lorazepam (Ativan), Diazepam (Valium) | Enhance effects of GABA at GABA-A receptor              | **Midazolam**: Rapid onset, short duration (IV bolus), active metabolites (renal excretion). **Lorazepam**: Slower onset, longer duration, propylene glycol toxicity with high dose/prolonged infusion. | Respiratory depression, hypotension, delirium (esp. in elderly), tolerance, withdrawal (seizures). Prolonged sedation.                  |
| **Propofol (Sedation, Hypnosis)** | Diprivan                                    | Potentiates GABA-A receptor activity; NMDA receptor antagonist | Very rapid onset, short duration (IV infusion). Highly lipophilic. | Hypotension, respiratory depression, pain on injection, hypertriglyceridemia, pancreatitis (rare), Propofol Infusion Syndrome (PRIS - rare but fatal: acidosis, rhabdo, HLD, cardiac failure, renal failure - risk with high dose >4mg/kg/hr, prolonged use). Green urine (benign). |
| **Alpha-2 Agonists (Sedation, Anxiolysis, Analgesia-sparing)** | Dexmedetomidine (Precedex)                    | Selective alpha-2 adrenergic agonist in CNS              | Sedation without significant respiratory depression. Patient rousable. | Hypotension, bradycardia (can be significant). Loading dose often causes transient hypertension. No amnestic properties. Useful for weaning, delirium prevention. |
| **Ketamine (Analgesia, Sedation, Anesthesia)** | Ketalar                                     | NMDA receptor antagonist                                 | Dissociative anesthetic. Provides analgesia, sedation, amnesia. Bronchodilator. Preserves airway reflexes & respiratory drive (at lower doses). Sympathomimetic (↑HR, ↑BP). | Emergence reactions (hallucinations, delirium - can be mitigated with benzos), increased salivation, ↑ICP (controversial, use with caution in TBI). |

**Analgesia-First or Analgosedation Approach**: Prioritize pain management (e.g., IV opioid) before adding sedatives. Many patients may only require analgesia.

### Neuromuscular Blocking Agents (NMBAs / Paralytics)

Used to facilitate endotracheal intubation, optimize patient-ventilator synchrony in severe ARDS (e.g., to reduce barotrauma, improve oxygenation), manage persistently elevated ICP, or reduce oxygen consumption during therapeutic hypothermia. **Must always be administered with adequate analgesia and sedation** as NMBAs do not provide pain relief or amnesia. Monitor depth of blockade with Train-of-Four (TOF) stimulation.

| Drug Class         | Examples                                     | Mechanism of Action                                      | Onset/Duration                              | Key Considerations / Side Effects                                                                                                  |
|--------------------|----------------------------------------------|----------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **Depolarizing**   | Succinylcholine (Anectine)                     | Binds to acetylcholine (ACh) receptors, causing persistent depolarization | Rapid onset (30-60s), Ultra-short duration (5-10min) | Used for RSI. Causes transient muscle fasciculations. **Contraindications**: Hyperkalemia (can worsen), major burns/crush injury/denervating neuromuscular disease (>24-48h old - risk of severe hyperK⁺), history of malignant hyperthermia, certain myopathies. ↑ICP/IOP/IGP. |
| **Non-Depolarizing (Aminosteroids)** | Rocuronium (Zemuron), Vecuronium (Norcuron), Pancuronium | Competitive antagonists at ACh receptors                 | **Rocuronium**: Rapid onset (intermediate duration). **Vecuronium**: Intermediate onset/duration. **Pancuronium**: Slower onset, long duration (vagolytic - causes tachycardia). | Reversible with anticholinesterases (e.g., Neostigmine + Glycopyrrolate) or Sugammadex (for Rocuronium/Vecuronium). Prolonged weakness (ICU-acquired weakness risk, esp. with corticosteroids). Accumulation in renal/hepatic failure (Vec/Panc more than Roc). |
| **Non-Depolarizing (Benzylisoquinoliniums)** | Cisatracurium (Nimbex), Atracurium           | Competitive antagonists at ACh receptors                 | Intermediate onset/duration.                | **Cisatracurium**: Hofmann elimination (metabolism independent of renal/hepatic function) - good choice in organ failure. Atracurium can cause histamine release (hypotension, tachycardia). Laudanosine metabolite (seizure risk at high doses - more with Atracurium). |

### Vasoactive Agents

Used to manipulate blood pressure, cardiac output, and systemic vascular resistance. Titrated to hemodynamic targets (e.g., MAP, CO, urine output). Administer via central line if possible, especially for potent vasopressors.

| Drug             | Class / Receptors                                 | Primary Effects                                                                    | Common Uses in ICU                                         | Key Side Effects / Considerations                                                                                       |
|------------------|---------------------------------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Norepinephrine (Levophed)** | α1 > β1 agonist                                   | ↑SVR (vasoconstriction), modest ↑CO/HR.                                              | Septic shock (first-line), other distributive shocks.      | Peripheral ischemia/necrosis (esp. with extravasation), arrhythmias, hyperglycemia, ↑myocardial O2 demand.                 |
| **Epinephrine (Adrenaline)** | Potent α1, β1, β2 agonist                           | Dose-dependent: Low dose (β effects predominate): ↑HR, ↑CO, ↓SVR (β2). High dose (α effects): ↑SVR, ↑BP, ↑CO. | Anaphylaxis, cardiac arrest (ACLS), septic shock (refractory), symptomatic bradycardia. | Tachyarrhythmias, hypertension, hyperglycemia, ↑lactate, ↑myocardial O2 demand, peripheral/mesenteric ischemia.          |
| **Phenylephrine (Neo-Synephrine)** | Pure α1 agonist                                   | Potent vasoconstriction (↑SVR), ↑BP. Can cause reflex bradycardia and ↓CO.             | Hypotension with tachycardia (e.g., if norepinephrine causes severe tachycardia), neurogenic shock. Sepsis (adjunct). | Reflex bradycardia, ↓CO (esp. in HF), peripheral/mesenteric ischemia. Does not increase HR.                               |
| **Dopamine**     | Dose-dependent: Low (1-3 mcg/kg/min) "renal dose" - D1 (vasodilation - controversial/not recommended for renal protection). Moderate (3-10 mcg/kg/min) - β1 (↑HR, ↑CO). High (>10 mcg/kg/min) - α1 (↑SVR, ↑BP). | Varies with dose.                                                                          | Second-line for septic shock with bradycardia or low risk of tachyarrhythmias. Cardiogenic shock. | Tachyarrhythmias (more than norepinephrine), N/V, headache. Extravasation risk.                                       |
| **Vasopressin (ADH)** | V1 receptor agonist (vascular smooth muscle)        | Vasoconstriction (↑SVR), ↑water reabsorption in kidneys (V2 effect).               | Septic shock (adjunct to norepinephrine, not titrated, typical dose 0.03-0.04 units/min). Diabetes Insipidus. GI hemorrhage. | Peripheral/mesenteric/coronary ischemia, hyponatremia, ↓CO (due to ↑afterload). Not used as sole pressor in septic shock. |
| **Dobutamine**   | Primarily β1 agonist, some β2 & α1 activity       | ↑Contractility (inotropy), ↑HR, modest vasodilation (β2 > α1) -> can ↓SVR, ↓BP.  | Cardiogenic shock, severe heart failure with low CO. Septic shock with myocardial dysfunction. | Tachycardia, arrhythmias, hypotension (if hypovolemic or significant vasodilation occurs), ↑myocardial O2 demand.       |
| **Milrinone (Primacor)** | Phosphodiesterase-3 (PDE3) inhibitor              | ↑Contractility (inotropy), potent vasodilation (arterial & venous) -> ↓SVR, ↓PVR.  | Acute decompensated heart failure, cardiogenic shock (esp. if β-blocker use). Pulmonary hypertension. | Hypotension (significant), arrhythmias (esp. ventricular), thrombocytopenia. Longer half-life, renal excretion (dose adjust). |
| **Nitroglycerin (NTG)** | Organic nitrate -> NO -> Venodilator > Arteriodilator | ↓Preload (venodilation), ↓Afterload (arterial dilation at higher doses), coronary vasodilation. | Acute coronary syndromes (ACS), hypertensive emergencies, acute pulmonary edema (HF). | Hypotension, headache, reflex tachycardia, tolerance (tachyphylaxis with prolonged use). Avoid in RV infarct, severe aortic stenosis, use with PDE5 inhibitors (sildenafil etc.). |
| **Nitroprusside (Nipride)** | Potent direct arterial & venous vasodilator       | Rapid ↓BP, ↓preload, ↓afterload.                                                   | Hypertensive emergencies. Severe acute HF.                     | Profound hypotension, reflex tachycardia. **Cyanide toxicity** (risk with prolonged use >24-48h, high doses, renal/hepatic impairment - monitor thiocyanate levels, acid-base status). Methemoglobinemia (rare). Light sensitive. |

### Antimicrobials
Selection based on suspected pathogen, site of infection, local resistance patterns (antibiogram), patient factors (allergies, organ function, comorbidities), and severity of illness. De-escalate or narrow therapy once culture/sensitivity results are available. Monitor for efficacy and toxicity.

**(This is a vast topic - examples of classes often used in ICU)**
*   **Beta-lactams**:
    *   Penicillins (e.g., Piperacillin/Tazobactam - broad spectrum incl. Pseudomonas)
    *   Cephalosporins (e.g., Ceftriaxone - 3rd gen, Cefepime - 4th gen/anti-pseudomonal, Ceftaroline - anti-MRSA)
    *   Carbapenems (e.g., Meropenem, Imipenem/Cilastatin - very broad spectrum, often reserved for MDR organisms)
    *   Monobactams (e.g., Aztreonam - gram-negative coverage, can use in PCN allergy)
*   **Glycopeptides**: Vancomycin (MRSA, gram-positive coverage). Monitor trough levels. Nephrotoxic, ototoxic, Red Man Syndrome.
*   **Fluoroquinolones**: (e.g., Ciprofloxacin, Levofloxacin - broad spectrum). QT prolongation, tendon rupture, C. diff risk.
*   **Aminoglycosides**: (e.g., Gentamicin, Tobramycin, Amikacin - gram-negative, synergy for gram-positive). Nephrotoxic, ototoxic. Monitor peak/trough or extended-interval dosing.
*   **Macrolides**: (e.g., Azithromycin, Erythromycin - atypical coverage, some gram-positive). GI upset, QT prolongation.
*   **Tetracyclines**: (e.g., Doxycycline, Tigecycline - broad spectrum incl. MRSA, VRE with Tigecycline). Photosensitivity, GI upset.
*   **Linezolid (Zyvox)**: MRSA, VRE. Myelosuppression (thrombocytopenia with prolonged use), serotonin syndrome risk with SSRIs.
*   **Daptomycin (Cubicin)**: MRSA, VRE. Muscle toxicity (monitor CPK). Inactivated by pulmonary surfactant (do not use for pneumonia).
*   **Metronidazole (Flagyl)**: Anaerobic coverage, C. difficile, protozoa. Disulfiram-like reaction with alcohol. Neurotoxicity.
*   **Antifungals**:
    *   Azoles (e.g., Fluconazole, Voriconazole, Posaconazole, Isavuconazole). Drug interactions (CYP450).
    *   Echinocandins (e.g., Caspofungin, Micafungin, Anidulafungin). Generally well-tolerated.
    *   Polyenes (e.g., Amphotericin B - conventional or lipid formulations). Broad spectrum but nephrotoxic, infusion reactions.
*   **Antivirals**: (e.g., Acyclovir - HSV/VZV, Oseltamivir - Influenza, Ganciclovir - CMV).

### Other Important ICU Medications
*   **Anticoagulants**: Heparin (UFH), LMWH (Enoxaparin), Warfarin, DOACs (e.g., Apixaban, Rivaroxaban). For VTE prophylaxis/treatment, AFib, ACS. Monitor (aPTT for UFH, INR for Warfarin). Bleeding risk. Reversal agents.
*   **Diuretics**: Loop (Furosemide, Bumetanide, Torsemide), Thiazides (Hydrochlorothiazide, Metolazone), Potassium-sparing (Spironolactone, Amiloride), Osmotic (Mannitol). Manage fluid overload. Monitor electrolytes (esp. K⁺, Mg²⁺), renal function, volume status.
*   **Antiarrhythmics**: Amiodarone, Lidocaine, Beta-blockers, Calcium Channel Blockers, Adenosine. Complex, based on arrhythmia type. Monitor ECG, BP, electrolytes. Many have proarrhythmic potential.
*   **Stress Ulcer Prophylaxis**: PPIs (Pantoprazole, Esomeprazole), H2 Receptor Antagonists (Famotidine, Ranitidine). For high-risk patients (e.g., mechanical ventilation >48h, coagulopathy). Risk of C. diff, pneumonia.
*   **Electrolyte Replacements**: Potassium chloride, Magnesium sulfate, Calcium gluconate/chloride, Sodium phosphate. Monitor levels closely. Administer IV cautiously.

This overview is not exhaustive but covers many core pharmacological concepts and drug classes critical to ICU nursing practice. Always refer to institutional protocols, pharmacy resources, and current guidelines.`,
    categoryType: 'Topic',
    keywordsForImage: 'pills medications pharmacy',
  },
];

const originalPoliciesContent: Array<Omit<ContentItem, 'generalOverview' | 'inDepthConsiderations'> & { content: string }> = [
  {
    id: 'acls-guidelines',
    slug: 'acls-guidelines',
    title: 'ACLS Guidelines Summary',
    summary: 'Key algorithms and interventions from the latest Advanced Cardiovascular Life Support (ACLS) guidelines for managing cardiac arrest and periarrest situations.',
    content: `## General Overview

Advanced Cardiovascular Life Support (ACLS) refers to a set of clinical algorithms and protocols for the urgent treatment of cardiac arrest, stroke, myocardial infarction (heart attack), and other life-threatening cardiovascular emergencies. These guidelines are developed and periodically updated by international bodies like the American Heart Association (AHA) and the European Resuscitation Council (ERC), based on the latest scientific evidence and expert consensus. The primary goal of ACLS is to improve survival rates and neurological outcomes for patients experiencing these critical events.

ACLS builds upon Basic Life Support (BLS) principles, which include early recognition of cardiac arrest, activation of the emergency response system, high-quality cardiopulmonary resuscitation (CPR - chest compressions and rescue breaths), and rapid defibrillation when indicated. ACLS introduces more advanced interventions, such as management of the airway with advanced adjuncts (e.g., endotracheal intubation, supraglottic airways), administration of resuscitation medications (e.g., epinephrine, amiodarone, lidocaine), interpretation of electrocardiograms (ECGs) to identify specific arrhythmias, and post-cardiac arrest care to optimize recovery. Effective team dynamics, clear communication, and systematic approaches are emphasized in ACLS training and practice. ICU nurses are often key members of the resuscitation team and must be proficient in ACLS protocols to respond effectively to in-hospital cardiac arrests and other cardiovascular emergencies. This module provides a summary of key components; however, clinicians must always refer to the most current and complete official ACLS guidelines from their respective governing bodies for comprehensive information and certification.

## In-Depth ICU Considerations

### Key Principles of ACLS
*   **High-Quality CPR is Paramount**:
    *   Push hard (at least 2 inches or 5 cm) and fast (100-120 compressions/min).
    *   Allow full chest recoil between compressions.
    *   Minimize interruptions in chest compressions (target compression fraction >80%).
    *   Avoid excessive ventilation (8-10 breaths/min with advanced airway, or 30:2 compression-to-ventilation ratio without advanced airway).
*   **Early Defibrillation for Shockable Rhythms**: Ventricular Fibrillation (VF) and pulseless Ventricular Tachycardia (pVT).
*   **Team Dynamics**: Clear roles, closed-loop communication, mutual respect, debriefing.
*   **Systematic Approach**: Follow algorithms (e.g., Cardiac Arrest Algorithm, Bradycardia Algorithm, Tachycardia Algorithm).
*   **Identify and Treat Reversible Causes (H's and T's)**:
    *   **H's**: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/Hyperkalemia, Hypoglycemia, Hypothermia.
    *   **T's**: Tension pneumothorax, Tamponade (cardiac), Toxins, Thrombosis (pulmonary), Thrombosis (coronary).

### Cardiac Arrest Algorithm (Adult)

**1. BLS Assessment & High-Quality CPR**
   * Start CPR immediately (Compressions-Airway-Breathing).
   * Attach monitor/defibrillator as soon as available.

**2. Rhythm Check (Is it shockable?)**
   * **Shockable Rhythms: VF / pVT**
      * **Shock**: Deliver 1 shock (defibrillator specific energy, e.g., biphasic 120-200J; monophasic 360J).
      * **CPR**: Resume CPR immediately for 2 minutes.
      * Establish IV/IO access.
      * **Rhythm Check / Shock (if indicated)**
      * **CPR (2 min)**
      * **Drug Therapy**:
         * **Epinephrine** 1 mg IV/IO every 3-5 minutes.
         * **Amiodarone** 300 mg IV/IO bolus first dose, then consider 150 mg second dose (for refractory VF/pVT).
         * **OR Lidocaine** 1-1.5 mg/kg IV/IO first dose, then 0.5-0.75 mg/kg every 5-10 min (max 3 doses or 3 mg/kg) if Amiodarone unavailable or per local protocol.
      * Treat reversible causes.
      * Consider advanced airway, capnography (quantitative waveform capnography - PETCO2 - to monitor CPR quality and detect ROSC. Target PETCO2 >10-20 mmHg during CPR).

   * **Non-Shockable Rhythms: Asystole / PEA (Pulseless Electrical Activity)**
      * **CPR**: Resume CPR immediately for 2 minutes.
      * Establish IV/IO access.
      * **Drug Therapy**:
         * **Epinephrine** 1 mg IV/IO every 3-5 minutes (administer as soon as feasible).
      * Treat reversible causes.
      * **Rhythm Check**: If organized rhythm, check for pulse. If no pulse, continue CPR. If shockable rhythm develops, go to VF/pVT arm.
      * Consider advanced airway, capnography.

**3. Repeat Cycle**: Continue CPR, rhythm checks (q2 min), shocks (if indicated), medications, and search for/treat reversible causes until Return of Spontaneous Circulation (ROSC), termination of efforts, or transfer of care.

### Post-Cardiac Arrest Care (If ROSC Achieved)
*   **Airway Management**: Ensure patent airway, optimize ventilation and oxygenation (target SpO2 92-98%, PaCO2 35-45 mmHg).
*   **Hemodynamic Optimization**: Treat hypotension (SBP <90 mmHg, MAP <65 mmHg) with IV fluids, vasopressors (Norepinephrine, Epinephrine, Dopamine) to maintain organ perfusion.
*   **Targeted Temperature Management (TTM)**: For comatose adult patients with ROSC after cardiac arrest, maintain a constant temperature between 32°C and 36°C for at least 24 hours. (Specific temperature and duration may vary by local protocol and evolving evidence).
*   **Coronary Reperfusion**: If STEMI suspected or high suspicion of ACS, consider urgent coronary angiography.
*   **Neurological Care**: Continuous EEG monitoring if comatose or seizures suspected. Treat seizures aggressively. Manage glucose (avoid hypoglycemia and severe hyperglycemia).
*   **Identify and Treat Precipitating Causes**.

### Bradycardia with a Pulse Algorithm (Adult)
HR <50 bpm (or <60 bpm if symptomatic).
1.  **Assess Appropriateness for Clinical Condition**.
2.  **Identify and Treat Underlying Cause**: Maintain patent airway; assist breathing as necessary. Oxygen (if hypoxemic). Cardiac monitor to identify rhythm; monitor blood pressure and oximetry. IV access. 12-lead ECG if available; don’t delay therapy.
3.  **Persistent Bradyarrhythmia Causing**: Hypotension? Acutely altered mental status? Signs of shock? Ischemic chest discomfort? Acute heart failure?
    *   **Yes (Symptomatic Bradycardia)**:
        *   **Atropine** 1 mg IV bolus. Repeat every 3-5 minutes. Max total dose: 3 mg.
        *   If Atropine ineffective:
            *   **Transcutaneous Pacing (TCP)**: Prepare for and use immediately.
            *   **OR Dopamine** infusion: 5-20 mcg/kg/min, titrate to patient response; taper slowly.
            *   **OR Epinephrine** infusion: 2-10 mcg/min, titrate to patient response.
        *   Consider expert consultation for transvenous pacing.
    *   **No (Asymptomatic Bradycardia)**: Monitor and observe.

### Tachycardia with a Pulse Algorithm (Adult)
HR >150 bpm usually (unless underlying ventricular dysfunction).
1.  **Assess Appropriateness for Clinical Condition**.
2.  **Identify and Treat Underlying Cause**: Maintain patent airway; assist breathing as necessary. Oxygen (if hypoxemic). Cardiac monitor to identify rhythm; monitor blood pressure and oximetry. IV access. 12-lead ECG if available; don’t delay therapy.
3.  **Persistent Tachyarrhythmia Causing**: Hypotension? Acutely altered mental status? Signs of shock? Ischemic chest discomfort? Acute heart failure?
    *   **Yes (Unstable Tachycardia)**:
        *   **Synchronized Cardioversion**: Sedate if patient conscious and time permits. Narrow regular (SVT, AFlutter): 50-100J. Narrow irregular (AFib): 120-200J biphasic or 200J monophasic. Wide regular (monomorphic VT): 100J. Wide irregular (polymorphic VT or uncertain): Treat as VF with high-energy defibrillation (unsynchronized shock).
        *   If regular narrow complex SVT and cardioversion fails, consider Adenosine.
    *   **No (Stable Tachycardia)**:
        *   **Assess QRS Duration**:
            *   **Wide QRS (≥0.12 sec)?**
                *   **Yes**:
                    *   If regular and monomorphic: Consider Adenosine (only if regular and monomorphic). Consider antiarrhythmic infusion (e.g., Procainamide, Amiodarone, Sotalol). Expert consultation.
                    *   If irregular: (e.g., AFib with aberrancy, pre-excited AFib, polymorphic VT/Torsades). Expert consultation. For Torsades de Pointes: Magnesium IV.
                *   **No (Narrow QRS <0.12 sec)**:
                    *   **Regular Rhythm?**
                        *   **Yes (likely SVT)**: Vagal maneuvers (if no contraindication). Adenosine 6 mg rapid IV push; if no conversion, 12 mg IV push. Beta-blocker or Calcium Channel Blocker.
                        *   **No (Irregular Narrow Complex Tachycardia - likely AFib, AFlutter with variable block, or MAT)**: Control rate (Beta-blocker or Calcium Channel Blocker - e.g., Diltiazem). Consider anticoagulation for AFib/AFlutter. Expert consultation.

**Note**: This is a simplified summary. Always refer to the latest official AHA/ERC ACLS Provider Manual for complete and detailed guidelines, drug dosages, and specific clinical scenarios. Local protocols may also apply.`,
    categoryType: 'Policy',
    keywordsForImage: 'cpr heart defibrillator',
  },
  {
    id: 'stroke-management',
    slug: 'stroke-management',
    title: 'Acute Stroke Management Protocols',
    summary: 'Guidelines for rapid assessment, diagnosis (ischemic vs. hemorrhagic), and time-sensitive interventions for acute stroke patients, including tPA and thrombectomy criteria.',
    content: `## General Overview

Acute stroke is a medical emergency characterized by the sudden loss of brain function due to an interruption of blood flow to a part of the brain (ischemic stroke) or the rupture of a blood vessel within or around the brain (hemorrhagic stroke). It is a leading cause of death and long-term disability worldwide. Rapid recognition of stroke symptoms, prompt activation of emergency medical services, and swift transport to a stroke-capable hospital are critical for optimizing patient outcomes. The phrase "Time is Brain" underscores the urgency, as brain cells begin to die within minutes of losing their blood supply.

Ischemic strokes, accounting for about 87% of all strokes, occur when a cerebral artery is blocked by a thrombus (blood clot forming locally) or an embolus (clot or debris traveling from elsewhere, often the heart). Hemorrhagic strokes result from bleeding, either into the brain tissue itself (intracerebral hemorrhage, ICH) or into the subarachnoid space surrounding the brain (subarachnoid hemorrhage, SAH).

Management of acute stroke in the ICU involves rapid diagnostic workup (including neuroimaging like CT or MRI), close physiological monitoring, and specific interventions tailored to the type and cause of stroke. For ischemic stroke, this may include reperfusion therapies such as intravenous thrombolysis (e.g., alteplase or tPA) or mechanical thrombectomy. For hemorrhagic stroke, management focuses on controlling blood pressure, managing intracranial pressure, reversing anticoagulation if applicable, and potentially surgical intervention. ICU care also involves preventing and managing complications such as cerebral edema, seizures, aspiration pneumonia, and venous thromboembolism.

## In-Depth ICU Considerations

### Rapid Recognition and Stroke Team Activation
*   **Key Symptoms (BE FAST or FAST)**:
    *   **B**alance: Sudden loss of balance or coordination.
    *   **E**yes: Sudden trouble seeing in one or both eyes.
    *   **F**ace Drooping: Sudden facial weakness or asymmetry.
    *   **A**rm Weakness: Sudden weakness or numbness in one arm.
    *   **S**peech Difficulty: Sudden slurred speech, difficulty speaking or understanding.
    *   **T**ime to call emergency services: Note the time symptoms began (Last Known Well - LKW).
*   **Stroke Code/Alert Activation**: Pre-hospital notification and rapid in-hospital pathways are crucial. Goal: Door-to-Needle time <60 minutes (ideally <45 min) for tPA in ischemic stroke.

### Initial Assessment and Stabilization (ED/ICU)
*   **ABCs**: Ensure patent airway, adequate breathing and oxygenation (SpO2 >94%), and circulatory support.
*   **Vital Signs & Glucose**: Monitor closely. Treat hypoglycemia (<60 mg/dL) or significant hyperglycemia.
*   **Brief Neurological Exam**: NIH Stroke Scale (NIHSS) is a standardized tool to quantify stroke severity. GCS.
*   **Establish IV Access**.
*   **Obtain Labs**: CBC, electrolytes, renal function, coagulation studies (PT/INR, aPTT), cardiac enzymes, blood glucose.
*   **Non-Contrast Head CT (NCCT)**: **CRITICAL first imaging study** to differentiate ischemic vs. hemorrhagic stroke and rule out mimics. Goal: Door-to-CT interpretation <20-25 minutes.
*   **Further Imaging (as indicated)**:
    *   CT Angiography (CTA) of head and neck: To identify large vessel occlusion (LVO) in ischemic stroke.
    *   CT Perfusion (CTP) or MR Perfusion: To assess ischemic penumbra vs. core infarct, helps select patients for thrombectomy in extended windows.
    *   MRI/MRA: More sensitive for early ischemic changes, posterior fossa strokes.

### Ischemic Stroke Management

#### Intravenous Thrombolysis (Alteplase/tPA)
*   **Mechanism**: Converts plasminogen to plasmin, which degrades fibrin clots.
*   **Eligibility Criteria (General - always refer to latest guidelines/protocols)**:
    *   Diagnosis of ischemic stroke causing measurable neurological deficit.
    *   Symptom onset (LKW) within **3 to 4.5 hours** of treatment initiation (some exceptions for wake-up strokes or extended window with advanced imaging).
    *   Age ≥18 years.
*   **Key Exclusion Criteria (Partial List - MANY exclusions exist)**:
    *   Evidence of intracranial hemorrhage on NCCT.
    *   Active internal bleeding.
    *   Recent (within 3 months) significant head trauma, intracranial/intraspinal surgery.
    *   History of ICH.
    *   Intracranial AVM, aneurysm, or neoplasm.
    *   SBP >185 mmHg or DBP >110 mmHg (despite attempts to lower).
    *   Platelet count <100,000/μL.
    *   INR >1.7 or PT >15s (if on warfarin). Current use of direct thrombin inhibitors or direct factor Xa inhibitors with evidence of anticoagulant effect.
    *   Glucose <50 mg/dL.
    *   NIHSS >25 (relative exclusion, risk/benefit assessment).
    *   Stroke within last 3 months (relative).
*   **Dose**: 0.9 mg/kg (max 90 mg). 10% of total dose given as IV bolus over 1 minute, remaining 90% infused over 60 minutes.
*   **Monitoring during and after tPA**:
    *   Frequent neurological assessments (NIHSS, GCS, pupils) q15 min during infusion, q30 min for 6h, then hourly for 16h.
    *   Frequent BP monitoring: q15 min for 2h, then q30 min for 6h, then hourly for 16h. Maintain BP <180/105 mmHg for first 24h.
    *   **Monitor for signs of Intracranial Hemorrhage (ICH)**: Worsening neuro deficit, severe headache, N/V, acute hypertension. **STOP tPA infusion immediately** and obtain stat NCCT if suspected.
    *   Avoid antithrombotics (aspirin, heparin) for 24 hours post-tPA (obtain follow-up CT scan at 24h before starting).
    *   No Foley catheter, NG tube, or arterial puncture for specified period if possible.

#### Mechanical Thrombectomy (Endovascular Therapy - EVT)
*   **Indication**: Acute ischemic stroke due to Large Vessel Occlusion (LVO) in anterior circulation (e.g., internal carotid artery, MCA M1/M2 segments).
*   **Eligibility Criteria (General)**:
    *   Pre-stroke modified Rankin Scale (mRS) score 0-1.
    *   Age ≥18 years.
    *   Causative LVO.
    *   NIHSS score ≥6.
    *   Treatment can be initiated (groin puncture) within **6 hours** of symptom onset.
    *   For select patients with LVO in anterior circulation, EVT may be recommended up to **24 hours** from LKW if they meet specific imaging criteria (e.g., DAWN or DEFUSE 3 trial criteria - small infarct core, large penumbra).
*   Can be given in addition to IV tPA (bridging therapy) or as primary treatment if tPA contraindicated.

#### General Supportive Care for Ischemic Stroke
*   **Blood Pressure Management**:
    *   If eligible for tPA: Lower BP gently to <185/110 mmHg before tPA (e.g., Labetalol, Nicardipine). Maintain <180/105 mmHg for 24h post-tPA.
    *   If not eligible for tPA: Permissive hypertension (allow BP up to ~220/120 mmHg) is often tolerated unless other compelling indication for lowering (e.g., ACS, HF, aortic dissection). If BP lowering is needed, aim for ~15% reduction in first 24h.
*   **Temperature**: Treat fever (temp >38°C or 100.4°F) with antipyretics.
*   **Glucose**: Maintain euglycemia (target range often 140-180 mg/dL). Treat hypoglycemia (<60 mg/dL) promptly.
*   **DVT Prophylaxis**: Intermittent pneumatic compression devices. Pharmacologic prophylaxis (LMWH/UFH) usually started 24-48h after stroke if no hemorrhage (and after 24h post-tPA if given).
*   **Aspiration Precautions**: NPO until swallow screen/assessment performed.
*   **Antiplatelet Therapy**: Aspirin (e.g., 160-325 mg) usually started within 24-48 hours of ischemic stroke onset (if tPA given, delay aspirin for 24h post-tPA, after repeat CT confirms no hemorrhage). Dual antiplatelet therapy (aspirin + clopidogrel) for minor stroke/high-risk TIA for short duration (e.g., 21-90 days).
*   **Statin Therapy**: High-intensity statin usually recommended.
*   **Management of Cerebral Edema / Increased ICP**: Occurs in large strokes ("malignant MCA syndrome"), peaks at 3-5 days.
    *   HOB elevation, head midline.
    *   Osmotic therapy (Mannitol, hypertonic saline).
    *   Hyperventilation (transiently).
    *   Decompressive Hemicraniectomy: Life-saving for malignant edema in selected patients (e.g., age <60-70, within 48h).

### Hemorrhagic Stroke Management

#### Intracerebral Hemorrhage (ICH)
*   **Causes**: Hypertension (most common), anticoagulation, AVMs, tumors, amyloid angiopathy, sympathomimetic drug use.
*   **Management**:
    *   **Blood Pressure Control**: **Crucial**. Acute lowering of SBP to <140-160 mmHg is often targeted (e.g., using Labetalol, Nicardipine, Esmolol IV infusions). Specific target may vary by guidelines and patient factors. Avoid excessive BP reduction.
    *   **Reversal of Anticoagulation/Antiplatelets**:
        *   Warfarin: Vitamin K IV, PCC (e.g., Kcentra) or FFP.
        *   DOACs: Specific reversal agents (Idarucizumab for Dabigatran; Andexanet alfa for Factor Xa inhibitors like Apixaban/Rivaroxaban) or PCCs.
        *   Antiplatelets: Platelet transfusion may be considered in some cases (e.g., if undergoing surgery) but utility is debated. DDAVP for aspirin/clopidogrel.
    *   **Management of Increased ICP**: Similar to TBI/ischemic stroke (HOB elevation, osmotic therapy). EVD if hydrocephalus.
    *   **Seizure Prophylaxis**: Generally not recommended unless clinical seizures occur or EEG evidence.
    *   **Surgical Evacuation**: May be considered for cerebellar hemorrhages >3cm with neurological deterioration or brainstem compression/hydrocephalus. Supratentorial ICH evacuation is more controversial (depends on location, size, GCS).

#### Subarachnoid Hemorrhage (SAH)
*   **Causes**: Ruptured cerebral aneurysm (most common, ~85%), AVM, trauma.
*   **Presentation**: "Worst headache of life" (thunderclap headache), N/V, neck stiffness, photophobia, LOC.
*   **Diagnosis**: NCCT head (high sensitivity if done early). If CT negative but high suspicion, Lumbar Puncture (for xanthochromia). CTA/MRA or digital subtraction angiography (DSA) to identify aneurysm/source.
*   **Management**:
    *   **Secure Aneurysm**: Early endovascular coiling or surgical clipping to prevent rebleeding (highest risk in first 24-48h).
    *   **Blood Pressure Control**: Maintain SBP <160 mmHg (or other target per guidelines) until aneurysm secured. Avoid hypotension.
    *   **Nimodipine**: Oral calcium channel blocker (60 mg q4h for 21 days) to prevent/reduce severity of delayed cerebral ischemia (DCI) from vasospasm. Started within 96h.
    *   **Vasospasm Monitoring & Management**: Transcranial Doppler (TCD) daily. Neurological exams. If vasospasm occurs (typically 4-14 days post-SAH), induce hypertension (e.g., phenylephrine, norepinephrine), hypervolemia (euvolemia preferred by some), hemodilution ("Triple H" therapy - controversial, focus on euvolemia & induced HTN). Endovascular treatment (angioplasty, intra-arterial vasodilators) for refractory vasospasm.
    *   **Manage Hydrocephalus**: EVD if needed.
    *   **Seizure Prophylaxis**: Short-term prophylaxis may be considered.
    *   Maintain euvolemia, euglycemia, normothermia.

### Stroke Mimics
Conditions that can present with acute neurological deficits similar to stroke: Seizures (Todd's paralysis), hypoglycemia, hyperglycemia (hyperosmolar state), migraine with aura, brain tumor, CNS infection (meningitis, encephalitis), Bell's palsy, conversion disorder, electrolyte abnormalities, toxic-metabolic encephalopathy, multiple sclerosis exacerbation. NCCT head helps differentiate.

This summary provides key ICU considerations. Always refer to the latest comprehensive stroke guidelines from organizations like AHA/ASA for detailed protocols.`,
    categoryType: 'Policy',
    keywordsForImage: 'brain scan stroke neurology',
  },
  {
    id: 'sepsis-management',
    slug: 'sepsis-management',
    title: 'Sepsis Management Protocol',
    summary: 'Evidence-based guidelines for early recognition, resuscitation, and ongoing management of sepsis and septic shock, aligning with Surviving Sepsis Campaign recommendations.',
    content: `## General Overview

Sepsis is a life-threatening condition that arises when the body's response to an infection injures its own tissues and organs. It is a medical emergency requiring prompt recognition and intervention to improve outcomes. Septic shock, a more severe form of sepsis, is characterized by persistent hypotension and cellular metabolic abnormalities despite adequate fluid resuscitation, leading to a substantially higher risk of mortality. The Surviving Sepsis Campaign (SSC) publishes regularly updated, evidence-based guidelines to assist clinicians in the diagnosis and management of sepsis and septic shock. These guidelines emphasize early identification, rapid administration of antibiotics, appropriate fluid resuscitation, vasopressor support if needed, and source control of the infection.

The core pathophysiology of sepsis involves a dysregulated host immune response to invading pathogens (bacteria, viruses, fungi, or parasites). This leads to a cascade of inflammatory and anti-inflammatory processes, endothelial dysfunction, microcirculatory alterations, and coagulation abnormalities. The result is widespread tissue hypoperfusion, cellular hypoxia, organ dysfunction, and potentially death. Early recognition tools like qSOFA (quick Sequential Organ Failure Assessment) and SOFA scores help identify patients at risk or with established organ dysfunction. Lactate levels are an important marker of tissue hypoperfusion and illness severity. Effective sepsis management requires a multidisciplinary team approach, with ICU nurses playing a crucial role in monitoring, administering treatments, and titrating therapies according to patient response and established protocols. This module outlines key elements based on SSC recommendations; healthcare providers must always consult the most current official guidelines.

## In-Depth ICU Considerations

### Definitions (Based on Sepsis-3 International Consensus)
*   **Sepsis**: Life-threatening organ dysfunction caused by a dysregulated host response to infection. Clinically, organ dysfunction can be represented by an increase in the Sequential [Sepsis-related] Organ Failure Assessment (SOFA) score of 2 points or more, which is associated with an in-hospital mortality greater than 10%.
*   **Septic Shock**: A subset of sepsis in which underlying circulatory and cellular/metabolic abnormalities are profound enough to substantially increase mortality. Clinically identified by persisting hypotension requiring vasopressors to maintain a mean arterial pressure (MAP) of ≥65 mmHg AND having a serum lactate level >2 mmol/L (>18 mg/dL) despite adequate volume resuscitation.

### Early Recognition and Diagnosis
*   **Screening**: Routinely screen for sepsis in acutely ill patients with suspected infection. Use tools like qSOFA (outside ICU) or SOFA (inside ICU) to assess for organ dysfunction.
    *   **qSOFA criteria** (1 point for each, score ≥2 suggests higher risk):
        1.  Respiratory rate ≥22/min
        2.  Altered mentation (Glasgow Coma Scale score <15)
        3.  Systolic blood pressure ≤100 mmHg
*   **Clinical Suspicion**: Suspect sepsis in any patient presenting with signs and symptoms of infection along with acute organ dysfunction (e.g., altered mental status, oliguria, hypoxemia, hypotension, thrombocytopenia, hyperbilirubinemia).
*   **Diagnostic Workup**:
    *   **Cultures**: Obtain appropriate cultures (at least two sets of blood cultures – one aerobic, one anaerobic, from different sites; one peripheral and one from each vascular access device >48h old if present) **before** administering antibiotics, provided this does not cause significant delay (>45 minutes) in antibiotic initiation. Also culture other suspected sites (e.g., urine, sputum, wound, CSF).
    *   **Laboratory Tests**: CBC with differential, comprehensive metabolic panel (electrolytes, renal and liver function), coagulation studies (PT/INR, aPTT), lactate, C-reactive protein (CRP), procalcitonin (PCT - may help guide antibiotic discontinuation). Arterial blood gas (ABG) if respiratory distress or severe illness.
    *   **Imaging**: Chest X-ray, CT scans, ultrasound, etc., as indicated to identify source of infection.

### Hour-1 Bundle (Surviving Sepsis Campaign - Initiate as soon as possible)
For patients with sepsis or septic shock, the following interventions should be initiated ideally **within 1 hour** of recognition:

1.  **Measure Lactate Level**: If initial lactate is elevated (>2 mmol/L), remeasure within 2-4 hours to guide resuscitation and assess response.
2.  **Obtain Blood Cultures Before Administering Antibiotics**: (As above, do not delay antibiotics significantly).
3.  **Administer Broad-Spectrum Antibiotics**:
    *   Administer effective IV antimicrobials as soon as possible, ideally within 1 hour of recognition of sepsis or septic shock.
    *   Empiric broad-spectrum therapy should cover all likely pathogens (bacteria and/or fungi, viruses if suspected) based on patient characteristics (e.g., immunocompromised), suspected site of infection, local pathogen patterns, and hospital/community antibiogram data.
    *   Consider double coverage for gram-negative bacilli (e.g., a beta-lactam plus an aminoglycoside or fluoroquinolone) in some high-risk patients with septic shock (e.g., neutropenic, MDR risk).
    *   Empiric MRSA coverage if patient has risk factors.
    *   Daily assessment for de-escalation of antimicrobial therapy based on culture results and clinical improvement.
4.  **Begin Rapid Administration of 30 mL/kg Crystalloid for Hypotension or Lactate ≥4 mmol/L**:
    *   This initial fluid bolus should be completed within 3 hours of recognition.
    *   Use balanced crystalloids (e.g., Lactated Ringer's) or normal saline.
    *   Further fluid administration should be guided by reassessment of hemodynamic status.
5.  **Apply Vasopressors if Hypotensive During or After Fluid Resuscitation to Maintain a Mean Arterial Pressure (MAP) ≥65 mmHg**:
    *   If MAP remains <65 mmHg despite initial fluid resuscitation, start vasopressors.
    *   **Norepinephrine** is the first-choice vasopressor.
    *   If norepinephrine is unavailable, epinephrine or dopamine may be considered (dopamine associated with more arrhythmias).
    *   **Vasopressin** (up to 0.03 units/minute) or **Epinephrine** can be added to norepinephrine with the intent of raising MAP to target, or to decrease norepinephrine dosage. Angiotensin II can also be considered.
    *   Arterial catheter for continuous BP monitoring is recommended as soon as practical if vasopressors are required.

### Ongoing Management and Resuscitation Goals (Post Hour-1 Bundle)

#### Hemodynamic Support
*   **Fluid Therapy**:
    *   After initial fluid resuscitation, subsequent fluid administration should be guided by frequent reassessment of volume status and tissue perfusion.
    *   Use dynamic measures (e.g., passive leg raise, fluid challenge with stroke volume assessment, stroke volume variation (SVV), pulse pressure variation (PPV)) to predict fluid responsiveness rather than static variables (e.g., CVP, PAWP) alone.
    *   Avoid excessive fluid administration (fluid overload is harmful).
*   **Vasopressors**: (As above) Titrate to maintain MAP ≥65 mmHg.
*   **Inotropic Therapy**:
    *   Consider adding **Dobutamine** if there is evidence of myocardial dysfunction (e.g., low cardiac output, elevated cardiac filling pressures despite adequate volume status, or persistent hypoperfusion despite adequate MAP and volume status).
*   **Corticosteroids**:
    *   Suggest IV **Hydrocortisone** (e.g., 200 mg/day, often given as 50mg IV q6h or continuous infusion) for adult patients with septic shock and ongoing hemodynamic instability (i.e., need for escalating vasopressor doses to maintain MAP ≥65 mmHg) despite adequate fluid and vasopressor therapy.
    *   Taper when vasopressors are no longer required. Routine use in sepsis without shock is not recommended.

#### Source Control
*   Identify or exclude an anatomical source of infection requiring emergent source control (e.g., debridement of necrotic tissue, drainage of abscess, removal of infected device) as rapidly as possible. Intervention should ideally occur within 6-12 hours of diagnosis if feasible.

#### Ventilation
*   For sepsis-induced ARDS:
    *   Target tidal volume of 6 mL/kg predicted body weight (PBW).
    *   Use higher PEEP.
    *   Maintain plateau pressures <30 cm H2O.
    *   Consider prone positioning for ARDS with PaO2/FiO2 ratio <150.
    *   Consider conservative fluid strategy for established ARDS without evidence of tissue hypoperfusion.
    *   Consider NMBAs for ≤48 hours for ARDS with PaO2/FiO2 <150.

#### Adjunctive Therapies
*   **Glucose Control**: Initiate insulin dosing when 2 consecutive blood glucose levels are >180 mg/dL. Target an upper blood glucose level ≤180 mg/dL rather than a more stringent target (e.g., ≤110 mg/dL). Monitor glucose q1-2h until stable, then q4h.
*   **Renal Replacement Therapy (RRT)**: Continuous or intermittent RRT for AKI with standard indications (e.g., severe acidosis, hyperkalemia, uremia, fluid overload). RRT is not recommended solely for sepsis treatment without AKI.
*   **Venous Thromboembolism (VTE) Prophylaxis**: Pharmacologic prophylaxis (LMWH or UFH) unless contraindicated. Mechanical prophylaxis (IPCs) if pharmacologic contraindicated, or in addition for high-risk patients.
*   **Stress Ulcer Prophylaxis**: Use PPIs or H2RAs in patients with sepsis/septic shock who have risk factors for GI bleeding (e.g., mechanical ventilation >48h, coagulopathy).
*   **Nutrition**: Early enteral nutrition (within 24-48 hours) is preferred over delayed EN or parenteral nutrition if tolerated. Avoid full caloric feeding in the first week; advance feeds as tolerated.
*   **Bicarbonate Therapy**: Not recommended for treating hypoperfusion-induced lactic acidemia if pH ≥7.15.
*   **Blood Product Transfusion**:
    *   RBC transfusion generally only when Hgb <7.0 g/dL in the absence of extenuating circumstances (e.g., active bleeding, acute myocardial ischemia, severe hypoxemia).
    *   Prophylactic platelet transfusion if counts are <10,000/mm³ in absence of bleeding, or <20,000/mm³ if significant risk of bleeding. Higher counts (e.g., ≥50,000/mm³) for active bleeding or planned surgery/invasive procedures.

#### Goals of Care and Communication
*   Discuss goals of care and prognosis with patients and families. Address end-of-life care preferences early if appropriate.

**Note**: These guidelines are a summary and subject to change. Always refer to the most current Surviving Sepsis Campaign guidelines and local institutional protocols for comprehensive and up-to-date information.`,
    categoryType: 'Policy',
    keywordsForImage: 'sepsis bacteria infection emergency',
  },
];


export const bodySystems: ContentItem[] = originalBodySystemsContent.map(item => {
  const { generalOverview, inDepthConsiderations } = splitContent(item.content);
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

    