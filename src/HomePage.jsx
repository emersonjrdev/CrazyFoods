import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("burgers");

  // PALETA DE CORES BASEADA NA SUA LOGO
  const brandColors = {
    // Cores principais da logo
    hair: { 
      primary: "#D93952", 
      secondary: "#8C1F30" 
    },
    glasses: {
      primary: "#E6448B",
      secondary: "#AF0F4F"
    },
    lips: {
      primary: "#F051A3",
      secondary: "#A91858"
    },
    skin: "#F7D7C3",
    nails: "#D14887",
    bread: {
      primary: "#F5A849",
      secondary: "#E07E20"
    },
    lettuce: {
      primary: "#A6D02C",
      secondary: "#568B1F"
    },
    cheese: {
      primary: "#F9DF4A",
      secondary: "#E6C010"
    },
    meat: {
      primary: "#4B2605",
      secondary: "#723F0C"
    },
    background: "#000000",
    
    // Cores para UI derivadas da paleta
    primary: "#E6448B",  // Rosa dos óculos (destaque)
    secondary: "#F5A849", // Laranja do pão
    accent: "#A6D02C",    // Verde da alface
    dark: "#1A1A1A",      // Preto suavizado
    light: "#FFF5EB"      // Bege claro
  };

  // Animação personalizada para elementos
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Categorias do menu
  const menuCategories = {
    burgers: [
      { 
        nome: "Crazy Mega", 
        preco: "R$24,90", 
        desc: "3 carnes, 3 queijos, bacon, onion rings e molho especial",
        stars: 5
      },
      { 
        nome: "Tropical Explosion", 
        preco: "R$22,50", 
        desc: "Carne grelhada, abacaxi caramelizado, bacon e molho teriyaki",
        stars: 4
      },
      { 
        nome: "Veggie Power", 
        preco: "R$21,00", 
        desc: "Hambúrguer de grão-de-bico, abacate e vegetais frescos",
        stars: 4
      }
    ],
    acompanhamentos: [
      { 
        nome: "Crazy Fries", 
        preco: "R$16,00", 
        desc: "Batata rústica com cheddar, bacon e pimenta jalapeño",
        stars: 5
      },
      { 
        nome: "Onion Madness", 
        preco: "R$15,00", 
        desc: "Anéis de cebola empanados crocantes com molho especial",
        stars: 4
      }
    ],
    bebidas: [
      { 
        nome: "Milkshake Monster", 
        preco: "R$18,00", 
        desc: "Sorvete de baunilha, brownie, calda de chocolate e chantilly",
        stars: 5
      },
      { 
        nome: "Crazy Soda", 
        preco: "R$8,00", 
        desc: "Refrigerante artesanal com sabores exclusivos",
        stars: 4
      }
    ]
  };

  // Componente de item do menu com animação
  const MenuItem = ({ item, delay }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-300 relative overflow-hidden group"
        style={{ 
          background: `linear-gradient(145deg, #fff 0%, ${brandColors.light} 100%)`,
          boxShadow: `0 10px 20px rgba(0,0,0,0.1)`
        }}
      >
        {/* Efeito de brilho ao passar o mouse */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100 to-transparent opacity-0 group-hover:opacity-20 -rotate-45 scale-150 group-hover:scale-100 transition-all duration-500"
          style={{ 
            via: brandColors.glasses.primary 
          }}
        ></div>
        
        <h4 className="text-xl font-bold mb-2 text-gray-900 relative z-10">{item.nome}</h4>
        <p 
          className="text-lg font-bold mb-3 relative z-10"
          style={{ color: brandColors.primary }}
        >
          {item.preco}
        </p>
        <p className="text-gray-600 mb-4 text-sm relative z-10">{item.desc}</p>
        
        {/* Avaliação em estrelas */}
        <div className="flex relative z-10">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < item.stars ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      className="min-h-screen text-gray-800 font-sans overflow-x-hidden"
      style={{ backgroundColor: brandColors.light }}
    >
      {/* Header Premium */}
     <header className="sticky top-0 z-50 py-3 px-4 md:px-6 flex justify-between items-center shadow-lg backdrop-blur-md bg-black bg-opacity-80">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, type: 'spring' }}
    className="flex items-center"
  >
    {/* Logo redonda */}
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-yellow-400 mr-3">
      <img 
        src="/Crazy.png" 
        alt="Crazy Food's Logo" 
        className="w-full h-full object-cover" 
      />
    </div>
    
    {/* Texto chamativo */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl md:text-3xl font-extrabold"
    >
      <span className="text-yellow-400">CRAZY</span>
      <span className="text-white"> FOOD'S</span>
      <motion.div 
        className="h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  </motion.div>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          {['Cardápio', 'Sobre', 'Contato'].map((item) => (
            <motion.a
              whileHover={{ 
                scale: 1.1,
                color: brandColors.cheese.primary,
                textShadow: `0 0 8px ${brandColors.cheese.primary}`
              }}
              whileTap={{ scale: 0.95 }}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-semibold transition-all relative"
            >
              {item}
              <motion.span
                layoutId={`nav-underline-${item}`}
                className="absolute bottom-0 left-0 w-full h-0.5"
                style={{ backgroundColor: brandColors.glasses.primary }}
                initial={false}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            </motion.a>
          ))}
        </nav>
        
        {/* Menu Mobile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg relative z-50"
          style={{ backgroundColor: brandColors.glasses.primary }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 5 },
              closed: { rotate: 0, y: 0 }
            }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 }
            }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: -45, y: -5 },
              closed: { rotate: 0, y: 0 }
            }}
            className="w-6 h-0.5 bg-white"
          />
        </motion.button>

        {/* Menu Mobile Expandido */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', bounce: 0.15 }}
              className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
              style={{ paddingTop: '5rem' }}
            >
              {['Cardápio', 'Sobre', 'Contato'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-3xl font-bold py-2 px-6 relative"
                  style={{ color: brandColors.skin }}
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: 'spring',
                    bounce: 0.3,
                    delay: 0.1 * ['Cardápio', 'Sobre', 'Contato'].indexOf(item)
                  }}
                  whileHover={{
                    color: brandColors.glasses.primary,
                    scale: 1.1
                  }}
                >
                  {item}
                  <motion.div
                    layoutId={`mobile-nav-underline-${item}`}
                    className="absolute bottom-0 left-0 w-full h-1"
                    style={{ backgroundColor: brandColors.lips.primary }}
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

  <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
  {/* Container do vídeo ajustado para nenhum corte */}
  <div className="absolute inset-0">
    <video 
      autoPlay
      loop
      muted
      playsInline
      className="absolute h-auto w-auto min-h-full min-w-full"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0.4
      }}
    >
      <source src="/crazy.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
  </div>

  {/* Conteúdo exatamente como na sua imagem */}
  <motion.div className="relative z-10 max-w-4xl px-4 text-white">
    <motion.h2 
      className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      SABORES QUE EXPLODEM
    </motion.h2>
    
    <motion.p 
      className="text-xl md:text-2xl mb-8 font-medium"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Combinações insanas que desafiam a gravidade e o bom senso!
    </motion.p>
    
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <motion.button
        className="py-4 px-8 rounded-full text-lg font-bold shadow-lg bg-yellow-500 hover:bg-yellow-600 transition-colors"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        EXPLORAR CARDÁPIO
      </motion.button>
      
      <motion.button
        className="py-4 px-8 rounded-full text-lg font-bold shadow-lg border-2 border-white hover:bg-white hover:text-black transition-colors"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        FAZER PEDIDO
      </motion.button>
    </div>
  </motion.div>
