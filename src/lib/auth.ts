/**
 * Admin authentication utilities
 * Session management for authenticated admin users.
 * Authentication validation is handled server-side via API.
 */

export interface AdminUser {
  id: string;
  email: string;
  name: string;
}

const AUTH_SESSION_KEY = "admin_session";

export function createAdminSession(user: AdminUser): void {
  sessionStorage.setItem(
    AUTH_SESSION_KEY,
    JSON.stringify({
      user,
      loginTime: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
    })
  );
}

export function getAdminSession(): AdminUser | null {
  const sessionData = sessionStorage.getItem(AUTH_SESSION_KEY);
  if (!sessionData) return null;

  try {
    const session = JSON.parse(sessionData);
    const expiresAt = new Date(session.expiresAt);
    
    // Check if session has expired
    if (expiresAt < new Date()) {
      clearAdminSession();
      return null;
    }

    return session.user;
  } catch {
    return null;
  }
}

export function clearAdminSession(): void {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
}

export function isAdminAuthenticated(): boolean {
  return getAdminSession() !== null;
}
