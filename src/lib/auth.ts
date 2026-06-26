/**
 * Admin authentication utilities
 * Default credentials are stored in sessionStorage for demo purposes.
 * In production, integrate with a proper authentication service.
 */

export interface AdminUser {
  id: string;
  email: string;
  name: string;
}

const DEFAULT_ADMIN_CREDENTIALS = {
  email: "admin@linkfreight.com",
  password: "LinkFreight2024!",
};

const SECONDARY_ADMIN_CREDENTIALS = {
  email: "operations@linkfreight.com",
  password: "Operations123!",
};

const AUTH_SESSION_KEY = "admin_session";

export function seedDefaultAdminLogins(): void {
  // Store seeded credentials in localStorage for reference
  localStorage.setItem("_admin_credentials_seeded", JSON.stringify({
    admins: [
      {
        email: DEFAULT_ADMIN_CREDENTIALS.email,
        password: DEFAULT_ADMIN_CREDENTIALS.password,
        name: "Admin",
        role: "Super Admin",
      },
      {
        email: SECONDARY_ADMIN_CREDENTIALS.email,
        password: SECONDARY_ADMIN_CREDENTIALS.password,
        name: "Operations Manager",
        role: "Operations",
      },
    ],
    seededAt: new Date().toISOString(),
  }));
}

export function validateAdminLogin(email: string, password: string): AdminUser | null {
  // Check against default credentials
  if (
    email === DEFAULT_ADMIN_CREDENTIALS.email &&
    password === DEFAULT_ADMIN_CREDENTIALS.password
  ) {
    return {
      id: "admin-001",
      email: email,
      name: "Admin User",
    };
  }

  // Check against secondary credentials
  if (
    email === SECONDARY_ADMIN_CREDENTIALS.email &&
    password === SECONDARY_ADMIN_CREDENTIALS.password
  ) {
    return {
      id: "admin-002",
      email: email,
      name: "Operations Manager",
    };
  }

  return null;
}

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
