export function generateToken(): string {
  return crypto.randomUUID();
}

export function getCheckinUrl(token: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base}/checkin/${token}`;
}

export function getDashboardUrl(token: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base}/dashboard/${token}`;
}
