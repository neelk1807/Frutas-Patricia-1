import React from "react";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";
import productsec from "../assets/Home/productsec.jpg";
import map from "../assets/production/mapp.png";
import brand1 from "../assets/production/brand1.png";
import brand2 from "../assets/production/brand2.png";
import brand3 from "../assets/production/brand3.png";
import brand4 from "../assets/production/brand4.png";
import iso from "../assets/production/iso.png";
import grace from "../assets/production/grace.png";

import lelio from "../assets/Empresa/lelio.png";

export default function Productions() {
  return (
    <div className="max-w-auto mx-auto">
      <div className="product py-5">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20">
          <div className="mx-auto max-w-full pl-0 sm:pl-6 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:gap-50">
              {/* Left: Text content */}
              <div className="text-center lg:text-left justify-end sm:justify-center md:justify-center lg:justify-center grid px-5 ml-0 lg:ml-[280px]">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">
                    O melhor da produção nacional
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Orgulhamo-nos de produzir uma vasta gama de produtos em
                  diferentes regiões de Portugal, aproveitando ao máximo as
                  particularidades de cada território. A diversidade dos solos e
                  os microclimas únicos de norte a sul permitem-nos cultivar com
                  excelência, respeitando o ritmo da natureza e valorizando o
                  que cada região tem de melhor. Esta abordagem garante produtos
                  autênticos, com identidade própria, e reforça o nosso
                  compromisso com a produção nacional, sustentável e de
                  qualidade.
                </p>
              </div>
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden rounded-l-2xl shadow-md">
                  <img
                    src={productsec}
                    alt="Produção própria zona oeste"
                    className="w-full h-[200px] sm:h-[420px] lg:h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="w-full bg-[url('../src/assets/Home/bg.jpg')] bg-cover bg-center py-12 lg:py-20">
          <div className="mx-auto max-w-full pl-0 sm:pl-6 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:gap-50">
              {/* Left: Text content */}
              <div className="text-center lg:text-left justify-end sm:justify-center md:justify-center lg:justify-end grid px-5">
                <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-[60px] font-bold leading-tight tracking-tight">
                  <br />
                  <span className="text-[var(--color-whitecustom)]">
                    Produção própria:
                    <br />
                    a importância da <br /> Zona Oeste
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-whitecustom)] text-justify text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Localizada entre as serras de Montejunto, Aires e Candeeiros,
                  a região do Oeste é privilegiada por um conjunto de
                  carcaterísticas que tornam o seu ecossistemas único em
                  Portugal.
                </p>
                <p className="mt-6 text-[var(--color-whitecustom)] text-justify text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  O equilíbrio entre a brisa marítima e a temperatura constante
                  ao longo do ano faz desta uma das melhores áreas da Europa
                  para a agricultura.
                </p>
              </div>
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden justify-end flex">
                  <img
                    src={map}
                    alt="Produção própria zona oeste"
                    className="w-[82%] h-auto sm:h-auto md:h-auto lg:h-[82vh] object-contain justify-end flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* lelio section */}
      <div className="lelio">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20" id="home-production">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
            <div id="certifications" className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-22 items-center">
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden">
                  <img
                    src={lelio}
                    alt="Produção própria zona oeste"
                    className=" min-h-40vh sm:h-auto lg:min-h-20vh object-cover"
                  />
                </div>
              </div>

              {/* Left: Text content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">Qualidade:</span>
                  <br />
                  <span className="text-[var(--color-dark)]">
                    as nossas certificações
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  O nosso Departamento de Qualidade da trabalha continuamente de
                  forma a implementar diversas normas, que visam assegurar e
                  garantir a segurança alimentar do consumidor final. Desde o
                  processo de seleção do fornecedor, passando pelo
                  acompanhamento técnico das culturas em campo, garantido a
                  melhor conservação dos produtos na nossa central e terminando
                  com uma seleção dos melhores produtos que chegam até ao
                  consumidor diariamente, com a melhor frescura e qualidade.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* logo */}
      <div className="logo">
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-10 gap-y-8">
              <div className="flex items-center justify-center">
                <img
                  src={brand1}
                  alt="IFS Food"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={brand2}
                  alt="BRC Food Certificated"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={brand3}
                  alt="GLOBALG.A.P."
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-6">
                <img
                  src={brand4}
                  alt="GRASP"
                  className="h-auto sm:h-auto md:h-auto w-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* sustain */}
      <section className="bg-[var(--color-whitecustom)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <h2 className="text-center sm:text-start text-4xl sm:text-5xl lg:text-[60px] font-bold text-slate-900">
                Sustentabilidade
              </h2>

              <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
                Na Frutas Patrícia Pilar, assumimos o compromisso de adoptar
                práticas mais sustentáveis, promovendo o equilíbrio com o meio
                ambiente através da escolha consciente de materiais.
                Paralelamente, investimos na cultura interna da empresa,
                incutindo em toda a equipa uma atitude responsável e alinhada
                com estes valores. Acreditamos que a responsabilidade ambiental
                deve ser encarada como um ato de consciência, e não apenas como
                uma obrigação. Como reflexo deste compromisso, somos
                certificados com a norma ISO 14001 e associados à GRACE –
                Empresas Responsáveis, reforçando a nossa dedicação à
                sustentabilidade e à melhoria contínua.
              </p>
            </div>

            {/* Right: two square cards */}
            <div className="flex flex-col gap-8 items-center lg:items-end">
              <div
                className="rounded-3xl bg-[var(--color-whitecustom)] p-6 sm:p-8 ring-1 ring-slate-900/5 shadow-[0_15px_35px_0_rgba(4,58,83,0.15)]"
              >
                <div className="h-40 w-40 sm:h-44 sm:w-44 md:h-35 md:w-35 lg:h-40 lg:w-40">
                  <img
                    src={iso}
                    alt="ISO 14001"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div
                className="rounded-3xl bg-[var(--color-whitecustom)] p-6 sm:p-8 ring-1 ring-slate-900/5
                            shadow-[0_15px_35px_0_rgba(4,58,83,0.15)]"
              >
                <div className="h-40 w-40 sm:h-44 sm:w-44 md:h-35 md:w-35 lg:h-40 lg:w-40">
                  <img
                    src={grace}
                    alt="GRACE • Empresa Associada"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider Section */}

      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
