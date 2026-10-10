import { api } from '../api';
import { fmtLong, useFetch } from '../utils';
import { ResidentLayout, Loading } from '../components/Layout';
import { CATEGORY_STYLE, DEFAULT_CATEGORY_STYLE } from '../data';
import css from '../styles/announcements.css?raw';

export default function AnnouncementsPage() {
  const { data, loading, error } = useFetch(api.announcements);

  return (
    <ResidentLayout css={css} active="/announcements">
      <div className="pg-header">
        <h1>Barangay Announcements</h1>
        <p>Official announcements and notices from your barangay authorities</p>
      </div>

      {loading && <Loading />}
      {error && <div className="alert alert-danger">{error}</div>}

      {data && data.map((ann) => {
        const c = CATEGORY_STYLE[ann.Category] ?? DEFAULT_CATEGORY_STYLE;
        return (
          <div className="ann-card" key={ann.AnnouncementID} style={{ borderLeftColor: c.border }}>
            <div className="ann-meta">
              <span className="cat-badge" style={{ background: c.bg, color: c.fg }}>
                {ann.Category}
              </span>
              <span className="ann-date">{fmtLong(ann.CreatedAt)}</span>
            </div>
            <div className="ann-title">{ann.Title}</div>
            <div className="ann-content">{ann.Content}</div>
          </div>
        );
      })}

      {data && data.length === 0 && (
        <div className="empty-state">
          <div className="empty-title">No Announcements Yet</div>
          <div className="empty-sub">Check back later for official updates from your barangay.</div>
        </div>
      )}
    </ResidentLayout>
  );
}
