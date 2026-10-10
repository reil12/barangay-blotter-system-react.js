import { useCallback, useEffect, useState } from 'react';

// Dates from Flask look like "2026-06-01T10:30:00" (datetime) or "2026-06-01" (date)
export const fmtDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
    : '';

export const fmtLong = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })
    : '';

export const fmtDateTime = (iso) =>
  iso
    ? new Date(iso).toLocaleString('en-US', {
        month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
      })
    : '';

export const badgeClass = (s) =>
  s === 'Pending' ? 'pending' : s === 'Settled' ? 'settled' : 'dismissed';

// Case-insensitive search across the same fields the old SQL LIKE search used
export const matches = (r, q) =>
  !q ||
  [r.CaseNumber, r.Complainant, r.Respondent, r.IncidentType].some((v) =>
    String(v ?? '').toLowerCase().includes(q.toLowerCase())
  );

export const countBy = (rows, status) => rows.filter((r) => r.Status === status).length;

// Loads data from the API. Call reload() after changing something on the server.
export function useFetch(loader, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    loader()
      .then((d) => {
        if (alive) {
          setData(d);
          setError('');
        }
      })
      .catch((e) => {
        if (alive) setError(e.message);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick, ...deps]);

  const reload = useCallback(() => setTick((t) => t + 1), []);
  return { data, setData, loading, error, reload };
}
