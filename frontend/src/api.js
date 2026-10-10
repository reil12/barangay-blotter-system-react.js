// One small helper for every call to the Flask JSON API (/api/...).
// Throws an Error with .status and .data when the server says no.
async function request(url, { method = 'GET', body } = {}) {
  const res = await fetch(url, {
    method,
    credentials: 'same-origin',
    headers: body !== undefined ? { 'Content-Type': 'application/json' } : {},
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* empty or non-JSON response */
  }
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  // auth
  me: () => request('/api/me'),
  login: (email, password) => request('/api/login', { method: 'POST', body: { email, password } }),
  verifyLogin: (otp) => request('/api/verify-login', { method: 'POST', body: { otp } }),
  signup: (body) => request('/api/signup', { method: 'POST', body }),
  verifySignup: (otp) => request('/api/verify-signup', { method: 'POST', body: { otp } }),
  logout: () => request('/api/logout', { method: 'POST' }),

  // resident
  myReports: () => request('/api/my-reports'),
  caseNumber: () => request('/api/case-number'),
  submitIncident: (body) => request('/api/incidents', { method: 'POST', body }),
  announcements: () => request('/api/announcements'),

  // admin: incidents
  adminIncidents: () => request('/api/admin/incidents'),
  adminIncident: (id) => request(`/api/admin/incidents/${id}`),
  updateIncident: (id, body) => request(`/api/admin/incidents/${id}`, { method: 'PUT', body }),
  updateStatus: (id, status) =>
    request(`/api/admin/incidents/${id}/status`, { method: 'POST', body: { status } }),
  deleteIncident: (id) => request(`/api/admin/incidents/${id}`, { method: 'DELETE' }),
  certificate: (id) => request(`/api/admin/incidents/${id}/certificate`),
  meetingNotice: (id, body) =>
    request(`/api/admin/incidents/${id}/meeting-notice`, { method: 'POST', body }),

  // admin: analytics, users, announcements
  analytics: () => request('/api/admin/analytics'),
  users: () => request('/api/admin/users'),
  deleteUser: (id) => request(`/api/admin/users/${id}`, { method: 'DELETE' }),
  addAnnouncement: (body) => request('/api/admin/announcements', { method: 'POST', body }),
  deleteAnnouncement: (id) => request(`/api/admin/announcements/${id}`, { method: 'DELETE' }),
};
