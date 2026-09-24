export type NewsArticle = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  href?: string;
  body: string[];
};

export const news: NewsArticle[] = [
  {
    slug: "ultimate-team-fc-27",
    date: "18 set 2026",
    tag: "Ultimate Team",
    featured: true,
    title: "Sim: o FC 27 tem Ultimate Team. E a Galeria muda o clube",
    excerpt:
      "Football Ultimate Team segue no disco. Pack, mercado, Champions e Rivals continuam. O que o 26 não tinha: Galeria, holográfico, DME simplificado e Evolução ramificada.",
    href: "/ea-fc",
    body: [
      "Confirmado pela EA, na Pitch Notes oficial do FUT (2 de agosto de 2026) e na página de modos do FC 27: Football Ultimate Team™ está no jogo. Não saiu, não virou outro nome, não ficou só no last-gen. É um dos três pilares do disco, ao lado de The Grounds/Clubs e Carreira. Early access 18 de setembro; launch mundial 25 de setembro.",
      "O que continua: você monta o clube dos sonhos com Itens de Atleta, joga Division Rivals, FUT Champions, Mercado de Transferências, Objetivos, Pacotes, DMEs (SBCs) e Evoluções. O Competitive do 27 — defesa mais manual, consciência ofensiva — vale neste modo. Authentic 2.0 não entra no FUT: aqui o preset é o competitivo.",
      "O que o 26 não tinha é a Galeria do FUT. Todo item que passa no clube (pack, mercado, objetivo, DME) deixa registro. Empréstimo não conta. Evolução entra pelo item básico, antes do evo. Vendeu no mercado ou meteu no DME? O card continua na Galeria e ainda preenche Conjunto. No 26, o ouro que saía do clube era história morta.",
      "Conjuntos vêm por país, liga, clube e campanha. A EA promete mais de 100 no launch, incluindo ligas masculinas e femininas, Squad Foundations e Team of the Week. Completar é só o começo: cada Conjunto ganha grau (nota) pelo GER e pela versão especial. Você volta o ano inteiro e troca o ouro 75 pelo holográfico. Etiquetas pagam combinação (quantidade de ouro, campanha, first owner). Tudo isso sobe o Nível da Galeria — cosmética, Token da Galeria e, nos marcos altos, item holográfico.",
      "Token troca na Loja da Galeria por uniforme, emblema e o novo Hall do FUT (versão base desses ídolos no launch). A Central da Galeria é o hub visual do FUT: cards em 3D no espaço do clube. Só PC, PS5, Xbox Series e Switch 2. Last-gen joga Ultimate Team, mas sem esse ambiente 3D.",
      "Holográfico é versão mais rara do item especial: visual metalizado (e o impecável, com nome estilizado). No campo, GER e qualidade são iguais ao card normal. Vale apresentação, raridade e mais pontos na Galeria. Cada atleta elegível tem só uma versão holográfica. Bronze, prata e ouro básico deixam de ser “comum/raro”: só o metal. Pacote não anuncia mais “X raros garantidos”; a EA diz que a chance de ouro 82− fica no nível do 26.",
      "DME simplificado: em vez de quebra-cabeça de entrosamento e posição, você manda item e soma pontuação (o mesmo sistema da Galeria). Dá para enviar repetido, progresso parcial, e a maioria dos DMEs de atleta e de melhoria deve usar esse formato. O DME tradicional, de puzzle, continua existindo. Evolução ganha Trajetória (ramificação: drible ou marcação) e prévia da cadeia — o Pathway tranca o card, então não gaste o primeiro totw no escuro. PlayStyles Lab volta na Temporada 1. Item especial do ano ganha Função++ nas posições primária e secundária.",
      "Campanha ganha uma Central só dela. Quem não vive de Weekend League tem Evento ao Vivo solo, contra IA temática. Recompensa no fim da partida (moeda e SP) passa a contar mais do que o pacote semanal. Token de evento segue. Power creep: a EA quer, no fim do ano, menos abismo entre o ouro base e o item de campanha final — no máximo três Estilos de Jogo+ por card, menos semanas com elenco de campanha novo. FUT no 27 ainda é Ultimate Team. O que muda é que o clube acumula legado, não só overall.",
    ],
  },
  {
    slug: "carreira-treinador-e-atleta",
    date: "18 set 2026",
    tag: "Carreira",
    title: "Carreira no 27: treinador, atleta e o mundo que dá para explorar",
    excerpt:
      "O mapa aberto é o The Grounds. A Carreira ficou um futebol vivo: Central, Arena de Treino, janela em etapas. Treinador manda no clube; atleta briga no vestiário.",
    href: "/ea-fc",
    body: [
      "Muita gente abre o FC 27 procurando o “mundo aberto da Carreira”. O mapa para andar, achar distrito, mentor e bate-bola é o The Grounds — e ele mora nos Clubs, não no save de técnico. Até 100 pessoas, Terraço no centro, Montclair, Zeiza e Parkside. Só PS5, Series, PC e Switch 2.",
      "A Carreira do 27 é outro tipo de mundo: o do futebol que se mexe quando você não está no pad. Central reformada, Arena de Treino 11x11 (titulares contra reservas, com o seu preset de Authentic), notícia e especulação que citam a sua lista de observação, coletiva que pesa no vestiário. Dá para explorar mais — menus, histórias e decisões — sem ser um City da 2K.",
      "Carreira de Treinador (Manager) é o save de quem quer a mesa. O mercado do 26 era uma conversa 3D; o do 27 é uma janela: sondagem, permissão, espera, rival aparecendo depois do acordo. Valores vêm da TransferRoom (xTV) e mudam com forma, liga e poder de compra. Parcela, recompra, % de venda futura, empréstimo de volta, troca. A IA não gasta o caixa inteiro: clube de base compra jovem, clube de título compra auge, rival histórico quase não negocia com você.",
      "O treinador ainda ganha o Manager ao Vivo com Desafio de Criação: monta o cenário no navegador (QR na Central), publica, manda o código para o amigo em qualquer plataforma. Até 10 desafios no ar. Arena de Treino testa o 4-2-3-1 antes da rodada. Liga MX entra com Apertura e Clausura. Tutorial dá para desligar. Evento inesperado pode tirar ponto — e a coletiva decide se o grupo ou o estrela fica do seu lado.",
      "Carreira de Atleta (Player) é o save de quem quer o corpo, não a prancheta. Você não fecha o 9 no mercado: você disputa o 9 no domingo. A novidade que o 26 não emoldurava assim é Rivalidade: a torcida aponta um concorrente da sua função, a imprensa escolhe herói ou vilão, e o objetivo cai na mesa — mais assistência em 5 jogos, hat-trick primeiro, o que a temporada pedir. Ganhou a prova, sobe ponto de personalidade. Não terminou, leva metade.",
      "No atleta o GER dinâmico dói na pele: três jogos no banco e uma pancada baixam a nota da semana; sequência de gol sobe. Authentic 2.0 pesa mais aqui do que no FUT, e o slider de CPU agora se parte em colega e adversário — o seu time deixa de jogar igual ao rival. Liga MX e ídolos da temporada também entram neste save.",
      "Como escolher: quer janela, tática e culpa da diretoria? Treinador. Quer minutos, duelo e a torcida no seu pescoço? Atleta. Quer andar no mapa, mentor e 11x11 com gente de verdade? Isso é The Grounds, na aba Pro Clubs. Os três cabem no mesmo disco — só não são o mesmo modo.",
    ],
  },
  {
    slug: "fc-27-vs-fc-26",
    date: "17 set 2026",
    tag: "Comparativo",
    title: "FC 27 x FC 26: o que de fato muda neste ciclo",
    excerpt:
      "O 27 não é só roster novo. A EA devolve controle ao jogador, cria um playground social e reconstrói Carreira e FUT. Aqui está o mapa do que o 26 não tinha.",
    href: "/ea-fc",
    body: [
      "O EA Sports FC 27 chega em 25 de setembro de 2026, com early access em 18 de setembro para Ultimate e Ultimate Plus. Mbappé e Bellingham estampam o ciclo. Por baixo da capa, o recado da EA é outro: menos assistência da IA, mais decisão no pad — e modos que o FC 26 simplesmente não oferecia.",
      "No 26, o competitivo ainda contava com tackles e contenções automáticas da defesa. No 27, essa era acaba no preset Competitive: o zagueiro que você não controla deixa de entrar sozinho. Quem joga Clubs, FUT Champions ou Division Rivals sente a diferença na primeira transição.",
      "O 26 separou Competitive e Authentic, mas o Authentic parava na Carreira e no Kick-Off. O 27 aprofunda os dois lados: Competitive mais manual; Authentic 2.0 com movimento mais pesado, CPU mais esperta e 25 sliders novos de gameplay mais 10 de CPU.",
      "Fora do campo, o salto é de produto. The Grounds não existia. Clubs deixa de ser um menu e passa a viver num hub com até 100 pessoas, três distritos e mentores. FUT ganha a Galeria. Carreira ganha mercado reconstruído com TransferRoom e OVR dinâmico. Last-gen (PS4, Xbox One, Switch 1) fica de fora do Grounds e do Clubs — isso o 26 ainda misturava de outro jeito.",
      "Em resumo: o 26 alisou o jogo com ajuda da IA. O 27 cobra posicionamento, timing e clube. O resto desta aba detalha cada fatia.",
    ],
  },
  {
    slug: "defesa-manual-fc-27",
    date: "16 set 2026",
    tag: "Gameplay",
    title: "Defesa no 27: o auto-tackle do 26 ficou para trás",
    excerpt:
      "Contain mais distante, jockey mais rápido no zagueiro que você controla e cabeceio que exige precisão. O competitivo deixa de defender por você.",
    body: [
      "A Pitch Notes de gameplay do FC 27 ataca a reclamação número um do 26: a defesa da IA ganhava bola sem você apertar nada. No Competitive do 27, tackles automáticos de longa distância somem. Companheiros ainda reagem, mas a era de marcar passivo acabou.",
      "Teammate Contain também muda de filosofia. Segurar o botão para a IA marcar agora posiciona o companheiro mais longe. Se você quiser ser agressivo, tem que trocar de jogador e entrar. No 26, o contain puxava o duelo para você. No 27, ele só organiza o espaço.",
      "A compensação: o zagueiro sob o seu comando ganha jockey mais rápido que no 26 e tackle em pé com mais alcance quando você dispara na hora certa. Ler o driblador, trocar para o marcador certo e posicionar o corpo vale mais do que spammar tackle.",
      "Escanteio e cruzamento acompanham a mesma lógica. Surge um sistema em duas fases, com Avoidance na bola parada para o atacante se livrar da marcação. Cabecear limpo ficou mais difícil; quando conecta, o desvio é mais preciso. No 26 o cabeceio era mais frequente e mais loteria.",
      "Isso vale para o competitivo. Carreira e Authentic seguem outro tuning — o 27 não unificou tudo num único saco, só deixou explícito: online cobra mão; offline cobra futebol.",
    ],
  },
  {
    slug: "the-grounds-playground",
    date: "15 set 2026",
    tag: "The Grounds",
    title: "The Grounds: o modo que o FC 26 não tinha",
    excerpt:
      "Um playground social com Terraço, três distritos e até 100 jogadores. Só PS5, Xbox Series, PC e Switch 2. Last-gen fica de fora.",
    href: "/pro-clubs",
    body: [
      "The Grounds é a novidade de produto do FC 27. Não é um reskin de menu do 26: é um mundo compartilhado, com Terraço no centro e três distritos inspirados em culturas de bola — Montclair (futebol urbano francês e gaiolas), Zeiza (espírito de potrero argentino) e Parkside (herança operária do Reino Unido).",
      "Até 100 pessoas no mesmo espaço. Você encontra amigo, entra em kickabout no parque, joga small-sided, dropa no estádio 11x11 ou no Rush. Clubs mora aqui: a entrada do Clubhouse muda com a identidade do seu clube.",
      "Mentores guiam o progresso. Alex Hunter volta de The Journey. Mbappé puxa o small-sided estilo Bondy. Chloe Kelly traz o grassroots inglês. Dybala puxa Clubs, lealdade e identidade. Isso não existia no 26 — o máximo era o menu de Clubs e o Rush isolado.",
      "Plataforma importa. Grounds e Clubs do 27 rodam em PS5, Xbox Series X|S, PC e Nintendo Switch 2. PS4, Xbox One e Switch 1 ficam sem o playground. No 26 você ainda abria Clubs nessas gerações; no 27 o social de verdade é current-gen.",
      "O mundo evolui na temporada com campanhas, live ops, loja e atmosfera nova. Não é um hub estático de launch. Quem só jogava FUT no 26 ganha, pela primeira vez na linha FC, um lugar para ficar quando a partida acaba.",
    ],
  },
  {
    slug: "clubs-dentro-do-grounds",
    date: "14 set 2026",
    tag: "Clubs",
    title: "Clubs no 27: liga, playoff e torneio 11x11 no mesmo mundo",
    excerpt:
      "O 11x11 continua, mas agora mora no Clubhouse. Torneios ao vivo com house rules entram no calendário que o 26 não tinha.",
    href: "/pro-clubs",
    body: [
      "No FC 26, Clubs era um modo: você entrava, jogava a liga, saía. No 27, Clubs é o coração do Grounds. Liga e playoff voltam, mas o caminho é andar até o Clubhouse e pular no 11x11, no Rush ranqueado ou no drop-in de estádio.",
      "A adição grande são os Club Tournaments: eventos 11x11 ao vivo, além da liga. Número de fases, regras e recompensas mudam o ano inteiro. House rules incluem Mystery Ball, King of the Hill, No Rules, Cabeça e Voleio, Survival e Long Range. O 26 tinha live events mais tímidos; o 27 trata torneio como calendário.",
      "Fora do 11x11 tem small-sided, kickabout e minijogos no parque — Bocce, Keepaway, The Big Race, Bucket Ball, Balloon Ball. Serve para esquentar o virtual pro e para quem não tem 11 no Discord na terça à noite.",
      "Progressão do pro também muda de casa: arquétipos, masteries, AMPs, consumíveis e objetivos de clube passam a viver no Grounds. Temporada e passe acompanham o mundo, não só a tela de FUT.",
      "Na FUTZONE isso vira liga de verdade: o mesmo pad, o mesmo clube, agora com um saguão para encontrar gente antes do apito. Cadastro de time segue público, sem conta.",
    ],
  },
  {
    slug: "carreira-mercado-transferencias",
    date: "13 set 2026",
    tag: "Carreira",
    title: "Carreira: o mercado do 26 era uma conversa; o do 27 é uma novela",
    excerpt:
      "Etapas de negociação, valores TransferRoom, cláusula, parcelamento e clube rival furando o acordo. O maior patch de mercado da franquia.",
    body: [
      "A EA chama o mercado do FC 27 de um dos maiores upgrades da história do modo. No 26, muita coisa se resolvia numa cena 3D única. No 27 a cena 3D cai: entra um hub 2D, com etapas, espera e reviravolta.",
      "O fluxo agora é: sondagem, permissão, conversas em paralelo (clube vendedor, clube comprador, jogador) e acordo que ainda pode quebrar. Rival aparece, jogador pede mais, você volta à mesa. Dá para delegar ao diretor de futebol. Vender também ganha etapas: ofertas chegam com o tempo, você aceita, recusa ou negocia.",
      "Valores deixam de ser um número estático. Parceria com a TransferRoom traz o modelo xTV, usado por clubes reais. Preço muda com poder de compra, potencial, nota, forma e força da liga, e evolui ao longo das temporadas — o 26 não tinha essa âncora de mercado.",
      "Cláusulas explodem: início imediato, próxima janela ou próxima temporada; empréstimo de volta; troca de jogadores; parcela em várias temporadas; bônus por título ou desempenho; direitos futuros. Contratos e cláusulas ganham tela própria, junto com shortlist, lista de transferências e histórico da janela inteira.",
      "Scouting e Transfers se separam no hub. Relatório de olheiro de um lado; negociação ativa do outro, com indicador de interesse do jogador. Quem sofreu com o mercado opaco do 26 ganha, no papel, um modo que se parece mais com janela real do que com menu de RPG.",
    ],
  },
  {
    slug: "ovr-dinamico-carreira",
    date: "12 set 2026",
    tag: "Carreira",
    title: "OVR dinâmico: a nota no 27 sobe e desce como no domingo",
    excerpt:
      "Forma, moral, físico, lesão e minutos alteram o overall na temporada. No 26 a nota era quase um carimbo.",
    body: [
      "No FC 26, o overall da Carreira era um retrato lento: o jogador crescia no desenvolvimento e quase parava. No 27 o OVR dinâmico faz a nota oscilar na temporada. Forma, confiança, físico, lesão, minutos e briga por vaga mexem no número que você vê no elenco.",
      "A ideia da EA: um 84 em sequência de gols não é o mesmo 84 depois de três jogos no banco e uma pancada. O potencial de fundo continua; o overall da semana conta a história atual. Isso muda scouting, venda e até a conversa na coletiva.",
      "Junto vem dado de jogador mais transparente: perfis de crescimento, rank no elenco, teto de posições, potencial dinâmico e avaliação do treino. Olheiro e mercado passam a ler esse retrato, não só o overall de julho.",
      "Player Career ganha Rivalries — confrontos pessoais que o 26 não emoldurava assim. Manager Live vira Creator Challenges no navegador: você monta o cenário, publica e joga o dos outros. No 26 as ferramentas eram internas; no 27 a comunidade cria o desafio.",
      "Liga MX entra no pacote, jogadores gerados herdam dado existente, arena de treino abre no hub central e a simulação profunda usa desempenho da temporada atual. Carreira deixa de ser o modo que só ganhava elenco novo a cada FIFA.",
    ],
  },
  {
    slug: "galeria-fut-vs-26",
    date: "11 set 2026",
    tag: "Ultimate Team",
    title: "Galeria FUT: o 27 guarda o clube; o 26 só girava o elenco",
    excerpt:
      "Sets por liga, nação e campanha, nota da coleção e recompensa mesmo depois de vender o card. Evoluções ramificadas e SBC mais limpo.",
    href: "/comparar",
    body: [
      "Ultimate Team no 26 era ciclo de pack, SBC e evo linear. No 27 a Galeria FUT vira um segundo progresso: cada item que passa no clube — pack, mercado, objetivo, SBC — pode entrar em Sets temáticos (nação, liga, clube, campanha). Empréstimo não conta. Evo entra pelo item base.",
      "O pulo: vender no mercado ou meter no SBC não apaga o registro. O card continua na Galeria. Completar o Set gera nota (grade) conforme overall e versão especial; tags (TOTW, first owner, etc.) somam bônus. Você volta no Set o ano inteiro e troca o gold 75 pelo holográfico.",
      "Cada Set sobe o Gallery Level. Marco de nível paga cosmética, Gallery Token e, mais alto, itens holográficos. É coleção com recompensa, não só museu. No 26, o card que saía do clube era história morta.",
      "Evolutions ganham Pathways: ramificação, prévia da cadeia e PlayStyles Lab. SBC fica mais direto, com a mesma lógica de pontuação da Galeria. Campanhas devem terminar o ano com menos gap de atributo e PlayStyle entre o gold base e o item final — a EA quer frear o power creep que o 26 deixou estourar.",
      "Recompensa de partida fica mais imediata e flexível, com event token. Single-player live e adversário temático entram para quem não vive só de WL. FUT no 27 ainda é Ultimate Team; o que muda é que o clube acumula legado, não só overall.",
    ],
  },
  {
    slug: "gameplay-autentica-2",
    date: "10 set 2026",
    tag: "Gameplay",
    title: "Authentic 2.0: o futebol do 26 offline ganha peso de verdade",
    excerpt:
      "Movimento mais pesado, CPU mais inteligente, física e 35 sliders novos. Competitive e Authentic continuam separados — só que os dois evoluem.",
    body: [
      "O FC 26 inventou o split: Competitive para online (FUT, Clubs) e Authentic para Carreira e Kick-Off. Authentic não entra em FUT nem Clubs. O 27 mantém a divisão e empurra o Authentic para a 2.0.",
      "Movimento fica mais realista, com transição de animação menos arcade. CPU marca e ataca com mais variação. Ambiente (vento, chuva, física de bola) pesa mais. Duelo corpo a corpo deixa de ser loteria de colisão do 26.",
      "Chegam 25 sliders novos de gameplay e 10 de CPU. CPU agora se parte em oponente e companheiro — essencial na Player Career, quando você trava num único atleta e precisa que o time não jogue igual ao rival.",
      "No Competitive, o pacote é outro: consciência ofensiva, corridas em curva, drible que não morre no primeiro contato, passe mais manual e cruzamento por habilidade. O 26 priorizou fluidez com ajuda. O 27 prioriza quem lê o espaço.",
      "Quem só jogava FUT no 26 e abrir a Carreira no 27 vai achar o jogo mais lento e mais sujo — de propósito. São dois FC 27 no mesmo disco. O comparativo certo não é “está mais fácil”: é “em qual preset você está”.",
    ],
  },
  {
    slug: "mentores-grounds",
    date: "9 set 2026",
    tag: "The Grounds",
    title: "Hunter, Mbappé, Kelly e Dybala: os mentores que o 26 não tinha",
    excerpt:
      "The Journey volta no playground. Cada mentor puxa um jeito de jogar — da gaiola de Bondy ao 11x11 de clube.",
    body: [
      "Alex Hunter não era NPC de tutorial no 26: ele estava fora. No 27 ele volta como braço direito no Grounds, com desafios de evolução inspirados na subida de The Journey — de prospecto a campeão.",
      "Mbappé puxa o futebol de rua de Bondy: small-sided, agilidade, criatividade. Chloe Kelly traz o grassroots inglês, kickabout e jogar com amigo sem ranking no pescoço. Dybala, da Argentina à Europa, cuida de Clubs, estádio, identidade e lealdade.",
      "Isso muda o onboarding. No 26 você caía no menu de Clubs ou no FUT e aprendia no sofrimento. No 27 o mentor é o caminho até o modo — e também conteúdo recorrente, não cutscene de launch.",
      "Para a FUTZONE, o recado é o mesmo da identidade: o 27 quer que o clube exista fora da partida. Mentor, distrito e Clubhouse são a desculpa oficial para o Discord ficar aberto antes do 11x11.",
    ],
  },
  {
    slug: "lancamento-edicoes-lite",
    date: "8 set 2026",
    tag: "Lançamento",
    title: "Quando joga, o que vem na caixa e o que o last-gen perde",
    excerpt:
      "Early access 18 set, launch 25 set, Lite no mesmo dia. Ultimate Plus já fechou. Grounds não roda em PS4, One e Switch 1.",
    href: "/ea-fc",
    body: [
      "Calendário do 27: acesso antecipado em 18 de setembro para Ultimate e Ultimate Plus (até 7 dias). Lançamento mundial em 25 de setembro. Lite gratuito no mesmo dia, 16:00 UTC, com Kick-Off e modos selecionados, com upgrade depois. EA Play: 10% no digital e trial de 10h a partir do dia 18.",
      "Edições: Standard (R$ 349 no PlayStation/Xbox, R$ 299 no PC). Ultimate (R$ 499 / R$ 429) com passe da Temporada 1, até 6.000 FC Points e slot extra de Evolution. Ultimate Plus (R$ 749,50 / R$ 699) com passes 1 a 5, até 10.000 FC Points e ídolo — early bird até 31 de agosto, não volta, e não existe na Epic nem no Nintendo.",
      "Dono do FC 26 na PSN vê 10% na Ultimate e na Plus da PlayStation Store. Switch e Switch 2 têm Standard e Ultimate confirmados, sem preço BR na vitrine. Plus não sai no Nintendo.",
      "O corte geracional é o que mais diferencia do 26: The Grounds e Clubs do 27 são PS5, Series, PC e Switch 2. PS4, Xbox One e Switch 1 jogam o disco, sem o playground e sem Clubs. Upgrade de PS4 para PS5 e de One para Series é grátis nas SKUs que a loja amarra.",
      "Capa do ciclo: Mbappé 91 ST Spearhead e Bellingham 90 CAM Box-to-Box+, os dois no Real Madrid. O 26 teve outra vitrine; o 27 vende o Madrid e o Grounds no mesmo cartaz.",
    ],
  },
  {
    slug: "futzone-abre-as-portas",
    date: "17 set 2026",
    tag: "Portal",
    title: "FUTZONE no ar: cobertura do 27, comparador e liga sem login",
    excerpt:
      "O portal abre com home de console, preços por loja, guias de pad e cadastro público de times. Sem conta no MVP.",
    href: "/campeonatos",
    body: [
      "A FUTZONE entra no ar no mesmo fim de semana do early access do FC 27. Sem login no MVP: home cinematográfica, cobertura de preços e modos, guias de tática, comparador real × EA FC e cadastro público de time para a Liga Pro Clubs.",
      "A aba Notícias concentra o que muda do 26 para o 27. O hub EA FC guarda tabela por loja. Guias e táticas são para DualSense, não para planilha. Campeonatos seguem abertos para quem já montou elenco no Discord.",
      "Comunidade, perfil e loja ficam para as fases 3 e 4. Por enquanto o recado é o do brand: mais que um jogo, é a nossa paixão — e o 27 é o pitch em que isso vira clube.",
    ],
  },
];

