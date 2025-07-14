import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/admin/tourManagement.css';
import AdminNavbar from '../../components/admin/adminNavbar';
import AdminSidebar from '../../components/admin/adminSidebar';

const TourManagementPage = () => {
  const [tours, setTours] = useState([]);
  const [guides, setGuides] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTour, setEditingTour] = useState(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    price: '',
    capacity: '',
    category: '',
    averageRating: '',
    guideId: '',
    imageFile: null,
  });

  useEffect(() => {
    fetchTours();
    fetchGuides();
  }, []);

  const fetchTours = async () => {
    const res = await axios.get("https://localhost:6703/api/Tour");
    setTours(res.data);
  };

  const fetchGuides = async () => {
    const res = await axios.get("https://localhost:6703/api/Tour/guides/select-list");
    setGuides(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      await axios.delete(`https://localhost:6703/api/Tour/${id}`);
      fetchTours();
    }
  };

  const handleEdit = (tour) => {
    setEditingTour(tour);
    setForm({
      ...tour,
      startDate: tour.startDate?.split('T')[0] ?? '',
      endDate: tour.endDate?.split('T')[0] ?? '',
      guideId: tour.guideId?.toString() ?? '',
      imageFile: null,
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingTour(null);
    setForm({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      price: '',
      capacity: '',
      category: '',
      averageRating: '',
      guideId: '',
      imageFile: null,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("startDate", form.startDate);
    formData.append("endDate", form.endDate);
    formData.append("price", form.price);
    formData.append("capacity", form.capacity);
    formData.append("category", form.category);
    formData.append("averageRating", form.averageRating || 0);

    if (form.guideId) {
      formData.append("guideId", form.guideId);
    }

    if (form.imageFile) {
      formData.append("formFile", form.imageFile);
    }

    if (editingTour) {
      await axios.put(`https://localhost:6703/api/Tour/${editingTour.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      await axios.post("https://localhost:6703/api/Tour", formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }

    setShowModal(false);
    fetchTours();
  };

  return (
    <div className="admin-home">
      <AdminNavbar adminName="Merve" />
      <div className="admin-content">
        <AdminSidebar />
        <main className="dashboard tour-list-container">
          <div className="tour-header">
            <h2>Tur Listesi</h2>
            <button onClick={handleAdd} className="add-button">+ Tur Ekle</button>
          </div>

          <table className="tour-table">
            <thead>
              <tr>
                <th>Başlık</th>
                <th>Açıklama</th>
                <th>Başlangıç</th>
                <th>Bitiş</th>
                <th>Fiyat</th>
                <th>Kapasite</th>
                <th>Kategori</th>
                <th>Rehber</th>
                <th>Görsel</th>
                <th>Ortalama Puan</th>
                <th>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {tours.map(tour => (
                <tr key={tour.id}>
                  <td>{tour.title}</td>
                  <td>{tour.description}</td>
                  <td>{tour.startDate?.split('T')[0]}</td>
                  <td>{tour.endDate?.split('T')[0]}</td>
                  <td>{tour.price}₺</td>
                  <td>{tour.capacity}</td>
                  <td>{tour.category}</td>
                  <td>{tour.guideName ?? '-'}</td>
                  <td>
                    {tour.imageUrl
                      ? <img src={`https://localhost:6703/${tour.imageUrl}`} alt="Tur görseli" style={{ width: 60, height: 40, objectFit: 'cover', borderRadius: 6 }} />
                      : <span>Yok</span>
                    }
                  </td>
                  <td>{tour.averageRating ?? '-'}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(tour)}>Güncelle</button>
                    <button className="delete-btn" onClick={() => handleDelete(tour.id)}>Sil</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>{editingTour ? "Turu Güncelle" : "Yeni Tur Ekle"}</h3>
                <form onSubmit={handleSubmit} className="modal-form">
                  <input type="text" placeholder="Başlık" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                  <textarea placeholder="Açıklama" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
                  <input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} required />
                  <input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} required />
                  <input type="number" placeholder="Fiyat" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
                  <input type="number" placeholder="Kapasite" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} required />
                  <input type="text" placeholder="Kategori" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />

                  {/* Guide Dropdown */}
                  <select
                    value={form.guideId}
                    onChange={(e) => setForm({ ...form, guideId: e.target.value })}
                    required
                  >
                    <option value="">Rehber Seçin</option>
                    {guides.map(guide => (
                      <option key={guide.value} value={guide.value}>
                        {guide.text}
                      </option>
                    ))}
                  </select>

                  {/* Image Upload */}
                  <input type="file" accept="image/*" onChange={(e) => setForm({ ...form, imageFile: e.target.files[0] })} />

                  <div className="modal-buttons">
                    <button type="submit" className="save-btn">Kaydet</button>
                    <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>İptal</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TourManagementPage;



// rehber seçiminde prje patlıyor