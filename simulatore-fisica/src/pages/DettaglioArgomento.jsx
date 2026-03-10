import { useParams, Link } from 'react-router-dom';
import { getArgomentoById } from '../data/argomenti';
import DomandaVeroFalso from '../components/DomandaVeroFalso';
import Esercizio from '../components/Esercizio';
import '../styles/DettaglioArgomento.css';

function DettaglioArgomento() {
  const { id } = useParams();
  const argomento = getArgomentoById(id);

  if (!argomento) {
    return (
      <div className="errore-container">
        <h2>Argomento non trovato</h2>
        <Link to="/argomenti">Torna agli argomenti</Link>
      </div>
    );
  }

  return (
    <div className="dettaglio-argomento-container">
      <Link to="/argomenti" className="back-link">← Torna agli argomenti</Link>

      <header className="argomento-header">
        <h1>{argomento.titolo}</h1>
        <p>{argomento.descrizione}</p>
      </header>

      <div className="tabs-container">
        <div className="sezione">
          <h2>Domande Vero/Falso</h2>
          <div className="domande-lista">
            {argomento.domande && argomento.domande.length > 0 ? (
              argomento.domande.map(domanda => (
                <DomandaVeroFalso
                  key={domanda.id}
                  domanda={domanda.domanda}
                  risposta={domanda.risposta}
                />
              ))
            ) : (
              <p className="vuoto">Nessuna domanda disponibile per questo argomento.</p>
            )}
          </div>
        </div>

        <div className="sezione">
          <h2>Esercizi</h2>
          <div className="esercizi-lista">
            {argomento.esercizi && argomento.esercizi.length > 0 ? (
              argomento.esercizi.map(esercizio => (
                <Esercizio
                  key={esercizio.id}
                  testo={esercizio.testo}
                  soluzione={esercizio.soluzione}
                  spiegazione={esercizio.spiegazione}
                />
              ))
            ) : (
              <p className="vuoto">Nessun esercizio disponibile per questo argomento.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DettaglioArgomento;