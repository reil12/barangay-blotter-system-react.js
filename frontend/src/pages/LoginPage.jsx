import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useFlash } from '../context';
import { Flashes, PageStyle } from '../components/Layout';
import css from '../styles/login.css?raw';

export default function LoginPage() {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const d = await api.login(email, password);
      flash('info', d.message);
      navigate('/verify-login');
    } catch (err) {
      flash(err.status === 403 ? 'warning' : 'danger', err.message);
      setBusy(false);
    }
  }

  return (
    <>
      <PageStyle css={css} />
      <div className="main-wrapper">
        <div className="login-card">
          <div className="card-top"></div>
          <div className="card-content">
            <div className="login-logo">
              <img src="/static/images/barangaypic.jpg" alt="Barangay Logo" />
            </div>

            <h1 className="portal-title">Resident Login</h1>
            <div className="portal-subtitle">Barangay Blotter Management System</div>

            <Flashes />

            <form onSubmit={submit}>
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon"></span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="input-icon"></span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="btn-login" disabled={busy}>
                {busy ? 'Sending code…' : 'Sign In'}
              </button>
            </form>

            <div className="signup-link">
              No account yet? <Link to="/signup">Register as Resident</Link>
            </div>
          </div>

          <div className="card-footer">
            Republic of the Philippines • Barangay Incident Management System
          </div>
        </div>
      </div>
    </>
  );
}
