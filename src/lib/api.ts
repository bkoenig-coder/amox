export interface PublicEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM or ''
  location: string;
  description: string;
  capacity: number;
  registrationOpen: boolean;
  registered: number;
  full: boolean;
}

export interface AdminEvent {
  id?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  registrationOpen: boolean;
  createdAt?: string;
}

export interface Registration {
  key: string;
  eventId: string;
  fullName: string;
  phone: string;
  email: string;
  createdAt: string;
}

async function call<T>(url: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch {
    throw new Error('Сервертэй холбогдож чадсангүй. Интернэтээ шалгана уу.');
  }
  let data: any = null;
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }
  if (!res.ok) throw new Error((data && data.error) || 'Алдаа гарлаа (' + res.status + ')');
  return data as T;
}

export const fetchEvents = () => call<{ events: PublicEvent[] }>('/api/events').then((r) => r.events);

export const registerForEvent = (body: {
  eventId: string;
  fullName: string;
  phone: string;
  email: string;
  consent: boolean;
  website?: string;
}) =>
  call<{ ok: true }>('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

// ---- admin ----
const PW_KEY = 'amox_admin_pw';
export const getAdminPassword = () => {
  try {
    return sessionStorage.getItem(PW_KEY) || '';
  } catch {
    return '';
  }
};
export const setAdminPassword = (pw: string) => {
  try {
    if (pw) sessionStorage.setItem(PW_KEY, pw);
    else sessionStorage.removeItem(PW_KEY);
  } catch {
    /* ignore */
  }
};

export const admin = <T = any>(action: string, payload: Record<string, unknown> = {}, password?: string) =>
  call<T>('/api/admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-password': password ?? getAdminPassword() },
    body: JSON.stringify({ action, ...payload })
  });

// ---- formatting ----
const MONTHS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d) return iso;
  return y + ' оны ' + MONTHS[m - 1] + '-р сарын ' + d;
};
export const isPast = (iso: string) => {
  const today = new Date();
  const t = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
  return iso < t;
};
