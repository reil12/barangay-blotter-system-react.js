import { Link } from 'react-router-dom';
import { ResidentLayout } from '../components/Layout';
import css from '../styles/guide.css?raw';

const STEPS = [
  { title: 'Create and Verify Your Account',
    text: 'Residents must register with their legal name, valid email address, and active contact number. Account verification is required before filing access becomes available.',
    tip: 'Notice: Email verification must be completed first.' },
  { title: 'Open the Filing Portal',
    text: 'Navigate to the dashboard and select “File a Report” to begin creating a new incident record.',
    tip: 'A case tracking number is automatically generated.' },
  { title: 'Enter Complete Incident Information',
    text: 'Provide complete details including names, incident date, location, and a clear narrative description of the complaint.',
    tip: 'False or misleading information may result in legal penalties and report dismissal.',
    warning: true },
  { title: 'Wait for Administrative Review',
    text: 'Submitted reports are reviewed by barangay officials to verify jurisdiction and filing completeness.',
    tip: 'Standard review usually takes 3–5 business days.' },
  { title: 'Attend Mediation Hearings',
    text: 'Both the complainant and the reported person may be summoned for mediation proceedings before the Lupon.',
    tip: 'Personal attendance may be required by the barangay.' },
  { title: 'Final Resolution and Case Closure',
    text: 'Cases may be marked as settled, dismissed, or endorsed for court action depending on the mediation outcome.',
    tip: 'You can monitor updates through the portal dashboard.' },
];

const STATUSES = [
  { cls: 'pending', label: 'Pending Review',
    text: 'Your report has been successfully submitted and is currently under barangay administrative review.' },
  { cls: 'settled', label: 'Case Settled',
    text: 'The dispute has been resolved through mediation or amicable settlement between parties.' },
  { cls: 'dismissed', label: 'Case Dismissed',
    text: 'The barangay has formally closed the complaint or referred the matter for further legal action.' },
];

const FAQS = [
  { q: 'Can I file against someone outside the barangay?',
    a: 'Yes, provided that the incident happened within the territorial jurisdiction of the barangay.' },
  { q: 'What is the difference between a blotter and a police report?',
    a: 'A barangay blotter focuses on mediation and local dispute resolution, while police reports are intended for criminal investigations.' },
  { q: 'How long does mediation usually take?',
    a: 'Most mediation proceedings are completed within fifteen calendar days depending on the complexity of the dispute.' },
  { q: 'Can I withdraw my report online?',
    a: 'No. Withdrawal requests usually require personal appearance and proper documentation at the barangay office.' },
];

export default function GuidePage() {
  const hero = (
    <section className="hero-wrapper">
      <div className="hero-glass-panel">
        <span className="hero-badge-tag">Official Filing Assistance Portal</span>
        <h1>How to File a Barangay Blotter Report</h1>
        <p>
          Learn the official procedure for submitting complaints, tracking dispute resolutions,
          and understanding the barangay mediation process through the online resident portal.
        </p>
        <div className="hero-actions-row">
          <Link to="/submit" className="primary-cta">Start Filing a Report</Link>
        </div>
      </div>
    </section>
  );

  return (
    <ResidentLayout css={css} active="/guide" hero={hero}>
      {/* LEGAL NOTICE */}
      <div className="glass-section">
        <div className="section-headline-block">
          <h2>Official Legal Overview</h2>
          <span>Understanding the purpose of the barangay blotter system</span>
        </div>
        <div className="notice-card">
          <span className="notice-tag">Republic Act No. 7160</span>
          <h3>The Barangay Blotter Registry</h3>
          <p>
            The barangay blotter serves as the official administrative record of complaints,
            incidents, and disputes occurring within the territorial jurisdiction of the barangay.
            Filing a blotter report is commonly the first step toward mediation and dispute
            settlement under the Katarungang Pambarangay system.
          </p>
        </div>
      </div>

      {/* STEPS */}
      <div className="glass-section">
        <div className="section-headline-block">
          <h2>Step-by-Step Filing Procedure</h2>
          <span>Follow these official procedures when submitting a report</span>
        </div>
        <div className="procedural-steps-wrapper">
          {STEPS.map((s, i) => (
            <div className="step-timeline-card" key={s.title}>
              <div className="step-circle-number">{i + 1}</div>
              <div className="step-content-box">
                <span className="step-title-text">{s.title}</span>
                <div className="step-details-text">{s.text}</div>
                <div className={`step-tip${s.warning ? ' step-warning' : ''}`}>{s.tip}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATUS */}
      <div className="glass-section">
        <div className="section-headline-block">
          <h2>Case Status Definitions</h2>
          <span>Understand the meaning of each report status</span>
        </div>
        <div className="status-grid">
          {STATUSES.map((s) => (
            <div className="status-card" key={s.cls}>
              <div className={`status-badge ${s.cls}`}>{s.label}</div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="glass-section">
        <div className="section-headline-block">
          <h2>Frequently Asked Questions</h2>
          <span>Common questions regarding blotter filing and mediation</span>
        </div>
        <div className="faq-grid">
          {FAQS.map((f) => (
            <div className="faq-card" key={f.q}>
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <span className="hero-badge-tag">Ready to Submit a Complaint</span>
        <h2>Begin Your Online Filing Process</h2>
        <p>
          Access the secure electronic reporting system to submit your complaint, incident
          report, or mediation request.
        </p>
        <Link to="/submit" className="primary-cta">File a Barangay Blotter Report</Link>
      </div>
    </ResidentLayout>
  );
}
