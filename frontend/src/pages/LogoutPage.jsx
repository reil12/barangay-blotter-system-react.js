import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { useAuth, useFlash } from '../context';
import { Loading } from '../components/Layout';

export default function LogoutPage() {
  const navigate = useNavigate();
  const { flash } = useFlash();
  const { refresh } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        await api.logout();
      } catch {
        /* still log out on the client */
      }
      await refresh();
      flash('info', 'Logged out successfully.');
      navigate('/login', { replace: true });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loading />;
}
