export type GuideHub = "taticas" | "builds" | "guias";

export type Guide = {
  slug: string;
  title: string;
  tag: string;
  hub: GuideHub;
  excerpt: string;
  body: string[];
};

export const guides: Guide[] = [
  {
    slug: "formacao-4-3-3-pro-clubs",
    title: "Formação 4-3-3 no Pro Clubs",
    tag: "Formação",
    hub: "taticas",
    excerpt: "Largura, volante único e pontas por dentro — o 4-3-3 que funciona no 11x11.",
    body: [
      "O 4-3-3 no Clubs funciona quando o volante único não tenta ser 10. Ele cobre a frente da zaga, o interior esquerdo sobe no meio-espaço e o interior direito equilibra.",
      "Pontas: o da direita corta para dentro se o virtual pro for canhoto (e vice-versa). Laterais só sobem um de cada vez — no pad, dois laterais no ataque é gol contra na transição.",
      "Instruções práticas: profundidade 55–65, largura 60, passes em apoio. Se o time rival joga com 2 volantes, troque para 4-2-3-1 no intervalo em vez de insistir.",
    ],
  },
  {
    slug: "formacao-4-2-3-1-pro-clubs",
    title: "4-2-3-1: o sistema mais estável do 11x11",
    tag: "Formação",
    hub: "taticas",
    excerpt: "Dois volantes, um 10 e pontas por dentro. O desenho que perdoa elenco incompleto.",
    body: [
      "O 4-2-3-1 é o default da FUTZONE quando o Discord não está com 11 titulares. Dois volantes cobrem a transição que o 4-3-3 deixa viva. O 10 joga entre as linhas; os pontas fecham por dentro; o 9 ocupa o zagueiro da bola.",
      "Volante direito (6): âncora. Não passa da intermediária sem a bola. Volante esquerdo (8): chega na área no segundo tempo da jogada. Se os dois sobem juntos, o 4-2-3-1 vira 4-0-6 e o rival mata no contra.",
      "O 10 não precisa driblar o primeiro. O trabalho é receber de costas, girar ou soltar de primeira no ponta. Profundidade 50–58, largura 52–58, construção em apoio. Pressão só quando o 9 e os pontas pisam juntos.",
      "Troca no intervalo: se o rival tranca com 5 na zaga, suba a largura e peça cruzamento rasteiro. Se tomar gol de transição, trave o 8 e jogue com dois 6 até o 70.",
    ],
  },
  {
    slug: "formacao-4-4-2-e-3-5-2",
    title: "4-4-2 e 3-5-2: plano B no pad",
    tag: "Formação",
    hub: "taticas",
    excerpt: "Quando o 9 precisa de parceiro ou os laterais do rival estão matando o jogo.",
    body: [
      "O 4-4-2 no Clubs não é retranca de 2002. É dois 9 ocupando os dois zagueiros e os meios fechando por dentro. Os pontas do 4-4-2 jogam como interiores: fecham o corredor e chegam na área no segundo pau.",
      "Use o 4-4-2 quando o atacante titular está isolado no 4-3-3 ou quando o rival joga com linha de 3. Os dois volantes ficam compactos. Largura 48–54. Sem isso vira 4-2-4 e você toma gol no meio.",
      "O 3-5-2 é o plano para matar lateral ofensivo do rival. Três zagueiros, dois wingbacks e dois 9. Só funciona se os wingbacks tiverem stamina e se o volante do meio souber cobrir o lado que sobe.",
      "Regra da FUTZONE: 3-5-2 no máximo 20 minutos. Se o wingback cansar, volte para 4-2-3-1. Três zagueiros cansados no pad é pênalti ambulante.",
    ],
  },
  {
    slug: "tatica-pressao-alta",
    title: "Tática de pressão alta",
    tag: "Tática",
    hub: "taticas",
    excerpt: "Quando apertar, quando recuar e como não tomar bola nas costas no pad.",
    body: [
      "Pressão alta no FC 27 não é sprintar em todo mundo. É fechar o passe de construção: pontas no lateral adversário, atacante no zagueiro da bola, volante no 6 rival.",
      "No DualSense, o botão de pressão da linha só vale se o time inteiro pisa junto. Um jogador adiantado demais abre o corredor nas costas — o clássico gol de Clubs. No 27 a IA defende menos por você: se o ponta não acompanha, o gol é seu.",
      "Use pressão por 8–12 minutos de jogo real, depois recue o bloco. Stamina no Pro Clubs é recurso coletivo. Combine no Discord: “press 10 min, depois médio”.",
    ],
  },
  {
    slug: "tatica-bloco-medio",
    title: "Bloco médio: o default que ganha liga",
    tag: "Tática",
    hub: "taticas",
    excerpt: "Linha no círculo central, pressão no portador da bola e saída limpa. O que a maioria dos clubes deveria jogar.",
    body: [
      "Bloco médio é a tática que mais pontua na Liga FUTZONE. A linha de defesa fica na intermediária defensiva. O primeiro a pressionar é quem está mais perto da bola; os outros fecham passagem, não o homem.",
      "No 27, contain distante da IA deixa o bloco ainda mais importante: se todo mundo segura contain, o rival tem tempo de sobra. Troque, aproxime, chute o tackle você. O bloco só funciona com troca de jogador.",
      "Saída: goleiro no zagueiro aberto, volante desce um passo, ponta abre. Não lance longo no 9 se o virtual pro não for alvo. Passe de primeira no 8 e o 10 recebe entre as linhas.",
      "Quando sair do bloco: 1–0 no relógio, rival no 4-3-3 puro ou cansaço visível. Quando ficar: 0–0 fora de casa, rival com dois pontas rápidos, ou elenco com 8 no Discord.",
    ],
  },
  {
    slug: "tatica-transicao",
    title: "Transição: o gol de Clubs mora aqui",
    tag: "Tática",
    hub: "taticas",
    excerpt: "Roubo, três passes e finalização. Contra-ataque no 27 premia quem não toca demais.",
    body: [
      "A maioria dos gols de Pro Clubs não nasce de posse de 20 toques. Nasce de roubo na intermediária, passe vertical e 9 na cara. No 27 o drible aguenta o primeiro contato — mas o contra ainda mata quem sobe os dois laterais.",
      "Regra dos três passes: roubo → 8 ou 10 → ponta ou 9 → chute. Quarto passe só se a linha rival reconstituiu. Passar de lado no contra é presente.",
      "Defensivamente a transição é o oposto: quem perde a bola é o primeiro a pressionar. Os outros recuam em linha. O lateral do lado da bola não tenta carrinho; fecha o corredor. O lado cego desce.",
      "Calls: “contra” (vertical agora), “segura” (já reconstituiu, posse), “fico” (o que perdeu a bola pressiona). Sem call, o 9 sai sozinho e o volante fica no ataque.",
    ],
  },
  {
    slug: "build-volante-e-ponta",
    title: "Build de volante e de ponta",
    tag: "Arquétipo",
    hub: "builds",
    excerpt: "Dois virtual pros, dois caminhos de atributo para o ciclo 27.",
    body: [
      "Volante (arquétipo holding / box-to-box): priorize interceptação, passe curto, físico e resistência. Habilidade 4 estrelas já basta. Perna ruim 3. Não gaste ponto em chute de longa até o build secundário.",
      "Ponta (inside forward / winger): ritmo, drible e passe. Finalize só depois de 80 de drible. No ciclo 27, o cruzamento rasteiro voltou a valer — um ponto em cruzamento muda o 4-3-3.",
      "Os dois virtual pros combinam: o volante não precisa driblar o primeiro; o ponta não precisa marcar o 9. Dividam as funções no clube e o overall coletivo sobe mais que o individual.",
    ],
  },
  {
    slug: "build-goleiro-e-zaga",
    title: "Build de goleiro e de zagueiro",
    tag: "Arquétipo",
    hub: "builds",
    excerpt: "Sweeper-keeper no 27 e zaga que troca, não só rebate. O fundamento que segura liga.",
    body: [
      "Goleiro no Clubs do 27 não é só reflexo. Com a defesa mais manual, a linha fica mais alta e o 1 precisa sair. Priorize posicionamento, reflexo, jogo aéreo e passe. Pé de 3 estrela já serve; 4 estrela é luxo. Arquétipo sweeper-keeper se o time joga bloco médio-alto; se joga retranca, fique no shot-stopper e não invente.",
      "Zagueiro: interceptação, marcação, físico, jogo aéreo, passe curto. Ritmo até 75–80 já disputa a Liga. Skill 3. Carrinho é último recurso — no 27 o tackle em pé no jogador certo vale mais. Um zagueiro constrói (passe), o outro destrói (duelo). Não façam os dois iguais.",
      "Não gaste ponto em finalização. O gol de falta do zagueiro acontece duas vezes no ano. O gol de recuo mal feito acontece todo jogo.",
    ],
  },
  {
    slug: "build-lateral-e-wingback",
    title: "Build de lateral e wingback",
    tag: "Arquétipo",
    hub: "builds",
    excerpt: "Stamina primeiro. Depois cruzamento ou corte para dentro, conforme o 4-3-3 ou o 3-5-2.",
    body: [
      "Lateral de 4-3-3 / 4-2-3-1: resistência, ritmo, marcação e cruzamento. Drible só o suficiente para não perder a bola na linha. Arquétipo fullback se o ponta do seu lado corta para dentro; wingback se você é o lado que sobe.",
      "No 3-5-2 o wingback é quase um ponta com obrigação de marcar. Stamina 90+ ou você some no segundo tempo. Cruzamento rasteiro no 27 voltou; não ignore o atributo.",
      "Regra: um lateral sobe, o outro segura. Combine no Discord antes do apito (“hoje o LD sobe”). Dois wingbacks no ataque no pad é o gol que o rival nem precisou criar.",
    ],
  },
  {
    slug: "build-mei-e-10",
    title: "Build de 8 box-to-box e de 10",
    tag: "Arquétipo",
    hub: "builds",
    excerpt: "O 8 chega na área. O 10 gira entre as linhas. Os dois não podem querer a mesma bola.",
    body: [
      "O 8 (box-to-box / mezzala): passe, resistência, interceptação, chute de média. Skill 4. Ele é o segundo volume do time — chega atrasado na área, cobra o rebote, volta na marcação. Não peça para ele ser o 10.",
      "O 10 (playmaker / shadow striker): passe, drible, visão, chute de perto. Ritmo 75 já funciona se o passe sai rápido. No 27 o giro sob contato melhorou: receba de costas, proteja, solte. Arquétipo classic 10 se o 9 é alvo; shadow striker se o 9 abre e você invade a área.",
      "Química: se o 8 e o 10 driblam os dois, o volante fica sozinho. Combinem quem tem licença para 1x1. O outro toca de primeira.",
    ],
  },
  {
    slug: "build-9-e-falso-9",
    title: "Build de 9 e de falso 9",
    tag: "Arquétipo",
    hub: "builds",
    excerpt: "Alvo, poacher ou falso 9. O atacante que tenta ser os três some no 11x11.",
    body: [
      "9 clássico (target / advanced forward): físico, finalização, posicionamento, jogo aéreo. Ritmo ajuda, mas o gol de Clubs do 9 sai de giro e de antecipação, não de 99 de pace. No 27 o cabeceio limpo ficou mais raro e mais preciso — disputa o primeiro pau só se você ganha o duelo.",
      "Poacher: finalização, posicionamento, ritmo. Vive no ombro do zagueiro. Não desce buscar. Se o time não tem 10 para servir, o poacher morre de fome — troque para advanced forward.",
      "Falso 9: passe, drible, visão. Abre a zaga para o 8 e os pontas. Só use se o clube tem dois interiores que invadem. Sem isso você joga sem atacante e o rival respira.",
    ],
  },
  {
    slug: "como-melhorar-no-competitivo",
    title: "Como melhorar no competitivo",
    tag: "Mentalidade",
    hub: "guias",
    excerpt: "Rotina de treino, comunicação no Discord e o que separar de ranking.",
    body: [
      "Treine um fundamento por sessão: passe de primeira, marcação em ímã, finalização de giro. Kick-Off contra o ouro da IA não substitui 5 jogos de Clubs.",
      "Grave um tempo. Assista só as perdas de bola. 80% da evolução no pad é cortar o passe forçado, não aprender skill move novo.",
      "Comunicação: call curto (“fico”, “sobe”, “troca”). Discord aberto, DualSense na mão, sem discussão de replay. O time que fala menos no erro ganha mais no placar.",
    ],
  },
  {
    slug: "calls-e-quimica",
    title: "Calls, química e função no clube",
    tag: "Elenco",
    hub: "guias",
    excerpt: "O overall coletivo nasce no Discord, não no menu de arquétipo.",
    body: [
      "Química de Clubs no 27 ainda é posição + arquétipo + quem está do lado. Mas o que decide jogo é função combinada: um dribla, o outro toca; um lateral sobe, o outro segura; um zagueiro constrói, o outro destrói.",
      "Calls padrão FUTZONE: fico, sobe, troca, fecha, contra, segura, falta, sai. Mais do que isso vira palestra. Quem perdeu a bola fala primeiro. Replay só no intervalo.",
      "Antes do apito: formação, quem pressiona, qual lateral sobe, se o 9 é alvo ou falso. Cinco frases. Time que discute tática no 2–0 já perdeu o próximo gol.",
    ],
  },
  {
    slug: "grounds-11x11-e-rua",
    title: "Grounds: 11x11, Rush e rua no mesmo clube",
    tag: "The Grounds",
    hub: "guias",
    excerpt: "Como usar o playground do 27 para treinar o virtual pro sem gastar a liga.",
    body: [
      "No FC 27 o Clubs vive no The Grounds. O 11x11 continua sendo a liga. Small-sided, kickabout e Rush são o treino que o 26 não tinha embutido no mesmo mundo.",
      "Use a rua (Montclair, gaiola, small-sided) para drible e 1x1. Use Parkside / kickabout para passe e química de movimento. Use Rush para transições rápidas. O 11x11 da liga não é laboratório — é jogo.",
      "Mentores: Mbappé puxa small-sided, Dybala puxa identidade de clube, Hunter puxa evolução do pro. Faça o desafio do mentor no dia que não tem clássico. AMP e mastery sobem no playground; a liga sobe no placar.",
      "Last-gen (PS4, One, Switch 1) não entra no Grounds. Marquem horário no Discord com quem está em PS5, Series, PC ou Switch 2. O clube misto precisa de dois ritmos: 11x11 de drop-in e o hub social.",
    ],
  },
  {
    slug: "dualsense-no-fc-27",
    title: "DualSense no FC 27: o que apertar",
    tag: "Pad",
    hub: "guias",
    excerpt: "Jockey, troca, contain e passe no pad. O fundamento antes da formação.",
    body: [
      "No FC 27 o Competitive cobra o botão certo. Troca de jogador (L1) antes do duelo; jockey (L2) para acompanhar o driblador; tackle em pé no timing, não no spam. Contain (R1 / teammate contain) agora marca de longe — se você só segura, o rival tem tempo.",
      "Ataque: passe dirigido (R1+passe) para o 9 na vertical. Cruzamento rasteiro voltou a valer. Skill move no primeiro contato só se o arquétipo aguenta; senão, toque de primeira.",
      "Não treine formação no Kick-Off contra a IA ouro. Treine um input por sessão: troca, jockey ou passe vertical. A tática do clube fica na aba Táticas; aqui o assunto é a sua mão.",
    ],
  },
  {
    slug: "defender-no-fc-27",
    title: "Como defender no pad no ciclo 27",
    tag: "Pad",
    hub: "guias",
    excerpt: "O auto-tackle sumiu. Troca, corpo e timing — o passo a passo do zagueiro.",
    body: [
      "O 26 ainda salvava com IA. O 27 não. Você troca para o marcador da bola, jockey no corredor, e só então dispara o tackle. Companheiro em contain fica distante de propósito.",
      "Erro clássico: perseguir o ponta nas costas. Call “troca” e entrega para o lateral. Segundo erro: carrinho na intermediária. No 27 o stand tackle no jogador certo cobre mais espaço.",
      "Treino: Rush ou small-sided no Grounds, 15 minutos só defendendo. Liga não é laboratório. O desenho do bloco (médio, alto, contra) está em Táticas — aqui é o 1x1.",
    ],
  },
  {
    slug: "comecar-no-fut-27",
    title: "Como começar no FUT 27",
    tag: "Ultimate Team",
    hub: "guias",
    excerpt: "Galeria, SBC e evo ramificada. O primeiro mês sem queimar o clube.",
    body: [
      "Abra a Galeria no dia 1. Todo gold que passar no clube conta no Set mesmo depois de vender ou meter no SBC. Complete Sets baratos (liga/nação) antes de caçar holográfico.",
      "Não gaste Evolution no primeiro totw que aparecer. Olhe o Pathway: ramificação tranca o card. SBC usa a mesma pontuação da Galeria — o ouro 75 que você ia descartar agora tem função.",
      "Power creep do 26 estoura no fim de ano. A EA quer gap menor entre base e promo. Monte um 11 jogável, não um 11 de maio. Comparador da FUTZONE ajuda a não pagar overall de marketing.",
    ],
  },
  {
    slug: "carreira-treinador-ou-atleta",
    title: "Treinador ou atleta: qual Carreira começar",
    tag: "Carreira",
    hub: "guias",
    excerpt: "Dois saves. Um manda na mesa. O outro briga no domingo. O mapa aberto é outro modo.",
    body: [
      "O mundo para andar, mentor e bate-bola é o The Grounds (Clubs). Carreira é single-player: você explora a Central, a janela e a história — não o distrito.",
      "Comece de treinador se a dúvida é “quem eu compro”. Sondagem, permissão, TransferRoom, cláusula. Não feche o 9 no primeiro clique. Arena de Treino testa o esquema antes da rodada. Manager ao Vivo: publique o desafio no navegador.",
      "Comece de atleta se a dúvida é “entro no 11?”. Rivalidade cai na sua função. Torcida escolhe herói ou vilão. GER dinâmico: banco e lesão baixam a nota da semana. Slider de CPU: colega separado do adversário.",
      "Os dois têm Liga MX e ídolos na temporada. Nenhum dos dois substitui o 11x11 com gente no Discord — isso continua em Pro Clubs.",
    ],
  },
  {
    slug: "carreira-primeira-janela",
    title: "Carreira: sobreviver à primeira janela",
    tag: "Carreira",
    hub: "guias",
    excerpt: "Sondagem, etapa e TransferRoom. Como não quebrar o orçamento no 27.",
    body: [
      "Não feche o 9 dos sonhos no primeiro clique. No 27 a compra tem etapas: sondagem, permissão, mesa, rival. Delegue ao diretor só o que você não quer acompanhar.",
      "Valores mudam com xTV da TransferRoom — forma, liga e poder de compra. Parcele, ponha cláusula, aceite empréstimo de volta. O mercado do 26 era uma conversa; este é uma janela.",
      "OVR dinâmico: não venda o 82 em má fase no setembro. Olhe potencial e minutos. Player Career: rivalries no hub. Manager Live: publique o desafio no Creator, não só jogue o da EA.",
    ],
  },
  {
    slug: "kick-off-e-lite",
    title: "Kick-Off, Lite e o trial do EA Play",
    tag: "Começar",
    hub: "guias",
    excerpt: "Como experimentar o 27 sem comprar o disco errado.",
    body: [
      "Lite sai de graça no launch (25 set, 16:00 UTC) com Kick-Off e modos selecionados. Dá para upar depois. EA Play: trial de 10h a partir de 18 set — o mesmo dia do early access das edições pagas.",
      "Use o Lite para sentir o Competitive no pad, não para julgar FUT. The Grounds e Clubs completos pedem current-gen (PS5, Series, PC, Switch 2). Last-gen joga o disco sem o playground.",
      "Tabela de preço e o que vem em cada caixa está no hub EA FC. Este guia só responde: por onde entrar no jogo hoje.",
    ],
  },
];

export const guidesBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));

export function guidesIn(hub: GuideHub) {
  return guides.filter((guide) => guide.hub === hub);
}

export function guideBackHref(hub: GuideHub) {
  if (hub === "taticas") return "/taticas";
  if (hub === "builds") return "/builds";
  return "/guias";
}
