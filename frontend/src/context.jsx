import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from './api';

// ---------- who is logged in ----------
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const d = await api.me();
      setUser(d.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ user, loading, refresh, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// ---------- flash messages (replaces Flask's flash()) ----------
// A message set just before a navigation shows on the next page.
// Messages set on the current page show immediately.
const FlashContext = createContext(null);
let flashSeq = 0;

export function FlashProvider({ children }) {
  const location = useLocation();
  const pending = useRef([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(pending.current);
    pending.current = [];
  }, [location.key]);

  const flash = useCallback((cat, msg) => {
    const item = { id: ++flashSeq, cat, msg };
    pending.current = [...pending.current, item];
    setItems((prev) => [...prev, item]);
  }, []);

  const dismiss = useCallback((id) => {
    pending.current = pending.current.filter((i) => i.id !== id);
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <FlashContext.Provider value={{ items, flash, dismiss }}>
      {children}
    </FlashContext.Provider>
  );
}

export const useFlash = () => useContext(FlashContext);
