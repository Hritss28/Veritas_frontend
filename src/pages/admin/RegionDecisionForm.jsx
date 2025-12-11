// src/pages/admin/RegionDecisionForm.jsx
import { useParams, useNavigate } from "react-router-dom";

function RegionDecisionForm({ mode = "create" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = mode === "edit";

  // nanti di sini bisa ditambah state form + fetch data existing kalau edit

  return (
    <section className="space-y-4">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            {isEdit ? `Edit Putusan ${id}` : "Input Putusan Baru"}
          </h1>
        </div>

        <button
          type="button"
          onClick={() => navigate("/admin/daerah/panel/putusan")}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 cursor-pointer"
        >
          Kembali ke daftar putusan
        </button>
      </header>

      {/* Form utama */}
      <form className="space-y-4 rounded-sm border bg-white p-4 text-xs shadow-sm md:p-5">
        {/* Baris 1: nomor putusan + direktori */}
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Nomor Putusan
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Contoh: 3456 PK/PID.SUS/2025"
            />
            <p className="mt-1 text-[11px] text-slate-500">
              Nomor putusan lengkap sesuai penetapan (misal: K/PID.SUS, PK,
              dsb).
            </p>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Direktori
            </label>
            <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
              <option>Pilih direktori...</option>
              <option>Pidana Khusus &gt; Narkotika dan Psikotropika</option>
              <option>Pidana Khusus &gt; Korupsi</option>
              <option>Pidana Khusus &gt; Perlindungan Anak</option>
              <option>Pidana Khusus &gt; Lingkungan Hidup</option>
              <option>Pidana Khusus &gt; Perikanan</option>
              <option>Pidana Khusus &gt; Kepabeanan</option>
              <option>Pidana Khusus &gt; ITE</option>
              <option>Pidana Khusus &gt; TPPU</option>
            </select>
          </div>
        </div>

        {/* Baris 2: tanggal-tanggal */}
        <div className="grid gap-3 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Tanggal Register
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Tanggal Putusan
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Tanggal Upload
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Baris 3: ringkasan singkat */}
        <div>
          <label className="mb-1 block text-[11px] font-medium text-slate-600">
            Ringkasan Singkat
          </label>
          <textarea
            rows={3}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Ringkasan singkat terkait pihak, pasal, dan amar utama, misal: Penuntut Umum vs Terdakwa, jenis tindak pidana, dan inti amar putusan."
          />
        </div>

        {/* Baris 4: upload PDF + status sinkron */}
        <div className="grid gap-3 md:grid-cols-[2fr,1fr]">
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              File PDF Putusan
            </label>
            <input
              type="file"
              accept="application/pdf"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs file:mr-2 file:rounded-md file:border-0 file:bg-sky-600 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-sky-700"
            />
            <p className="mt-1 text-[11px] text-slate-500">
              Unggah dokumen PDF resmi putusan (scan/softcopy asli). Maksimal
              10 MB.
            </p>
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Status Sinkronisasi
            </label>
            <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
              <option>Belum dikirim ke pusat</option>
              <option>Siap dikirim</option>
              <option>Sudah sinkron</option>
            </select>
            <p className="mt-1 text-[11px] text-slate-500">
              Menunjukkan status replikasi data dari server daerah ke server
              pusat.
            </p>
          </div>
        </div>

        {/* Baris 5: opsi tambahan (opsional) */}
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Catatan Internal (Opsional)
            </label>
            <textarea
              rows={2}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Catatan internal untuk admin (tidak ditampilkan di publik)..."
            />
          </div>
          <div>
            <label className="mb-1 block text-[11px] font-medium text-slate-600">
              Tag / Kata Kunci (Opsional)
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Contoh: narkotika, pasal 112, bandar, residivis..."
            />
            <p className="mt-1 text-[11px] text-slate-500">
              Membantu pencarian lanjutan di portal publik.
            </p>
          </div>
        </div>

        {/* Footer form: info + tombol */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
          <p className="text-[11px] text-slate-500">
            Data yang diinput akan disimpan di server daerah dan dapat
            direplikasi ke server pusat sesuai mekanisme sinkronisasi Gerbang
            Putusan Nasional.
          </p>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => navigate("/admin/daerah/putusan")}
              className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
            >
              Batal
            </button>
            <button
              type="submit"
              className="rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              {isEdit ? "Simpan Perubahan" : "Simpan Putusan"}
            </button>
          </div>
        </div>
      </form>

      <p className="text-[11px] text-slate-500">
        *Form ini masih menggunakan data dummy. Nantinya dapat dihubungkan ke
        backend (REST API) untuk menyimpan metadata dan mengunggah file PDF
        secara nyata ke server daerah.
      </p>
    </section>
  );
}

export default RegionDecisionForm;
