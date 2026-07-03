import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Argomenti from './pages/Argomenti';
import DettaglioArgomento from './pages/DettaglioArgomento';
import Esami from './pages/Esami';
import DettaglioEsame from './pages/DettaglioEsame';
import Statistiche from './pages/Statistiche';
import Pratica from './pages/Pratica';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/argomenti" element={<Argomenti />} />
            <Route path="/argomento/:id" element={<DettaglioArgomento />} />
            <Route path="/esami" element={<Esami />} />
            <Route path="/esame/:id" element={<DettaglioEsame />} />
            <Route path="/statistiche" element={<Statistiche />} />
            <Route path="/pratica" element={<Pratica />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;