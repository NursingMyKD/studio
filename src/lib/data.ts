import type { ContentItem } from '@/types/content';

export const bodySystems: ContentItem[] = [
  {
    id: 'cardiovascular',
    slug: 'cardiovascular',
    title: 'Cardiovascular System',
    summary: 'In-depth review of the cardiovascular system, common ICU conditions, and nursing interventions.',
    content: 'Detailed content on cardiac anatomy, physiology, arrhythmias, hemodynamic monitoring, vasopressors, and management of conditions like MI, heart failure, and shock. Includes ECG interpretation basics and advanced cardiac life support (ACLS) principles relevant to ICU care.',
    categoryType: 'Body System',
    keywordsForImage: 'heart anatomy',
  },
  {
    id: 'respiratory',
    slug: 'respiratory',
    title: 'Respiratory System',
    summary: 'Comprehensive guide to respiratory care in the ICU, including ventilation and airway management.',
    content: 'Covers respiratory A&P, ABG analysis, mechanical ventilation modes and management, ARDS, pneumonia, pulmonary embolism, and weaning protocols. Details on non-invasive ventilation, tracheostomy care, and chest tube management.',
    categoryType: 'Body System',
    keywordsForImage: 'lungs anatomy',
  },
  {
    id: 'neurological',
    slug: 'neurological',
    title: 'Neurological System',
    summary: 'Focus on neurological assessments, monitoring, and care for critically ill neuro patients.',
    content: 'Content includes neuroanatomy, intracranial pressure (ICP) monitoring, management of stroke, traumatic brain injury (TBI), seizures, and spinal cord injuries. Discusses pupillary assessment, Glasgow Coma Scale (GCS), and sedation management in neurocritical care.',
    categoryType: 'Body System',
    keywordsForImage: 'brain anatomy',
  },
];

export const topics: ContentItem[] = [
  {
    id: 'hemodynamics',
    slug: 'hemodynamics',
    title: 'Hemodynamics',
    summary: 'Understanding and managing hemodynamic parameters in critically ill patients.',
    content: 'Detailed explanation of cardiac output, stroke volume, systemic vascular resistance, preload, afterload, and contractility. Interpretation of arterial lines, central venous pressure (CVP), pulmonary artery catheters (Swan-Ganz), and advanced hemodynamic monitoring techniques. Titration of vasoactive medications.',
    categoryType: 'Topic',
    keywordsForImage: 'blood pressure',
  },
  {
    id: 'critical-care-pharmacology',
    slug: 'critical-care-pharmacology',
    title: 'Critical Care Pharmacology',
    summary: 'Essential pharmacology for ICU nurses, focusing on common critical care medications.',
    content: 'Covers vasopressors, inotropes, sedatives, analgesics, paralytics, antibiotics, and anticoagulants commonly used in the ICU. Includes mechanisms of action, dosages, side effects, and nursing considerations for safe administration and monitoring.',
    categoryType: 'Topic',
    keywordsForImage: 'medication pills',
  },
  {
    id: 'ventilator-management',
    slug: 'ventilator-management',
    title: 'Ventilator Management',
    summary: 'Principles and practices of mechanical ventilation in the ICU setting.',
    content: 'In-depth guide to ventilator settings (FiO2, PEEP, tidal volume, respiratory rate), modes of ventilation (AC, SIMV, PSV, PRVC), troubleshooting alarms, assessing patient-ventilator synchrony, and strategies for lung protection. Includes information on ARDSnet protocols.',
    categoryType: 'Topic',
    keywordsForImage: 'hospital ventilator',
  },
];

export const policies: ContentItem[] = [
  {
    id: 'stroke-protocols',
    slug: 'stroke-protocols',
    title: 'Stroke Protocols',
    summary: 'Unit-specific guidelines for the management of acute stroke patients.',
    content: 'Detailed policy on initial assessment (NIH Stroke Scale), tPA administration criteria and procedure, post-tPA monitoring, blood pressure management, and supportive care for ischemic and hemorrhagic stroke patients. Includes protocols for thrombectomy candidates.',
    categoryType: 'Policy',
    keywordsForImage: 'brain mri',
  },
  {
    id: 'medication-administration',
    slug: 'medication-administration',
    title: 'Medication Administration Guidelines',
    summary: 'Policies related to safe medication administration in the ICU.',
    content: 'Unit policy covering the 10 rights of medication administration, high-alert medications, double-check procedures, IV medication compatibility, smart pump usage, and documentation standards. Specific guidelines for titratable drips.',
    categoryType: 'Policy',
    keywordsForImage: 'nurse medication',
  },
  {
    id: 'central-line-care',
    slug: 'central-line-care',
    title: 'Central Line Associated Bloodstream Infection (CLABSI) Prevention',
    summary: 'Protocols for central venous catheter insertion, maintenance, and CLABSI prevention.',
    content: 'Evidence-based guidelines for central line insertion checklist, sterile technique, dressing changes, hub care (scrub the hub), daily assessment for necessity, and strategies to minimize CLABSI risk. Includes procedures for drawing blood cultures from central lines.',
    categoryType: 'Policy',
    keywordsForImage: 'iv line',
  },
];

export const getAllContentItems = (): ContentItem[] => {
  return [...bodySystems, ...topics, ...policies];
};
