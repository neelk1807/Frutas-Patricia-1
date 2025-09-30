import React from "react";
import { data as allSections } from "../data/form.js";
import icon1 from "../assets/Empresa/icon1.png";
import icon3 from "../assets/Empresa/icon3.png";

export default function Distribution() {
  const section = allSections.find((s) => s.id === "distribution") || {
    images: [],
  };
  const stats = [
    { value: "+50", label: "viaturas" },
    { value: "+18", label: "Países" },
    { value: "+182M", label: "expedições por ano" },
  ];
  return (
    <div className="max-w-auto mx-auto">
      <section className="bg-[var(--color-whitecustom)] py-14 sm:py-16 lg:py-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title + Subtitle */}
          <header className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-dark)]">
              Frota Lloretrans
            </h2>
            <p className="mt-4 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
              Com uma infraestrutura de transportes terrestres de grande
              capacidade, assegura a entrega da frescura e qualidade excecionais
              dos nossos produtos.
            </p>
          </header>

          {/* Grid */}
          <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {section.images.map((img, i) => (
              <figure
                key={i}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 1 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  loading="lazy"
                  className="w-full h-[60vh] sm:h-[70vh] lg:h-[460px] object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-30">
        <div className="mx-auto max-w-5xl px-4">
          {/* Pill */}
          <div
            className="mx-auto w-full md:w-auto bg-[var(--color-prime)] text-[var(--color-whitecustom)] justify-center flex
                        rounded-4xl md:rounded-full shadow-xl ring-1 ring-black/5
                        px-6 sm:px-10 py-8"
          >
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-y-0 sm:gap-x-12 text-center max-w-2xl">
              {stats.map((s, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="text-3xl sm:text-4xl lg:text-[60px] font-bold leading-none">
                    {s.value}
                  </span>
                  <span className="mt-2 text-sm sm:text-base lg:text-xl opacity-95">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F5F6] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title + short intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-15 mb-10 sm:mb-15">
            <div className="lg:col-span-3 sm:col-span-6 md:col-span-6">
              <h2 className="text-center sm:text-start text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
                <span className="block">A empresa</span>
                <span className="block">Lloretrans</span>
              </h2>
            </div>

            <div className="text-center sm:text-start lg:col-span-9 sm:col-span-6 md:col-span-6">
              <p className="text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
                A Lloretrans é uma empresa especializada no transporte
                rodoviário de mercadorias, com foco no setor hortofrutícola. Com
                uma frota de mais de 50 viaturas, equipadas com reboques
                frigoríficos e sistemas de monitorização em tempo real, assegura
                a manutenção da qualidade e frescura dos produtos durante todo o
                transporte.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-5 mx-0 sm:mx-6 lg:mx-40 md:-mx-5">
            {/* Card 1 */}
            <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col max-w-full lg:max-w-sm">
              <img
                src={icon1}
                alt=""
                className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                loading="lazy"
              />
              <h3 className="text-2xl sm:text-2xl font-bold">
                Grande Capacidade
              </h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] w-full">
                <p>
                  Oferece transporte seguro e rápido, nacional e internacional,
                  com uma frota de veículos pesados frigoríficos equipados com
                  tecnologia avançada.
                </p>
                <p>Os clientes são informados sobre o status da encomenda.</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col max-w-full lg:max-w-sm">
              <img
                src={icon3}
                alt=""
                className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                loading="lazy"
              />
              <h3 className="text-2xl sm:text-2xl font-bold">
                Transporte Internacional
              </h3>
              <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)] ">
                <p>
                  Transporte seguro e rápido nacional e internacional com foco
                  no mercado ibérico, operando também noutros países europeus e
                  Marrocos.
                </p>
                <p>
                  Conta com uma frota com reboques frigoríficos equipados com
                  tecnologia avançada.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
