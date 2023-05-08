import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Apps1 from "./pages/Apps1";
import Area from "./components/Area";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import { useAtom } from "jotai";
import { cor } from "./index";

export default function App() {
  const [corlocal, setCor] = useAtom(cor);

  return (
    <div className="App" style={{ background: corlocal }}>
      <Router>
        <Area>
          <nav class="navbar bg-dark" data-bs-theme="dark">
            <input
              className="linkl navbar-brand"
              type="color"
              title="cor"
              onChange={(callback) => setCor(callback.target.value)}
            />
            <Link className="link1 navbar-brand" to="/">
              Home
            </Link>
            <Link className="link2 navbar-brand" to="/sobre">
              Sobre
            </Link>
            <Link className="link3 navbar-brand" to="/contato">
              Contato
            </Link>
            <Link className="link4 linkr navbar-brand" to="/apps1">
              Apps 1
            </Link>
          </nav>
        </Area>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/apps1" element={<Apps1 />} />
        </Routes>
      </Router>
    </div>
  );
}
