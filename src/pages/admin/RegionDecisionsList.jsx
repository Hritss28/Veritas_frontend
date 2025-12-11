// src/pages/admin/RegionDecisionsList.jsx
import { Link } from "react-router-dom";

const DUMMY_REGION_DECISIONS = [
  {
    id: 1,
    number: "3456 PK/PID.SUS/2025",
    directory: "Pidana Khusus > Narkotika dan Psikotropika",
    decisionDate: "02-12-2025",
    uploadDate: "10-12-2025",
    synced: true,
  },
  {
    id: 2,
    number: "1205 K/PID.SUS/2025",
    directory: "Pidana Khusus > Korupsi",
    decisionDate: "22-09-2025",
    uploadDate: "04-12-2025",
    synced: false,
  },
  {
    id: 3,
    number: "302 K/PID.SUS-PRK/2025",
    directory: "Pidana Khusus > Perikanan",
    decisionDate: "15-08-2025",
    uploadDate: "01-12-2025",
    synced: true,
  },
];

function RegionDecisionsList() {
  // nanti ini bisa diganti dengan state filter + data dari backend
  const decisions = DUMMY_REGION_DECISIONS;

  return (
    <section className="space-y-4">
      {/* Header halaman */}
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            Kelola Data Putusan Pengadilan
          </h1>
        </div>

        <Link
          to="/admin/daerah/panel/putusan/baru"
          className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-700"
        >
          Tambah Putusan Baru
        </Link>
      </header>

      {/* Filter sederhana */}
      <div className="flex flex-wrap gap-2 rounded-sm border bg-white px-4 py-3 text-xs shadow-sm">
        <div className="flex min-w-[200px] flex-1 items-center gap-2">
          <label className="text-[11px] text-slate-600">Nomor Putusan</label>
          <input
            type="text"
            className="flex-1 rounded-lg border border-slate-300 px-2 py-1.5 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Cari nomor putusan..."
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[11px] text-slate-600">Status Sinkron</label>
          <select className="rounded-lg border border-slate-300 px-2 py-1.5 text-xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
            <option>Semua</option>
            <option>Sudah sinkron</option>
            <option>Belum sinkron</option>
          </select>
        </div>
      </div>

      {/* Tabel putusan */}
      <div className="rounded-sm border bg-white shadow-sm">
        <div className="border-b px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-800">
            Daftar Putusan
          </h2>
        </div>

        <div className="overflow-x-auto text-xs">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Nomor Putusan
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Direktori
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Tgl Putus
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Tgl Upload
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Sinkron
                </th>
                <th className="px-4 py-2 text-left font-medium text-slate-600">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {decisions.map((d) => (
                <tr key={d.id}>
                  <td className="px-4 py-2 font-semibold text-slate-800">
                    {d.number}
                  </td>
                  <td className="px-4 py-2 text-slate-700">{d.directory}</td>
                  <td className="px-4 py-2 text-slate-700">
                    {d.decisionDate}
                  </td>
                  <td className="px-4 py-2 text-slate-700">
                    {d.uploadDate}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        d.synced
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {d.synced ? "Sudah sinkron" : "Belum sinkron"}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex flex-wrap gap-1">
                      <Link
                        to={`/admin/daerah/panel/putusan/${d.id}/edit`}
                        className="rounded-md border border-slate-300 px-2 py-1 text-[11px] hover:bg-slate-50"
                      >
                        Edit
                      </Link>
                      <button className="rounded-md border border-rose-200 px-2 py-1 text-[11px] text-rose-600 hover:bg-rose-50">
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {decisions.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-slate-500"
                  >
                    Belum ada putusan yang tersimpan pada server daerah ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RegionDecisionsList;
