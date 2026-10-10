import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend,
} from 'chart.js';
import { api } from '../api';
import { useFetch } from '../utils';
import { AdminLayout } from '../components/Layout';
import css from '../styles/admin_analytics.css?raw';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function AdminAnalyticsPage() {
  const { data, loading, error } = useFetch(api.analytics);

  return (
    <AdminLayout css={css} active="/admin/analytics">
      <div className="header">
        <h2>Analytics Dashboard</h2>
        <p>Overview of barangay blotter statistics</p>
      </div>

      {loading && <p>Loading analytics…</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {data && (
        <>
          <div className="stats">
            <div className="card">
              <h4>TOTAL CASES</h4>
              <div className="num">{data.total}</div>
              <small>All records</small>
            </div>
            <div className="card" style={{ borderLeftColor: '#d97706' }}>
              <h4>PENDING</h4>
              <div className="num" style={{ color: '#d97706' }}>{data.pending}</div>
              <small>Waiting review</small>
            </div>
            <div className="card" style={{ borderLeftColor: '#16a34a' }}>
              <h4>SETTLED</h4>
              <div className="num" style={{ color: '#16a34a' }}>{data.settled}</div>
              <small>Resolved cases</small>
            </div>
            <div className="card" style={{ borderLeftColor: '#6b7280' }}>
              <h4>DISMISSED</h4>
              <div className="num">{data.dismissed}</div>
              <small>Closed cases</small>
            </div>
          </div>

          <div className="grid">
            <div className="panel">
              <h3>Status Breakdown</h3>
              <div style={{ height: 360 }}>
              <Doughnut
                data={{
                  labels: ['Pending', 'Settled', 'Dismissed'],
                  datasets: [{
                    data: [data.pending, data.settled, data.dismissed],
                    backgroundColor: ['#d97706', '#16a34a', '#6b7280'],
                  }],
                }}
                options={{ maintainAspectRatio: false }}
              />
              </div>
            </div>
            <div className="panel">
              <h3>Monthly Cases</h3>
              <div style={{ height: 360 }}>
              <Bar
                data={{
                  labels: MONTHS,
                  datasets: [{ data: data.monthly, backgroundColor: '#0b3d91' }],
                }}
                options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
              />
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
