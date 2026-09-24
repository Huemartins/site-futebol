import { extras, fc27, storePrices } from "@/lib/fc27";
import { clubsCalls, clubsFormations } from "@/lib/pro-clubs";

export type CoachLink = { href: string; label: string };

export type CoachPlatform = "playstation" | "xbox" | "pc" | "nintendo";

export type CoachMemory = {
  topic: string | null;
  name: string | null;
  platform: CoachPlatform | null;
  turns: number;
};

export type CoachReply = {
  bubbles: string[];
  links: CoachLink[];
  suggestions: string[];
  memory: CoachMemory;
};

export const emptyMemory: CoachMemory = {
  topic: null,
  name: null,
  platform: null,
  turns: 0,
};

type Card = {
  id: string;
  keywords: string[];
  suggestions: string[];
  links: CoachLink[];
  answer: () => string;
};

const starters = [
  "O que é a FUTZONE?",
  "Quando lança o EA FC 27?",
  "Quanto custa o FC 27?",
  "O que é Pro Clubs?",
  "Treinador ou atleta?",
  "O FC 27 tem Ultimate Team?",
  "O que é The Grounds?",
  "Como defender no 27?",
  "Qual formação usar?",
  "Como cadastrar um time?",
];

const cards: Card[] = [
  {
    id: "futzone",
    keywords: ["futzone", "site", "portal", "o que e a futzone", "oque e a futzone", "como funciona o site", "o que e o site"],
    suggestions: ["Quando lança o EA FC 27?", "O que é Pro Clubs?", "Como cadastrar um time?"],
    links: [
      { href: "/", label: "Home" },
      { href: "/noticias", label: "Notícias" },
    ],
    answer: () =>
      "A FUTZONE é o portal de quem vive o futebol virtual. Cada aba é um assunto: Notícias só matéria, EA FC só o jogo e o que muda, Pro Clubs o 11x11, eSports o palco, Guias a mão no pad, Táticas o quadro, Comparador o jogador real × a carta, Campeonatos a taça.\n\nSe você está perdido, pergunta em português normal. Eu te aponto a aba e o próximo passo.",
  },
  {
    id: "datas",
    keywords: [
      "quando",
      "lanca",
      "lancamento",
      "sai",
      "data",
      "early",
      "acesso antecipado",
      "dia",
      "setembro",
      "18",
      "25",
    ],
    suggestions: ["Quanto custa o FC 27?", "O que é o Lite?", "Treinador ou atleta?"],
    links: [{ href: "/ea-fc", label: "EA FC 27" }],
    answer: () =>
      `Calendário do EA Sports FC 27:\n\n• Acesso antecipado: ${fc27.earlyAccess} (Ultimate e Ultimate Plus, até 7 dias).\n• Lançamento mundial: ${fc27.release}.\n• Lite grátis: ${fc27.lite}.\n\nA Ultimate Plus de early bird já encerrou em ${fc27.plusDeadline} — não volta. Tabela e edições estão na aba EA FC.`,
  },
  {
    id: "preco",
    keywords: ["preco", "custa", "valor", "reais", "r$", "barato", "edicao", "standard", "ultimate", "plus", "psn", "steam"],
    suggestions: ["Qual edição comprar?", "O que é o Lite?", "Tem desconto do FC 26?"],
    links: [{ href: "/ea-fc", label: "Preços por loja" }],
    answer: () => {
      const lines = storePrices
        .slice(0, 7)
        .map((row) => `• ${row.store}: Standard ${row.standard} · Ultimate ${row.ultimate} · Plus ${row.plus}`)
        .join("\n");
      return `A FUTZONE não vende o jogo — só mostra a vitrine. No Brasil (set/2026):\n\n${lines}\n\nPC (EA App, Steam) é mais barato. Epic não vende Ultimate Plus. Nintendo ainda sem preço BR. ${fc27.disclaimer}`;
    },
  },
  {
    id: "edicao",
    keywords: ["qual edicao", "qual versao", "comprar", "ultimate plus", "standard ou ultimate", "vale a pena"],
    suggestions: ["Quanto custa o FC 27?", "O que é o Lite?", "Quando lança o EA FC 27?"],
    links: [{ href: "/ea-fc", label: "Edições" }],
    answer: () =>
      "Regra simples:\n\n• Standard — joga no dia 25. Jogo completo.\n• Ultimate — joga no dia 18, passe da Temporada 1, até 6.000 FC Points, slot extra de Evolution.\n• Ultimate Plus — early bird até 31 ago (já fechou). Passes 1 a 5, até 10.000 FC Points. Não existe na Epic nem no Nintendo. Não dá para subir de Ultimate para Plus depois.\n\nSe só quer o pitch: Standard ou Lite. Se quer FUT cedo: Ultimate.",
  },
  {
    id: "lite",
    keywords: ["lite", "gratis", "gratuito", "trial", "ea play", "experimentar", "testar"],
    suggestions: ["Quando lança o EA FC 27?", "The Grounds roda no PS4?", "Qual edição comprar?"],
    links: [
      { href: "/ea-fc", label: "EA FC 27" },
      { href: "/guias", label: "Guias" },
    ],
    answer: () =>
      `${extras[0].detail}\n\n${extras[1].detail}\n\nUse o Lite para sentir o Competitive no pad, não para julgar FUT. Grounds e Clubs completos pedem current-gen.`,
  },
  {
    id: "desconto",
    keywords: ["desconto", "fc 26", "fc26", "10%", "promo", "cupom"],
    suggestions: ["Quanto custa o FC 27?", "Qual edição comprar?"],
    links: [{ href: "/ea-fc", label: "EA FC 27" }],
    answer: () => extras[2].detail + " EA Play também dá 10% no digital da pré-venda.",
  },
  {
    id: "26vs27",
    keywords: ["26", "diferenca", "muda", "novo", "o que muda", "comparativo", "vs"],
    suggestions: ["Como defender no 27?", "O que é The Grounds?", "O que mudou no FUT?"],
    links: [
      { href: "/ea-fc", label: "FC 26 × 27" },
      { href: "/noticias", label: "Notícias" },
    ],
    answer: () =>
      "O 27 não é só roster novo. O 26 ainda defendia por você; no Competitive do 27 o auto-tackle some e o contain marca de longe.\n\nThe Grounds não existia. Clubs sai do menu e mora num hub. FUT ganha Galeria. Carreira ganha TransferRoom e overall dinâmico. Last-gen (PS4, One, Switch 1) fica sem Grounds e sem Clubs.\n\nA tabela completa está em EA FC. As matérias, em Notícias.",
  },
  {
    id: "grounds",
    keywords: ["grounds", "playground", "distrito", "montclair", "zeiza", "parkside", "hub", "100 jogadores", "mundo aberto", "open world", "mapa aberto", "explorar"],
    suggestions: ["The Grounds roda no PS4?", "O que é Pro Clubs?", "O que é Rush?"],
    links: [
      { href: "/ea-fc", label: "The Grounds" },
      { href: "/pro-clubs", label: "Pro Clubs" },
    ],
    answer: () =>
      "The Grounds é o playground social novo do FC 27: rua encontra estádio. Até 100 pessoas, Terraço no centro e três distritos — Montclair (gaiola francesa), Zeiza (potrero argentino) e Parkside (parque inglês).\n\nVocê encontra amigo, joga kickabout, small-sided, Rush ou entra no Clubhouse do 11x11. Mentores: Hunter, Mbappé, Chloe Kelly, Dybala.\n\nSó PS5, Xbox Series, PC e Switch 2. Isso NÃO é o modo Carreira — Carreira é treinador ou atleta, single-player.",
  },
  {
    id: "lastgen",
    keywords: ["ps4", "xbox one", "switch 1", "last gen", "last-gen", "geracao", "roda no"],
    suggestions: ["O que é The Grounds?", "Quanto custa o FC 27?", "O que é Pro Clubs?"],
    links: [{ href: "/ea-fc", label: "Plataformas" }],
    answer: () =>
      "PS4, Xbox One e Switch 1 jogam o disco do 27, mas sem The Grounds e sem Clubs. O playground e o 11x11 social são PS5, Series, PC e Switch 2.\n\nUpgrade de PS4→PS5 e One→Series é grátis nas SKUs que a loja amarra. Se o seu clube é misto, marquem dois ritmos no Discord.",
  },
  {
    id: "clubs",
    keywords: ["pro clubs", "clubs", "proclub", "11x11", "virtual pro", "clube", "vestiario"],
    suggestions: ["Qual formação usar?", "Quais são as calls?", "Como cadastrar um time?"],
    links: [
      { href: "/pro-clubs", label: "Pro Clubs" },
      { href: "/campeonatos", label: "Campeonatos" },
    ],
    answer: () =>
      "Pro Clubs é você ser UM jogador, não o time todo. Seu virtual pro entra no 11x11 com mais 10 pessoas. No 27 isso mora no The Grounds, no Clubhouse.\n\nFunção importa mais que overall: um dribla, o outro toca; um lateral sobe, o outro segura. Formação está em Táticas. Ponto do pro, em Builds. Liga FUTZONE, em Campeonatos — cadastro sem login.",
  },
  {
    id: "calls",
    keywords: ["call", "calls", "discord", "comunicacao", "fico", "sobe", "troca", "grito"],
    suggestions: ["Qual formação usar?", "O que é Pro Clubs?", "Como melhorar no competitivo?"],
    links: [{ href: "/pro-clubs", label: "Calls do clube" }],
    answer: () => {
      const list = clubsCalls.map((item) => `• ${item.call} — ${item.meaning}`).join("\n");
      return `Call curto. Quem perdeu a bola fala primeiro. Replay só no intervalo.\n\n${list}`;
    },
  },
  {
    id: "formacao",
    keywords: ["formacao", "4-3-3", "4-2-3-1", "442", "352", "tatica", "esquema", "sistema"],
    suggestions: ["Como jogar bloco médio?", "Build de volante?", "Quais são as calls?"],
    links: [{ href: "/taticas", label: "Táticas" }],
    answer: () => {
      const list = clubsFormations
        .map((item) => `• ${item.name} (${item.badge}) — ${item.use}. Profundidade ${item.depth}, largura ${item.width}.`)
        .join("\n");
      return `O default da FUTZONE é o 4-2-3-1: perdoa elenco incompleto. 4-3-3 só com 11 no Discord. 3-5-2 no máximo 20 minutos.\n\n${list}\n\nQuadro completo na aba Táticas.`;
    },
  },
  {
    id: "bloco",
    keywords: ["bloco", "pressao", "pressao alta", "retranca", "linha"],
    suggestions: ["Qual formação usar?", "Como defender no 27?", "Quais são as calls?"],
    links: [{ href: "/taticas", label: "Táticas" }],
    answer: () =>
      "Bloco médio é o que mais pontua na Liga: linha na intermediária, quem está perto da bola pressiona, os outros fecham passagem.\n\nPressão alta: 8 a 12 minutos, depois recua. No 27 a IA não cobre as costas. Combine no Discord: “press 10 min, depois médio”.",
  },
  {
    id: "defesa",
    keywords: ["defender", "defesa", "tackle", "jockey", "contain", "zagueiro", "marcar", "auto-tackle"],
    suggestions: ["O que muda do 26 para o 27?", "DualSense: o que apertar?", "Build de zagueiro?"],
    links: [
      { href: "/guias", label: "Guias de pad" },
      { href: "/taticas", label: "Táticas" },
    ],
    answer: () =>
      "No 27 o auto-tackle morreu. Você troca para o marcador da bola (L1), jockey no corredor (L2) e só então dispara o tackle em pé. Contain (R1) agora marca de longe — se só segurar, o rival tem tempo.\n\nNão persiga o ponta nas costas: call “troca”. Carrinho na intermediária é último recurso. Treino: Rush no Grounds, 15 min só defendendo. Liga não é laboratório.",
  },
  {
    id: "pad",
    keywords: ["dualsense", "controle", "pad", "botao", "comando", "ps5", "l1", "l2"],
    suggestions: ["Como defender no 27?", "Como começar no FUT?", "O que é Pro Clubs?"],
    links: [{ href: "/guias", label: "Guias" }],
    answer: () =>
      "Fundamento no DualSense do 27:\n\n• L1 — troca de jogador antes do duelo\n• L2 — jockey, acompanhar o driblador\n• R1+passe — passe dirigido no 9\n• Cruzamento rasteiro voltou a valer\n\nSkill no primeiro contato só se o arquétipo aguenta. Treine UM input por sessão. Formação fica em Táticas; aqui é a sua mão.",
  },
  {
    id: "build",
    keywords: ["build", "arquetipo", "virtual pro", "atributo", "volante", "ponta", "goleiro", "zaga", "9", "falso 9"],
    suggestions: ["Qual formação usar?", "O que é Pro Clubs?", "Como melhorar no competitivo?"],
    links: [{ href: "/builds", label: "Builds" }],
    answer: () =>
      "Ponto no virtual pro muda por posição:\n\n• GOL — posicionamento, reflexo, aéreo, passe. Sweeper se o bloco é alto.\n• ZAG — interceptação e marcação. Um constrói, o outro destrói.\n• Lateral — stamina primeiro. Um sobe, o outro segura.\n• VOL — interceptação e passe curto. Não dribla o primeiro.\n• 10 — passe e giro. O 8 é quem chega na área.\n• 9 — escolha: alvo, poacher ou falso 9. Os três no mesmo build some.\n\nIsso mora em Builds, não em Pro Clubs.",
  },
  {
    id: "fut",
    keywords: [
      "fut",
      "ultimate team",
      "ultima team",
      "galeria",
      "sbc",
      "dme",
      "evo",
      "carta",
      "pack",
      "fc points",
      "holografico",
      "vai ter fut",
      "tem fut",
      "tem ultimate",
    ],
    suggestions: ["O que é a Galeria?", "Qual edição comprar?", "Como começar no FUT?"],
    links: [
      { href: "/noticias/ultimate-team-fc-27", label: "Matéria do Ultimate Team" },
      { href: "/guias", label: "Começar no FUT" },
    ],
    answer: () =>
      "Sim. Football Ultimate Team está no EA FC 27 — a EA confirmou na Pitch Notes e na página de modos. Pack, Champions, Rivals e mercado continuam.\n\nO que muda: a Galeria guarda o card mesmo depois de vender ou meter no DME. Holográfico é visual, não overall extra. DME simplificado soma pontuação. Evolução ramifica e tranca o Pathway. Last-gen joga FUT; a Central 3D da Galeria é current-gen.",
  },
  {
    id: "comparar",
    keywords: ["comparar", "comparador", "overall", "carta", "jogador real", "mbappe", "bellingham"],
    suggestions: ["Como começar no FUT?", "O que é a FUTZONE?"],
    links: [{ href: "/comparar", label: "Comparador" }],
    answer: () =>
      "O Comparador coloca o jogador real do lado da carta EA FC. Overall de marketing de um lado, o que o campo faz do outro.\n\nMbappé 91 ST Spearhead e Bellingham 90 CAM Box-to-Box+ estampam o ciclo 27, os dois no Real Madrid. Escolhe o atleta e lê o radar — sem tática de clube, sem preço de loja.",
  },
  {
    id: "carreira",
    keywords: [
      "carreira",
      "manager",
      "treinador",
      "atleta",
      "player career",
      "transferencia",
      "transferroom",
      "janela",
      "ovr dinamico",
      "rivalidade",
      "modo carreira",
    ],
    suggestions: ["Treinador ou atleta?", "O que é The Grounds?", "O que muda do 26 para o 27?"],
    links: [
      { href: "/noticias/carreira-treinador-e-atleta", label: "Matéria da Carreira" },
      { href: "/ea-fc", label: "EA FC · treinador × atleta" },
    ],
    answer: () =>
      "São dois saves, não um.\n\n• Treinador (Manager) — você manda no clube. Janela em etapas, valores TransferRoom, cláusula, Arena de Treino na Central, desafio que você publica no navegador.\n• Atleta (Player) — você é um jogador. Rivalidade com a torcida, briga por vaga, GER dinâmico na sua nota, CPU de colega separada da do rival.\n\nO mapa aberto para andar (distrito, mentor, bate-bola) é o The Grounds, nos Clubs. Carreira ficou mais viva para explorar menus e história — sem ser mundo 2K.",
  },
  {
    id: "treinador-ou-atleta",
    keywords: ["treinador ou atleta", "manager ou player", "qual carreira", "diferenca carreira", "carreira treinador"],
    suggestions: ["O que é The Grounds?", "Como começar no FUT?", "O que é Pro Clubs?"],
    links: [
      { href: "/ea-fc", label: "Tabela treinador × atleta" },
      { href: "/guias", label: "Guia de Carreira" },
    ],
    answer: () =>
      "Quer janela, tática e culpa da diretoria? Treinador.\nQuer minutos, duelo e a torcida no pescoço? Atleta.\nQuer andar no mapa com mentor e 11x11 com gente? The Grounds / Pro Clubs — outro modo.",
  },
  {
    id: "campeonato",
    keywords: ["campeonato", "liga", "copa", "inscricao", "cadastrar", "time", "elencos", "taça", "taca"],
    suggestions: ["O que é Pro Clubs?", "Como cadastrar um jogador?", "O que é eSports?"],
    links: [
      { href: "/campeonatos", label: "Campeonatos" },
      { href: "/times/cadastrar", label: "Cadastrar time" },
    ],
    answer: () =>
      "Campeonatos é a Central da Liga FUTZONE. Cadastro de time e de jogador é público — sem login no MVP.\n\nEntra em Campeonatos, cadastra o elenco, vê o status (aberto, em jogo, encerrado). Vestiário e call ficam em Pro Clubs. Desenho tático, em Táticas.",
  },
  {
    id: "jogador",
    keywords: ["cadastrar jogador", "jogador", "elenco", "inscrever"],
    suggestions: ["Como cadastrar um time?", "O que é Pro Clubs?"],
    links: [
      { href: "/jogadores/cadastrar", label: "Cadastrar jogador" },
      { href: "/elencos", label: "Elencos" },
    ],
    answer: () =>
      "Jogador se cadastra em /jogadores/cadastrar, também sem conta. Depois o nome aparece em Elencos. Se o time ainda não existe, cadastre o clube primeiro em Campeonatos.",
  },
  {
    id: "esports",
    keywords: ["esports", "e-sports", "copa", "palco", "fc pro", "torneio", "transmissao"],
    suggestions: ["Como cadastrar um time?", "O que é Pro Clubs?"],
    links: [{ href: "/esports", label: "eSports" }],
    answer: () =>
      "eSports na FUTZONE é palco: FC Pro Open (circuito da EA), Copa eSports FUTZONE (11x11 brasileiro) e Club Tournaments (live ops do Grounds, house rules).\n\nFormato: grupos + mata-mata, melhor de 3 a partir da semi, ban de formação. Quer jogar: cadastra o time. Quer só assistir: calendário na aba eSports.",
  },
  {
    id: "guias",
    keywords: ["guia", "comecar", "iniciante", "nao sei", "aprender", "melhorar", "treino"],
    suggestions: ["DualSense: o que apertar?", "Como defender no 27?", "Como começar no FUT?"],
    links: [{ href: "/guias", label: "Guias" }],
    answer: () =>
      "Se você está começando: Guias é a aba da mão no pad — DualSense, defesa, FUT do primeiro mês, Carreira, Lite.\n\nRotina: um fundamento por sessão (passe de primeira, jockey, giro). Grave um tempo e assista só as perdas de bola. Call curto. O time que fala menos no erro ganha mais no placar.",
  },
];

