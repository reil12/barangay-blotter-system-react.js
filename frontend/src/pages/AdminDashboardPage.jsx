import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { useFlash } from '../context';
import { fmtDate, matches, countBy, useFetch } from '../utils';
import { AdminLayout } from '../components/Layout';
import { STATUSES } from '../data';
import MeetingModal from '../components/MeetingModal';
import css from '../styles/admin_dashboard.css?raw';
import commonCss from '../styles/common.css?raw';

function Row({ r, onSaved, onDeleted }) {
  const { flash } = useFlash();
  const [status, setStatus] = useState(r.Status);
  const [busy, setBusy] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const save = async () => {
    setBusy(true);
    try {
      await api.updateStatus(r.IncidentID, status);
      flash('success', 'Status updated successfully.');
      onSaved(r.IncidentID, status);
    } catch (e) {
      flash('danger', e.message);
    }
    setBusy(false);
  };

  const remove = async () => {
    if (!window.confirm('Delete this record?')) return;
    try {
      await api.deleteIncident(r.IncidentID);
      flash('success', 'Blotter record deleted successfully.');
      onDeleted(r.IncidentID);
    } catch (e) {
      flash('danger', e.message);
    }
  };

  return (
    <tr>
      <td>{r.CaseNumber}</td>
      <td>{r.Complainant}</td>
      <td>{r.Respondent}</td>
      <td>{r.IncidentType}</td>
      <td>{fmtDate(r.DateFiled)}</td>
      <td>{r.Status}</td>
      <td>
        <div className="action-group">
          <Link to={`/admin/edit/${r.IncidentID}`} className="btn-sm btn-edit">Edit</Link>
          <Link to={`/admin/certificate/${r.IncidentID}`} target="_blank" rel="noreferrer" className="btn-sm btn-print">Print</Link>
          <button className="btn-sm btn-edit" onClick={() => setShowNotice(true)}>Notify</button>
          <select className="status-select" value={status} onChange={(e) => setStatus(e.target.value)}>
            {STATUSES.map((s) => <option key={s}>{s}</option>)}
          </select>
          <button className="btn-save" onClick={save} disabled={busy || status === r.Status}>
            {busy ? '…' : 'Save'}
          </button>
          <button className="btn-sm btn-delete" onClick={remove}>Delete</button>
        </div>
        {showNotice && <MeetingModal record={r} onClose={() => setShowNotice(false)} />}
      </td>
    </tr>
  );
}

export default function AdminDashboardPage() {
  const { data, setData, loading, error } = useFetch(api.adminIncidents);
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('All');
  const records = data ?? [];
  const rows = records.filter((r) => matches(r, q) && (filter === 'All' || r.Status === filter));

  return (
    <AdminLayout css={css + commonCss} active="/admin">
      <div className="header">
        <h3>All Blotter Records</h3>
        <p>Manage and review all incident reports</p>
      </div>

      {loading && <p>Loading records…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <>
          <div className="stats-row">
            <div className="stat-box"><div className="stat-label">Total</div><div className="stat-num">{records.length}</div></div>
            <div className="stat-box"><div className="stat-label">Pending</div><div className="stat-num">{countBy(records, 'Pending')}</div></div>
            <div className="stat-box"><div className="stat-label">Settled</div><div className="stat-num">{countBy(records, 'Settled')}</div></div>
          </div>

          <div className="search-bar">
            <input placeholder="Search blotter..." value={q} onChange={(e) => setQ(e.target.value)} />
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="status-select">
              {['All', ...STATUSES].map((s) => <option key={s}>{s}</option>)}
            </select>
            {(q || filter !== 'All') && (
              <a href="#" className="clear-btn" onClick={(e) => { e.preventDefault(); setQ(''); setFilter('All'); }}>Clear</a>
            )}
          </div>

          <div className="table-card">
            <table>
              <thead>
                <tr><th>Case</th><th>Complainant</th><th>Reported Person</th><th>Type</th><th>Date</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <Row
                    key={r.IncidentID}
                    r={r}
                    onSaved={(id, s) => setData((d) => d.map((x) => (x.IncidentID === id ? { ...x, Status: s } : x)))}
                    onDeleted={(id) => setData((d) => d.filter((x) => x.IncidentID !== id))}
                  />
                ))}
                {rows.length === 0 && (
                  <tr><td colSpan="7" style={{ textAlign: 'center', padding: 24 }}>No records found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
