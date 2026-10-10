import { ResidentLayout } from '../components/Layout';
import css from '../styles/emergency.css?raw';
import govCss from '../styles/emergency_content.css?raw';

const HOTLINES = [
  { agency: 'National Emergency Hotline', number: '911', desc: 'Police, fire and medical emergencies. Available 24/7.' },
  { agency: 'Philippine National Police', number: '117', desc: 'Crime prevention and public security. Command Center, available 24/7.' },
  { agency: 'Bureau of Fire Protection', number: '160', desc: 'Fire safety and rescue. Operations line, available 24/7.' },
  { agency: 'Philippine Red Cross', number: '143', desc: 'Disaster rescue and urgent medical support.' },
  { agency: 'NDRRMC Operations', number: '(02) 8911-1406', desc: 'National risk containment and calamity updates.' },
  { agency: 'Nearest General Hospital', number: '(02) 8234-5678', desc: 'Emergency trauma ward (approximately 2 km from the barangay).' },
  { agency: 'Social Welfare (DSWD)', number: '931', desc: 'Family care and social assistance services.' },
];

const BARANGAY_HOTLINES = [
  { agency: 'Barangay Tanod Desk', number: '0918 765 4321', desc: 'Local security division. Available 24/7.' },
  { agency: 'Women and Children Desk', number: '1343', desc: 'VAW unit protection. Available 24/7.' },
];

const OFFICIALS = [
  { position: 'Punong Barangay', name: 'Hon. Juan dela Cruz', phone: '0917 123 4567', role: 'Overall barangay administration' },
  { position: 'Barangay Kagawad', name: 'Hon. Maria Santos', phone: '0918 234 5678', role: 'Peace, order and community security' },
  { position: 'Barangay Kagawad', name: 'Hon. Pedro Reyes', phone: '0919 345 6789', role: 'Health, environment and sanitation' },
  { position: 'Barangay Kagawad', name: 'Hon. Ana Gomez', phone: '0920 456 7890', role: 'Women, protection and family affairs' },
  { position: 'SK Chairperson', name: 'Hon. Carlo Bautista', phone: '0921 567 8901', role: 'Youth leadership, sports and academic councils' },
  { position: 'Barangay Secretary', name: 'Ms. Rosa Villanueva', phone: '0922 678 9012', role: 'Civil documentation and case records' },
  { position: 'Barangay Treasurer', name: 'Mr. Jose Fernandez', phone: '0923 789 0123', role: 'Asset allocation and fund auditing' },
];

export default function EmergencyPage() {
  return (
    <ResidentLayout css={css + govCss} active="/emergency">
      <div className="pg-header">
        <div>
          <h1>Emergency Contacts</h1>
          <p>Official hotlines and office directory for barangay residents. Please keep these numbers for reference.</p>
        </div>
      </div>

      <div>

        <section className="gov-section">
          <h2>1. Barangay Hall</h2>
          <div className="gov-wrap">
            <table className="gov-table">
              <tbody>
                <tr><th>Address</th><td>Blk 1, Barangay Street, Your City</td></tr>
                <tr><th>Landline</th><td className="gov-num">(02) 8123-4567</td></tr>
                <tr><th>Mobile</th><td className="gov-num">0917 123 4567</td></tr>
                <tr><th>Office hours</th><td>8:00 AM to 5:00 PM</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="gov-section">
          <h2>2. National and Regional Emergency Hotlines</h2>
          <div className="gov-wrap">
            <table className="gov-table">
              <thead>
                <tr><th>Agency</th><th>Contact Number</th><th>Description</th></tr>
              </thead>
              <tbody>
                {HOTLINES.map((h) => (
                  <tr key={h.agency}>
                    <th>{h.agency}</th>
                    <td className="gov-num">{h.number}</td>
                    <td>{h.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="gov-section">
          <h2>3. Barangay Hotlines</h2>
          <div className="gov-wrap">
            <table className="gov-table">
              <thead>
                <tr><th>Desk</th><th>Contact Number</th><th>Description</th></tr>
              </thead>
              <tbody>
                {BARANGAY_HOTLINES.map((h) => (
                  <tr key={h.agency}>
                    <th>{h.agency}</th>
                    <td className="gov-num">{h.number}</td>
                    <td>{h.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="gov-section">
          <h2>4. Barangay Officials</h2>
          <div className="gov-wrap">
            <table className="gov-table">
              <thead>
                <tr><th>Position</th><th>Name</th><th>Contact Number</th><th>Responsibility</th></tr>
              </thead>
              <tbody>
                {OFFICIALS.map((o) => (
                  <tr key={o.name}>
                    <th>{o.position}</th>
                    <td>{o.name}</td>
                    <td className="gov-num">{o.phone}</td>
                    <td>{o.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="gov-footer">
          Contact details are provided for public assistance. For updates, please visit the Barangay Hall during office hours.
        </div>
      </div>
    </ResidentLayout>
  );
}
