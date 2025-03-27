
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-navy-950 text-white relative">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white mr-1">JMY</span>
              <span className="text-green-500 text-2xl font-bold">Corporation</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              A JMY Corporation é especialista em soluções para empresas que participam 
              de licitações governamentais em todo o Brasil.
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-navy-800">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#search" className="text-gray-400 hover:text-white transition-colors">
                  Licitações
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pesquisa de Licitações
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Capacitação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LGPD
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Rua São Gonçalo de Sapucaí
              </li>
              <li className="text-gray-400">
                CEP 03891-050, São Paulo - SP
              </li>
              <li className="text-gray-400">
                (11) 94828-7268 / (11) 95850-6636
              </li>
              <li className="text-gray-400">
                JMYCORPORATIION@GMAIL.COM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} JMY Corporation. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