const hooks: Record<string, string> = {
  futzone: "Quer que eu te leve numa aba, ou manda a dúvida do jogo?",
  datas: "Você vai de Ultimate no dia 18 ou espera o dia 25?",
  preco: "Joga em que? PS5, Xbox, PC ou Nintendo? Eu afino o valor.",
  edicao: "O que importa mais pra você: jogar cedo ou gastar menos?",
  lite: "Quer só testar o pad ou já vai de disco cheio?",
  desconto: "Sua conta é PSN com o 26, ou é EA Play?",
  "26vs27": "Quer que eu aprofunde defesa, Grounds ou Carreira?",
  grounds: "Você tá no PS5/Series/PC, ou ainda no PS4?",
  lastgen: "Seu clube é misto de geração? Posso te falar como se virar.",
  clubs: "Quer formação, call do Discord ou como cadastrar o time?",
  calls: "Quer que eu monte a formação em cima dessas calls?",
  formacao: "Quantos vocês são no Discord no dia de liga?",
  bloco: "Seu time cansa rápido ou aguenta pressionar?",
  defesa: "Quer o comando no DualSense, passo a passo?",
  pad: "Defesa ou passe vertical — o que tá mais travado?",
  build: "Qual posição você joga no clube?",
  fut: "Quer que eu te mande a matéria completa do Ultimate Team?",
  comparar: "Quer olhar Mbappé, Bellingham ou outro nome?",
  carreira: "Você se vê mais na mesa (treinador) ou na chuteira (atleta)?",
  "treinador-ou-atleta": "Já jogou Carreira no 26, ou é a primeira?",
  campeonato: "O time já existe no Discord, ou ainda vai nascer?",
  jogador: "Já cadastrou o clube, ou começa pelo time?",
  esports: "Quer jogar a copa ou só assistir o palco?",
  guias: "Pad, FUT ou Carreira — por onde você entra?",
};

