import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { getEsameRealeById } from '../data/esami-reali';
import DomandaMultipla from '../components/DomandaMultipla';
import '../styles/EsamiReali.css';

function DettaglioEsameReale() {
  const { id } = useParams();
  const esame = getEsameRealeById(id);
  const [indice, setIndice] = useState(0);
  const [risultati, setRisultati] = useState([]);
  const [terminato, setTerminato] = useState(false);

  if (!esame) {
    return (
      <div className="errore-container">
        <h2>Esame non trovato</h2>
        <Link to="/esami-reali">Torna agli esami reali</Link>
      </div>
    );
  }

  const handleRisposta = (corretta) => {
    setRisultati(prev => [...prev, corretta]);
  };

  const handleNext = () => {
    if (indice < esame.domande.length - 1) {
      setIndice(i => i + 1);
    } else {
      setTerminato(true);
    }
  };

  const handleRiavvia = () => {
    setIndice(0);
    setRisultati([]);
    setTerminato(false);
  };

  if (terminato) {
    const corrette = risultati.filter(r => r).length;
    const pct = Math.round((corrette / esame.domande.length) * 100);
    return (
      <div className="esame-reale-completato">
        <Link to="/esami-reali" className="back-link">← Torna agli esami reali</Link>
        <div className="completato-card">
          <div className="completato-emoji">{pct >= 60 ? '🎉' : '📖'}</div>
          <h2>Esame Completato!</h2>
          <p className="completato-score">{corrette} / {esame.domande.length}</p>
          <p className={`completato-pct ${pct >= 60 ? 'positivo' : 'negativo'}`}>{pct}%</p>
          <p className="completato-esito">
            {pct >= 60 ? 'Ottimo risultato! Continua così.' : 'Riprova, puoi migliorare!'}
          </p>
          <div className="completato-azioni">
            <button className="ricomincia-btn" onClick={handleRiavvia}>Ricomincia</button>
            <Link to="/esami-reali" className="torna-esami-btn">Torna agli esami</Link>
          </div>
        </div>
      </div>
    );
  }

  const domanda = esame.domande[indice];

  return (
    <div className="dettaglio-esame-reale-container">
      <Link to="/esami-reali" className="back-link">← Torna agli esami reali</Link>

      <header className="esame-reale-quiz-header">
        <h2>{esame.titolo}</h2>
        <div className="quiz-nav">
          <span className="quiz-contatore">{indice + 1} / {esame.domande.length}</span>
          <div className="quiz-barra">
            <div
              className="quiz-barra-fill"
              style={{ width: `${((indice + 1) / esame.domande.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <DomandaMultipla
        key={indice}
        domanda={domanda}
        onRisposta={handleRisposta}
        onNext={handleNext}
        isUltima={indice === esame.domande.length - 1}
      />
    </div>
  );
}

export default DettaglioEsameReale;
