
import React from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com o serviço de envio de e-mails
    console.log("Formulário enviado");
  };

  return (
    <section id="contact" className="section bg-navy-950 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/98 to-navy-950"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-4">
            Fale Conosco
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-300">
            Estamos à disposição para ajudar sua empresa a encontrar as melhores oportunidades 
            em licitações governamentais. Entre em contato conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="navy-glass rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                  <p className="text-gray-300">
                    Rua São Gonçalo de Sapucaí<br />
                    CEP 03891-050<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telefones</h3>
                  <p className="text-gray-300">
                    (11) 94828-7268<br />
                    (11) 95850-6636
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-gray-300">
                    JMYCORPORATIION@GMAIL.COM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-navy-800">
              <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-navy-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="block text-white font-medium">Segunda a Sexta</span>
                    8:00 - 18:00
                  </p>
                </div>
                <div className="bg-navy-800/50 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    <span className="block text-white font-medium">Sábado</span>
                    9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-white"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-white min-h-[120px]"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-accent flex items-center justify-center py-3"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