function cap(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function norm(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s+\-x]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string) {
  const stop = new Set([
    "o",
    "a",
    "os",
    "as",
    "de",
    "do",
    "da",
    "dos",
    "das",
    "e",
    "ou",
    "um",
    "uma",
    "no",
    "na",
    "nos",
    "nas",
    "me",
    "eu",
    "pra",
    "para",
    "por",
    "com",
    "que",
    "qual",
    "quais",
    "como",
    "ser",
    "tem",
    "ter",
    "foi",
    "sao",
    "eh",
    "meu",
    "minha",
    "se",
    "em",
    "ao",
    "sobre",
  ]);
  return norm(value)
    .split(" ")
    .filter((token) => token.length > 1 && !stop.has(token));
}

function firstChunks(text: string) {
  return text
    .split(/\n\n/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2);
}

function beat(memory: CoachMemory) {
  if (memory.name) {
    const lines = [`${memory.name}, olha.`, `Fecha comigo, ${memory.name}.`, `${memory.name}, é o seguinte.`];
    return lines[memory.turns % 3];
  }
  return ["Olha.", "Fecha comigo.", "É o seguinte."][memory.turns % 3];
}

function pullName(question: string) {
  const match = question.match(
    /(?:meu nome[ée]?|me chamo|sou o|sou a|pode me chamar(?: de)?)\s+([A-Za-zÀ-ú]{2,18})/i,
  );
  if (match?.[1]) return cap(match[1]);
  const only = question.trim();
  const reserved =
    /^(oi|ola|eae|eai|valeu|fut|clubs|help|zona|como|quando|quanto|sim|nao|ok|preco|tatica|guias|noticias|home|opa|fala|salve)$/i;
  if (/^[A-Za-zÀ-ú]{2,16}$/.test(only) && !reserved.test(only)) {
    return cap(only);
  }
  return null;
}

