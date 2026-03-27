/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Linkedin, Instagram, ArrowRight, ArrowUp, MessageCircle } from "lucide-react";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511940060027", "_blank");
  };

  return (
    <div className="bg-brand-bg text-brand-dark font-sans antialiased overflow-x-hidden">
      {/* Fixed Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-brand-purple rounded-full shadow-xl flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all duration-300 border border-purple-100"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsApp}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/40 transition-all duration-300"
          aria-label="Mensagem no WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </motion.button>
      </div>
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-end">
        <ul className="flex space-x-8 text-white font-semibold text-sm tracking-widest drop-shadow-md">
          <li>
            <a href="#quem-somos" className="relative group py-2 hover:text-purple-200 transition-colors">
              QUEM SOMOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#pilares" className="relative group py-2 hover:text-purple-200 transition-colors">
              PILARES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contato" className="relative group py-2 hover:text-purple-200 transition-colors">
              CONTACTO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://cardeal.tv/wp-content/uploads/2026/03/6913501_Motion_Graphics_Motion_Graphic_1280x720.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="content-relative text-center z-10 flex flex-col items-center"
        >
          {/* Logo SVG */}
          <img
            src="https://cardeal.tv/wp-content/uploads/2026/03/PERPETUO2.svg"
            alt="Perpetuo Agency"
            className="w-[280px] md:w-[450px] mx-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <span className="text-white text-xl md:text-3xl tracking-[0.4em] font-sans font-medium opacity-90 block mt-2 ml-2 md:ml-6 drop-shadow-lg">
            .AGENCY
          </span>

          <p className="mt-12 text-white/90 font-medium text-lg md:text-xl max-w-lg mx-auto px-4 drop-shadow-md">
            Marcas que não passam. Legados que ficam.
          </p>
        </motion.div>
      </header>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl text-brand-purple title-dash mb-12 uppercase"
        >
          Quem Somos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-slate-700 font-light leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-6">
              Na Perpetuo, acreditamos que o sucesso de uma marca não deve ser medido apenas pelo último trimestre, mas
              pela sua capacidade de se manter relevante ao longo do tempo. Em um mercado obcecado pelo "agora", nós
              olhamos para o "sempre".
            </p>
            <p>
              O nosso nome reflete o nosso compromisso: construir parcerias que não têm data de validade. Não somos
              apenas fornecedores de campanhas pontuais; somos arquitetos de presenças duradouras.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="mb-6">
              Unimos a solidez da experiência com a agilidade da inovação. Aqui, evitamos os modismos passageiros para
              focar em estratégias que constroem valor real e acumulativo para o seu negócio.
            </p>
            <p>
              Uma operação enxuta, sénior e direta, focada em garantir que a sua marca não apenas sobreviva às mudanças
              do mercado, mas que prospere continuamente através delas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipa / Liderança Section */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto border-t border-slate-200">
        <div className="flex flex-col gap-24">
          {/* Fundador 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="relative w-64 h-64 shrink-0">
              <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-48 h-48 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-10 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <img
                src="https://cardeal.tv/wp-content/uploads/2025/06/Captura-de-tela-2025-06-24-170942.png"
                alt="Retrato Théo Perpetuo"
                className="relative z-10 w-full h-full object-cover rounded-full grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-brand-purple mb-1">Théo Perpetuo</h3>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Founder & COO</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Fundador 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="relative w-64 h-64 shrink-0">
              <div className="absolute top-0 -left-4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-48 h-48 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-10 w-48 h-48 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Retrato Fundador"
                className="relative z-10 w-full h-full object-cover rounded-full grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-brand-purple mb-1">Perpetuo</h3>
              <p className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Founder & CCO</p>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Portfólio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilares Section */}
      <section id="pilares" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl text-brand-purple title-dash mb-4 uppercase"
        >
          Pilares
        </motion.h2>
        <p className="text-lg text-slate-700 mb-20 max-w-2xl">
          A nossa atuação é guiada por três pilares que formam a essência da nossa operação contínua: <br />
          <strong>PER | PE | TUO</strong>
        </p>

        <div className="space-y-24">
          {/* Pilar 1: PER */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <h3 className="font-heading font-extrabold text-5xl mb-2 flex items-baseline">
                <span className="text-brand-purple">PER</span>
                <span className="text-3xl text-slate-800 ml-1">formance</span>
              </h3>
              <p className="font-bold text-slate-900 mb-6 text-lg">Inteligência de Média, CRM, Dados e Crescimento.</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                O motor que mantém a sua marca em movimento. Não acreditamos em "balas de prata", mas sim na otimização
                constante baseada em inteligência de dados. Transformamos números em insights e insights em crescimento
                recorrente.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Da média ao CRM, o nosso foco é transformar a presença digital em vendas e crescimento mensurável e
                perpétuo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 bg-white/50 p-8 rounded-2xl border border-slate-200"
            >
              <h4 className="font-bold text-brand-purple mb-6 text-xl">Principais entregas:</h4>
              <ul className="space-y-4 text-slate-800 font-medium">
                <li className="flex gap-3">
                  <span className="text-orange-500">■</span> Estratégia de CRM alinhada à identidade da marca.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">■</span> Jornada personalizada para diferentes perfis de clientes.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">■</span> Automação de comunicação e retenção (LTV).
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">■</span> Planeamento e execução de planos de média de alta
                  performance.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Pilar 2: PE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <h3 className="font-heading font-extrabold text-5xl mb-2 flex items-baseline">
                <span className="text-brand-purple">PE</span>
                <span className="text-3xl text-slate-800 ml-1">rsonalidade</span>
              </h3>
              <p className="font-bold text-slate-900 mb-6 text-lg">Branding, Identidade, Awareness.</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                A essência que torna a sua marca inesquecível. No mundo digital ruidoso, quem não tem personalidade
                forte, desaparece. Criamos sistemas visuais e verbais autênticos.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Trabalhamos para identificar marcas que precisam de se reposicionar, gerando bases sólidas para a
                diferenciação no mercado a longo prazo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 bg-white/50 p-8 rounded-2xl border border-slate-200"
            >
              <h4 className="font-bold text-brand-purple mb-6 text-xl">Principais entregas:</h4>
              <ul className="space-y-4 text-slate-800 font-medium">
                <li className="flex gap-3">
                  <span className="text-purple-500">■</span> Pesquisa e diagnóstico profundo de marca.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">■</span> Planeamento estratégico de reposicionamento.
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">■</span> Redesign de identidade visual e verbal (brandbooks).
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-500">■</span> Desenvolvimento de arquétipos e narrativa central.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Pilar 3: TUO */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <h3 className="font-heading font-extrabold text-5xl mb-2 flex items-baseline">
                <span className="text-brand-purple">TUO</span>
              </h3>
              <p className="font-bold text-slate-900 mb-6 text-lg">Produção, Execução, Assets, O Seu Legado.</p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                O "Tuo" representa o que é seu: o espaço que a sua marca conquista. Transformamos ideias em realidade.
                Um key visual poderoso é só o começo do legado.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Muitas vezes o processo de desdobramento é lento e caro. Aqui resolvemos essa equação, transformando
                conceitos em centenas de peças digitais consistentes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 bg-white/50 p-8 rounded-2xl border border-slate-200"
            >
              <h4 className="font-bold text-brand-purple mb-6 text-xl">Como funciona este processo:</h4>
              <div className="space-y-6 text-slate-800 text-sm">
                <div>
                  <span className="font-bold text-lg block mb-1">1_ Imersão & Assets</span>
                  O cliente envia diretrizes e especificações técnicas, ou criamos as bases a partir do pilar PE.
                </div>
                <div>
                  <span className="font-bold text-lg block mb-1">2_ Alinhamento Estratégico</span>
                  A nossa equipa mergulha na essência para definir a melhor abordagem de produção contínua.
                </div>
                <div>
                  <span className="font-bold text-lg block mb-1">3_ Desdobramento Inteligente</span>
                  O nosso time de Arte e Motion trabalha gerando bases otimizadas e refinando os detalhes que fazem a
                  diferença.
                </div>
                <div>
                  <span className="font-bold text-lg block mb-1">4_ Entrega Pronta para Uso</span>
                  Recebe um ecossistema completo de peças, validadas e dinâmicas para aprovação.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200">
        <h2 className="font-heading font-bold text-4xl text-brand-purple title-dash mb-12 uppercase">
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl font-light text-slate-800 mb-8 leading-snug">
              Pronto para perpetuar a sua comunicação com qualidade e eficiência?
            </p>
            <p className="text-slate-600 mb-12">
              Converse com a nossa equipa e veja como podemos ser parceiros de verdade na execução e estratégia da sua
              marca para o futuro.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-brand-purple">
                  <Phone size={24} />
                </div>
                <span className="font-bold text-slate-900 text-lg">+55 11 94006 0027</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-brand-purple">
                  <Mail size={24} />
                </div>
                <span className="font-bold text-slate-900 text-lg">contacto@perpetuo.agency</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-[#EAE8DF] p-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all placeholder:text-slate-500"
              />
              <input
                type="text"
                placeholder="Empresa"
                className="w-full bg-[#EAE8DF] p-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all placeholder:text-slate-500"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-[#EAE8DF] p-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all placeholder:text-slate-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-[#EAE8DF] p-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all placeholder:text-slate-500"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full bg-[#EAE8DF] p-4 rounded focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all placeholder:text-slate-500 resize-none"
              ></textarea>

              <p className="text-xs text-slate-500">*Todos os campos são obrigatórios.</p>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold tracking-widest px-8 py-4 rounded shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 group"
                >
                  ENVIAR <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-start gap-2 flex-1">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-xs text-slate-600 leading-tight">
                    Ao clicar no botão ENVIAR declaro estar ciente e concordar com os{" "}
                    <a href="#" className="underline">
                      Termos, Condições de Uso e Políticas de Privacidade
                    </a>{" "}
                    da PERPETUO.AGENCY.
                  </label>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-noise bg-gradient-to-r from-purple-800 via-purple-600 to-blue-700 py-16 px-6">
        <div className="content-relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo Footer */}
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="https://cardeal.tv/wp-content/uploads/2026/03/PERPETUO2.svg"
              alt="Perpetuo Agency Logo"
              className="w-48 md:w-56 drop-shadow-lg"
              referrerPolicy="no-referrer"
            />
            <span className="text-white text-sm tracking-[0.4em] font-sans font-medium opacity-90 block mt-1 ml-1 md:ml-2 drop-shadow-lg">
              .AGENCY
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Links legais */}
          <div className="text-center md:text-right text-white/70 text-xs">
            <a href="#" className="hover:text-white underline mb-1 block">
              Termos e Condições de Uso
            </a>
            <a href="#" className="hover:text-white underline">
              Políticas de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
