// Struttura dati per gli argomenti di fisica

export const argomenti = [
  {
    id: 'cinematica',
    titolo: 'Cinematica',
    descrizione: 'Studio del moto dei corpi senza considerare le cause',
    numDomande: 15,
    numEsercizi: 10,
    domande: [
      {
        id: 1,
        domanda: 'La velocità è una grandezza vettoriale',
        risposta: true
      },
      {
        id: 2,
        domanda: 'L\'accelerazione è sempre diretta nel verso del moto',
        risposta: false
      },
      // Aggiungi altre domande qui
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Un\'auto parte da ferma e raggiunge la velocità di 72 km/h in 10 secondi. Calcola l\'accelerazione media.',
        soluzione: 'v = 72 km/h = 20 m/s; a = Δv/Δt = 20/10 = 2 m/s²',
        spiegazione: 'Convertiamo prima la velocità in m/s dividendo per 3.6, poi applichiamo la formula dell\'accelerazione media.'
      },
      // Aggiungi altri esercizi qui
    ]
  },
  {
    id: 'dinamica',
    titolo: 'Dinamica',
    descrizione: 'Studio delle cause del moto (forze)',
    numDomande: 20,
    numEsercizi: 15,
    domande: [
      {
        id: 1,
        domanda: 'La seconda legge di Newton afferma che F = ma',
        risposta: true
      },
      {
        id: 2,
        domanda: 'La forza di attrito è sempre trascurabile',
        risposta: false
      },
      // Aggiungi altre domande qui
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Un corpo di massa 5 kg è sottoposto a una forza di 20 N. Calcola l\'accelerazione.',
        soluzione: 'F = ma → a = F/m = 20/5 = 4 m/s²',
        spiegazione: 'Applichiamo la seconda legge di Newton risolvendo per l\'accelerazione.'
      },
      // Aggiungi altri esercizi qui
    ]
  },
  {
    id: 'energia',
    titolo: 'Energia e Lavoro',
    descrizione: 'Concetti di energia, lavoro e potenza',
    numDomande: 18,
    numEsercizi: 12,
    domande: [
      {
        id: 1,
        domanda: 'L\'energia si conserva in un sistema isolato',
        risposta: true
      },
      {
        id: 2,
        domanda: 'Il lavoro è una grandezza vettoriale',
        risposta: false
      },
      // Aggiungi altre domande qui
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Calcola il lavoro compiuto da una forza di 50 N che sposta un oggetto di 10 m nella stessa direzione della forza.',
        soluzione: 'L = F · s = 50 × 10 = 500 J',
        spiegazione: 'Il lavoro è il prodotto scalare tra forza e spostamento. Con forza e spostamento paralleli, L = F × s.'
      },
      // Aggiungi altri esercizi qui
    ]
  },
  {
    id: 'termodinamica',
    titolo: 'Termodinamica',
    descrizione: 'Studio del calore e della temperatura',
    numDomande: 16,
    numEsercizi: 11,
    domande: [
      {
        id: 1,
        domanda: 'Il calore fluisce spontaneamente dal corpo più caldo a quello più freddo',
        risposta: true
      },
      {
        id: 2,
        domanda: 'La temperatura è una misura dell\'energia totale di un sistema',
        risposta: false
      },
      // Aggiungi altre domande qui
    ],
    esercizi: []
  },
  {
    id: 'elettromagnetismo',
    titolo: 'Elettromagnetismo',
    descrizione: 'Fenomeni elettrici e magnetici',
    numDomande: 22,
    numEsercizi: 14,
    domande: [
      {
        id: 1,
        domanda: 'Cariche dello stesso segno si respingono',
        risposta: true
      },
      {
        id: 2,
        domanda: 'La corrente elettrica è un flusso di protoni',
        risposta: false
      },
      // Aggiungi altre domande qui
    ],
    esercizi: []
  }
];

export const getArgomentoById = (id) => {
  return argomenti.find(arg => arg.id === id);
};