function pullPlatform(question: string): CoachPlatform | null {
  const hay = norm(question);
  if (/\bps5\b|playstation 5|play 5/.test(hay)) return "playstation";
  if (/\bps4\b|playstation 4/.test(hay)) return "playstation";
  if (/xbox/.test(hay)) return "xbox";
  if (/\bpc\b|steam|ea app|epic/.test(hay)) return "pc";
  if (/switch|nintendo/.test(hay)) return "nintendo";
  return null;
}

function isFollowUp(question: string) {
  const hay = norm(question);
  const words = hay.split(" ").filter(Boolean);
  if (words.length <= 5) return true;
  return /^(e |e o |e a |e no |e na |e se |isso|aquilo|mais|explica|como assim|nao entendi|e quanto|quanto|e o que)/.test(
    hay,
  );
}

function forceTopic(hay: string, topic: string | null) {
  if (!topic) return null;
  if (topic === "grounds" && /ps4|xbox one|switch 1|last/.test(hay)) return "lastgen";
  if (topic === "carreira" && /atleta|player|treinador|manager/.test(hay)) return "treinador-ou-atleta";
  if ((topic === "datas" || topic === "edicao") && /custa|preco|quanto|valor/.test(hay)) return "preco";
  if (topic === "preco" && /edicao|ultimate|standard|plus|qual comprar/.test(hay)) return "edicao";
  if (topic === "clubs" && /formacao|4-3|4-2|tatica/.test(hay)) return "formacao";
  if (topic === "clubs" && /call|discord|fico|sobe/.test(hay)) return "calls";
  if ((topic === "grounds" || topic === "clubs") && /carreira|treinador|atleta/.test(hay)) return "carreira";
  if (topic === "defesa" && /botao|l1|l2|pad|dualsense/.test(hay)) return "pad";
  return null;
}

