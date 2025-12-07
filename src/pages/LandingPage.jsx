// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Gerbang Putusan Terdistribusi Nasional</h1>
      <p>
        Portal pencarian putusan pengadilan dari seluruh Indonesia, berdasarkan
        arsitektur sistem terdistribusi yang kamu rancang di laporan.
      </p>

      {/* Nanti di sini kita buat search bar cepat */}
      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/putusan">Mulai Cari Putusan</Link>
      </div>
    </section>
  );
}

export default LandingPage;
