/** Conteúdo centralizado — fácil de editar e sem lógica de UI */

export const whatsappNumber = "5511987654321";
export const whatsappMessage =
  "Olá! Gostaria de fazer um pedido na Jusato Confeitaria.";

/**
 * Ilustrações locais em /public/catalog/ — sempre carregam no Vite/GitHub Pages
 * sem depender de CDN externo. Troque pelo caminho de um JPG/WEBP próprio quando quiser.
 */
const catalog = (name) => `/catalog/${name}.svg`;

export const menuCategories = {
  doces: [
    {
      nome: "Brigadeiro Gourmet",
      preco: "R$ 3,50",
      desc: "Cacao fino, manteiga clarificada e acabamento minimalista — textura sedosa, sabor profundo.",
      stars: 5,
      image: catalog("dessert-01"),
      imageAlt: "Doces de chocolate artisanal em bandeja minimalista",
    },
    {
      nome: "Cupcake Signature",
      preco: "R$ 12,00",
      desc: "Buttercream aveludado e decoração precisa — ideal para gifting e mesas contemporâneas.",
      stars: 5,
      image: catalog("dessert-02"),
      imageAlt: "Cupcakes rosados elegantes sobre mármore",
    },
    {
      nome: "Torta de Morango",
      preco: "R$ 45,00",
      desc: "Camadas cremosas com frutos vermelhos selecionados e massa amanteigada em ponto francês.",
      stars: 5,
      image: catalog("dessert-03"),
      imageAlt: "Fatia de bolo decorada com morangos frescos",
    },
    {
      nome: "Brownie Fudge",
      preco: "R$ 8,50",
      desc: "Intensidade de cacao 70% com ganache acetinada — contraste crocante por fora.",
      stars: 5,
      image: catalog("dessert-04"),
      imageAlt: "Brownies empilhados com textura fudge",
    },
    {
      nome: "Trufas Maison",
      preco: "R$ 4,00",
      desc: "Rolagem manual em chocolate belga; recheios sazonais e acabamento envelhecido.",
      stars: 5,
      image: catalog("dessert-05"),
      imageAlt: "Trufas de chocolate em formato artesanal",
    },
    {
      nome: "Macarons",
      preco: "R$ 15,00",
      desc: "Pé perfeito, recheios equilibrados — caixa curation de seis sabores harmonizados.",
      stars: 5,
      image: catalog("dessert-06"),
      imageAlt: "Macarons coloridos em estética clean",
    },
  ],
  bolos: [
    {
      nome: "Bolo Chocolate Noir",
      preco: "R$ 85,00",
      desc: "Ganache espelhada, camadas de mousse e notas de cacau — serve até 10 pessoas.",
      stars: 5,
      image: catalog("dessert-07"),
      imageAlt: "Bolo de chocolate escuro com cobertura brilhante",
    },
    {
      nome: "Red Velvet",
      preco: "R$ 95,00",
      desc: "Veludo clássico com cream cheese aerado e acabamento contemporâneo.",
      stars: 5,
      image: catalog("dessert-08"),
      imageAlt: "Bolo red velvet com ganache ou cheese frosting",
    },
    {
      nome: "Bolo Branco & Frutas",
      preco: "R$ 75,00",
      desc: "Creme de baunilha Madagáscar e frutas da estação em composição editorial.",
      stars: 5,
      image: catalog("dessert-09"),
      imageAlt: "Bolo branco com frutas vermelhas",
    },
    {
      nome: "Bolo sob encomenda",
      preco: "A partir de R$ 120",
      desc: "Conceito exclusivo para casamentos e marcas — briefing, prova e entrega white-glove.",
      stars: 5,
      image: catalog("dessert-10"),
      imageAlt: "Bolo em camadas para celebração",
    },
  ],
  sobremesas: [
    {
      nome: "Petit Gâteau",
      preco: "R$ 18,00",
      desc: "Miolo fluído, crosta fina e sorvete de baunilha Tahitian — servido em timing perfeito.",
      stars: 5,
      image: catalog("dessert-11"),
      imageAlt: "Sobremesa de chocolate com calda fluída",
    },
    {
      nome: "Cheesecake Frutas",
      preco: "R$ 22,00",
      desc: "Base crocante, creme estável e calda de frutas vermelhas com acidez medida.",
      stars: 5,
      image: catalog("dessert-03"),
      imageAlt: "Fatia de cheesecake com frutos vermelhos",
    },
    {
      nome: "Tiramisù Classico",
      preco: "R$ 20,00",
      desc: "Café espresso, mascarpone e cacau em camadas marcadas por tempo de geladeira.",
      stars: 5,
      image: catalog("dessert-12"),
      imageAlt: "Tiramisu em tigela minimalista",
    },
    {
      nome: "Pavê Cacao",
      preco: "R$ 16,00",
      desc: "Estratos de biscuit fino e creme cacao com finalização granulada suave.",
      stars: 5,
      image: catalog("dessert-01"),
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
    image: catalog("dessert-05"),
    imageAlt: "Seleção refinada em apresentação premium",
  },
  {
    nome: "Kit Experiência Festa",
    preco: "R$ 120,00",
    desc: "Brigadeiros, mini tortas e finger desserts para até 20 convidados.",
    stars: 5,
    image: catalog("dessert-07"),
    imageAlt: "Mesa de festa estética contemporânea",
  },
  {
    nome: "Criação do Mês",
    preco: "R$ 65,00",
    desc: "Sabor sazonal em edição limitada — lançamento mensal da nossa laboratório.",
    stars: 5,
    image: catalog("dessert-09"),
    imageAlt: "Criação sazonal em louça branca",
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

export const heroShowcasePhoto = "/catalog/dessert-hero.svg";
export const aboutPhoto = "/catalog/dessert-about.svg";
