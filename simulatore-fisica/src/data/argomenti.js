export const argomenti = [
  {
    id: 'cinematica',
    titolo: 'Cinematica',
    descrizione: 'Studio del moto dei corpi senza considerare le cause',
    domande: [
      { id: 1,  domanda: 'La velocità è una grandezza vettoriale', risposta: true },
      { id: 2,  domanda: "L'accelerazione è sempre diretta nel verso del moto", risposta: false },
      { id: 3,  domanda: 'In un moto rettilineo uniforme la velocità è costante', risposta: true },
      { id: 4,  domanda: 'Lo spostamento e la distanza percorsa sono sempre uguali', risposta: false },
      { id: 5,  domanda: "Nel moto circolare uniforme c'è sempre accelerazione centripeta", risposta: true },
      { id: 6,  domanda: 'La velocità angolare è misurata in metri al secondo', risposta: false },
      { id: 7,  domanda: 'In un grafico spazio-tempo, la pendenza rappresenta la velocità', risposta: true },
      { id: 8,  domanda: "L'accelerazione di gravità è costante su tutta la superficie terrestre", risposta: false },
      { id: 9,  domanda: 'La posizione di un corpo in moto rettilineo uniforme varia linearmente nel tempo', risposta: true },
      { id: 10, domanda: 'In un moto circolare uniforme il vettore velocità è costante', risposta: false },
      { id: 11, domanda: "L'accelerazione di un corpo in caduta libera è circa 9,81 m/s² verso il basso", risposta: true },
      { id: 12, domanda: 'Nel moto parabolico la traiettoria è una parabola', risposta: true },
      { id: 13, domanda: 'In un moto rettilineo, velocità e accelerazione hanno sempre lo stesso verso', risposta: false },
      { id: 14, domanda: 'La velocità media è sempre uguale alla velocità istantanea', risposta: false },
      { id: 15, domanda: 'In un moto uniformemente accelerato, lo spazio percorso è proporzionale al quadrato del tempo (partendo da fermo)', risposta: true },
    ],
    esercizi: [
      {
        id: 1,
        testo: "Un'auto parte da ferma e raggiunge la velocità di 72 km/h in 10 secondi. Calcola l'accelerazione media.",
        soluzione: 'v = 72 km/h = 20 m/s; a = Δv/Δt = 20/10 = 2 m/s²',
        spiegazione: "Convertiamo prima la velocità in m/s dividendo per 3,6, poi applichiamo la formula dell'accelerazione media."
      },
      {
        id: 2,
        testo: 'Un corpo si muove di moto rettilineo uniforme alla velocità di 15 m/s. Quale distanza percorre in 2 minuti?',
        soluzione: 't = 2 min = 120 s; s = v × t = 15 × 120 = 1800 m = 1,8 km',
        spiegazione: 'Nel moto rettilineo uniforme, la distanza è il prodotto di velocità per tempo. Ricorda di convertire i minuti in secondi.'
      },
      {
        id: 3,
        testo: 'Un oggetto viene lanciato verticalmente verso l\'alto con velocità iniziale di 20 m/s. Dopo quanto tempo raggiunge l\'altezza massima? (g = 10 m/s²)',
        soluzione: 'v_finale = 0; 0 = 20 − 10×t → t = 2 s',
        spiegazione: "All'altezza massima la velocità è zero. Usiamo l'equazione del moto uniformemente accelerato."
      },
      {
        id: 4,
        testo: "Un'auto percorre 300 km in 3 ore a velocità costante. Calcola la velocità media.",
        soluzione: 'v = s/t = 300/3 = 100 km/h ≈ 27,8 m/s',
        spiegazione: 'Nel moto uniforme la velocità media è il rapporto tra spazio percorso e tempo impiegato.'
      },
      {
        id: 5,
        testo: 'Un corpo in caduta libera parte da fermo. Calcola la velocità raggiunta dopo 4 secondi. (g = 10 m/s²)',
        soluzione: 'v = g·t = 10 × 4 = 40 m/s',
        spiegazione: "In caduta libera l'unica accelerazione è quella di gravità, costante e diretta verso il basso."
      },
      {
        id: 6,
        testo: 'Un corpo percorre i primi 100 m con velocità 20 m/s e i successivi 100 m con velocità 10 m/s. Calcola la velocità media.',
        soluzione: 't₁ = 100/20 = 5 s; t₂ = 100/10 = 10 s; v_media = 200/15 ≈ 13,3 m/s',
        spiegazione: 'La velocità media è spazio totale diviso tempo totale, non la media aritmetica delle velocità.'
      },
      {
        id: 7,
        testo: 'Una ruota gira a 3 giri al secondo. Calcola la velocità angolare in rad/s.',
        soluzione: 'ω = 2π × 3 = 6π ≈ 18,85 rad/s',
        spiegazione: 'Ogni giro completo corrisponde a 2π radianti, quindi si moltiplica la frequenza per 2π.'
      },
      {
        id: 8,
        testo: 'Un proiettile viene lanciato orizzontalmente con velocità 30 m/s da un\'altezza di 45 m. Dopo quanto tempo tocca terra? (g = 10 m/s²)',
        soluzione: 'h = ½g·t² → t = √(2h/g) = √(90/10) = 3 s',
        spiegazione: 'Il moto verticale è una caduta libera indipendente dal moto orizzontale. Usiamo h = ½gt².'
      },
    ]
  },
  {
    id: 'dinamica',
    titolo: 'Dinamica',
    descrizione: 'Studio delle cause del moto (forze)',
    domande: [
      { id: 1,  domanda: 'La seconda legge di Newton afferma che F = ma', risposta: true },
      { id: 2,  domanda: 'La forza di attrito è sempre trascurabile', risposta: false },
      { id: 3,  domanda: 'La terza legge di Newton afferma che ad ogni azione corrisponde una reazione uguale e contraria', risposta: true },
      { id: 4,  domanda: "Un corpo in movimento continua a muoversi solo se c'è una forza applicata", risposta: false },
      { id: 5,  domanda: "La forza peso dipende dalla massa e dall'accelerazione di gravità", risposta: true },
      { id: 6,  domanda: "L'attrito statico è sempre minore dell'attrito dinamico", risposta: false },
      { id: 7,  domanda: 'La forza elastica di una molla è proporzionale alla deformazione (legge di Hooke)', risposta: true },
      { id: 8,  domanda: 'Il coefficiente di attrito dipende dalla velocità relativa tra le superfici', risposta: false },
      { id: 9,  domanda: 'In un sistema di riferimento non inerziale appaiono forze fittizie', risposta: true },
      { id: 10, domanda: 'La forza normale su un piano orizzontale è sempre uguale al peso del corpo', risposta: false },
      { id: 11, domanda: 'La massa inerziale e la massa gravitazionale sono equivalenti', risposta: true },
      { id: 12, domanda: "Il momento di una forza dipende sia dall'intensità della forza che dal braccio", risposta: true },
      { id: 13, domanda: "L'impulso di una forza è uguale alla variazione della quantità di moto", risposta: true },
      { id: 14, domanda: 'Un corpo può essere in equilibrio anche se su di esso agiscono più forze diverse da zero', risposta: true },
      { id: 15, domanda: 'La forza di attrito dinamico dipende dalla velocità relativa tra le superfici (per velocità moderate)', risposta: false },
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
        spiegazione: "La forza peso è il prodotto della massa per l'accelerazione di gravità."
      },
      {
        id: 3,
        testo: 'Su un corpo di 8 kg agiscono due forze orizzontali: 30 N verso destra e 10 N verso sinistra. Calcola l\'accelerazione.',
        soluzione: 'F_risultante = 30 − 10 = 20 N; a = F/m = 20/8 = 2,5 m/s²',
        spiegazione: 'Prima calcoliamo la forza risultante, poi applichiamo la seconda legge di Newton.'
      },
      {
        id: 4,
        testo: "Un'auto di 1000 kg accelera da 0 a 90 km/h in 9 secondi. Calcola la forza media applicata.",
        soluzione: 'v = 90 km/h = 25 m/s; a = 25/9 ≈ 2,78 m/s²; F = ma = 1000 × 2,78 ≈ 2780 N',
        spiegazione: 'Convertiamo la velocità, calcoliamo l\'accelerazione media e applichiamo F = ma.'
      },
      {
        id: 5,
        testo: 'Una cassa di 20 kg scivola su un piano orizzontale con coefficiente di attrito dinamico μ = 0,3. Calcola la forza di attrito. (g = 10 m/s²)',
        soluzione: 'N = mg = 200 N; F_attrito = μ × N = 0,3 × 200 = 60 N',
        spiegazione: 'La forza di attrito dinamico è il prodotto del coefficiente di attrito per la forza normale.'
      },
      {
        id: 6,
        testo: 'Calcola il momento di una forza di 40 N applicata perpendicolarmente a una leva di lunghezza 0,5 m.',
        soluzione: 'M = F × d = 40 × 0,5 = 20 N·m',
        spiegazione: 'Il momento di una forza è il prodotto della forza per il braccio perpendicolare.'
      },
      {
        id: 7,
        testo: 'Un corpo di 2 kg era fermo e riceve un impulso di 30 N·s. Calcola la velocità finale.',
        soluzione: 'J = Δp = m·Δv → 30 = 2·v → v = 15 m/s',
        spiegazione: "L'impulso è uguale alla variazione della quantità di moto."
      },
      {
        id: 8,
        testo: 'Un corpo di 5 kg è su un piano inclinato di 30° senza attrito. Calcola la sua accelerazione. (g = 10 m/s²)',
        soluzione: 'F_parallela = m·g·sin(30°) = 5 × 10 × 0,5 = 25 N; a = F/m = 25/5 = 5 m/s²',
        spiegazione: 'Sul piano inclinato senza attrito, la forza netta è la componente del peso parallela al piano.'
      },
    ]
  },
  {
    id: 'energia',
    titolo: 'Energia e Lavoro',
    descrizione: 'Concetti di energia, lavoro e potenza',
    domande: [
      { id: 1,  domanda: "L'energia si conserva in un sistema isolato", risposta: true },
      { id: 2,  domanda: 'Il lavoro è una grandezza vettoriale', risposta: false },
      { id: 3,  domanda: "L'energia cinetica è proporzionale al quadrato della velocità", risposta: true },
      { id: 4,  domanda: "L'energia potenziale gravitazionale aumenta scendendo verso il basso", risposta: false },
      { id: 5,  domanda: "La potenza è il lavoro compiuto nell'unità di tempo", risposta: true },
      { id: 6,  domanda: 'Il lavoro di una forza perpendicolare allo spostamento è massimo', risposta: false },
      { id: 7,  domanda: "Il teorema lavoro-energia afferma che il lavoro totale su un corpo è uguale alla variazione della sua energia cinetica", risposta: true },
      { id: 8,  domanda: "L'energia potenziale elastica è nulla quando la molla è alla lunghezza naturale", risposta: true },
      { id: 9,  domanda: "In una collisione anelastica l'energia cinetica totale si conserva", risposta: false },
      { id: 10, domanda: 'Il watt è l\'unità di misura dell\'energia', risposta: false },
      { id: 11, domanda: 'Un corpo che si muove a velocità doppia ha energia cinetica quadrupla', risposta: true },
      { id: 12, domanda: 'Il lavoro della forza di attrito è sempre negativo', risposta: true },
      { id: 13, domanda: "L'energia potenziale gravitazionale dipende dalla scelta del livello di riferimento", risposta: true },
      { id: 14, domanda: "La conservazione dell'energia meccanica vale anche in presenza di forze di attrito", risposta: false },
      { id: 15, domanda: 'La potenza media è il rapporto tra lavoro compiuto e tempo impiegato', risposta: true },
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
        testo: "Calcola l'energia cinetica di un corpo di massa 4 kg che si muove a 5 m/s.",
        soluzione: 'E_c = ½ × m × v² = 0,5 × 4 × 25 = 50 J',
        spiegazione: "L'energia cinetica si calcola con la formula E_c = ½mv²."
      },
      {
        id: 3,
        testo: "Un oggetto di 2 kg viene sollevato di 3 m. Calcola l'energia potenziale gravitazionale. (g = 10 m/s²)",
        soluzione: 'E_p = m × g × h = 2 × 10 × 3 = 60 J',
        spiegazione: "L'energia potenziale gravitazionale è data dal prodotto di massa, accelerazione di gravità e altezza."
      },
      {
        id: 4,
        testo: 'Una pallina da 0,5 kg viene lanciata verticalmente verso l\'alto con velocità iniziale di 20 m/s. Calcola l\'altezza massima raggiunta. (g = 10 m/s²)',
        soluzione: '½mv² = mgh → h = v²/(2g) = 400/20 = 20 m',
        spiegazione: "Alla quota massima tutta l'energia cinetica si è convertita in energia potenziale gravitazionale."
      },
      {
        id: 5,
        testo: 'Un motore compie un lavoro di 120.000 J in 2 minuti. Calcola la potenza media.',
        soluzione: 't = 120 s; P = L/t = 120.000/120 = 1000 W = 1 kW',
        spiegazione: 'La potenza media è il lavoro diviso il tempo impiegato.'
      },
      {
        id: 6,
        testo: 'Una molla con costante elastica k = 200 N/m viene compressa di 10 cm. Calcola l\'energia potenziale elastica immagazzinata.',
        soluzione: 'x = 0,1 m; E_el = ½kx² = ½ × 200 × 0,01 = 1 J',
        spiegazione: "L'energia potenziale elastica è ½kx², dove x è la deformazione rispetto alla posizione di equilibrio."
      },
      {
        id: 7,
        testo: 'Una palla da 1 kg cade da 10 m di altezza. Calcola la velocità al momento dell\'impatto. (g = 10 m/s², senza attrito)',
        soluzione: 'mgh = ½mv² → v = √(2gh) = √(200) ≈ 14,1 m/s',
        spiegazione: "Conservazione dell'energia meccanica: tutta l'energia potenziale si converte in cinetica."
      },
      {
        id: 8,
        testo: 'Calcola il lavoro compiuto da una forza di 60 N che forma un angolo di 60° con lo spostamento di 10 m.',
        soluzione: 'L = F·s·cos(60°) = 60 × 10 × 0,5 = 300 J',
        spiegazione: 'Il lavoro è il prodotto scalare tra forza e spostamento: L = F·s·cosθ.'
      },
    ]
  },
  {
    id: 'termodinamica',
    titolo: 'Termodinamica',
    descrizione: 'Studio del calore e della temperatura',
    domande: [
      { id: 1,  domanda: 'Il calore fluisce spontaneamente dal corpo più caldo a quello più freddo', risposta: true },
      { id: 2,  domanda: "La temperatura è una misura dell'energia totale di un sistema", risposta: false },
      { id: 3,  domanda: "Il calore specifico dell'acqua è molto elevato", risposta: true },
      { id: 4,  domanda: 'Nella dilatazione termica, i materiali si espandono sempre allo stesso modo', risposta: false },
      { id: 5,  domanda: "Il primo principio della termodinamica è una conseguenza della conservazione dell'energia", risposta: true },
      { id: 6,  domanda: 'Il primo principio della termodinamica afferma che ΔU = Q − L', risposta: true },
      { id: 7,  domanda: 'In un processo isotermo la temperatura rimane costante', risposta: true },
      { id: 8,  domanda: 'In un processo isocoro non viene compiuto lavoro di espansione', risposta: true },
      { id: 9,  domanda: "L'efficienza di un motore di Carnot dipende solo dalle temperature della sorgente calda e di quella fredda", risposta: true },
      { id: 10, domanda: 'Il calore latente di fusione è la quantità di energia necessaria per far cambiare stato a 1 kg di sostanza', risposta: true },
      { id: 11, domanda: "In un processo adiabatico l'energia interna del gas rimane invariata", risposta: false },
      { id: 12, domanda: 'Due corpi in contatto termico raggiungono l\'equilibrio quando hanno la stessa energia interna', risposta: false },
      { id: 13, domanda: "La dilatazione termica lineare è proporzionale alla variazione di temperatura", risposta: true },
      { id: 14, domanda: "L'entropia aumenta in tutti i processi naturali irreversibili", risposta: true },
      { id: 15, domanda: 'Il secondo principio della termodinamica permette di costruire un motore con rendimento del 100%', risposta: false },
    ],
    esercizi: [
      {
        id: 1,
        testo: 'Quanta energia serve per riscaldare 2 kg di acqua da 20 °C a 100 °C? (c_acqua = 4186 J/(kg·°C))',
        soluzione: 'Q = m × c × ΔT = 2 × 4186 × 80 = 669.760 J ≈ 670 kJ',
        spiegazione: 'Il calore necessario si calcola con Q = mcΔT, dove ΔT è la variazione di temperatura.'
      },
      {
        id: 2,
        testo: 'Calcola il calore necessario per portare 500 g di alluminio da 20 °C a 120 °C. (c_Al = 900 J/(kg·°C))',
        soluzione: 'Q = m·c·ΔT = 0,5 × 900 × 100 = 45.000 J = 45 kJ',
        spiegazione: 'Usiamo la formula Q = mcΔT con la variazione di temperatura ΔT = 100 °C.'
      },
      {
        id: 3,
        testo: 'Un gas ideale si espande a pressione costante di 2×10⁵ Pa. Il volume passa da 3 L a 5 L. Calcola il lavoro compiuto dal gas.',
        soluzione: 'ΔV = 2 L = 2×10⁻³ m³; L = P·ΔV = 2×10⁵ × 2×10⁻³ = 400 J',
        spiegazione: 'In un processo isobaro il lavoro compiuto dal gas è L = P·ΔV.'
      },
      {
        id: 4,
        testo: 'Calcola il rendimento massimo (di Carnot) di un motore che lavora tra 500 K e 300 K.',
        soluzione: 'η = 1 − T_fredda/T_calda = 1 − 300/500 = 0,4 = 40%',
        spiegazione: 'Il rendimento di Carnot dipende solo dalle temperature assolute delle due sorgenti.'
      },
      {
        id: 5,
        testo: 'Quanta energia occorre per sciogliere 2 kg di ghiaccio a 0 °C? (L_fusione acqua = 334.000 J/kg)',
        soluzione: 'Q = m × L_f = 2 × 334.000 = 668.000 J = 668 kJ',
        spiegazione: 'Durante un cambiamento di stato la temperatura rimane costante; l\'energia fornita rompe i legami intermolecolari.'
      },
      {
        id: 6,
        testo: 'Un gas ideale a 300 K occupa 10 L a pressione costante. Calcola il volume a 600 K.',
        soluzione: 'V₁/T₁ = V₂/T₂ → V₂ = 10 × 600/300 = 20 L',
        spiegazione: 'Legge di Charles: a pressione costante il volume è proporzionale alla temperatura assoluta.'
      },
    ]
  },
  {
    id: 'elettromagnetismo',
    titolo: 'Elettromagnetismo',
    descrizione: 'Fenomeni elettrici e magnetici',
    domande: [
      { id: 1,  domanda: 'Cariche dello stesso segno si respingono', risposta: true },
      { id: 2,  domanda: 'La corrente elettrica è un flusso di protoni', risposta: false },
      { id: 3,  domanda: 'La resistenza elettrica di un conduttore aumenta con la temperatura', risposta: true },
      { id: 4,  domanda: 'In un circuito in serie la corrente è diversa in ogni resistenza', risposta: false },
      { id: 5,  domanda: 'Un campo magnetico può essere generato da una corrente elettrica', risposta: true },
      { id: 6,  domanda: 'La legge di Ohm afferma che V = R/I', risposta: false },
      { id: 7,  domanda: 'La forza elettrostatica tra due cariche è inversamente proporzionale al quadrato della distanza', risposta: true },
      { id: 8,  domanda: 'Il campo elettrico all\'interno di un conduttore in equilibrio elettrostatico è zero', risposta: true },
      { id: 9,  domanda: 'Le linee di campo elettrico partono dalle cariche negative e arrivano alle positive', risposta: false },
      { id: 10, domanda: 'La differenza di potenziale è il lavoro per unità di carica', risposta: true },
      { id: 11, domanda: 'Un condensatore immagazzina energia nel campo elettrico tra le armature', risposta: true },
      { id: 12, domanda: 'La legge di Kirchhoff alle maglie afferma che la somma delle cadute di tensione in un anello chiuso è zero', risposta: true },
      { id: 13, domanda: 'Un trasformatore ideale aumenta la potenza elettrica', risposta: false },
      { id: 14, domanda: 'Il campo magnetico creato da un filo rettilineo percorso da corrente è proporzionale alla corrente', risposta: true },
      { id: 15, domanda: 'Le linee del campo magnetico sono sempre chiuse', risposta: true },
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
      {
        id: 3,
        testo: 'Due cariche q₁ = 2 μC e q₂ = 3 μC sono separate da 30 cm. Calcola la forza elettrostatica tra loro. (k = 9×10⁹ N·m²/C²)',
        soluzione: 'F = k·q₁·q₂/r² = 9×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / (0,3)² = 54×10⁻³ / 0,09 = 0,6 N',
        spiegazione: 'Applichiamo la legge di Coulomb con le cariche espresse in coulomb.'
      },
      {
        id: 4,
        testo: 'Calcola la resistenza equivalente di tre resistenze da 6 Ω, 3 Ω e 2 Ω collegate in parallelo.',
        soluzione: '1/R_eq = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 1 → R_eq = 1 Ω',
        spiegazione: 'Per le resistenze in parallelo si sommano i reciproci: 1/R_eq = Σ(1/Rᵢ).'
      },
      {
        id: 5,
        testo: 'Un condensatore da 100 μF è carico a 50 V. Calcola l\'energia immagazzinata.',
        soluzione: 'E = ½CV² = ½ × 100×10⁻⁶ × 2500 = 0,125 J = 125 mJ',
        spiegazione: "L'energia immagazzinata in un condensatore è E = ½CV²."
      },
      {
        id: 6,
        testo: 'Calcola la corrente in un circuito con f.e.m. di 12 V, resistenza interna 1 Ω e resistenza esterna 5 Ω.',
        soluzione: 'I = ε/(R_int + R_est) = 12/(1+5) = 2 A',
        spiegazione: 'La corrente si calcola dividendo la f.e.m. per la resistenza totale del circuito.'
      },
      {
        id: 7,
        testo: 'Una bobina con 500 spire e area 0,02 m² è immersa in un campo magnetico che varia da 0 a 2 T in 0,1 s. Calcola la f.e.m. indotta.',
        soluzione: 'ΔΦ = N × A × ΔB = 500 × 0,02 × 2 = 20 Wb; ε = ΔΦ/Δt = 20/0,1 = 200 V',
        spiegazione: 'Per la legge di Faraday, la f.e.m. indotta è pari alla variazione del flusso concatenato nel tempo.'
      },
      {
        id: 8,
        testo: 'Calcola la potenza dissipata da una resistenza di 20 Ω percorsa da una corrente di 2 A.',
        soluzione: 'P = R × I² = 20 × 4 = 80 W',
        spiegazione: "Per l'effetto Joule, la potenza dissipata è P = RI²."
      },
    ]
  }
];

export const getArgomentoById = (id) => {
  return argomenti.find(arg => arg.id === id);
};
