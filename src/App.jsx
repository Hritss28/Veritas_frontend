// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import PutusanListPage from "./pages/PutusanListPage";
import PutusanDetailPage from "./pages/PutusanDetailPage";

// Admin Daerah
import AdminRegionLayout from "./components/admin/AdminRegionLayout";
import RegionDashboard from "./pages/admin/RegionDashboard";
import RegionDecisionsList from "./pages/admin/RegionDecisionsList";
import RegionDecisionForm from "./pages/admin/RegionDecisionForm";
import AdminRegionLogin from "./pages/admin/AdminRegionLogin";
import RegionProfile from "./pages/admin/RegionProfile";


// Wrapper untuk route public (pakai MainLayout)
function PublicLayoutWrapper() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

function App() {
  return (
    <Routes>
      {/* ==== ROUTE PUBLIC (USER BIASA) ==== */}
      <Route element={<PublicLayoutWrapper />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/putusan" element={<PutusanListPage />} />
        <Route path="/putusan/:id" element={<PutusanDetailPage />} />
      </Route>

      {/* ==== LOGIN ADMIN DAERAH ==== */}
      {/* User yang buka /admin/daerah langsung masuk ke halaman login */}
      <Route path="/admin/daerah" element={<AdminRegionLogin />} />

      {/* ==== PANEL ADMIN DAERAH ==== */}
      {/* Semua halaman panel admin ada di bawah /admin/daerah/panel/... */}
      <Route path="/admin/daerah/panel" element={<AdminRegionLayout />}>
        <Route index element={<RegionDashboard />} />
        <Route path="dashboard" element={<RegionDashboard />} />
        <Route path="putusan" element={<RegionDecisionsList />} />
        <Route
          path="putusan/baru"
          element={<RegionDecisionForm mode="create" />}
        />
        <Route
          path="putusan/:id/edit"
          element={<RegionDecisionForm mode="edit" />}
        />
        <Route path="profil" element={<RegionProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
