
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} transition-all duration-1000 delay-300`}>
            <div className="space-y-6">
              <div className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium">
                Sistema Inteligente de Licitações
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Simplifique seu acesso a{" "}
                <span className="text-gradient">licitações governamentais</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                A JMY Corporation oferece uma plataforma avançada para monitorar, 
                pesquisar e participar de licitações públicas em todo o Brasil com 
                eficiência e precisão.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#search" className="btn-accent flex items-center">
                  Pesquisar Licitações
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <a href="#about" className="btn-secondary">
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} transition-all duration-1000 delay-500`}>
            <div className="navy-glass p-1 rounded-2xl shadow-xl">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-navy-800 animate-pulse-soft flex items-center justify-center">
                  <div className="text-gray-400">Visualização da plataforma</div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-8 glass-card bg-navy-900/80 flex items-center px-3 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="navy-glass rounded-xl p-4 text-center animate-float">
                <h3 className="text-white font-semibold mb-1">+10.000</h3>
                <p className="text-gray-400 text-sm">Licitações Disponíveis</p>
              </div>
              <div className="navy-glass rounded-xl p-4 text-center animate-float" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-white font-semibold mb-1">+5.000</h3>
                <p className="text-gray-400 text-sm">Usuários Ativos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
