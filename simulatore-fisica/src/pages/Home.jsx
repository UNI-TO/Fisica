import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Simulatore Esami Fisica</h1>
        <p className="sottotitolo">Preparati per i tuoi esami universitari di fisica</p>
      </header>

      <div className="menu-principale">
        <Link to="/argomenti" className="menu-card">
          <div className="icona">📚</div>
          <h2>Argomenti</h2>
          <p>Studia per argomento con domande ed esercizi</p>
        </Link>

        <Link to="/esami" className="menu-card">
          <div className="icona">📝</div>
          <h2>Esami Simulati</h2>
          <p>Mettiti alla prova con esami completi</p>
        </Link>

        <Link to="/pratica" className="menu-card">
          <div className="icona">✍️</div>
          <h2>Esercizi</h2>
          <p>Risolvi esercizi con soluzioni dettagliate</p>
        </Link>

        <Link to="/statistiche" className="menu-card">
          <div className="icona">📊</div>
          <h2>Statistiche</h2>
          <p>Monitora i tuoi progressi e risultati</p>
        </Link>

        <Link to="/esami-reali" className="menu-card">
          <div className="icona">🎯</div>
          <h2>Esami Reali</h2>
          <p>Domande a scelta multipla con formule matematiche da sessioni reali</p>
        </Link>

        <Link to="/temi-esame" className="menu-card">
          <div className="icona">📖</div>
          <h2>Temi d'Esame</h2>
          <p>I 18 argomenti ufficiali per la prova scritta</p>
        </Link>

        <Link to="/formulario" className="menu-card">
          <div className="icona">📐</div>
          <h2>Formulario</h2>
          <p>Tutte le formule del corso con rendering matematico</p>
        </Link>
      </div>

      <div className="info-sezione">
        <h3>Come funziona?</h3>
        <ul>
          <li>Scegli un argomento o un esame simulato</li>
          <li>Rispondi alle domande vero/falso</li>
          <li>Risolvi esercizi con soluzioni step-by-step</li>
          <li>Monitora i tuoi progressi</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;