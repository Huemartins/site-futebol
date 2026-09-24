export const site = {
  name: "FUTZONE",
  tagline: "Mais que um jogo, é a nossa paixão.",
  claim: "Jogue. Compita. Evolua.",
  headline: "O futebol virtual",
  kicker: "O portal completo para quem vive",
  pillars: "Futebol · EA FC · Pro Clubs · eSports",
  description:
    "FUTZONE — o portal de quem vive o futebol virtual: EA FC 27, Pro Clubs, eSports, guias e campeonatos.",
};

export const nav = [
  { href: "/noticias", label: "Notícias" },
  { href: "/ea-fc", label: "EA FC" },
  { href: "/pro-clubs", label: "Pro Clubs" },
  { href: "/esports", label: "eSports" },
  { href: "/guias", label: "Guias" },
  { href: "/taticas", label: "Táticas" },
  { href: "/comparar", label: "Comparador" },
  { href: "/campeonatos", label: "Campeonatos" },
] as const;

export const platformNav = [
  { href: "/builds", label: "Builds" },
  { href: "/times/cadastrar", label: "Cadastrar time" },
  { href: "/jogadores/cadastrar", label: "Cadastrar jogador" },
  { href: "/elencos", label: "Elencos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/estatisticas", label: "Estatísticas" },
  { href: "/ranking", label: "Ranking" },
  { href: "/agenda", label: "Agenda" },
] as const;

export const homeStats = [
  { value: "21 mil", label: "atletas licenciados no FC 27" },
  { value: "100", label: "jogadores no The Grounds" },
  { value: "18 set", label: "early access Ultimate" },
  { value: "25 set", label: "launch mundial" },
] as const;

export const homeHubs = [
  {
    href: "/ea-fc",
    title: "EA FC",
    detail: "O ciclo 27 inteiro: The Grounds, preços por loja, modos e o que o 26 não tinha.",
  },
  {
    href: "/pro-clubs",
    title: "Pro Clubs",
    detail: "Seu virtual pro no 11x11. Arquétipo, função, Discord e a liga FUTZONE.",
  },
  {
    href: "/esports",
    title: "eSports",
    detail: "Competições, copas e o calendário que o pad brasileiro acompanha.",
  },
  {
    href: "/taticas",
    title: "Guias & táticas",
    detail: "4-2-3-1, bloco médio, DualSense. Conceito que vira placar.",
  },
  {
    href: "/comparar",
    title: "Comparador",
    detail: "Jogador real × EA FC. Overall de marketing vs o que o campo mostra.",
  },
] as const;

export const homeTicker = [
  "Early access FC 27: 18 de setembro",
  "Launch mundial: 25 de setembro",
  "Liga FUTZONE Pro Clubs em andamento",
  "Copa eSports com inscrições abertas",
  "The Grounds: até 100 jogadores no hub",
  "Defesa manual no competitivo do 27",
  "Galeria do FUT guarda o card vendido",
  "Cadastre seu time na Central",
] as const;

export const homeHighlights = [
  {
    area: "Defesa",
    detail: "Tackle automático some no competitivo. Contain marca de longe — a IA não defende por você.",
    href: "/noticias/defesa-manual-fc-27",
  },
  {
    area: "The Grounds",
    detail: "Hub social novo com até 100 jogadores, 3 distritos e Clubs dentro do playground.",
    href: "/pro-clubs",
  },
  {
    area: "Ultimate Team",
    detail: "Galeria permanente, holográfico, DME simplificado e Evolução ramificada no ciclo 27.",
    href: "/noticias/ultimate-team-fc-27",
  },
  {
    area: "Carreira",
    detail: "Treinador com TransferRoom e atleta com Rivalidades. Dois saves, um disco.",
    href: "/noticias/carreira-treinador-e-atleta",
  },
  {
    area: "Pro Clubs",
    detail: "11x11 no Clubhouse, Rush, small-sided e liga FUTZONE com house rules.",
    href: "/pro-clubs",
  },
  {
    area: "Comparador",
    detail: "Mbappé 91 e Bellingham 90 no campo. Overall de marketing vs o que o pad mostra.",
    href: "/comparar",
  },
] as const;

export const homeFeaturedGuides = [
  {
    slug: "formacao-4-2-3-1-pro-clubs",
    hub: "taticas" as const,
    tag: "Formação",
    title: "4-2-3-1: o sistema mais estável do 11x11",
    excerpt: "Dois volantes, um 10 e pontas por dentro. O desenho que perdoa elenco incompleto.",
  },
  {
    slug: "tatica-bloco-medio",
    hub: "taticas" as const,
    tag: "Tática",
    title: "Bloco médio sem virar retranca",
    excerpt: "Linha compacta, pressão em bloco e quando abrir o corredor sem tomar gol.",
  },
  {
    slug: "dualsense-no-fc-27",
    hub: "guias" as const,
    tag: "Pad",
    title: "DualSense no FC 27",
    excerpt: "R2 sprint, L2 jockey, triggers adaptativos e o que mudou na defesa manual.",
  },
  {
    slug: "build-volante-e-ponta",
    hub: "builds" as const,
    tag: "Build",
    title: "Build de volante e ponta",
    excerpt: "Âncora, chegada e largura. Ponto certo para cada função no virtual pro.",
  },
] as const;

