import { Link } from 'react-router-dom';
import { useAuth, useFlash } from '../context';
import adminScaleCss from '../styles/admin_scale.css?raw';

// Injects a page's own CSS only while that page is on screen.
// This keeps the old per-page styles from leaking into each other.
export function PageStyle({ css }) {
  return <style>{css}</style>;
}

export function Loading() {
  return <p style={{ padding: 40, textAlign: 'center' }}>Loading…</p>;
}

export function Flashes() {
  const { items, dismiss } = useFlash();
  if (!items.length) return null;
  return (
    <div className="alert-wrapper">
      {items.map((f) => (
        <div
          key={f.id}
          className={`alert alert-${f.cat}`}
          style={{ cursor: 'pointer' }}
          title="Click to dismiss"
          onClick={() => dismiss(f.id)}
        >
          {f.msg}
        </div>
      ))}
    </div>
  );
}

const RESIDENT_NAV = [
  ['/dashboard', 'Home'],
  ['/my-reports', 'My Reports'],
  ['/announcements', 'Announcements'],
  ['/emergency', 'Emergency Contacts'],
  ['/guide', 'How to File'],
];

// Header + status strip + main area for resident pages
export function ResidentLayout({ css, active, hero, children }) {
  const { user } = useAuth();
  return (
    <>
      <PageStyle css={css} />
      <header className="portal-header">
        <div className="header-container">
          <Link to="/dashboard" className="brand-group">
            <div>
              <div className="brand-main-title">Barangay Blotter</div>
              <div className="brand-sub-title">Resident Portal</div>
            </div>
          </Link>
          <nav className="portal-nav">
            {RESIDENT_NAV.map(([to, label]) => (
              <Link key={to} to={to} className={active === to ? 'active' : undefined}>
                {label}
              </Link>
            ))}
            <Link
              to="/submit"
              className={`action-btn-report${active === '/submit' ? ' active' : ''}`}
            >
              + File a Report
            </Link>
            <Link to="/logout" className="btn-logout">Log Out</Link>
          </nav>
        </div>
      </header>

      <div className="user-status-strip">
        <div className="user-status-container">
          <div>Logged in Account: <strong>{user?.name}</strong></div>
          <div>System Clearance: Resident Profile</div>
        </div>
      </div>

      {hero}

      <main className="main-viewport">
        <Flashes />
        {children}
      </main>
    </>
  );
}

const ADMIN_NAV = [
  ['/admin', 'All Blotters'],
  ['/admin/analytics', 'Analytics'],
  ['/admin/users', 'Users'],
  ['/admin/announcements', 'Announcements'],
];

// Sidebar + main area for admin pages
export function AdminLayout({ css, active, children }) {
  const { user } = useAuth();
  return (
    <>
      <PageStyle css={css + adminScaleCss} />
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="logo-mark">
            <div className="logo-icon">BB</div>
            <div>
              <div className="logo-text">Barangay Blotter</div>
              <div className="logo-sub">Admin Panel</div>
            </div>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-label">Kapitan</div>
          <div className="user-name">{user?.name}</div>
          <div className="user-role">Administrator</div>
        </div>

        <div className="sidebar-nav">
          {ADMIN_NAV.map(([to, label]) => (
            <Link key={to} to={to} className={active === to ? 'active' : undefined}>
              {label}
            </Link>
          ))}
          {/* Export is a file download, so it is a plain link to the API */}
          <a href="/api/admin/export">Export</a>
        </div>

        <div className="sidebar-footer">
          <Link to="/logout">Logout</Link>
        </div>
      </div>

      <div className="main">
        <Flashes />
        {children}
      </div>
    </>
  );
}
