import { useState } from 'react';
import DomandaVeroFalso from './DomandaVeroFalso';
import '../styles/Esame.css';

function Esame({ titolo, domande, onCompletamento }) {
  const [indiceDomandaCorrente, setIndiceDomandaCorrente] = useState(0);
  const [risposte, setRisposte] = useState([]);
  const [completato, setCompletato] = useState(false);

  const handleRisposta = (corretta) => {
    const nuoveRisposte = [...risposte, corretta];
    setRisposte(nuoveRisposte);

    if (indiceDomandaCorrente < domande.length - 1) {
      setTimeout(() => {
        setIndiceDomandaCorrente(indiceDomandaCorrente + 1);
      }, 1500);
    } else {
      setCompletato(true);
      if (onCompletamento) {
        onCompletamento(nuoveRisposte);
      }
    }
  };

  const calcolaPunteggio = () => {
    const corrette = risposte.filter(r => r).length;
    return {
      corrette,
      totali: domande.length,
      percentuale: Math.round((corrette / domande.length) * 100)
    };
  };

  if (completato) {
    const { corrette, totali, percentuale } = calcolaPunteggio();
    return (
      <div className="esame-completato">
        <h2>Esame Completato!</h2>
        <div className="risultati">
          <p className="punteggio">{corrette} / {totali}</p>
          <p className="percentuale">{percentuale}%</p>
          <p className={percentuale >= 60 ? 'esito-positivo' : 'esito-negativo'}>
            {percentuale >= 60 ? 'Superato! ✓' : 'Non superato ✗'}
          </p>
        </div>
        <button onClick={() => window.location.reload()} className="ricomincia-btn">
          Ricomincia
        </button>
      </div>
    );
  }

  const domandaCorrente = domande[indiceDomandaCorrente];

  return (
    <div className="esame-container">
      <div className="esame-header">
        <h2>{titolo}</h2>
        <p className="progresso">
          Domanda {indiceDomandaCorrente + 1} di {domande.length}
        </p>
      </div>
      <div className="progresso-barra">
        <div
          className="progresso-riempimento"
          style={{ width: `${((indiceDomandaCorrente) / domande.length) * 100}%` }}
        />
      </div>
      <DomandaVeroFalso
        domanda={domandaCorrente.domanda}
        risposta={domandaCorrente.risposta}
        onRisposta={handleRisposta}
      />
    </div>
  );
}

export default Esame;