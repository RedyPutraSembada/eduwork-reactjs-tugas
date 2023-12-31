import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortalBerita from "./Materi/PortalBerita";
import Portofolio from "./Materi/Portofolio";
import FormValidasi from "./Materi/FormValidasi";
import Komponen from "./Materi/Komponen";
import Home from "./Materi/home";
import NewsFunction from "./Materi/Hook";
import Redux from "./Materi/Redux";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component" element={<Komponen />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/registrasi" element={<FormValidasi />} />
          <Route path="/berita" element={<PortalBerita />} />
          <Route path="/berita-function" element={<NewsFunction />} />
          <Route path="/redux" element={<Redux />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