export const homePlatform = [
  {
    step: "01",
    title: "Crie sua conta",
    detail: "Login, perfil e histórico de partidas na plataforma FUTZONE.",
    href: "/cadastrar",
    cta: "Cadastrar",
  },
  {
    step: "02",
    title: "Monte o clube",
    detail: "Cadastre o time, elenco e Discord. Tudo pronto para a liga.",
    href: "/times/cadastrar",
    cta: "Cadastrar time",
  },
  {
    step: "03",
    title: "Entre na competição",
    detail: "Liga Pro Clubs, Copa eSports e ranking com tabela ao vivo.",
    href: "/campeonatos",
    cta: "Ver campeonatos",
  },
] as const;

export const homeUpcoming = [
  { date: "26 set 2026 · 21h", match: "Nova Estrela vs NightFox FC", href: "/agenda" },
  { date: "28 set 2026 · 22h30", match: "Atlas Verde vs Pulse United", href: "/agenda" },
  { date: "03 out 2026 · 20h", match: "Copa eSports — mata-mata", href: "/campeonatos/copa-esports-dualpitch" },
  { date: "18 set 2026", match: "Early access FC 27 · Ultimate", href: "/ea-fc" },
] as const;

export const homeQuickFacts = [
  { label: "Modos no disco", value: "7+", detail: "FUT, Grounds, Clubs, Carreira, Kick-Off, Lite" },
  { label: "Plataformas", value: "8", detail: "PS5, PS4, Xbox, PC, Steam, Epic, Switch" },
  { label: "Guias publicados", value: "18", detail: "Táticas, builds, pad e Carreira" },
  { label: "Times na liga", value: "4", detail: "NightFox, Atlas, Pulse e Nova Estrela" },
] as const;

export const homeNews = [
  {
    slug: "ultimate-team-fc-27",
    tag: "Ultimate Team",
    date: "18 set 2026",
    title: "Sim: o FC 27 tem Ultimate Team. E a Galeria muda o clube",
    image: "/hero-futebol-virtual.png",
  },
  {
    slug: "carreira-treinador-e-atleta",
    tag: "Carreira",
    date: "18 set 2026",
    title: "Treinador ou atleta: o 27 separa a mesa da chuteira",
    image: "/news-carreira-fc27.png",
  },
  {
    slug: "defesa-manual-fc-27",
    tag: "Gameplay",
    date: "16 set 2026",
    title: "A defesa do 27 não joga por você. O auto-tackle morreu",
    image: "/news-gameplay-fc27.png",
  },
  {
    slug: "clubs-dentro-do-grounds",
    tag: "Pro Clubs",
    date: "14 set 2026",
    title: "A Liga FUTZONE já apitou. Clubhouse, torneio 11x11, house rules",
    image: "/news-pro-clubs-fc27.png",
  },
] as const;

export const roadmap = [
  {
    phase: "Fase 1 — Portal",
    items: [
      { href: "/", label: "Home", ready: true },
      { href: "/noticias", label: "Notícias", ready: true },
      { href: "/ea-fc", label: "EA FC", ready: true },
      { href: "/pro-clubs", label: "Pro Clubs", ready: true },
      { href: "/esports", label: "eSports", ready: true },
      { href: "/guias", label: "Guias", ready: true },
      { href: "/taticas", label: "Táticas", ready: true },
      { href: "/builds", label: "Builds/arquétipos", ready: true },
      { href: "/comparar", label: "Comparador real × EA FC", ready: true },
    ],
  },
  {
    phase: "Fase 2 — Plataforma",
    items: [
      { href: "/campeonatos", label: "Campeonatos", ready: true },
      { href: "/times/cadastrar", label: "Cadastro de times", ready: true },
      { href: "/jogadores/cadastrar", label: "Cadastro de jogadores", ready: true },
      { href: "/elencos", label: "Elencos", ready: true },
      { href: "/resultados", label: "Resultados", ready: true },
      { href: "/estatisticas", label: "Estatísticas", ready: true },
    ],
  },
  {
    phase: "Fase 3 — Comunidade",
    items: [
      { href: "/entrar", label: "Login", ready: true },
      { href: "/cadastrar", label: "Criar conta", ready: true },
      { href: "/conta", label: "Minha conta", ready: true },
      { href: "/perfil", label: "Perfil do time", ready: false },
      { href: "/elenco/gerenciar", label: "Gerenciamento do elenco", ready: false },
      { href: "/agenda", label: "Agenda de partidas", ready: true },
      { href: "/ranking", label: "Ranking", ready: true },
      { href: "/comunidade", label: "Comunidade", ready: false },
    ],
  },
  {
    phase: "Fase 4 — Monetização",
    items: [
      { href: "/anuncios", label: "Anúncios", ready: false },
      { href: "/loja", label: "Produtos/afiliados", ready: false },
      { href: "/patrocinios", label: "Patrocínios", ready: false },
      { href: "/premium", label: "Plano premium para times", ready: false },
    ],
  },
] as const;

export const positions = [
  "GOL",
  "ZAG",
  "LE",
  "LD",
  "VOL",
  "MC",
  "MEI",
  "PE",
  "PD",
  "SA",
  "ATA",
] as const;

export type Position = (typeof positions)[number];

export const championshipStatusLabel = {
  inscricoes: "Inscrições abertas",
  em_andamento: "Em andamento",
  encerrado: "Encerrado",
} as const;
