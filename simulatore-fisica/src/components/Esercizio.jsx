import { useState } from 'react';
import '../styles/Esercizio.css';

function Esercizio({ testo, soluzione, spiegazione, onComplete }) {
  const [mostraSoluzione, setMostraSoluzione] = useState(false);
  const [completato, setCompletato] = useState(false);

  const handleComplete = () => {
    setCompletato(true);
    if (onComplete) onComplete();
  };

  if (completato) {
    return (
      <div className="esercizio-container completato">
        <div className="esercizio-testo">
          <p>{testo}</p>
        </div>
        <div className="completato-badge">✓ Completato</div>
      </div>
    );
  }

  return (
    <div className="esercizio-container">
      <div className="esercizio-testo">
        <h3>Esercizio</h3>
        <p>{testo}</p>
      </div>

      <button
        className="mostra-soluzione-btn"
        onClick={() => setMostraSoluzione(!mostraSoluzione)}
      >
        {mostraSoluzione ? 'Nascondi Soluzione' : 'Mostra Soluzione'}
      </button>

      {mostraSoluzione && (
        <div className="soluzione-container">
          <h4>Soluzione:</h4>
          <div className="soluzione-testo">{soluzione}</div>
          {spiegazione && (
            <div className="spiegazione">
              <h5>Spiegazione:</h5>
              <p>{spiegazione}</p>
            </div>
          )}
          {onComplete && (
            <button className="completato-btn" onClick={handleComplete}>
              Segna come completato ✓
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Esercizio;
