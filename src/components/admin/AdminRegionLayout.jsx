// src/components/admin/AdminRegionLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminRegionLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkBase =
    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition";
  const navLinkInactive =
    "text-slate-500 hover:bg-slate-100 hover:text-slate-800";
  const navLinkActive = "bg-sky-50 text-sky-700 border border-sky-100";

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* SIDEBAR DESKTOP */}
      <aside className="hidden w-60 flex-col border-r bg-white px-3 py-4 shadow-sm md:flex">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center overflow-hidden">
                <img
                src="/icon.png"
                alt="Logo"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Admin Server Daerah
                </p>
            </div>
        </div>


        <nav className="flex-1 space-y-1">
          <NavLink
            to="/admin/daerah/panel/dashboard"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/daerah/panel/putusan"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            <span>Data Putusan</span>
          </NavLink>
        </nav>

        <div className="mt-4 border-t pt-3">
            <button
                className="w-full rounded-lg px-3 py-2 text-xs font-medium 
                        text-white bg-red-500 hover:bg-red-600 
                        border border-red-500 hover:border-red-600
                        transition-colors cursor-pointer"
                onClick={() => navigate("http://localhost:5173/admin/daerah")}
            >
                Logout
            </button>
        </div>

      </aside>

      {/* SIDEBAR MOBILE (OVERLAY) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="w-60 bg-white px-3 py-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Admin Daerah
                </p>
              </div>
              <button
                className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
                onClick={() => setSidebarOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="space-y-1 text-sm">
              <NavLink
                to="/admin/daerah/panel/dashboard"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
                }
              >
                <span>📊</span>
                <span>Dashboard</span>
              </NavLink>

              <NavLink
                to="/admin/daerah/panel/putusan"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
                }
              >
                <span>📂</span>
                <span>Data Putusan</span>
              </NavLink>

              <NavLink
                to="/admin/daerah/panel/putusan/baru"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
                }
              >
                <span>➕</span>
                <span>Input Putusan Baru</span>
              </NavLink>
            </nav>

            
          </div>

          <div
            className="flex-1 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* MAIN AREA */}
      <div className="flex min-h-screen flex-1 flex-col">
        {/* TOPBAR */}
        <header className="flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-md border border-slate-300 p-1.5 text-slate-700 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Panel Admin Daerah
              </span>
              <span className="text-sm font-medium text-slate-800">
                Pengadilan Negeri 
              </span>
            </div>
          </div>

            <div className="flex items-center gap-3 text-xs text-slate-600">
                <button
                    type="button"
                    onClick={() => navigate("/admin/daerah/panel/profil")}
                    className="flex items-center gap-3 rounded-sm px-2 py-1 cursor-pointer"
                >
                    <div className="hidden flex-col items-end sm:flex text-right">
                    <span className="font-semibold text-slate-800">
                        Admin. PN Contoh
                    </span>
                    <span className="text-[11px] text-slate-500">
                        admin.pncontoh@example.go.id
                    </span>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-xs font-semibold text-white">
                    AD
                    </div>
                </button>
            </div>
        </header>

        {/* KONTEN HALAMAN */}
        <main className="flex-1 bg-slate-50 px-4 py-5 md:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminRegionLayout;
