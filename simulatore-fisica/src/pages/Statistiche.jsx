import { Link } from 'react-router-dom';
import { getProgress, getGlobalStats, calculateAccuracy } from '../utils/progressManager';
import { argomenti } from '../data/argomenti';
import { esami } from '../data/esami';
import '../styles/Statistiche.css';

function Statistiche() {
  const progress = getProgress();
  const stats = getGlobalStats();
  const accuracyGlobale = calculateAccuracy(stats.domandeCorrette, stats.totaleDomande);

  return (
    <div className="statistiche-container">
      <Link to="/" className="back-link">← Torna alla home</Link>

      <header className="statistiche-header">
        <h1>Le tue Statistiche</h1>
        <p>Monitora i tuoi progressi nello studio della fisica</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Accuratezza Globale</h3>
          <div className="stat-value">{accuracyGlobale}%</div>
          <p className="stat-detail">
            {stats.domandeCorrette} corrette su {stats.totaleDomande}
          </p>
        </div>

        <div className="stat-card">
          <h3>Esercizi Completati</h3>
          <div className="stat-value">{stats.eserciziCompletati}</div>
        </div>

        <div className="stat-card">
          <h3>Esami Sostenuti</h3>
          <div className="stat-value">
            {Object.keys(progress.esami).reduce((sum, key) => sum + progress.esami[key].tentativiFatti, 0)}
          </div>
        </div>

        <div className="stat-card">
          <h3>Ultima Attività</h3>
          <div className="stat-value">
            {progress.ultimaAttivita
              ? new Date(progress.ultimaAttivita).toLocaleDateString('it-IT')
              : 'Nessuna attività'
            }
          </div>
        </div>
      </div>

      <section className="argomenti-progresso">
        <h2>Progressi per Argomento</h2>
        <div className="argomenti-lista">
          {argomenti.map(argomento => {
            const argStats = progress.argomenti[argomento.id] || {
              domandeRisposte: 0,
              domandeCorrette: 0,
              eserciziCompletati: 0
            };
            const accuracy = calculateAccuracy(argStats.domandeCorrette, argStats.domandeRisposte);

            return (
              <div key={argomento.id} className="argomento-progresso-card">
                <h3>{argomento.titolo}</h3>
                <div className="progresso-dettagli">
                  <div className="progresso-item">
                    <span className="label">Domande risposte:</span>
                    <span className="value">{argStats.domandeRisposte}</span>
                  </div>
                  <div className="progresso-item">
                    <span className="label">Accuratezza:</span>
                    <span className="value">{argStats.domandeRisposte > 0 ? `${accuracy}%` : 'N/A'}</span>
                  </div>
                  <div className="progresso-item">
                    <span className="label">Esercizi completati:</span>
                    <span className="value">{argStats.eserciziCompletati}</span>
                  </div>
                </div>
                <div className="progresso-barra-container">
                  <div
                    className="progresso-barra-fill"
                    style={{
                      width: `${accuracy}%`,
                      backgroundColor: accuracy >= 75 ? '#4caf50' : accuracy >= 50 ? '#ff9800' : '#f44336'
                    }}
                  />
                </div>
                <Link to={`/argomento/${argomento.id}`} className="studia-btn">
                  Studia
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="esami-storico">
        <h2>Storico Esami</h2>
        <div className="esami-lista">
          {esami.map(esame => {
            const esameStats = progress.esami[esame.id] || {
              tentativiFatti: 0,
              migliorPunteggio: 0,
              ultimoTentativo: null
            };

            return (
              <div key={esame.id} className="esame-storico-card">
                <h3>{esame.titolo}</h3>
                <div className="esame-stats">
                  <div className="stat-row">
                    <span>Tentativi:</span>
                    <strong>{esameStats.tentativiFatti}</strong>
                  </div>
                  <div className="stat-row">
                    <span>Miglior punteggio:</span>
                    <strong>{esameStats.migliorPunteggio}%</strong>
                  </div>
                  {esameStats.ultimoTentativo && (
                    <>
                      <div className="stat-row">
                        <span>Ultimo tentativo:</span>
                        <strong>
                          {new Date(esameStats.ultimoTentativo.data).toLocaleDateString('it-IT')}
                        </strong>
                      </div>
                      <div className="stat-row">
                        <span>Ultimo punteggio:</span>
                        <strong>{esameStats.ultimoTentativo.punteggio}%</strong>
                      </div>
                    </>
                  )}
                </div>
                <Link to={`/esame/${esame.id}`} className="rifai-esame-btn">
                  {esameStats.tentativiFatti > 0 ? 'Rifai esame' : 'Inizia esame'}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Statistiche;
