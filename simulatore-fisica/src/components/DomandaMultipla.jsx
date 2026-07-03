import { useState } from 'react';
import { renderLatex } from '../utils/latex';
import '../styles/DomandaMultipla.css';

function DomandaMultipla({ domanda, onRisposta, onNext, isUltima }) {
  const [selezionata, setSelezionata] = useState(null);

  const handleSelect = (id) => {
    if (selezionata !== null) return;
    setSelezionata(id);
    if (onRisposta) onRisposta(id === domanda.rispostaCorretta);
  };

  const getClass = (id) => {
    if (selezionata === null) return 'opzione-multipla';
    if (id === domanda.rispostaCorretta) return 'opzione-multipla corretta';
    if (id === selezionata) return 'opzione-multipla errata';
    return 'opzione-multipla disabilitata';
  };

  return (
    <div className="domanda-multipla-container">
      <p className="domanda-multipla-testo">{domanda.testo}</p>

      <div className="opzioni-multipla-lista">
        {domanda.opzioni.map(op => (
          <button
            key={op.id}
            className={getClass(op.id)}
            onClick={() => handleSelect(op.id)}
            disabled={selezionata !== null}
            dangerouslySetInnerHTML={{ __html: renderLatex(op.testo) }}
          />
        ))}
      </div>

      {selezionata !== null && (
        <div className={`feedback ${selezionata === domanda.rispostaCorretta ? 'corretto' : 'sbagliato'}`}>
          {selezionata === domanda.rispostaCorretta
            ? '✓ Corretto!'
            : '✗ Sbagliato — la risposta corretta è evidenziata in verde.'}
        </div>
      )}

      {selezionata !== null && domanda.spiegazione && (
        <div className="spiegazione-multipla">
          <strong>Spiegazione:</strong> {domanda.spiegazione}
        </div>
      )}

      {selezionata !== null && onNext && (
        <button className="prossima-btn" onClick={onNext}>
          {isUltima ? 'Vedi risultati →' : 'Prossima domanda →'}
        </button>
      )}
    </div>
  );
}

export default DomandaMultipla;
