// Input sanitization utilities
export function sanitizeString(input: string, maxLength: number = 255): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>\"'&]/g, ''); // Remove potentially dangerous characters
}

export function sanitizeSlug(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '')
    .slice(0, 100);
}

export function sanitizeEmail(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = input.trim().toLowerCase().slice(0, 254);
  
  return emailRegex.test(sanitized) ? sanitized : '';
}

export function sanitizeNumber(input: any, min: number = 0, max: number = Number.MAX_SAFE_INTEGER): number {
  const num = Number(input);
  
  if (isNaN(num)) {
    return min;
  }
  
  return Math.max(min, Math.min(max, num));
}

export function sanitizeArray<T>(input: any, validator: (item: any) => T | null, maxLength: number = 100): T[] {
  if (!Array.isArray(input)) {
    return [];
  }
  
  return input
    .slice(0, maxLength)
    .map(validator)
    .filter((item): item is T => item !== null);
}
