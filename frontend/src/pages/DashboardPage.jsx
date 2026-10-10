import { Link } from 'react-router-dom';
import { api } from '../api';
import { useAuth } from '../context';
import { countBy, useFetch } from '../utils';
import { ResidentLayout } from '../components/Layout';
import { ORDINANCES, FILING_GUIDELINES } from '../data';
import css from '../styles/user_dashboard.css?raw';

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, loading } = useFetch(api.myReports);
  const records = data ?? [];
  const show = (n) => (loading ? '…' : n);

  const hero = (
    <section className="hero-wrapper">
      <div className="hero-glass-panel">
        <span className="hero-badge-tag">Official Governance Dashboard</span>
        <h1>Welcome to the Barangay Commonwealth Portal</h1>
        <p>Submit modern case logs, review past submissions, and track alternative dispute resolutions safely and securely online.</p>
        <div className="hero-actions-row">
          <Link to="/submit" className="primary-cta">File an Incident Blotter</Link>
        </div>
      </div>
    </section>
  );

  return (
    <ResidentLayout css={css} active="/dashboard" hero={hero}>
      <div className="feature-overlay-grid">
        <div className="feature-card-box">
          <div className="feature-card-lbl">Total Reports</div>
          <div className="feature-card-metric">{show(records.length)}</div>
          <div className="feature-card-explanation">All reports filed by you</div>
        </div>
        <div className="feature-card-box">
          <div className="feature-card-lbl">Pending Review</div>
          <div className="feature-card-metric" style={{ color: '#fbbf24' }}>{show(countBy(records, 'Pending'))}</div>
          <div className="feature-card-explanation">Awaiting official review</div>
        </div>
        <div className="feature-card-box">
          <div className="feature-card-lbl">Settled Cases</div>
          <div className="feature-card-metric" style={{ color: '#6ee7b7' }}>{show(countBy(records, 'Settled'))}</div>
          <div className="feature-card-explanation">Successfully resolved</div>
        </div>
      </div>

      <div className="ordinance-section-wrapper">
        <div className="section-headline-block">
          <h2>Barangay Ordinances</h2>
          <span>Know your rights and responsibilities as a resident</span>
        </div>

        <div className="ordinance-grid">
          {ORDINANCES.map((o) => (
            <div className="ordinance-card" key={o.no}>
              <div className="ordinance-img-wrapper">
                <img src={o.img} alt={o.alt} />
              </div>
              <div className="ordinance-content">
                <span className="ordinance-tag">Ordinance No. {o.no}</span>
                <h3 className="ordinance-title">{o.title}</h3>
                <p className="ordinance-summary">{o.summary}</p>
                <div className="ordinance-footer">
                  <span className="penalty-label">Penalty</span>
                  <span className="penalty-badge">{o.penalty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-headline-block">
        <h2>Filing Guidelines</h2>
        <span>Rules you must follow when filing a blotter report</span>
      </div>

      <div className="procedural-steps-wrapper">
        {FILING_GUIDELINES.map((g, i) => (
          <div className="step-timeline-card" key={g.title}>
            <div className="step-circle-number">{i + 1}</div>
            <div className="step-content-box">
              <span className="step-title-text">{g.title}</span>
              <span className="step-details-text">{g.text}</span>
            </div>
          </div>
        ))}
      </div>
    </ResidentLayout>
  );
}
