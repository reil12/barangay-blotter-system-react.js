import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, FlashProvider, useAuth } from './context';
import { GuestOnly, RequireAdmin, RequireUser } from './guards';
import { Loading } from './components/Layout';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VerifyOtpPage from './pages/VerifyOtpPage';
import LogoutPage from './pages/LogoutPage';

import DashboardPage from './pages/DashboardPage';
import MyReportsPage from './pages/MyReportsPage';
import SubmitPage from './pages/SubmitPage';
import EmergencyPage from './pages/EmergencyPage';
import GuidePage from './pages/GuidePage';
import AnnouncementsPage from './pages/AnnouncementsPage';

import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminAnalyticsPage from './pages/AdminAnalyticsPage';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminAnnouncementsPage from './pages/AdminAnnouncementsPage';
import AdminEditPage from './pages/AdminEditPage';
import CertificatePage from './pages/CertificatePage';

function Home() {
  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === 'admin' ? '/admin' : '/dashboard'} replace />;
}

export default function App() {
  return (
    <FlashProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/login" element={<GuestOnly><LoginPage /></GuestOnly>} />
          <Route path="/signup" element={<GuestOnly><SignupPage /></GuestOnly>} />
          <Route path="/verify-login" element={<GuestOnly><VerifyOtpPage mode="login" /></GuestOnly>} />
          <Route path="/verify-signup" element={<GuestOnly><VerifyOtpPage mode="signup" /></GuestOnly>} />
          <Route path="/logout" element={<LogoutPage />} />

          {/* Resident */}
          <Route path="/dashboard" element={<RequireUser><DashboardPage /></RequireUser>} />
          <Route path="/my-reports" element={<RequireUser><MyReportsPage /></RequireUser>} />
          <Route path="/submit" element={<RequireUser><SubmitPage /></RequireUser>} />
          <Route path="/emergency" element={<RequireUser><EmergencyPage /></RequireUser>} />
          <Route path="/guide" element={<RequireUser><GuidePage /></RequireUser>} />
          <Route path="/announcements" element={<RequireUser><AnnouncementsPage /></RequireUser>} />

          {/* Admin */}
          <Route path="/admin" element={<RequireAdmin><AdminDashboardPage /></RequireAdmin>} />
          <Route path="/admin/analytics" element={<RequireAdmin><AdminAnalyticsPage /></RequireAdmin>} />
          <Route path="/admin/users" element={<RequireAdmin><AdminUsersPage /></RequireAdmin>} />
          <Route path="/admin/announcements" element={<RequireAdmin><AdminAnnouncementsPage /></RequireAdmin>} />
          <Route path="/admin/edit/:id" element={<RequireAdmin><AdminEditPage /></RequireAdmin>} />
          <Route path="/admin/certificate/:id" element={<RequireAdmin><CertificatePage /></RequireAdmin>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </FlashProvider>
  );
}
