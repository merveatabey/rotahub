import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css"; // Navbar stillerini içe aktarın
import TourSearch from "./tourSearch";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="transparent-navbar">
      <nav className="navbar-container">
        {/* Marka adı */}
        <div className="brand-name">
          Tatilia
        </div>

        {/* Nav linkler */}
        <div className="nav-links">
          <a href="#">
            <i className="bi bi-house-door-fill"></i> Ana Sayfa
          </a>
          <a href="#">
            <i className="bi bi-geo-alt-fill"></i> Turlar
          </a>
          <a href="#">
            <i className="bi bi-heart-fill"></i> Favoriler
          </a>
          <a href="#">
            <i className="bi bi-telephone-fill"></i> İletişim
          </a>
          {/* Hesabım dropdown */}
          <div className="dropdown" ref={dropdownRef}>
            <a href="#" className="dropbtn" onClick={toggleDropdown}>
              <i className="bi bi-person-circle"></i> Hesabım
              <i
                className={`bi dropdown-icon ${dropdownOpen
                    ? "bi-caret-up-fill"
                    : "bi-caret-down-fill"
                  }`}
              ></i>
            </a>
            {dropdownOpen && (
           <div className="dropdown-content">
  <a href="#"><i className="bi bi-calendar-check-fill"></i> Rezervasyonlarım</a>
  <a href="#"><i className="bi bi-gear-fill"></i> Ayarlar</a>
  <a href="#"><i className="bi bi-box-arrow-right"></i> Çıkış</a>
</div>

            )}
          </div>


        </div>

        {/* Arama kutusu */}
       <TourSearch />
      </nav>
    </header>
  );
};

export default Navbar;