function priceBubbles(memory: CoachMemory) {
  const family = memory.platform;
  const rows = family ? storePrices.filter((row) => row.family === family) : storePrices.filter((row) => row.family === "playstation").slice(0, 2);
  const lines = rows
    .map((row) => `${row.store}: Standard ${row.standard}, Ultimate ${row.ultimate}. Plus ${row.plus}.`)
    .join(" ");
  const opener = family
    ? `${beat(memory)} Nessa loja a vitrine tá assim: ${lines}`
    : `${beat(memory)} A FUTZONE não vende o jogo, só mostra a vitrine. No PlayStation a Standard é R$ 349 e a Ultimate R$ 499.`;
  const second = family
    ? "Plus de early bird já fechou em 31 de agosto. PC costuma ser mais barato que console."
    : "No PC (EA App/Steam) cai para R$ 299 / R$ 429. Nintendo ainda sem preço BR.";
  return [opener, second, hooks.preco];
}

function toBubbles(facts: string, hook: string, memory: CoachMemory) {
  const chunks = firstChunks(facts);
  const first = `${beat(memory)} ${chunks[0]}`;
  const bubbles = [first];
  if (chunks[1]) bubbles.push(chunks[1]);
  bubbles.push(hook);
  return bubbles;
}

function replyWith(
  bubbles: string[],
  links: CoachLink[],
  suggestions: string[],
  memory: CoachMemory,
  topic: string | null,
): CoachReply {
  return {
    bubbles,
    links,
    suggestions,
    memory: { ...memory, topic, turns: memory.turns + 1 },
  };
}

