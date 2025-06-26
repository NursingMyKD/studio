// Audit logging utility for admin actions
import { adminDb } from './firebase-admin';

interface AuditLogEntry {
  userId: string;
  userEmail: string;
  action: string;
  resource: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
  success: boolean;
  details?: any;
}

export async function logAdminAction(entry: AuditLogEntry): Promise<void> {
  try {
    await adminDb.collection('audit_logs').add({
      ...entry,
      timestamp: entry.timestamp || new Date(),
    });
  } catch (error) {
    console.error('Failed to log audit entry:', error);
    // Don't throw - audit logging should not break the main flow
  }
}

export function createAuditLogger(req: any) {
  const ipAddress = req.headers['x-forwarded-for'] || 
                   req.headers['x-real-ip'] || 
                   req.connection?.remoteAddress || 
                   'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';

  return (userId: string, userEmail: string, action: string, resource: string, success: boolean, details?: any) => {
    return logAdminAction({
      userId,
      userEmail,
      action,
      resource,
      timestamp: new Date(),
      ipAddress,
      userAgent,
      success,
      details,
    });
  };
}
