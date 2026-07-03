import { Link } from 'react-router-dom';
import { useState } from 'react';
import { argomenti } from '../data/argomenti';
import Esercizio from '../components/Esercizio';
import { completeEsercizio } from '../utils/progressManager';
import '../styles/Pratica.css';

function Pratica() {
  const [argomentoSelezionato, setArgomentoSelezionato] = useState(null);
  const [eserciziCompletati, setEserciziCompletati] = useState(new Set());

  const tuttiEsercizi = argomenti.flatMap(arg =>
    (arg.esercizi || []).map(es => ({ ...es, argomentoId: arg.id, argomentoTitolo: arg.titolo }))
  );

  const eserciziDaMostrare = argomentoSelezionato
    ? tuttiEsercizi.filter(e => e.argomentoId === argomentoSelezionato)
    : tuttiEsercizi;

  const handleEsercizioComplete = (argomentoId, esercizioId) => {
    completeEsercizio(argomentoId, esercizioId);
    setEserciziCompletati(new Set([...eserciziCompletati, esercizioId]));
  };

  return (
    <div className="pratica-container">
      <Link to="/" className="back-link">← Torna alla home</Link>

      <header className="pratica-header">
        <h1>Esercizi di Pratica</h1>
        <p>Risolvi esercizi con soluzioni dettagliate step-by-step</p>
      </header>

      <div className="filtri-container">
        <label htmlFor="filtro-argomento">Filtra per argomento:</label>
        <select
          id="filtro-argomento"
          value={argomentoSelezionato || ''}
          onChange={(e) => setArgomentoSelezionato(e.target.value || null)}
          className="filtro-select"
        >
          <option value="">Tutti gli argomenti</option>
          {argomenti.map(arg => (
            <option key={arg.id} value={arg.id}>
              {arg.titolo}
            </option>
          ))}
        </select>
      </div>

      <div className="esercizi-count">
        <p>
          Mostrando {eserciziDaMostrare.length} esercizi
          {argomentoSelezionato && ` in ${argomenti.find(a => a.id === argomentoSelezionato)?.titolo}`}
        </p>
      </div>

      <div className="esercizi-lista">
        {eserciziDaMostrare.length > 0 ? (
          eserciziDaMostrare.map((esercizio, index) => (
            <div key={`${esercizio.argomentoId}-${esercizio.id}`} className="esercizio-wrapper">
              <div className="esercizio-header-info">
                <span className="esercizio-numero">Esercizio #{index + 1}</span>
                <span className="esercizio-argomento">{esercizio.argomentoTitolo}</span>
              </div>
              <Esercizio
                testo={esercizio.testo}
                soluzione={esercizio.soluzione}
                spiegazione={esercizio.spiegazione}
                onComplete={() => handleEsercizioComplete(esercizio.argomentoId, esercizio.id)}
              />
            </div>
          ))
        ) : (
          <div className="nessun-esercizio">
            <h3>Nessun esercizio disponibile</h3>
            <p>
              {argomentoSelezionato
                ? 'Non ci sono esercizi per questo argomento al momento.'
                : 'Non ci sono esercizi disponibili.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pratica;
