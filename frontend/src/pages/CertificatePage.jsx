import { Link, useParams } from 'react-router-dom';
import { api } from '../api';
import { fmtLong, fmtDateTime, useFetch } from '../utils';
import { PageStyle, Loading } from '../components/Layout';
import css from '../styles/certificate.css?raw';

// Printable blotter certificate (opened in a new tab from the admin list)
export default function CertificatePage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => api.certificate(id), [id]);

  if (loading) return <Loading />;
  if (error) return <p style={{ padding: 40 }}>{error}</p>;
  const r = data.record;

  return (
    <>
      <PageStyle css={css} />
      <button className="print-btn" onClick={() => window.print()}>Print Certificate</button>
      <Link to="/admin" className="back-btn">← Back</Link>

      <div className="page">
        <div className="watermark">OFFICIAL</div>

        <div className="header">
          <div className="republic">Republic of the Philippines</div>
          <div className="republic">Province / City / Municipality</div>
          <div className="barangay-name">BARANGAY [YOUR BARANGAY NAME]</div>
          <div className="barangay-address">[Complete Address], [City], Philippines</div>
        </div>

        <div className="doc-title">
          <h2>BARANGAY BLOTTER RECORD</h2>
          <div className="doc-subtitle">Official Record of Incident / Complaint</div>
        </div>

        <div className="case-badge">
          <div className="case-number">CASE NO: {r.CaseNumber || 'N/A'}</div>
        </div>

        <table className="details-table">
          <tbody>
            <tr><td>Date Filed</td><td>{fmtLong(r.DateFiled)}</td></tr>
            <tr><td>Date of Incident</td><td>{r.DateIncident || 'Not specified'}</td></tr>
            <tr><td>Complainant</td><td><strong>{r.Complainant}</strong></td></tr>
            <tr><td>Reported Person</td><td><strong>{r.Respondent}</strong></td></tr>
            <tr><td>Type of Incident</td><td>{r.IncidentType}</td></tr>
            <tr><td>Filed By (Resident)</td><td>{r.FiledBy || 'N/A'}</td></tr>
            <tr><td>Current Status</td><td><strong>{r.Status}</strong></td></tr>
          </tbody>
        </table>

        <p style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 8 }}>
          NARRATIVE / DESCRIPTION OF INCIDENT:
        </p>
        <div className="narrative-box">{r.Narrative || 'No narrative provided.'}</div>

        <div className="certification-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is to certify that the above information has been duly
          recorded in the <strong>Barangay Blotter Book</strong> of Barangay [YOUR BARANGAY NAME] and that
          the same is a true and faithful reproduction of the original entry.
        </div>

        <div className="certification-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This certification is issued upon the request of the
          interested party for whatever legal purpose it may serve.
        </div>

        <div className="signature-section">
          <div className="signature-block">
            <div style={{ marginBottom: 50 }}>&nbsp;</div>
            <div className="signature-line"></div>
            <div className="signature-name">{r.Complainant}</div>
            <div className="signature-title">Complainant</div>
          </div>
          <div className="signature-block">
            <div style={{ marginBottom: 50 }}>&nbsp;</div>
            <div className="signature-line"></div>
            <div className="signature-name">HON. [KAPITAN NAME]</div>
            <div className="signature-title">
              Punong Barangay<br />
              Barangay [YOUR BARANGAY NAME]
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Barangay [YOUR BARANGAY NAME] • [Complete Address] • Tel: [Phone Number]</p>
          <p>Generated on: {fmtDateTime(data.now)} • Barangay Blotter Management System</p>
        </div>
      </div>
    </>
  );
}
