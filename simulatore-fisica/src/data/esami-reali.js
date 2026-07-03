// Domande tratte da sessioni d'esame reali — formato a scelta multipla con LaTeX
// Le risposte sono formule matematiche da renderizzare con KaTeX

export const esamiReali = [
  {
    id: 'sessione-elettrostatica-circuiti',
    titolo: 'Sessione Esame — Elettrostatica e Circuiti',
    descrizione: 'Domande a scelta multipla tratte da sessione d\'esame reale. Argomenti: campo elettrico, potenziale, circuiti RL.',
    anno: '2024/25',
    domande: [
      {
        id: 1,
        testo: 'Nel piano xy, nell\'origine è posta una carica q_A = Q; nel punto B = (ℓ, 0) con ℓ > 0 è posta una carica q_B = Q/√2; nel punto L = (0, −ℓ) è posto un filo infinito parallelo all\'asse z. Calcolare il potenziale elettrico nel punto L, sapendo che il potenziale all\'infinito è nullo.',
        opzioni: [
          { id: 'a', testo: '+k_e \\dfrac{2Q}{\\ell}' },
          { id: 'b', testo: '-k_e \\dfrac{2Q}{\\ell}' },
          { id: 'c', testo: '+k_e \\dfrac{3Q}{2\\ell}' },
          { id: 'd', testo: '+k_e \\dfrac{Q}{2\\ell}' },
          { id: 'e', testo: '-k_e \\dfrac{Q}{2\\ell}' },
        ],
        rispostaCorretta: 'c',
        spiegazione: 'Il potenziale in L è la sovrapposizione dei contributi di q_A (distanza ℓ) e q_B (distanza √2·ℓ). Il filo infinito contribuisce solo al campo, non al potenziale in senso finito (V filo = infinito se non si usa un riferimento), ma nel contesto del problema si considera il contributo delle sole cariche puntiformi.',
      },
      {
        id: 2,
        testo: 'Con la stessa geometria della domanda precedente (q_A in O, q_B in B, filo in L), calcolare il campo elettrico \\(\\vec{E}\\) nel punto L.',
        opzioni: [
          { id: 'a', testo: '+k_e\\dfrac{Q}{\\ell^2}\\!\\left[\\dfrac{2\\sqrt{2}}{4}\\,\\hat{i}+\\dfrac{1}{4}\\,\\hat{j}\\right]' },
          { id: 'b', testo: '+k_e\\dfrac{Q}{\\ell^2}\\!\\left[\\dfrac{1}{4}\\,\\hat{i}+\\dfrac{5}{4}\\,\\hat{j}\\right]' },
          { id: 'c', testo: '-k_e\\dfrac{Q}{\\ell^2}\\!\\left[\\dfrac{2\\sqrt{2}}{4}\\,\\hat{i}+\\dfrac{1}{4}\\,\\hat{j}\\right]' },
          { id: 'd', testo: '-k_e\\dfrac{Q}{\\ell^2}\\!\\left[\\dfrac{1}{4}\\,\\hat{i}+\\dfrac{5}{4}\\,\\hat{j}\\right]' },
          { id: 'e', testo: '-k_e\\dfrac{Q}{\\ell^2}\\!\\left[\\dfrac{\\sqrt{2}}{4}\\,\\hat{i}+\\dfrac{\\sqrt{2}}{4}\\,\\hat{j}\\right]' },
        ],
        rispostaCorretta: 'd',
        spiegazione: 'Si sommano vettorialmente i campi di q_A e q_B nel punto L. Il campo di q_A in L è diretto lungo -ĵ con modulo k_e Q/ℓ². Il campo di q_B in L (distanza √2·ℓ, direzione B→L = (-1,−1)/√2 normalizzato) contribuisce con le componenti i e j. La sovrapposizione dà il risultato.',
      },
      {
        id: 3,
        testo: 'Sempre con la stessa geometria, il filo in L è ora percorso da una corrente I nella direzione −k̂. Calcolare il campo magnetico \\(\\vec{B}\\) nell\'origine O.',
        opzioni: [
          { id: 'a', testo: '2\\,k_m\\dfrac{I}{\\ell}\\,\\hat{i}' },
          { id: 'b', testo: '-2\\,k_m\\dfrac{I}{\\ell}\\,\\hat{k}' },
          { id: 'c', testo: '-2\\,k_m\\dfrac{I}{\\ell}\\,\\hat{j}' },
          { id: 'd', testo: '2\\,k_m\\dfrac{I}{\\ell}\\,\\hat{j}' },
          { id: 'e', testo: '-2\\,k_m\\dfrac{I}{\\ell}\\,\\hat{i}' },
        ],
        rispostaCorretta: 'a',
        spiegazione: 'Per la legge di Biot-Savart per un filo infinito, B = 2k_m I/r. Il filo è in L=(0,−ℓ), la distanza dall\'origine è ℓ. La corrente è in direzione −k̂; il versore dal filo verso l\'origine è +ĵ. Usando B = (μ₀I/2πr)(î_L × r̂), si ottiene B = 2k_m I/ℓ · î.',
      },
      {
        id: 4,
        testo: 'Un circuito RL è in condizioni stazionarie con l\'interruttore T aperto. All\'istante t = 0 l\'interruttore T viene chiuso. Determinare la corrente i₀ che scorreva nel circuito immediatamente PRIMA della chiusura di T.',
        opzioni: [
          { id: 'a', testo: '-\\dfrac{V_0}{R}' },
          { id: 'b', testo: '\\dfrac{V_0}{2R}' },
          { id: 'c', testo: '\\dfrac{V_0}{R}' },
          { id: 'd', testo: '-\\dfrac{V_0}{2R}' },
          { id: 'e', testo: '0' },
        ],
        rispostaCorretta: 'c',
        spiegazione: 'Prima della chiusura, il circuito è stazionario con T aperto: l\'induttore si comporta come un filo, la corrente scorre attraverso la resistenza R con tensione V₀. Quindi i₀ = V₀/R.',
      },
      {
        id: 5,
        testo: 'Stesso circuito RL. Determinare la differenza di potenziale V_A − V_B ai capi dell\'induttore immediatamente PRIMA della chiusura di T.',
        opzioni: [
          { id: 'a', testo: '\\dfrac{V_0}{2}' },
          { id: 'b', testo: '-2V_0' },
          { id: 'c', testo: '-\\dfrac{V_0}{2}' },
          { id: 'd', testo: '2V_0' },
          { id: 'e', testo: '0' },
        ],
        rispostaCorretta: 'e',
        spiegazione: 'A regime stazionario, nessuna variazione di corrente → nessuna f.e.m. indotta nell\'induttore. La caduta di tensione ai capi dell\'induttore ideale è V_A − V_B = L·(dI/dt) = 0.',
      },
      {
        id: 6,
        testo: 'Stesso circuito RL. Dopo la chiusura di T il circuito raggiunge un nuovo regime stazionario. Se poi T viene riaperto, determinare la differenza di potenziale V_A − V_B ai capi dell\'induttore L alla nuova stazionarietà.',
        opzioni: [
          { id: 'a', testo: '-\\dfrac{2V_0}{3}' },
          { id: 'b', testo: '-2V_0' },
          { id: 'c', testo: '2V_0' },
          { id: 'd', testo: '0' },
          { id: 'e', testo: '\\dfrac{2V_0}{3}' },
        ],
        rispostaCorretta: 'a',
        spiegazione: 'Alla nuova stazionarietà con T riaperto, la corrente nel circuito si ridistribuisce tra le resistenze. Calcolando la corrente stazionaria nel nuovo ramo e la caduta sull\'induttore (che a regime è un cortocircuito), si ottiene V_A − V_B = −2V₀/3.',
      },
    ],
  },
];

export const getEsameRealeById = (id) => esamiReali.find(e => e.id === id);
