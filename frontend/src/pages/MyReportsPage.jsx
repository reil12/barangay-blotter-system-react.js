import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { fmtDate, badgeClass, matches, countBy, useFetch } from '../utils';
import { ResidentLayout } from '../components/Layout';
import myCss from '../styles/my_reports.css?raw';
import commonCss from '../styles/common.css?raw';

export default function MyReportsPage() {
  const { data, loading, error } = useFetch(api.myReports);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('All');
  const records = data ?? [];
  const rows = records.filter((r) => matches(r, q) && (status === 'All' || r.Status === status));

  return (
    <ResidentLayout css={myCss + commonCss} active="/my-reports">
      <div className="pg-header">
        <div>
          <h1>My Blotter Reports</h1>
          <p>All reports you have filed with the barangay</p>
        </div>
        <Link to="/submit" className="btn-file-new">+ File New Report</Link>
      </div>

      {loading && <p style={{ color: '#fff' }}>Loading your reports…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && (
        <>
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-lbl">Total Reports</div>
              <div className="stat-num">{records.length}</div>
              <div className="stat-desc">All reports filed by you</div>
            </div>
            <div className="stat-box">
              <div className="stat-lbl">Pending Review</div>
              <div className="stat-num" style={{ color: '#fbbf24' }}>{countBy(records, 'Pending')}</div>
              <div className="stat-desc">Awaiting official review</div>
            </div>
            <div className="stat-box">
              <div className="stat-lbl">Settled Cases</div>
              <div className="stat-num" style={{ color: '#6ee7b7' }}>{countBy(records, 'Settled')}</div>
              <div className="stat-desc">Successfully resolved</div>
            </div>
          </div>

          {records.length > 0 && (
            <div className="react-toolbar">
              <input
                placeholder="Search case no., name, or type…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                {['All', 'Pending', 'Settled', 'Dismissed'].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          )}

          {rows.length > 0 ? (
            <div className="tbl-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Case No.</th><th>Complainant</th><th>Reported Person</th>
                    <th>Type</th><th>Date Filed</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.IncidentID}>
                      <td><span className="case-no">{r.CaseNumber}</span></td>
                      <td>{r.Complainant}</td>
                      <td>{r.Respondent}</td>
                      <td>{r.IncidentType}</td>
                      <td>{fmtDate(r.DateFiled)}</td>
                      <td><span className={`badge badge-${badgeClass(r.Status)}`}>{r.Status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon"></div>
              <p>
                {records.length
                  ? 'No reports match your search.'
                  : 'No blotter records found. Submissions you file will show up securely here.'}
              </p>
            </div>
          )}
        </>
      )}
    </ResidentLayout>
  );
}
