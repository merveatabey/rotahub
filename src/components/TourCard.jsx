import React, { useState } from "react";
import '../styles/tourcard.css';

function calculateDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // gün sayısı (+1 dahil)
}

export default function TourCard({ tour, onDetailClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Detay butonuna tıklamayı engelle
    setIsFavorite((fav) => !fav);
    // Burada favorilere ekleme işlemini yapabilirsin (API, context vs)
  };

  const days = calculateDays(tour.startDate, tour.endDate);

  return (
    <div className="tour-card">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </div>
      <img className="tour-image" src={tour.image} alt={tour.title} />
      <div className="tour-content">
        <h3>{tour.title}</h3>
        <p className="tour-description">{tour.description}</p>
        <p className="tour-days">{days} gün</p>
      </div>
      <button className="detail-button" onClick={() => onDetailClick(tour.id)}>
        Detay
      </button>
    </div>
  );
}
