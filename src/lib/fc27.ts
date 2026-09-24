export const fc27 = {
  title: "EA Sports FC 27",
  kicker: "Preços por plataforma · lançamento esta semana",
  earlyAccess: "18 de setembro de 2026",
  release: "25 de setembro de 2026",
  lite: "25 de setembro de 2026, 16:00 UTC",
  plusDeadline: "31 de agosto de 2026",
  platforms: [
    "PlayStation 5",
    "PlayStation 4",
    "Xbox Series X|S",
    "Xbox One",
    "EA App",
    "Steam",
    "Epic Games Store",
    "Nintendo Switch / Switch 2",
  ],
  disclaimer:
    "Preços de vitrine no Brasil (setembro de 2026). FUTZONE não vende o jogo. Lojas aplicam promoção, cupom e regionalização. EA Play: 10% no digital e trial de 10h a partir de 18 set. Quem comprou o FC 26 na PlayStation Store vê 10% na Ultimate e na Ultimate Plus da PSN.",
};

export const coverStars = [
  {
    slug: "mbappe",
    name: "Kylian Mbappé",
    shortName: "Mbappé",
    club: "Real Madrid",
    number: "9",
    overall: 91,
    position: "ST",
    archetype: "Spearhead",
    image: "/ea-fc-27-mbappe.png",
    pace: 97,
    shooting: 90,
    passing: 81,
    dribbling: 92,
    defending: 39,
    physical: 78,
  },
  {
    slug: "bellingham",
    name: "Jude Bellingham",
    shortName: "Bellingham",
    club: "Real Madrid",
    number: "5",
    overall: 90,
    position: "CAM",
    archetype: "Box-to-Box+",
    image: "/ea-fc-27-bellingham.png",
    pace: 80,
    shooting: 83,
    passing: 84,
    dribbling: 87,
    defending: 78,
    physical: 83,
  },
];

export type StorePrice = {
  store: string;
  family: "playstation" | "xbox" | "pc" | "nintendo";
  standard: string;
  ultimate: string;
  plus: string;
  notes: string;
};

export const storePrices: StorePrice[] = [
  {
    store: "PlayStation 5",
    family: "playstation",
    standard: "R$ 349,00",
    ultimate: "R$ 499,00",
    plus: "R$ 749,50",
    notes: "SKU PS4+PS5. The Grounds e Clubs inclusos. Upgrade da versão PS4 é grátis.",
  },
  {
    store: "PlayStation 4",
    family: "playstation",
    standard: "R$ 349,00",
    ultimate: "R$ 499,00",
    plus: "R$ 749,50",
    notes: "Mesmo preço do PS5. Sem The Grounds e sem Clubs.",
  },
  {
    store: "Xbox Series X|S",
    family: "xbox",
    standard: "R$ 349,00",
    ultimate: "R$ 499,00",
    plus: "R$ 749,50",
    notes: "Play Anywhere com Xbox One. The Grounds e Clubs inclusos.",
  },
  {
    store: "Xbox One",
    family: "xbox",
    standard: "R$ 349,00",
    ultimate: "R$ 499,00",
    plus: "R$ 749,50",
    notes: "Mesmo preço do Series. Sem The Grounds e sem Clubs. Upgrade para Series é grátis.",
  },
  {
    store: "EA App (PC)",
    family: "pc",
    standard: "R$ 299,00",
    ultimate: "R$ 429,00",
    plus: "R$ 699,00",
    notes: "PC mais barato. Ultimate Plus disponível. The Grounds incluso.",
  },
  {
    store: "Steam (PC)",
    family: "pc",
    standard: "R$ 299,00",
    ultimate: "R$ 429,00",
    plus: "R$ 699,00",
    notes: "Mesma tabela do EA App. The Grounds incluso.",
  },
  {
    store: "Epic Games Store (PC)",
    family: "pc",
    standard: "R$ 299,00",
    ultimate: "R$ 429,00",
    plus: "Não vende",
    notes: "Standard e Ultimate só. Ultimate Plus não sai na Epic.",
  },
  {
    store: "Nintendo Switch 2",
    family: "nintendo",
    standard: "Não divulgado",
    ultimate: "Não divulgado",
    plus: "Não vende",
    notes: "Standard e Ultimate confirmados, sem preço BR. The Grounds incluso.",
  },
  {
    store: "Nintendo Switch",
    family: "nintendo",
    standard: "Não divulgado",
    ultimate: "Não divulgado",
    plus: "Não vende",
    notes: "Sem The Grounds. Ultimate Plus não sai no Nintendo.",
  },
];

