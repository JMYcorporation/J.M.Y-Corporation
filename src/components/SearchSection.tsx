
import React, { useState } from "react";
import { Search, Calendar, MapPin, DollarSign, Filter, ArrowRight } from "lucide-react";

const SearchSection = () => {
  const [filters, setFilters] = useState({
    keywords: "",
    price: { min: "", max: "" },
    location: "",
    date: "",
    uf: "",
    uasg: "",
    number: ""
  });

  const [showAllFilters, setShowAllFilters] = useState(false);

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    setFilters(prev => ({
      ...prev,
      price: {
        ...prev.price,
        [type]: value
      }
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pesquisando com os filtros:", filters);
    // Aqui seria a integração com a API
  };

  const ufOptions = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
    "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  return (
    <section id="search" className="section bg-gray-50 relative">
      <div className="absolute inset-0 bg-navy-950/5 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
            Pesquise Licitações em Todo o Brasil
          </h2>
          <p className="text-gray-500 text-lg">
            Encontre oportunidades de negócios com o governo usando nosso sistema 
            avançado de pesquisa de licitações públicas.
          </p>
        </div>

        <div className="glass-card rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto transform hover:shadow-2xl transition-all duration-300">
          <div className="bg-navy-950 text-white py-5 px-6">
            <h3 className="text-xl font-semibold">Pesquisa de Licitações</h3>
            <p className="text-gray-300 text-sm">Use os filtros para encontrar licitações que correspondam às suas necessidades</p>
          </div>

          <form onSubmit={handleSearch} className="p-6">
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Palavras-chave, objeto da licitação..."
                  className="input-field pl-10"
                  value={filters.keywords}
                  onChange={(e) => handleFilterChange("keywords", e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => setShowAllFilters(!showAllFilters)}
                className="btn-secondary flex items-center justify-center"
              >
                <Filter className="h-5 w-5 mr-2" />
                {showAllFilters ? "Ocultar Filtros" : "Mais Filtros"}
              </button>
              <button 
                type="submit" 
                className="btn-accent flex items-center justify-center search-btn-pulse"
              >
                <Search className="h-5 w-5 mr-2" />
                Pesquisar
              </button>
            </div>

            {showAllFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Faixa de Preço
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        placeholder="Mínimo"
                        className="input-field pl-10 text-sm py-2"
                        value={filters.price.min}
                        onChange={(e) => handlePriceChange("min", e.target.value)}
                      />
                    </div>
                    <span className="text-gray-500">até</span>
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        placeholder="Máximo"
                        className="input-field pl-10 text-sm py-2"
                        value={filters.price.max}
                        onChange={(e) => handlePriceChange("max", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Local
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Cidade, região..."
                      className="input-field pl-10 text-sm py-2"
                      value={filters.location}
                      onChange={(e) => handleFilterChange("location", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="input-field pl-10 text-sm py-2"
                      value={filters.date}
                      onChange={(e) => handleFilterChange("date", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UF
                  </label>
                  <select
                    className="input-field text-sm py-2"
                    value={filters.uf}
                    onChange={(e) => handleFilterChange("uf", e.target.value)}
                  >
                    <option value="">Todos os estados</option>
                    {ufOptions.map(uf => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UASG
                  </label>
                  <input
                    type="text"
                    placeholder="Código UASG..."
                    className="input-field text-sm py-2"
                    value={filters.uasg}
                    onChange={(e) => handleFilterChange("uasg", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número da Licitação
                  </label>
                  <input
                    type="text"
                    placeholder="Número/Ano..."
                    className="input-field text-sm py-2"
                    value={filters.number}
                    onChange={(e) => handleFilterChange("number", e.target.value)}
                  />
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-navy-100 text-navy-800 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-navy-950 mb-2">Busca Inteligente</h3>
            <p className="text-gray-500">
              Nosso sistema analisa mais de 10.000 licitações diariamente para encontrar as melhores oportunidades.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-navy-100 text-navy-800 mb-4">
              <Filter className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-navy-950 mb-2">Filtros Avançados</h3>
            <p className="text-gray-500">
              Filtre por preço, localização, órgão, data e muito mais para encontrar exatamente o que procura.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-navy-100 text-navy-800 mb-4">
              <ArrowRight className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-navy-950 mb-2">Acesso Rápido</h3>
            <p className="text-gray-500">
              Obtenha acesso instantâneo a editais, anexos e toda a documentação necessária para participar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
