// Formulario ufficiale del corso — estratto dal PDF

export const sezioniFormulario = [
  {
    id: 'costanti',
    titolo: 'Costanti e Prefissi',
    formule: [
      {
        descrizione: 'Prefissi',
        latex: 'm = 10^{-3}\\text{ (milli)};\\quad \\mu = 10^{-6}\\text{ (micro)};\\quad n = 10^{-9}\\text{ (nano)};\\quad p = 10^{-12}\\text{ (pico)}',
      },
      {
        descrizione: 'Costante di Coulomb',
        latex: 'k_e = \\dfrac{1}{4\\pi\\epsilon_0} = 9 \\times 10^{9}\\ \\mathrm{N\\,m^2\\,C^{-2}}',
      },
      {
        descrizione: 'Costante magnetica',
        latex: 'k_m = \\dfrac{\\mu_0}{4\\pi} = 10^{-7}\\ \\mathrm{m\\,T\\,A^{-1}}',
      },
    ],
  },
  {
    id: 'elettrostatica',
    titolo: 'Elettrostatica',
    formule: [
      {
        descrizione: 'Campo elettrico di una carica puntiforme q in r₀',
        latex: '\\vec{E}(\\vec{r}) = k_e\\,\\dfrac{q}{|\\vec{r}-\\vec{r}_0|^2}\\,\\dfrac{\\vec{r}-\\vec{r}_0}{|\\vec{r}-\\vec{r}_0|}',
      },
      {
        descrizione: 'Potenziale elettrico di una carica puntiforme q in r₀',
        latex: 'V(\\vec{r}) = k_e\\,\\dfrac{q}{|\\vec{r}-\\vec{r}_0|}',
      },
      {
        descrizione: 'Campo e potenziale con carica nell\'origine',
        latex: '\\vec{E}(\\vec{r}) = k_e\\,\\dfrac{q}{r^2}\\,\\hat{u}_r \\qquad V(\\vec{r}) = k_e\\,\\dfrac{q}{r}',
      },
      {
        descrizione: 'Forza su una carica q₀ in un campo elettrico',
        latex: '\\vec{F} = q_0\\,\\vec{E}',
      },
      {
        descrizione: 'Momento di dipolo elettrico',
        latex: '\\vec{p} = q\\,\\vec{d}',
      },
    ],
  },
  {
    id: 'condensatore',
    titolo: 'Condensatore',
    formule: [
      {
        descrizione: 'Capacità',
        latex: 'C = \\dfrac{q}{V}',
      },
      {
        descrizione: 'Condensatori in serie',
        latex: '\\dfrac{1}{C} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2}',
      },
      {
        descrizione: 'Condensatori in parallelo',
        latex: 'C = C_1 + C_2',
      },
      {
        descrizione: 'Energia immagazzinata in un condensatore',
        latex: 'U_E = \\dfrac{q^2}{2C} = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}qV',
      },
      {
        descrizione: 'Condensatore piano (armature area A, distanza d, densità σ, vuoto)',
        latex: 'C = \\epsilon_0\\,\\dfrac{A}{d} \\qquad E = \\dfrac{\\sigma}{\\epsilon_0} \\qquad V = Ed',
      },
    ],
  },
  {
    id: 'resistenze',
    titolo: 'Resistenze',
    formule: [
      {
        descrizione: 'Resistenze in serie',
        latex: 'R_{eq} = R_1 + R_2',
      },
      {
        descrizione: 'Resistenze in parallelo',
        latex: '\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}',
      },
      {
        descrizione: 'Legge di Ohm',
        latex: 'V = R\\,I',
      },
      {
        descrizione: 'Potenza assorbita dalla resistenza',
        latex: 'P = R\\,I^2',
      },
      {
        descrizione: 'Potenza erogata da una f.e.m.',
        latex: 'P = V\\,I',
      },
    ],
  },
  {
    id: 'circuito-rc',
    titolo: 'Circuito RC',
    formule: [
      {
        descrizione: 'Carica del condensatore',
        latex: 'q(t) = q_0\\left(1 - e^{-t/\\tau}\\right) \\qquad i(t) = i_0\\,e^{-t/\\tau} \\qquad \\tau = RC',
      },
      {
        descrizione: 'Scarica del condensatore',
        latex: 'q(t) = q_0\\,e^{-t/\\tau}',
      },
    ],
  },
  {
    id: 'magnetismo',
    titolo: 'Magnetismo',
    formule: [
      {
        descrizione: 'Campo magnetico di un filo infinito a distanza r',
        latex: 'B = 2k_m\\,\\dfrac{I}{r}',
      },
      {
        descrizione: 'Campo magnetico di un solenoide rettilineo ideale',
        latex: 'B = 4\\pi k_m\\,nI = \\mu_0\\,nI',
      },
      {
        descrizione: 'Campo magnetico di una spira circolare sull\'asse (distanza z)',
        latex: '\\vec{B} = 2k_m\\,\\dfrac{I\\pi R^2}{(R^2+z^2)^{3/2}}\\,\\hat{n}',
      },
      {
        descrizione: 'Forza di Lorentz su una particella carica in moto',
        latex: '\\vec{F} = q_0\\,\\vec{v}\\times\\vec{B}',
      },
      {
        descrizione: 'Forza su un filo di lunghezza l percorso da corrente',
        latex: '\\vec{F} = \\vec{I}\\times B\\,\\vec{l}',
      },
      {
        descrizione: 'Forza tra due fili paralleli percorsi da corrente',
        latex: 'F = 2k_m\\,\\dfrac{I_1\\,I_2}{d}\\,l',
      },
      {
        descrizione: 'Momento di dipolo magnetico di una spira di area S',
        latex: '\\vec{m} = I\\,S',
      },
      {
        descrizione: 'Flusso del campo magnetico attraverso una superficie Σ',
        latex: '\\Phi_\\Sigma(\\vec{B}) = \\int_\\Sigma \\vec{B}\\cdot\\hat{n}\\,dS',
      },
      {
        descrizione: 'f.e.m. indotta (Faraday-Lenz)',
        latex: '\\mathcal{E}_i = -\\dfrac{d\\Phi_\\Sigma(\\vec{B})}{dt}',
      },
    ],
  },
  {
    id: 'induttanza',
    titolo: 'Induttanza',
    formule: [
      {
        descrizione: 'f.e.m. autoindotta',
        latex: '\\mathcal{E} = -L\\,\\dfrac{dI}{dt}',
      },
      {
        descrizione: 'Induttanza di un solenoide rettilineo',
        latex: 'L = 4\\pi k_m\\,n^2 l S = \\mu_0\\,n^2 l S',
      },
      {
        descrizione: 'Energia immagazzinata in un solenoide',
        latex: 'U_M = \\dfrac{1}{2}L\\,I^2',
      },
      {
        descrizione: 'Induttanze in serie',
        latex: 'L_{eq} = L_1 + L_2',
      },
      {
        descrizione: 'Induttanze in parallelo',
        latex: '\\dfrac{1}{L_{eq}} = \\dfrac{1}{L_1} + \\dfrac{1}{L_2}',
      },
    ],
  },
  {
    id: 'circuiti-rl-lc-rlc',
    titolo: 'Circuiti RL, LC e RLC',
    formule: [
      {
        descrizione: 'Circuito LR — corrente dopo chiusura (τ = L/R)',
        latex: 'I(t) = I_0\\left(1 - e^{-t/\\tau}\\right) \\qquad \\tau = \\dfrac{L}{R}',
      },
      {
        descrizione: 'Circuito LR — corrente dopo apertura',
        latex: 'I(t) = I_0\\,e^{-t/\\tau}',
      },
      {
        descrizione: 'Circuito LC — carica oscillante',
        latex: 'q(t) = q_0\\cos(\\omega_0 t + \\varphi) \\qquad \\omega_0 = \\dfrac{1}{\\sqrt{LC}}',
      },
      {
        descrizione: 'Circuito RLC in serie — impedenza con f.e.m. alternata (pulsazione ω)',
        latex: 'Z = \\sqrt{R^2 + \\left(\\omega L - \\dfrac{1}{\\omega C}\\right)^2}',
      },
    ],
  },
];
