import { useState } from 'react';
import '../styles/Domanda.css';

function DomandaVeroFalso({ domanda, risposta, onRisposta }) {
  const [selezionata, setSelezionata] = useState(null);
  const [mostraRisposta, setMostraRisposta] = useState(false);

  const handleRisposta = (valore) => {
    setSelezionata(valore);
    setMostraRisposta(true);
    if (onRisposta) {
      onRisposta(valore === risposta);
    }
  };

  return (
    <div className="domanda-container">
      <h3 className="domanda-testo">{domanda}</h3>
      <div className="opzioni-container">
        <button
          className={`opzione-btn ${selezionata === true ? 'selezionata' : ''} ${
            mostraRisposta ? (risposta === true ? 'corretta' : 'errata') : ''
          }`}
          onClick={() => handleRisposta(true)}
          disabled={mostraRisposta}
        >
          Vero
        </button>
        <button
          className={`opzione-btn ${selezionata === false ? 'selezionata' : ''} ${
            mostraRisposta ? (risposta === false ? 'corretta' : 'errata') : ''
          }`}
          onClick={() => handleRisposta(false)}
          disabled={mostraRisposta}
        >
          Falso
        </button>
      </div>
      {mostraRisposta && (
        <div className={`feedback ${selezionata === risposta ? 'corretto' : 'sbagliato'}`}>
          {selezionata === risposta ? '✓ Corretto!' : '✗ Sbagliato!'}
        </div>
      )}
    </div>
  );
}

export default DomandaVeroFalso;