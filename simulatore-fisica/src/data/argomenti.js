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
      {
        id: 3,
        domanda: 'In un moto rettilineo uniforme la velocità è costante',
        risposta: true
      },
      {
        id: 4,
        domanda: 'Lo spostamento e la distanza percorsa sono sempre uguali',
        risposta: false
      },
      {
        id: 5,
        domanda: 'Nel moto circolare uniforme c\'è sempre accelerazione centripeta',
        risposta: true
      },
      {
        id: 6,
        domanda: 'La velocità angolare è misurata in metri al secondo',
        risposta: false
      },
      {
        id: 7,
        domanda: 'In un grafico spazio-tempo, la pendenza rappresenta la velocità',
        risposta: true
      },
      {
        id: 8,
        domanda: 'L\'accelerazione di gravità è costante su tutta la superficie terrestre',
        risposta: false
      },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Un\'auto parte da ferma e raggiunge la velocità di 72 km/h in 10 secondi. Calcola l\'accelerazione media.',
        soluzione: 'v = 72 km/h = 20 m/s; a = Δv/Δt = 20/10 = 2 m/s²',
        spiegazione: 'Convertiamo prima la velocità in m/s dividendo per 3.6, poi applichiamo la formula dell\'accelerazione media.'
      },
      {
        id: 2,
        testo: 'Un corpo si muove di moto rettilineo uniforme alla velocità di 15 m/s. Quale distanza percorre in 2 minuti?',
        soluzione: 't = 2 min = 120 s; s = v × t = 15 × 120 = 1800 m = 1.8 km',
        spiegazione: 'Nel moto rettilineo uniforme, la distanza è il prodotto di velocità per tempo. Ricorda di convertire i minuti in secondi.'
      },
      {
        id: 3,
        testo: 'Un oggetto viene lanciato verticalmente verso l\'alto con velocità iniziale di 20 m/s. Dopo quanto tempo raggiunge l\'altezza massima? (g = 10 m/s²)',
        soluzione: 'v_finale = 0; v_finale = v_iniziale - g×t; 0 = 20 - 10×t; t = 2 s',
        spiegazione: 'All\'altezza massima la velocità è zero. Usiamo l\'equazione del moto uniformemente accelerato.'
      },
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
      {
        id: 3,
        domanda: 'La terza legge di Newton afferma che ad ogni azione corrisponde una reazione uguale e contraria',
        risposta: true
      },
      {
        id: 4,
        domanda: 'Un corpo in movimento continua a muoversi solo se c\'è una forza applicata',
        risposta: false
      },
      {
        id: 5,
        domanda: 'La forza peso dipende dalla massa e dall\'accelerazione di gravità',
        risposta: true
      },
      {
        id: 6,
        domanda: 'L\'attrito statico è sempre minore dell\'attrito dinamico',
        risposta: false
      },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Un corpo di massa 5 kg è sottoposto a una forza di 20 N. Calcola l\'accelerazione.',
        soluzione: 'F = ma → a = F/m = 20/5 = 4 m/s²',
        spiegazione: 'Applichiamo la seconda legge di Newton risolvendo per l\'accelerazione.'
      },
      {
        id: 2,
        testo: 'Una cassa di 10 kg è appoggiata su un piano orizzontale. Calcola la forza peso. (g = 10 m/s²)',
        soluzione: 'P = m × g = 10 × 10 = 100 N',
        spiegazione: 'La forza peso è il prodotto della massa per l\'accelerazione di gravità.'
      },
      {
        id: 3,
        testo: 'Su un corpo di 8 kg agiscono due forze orizzontali: 30 N verso destra e 10 N verso sinistra. Calcola l\'accelerazione.',
        soluzione: 'F_risultante = 30 - 10 = 20 N; a = F/m = 20/8 = 2.5 m/s²',
        spiegazione: 'Prima calcoliamo la forza risultante, poi applichiamo la seconda legge di Newton.'
      },
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
      {
        id: 3,
        domanda: 'L\'energia cinetica è proporzionale al quadrato della velocità',
        risposta: true
      },
      {
        id: 4,
        domanda: 'L\'energia potenziale gravitazionale aumenta scendendo verso il basso',
        risposta: false
      },
      {
        id: 5,
        domanda: 'La potenza è il lavoro compiuto nell\'unità di tempo',
        risposta: true
      },
      {
        id: 6,
        domanda: 'Il lavoro di una forza perpendicolare allo spostamento è massimo',
        risposta: false
      },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Calcola il lavoro compiuto da una forza di 50 N che sposta un oggetto di 10 m nella stessa direzione della forza.',
        soluzione: 'L = F · s = 50 × 10 = 500 J',
        spiegazione: 'Il lavoro è il prodotto scalare tra forza e spostamento. Con forza e spostamento paralleli, L = F × s.'
      },
      {
        id: 2,
        testo: 'Calcola l\'energia cinetica di un corpo di massa 4 kg che si muove a 5 m/s.',
        soluzione: 'E_c = (1/2) × m × v² = 0.5 × 4 × 25 = 50 J',
        spiegazione: 'L\'energia cinetica si calcola con la formula E_c = (1/2)mv².'
      },
      {
        id: 3,
        testo: 'Un oggetto di 2 kg viene sollevato di 3 m. Calcola l\'energia potenziale gravitazionale. (g = 10 m/s²)',
        soluzione: 'E_p = m × g × h = 2 × 10 × 3 = 60 J',
        spiegazione: 'L\'energia potenziale gravitazionale è data dal prodotto di massa, accelerazione di gravità e altezza.'
      },
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
      {
        id: 3,
        domanda: 'Il calore specifico dell\'acqua è molto elevato',
        risposta: true
      },
      {
        id: 4,
        domanda: 'Nella dilatazione termica, i materiali si espandono sempre allo stesso modo',
        risposta: false
      },
      {
        id: 5,
        domanda: 'Il primo principio della termodinamica è una conseguenza della conservazione dell\'energia',
        risposta: true
      },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Quanta energia serve per riscaldare 2 kg di acqua da 20°C a 100°C? (c_acqua = 4186 J/(kg·°C))',
        soluzione: 'Q = m × c × ΔT = 2 × 4186 × 80 = 669760 J ≈ 670 kJ',
        spiegazione: 'Il calore necessario si calcola con la formula Q = mcΔT, dove ΔT è la variazione di temperatura.'
      },
    ]
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
      {
        id: 3,
        domanda: 'La resistenza elettrica di un conduttore aumenta con la temperatura',
        risposta: true
      },
      {
        id: 4,
        domanda: 'In un circuito in serie la corrente è diversa in ogni resistenza',
        risposta: false
      },
      {
        id: 5,
        domanda: 'Un campo magnetico può essere generato da una corrente elettrica',
        risposta: true
      },
      {
        id: 6,
        domanda: 'La legge di Ohm afferma che V = R/I',
        risposta: false
      },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Un circuito ha una resistenza di 10 Ω ed è alimentato da una tensione di 20 V. Calcola la corrente.',
        soluzione: 'V = R × I → I = V/R = 20/10 = 2 A',
        spiegazione: 'Applichiamo la legge di Ohm V = RI e risolviamo per la corrente I.'
      },
      {
        id: 2,
        testo: 'Calcola la potenza dissipata da una resistenza di 5 Ω attraversata da una corrente di 3 A.',
        soluzione: 'P = R × I² = 5 × 9 = 45 W',
        spiegazione: 'La potenza elettrica si calcola con P = RI² quando conosciamo resistenza e corrente.'
      },
    ]
  }
];

export const getArgomentoById = (id) => {
  return argomenti.find(arg => arg.id === id);
};