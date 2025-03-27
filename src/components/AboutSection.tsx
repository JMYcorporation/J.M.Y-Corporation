
import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section relative bg-white" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="navy-glass rounded-2xl p-6 animate-on-scroll">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sobre a JMY Corporation
                </h3>
                <p className="text-gray-300 mb-6">
                  Fundada com a missão de simplificar o acesso a licitações governamentais, 
                  a JMY Corporation se tornou referência em soluções tecnológicas para 
                  empresas que desejam fornecer produtos e serviços para órgãos públicos.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-navy-800/50 rounded-lg p-4 text-center">
                    <h4 className="text-green-500 text-2xl font-bold">10+</h4>
                    <p className="text-gray-300 text-sm">Anos de Experiência</p>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-4 text-center">
                    <h4 className="text-green-500 text-2xl font-bold">95%</h4>
                    <p className="text-gray-300 text-sm">Sucesso em Licitações</p>
                  </div>
                </div>
                <div className="border-t border-navy-800 pt-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                        JMY
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">JMY Corporation</h4>
                      <p className="text-gray-400 text-sm">Especialistas em Licitações Governamentais</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium animate-on-scroll">
                Expertise e Compromisso
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 animate-on-scroll">
                Transformando o acesso a <span className="text-gradient">oportunidades governamentais</span>
              </h2>
              <p className="text-gray-500 animate-on-scroll">
                Com uma abordagem inovadora e tecnologia de ponta, ajudamos empresas 
                de todos os tamanhos a navegar pelo complexo mundo das licitações públicas, 
                garantindo maior eficiência e sucesso nas contratações com o governo.
              </p>
              
              <div className="space-y-4 animate-on-scroll">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-navy-100 text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Monitoramento em Tempo Real</h3>
                    <p className="text-gray-500">
                      Acompanhe licitações em tempo real com alertas personalizados para nunca perder uma oportunidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-navy-100 text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Consultoria Especializada</h3>
                    <p className="text-gray-500">
                      Nossa equipe de especialistas oferece suporte completo em todas as etapas do processo licitatório.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-navy-100 text-navy-800">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-navy-900">Tecnologia Avançada</h3>
                    <p className="text-gray-500">
                      Plataforma desenvolvida com as mais modernas tecnologias para garantir eficiência e segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
