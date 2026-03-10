import { argomenti } from '../data/argomenti';
import CardArgomento from '../components/CardArgomento';
import '../styles/Argomenti.css';

function Argomenti() {
  return (
    <div className="argomenti-container">
      <h1>Argomenti di Fisica</h1>
      <p className="descrizione">Seleziona un argomento per iniziare a studiare</p>

      <div className="argomenti-grid">
        {argomenti.map(argomento => (
          <CardArgomento
            key={argomento.id}
            id={argomento.id}
            titolo={argomento.titolo}
            descrizione={argomento.descrizione}
            numDomande={argomento.numDomande}
            numEsercizi={argomento.numEsercizi}
          />
        ))}
      </div>
    </div>
  );
}

export default Argomenti;