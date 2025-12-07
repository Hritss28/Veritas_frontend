// src/components/layout/Header.jsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#111" }}>
        <strong>Gerbang Putusan Nasional</strong>
      </Link>

      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/putusan">Cari Putusan</Link>
        {/* nanti bisa tambah menu lain: Statistik, Login, dsb. */}
      </nav>
    </header>
  );
}

export default Header;
