import { useState } from 'react';
import { api } from '../api';
import { useFlash } from '../context';

const overlay = {
  position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.55)',
  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: 20,
};
const box = {
  background: '#fff', width: '100%', maxWidth: 540, borderRadius: 6, padding: 28,
  color: '#1f2937', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)', textAlign: 'left',
};
const label = { display: 'block', fontWeight: 600, marginBottom: 6, fontSize: 14 };
const field = {
  width: '100%', padding: '10px 12px', border: '1px solid #cbd2dc', borderRadius: 4,
  fontSize: 15, marginBottom: 16, boxSizing: 'border-box', fontFamily: 'inherit',
};

// Admin form: sends the complainant the date, time and place of a mediation meeting
export default function MeetingModal({ record, onClose }) {
  const { flash } = useFlash();
  const [form, setForm] = useState({ date: '', time: '', place: '', notes: '' });
  const [busy, setBusy] = useState(false);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function send(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await api.meetingNotice(record.IncidentID, form);
      flash('success', d.message);
      onClose();
    } catch (err) {
      flash('danger', err.message);
      setBusy(false);
    }
  }

  return (
    <div style={overlay} onClick={onClose}>
      <div style={box} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ margin: '0 0 6px', fontSize: 20 }}>Send Meeting Notice</h3>
        <p style={{ margin: '0 0 22px', color: '#4b5563', fontSize: 14 }}>
          Case {record.CaseNumber}. The notice is emailed to the complainant ({record.Complainant}).
          The meeting is with the reported person: <strong>{record.Respondent}</strong>.
        </p>

        <form onSubmit={send}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={label}>Meeting date</label>
              <input type="date" required style={field} value={form.date} onChange={set('date')} />
            </div>
            <div>
              <label style={label}>Meeting time</label>
              <input type="time" required style={field} value={form.time} onChange={set('time')} />
            </div>
          </div>

          <label style={label}>Place</label>
          <input
            required
            placeholder="e.g. Barangay Hall, Session Room"
            style={field}
            value={form.place}
            onChange={set('place')}
          />

          <label style={label}>Additional instructions (optional)</label>
          <textarea rows={3} style={{ ...field, resize: 'vertical' }} value={form.notes} onChange={set('notes')} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 4 }}>
            <button type="button" onClick={onClose} className="btn-sm">Cancel</button>
            <button type="submit" disabled={busy} className="btn-save">
              {busy ? 'Sending…' : 'Send Email'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
