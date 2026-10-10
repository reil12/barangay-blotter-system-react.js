import { useState } from 'react';
import { api } from '../api';
import { useFlash } from '../context';
import { fmtDateTime, useFetch } from '../utils';
import { AdminLayout } from '../components/Layout';
import { ANNOUNCEMENT_CATEGORIES } from '../data';
import css from '../styles/admin_announcements.css?raw';

const EMPTY = { title: '', category: 'General', content: '' };

export default function AdminAnnouncementsPage() {
  const { flash } = useFlash();
  const { data, reload, loading, error } = useFetch(api.announcements);
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function post(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await api.addAnnouncement(form);
      flash('success', d.message);
      setForm(EMPTY);
      reload();
    } catch (err) {
      flash('danger', err.message);
    }
    setBusy(false);
  }

  async function remove(id) {
    if (!window.confirm('Delete this announcement?')) return;
    try {
      const d = await api.deleteAnnouncement(id);
      flash('success', d.message);
      reload();
    } catch (err) {
      flash('danger', err.message);
    }
  }

  const list = data ?? [];

  return (
    <AdminLayout css={css} active="/admin/announcements">
      <div className="header">
        <h5>Announcements</h5>
        <p>Post announcements visible to all residents</p>
      </div>

      <div className="card">
        <div style={{ fontWeight: 700, marginBottom: 12 }}>Post New Announcement</div>
        <form onSubmit={post}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            <div>
              <label>Title</label>
              <input placeholder="Announcement title..." required value={form.title} onChange={set('title')} />
            </div>
            <div>
              <label>Category</label>
              <select value={form.category} onChange={set('category')}>
                {ANNOUNCEMENT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <label>Content</label>
            <textarea rows="4" required value={form.content} onChange={set('content')} />
          </div>
          <div style={{ marginTop: 12 }}>
            <button type="submit" disabled={busy}>Post Announcement</button>
          </div>
        </form>
      </div>

      {loading && <p>Loading announcements…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {data && (
        <>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
            Posted Announcements ({list.length})
          </div>

          {list.map((ann) => (
            <div className="ann-card" key={ann.AnnouncementID}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <span className="badge">{ann.Category}</span>
                    <small style={{ color: 'var(--muted)', fontSize: 12 }}>{fmtDateTime(ann.CreatedAt)}</small>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{ann.Title}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{ann.Content}</div>
                </div>
                <button className="btn-danger" onClick={() => remove(ann.AnnouncementID)}>Delete</button>
              </div>
            </div>
          ))}

          {list.length === 0 && (
            <div style={{ textAlign: 'center', padding: 40, color: 'var(--muted)' }}>
              No announcements yet
            </div>
          )}
        </>
      )}
    </AdminLayout>
  );
}
