import React from 'react';
import '../../styles/admin/adminNavbar.css';
import { FaUserCircle } from "react-icons/fa";


const AdminNavbar = ({ adminName }) => {
  return (
    <header className="admin-navbar">
      <div className="admin-navbar__left">Tatilia Admin Panel</div>
      <div className="admin-navbar__right">
        <span className="admin-navbar__user">
          <FaUserCircle />
          Hoşgeldin, {adminName}
        </span>      </div>
    </header>
  );
};

export default AdminNavbar;