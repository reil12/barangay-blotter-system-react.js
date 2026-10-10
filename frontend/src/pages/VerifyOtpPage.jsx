import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useAuth, useFlash } from '../context';
import { Flashes, PageStyle } from '../components/Layout';
import css from '../styles/verify_otp.css?raw';

// mode = 'login' (after password check) or 'signup' (after registering)
export default function VerifyOtpPage({ mode }) {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const { refresh } = useAuth();
  const [otp, setOtp] = useState('');
  const [busy, setBusy] = useState(false);
  const isSignup = mode === 'signup';

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      if (isSignup) {
        const d = await api.verifySignup(otp);
        flash('success', d.message);
        navigate('/login');
      } else {
        const d = await api.verifyLogin(otp);
        await refresh();
        navigate(d.user.role === 'admin' ? '/admin' : '/dashboard');
      }
    } catch (err) {
      flash('danger', err.message);
      if (err.data?.redirect) {
        // session expired or missing: start the flow again
        navigate(`/${err.data.redirect}`);
      } else {
        setBusy(false);
      }
    }
  }

  return (
    <>
      <PageStyle css={css} />
      <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'auto', padding: 20 }}>
      <div className="card">
        <div className="card-content">
          <div className="verify-logo">
            <img src="/static/images/barangaypic.jpg" alt="Barangay Logo" />
          </div>

          <h2>{isSignup ? 'Verify Your Email' : 'Confirm Your Identity'}</h2>

          <p className="subtitle">
            {isSignup
              ? 'We sent a 6-digit code to your email address to verify your new account.'
              : 'We sent a 6-digit code to your email to confirm this login attempt.'}
          </p>

          <div className="expires">Expires in 10 minutes</div>

          <Flashes />

          <form onSubmit={submit}>
            <input
              className="otp-input"
              name="otp"
              maxLength={6}
              placeholder="000000"
              inputMode="numeric"
              autoComplete="off"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit" className="btn-verify" disabled={busy}>
              Verify Code
            </button>
          </form>

          <Link to="/login" className="back-link">← Back to login</Link>
        </div>

        <div className="card-footer">
          Republic of the Philippines • Barangay Incident Management System
        </div>
      </div>
      </div>
    </>
  );
}
