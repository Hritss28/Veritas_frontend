// src/App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import PutusanListPage from "./pages/PutusanListPage";
import PutusanDetailPage from "./pages/PutusanDetailPage";

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Landing / Home */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman daftar putusan / pencarian */}
        <Route path="/putusan" element={<PutusanListPage />} />

        {/* Detail putusan berdasarkan ID */}
        <Route path="/putusan/:id" element={<PutusanDetailPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