function greeting(query: string) {
  return /^(oi|ola|eae|eai|hey|hello|bom dia|boa tarde|boa noite|fala|salve|e ai|eai|opa)\b/.test(norm(query));
}

function thanks(query: string) {
  return /(obrigad|valeu|thanks|vlw|show|entendi|beleza|fechou|massa|top)/.test(norm(query));
}

function smallTalk(query: string, memory: CoachMemory): CoachReply | null {
  const hay = norm(query);
  const name = memory.name ? `, ${memory.name}` : "";

  if (/^(tchau|flw|falou|ate|até logo|tmj)\b/.test(hay)) {
    return replyWith(
      [`Flw${name}. Qualquer coisa é só abrir o verde de novo.`],
      [],
      [],
      memory,
      memory.topic,
    );
  }

  if (/(tudo bem|td bem|como vai|tranquilo|suave)/.test(hay) && hay.length < 40) {
    return replyWith(
      [`Tudo verde por aqui${name}. E tu?`, "Pode mandar a dúvida direto — preço, Clubs, Carreira, o que for."],
      [],
      starters.slice(0, 3),
      memory,
      memory.topic,
    );
  }

  if (/(quem e voce|o que voce e|voce e ia|voce e uma ia|chatgpt|é uma ia|e uma ia)/.test(hay)) {
    return replyWith(
      [
        `Sou a Zona${name}. Assistente da FUTZONE — papo de Discord, não palestra.`,
        "Não vendo o jogo e não invento overall. Te explico o 27 e te coloco na aba certa. Manda o que tá travando.",
      ],
      [],
      starters.slice(0, 3),
      memory,
      memory.topic,
    );
  }

  return null;
}

