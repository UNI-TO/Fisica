import { useState } from 'react';
import { Link } from 'react-router-dom';
import { temiEsame, argomentiTemi } from '../data/temi-esame';
import '../styles/TemiEsame.css';

function TemiEsame() {
  const [filtro, setFiltro] = useState('Tutti');
  const [aperti, setAperti] = useState(new Set());

  const temiFiltrati = filtro === 'Tutti'
    ? temiEsame
    : temiEsame.filter(t => t.argomento === filtro);

  const toggleAperto = (id) => {
    setAperti(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="temi-container">
      <Link to="/" className="back-link">← Home</Link>

      <header className="temi-header">
        <h1>Temi d'Esame Scritto</h1>
        <p>I {temiEsame.length} argomenti ufficiali per la prova scritta — clicca su un tema per vedere i dettagli</p>
      </header>

      <div className="temi-filtri">
        <button
          className={`filtro-btn ${filtro === 'Tutti' ? 'attivo' : ''}`}
          onClick={() => setFiltro('Tutti')}
        >
          Tutti ({temiEsame.length})
        </button>
        {argomentiTemi.map(arg => (
          <button
            key={arg}
            className={`filtro-btn ${filtro === arg ? 'attivo' : ''}`}
            onClick={() => setFiltro(arg)}
          >
            {arg} ({temiEsame.filter(t => t.argomento === arg).length})
          </button>
        ))}
      </div>

      <div className="temi-lista">
        {temiFiltrati.map(tema => (
          <div
            key={tema.id}
            className={`tema-card ${aperti.has(tema.id) ? 'aperto' : ''}`}
            onClick={() => toggleAperto(tema.id)}
          >
            <div className="tema-card-header">
              <div className="tema-numero">{tema.id}</div>
              <h3>{tema.titolo}</h3>
              <span className={`tema-argomento tag-${tema.argomento.toLowerCase()}`}>
                {tema.argomento}
              </span>
              <span className="tema-chevron">{aperti.has(tema.id) ? '▲' : '▼'}</span>
            </div>
            {aperti.has(tema.id) && (
              <div className="tema-descrizione">
                <p>{tema.descrizione}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemiEsame;
