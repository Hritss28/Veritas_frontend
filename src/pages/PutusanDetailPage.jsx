// src/pages/PutusanDetailPage.jsx
import { useParams } from "react-router-dom";

function PutusanDetailPage() {
  const { id } = useParams();

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Detail Putusan</h2>
      <p>ID Putusan (dummy param route): {id}</p>
      <p>
        Nanti di sini kita tampilkan metadata lengkap (nomor perkara, jenis
        perkara, tanggal, pengadilan, hakim, amar putusan, dsb.) dan link ke
        file PDF di server daerah.
      </p>
    </section>
  );
}

export default PutusanDetailPage;
