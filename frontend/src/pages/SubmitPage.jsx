import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useAuth, useFlash } from '../context';
import { ResidentLayout } from '../components/Layout';
import { INCIDENT_TYPES } from '../data';
import css from '../styles/submit_blotter.css?raw';

export default function SubmitPage() {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const { user } = useAuth();
  const [caseNumber, setCaseNumber] = useState('');
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    incident_type: '',
    date_incident: '',
    complainant: user?.name ?? '',
    respondent: '',
    narrative: '',
  });

  useEffect(() => {
    api.caseNumber().then((d) => setCaseNumber(d.caseNumber)).catch((e) => flash('danger', e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await api.submitIncident({ ...form, case_number: caseNumber });
      flash('success', d.message);
      navigate('/dashboard');
    } catch (err) {
      flash('danger', err.message);
      setBusy(false);
    }
  }

  const hero = (
    <section className="hero-wrapper">
      <div className="hero-glass-panel">
        <span className="hero-badge-tag">Digital Incident Filing System</span>
        <h1>Submit a Barangay Blotter Report</h1>
        <p>
          Provide complete and accurate information regarding the incident for proper
          documentation, mediation, and official barangay review.
        </p>
      </div>
    </section>
  );

  return (
    <ResidentLayout css={css} active="/submit" hero={hero}>
      <div className="form-section-wrapper">
        <div className="section-headline-block">
          <h2>Incident Report Form</h2>
          <span>All fields marked with * are required</span>
        </div>

        <form onSubmit={submit}>
          <div className="case-display-box">
            <div className="case-label">Automatically Generated Case Number</div>
            <div className="case-number">{caseNumber || '…'}</div>
            <div className="case-note">This case number is automatically assigned and cannot be modified.</div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Incident Type <span className="required">*</span></label>
              <select required value={form.incident_type} onChange={set('incident_type')}>
                <option value="">Select Incident Type</option>
                {INCIDENT_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label>Date of Incident <span className="required">*</span></label>
              <input type="date" required value={form.date_incident} onChange={set('date_incident')} />
            </div>

            <div className="form-group">
              <label>Complainant Name <span className="required">*</span></label>
              <input type="text" required value={form.complainant} onChange={set('complainant')} />
            </div>

            <div className="form-group">
              <label>Full name of the person being reported <span className="required">*</span></label>
              <input type="text" required placeholder="Full name of the person being reported"
                value={form.respondent} onChange={set('respondent')} />
            </div>

            <div className="form-group full-width">
              <label>Incident Narrative / Description <span className="required">*</span></label>
              <textarea required
                placeholder="Describe the incident in detail including the location, date, time, and all important information regarding what happened."
                value={form.narrative} onChange={set('narrative')} />
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-btn" disabled={busy || !caseNumber}>
                Submit Blotter Report
              </button>
            </div>
          </div>
        </form>
      </div>
    </ResidentLayout>
  );
}
