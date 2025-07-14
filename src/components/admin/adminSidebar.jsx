import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/admin/adminSidebar.css';
import { FaHotel, FaMapMarkedAlt, FaUsers, FaChartBar, FaCalendarAlt, FaBoxes, FaCog, FaSignOutAlt, FaHiking } from 'react-icons/fa';

const AdminSidebar = () => {

const navigate = useNavigate();

  return (
    <aside className="admin-sidebar">
      <ul className="sidebar-menu">
        <li onClick={() => navigate('/admin/hotels')}><FaHotel /> Oteller</li>
        <li onClick={() => navigate('/admin/tours')}><FaMapMarkedAlt /> Turlar</li>
        <li onClick={() => navigate('/admin/activities')}><FaHiking /> Aktiviteler</li>
        <li onClick={() => navigate('/admin/users')}><FaUsers /> Kullanıcılar</li>
        <li onClick={() => navigate('/admin/reservations')}><FaCalendarAlt /> Rezervasyonlar</li>
        <li onClick={() => navigate('/admin/packages')}><FaBoxes /> Paketler</li>
        <li onClick={() => navigate('/admin/reports')}><FaChartBar /> Raporlar</li>
        <li onClick={() => navigate('/admin/settings')}><FaCog /> Ayarlar</li>
        <li onClick={() => navigate('/admin/logout')}><FaSignOutAlt /> Çıkış</li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
