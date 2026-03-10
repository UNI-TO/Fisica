// Struttura dati per gli esami simulati

export const esami = [
  {
    id: 'esame-completo-1',
    titolo: 'Esame Completo - Sessione 1',
    descrizione: 'Esame che copre tutti gli argomenti del corso',
    durata: 90, // minuti
    domande: [
      {
        id: 1,
        domanda: 'La velocità è definita come la derivata della posizione rispetto al tempo',
        risposta: true
      },
      {
        id: 2,
        domanda: 'Un corpo in moto rettilineo uniforme ha accelerazione costante diversa da zero',
        risposta: false
      },
      {
        id: 3,
        domanda: 'La forza peso è direttamente proporzionale alla massa',
        risposta: true
      },
      {
        id: 4,
        domanda: 'L\'energia cinetica dipende linearmente dalla velocità',
        risposta: false
      },
      {
        id: 5,
        domanda: 'Il rendimento di una macchina termica ideale è sempre minore di 1',
        risposta: true
      },
      // Aggiungi altre domande qui
    ]
  },
  {
    id: 'esame-parziale-meccanica',
    titolo: 'Esame Parziale - Meccanica',
    descrizione: 'Esame su cinematica, dinamica ed energia',
    durata: 60,
    domande: [
      {
        id: 1,
        domanda: 'Lo spostamento è sempre uguale allo spazio percorso',
        risposta: false
      },
      {
        id: 2,
        domanda: 'La terza legge di Newton afferma che ad ogni azione corrisponde una reazione uguale e contraria',
        risposta: true
      },
      {
        id: 3,
        domanda: 'L\'energia potenziale gravitazionale aumenta con l\'altezza',
        risposta: true
      },
      // Aggiungi altre domande qui
    ]
  }
];

export const getEsameById = (id) => {
  return esami.find(esame => esame.id === id);
};