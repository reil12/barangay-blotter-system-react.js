import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import { useFlash } from '../context';
import { useFetch } from '../utils';
import { AdminLayout, Loading } from '../components/Layout';
import { INCIDENT_TYPES, STATUSES } from '../data';
import css from '../styles/edit_blotter.css?raw';

export default function AdminEditPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => api.adminIncident(id), [id]);

  return (
    <AdminLayout css={css} active="/admin">
      {loading && <Loading />}
      {error && <div className="alert alert-danger">{error}</div>}
      {data && <EditForm key={data.IncidentID} id={id} record={data} />}
    </AdminLayout>
  );
}

// Separate component so the form starts from the loaded record
function EditForm({ id, record }) {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    complainant: record.Complainant ?? '',
    respondent: record.Respondent ?? '',
    incident_type: record.IncidentType ?? '',
    date_incident: (record.DateIncident ?? '').slice(0, 10),
    status: record.Status ?? 'Pending',
    narrative: record.Narrative ?? '',
  });
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function save(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await api.updateIncident(id, form);
      flash('success', d.message);
      navigate('/admin');
    } catch (err) {
      flash('danger', err.message);
      setBusy(false);
    }
  }

  return (
    <>
      <div className="header-row">
        <div className="header">
          <h3>Edit Blotter Record</h3>
          <p>Modify case details and update incident status</p>
        </div>
        <Link to="/admin" className="btn-back">← Back to Records</Link>
      </div>

      <div className="form-card">
        <form onSubmit={save}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Case Number</label>
              <input className="form-control" value={record.CaseNumber ?? ''} disabled />
            </div>

            <div className="form-group">
              <label className="form-label">Incident Type</label>
              <select className="form-select" value={form.incident_type} onChange={set('incident_type')}>
                {INCIDENT_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Complainant</label>
              <input className="form-control" required value={form.complainant} onChange={set('complainant')} />
            </div>

            <div className="form-group">
              <label className="form-label">Reported Person</label>
              <input className="form-control" required value={form.respondent} onChange={set('respondent')} />
            </div>

            <div className="form-group">
              <label className="form-label">Date of Incident</label>
              <input className="form-control" type="date" value={form.date_incident} onChange={set('date_incident')} />
            </div>

            <div className="form-group">
              <label className="form-label">Status</label>
              <select className="form-select" value={form.status} onChange={set('status')}>
                {STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label">Narrative</label>
              <textarea className="form-textarea" rows="6" value={form.narrative} onChange={set('narrative')} />
            </div>

            <div className="form-group full-width" style={{ marginTop: 10 }}>
              <button type="submit" className="btn-submit-form" disabled={busy}>Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
