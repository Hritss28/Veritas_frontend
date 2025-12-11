// src/pages/admin/RegionDashboard.jsx

function RegionDashboard() {
  return (
    <section className="space-y-4">
      {/* Header */}
      <header>
        <h1 className="text-lg font-semibold text-slate-900">
          Dashboard Admin Daerah
        </h1>
      </header>

      {/* Kartu statistik */}
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-sm border bg-white px-4 py-3 text-xs shadow-sm">
          <p className="text-[11px] text-slate-500">Total Putusan</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">1.245</p>
          <p className="mt-1 text-[11px] text-emerald-600">
            ▲ 12 putusan baru bulan ini
          </p>
        </div>

        <div className="rounded-sm border bg-white px-4 py-3 text-xs shadow-sm">
          <p className="text-[11px] text-slate-500">Belum Tersinkron</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">8</p>
          <p className="mt-1 text-[11px] text-amber-600">
            Perlu cek koneksi ke server pusat
          </p>
        </div>

        <div className="rounded-sm border bg-white px-4 py-3 text-xs shadow-sm">
          <p className="text-[11px] text-slate-500">Gagal Upload</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">2</p>
          <p className="mt-1 text-[11px] text-rose-600">
            Perlu re-upload dokumen PDF
          </p>
        </div>
      </div>

      {/* Aktivitas terakhir */}
      <div className="rounded-sm border bg-white shadow-sm">
        <div className="border-b px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-800">
            Aktivitas Terakhir
          </h2>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Waktu
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Aktivitas
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Putusan / Batch
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-2">10-12-2025 09:21</td>
                <td className="px-4 py-2">Upload putusan baru</td>
                <td className="px-4 py-2">
                  3456 PK/PID.SUS/2025 – Narkotika
                </td>
                <td className="px-4 py-2 text-emerald-600">Tersimpan</td>
              </tr>
              <tr>
                <td className="px-4 py-2">10-12-2025 08:05</td>
                <td className="px-4 py-2">Sinkronisasi ke server pusat</td>
                <td className="px-4 py-2">Batch sinkron 2025-10</td>
                <td className="px-4 py-2 text-amber-600">Menunggu antrian</td>
              </tr>
              <tr>
                <td className="px-4 py-2">09-12-2025 16:44</td>
                <td className="px-4 py-2">Perbaikan metadata putusan</td>
                <td className="px-4 py-2">
                  1205 K/PID.SUS/2025 – Korupsi
                </td>
                <td className="px-4 py-2 text-sky-600">Diperbarui</td>
              </tr>
              <tr>
                <td className="px-4 py-2">09-12-2025 10:12</td>
                <td className="px-4 py-2">Upload gagal (timeout)</td>
                <td className="px-4 py-2">2771 PK/PID.SUS/2025 – Narkotika</td>
                <td className="px-4 py-2 text-rose-600">Perlu re-upload</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RegionDashboard;