export const editions = [
  {
    name: "Standard",
    when: "Joga em 25 set 2026",
    highlight: false,
    prices: [
      { label: "PlayStation", value: "R$ 349,00" },
      { label: "Xbox", value: "R$ 349,00" },
      { label: "PC (EA App / Steam / Epic)", value: "R$ 299,00" },
      { label: "Switch / Switch 2", value: "Não divulgado" },
    ],
    items: [
      "Jogo completo no lançamento mundial",
      "Kick-Off, Carreira, FUT, The Grounds (nas plataformas compatíveis)",
      "Bônus de pré-venda até 24 set: desafios de Carreira, 3 Ídolos/Heróis, técnico 5 estrelas",
      "The Grounds: moletom Signature, AMP Tier 3 inspirado no Mbappé, 2× AXP em 10 partidas",
      "Ídolo 92+ GER no FC 26 (jogo vendido à parte)",
    ],
  },
  {
    name: "Ultimate",
    when: "Acesso antecipado em 18 set 2026",
    highlight: true,
    prices: [
      { label: "PlayStation", value: "R$ 499,00" },
      { label: "Xbox", value: "R$ 499,00" },
      { label: "PC (EA App / Steam / Epic)", value: "R$ 429,00" },
      { label: "Switch / Switch 2", value: "Não divulgado" },
    ],
    items: [
      "Até 7 dias de acesso antecipado (a partir de 18 set)",
      "Passe Premium da Temporada 1",
      "Até 6.000 FC Points em 3 meses",
      "Slot extra de Player Evolution no FUT",
      "Carreira: boost de GER dinâmico, olheiro 5 estrelas, 5 slots extras de Manager Live",
      "Tudo da Standard + conteúdo The Grounds da Ultimate",
    ],
  },
  {
    name: "Ultimate Plus",
    when: "Early bird só até 31 ago 2026",
    highlight: false,
    prices: [
      { label: "PlayStation", value: "R$ 749,50" },
      { label: "Xbox", value: "R$ 749,50" },
      { label: "EA App / Steam", value: "R$ 699,00" },
      { label: "Epic e Nintendo", value: "Não vende" },
    ],
    items: [
      "Mesmo acesso antecipado de 18 set",
      "Passes Premium das Temporadas 1 a 5",
      "Até 10.000 FC Points em 5 meses",
      "Ídolo internacional 85+ GER + escolha 1 de 5 do Hall of FUT",
      "Não dá para subir de Ultimate para Plus depois da compra",
      "Pacote máximo de FUT, Carreira e The Grounds",
    ],
  },
];

export const extras = [
  {
    title: "FC 27 Lite",
    detail:
      "Grátis em 25 set, 16:00 UTC, no PS4, PS5, Xbox One, Series, EA App, Steam e Epic. Kick-Off e modos selecionados; dá para upar depois.",
  },
  {
    title: "EA Play",
    detail:
      "10% no digital na pré-venda. Trial de 10 horas a partir de 18 set (mesmo dia do early access).",
  },
  {
    title: "Dono do FC 26 na PSN",
    detail: "10% na Ultimate e na Ultimate Plus da PlayStation Store.",
  },
];

export const modes = [
  {
    slug: "the-grounds",
    name: "The Grounds",
    pitch:
      "Playground social novo: rua encontra estádio. Bate-bola, 1x1, Clubs, mentores. Só PS5, Xbox Series, PC e Switch 2 — fora de PS4, Xbox One e Switch 1.",
  },
  {
    slug: "clubs",
    name: "Clubs / Pro Clubs",
    pitch:
      "Seu virtual pro no 11x11, agora dentro do The Grounds. É o modo FUTZONE: clube, Discord e campeonato.",
  },
  {
    slug: "fut",
    name: "Football Ultimate Team",
    pitch:
      "Sim: Ultimate Team está no 27. Pack, Champions, Rivals e mercado continuam. A Galeria guarda o card mesmo depois de vender; holográfico, DME simplificado e Evolução ramificada entram neste ciclo.",
  },
  {
    slug: "carreira-treinador",
    name: "Carreira de Treinador",
    pitch:
      "Você comanda o clube: janela com TransferRoom, cláusula, rival furando o acordo, Arena de Treino na Central e Desafios de Criação no Manager ao Vivo.",
  },
  {
    slug: "carreira-atleta",
    name: "Carreira de Atleta",
    pitch:
      "Você é um jogador: briga por vaga, Rivalidades com a torcida escolhendo herói ou vilão, GER dinâmico e sliders de CPU separado (colega ≠ adversário).",
  },
  {
    slug: "kick-off",
    name: "Kick-Off e Lite",
    pitch:
      "Partida rápida local ou online. No dia 25 o Lite sai de graça (16:00 UTC) para experimentar e depois upar.",
  },
  {
    slug: "gameplay",
    name: "Jogabilidade",
    pitch:
      "Mais controle em todo modo: escanteios dinâmicos, consciência ofensiva, defesa focada no jogador para o competitivo, 21 mil atletas licenciados.",
  },
];

