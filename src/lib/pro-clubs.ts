export const clubsShortcuts = [
  { href: "/taticas", label: "Táticas", detail: "Formação, pressão, bloco e transição" },
  { href: "/builds", label: "Builds / arquétipos", detail: "Ponto no virtual pro por posição" },
  { href: "/guias", label: "Guias", detail: "Pad, Discord e Grounds" },
  { href: "/campeonatos", label: "Campeonatos", detail: "Liga FUTZONE sem login" },
] as const;

export const clubsFormations = [
  {
    name: "4-2-3-1",
    badge: "Default",
    use: "Elenco incompleto, liga, 0–0 fora",
    line: "Dois 6, um 10, pontas por dentro, 9 no zagueiro da bola",
    depth: "50–58",
    width: "52–58",
  },
  {
    name: "4-3-3",
    badge: "Ataque",
    use: "11 no Discord, pontas rápidos, rival com um volante",
    line: "6 âncora, 8 no meio-espaço, pontas cortam, um lateral por vez",
    depth: "55–65",
    width: "60",
  },
  {
    name: "4-4-2",
    badge: "Plano B",
    use: "9 isolado ou rival em linha de 3",
    line: "Dois 9, meios compactos, pontas como interiores",
    depth: "48–55",
    width: "48–54",
  },
  {
    name: "3-5-2",
    badge: "20 min",
    use: "Matar lateral ofensivo do rival",
    line: "Três zagueiros, um wingback sobe, 6 cobre o lado",
    depth: "52–60",
    width: "58–64",
  },
] as const;

export const clubsArchetypes = [
  {
    pos: "GOL",
    name: "Sweeper-keeper",
    spend: "Posicionamento, reflexo, aéreo, passe",
    skip: "Finalização e skill 5",
    note: "Sai da área no bloco médio-alto. Shot-stopper se o time retranca.",
  },
  {
    pos: "ZAG",
    name: "Ball-playing / Destroyer",
    spend: "Interceptação, marcação, físico, passe curto",
    skip: "Chute e drible de 10",
    note: "Um constrói, o outro destrói. Não façam os dois iguais.",
  },
  {
    pos: "LE / LD",
    name: "Fullback / Wingback",
    spend: "Stamina, ritmo, marcação, cruzamento",
    skip: "Drible de ponta",
    note: "Um sobe, o outro segura. Combine o lado antes do apito.",
  },
  {
    pos: "VOL",
    name: "Holding",
    spend: "Interceptação, passe curto, físico, resistência",
    skip: "Skill 5 e longa distância",
    note: "Não passa da intermediária sem a bola. O 8 é quem chega.",
  },
  {
    pos: "MC",
    name: "Box-to-box",
    spend: "Passe, stamina, interceptação, chute de média",
    skip: "Ser o driblador do time",
    note: "Segundo volume. Rebote na área, volta na marcação.",
  },
  {
    pos: "MEI",
    name: "Playmaker / Shadow",
    spend: "Passe, drible, visão, chute de perto",
    skip: "Marcar o 9 rival o jogo todo",
    note: "Gira entre as linhas. Classic 10 com 9 alvo; shadow se o 9 abre.",
  },
  {
    pos: "PE / PD",
    name: "Inside forward / Winger",
    spend: "Ritmo, drible, passe, cruzamento rasteiro",
    skip: "Finalização antes de 80 de drible",
    note: "Corta para dentro no 4-3-3. Abre e cruza se o 9 é alvo.",
  },
  {
    pos: "SA / ATA",
    name: "Alvo / Poacher / Falso 9",
    spend: "Finalização, posicionamento, físico ou passe",
    skip: "Querer ser os três no mesmo build",
    note: "Poacher precisa de 10. Falso 9 precisa de interiores. Alvo precisa de cruzamento.",
  },
] as const;

export const clubsRoles = [
  { role: "Âncora", who: "VOL", does: "Cobre a frente da zaga e o primeiro passe rival.", never: "Driblar o primeiro na intermediária ofensiva." },
  { role: "Chegada", who: "MC", does: "Segundo pau, cobrança de rebote, volta na transição.", never: "Pedir a bola no pé do 10 o jogo todo." },
  { role: "Giro", who: "MEI", does: "Recebe de costas, solta de primeira, invade se o 9 abre.", never: "Marcar o 6 rival até o círculo." },
  { role: "Largura", who: "PE / PD / lateral", does: "Estica a linha e decide: corte ou cruzamento.", never: "Os dois laterais subirem juntos." },
  { role: "Referência", who: "ATA", does: "Ocupa zagueiro, disputa ou abre para o 8.", never: "Buscar a bola no próprio campo sem aviso." },
  { role: "Saída", who: "GOL / ZAG", does: "Primeiro passe limpo. Linha alta só com contain combinado.", never: "Lançar no 9 se o arquétipo não é alvo." },
] as const;

export const clubsCalls = [
  { call: "fico", meaning: "Eu pressiono a bola. Vocês fecham passagem." },
  { call: "sobe", meaning: "Lateral ou 8 pode atacar. O outro lado segura." },
  { call: "troca", meaning: "Muda o marcador. Não perseguir nas costas." },
  { call: "fecha", meaning: "Compactar. Sem corredor, sem contain passivo." },
  { call: "contra", meaning: "Vertical agora. Máximo de três passes." },
  { call: "segura", meaning: "Posse. Reconstituiu. Sem lançamento." },
  { call: "falta", meaning: "Não entrar. Falta tática ou deixar jogar." },
  { call: "sai", meaning: "Goleiro ou zaga. Recuar a linha." },
] as const;

export const clubsGrounds = [
  {
    name: "11x11 no Clubhouse",
    detail: "Liga, playoff e Club Tournaments. Aqui vale o placar. Sem laboratório.",
  },
  {
    name: "Rush e drop-in",
    detail: "Transição e 5x5. Treina o primeiro passe vertical sem gastar a liga.",
  },
  {
    name: "Small-sided / gaiola",
    detail: "Montclair e 1x1. Drible sob contato do 27. Mentoria estilo Mbappé.",
  },
  {
    name: "Kickabout",
    detail: "Parkside, passe e química de movimento com quem chegou atrasado no Discord.",
  },
] as const;

export const clubsWeek = [
  { day: "Seg / ter", plan: "Grounds: Rush + small-sided. Sobe AMP e mastery. Sem clássico." },
  { day: "Qua", plan: "Treino 11x11 interno. Uma formação só. Grava um tempo e corta perda de bola." },
  { day: "Qui / sex", plan: "Liga FUTZONE ou Club Tournament. Bloco médio default. Pressão só 10 min." },
  { day: "Fim de semana", plan: "Playoff, amistoso pesado, review de 15 min no Discord. Sem replay no jogo." },
] as const;
