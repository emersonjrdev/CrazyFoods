/** Conteúdo centralizado — fácil de editar e sem lógica de UI */

export const whatsappNumber = "5511987654321";
export const whatsappMessage =
  "Olá! Gostaria de fazer um pedido na Jusato Confeitaria.";

/** Fotos públicas Unsplash — IDs revisados + parâmetros oficiais (ixlib) para melhor compatibilidade. */
const u = (photoId, w = 800) =>
  `https://images.unsplash.com/${photoId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=82`;

export const menuCategories = {
  doces: [
    {
      nome: "Brigadeiro Gourmet",
      preco: "R$ 3,50",
      desc: "Cacao fino, manteiga clarificada e acabamento minimalista — textura sedosa, sabor profundo.",
      stars: 5,
      image: u("photo-1549007994-cb92cae61054", 720),
      imageAlt: "Doces de chocolate artisanal em bandeja minimalista",
    },
    {
      nome: "Cupcake Signature",
      preco: "R$ 12,00",
      desc: "Buttercream aveludado e decoração precisa — ideal para gifting e mesas contemporâneas.",
      stars: 5,
      image: u("photo-1614707267537-b85aaf00c4b7", 720),
      imageAlt: "Cupcakes rosados elegantes sobre mármore",
    },
    {
      nome: "Torta de Morango",
      preco: "R$ 45,00",
      desc: "Camadas cremosas com frutos vermelhos selecionados e massa amanteigada em ponto francês.",
      stars: 5,
      image: u("photo-1565958011703-44f9829ba187", 720),
      imageAlt: "Fatia de bolo decorada com morangos frescos",
    },
    {
      nome: "Brownie Fudge",
      preco: "R$ 8,50",
      desc: "Intensidade de cacao 70% com ganache acetinada — contraste crocante por fora.",
      stars: 5,
      image: u("photo-1607920591413-f4dcae7e10d4", 720),
      imageAlt: "Brownies empilhados com textura fudge",
    },
    {
      nome: "Trufas Maison",
      preco: "R$ 4,00",
      desc: "Rolagem manual em chocolate belga; recheios sazonais e acabamento envelhecido.",
      stars: 5,
      image: u("photo-1481391319762-47fff57953ef", 720),
      imageAlt: "Trufas de chocolate em formato artesanal",
    },
    {
      nome: "Macarons",
      preco: "R$ 15,00",
      desc: "Pé perfeito, recheios equilibrados — caixa curation de seis sabores harmonizados.",
      stars: 5,
      image: u("photo-1569864358642-9a1683830b09", 720),
      imageAlt: "Macarons coloridos em estética clean",
    },
  ],
  bolos: [
    {
      nome: "Bolo Chocolate Noir",
      preco: "R$ 85,00",
      desc: "Ganache espelhada, camadas de mousse e notas de cacau — serve até 10 pessoas.",
      stars: 5,
      image: u("photo-1578985545062-69928b1d9587", 720),
      imageAlt: "Bolo de chocolate escuro com cobertura brilhante",
    },
    {
      nome: "Red Velvet",
      preco: "R$ 95,00",
      desc: "Veludo clássico com cream cheese aerado e acabamento contemporâneo.",
      stars: 5,
      image: u("photo-1621303837174-89787a7d4729", 720),
      imageAlt: "Bolo red velvet com ganache ou cheese frosting",
    },
    {
      nome: "Bolo Branco & Frutas",
      preco: "R$ 75,00",
      desc: "Creme de baunilha Madagáscar e frutas da estação em composição editorial.",
      stars: 5,
      image: u("photo-1464349095431-e9a21285b5f3", 720),
      imageAlt: "Bolo branco com frutas vermelhas",
    },
    {
      nome: "Bolo sob encomenda",
      preco: "A partir de R$ 120",
      desc: "Conceito exclusivo para casamentos e marcas — briefing, prova e entrega white-glove.",
      stars: 5,
      image: u("photo-1535254973040-607b474cb50d", 720),
      imageAlt: "Bolo em camadas para celebração",
    },
  ],
  sobremesas: [
    {
      nome: "Petit Gâteau",
      preco: "R$ 18,00",
      desc: "Miolo fluído, crosta fina e sorvete de baunilha Tahitian — servido em timing perfeito.",
      stars: 5,
      image: u("photo-1606313564200-e75d642a42d5", 720),
      imageAlt: "Sobremesa de chocolate com calda fluída",
    },
    {
      nome: "Cheesecake Frutas",
      preco: "R$ 22,00",
      desc: "Base crocante, creme estável e calda de frutas vermelhas com acidez medida.",
      stars: 5,
      image: u("photo-1533134242443-e4db4d859a73", 720),
      imageAlt: "Fatia de cheesecake com frutos vermelhos",
    },
    {
      nome: "Tiramisù Classico",
      preco: "R$ 20,00",
      desc: "Café espresso, mascarpone e cacau em camadas marcadas por tempo de geladeira.",
      stars: 5,
      image: u("photo-1571877228500-bcaf9d6dba18", 720),
      imageAlt: "Tiramisu em tigela minimalista",
    },
    {
      nome: "Pavê Cacao",
      preco: "R$ 16,00",
      desc: "Estratos de biscuit fino e creme cacao com finalização granulada suave.",
      stars: 5,
      image: u("photo-1549007994-cb92cae61054", 720),
      imageAlt: "Camadas cremosas com chocolate belga",
    },
  ],
};