export const careerHub = {
  kicker: "Carreira no FC 27",
  title: "Treinador, atleta e o mundo que dá para explorar",
  lead: "O mapa aberto para andar, bater bola e achar mentor é o The Grounds — isso é Clubs. A Carreira ficou um mundo de futebol mais vivo: Central nova, Arena de Treino, janela que se desenrola em etapas e notícia que reage ao que você faz. São dois jeitos de viver o mesmo disco.",
};

export const careerTracks = [
  {
    slug: "treinador",
    name: "Carreira de Treinador",
    also: "Manager Career",
    who: "Você é o técnico. Compra, vende, escala, fala com a imprensa e responde pela mesa.",
    explore:
      "A Central virou lugar para ficar: Observação de um lado, Transferências do outro, Arena de Treino 11x11 (titulares × reservas), coletivas com peso e Manager ao Vivo com desafio que você mesmo publica no navegador.",
    changes: [
      "Mercado reconstruído com valores TransferRoom (xTV): preço muda com forma, liga, potencial e poder de compra.",
      "Negociação em etapas: sondagem, permissão, mesa em paralelo, rival furando o acordo depois do sim.",
      "Cláusula de verdade: parcela, recompra, preferência, % de venda futura, empréstimo de volta, troca.",
      "IA de clube com filosofia (base vs auge), lista de observação paralela e rivalidade que trava negócio.",
      "GER dinâmico no elenco todo. Eventos inesperados e coletiva que muda o vestiário.",
      "Liga MX (Apertura e Clausura). Tutorial dá para desligar. Ídolos voltam na temporada.",
    ],
  },
  {
    slug: "atleta",
    name: "Carreira de Atleta",
    also: "Player Career",
    who: "Você é um jogador. Briga por vaga, joga a partida no seu corpo e a torcida escolhe herói ou vilão.",
    explore:
      "O hub do atleta agora conta história fora do apito: Rivalidades com objetivo (mais assistência em 5 jogos, hat-trick primeiro), rede social da torcida e personalidade que sobe quando você ganha o duelo.",
    changes: [
      "Rivalidades: a CPU escolhe um concorrente da sua função — às vezes melhor, às vezes caçando você.",
      "Dois tipos de prova: render mais que o rival nas próximas partidas, ou bater um marco antes dele.",
      "Ponto de personalidade na vitória/empate da rivalidade. Metade se a prova não terminar.",
      "GER dinâmico no seu corpo: forma, moral, físico, lesão e minutos mexem na nota da semana.",
      "Slider de CPU separado: colega de time ≠ adversário. Authentic 2.0 pesa mais aqui do que no FUT.",
      "Liga MX também entra. Ídolos desbloqueáveis na temporada, iguais ao treinador.",
    ],
  },
] as const;

export const careerDiff = [
  { topic: "Você é", manager: "O treinador do clube", player: "Um atleta no elenco" },
  { topic: "O que decide o save", manager: "Janela, tática, vestiário, imprensa", player: "Minutos, duelo, rivalidade, nota da semana" },
  { topic: "Mercado", manager: "Você compra e vende, com etapa e cláusula", player: "Você sofre (ou pede) a transferência" },
  { topic: "Novidade grande do 27", manager: "TransferRoom + Desafios de Criação", player: "Rivalidades com a torcida" },
  { topic: "Treino", manager: "Arena 11x11 na Central, esquema e bola parada", player: "Sua forma e o duelo 1x1 na partida" },
  { topic: "CPU", manager: "Clubes bidam com filosofia e rivalidade", player: "Slider de colega separado do rival" },
  { topic: "Mundo aberto para andar", manager: "Não. Carreira é single-player", player: "Não. O mapa aberto é o The Grounds (Clubs)" },
] as const;
