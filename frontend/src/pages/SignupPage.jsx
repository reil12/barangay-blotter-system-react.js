import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useFlash } from '../context';
import { Flashes, PageStyle } from '../components/Layout';
import css from '../styles/signup.css?raw';

const EMPTY = {
  fullname: '', email: '', password: '', confirm_password: '', address: '', contact: '',
};

export default function SignupPage() {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      flash('danger', 'Passwords do not match.');
      return;
    }
    if (form.password.length < 6) {
      flash('danger', 'Password must be at least 6 characters.');
      return;
    }
    setBusy(true);
    try {
      const d = await api.signup({
        fullname: form.fullname,
        email: form.email,
        password: form.password,
        address: form.address,
        contact: form.contact,
      });
      flash('success', d.message);
      navigate('/verify-signup');
    } catch (err) {
      flash('danger', err.message);
      setBusy(false);
    }
  }

  return (
    <>
      <PageStyle css={css} />
      <div className="right-panel">
        <div className="form-card">
          <div className="form-header">
            <div className="signup-logo">
              <img src="/static/images/barangaypic.jpg" alt="Barangay Logo" />
            </div>
            <h2>Resident Sign Up</h2>
            <p>Create your resident account to access the barangay blotter system</p>
          </div>

          <Flashes />

          <form onSubmit={submit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Juan dela Cruz" required
                value={form.fullname} onChange={set('fullname')} />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" required
                value={form.email} onChange={set('email')} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Minimum 6 characters" required
                  value={form.password} onChange={set('password')} />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Repeat password" required
                  value={form.confirm_password} onChange={set('confirm_password')} />
              </div>
            </div>

            <div className="form-group">
              <label>Home Address</label>
              <input type="text" placeholder="Blk 1 Lot 2, Street, Barangay..."
                value={form.address} onChange={set('address')} />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input type="text" placeholder="09xxxxxxxxx"
                value={form.contact} onChange={set('contact')} />
            </div>

            <button type="submit" className="btn-signup" disabled={busy}>
              {busy ? 'Creating account…' : 'Create Account'}
            </button>

            <div className="login-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </div>
          </form>

          <div className="card-footer">
            Republic of the Philippines • Barangay Incident Management System
          </div>
        </div>
      </div>
    </>
  );
}
