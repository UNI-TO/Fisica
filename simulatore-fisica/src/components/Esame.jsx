import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DomandaVeroFalso from './DomandaVeroFalso';
import '../styles/Esame.css';

function Esame({ titolo, domande, onCompletamento }) {
  const [indiceDomandaCorrente, setIndiceDomandaCorrente] = useState(0);
  const [risposte, setRisposte] = useState([]);
  const [completato, setCompletato] = useState(false);
  const [tempoTrascorso, setTempoTrascorso] = useState(0);
  const [inizioEsame, setInizioEsame] = useState(Date.now());

  useEffect(() => {
    if (!completato) {
      const timer = setInterval(() => {
        setTempoTrascorso(Math.floor((Date.now() - inizioEsame) / 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [completato, inizioEsame]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRisposta = (corretta) => {
    const nuoveRisposte = [...risposte, corretta];
    setRisposte(nuoveRisposte);

    if (indiceDomandaCorrente < domande.length - 1) {
      setTimeout(() => {
        setIndiceDomandaCorrente(indiceDomandaCorrente + 1);
      }, 1200);
    } else {
      setCompletato(true);
      const tempoFinale = Math.floor((Date.now() - inizioEsame) / 1000);
      if (onCompletamento) {
        onCompletamento(nuoveRisposte, tempoFinale);
      }
    }
  };

  const handleRicomincia = () => {
    setIndiceDomandaCorrente(0);
    setRisposte([]);
    setCompletato(false);
    setTempoTrascorso(0);
    setInizioEsame(Date.now());
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
          <p className="tempo-impiegato">Tempo: {formatTime(tempoTrascorso)}</p>
          <p className={percentuale >= 60 ? 'esito-positivo' : 'esito-negativo'}>
            {percentuale >= 60 ? 'Superato! ✓' : 'Non superato ✗'}
          </p>
        </div>
        <div className="completato-azioni">
          <button onClick={handleRicomincia} className="ricomincia-btn">
            Ricomincia
          </button>
          <Link to="/esami" className="torna-esami-btn">
            Torna agli esami
          </Link>
        </div>
      </div>
    );
  }

  const domandaCorrente = domande[indiceDomandaCorrente];

  return (
    <div className="esame-container">
      <div className="esame-header">
        <h2>{titolo}</h2>
        <div className="esame-info">
          <p className="progresso">
            Domanda {indiceDomandaCorrente + 1} di {domande.length}
          </p>
          <p className="timer">⏱ {formatTime(tempoTrascorso)}</p>
        </div>
      </div>
      <div className="progresso-barra">
        <div
          className="progresso-riempimento"
          style={{ width: `${(indiceDomandaCorrente / domande.length) * 100}%` }}
        />
      </div>
      <DomandaVeroFalso
        key={indiceDomandaCorrente}
        domanda={domandaCorrente.domanda}
        risposta={domandaCorrente.risposta}
        onRisposta={handleRisposta}
      />
    </div>
  );
}

export default Esame;
