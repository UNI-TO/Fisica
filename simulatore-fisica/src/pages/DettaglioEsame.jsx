import { useParams, Link } from 'react-router-dom';
import { getEsameById } from '../data/esami';
import Esame from '../components/Esame';
import '../styles/DettaglioEsame.css';

function DettaglioEsame() {
  const { id } = useParams();
  const esame = getEsameById(id);

  if (!esame) {
    return (
      <div className="errore-container">
        <h2>Esame non trovato</h2>
        <Link to="/esami">Torna agli esami</Link>
      </div>
    );
  }

  const handleCompletamento = (risposte) => {
    console.log('Esame completato:', risposte);
    // Qui potresti salvare i risultati, ad esempio in localStorage
  };

  return (
    <div className="dettaglio-esame-container">
      <Link to="/esami" className="back-link">← Torna agli esami</Link>
      <Esame
        titolo={esame.titolo}
        domande={esame.domande}
        onCompletamento={handleCompletamento}
      />
    </div>
  );
}

export default DettaglioEsame;