export const newsBySlug = Object.fromEntries(news.map((article) => [article.slug, article]));

export const fc26Vs27 = [
  { area: "Defesa competitiva", fc26: "IA ainda tacklea e contém por você", fc27: "Tackle automático some; contain marca de longe" },
  { area: "Ataque", fc26: "Corrida mais previsível, drible morre no contato", fc27: "Corrida em curva, consciência ofensiva, drible sob pressão" },
  { area: "Bola parada", fc26: "Escanteio clássico, cabeceio mais frequente", fc27: "Duas fases, Avoidance, cabeceio mais difícil e mais preciso" },
  { area: "Hub social", fc26: "Não existia playground compartilhado", fc27: "The Grounds, até 100 jogadores, 3 distritos" },
  { area: "Clubs", fc26: "Modo no menu, live events tímidos", fc27: "Vive no Grounds; torneio 11x11 e house rules" },
  { area: "Carreira treinador", fc26: "Mercado numa conversa 3D; OVR quase carimbo", fc27: "Janela em etapas + TransferRoom; Arena na Central; Desafio de Criação" },
  { area: "Carreira atleta", fc26: "Save de jogador sem rivalidade emoldurada", fc27: "Rivalidades, torcida herói/vilão, CPU colega ≠ adversário" },
  { area: "Mundo para explorar", fc26: "Menu de Clubs e Rush isolado", fc27: "The Grounds é o mapa aberto (Clubs). Carreira ganha Central viva, sem mapa 2K" },
  { area: "Ultimate Team", fc26: "Pack, SBC e evo linear; card vendido some", fc27: "Galeria permanente, evo ramificada, menos power creep no fim de ano" },
  { area: "Authentic", fc26: "Split nasceu aqui; sliders mais curtos", fc27: "Authentic 2.0, 25+10 sliders, CPU oponente ≠ companheiro" },
  { area: "Last-gen", fc26: "Clubs ainda abria em PS4 / One", fc27: "Grounds e Clubs só em PS5, Series, PC e Switch 2" },
] as const;