</section>

      {/* Cardápio Premium */}
      <section id="cardapio" className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
            style={{ color: brandColors.dark }}
          >
            <span>NOSSO </span>
            <span style={{ color: brandColors.primary }}>CARDÁPIO</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 rounded-full"
              style={{ backgroundColor: brandColors.primary }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.h3>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Seleção premium de sabores que vão explodir seu paladar
          </motion.p>
        </motion.div>
        
        {/* Categorias */}
        <motion.div
          className="flex overflow-x-auto pb-4 mb-10 scrollbar-hide"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-2 mx-auto">
            {Object.keys(menuCategories).map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${activeCategory === category ? 'text-white' : 'text-gray-700'}`}
                style={{
                  backgroundColor: activeCategory === category ? brandColors.primary : 'rgba(0,0,0,0.05)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'burgers' && 'Hambúrgueres'}
                {category === 'acompanhamentos' && 'Acompanhamentos'}
                {category === 'bebidas' && 'Bebidas'}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Itens do menu */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
        >
          <AnimatePresence mode="wait">
            {menuCategories[activeCategory].map((item, index) => (
              <MenuItem key={`${activeCategory}-${index}`} item={item} delay={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Seção Sobre Premium */}
      <section id="sobre" className="py-20 px-4 md:px-6 bg-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-10"
          style={{ backgroundColor: brandColors.primary }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10"
          style={{ backgroundColor: brandColors.secondary }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            delay: 5
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" 
                  alt="Equipe Crazy Food's"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Badge animado */}
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-white px-6 py-3 rounded-full shadow-xl flex items-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" 
                       style={{ backgroundColor: brandColors.primary }}>
                    <span className="text-white text-sm font-bold">5★</span>
                  </div>
                  <span className="font-bold" style={{ color: brandColors.dark }}>Avaliação dos Clientes</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{ color: brandColors.primary }}
              >
                <span style={{ color: brandColors.dark }}>NOSSA </span>
                HISTÓRIA
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
              >
                A Crazy Food's nasceu em 2018 da paixão por hambúrgueres e da vontade de fazer diferente. 
                Nossa filosofia é simples: ingredientes de altíssima qualidade combinados de formas inusitadas 
                que desafiam o convencional.
              </motion.p>
              
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: "🍔", title: "200+", subtitle: "Combinações criadas" },
                  { icon: "🏆", title: "3x", subtitle: "Melhor lanchonete" },
                  { icon: "🌟", title: "4.9", subtitle: "Avaliação média" },
                  { icon: "😋", title: "98%", subtitle: "Clientes satisfeitos" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-4 rounded-xl border border-gray-100"
                    whileHover={{ 
                      y: -5,
                      boxShadow: `0 10px 20px rgba(0,0,0,0.1)`
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold mb-1" style={{ color: brandColors.primary }}>{item.title}</div>
                    <div className="text-gray-600 text-sm">{item.subtitle}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Seção Contato Premium */}
      <section 
        id="contato" 
        className="py-20 px-4 md:px-6 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.accent} 100%)`
        }}
      >
        {/* Elementos decorativos */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>VENHA NOS </span>
            <span style={{ color: brandColors.secondary }}>VISITAR</span>
          </motion.h3>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-md border border-white border-opacity-20 h-full">
                <h4 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h4>
                
                <div className="space-y-6">
                  {[
                    { 
                      icon: "📍", 
                      title: "Endereço", 
                      content: "Av. dos Sabores Loucos, 1234\nCentro - São Paulo/SP",
                      link: "https://goo.gl/maps/example"
                    },
                    { 
                      icon: "📞", 
                      title: "Telefone", 
                      content: "(11) 98765-4321\n(11) 91234-5678",
                      link: "tel:+5511987654321"
                    },
                    { 
                      icon: "🕒", 
                      title: "Horário de Funcionamento", 
                      content: "Terça a Domingo\n18:00 - 23:00",
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-2xl mr-4" style={{ color: brandColors.secondary }}>{item.icon}</div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.title}</h5>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white opacity-80 hover:opacity-100 hover:underline transition-opacity"
                          >
                            {item.content.split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {line}<br />
                              </React.Fragment>
                            ))}
                          </a>
                        ) : (
                          <p className="text-white opacity-80">
                            {item.content.split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {line}<br />
                              </React.Fragment>
                            ))}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h5 className="text-lg font-bold text-white mb-4">Redes Sociais</h5>
                  <div className="flex space-x-4">
  {[
    { name: 'instagram', icon: <i className="fab fa-instagram"></i>, color: '#E1306C' },
    { name: 'facebook', icon: <i className="fab fa-facebook-f"></i>, color: '#1877F2' },
    { name: 'whatsapp', icon: <i className="fab fa-whatsapp"></i>, color: '#25D366' }
  ].map((social) => (
    <motion.a
      key={social.name}
      href="#"
      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
      style={{ backgroundColor: social.color }}
      whileHover={{ 
        y: -5,
        scale: 1.1,
        boxShadow: `0 5px 15px ${social.color}`
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {social.icon}
    </motion.a>
  ))}
</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-white bg-opacity-10 p-1 rounded-2xl backdrop-blur-md border border-white border-opacity-20 h-full">
                {/* Mapa Compacto */}
                <div className="h-96 md:h-full w-full rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658440729!3d-23.565734367638635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Localização Crazy Food's"
                    className="rounded-xl"
                  ></iframe>
                </div>
                
                {/* Botão de direções */}
                <motion.a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 py-3 px-6 rounded-full text-center font-bold text-white transition-all"
                  style={{ backgroundColor: brandColors.secondary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-car mr-2"></i> COMO CHEGAR
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Premium */}
      <footer 
        className="py-12 px-4 md:px-6 relative overflow-hidden"
        style={{ backgroundColor: brandColors.dark }}
      >
        {/* Elemento decorativo */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: brandColors.primary }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0 text-center md:text-left"
            >
              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start">
  <motion.div
    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mr-3 shadow-lg overflow-hidden"
    style={{ 
      backgroundColor: brandColors.primary,
      boxShadow: `0 0 15px ${brandColors.primary}`
    }}
    whileHover={{ rotate: 360 }}
    transition={{ duration: 0.8 }}
  >
    <img 
      src="/Crazy.png" 
      alt="Crazy Food's Logo" 
      className="h-full w-full object-cover" 
    />
  </motion.div>
  <h4 className="text-2xl font-bold text-white">
    <span style={{ color: brandColors.primary }}>CRAZY</span>
    <span style={{ color: brandColors.secondary }}>FOOD'S</span>
  </h4>
</div>
              <p className="text-gray-400 mt-3 text-sm max-w-xs">
                O sabor mais louco da cidade! Hamburgueres artesanais e combinações únicas.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h5 className="text-white font-bold mb-4">Links Rápidos</h5>
                <ul className="space-y-2">
                  {['Cardápio', 'Sobre', 'Contato'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-bold mb-4">Horário</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>Terça - Domingo</li>
                  <li>18:00 - 23:00</li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-white font-bold mb-4">Contato</h5>
                <ul className="space-y-2 text-gray-400">
                  <li>(11) 98765-4321</li>
                  <li>contato@crazyfoods.com</li>
                </ul>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Crazy Food's. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6">
              {['instagram', 'facebook', 'whatsapp'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab fa-${social}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}