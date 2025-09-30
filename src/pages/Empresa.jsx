import React from "react";
import Infraslider from "../components/Empresa/infraslider.jsx";
import NossaHistoria from "../components/Empresa/history.jsx";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";
import lelio from "../assets/Empresa/lelio.png";
import propria2 from "../assets/Empresa/propria2.png";
import propria1 from "../assets/Empresa/propria1.png";
import icon1 from "../assets/Empresa/icon1.png";
import icon2 from "../assets/Empresa/icon2.png";
import icon3 from "../assets/Empresa/icon3.png";
import hero1 from "../assets/Empresa/hero1.png";
import hero2 from "../assets/Empresa/hero2.png";
import hero3 from "../assets/Empresa/hero3.png";
import hero4 from "../assets/Empresa/hero4.png";

export default function EmpresaThirtyYears() {
  return (
    <div className="max-w-auto mx-auto">
      {/* hero section empresa */}

      <div className="bg-cover bg-center flex flex-col items-center justify-center p-6 pb-0 pt-20 lg:pt-57 md:pt-50 bg-[url('../src/assets/Home/bg.jpg')]">
        <div className="relative mx-auto max-w-7xl">
          {/* Top row: title (left) + paragraph (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 pb-10">
            <div className="lg:col-span-1 text-[var(--color-whitecustom)] text-center lg:text-left md:text-center max-w-2xl">
              <p className="text-2xl sm:text-3xl lg:text-[60px] font-bold italic">
                +30 anos
              </p>
              <h2 className="mt-1 text-3xl sm:text-4xl lg:text-[60px] font-extrabold leading-tight">
                Frutas Patrícia Pilar
              </h2>
            </div>

            <div className="lg:col-span-1 text-[var(--color-whitecustom)] text-justify flex justify-end max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
                A Frutas Patrícia Pilar é uma empresa familiar pertencente à 2ª
                geração de empresários agrícolas, geração essa que iniciou esta
                atividade na Lourinhã há mais de 30 anos.
              </p>
            </div>
          </div>

          {/* Images row: 4 cards, responsive */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-1.5">
              <img
                src={hero1}
                alt="Fundadores"
                className="h-auto sm:h-[32vh] lg:h-[42.8vh] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-0 sm:mt-21.5 lg:mt-21">
              <img
                src={hero2}
                alt="Sede"
                className="h-auto sm:h-[22vh] lg:h-[33.8vh] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] rounded-b-0 sm:rounded-t-2xl shadow-md bg-white/5 mt-1.5">
              <img
                src={hero3}
                alt="Estufas"
                className="h-auto sm:h-[32vh] lg:h-[42.8vh] w-full object-cover"
                loading="lazy"
              />
            </figure>

            <figure className="overflow-hidden rounded-[25px] sm:rounded-b-none sm:rounded-t-2xl shadow-md bg-white/5 mt-0 sm:mt-21.5 lg:mt-21">
              <img
                src={hero4}
                alt="Frota"
                className="h-auto sm:h-[22vh] lg:h-[33.8vh] w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* history section */}
      <div className="history">
        <NossaHistoria />
      </div>

      {/* propria */}
      <div className="propria">
        <section className="bg-[var(--color-whitecustom)] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Heading + copy */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)]">
                Produção Própria
              </h2>
              <p className="mt-5 max-w-4xl mx-auto text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed">
                O tomate é o nosso principal produto, representando cerca de 70%
                da nossa atividade e sendo o artigo com maior crescimento. Em
                colaboração com os nossos produtores, somos o maior produtor
                nacional de tomate para consumo em fresco, atendendo a todos os
                canais de distribuição. Além disso, a nossa oferta abrange
                também uma variedade de produtos hortícolas, como batata-doce,
                cenoura, abóbora, feijão verde, maçãs Fuji, Royal Gala e
                Reineta, além da prestigiada Pera Rocha.
              </p>
            </div>

            {/* Images */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left (portrait, narrower) */}
              <figure className="md:col-span-1 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={propria1}
                  alt="Colheita de tomate"
                  className="w-full h-[280px] sm:h-[360px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </figure>

              {/* Right (landscape, wider) */}
              <figure className="md:col-span-2 overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={propria2}
                  alt="Tomates na estufa"
                  className="w-full h-[240px] sm:h-[320px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>
      </div>

      {/* linhas section */}
      <div className="linhas">
        <section className="bg-[#F2F5F6] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Title + short intro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-15 mb-10 sm:mb-15">
              <div className="lg:col-span-6">
                <h2 className="text-3xl text-center sm:text-start sm:text-4xl lg:text-5xl font-bold text-[var(--color-dark)] leading-tight">
                  <span className="block">Linhas</span>
                  <span className="block">Estratégicas</span>
                </h2>
              </div>

              <div className="lg:col-span-6 flex justify-end">
                <p className="text-center sm:text-start text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-sm">
                  Conheça as nossas vertentes de atuação e o nosso compromisso
                  com a excelência.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col">
                <img
                  src={icon1}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">Produção</h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)]">
                  <p>
                    Na Frutas Patrícia Pilar, a qualidade começa com a nossa
                    terra.
                  </p>
                  <p>
                    Com mais de 30 anos de experiência, cultivamos frutas e
                    legumes frescos com todo o cuidado e respeito pela natureza.
                  </p>
                  <p>
                    Os nossos processos produtivos são rigorosos, garantindo
                    alimentos saudáveis, saborosos e livres de agrotóxicos.
                  </p>
                  <p>
                    Trabalhamos com tecnologias de ponta e práticas sustentáveis
                    para levar o melhor da nossa colheita.
                  </p>
                </div>
              </article>

              {/* Card 2 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col">
                <img
                  src={icon2}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">
                  Comercialização
                </h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)]">
                  <p>
                    O nosso compromisso vai muito além da entrega: procuramos
                    sempre criar parcerias duradouras com os nossos clientes.
                  </p>
                  <p>
                    A Frutas Patrícia Pilar é uma referência na comercialização
                    de frutas e legumes de alta qualidade, oferecendo soluções
                    personalizadas e atendimento especializado.
                  </p>
                  <p>
                    Há mais de 30 anos, somos sinónimo de confiança, qualidade e
                    excelência no mercado hortofrutícola.
                  </p>
                </div>
              </article>

              {/* Card 3 */}
              <article className="h-full rounded-2xl bg-[var(--color-prime)] text-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/5 p-6 sm:p-8 flex flex-col">
                <img
                  src={icon3}
                  alt=""
                  className="h-25 w-25 mb-4 sm:mb-6 opacity-95"
                  loading="lazy"
                />
                <h3 className="text-2xl sm:text-2xl font-bold">Distribuição</h3>
                <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[var(--color-whitecustom)]">
                  <p>A excelência dos nossos produtos vai além da produção.</p>
                  <p>
                    Com uma logística eficiente e ágil, asseguramos que os
                    nossos produtos chegam frescos e no ponto certo aos nossos
                    clientes.
                  </p>
                  <p>
                    Com décadas de experiência no mercado, compreendemos a
                    importância de pontualidade e qualidade na entrega,
                    conquistando a confiança dos nossos clientes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* lelio section */}
      <div className="lelio">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-22 items-center">
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden">
                  <img
                    src={lelio}
                    alt="Produção própria zona oeste"
                    className="w-full h-auto sm:h-auto lg:h-auto object-cover"
                  />
                </div>
              </div>

              {/* Left: Text content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">Leilão:</span>
                  <br />
                  <span className="text-[var(--color-dark)]">
                    a ligação direta
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  O nosso leilão estabelece uma ligação direta entre produção e
                  comércio tradicional, com parcerias baseadas na qualidade,
                  segurança alimentar e alinhamento com a nossa gama de
                  produtos. Garantimos estabilidade na oferta e soluções
                  eficazes para o escoamento, assegurando o fornecimento
                  contínuo dos produtos mais procurados e complementando a
                  produção com capacidade comercial instalada. Os nossos canais
                  de distribuição permitem escoar a capacidade produtiva com
                  condições justas e competitivas, para que os produtores se
                  concentrem na excelência da produção enquanto nós tratamos da
                  comercialização com eficácia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* infra slider */}
      <div className="infraslider">
        <Infraslider />
      </div>
      {/* Brand Slider Section */}
      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
