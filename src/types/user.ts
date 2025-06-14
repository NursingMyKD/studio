
import type { Timestamp } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string | null;
  name: string;
  role: string; // e.g., "ICU Registered Nurse", "Manager"
  memberSince?: Timestamp | string; // Firestore Timestamp or ISO string
  department?: string;
  employeeId?: string;
  certifications?: string[];
  competencies?: string[];
  themePreference?: string;
  notificationsEnabled?: boolean;
  manager?: string; // Name or UID of manager
  directReports?: string[]; // Array of names or UIDs
}