export const featuredItems = [
  {
    nome: "Caixa Degustação",
    preco: "R$ 45,00",
    desc: "Curadoria de docinhos premium — storytelling em cada mordida.",
    stars: 5,
    image: u("photo-1499636136210-6fedd46d4f93", 800),
    imageAlt: "Mesa minimalista com xícara e doces",
  },
  {
    nome: "Kit Experiência Festa",
    preco: "R$ 120,00",
    desc: "Brigadeiros, mini tortas e finger desserts para até 20 convidados.",
    stars: 5,
    image: u("photo-1551024506-0bccd828d307", 800),
    imageAlt: "Cafeteria elegante com chocolate e latte art",
  },
  {
    nome: "Criação do Mês",
    preco: "R$ 65,00",
    desc: "Sabor sazonal em edição limitada — lançamento mensal da nossa laboratório.",
    stars: 5,
    image: u("photo-1519915028121-7d3463d20f13", 800),
    imageAlt: "Sobremesa artesanal em prato branco",
  },
];

export const testimonials = [
  {
    nome: "Marina Alves",
    role: "Diretora criativa",
    texto:
      "Estética impecável e sabor memorável. A Jusato elevou o coffee break do nosso studio.",
    rating: 5,
  },
  {
    nome: "Ricardo Mendes",
    role: "Noivo",
    texto:
      "Bolo em três andares com acabamento espelhado — convidados ainda comentam meses depois.",
    rating: 5,
  },
  {
    nome: "Helena Costa",
    role: "Cliente desde 2019",
    texto:
      "Ingredientes nobres, entrega pontual e atenção obsessiva ao detalhe. Padrão de luxo real.",
    rating: 5,
  },
  {
    nome: "Pedro Ontiveros",
    role: "Chef de cozinha",
    texto:
      "Técnica francesa com alma brasileira. Harmonia de açúcares e texturas em nível internacional.",
    rating: 5,
  },
];

export const aboutStats = [
  {
    key: "receitas",
    label: "Receitas assinadas",
    value: 150,
    suffix: "+",
    sub: "Catálogo em evolução",
  },
  {
    key: "anos",
    label: "Anos de oficina",
    value: 10,
    suffix: "+",
    sub: "Processos refinados",
  },
  {
    key: "nota",
    label: "Satisfação",
    value: 5,
    suffix: ".0",
    sub: "Média declarada",
  },
  {
    key: "artesanal",
    label: "Produção",
    value: 100,
    suffix: "%",
    sub: "Pequenos lotes",
  },
];

export const aboutBullets = [
  {
    title: "Origem nobre",
    desc: "Cacau traceável, lactínios seleção e essências naturais.",
  },
  {
    title: "Mão artesanal",
    desc: "Cada linha cortada à mão — sem atalhos industriais.",
  },
  {
    title: "Ritmo",
    desc: "Lotes diários garantem frescor e brilho de acabamento.",
  },
];

/** Mesma foto do lado do hero — URL centralizada para manter ixlib atualizado */
export const heroShowcasePhoto =
  `${u("photo-1464349095431-e9a21285b5f3", 960)}`;

/** Para seção Sobre */
export const aboutPhoto =
  `${u("photo-1559056199-641a0ac8b55e", 900)}`;
