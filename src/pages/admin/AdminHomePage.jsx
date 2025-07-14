import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/admin/adminNavbar';
import AdminSidebar from '../../components/admin/adminSidebar';
import '../../styles/admin/adminHomePage.css';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminHomePage = () => {
  const [stats, setStats] = useState(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get('https://localhost:6703/api/AdminReport/dashboard-stats');
//         setStats(response.data);
//       } catch (error) {
//         console.error("Veriler alınamadı:", error);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (!stats) return <div className="loading">Yükleniyor...</div>;

//   const lineChartData = {
//     labels: stats.monthlyReservations.map(m => m.month),
//     datasets: [{
//       label: 'Rezervasyonlar',
//       data: stats.monthlyReservations.map(m => m.count),
//       backgroundColor: '#ffa94d',
//       borderColor: '#f76707',
//       fill: false,
//     }]
//   };

//   const barChartData = {
//     labels: stats.popularTours.map(t => t.title),
//     datasets: [{
//       label: 'Rezervasyon Sayısı',
//       data: stats.popularTours.map(t => t.reservationCount),
//       backgroundColor: '#fab005',
//     }]
//   };

//   const pieChartData = {
//     labels: stats.userDistribution.map(u => u.role),
//     datasets: [{
//       data: stats.userDistribution.map(u => u.count),
//       backgroundColor: ['#ffa94d', '#d9480f', '#ffd43b']
//     }]
//   };

  return (
    <div className="admin-home">
      <AdminNavbar adminName="Merve" />
      <div className="admin-content">
        <AdminSidebar />
        {/* <main className="dashboard">
          <div className="dashboard-cards">
            <div className="card">Turlar: {stats.totalTours}</div>
            <div className="card">Oteller: {stats.totalHotels}</div>
            <div className="card">Aktiviteler: {stats.totalActivities}</div>
            <div className="card">Kullanıcılar: {stats.totalUsers}</div>
          </div>

          <div className="dashboard-charts">
            <div className="chart">
              <h4>Aylık Rezervasyonlar</h4>
              <Line data={lineChartData} />
            </div>

            <div className="chart">
              <h4>Popüler Turlar</h4>
              <Bar data={barChartData} />
            </div>

            <div className="chart">
              <h4>Kullanıcı Dağılımı</h4>
              <Pie data={pieChartData} />
            </div>
          </div>
        </main> */}
      </div>
    </div>
  );
};

export default AdminHomePage;
