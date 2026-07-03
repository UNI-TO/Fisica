// Temi per lo scritto — estratti da ListaTemiScritto.pdf

export const temiEsame = [
  {
    id: 1,
    titolo: 'Legge di Coulomb e principio di sovrapposizione',
    descrizione: 'La legge di Coulomb ed il principio di sovrapposizione. Come esempio calcolare il campo di un dipolo elettrico sul piano mediano del dipolo oppure lungo l\'asse del dipolo.',
    argomento: 'Elettrostatica',
  },
  {
    id: 2,
    titolo: 'Campo di una distribuzione lineare di carica (Gauss)',
    descrizione: 'Calcolare il campo elettrostatico di una distribuzione lineare ed uniforme di carica elettrica mediante il teorema di Gauss.',
    argomento: 'Elettrostatica',
  },
  {
    id: 3,
    titolo: 'Campo di una distribuzione piana di carica (Gauss)',
    descrizione: 'Calcolare il campo elettrostatico di una distribuzione piana ed uniforme di carica elettrica mediante il teorema di Gauss.',
    argomento: 'Elettrostatica',
  },
  {
    id: 4,
    titolo: 'Dipolo elettrico',
    descrizione: 'Definire cos\'è un dipolo elettrico e calcolare il campo elettrico sull\'asse del dipolo ed il potenziale che questo produce.',
    argomento: 'Elettrostatica',
  },
  {
    id: 5,
    titolo: 'Conservatività della forza di Coulomb',
    descrizione: 'Dimostrare che la forza di Coulomb è una forza conservativa e discutere brevemente le conseguenze di questo fatto.',
    argomento: 'Elettrostatica',
  },
  {
    id: 6,
    titolo: 'Potenziale, energia potenziale e lavoro del campo elettrico',
    descrizione: 'Definire potenziale, energia potenziale e lavoro del campo elettrico e mostrare le relazioni tra queste grandezze.',
    argomento: 'Elettrostatica',
  },
  {
    id: 7,
    titolo: 'Condensatore piano',
    descrizione: 'Condensatore piano: calcolare l\'andamento del campo elettrico e del potenziale dentro e fuori il condensatore e la sua capacità.',
    argomento: 'Circuiti',
  },
  {
    id: 8,
    titolo: 'Resistori in serie e in parallelo',
    descrizione: 'Spiegazione del comportamento di resistori in serie ed in parallelo. Determinazione della resistenza equivalente.',
    argomento: 'Circuiti',
  },
  {
    id: 9,
    titolo: 'Condensatori in serie e in parallelo',
    descrizione: 'Spiegazione del comportamento di condensatori in serie ed in parallelo. Determinazione della capacità equivalente.',
    argomento: 'Circuiti',
  },
  {
    id: 10,
    titolo: 'Circuiti RC: carica e scarica',
    descrizione: 'Circuiti RC: carica e scarica del condensatore. Comportamento alla stazionarietà.',
    argomento: 'Circuiti',
  },
  {
    id: 11,
    titolo: 'Legge di Ohm microscopica e macroscopica',
    descrizione: 'Legge di Ohm microscopica e derivazione della legge macroscopica a partire da quella microscopica.',
    argomento: 'Circuiti',
  },
  {
    id: 12,
    titolo: 'Moto di una carica in campo magnetico uniforme',
    descrizione: 'Descrivere le equazioni del moto di una carica elettrica in un campo magnetico uniforme.',
    argomento: 'Magnetismo',
  },
  {
    id: 13,
    titolo: 'Forza tra fili paralleli percorsi da corrente',
    descrizione: 'Determinare la forza tra due fili rettilinei paralleli percorsi da correnti stazionarie e discutere la relazione con la terza legge di Newton.',
    argomento: 'Magnetismo',
  },
  {
    id: 14,
    titolo: 'Legge di Biot-Savart — campo di una spira',
    descrizione: 'Enunciare la legge di Biot-Savart ed usarla per il calcolo del campo magnetico prodotto da una spira circolare percorsa da corrente stazionaria sull\'asse della spira.',
    argomento: 'Magnetismo',
  },
  {
    id: 15,
    titolo: 'Legge di Ampere — campo di un solenoide',
    descrizione: 'Enunciare la legge di Ampere ed usarla per il calcolo del campo magnetico all\'interno di un solenoide rettilineo percorso da corrente stazionaria.',
    argomento: 'Magnetismo',
  },
  {
    id: 16,
    titolo: 'Legge di Faraday-Lenz e autoinduttanza',
    descrizione: 'Enunciare la legge di Faraday-Lenz e discutere la relazione con l\'autoinduttanza.',
    argomento: 'Induzione',
  },
  {
    id: 17,
    titolo: 'Dispositivo NMOS — porta logica NOR',
    descrizione: 'Descrivere la struttura di un dispositivo NMOS, il suo funzionamento come interruttore controllato (controlled switch) ed il funzionamento di una porta logica NOR realizzata con dispositivi NMOS.',
    argomento: 'Elettronica',
  },
  {
    id: 18,
    titolo: 'Dispositivo NMOS — porta logica NAND',
    descrizione: 'Descrivere la struttura di un dispositivo NMOS, il suo funzionamento come interruttore controllato (controlled switch) ed il funzionamento di una porta logica NAND realizzata con dispositivi NMOS.',
    argomento: 'Elettronica',
  },
];

export const argomentiTemi = [...new Set(temiEsame.map(t => t.argomento))];
