import { useState } from 'react';
import { Link } from 'react-router-dom';
import katex from 'katex';
import { sezioniFormulario } from '../data/formulario';
import '../styles/Formulario.css';

const renderLatex = (str) => {
  try {
    return katex.renderToString(str, { throwOnError: false, displayMode: true });
  } catch {
    return str;
  }
};

function Formulario() {
  const [sezioneAperta, setSezioneAperta] = useState('elettrostatica');

  return (
    <div className="formulario-container">
      <Link to="/" className="back-link">← Home</Link>

      <header className="formulario-header">
        <h1>Formulario</h1>
        <p>Tutte le formule del corso — clicca su una sezione per espanderla</p>
      </header>

      <div className="formulario-body">
        <nav className="formulario-nav">
          {sezioniFormulario.map(sez => (
            <button
              key={sez.id}
              className={`nav-sez-btn ${sezioneAperta === sez.id ? 'attiva' : ''}`}
              onClick={() => setSezioneAperta(sez.id)}
            >
              {sez.titolo}
            </button>
          ))}
        </nav>

        <div className="formulario-content">
          {sezioniFormulario.map(sez => (
            sezioneAperta === sez.id && (
              <div key={sez.id} className="sezione-formule">
                <h2>{sez.titolo}</h2>
                {sez.formule.map((f, i) => (
                  <div key={i} className="formula-card">
                    <p className="formula-descrizione">{f.descrizione}</p>
                    <div
                      className="formula-latex"
                      dangerouslySetInnerHTML={{ __html: renderLatex(f.latex) }}
                    />
                  </div>
                ))}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Formulario;
