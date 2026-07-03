import { Link } from 'react-router-dom';
import { esamiReali } from '../data/esami-reali';
import '../styles/EsamiReali.css';

function EsamiReali() {
  return (
    <div className="esami-reali-container">
      <header className="esami-reali-header">
        <h1>Esami Reali</h1>
        <p>Domande a scelta multipla tratte da sessioni d'esame reali, con formule matematiche e spiegazioni</p>
      </header>

      <div className="esami-reali-lista">
        {esamiReali.map(esame => (
          <div key={esame.id} className="esame-reale-card">
            <div className="esame-reale-anno">{esame.anno}</div>
            <h2>{esame.titolo}</h2>
            <p>{esame.descrizione}</p>
            <div className="esame-reale-meta">
              <span>📋 {esame.domande.length} domande</span>
              <span>🔢 Scelta multipla</span>
            </div>
            <Link to={`/esame-reale/${esame.id}`} className="inizia-esame-reale-btn">
              Inizia esame
            </Link>
          </div>
        ))}
      </div>

      <div className="esami-reali-info">
        <h3>ℹ️ Come funzionano</h3>
        <ul>
          <li>Ogni domanda ha 5 opzioni con formule matematiche</li>
          <li>Seleziona la risposta che ritieni corretta</li>
          <li>Dopo la selezione viene mostrata la risposta corretta e una spiegazione</li>
          <li>Al termine ricevi il punteggio finale</li>
        </ul>
      </div>
    </div>
  );
}

export default EsamiReali;