export function askCoach(question: string, memory: CoachMemory = emptyMemory): CoachReply {
  const clean = question.trim();
  const next: CoachMemory = {
    ...memory,
    name: pullName(clean) ?? memory.name,
    platform: pullPlatform(clean) ?? memory.platform,
  };

  if (!clean) {
    return replyWith(
      ["Manda em português normal. Tipo conversa. Preço, Clubs, Carreira, o que for."],
      [],
      starters.slice(0, 4),
      next,
      next.topic,
    );
  }

  const justNamed = Boolean(pullName(clean)) && clean.length < 28 && !/\?/.test(clean);
  if (justNamed && next.name) {
    return replyWith(
      [`Beleza, ${next.name}. Anotei.`, "Pode soltar a dúvida. O que tá travando — o jogo, o clube ou o site?"],
      [],
      starters.slice(0, 4),
      next,
      next.topic,
    );
  }

  if (greeting(clean) && clean.length < 36) {
    const hello = next.name
      ? `E aí, ${next.name}. Tô aqui.`
      : "E aí. Tô no canto da FUTZONE. Pode mandar como se fosse Zap.";
    return replyWith(
      [hello, next.name ? "O que você quer resolver agora?" : "Qual teu nome — ou já solta a dúvida do 27?"],
      [],
      starters.slice(0, 4),
      next,
      next.topic,
    );
  }

  const talk = smallTalk(clean, next);
  if (talk) return talk;

  if (thanks(clean) && clean.length < 48) {
    const who = next.name ? ` ${next.name}` : "";
    return replyWith(
      [`Fechou${who}. Se travar de novo, me chama.`, "Quer que eu fique nesse assunto ou muda o papo?"],
      [],
      next.topic ? cards.find((card) => card.id === next.topic)?.suggestions ?? starters.slice(0, 3) : starters.slice(0, 3),
      next,
      next.topic,
    );
  }

  const hay = norm(clean);
  const forced = forceTopic(hay, next.topic);
  const follow = isFollowUp(clean) && next.topic;
  const words = tokens(clean);
  const scored = cards
    .map((card) => {
      let score = 0;
      if (forced === card.id) score += 20;
      if (follow && card.id === next.topic) score += 8;
      for (const keyword of card.keywords) {
        const key = norm(keyword);
        if (hay.includes(key)) score += key.includes(" ") ? 6 : 4;
        if (words.some((word) => key.includes(word) || word.includes(key))) score += 2;
      }
      return { card, score };
    })
    .sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (!best || best.score < 4) {
    const lost = next.name ? `${next.name}, não peguei essa.` : "Não peguei essa no detalhe.";
    return replyWith(
      [
        lost,
        "Manda de outro jeito. Tipo: quanto custa no PS5, o que é Pro Clubs, treinador ou atleta.",
      ],
      [
        { href: "/guias", label: "Guias" },
        { href: "/ea-fc", label: "EA FC" },
        { href: "/pro-clubs", label: "Pro Clubs" },
      ],
      starters.slice(0, 4),
      next,
      next.topic,
    );
  }

  const card = best.card;
  const hook = hooks[card.id] ?? "Quer que eu aprofunde isso?";
  const bubbles = card.id === "preco" ? priceBubbles(next) : toBubbles(card.answer(), hook, next);

  return replyWith(bubbles, card.links, card.suggestions, next, card.id);
}

export const coachStarters = starters;
