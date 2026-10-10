import { api } from '../api';
import { useFlash } from '../context';
import { useFetch } from '../utils';
import { useState } from 'react';
import { AdminLayout } from '../components/Layout';
import css from '../styles/admin_users.css?raw';

export default function AdminUsersPage() {
  const { flash } = useFlash();
  const { data, setData, loading, error } = useFetch(api.users);
  const users = data ?? [];
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const shown = needle
    ? users.filter((u) =>
        [u.FullName, u.Email, u.ContactNumber, u.Role, String(u.UserID)]
          .some((v) => String(v ?? '').toLowerCase().includes(needle)))
    : users;

  async function remove(u) {
    if (!window.confirm(`Delete ${u.FullName} and all their reports?`)) return;
    try {
      const d = await api.deleteUser(u.UserID);
      flash('success', d.message);
      setData((list) => list.filter((x) => x.UserID !== u.UserID));
    } catch (e) {
      flash('danger', e.message);
    }
  }

  return (
    <AdminLayout css={css} active="/admin/users">
      <div className="header">
        <h3>All Registered Users</h3>
        <p>Manage barangay residents and accounts</p>
      </div>

      {loading && <p>Loading users…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {data && (
        <>
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-label">Total Users</div>
              <div className="stat-num">{users.length}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Verified</div>
              <div className="stat-num">{users.filter((u) => u.IsVerified === 1).length}</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">Citizens</div>
              <div className="stat-num">{users.filter((u) => u.Role === 'user').length}</div>
            </div>
          </div>

          <div className="search-bar">
            <input
              placeholder="Search by name, email, contact, role or ID..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            {q && (
              <a href="#" className="clear-btn" onClick={(e) => { e.preventDefault(); setQ(''); }}>Clear</a>
            )}
          </div>

          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Contact</th>
                  <th>Role</th><th>Status</th><th>Reports</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((u) => (
                  <tr key={u.UserID}>
                    <td>{u.UserID}</td>
                    <td><strong>{u.FullName}</strong></td>
                    <td>{u.Email}</td>
                    <td>{u.ContactNumber || '—'}</td>
                    <td><span className="badge">{u.Role}</span></td>
                    <td>
                      {u.IsVerified === 1
                        ? <span className="badge" style={{ background: '#16a34a', color: '#fff' }}>Verified</span>
                        : <span className="badge" style={{ background: '#ef4444', color: '#fff' }}>Unverified</span>}
                    </td>
                    <td>{u.TotalReports}</td>
                    <td>
                      {u.Role !== 'admin'
                        ? <button className="btn-danger" onClick={() => remove(u)}>Delete</button>
                        : 'Protected'}
                    </td>
                  </tr>
                ))}
                {shown.length === 0 && (
                  <tr><td colSpan="8" style={{ textAlign: 'center', padding: 24 }}>No users match your search.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
