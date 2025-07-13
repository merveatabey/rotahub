import React from "react";
import TourCard from "../components/TourCard";
import '../styles/tours.css';
import Navbar from "../components/navbar";

const toursData = [
  {
    id: 1,
    title: "Karadeniz Turu",
    description: "Doğanın kalbinde unutulmaz bir macera.",
    startDate: "2025-07-20",
    endDate: "2025-07-25",
    image: "https://source.unsplash.com/400x250/?nature,mountains",
  },
  {
    id: 2,
    title: "Ege Sahilleri",
    description: "Tarih ve denizin buluştuğu eşsiz tatil.",
    startDate: "2025-08-05",
    endDate: "2025-08-10",
    image: "https://source.unsplash.com/400x250/?sea,beach",
  },
  // daha fazla tur ekleyebilirsin
];

export default function ToursPage() {
  const handleDetailClick = (id) => {
    alert(`Detay sayfasına yönlendir: Tur ID = ${id}`);
    // Burada react-router ile detay sayfasına yönlendirme yapabilirsin
    // navigate(`/tours/${id}`);
  };

  return (
   
    <div className="tours-page">
       <Navbar/>
      <h1>Tur Listesi</h1>
      <div className="tours-grid">
        {toursData.map((tour) => (
          <TourCard key={tour.id} tour={tour} onDetailClick={handleDetailClick} />
        ))}
      </div>
    </div>
  );
}
