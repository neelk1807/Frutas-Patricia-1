// src/pages/Home.jsx
import React from "react";
import Specialties from "../components/Home/Specialties.jsx";
import HeroSlider from "../components/Home/HeroSlider.jsx";
import ProductSlider from "../components/Home/ProductSlider.jsx";
import CertificationHero from "../components/Home/Certification.jsx";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";
import arrow from "../assets/Home/rightarrow.svg";
import king from "../assets/Home/king.svg";
import infra1 from "../assets/Home/infra1.jpg";
import infra2 from "../assets/Home/infra2.jpg";
import productsec from "../assets/Home/productsec.jpg";
import videoimage from "../assets/Home/videoimage.png"





export default function Home({
  items = [
    { value: "+1500", label: "colaboradores" },
    { value: "16", label: "nacionalidades" },
    { value: "33", label: "empresas do grupo" },
    { value: "700 ha", label: "produção própria" },
  ],
}) {
  return (
    <div className="max-w-auto mx-auto">
      <div className="hero">
        <HeroSlider />
      </div>
      <div className="bg-cover bg-center flex flex-col items-center justify-center p-6 pb-0 bg-[url('../src/assets/Home/bg.jpg')]">
        <div className="max-w-7xl w-full justify-center text-[var(--color-whitecustom)] item-center text-center md:text-left pt-8 gap-10">
          {/* Title */}
          <div className="content grid grid-cols-1 lg:grid-cols-2 justify-between pt-8 gap-5 md:gap-20 ">
            <h1 className="text-3xl md:text-6xl max-w-lg font-bold mb-4 justify-end "> 
              Produtos hortofrutículas <br /> de qualidade
            </h1>

            {/* Description */}
            <div className="textcontent flex items-center">
              <p className="text-sm md:text-lg max-w-lg text-justify mb-8 ">
                A Frutas Patrícia Pilar, é uma empresa 100% nacional, criada com
                o objetivo de fornecer o mercado hortofrutícola nacional e
                internacional, assente na produção, distribuição e
                comercialização.
              </p>
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="flex justify-center md:justify-center mt-10 md:mt-20">
            <div className="relative rounded-t-xl overflow-hidden shadow-lg max-w-7xl w-full">
              <img
                src={videoimage}
                alt="Factory"
                className="w-full h-50 md:h-auto object-cover"
              />
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-opacity-40 hover:bg-opacity-50 transition">
                <div className="w-16 h-16 bg-[var(--color-whitecustom)] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[var(--color-prime)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="specialtes mt-10 md:mt-20">
        {/* Specialties Section */}
        <Specialties />
      </div>
      <div className="certification mt-10 md:mt-20">
        {/* certification Section */}
        <CertificationHero />
      </div>
      <div className="counter py-5 md:py-25">
        <section className="w-full bg-[var(--color-whitecustom)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 items-center">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="text-center lg:text-center flex flex-col lg:items-center"
                >
                  <div className="text-3xl sm:text-7xl font-bold text-[var(--color-prime)] leading-none">
                    {it.value}
                  </div>
                  <div className="mt-3 text-[var(--color-gray2)] font-bold text-sm sm:text-2xl">
                    {it.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* infra section */}
      <div className="infra">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-dark)] leading-tight">
                  Infra-estruturas
                </h2>
                <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Com 45.000 m2 de área coberta, a empresa frutas patrícia pilar
                  possui neste momento uma das maiores e mais tecnológicas
                  instalações do sector, no país.
                </p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <button onClick={() => window.location.href = "/empresa"} className="inline-flex items-center gap-4 rounded-full px-6 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-emerald-700/20 bg-[var(--color-prime)] text-[var(--color-whitecustom)] hover:bg-[#27a95b] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                    conhecer infraestruturas
                    <div className="arrow bg-[#27a95b] rounded-full p-1">
                      <img src={arrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Right: Images */}
              <div className="relative">
                <div className="overflow-hidden rounded-[41px] shadow-md mt-5">
                  <img
                    src={infra1}
                    alt="Infra estrutura principal"
                    className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] object-cover z-10"
                  />
                  <div className="absolute -top-10 right-4 sm:-top-13 sm:right-3 z-0">
                    <div className="h-12 w-12 sm:h-14 sm:w-12 bg-[var(--color-prime)] rounded-full shadow-[10px_13px_30px_0_rgba(4,58,83,0.24)] grid place-items-center pb-25 pt-1">
                      {/* Crown icon */}
                      <div className="king bg-emerald-700 rounded-full p-1">
                        <img
                          src={king}
                          alt=""
                          className="w-8 sm:w-8 lg:w-7 h-8 sm:h-8 lg:h-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 left-6 sm:-left-10 border-3 border-[var(--color-whitecustom)] rounded-4xl z-20">
                  <div className="overflow-hidden rounded-4xl shadow-[0px_15px_35px_0_rgba(4,58,83,0.15)]">
                    <img
                      src={infra2}
                      alt="Estufa"
                      className="w-30 sm:w-52 lg:w-55 h-28 sm:h-36 lg:h-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="productslider">
        <ProductSlider />
      </div>

      {/* product */}
      <div className="product py-5 md:py-25">
        <section className="w-full bg-[var(--color-whitecustom)] py-12 lg:py-20">
          <div className="mx-auto max-w-full pl-4 sm:pl-6 lg:pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:gap-60">
              {/* Left: Text content */}
              <div className="text-center lg:text-left justify-end grid">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  <span className="text-[var(--color-prime)]">
                    Produção própria:
                  </span>
                  <br />
                  <span className="text-[var(--color-dark)]">
                    importância da
                    <br />
                    zona oeste
                  </span>
                </h2>

                <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Orgulhamo-nos de produzir diversos produtos em várias regiões
                  do país, tirando proveito das características próprias de cada
                  solo e micro-climas únicos.
                </p>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <button onClick={() => window.location.href = "/production"} className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold shadow-sm cursor-pointer ring-1 ring-inset ring-emerald-700/20 bg-[var(--color-prime)] text-[var(--color-whitecustom)] hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
                    Ver mais
                    <div className="arrow bg-[#27a95b] rounded-full p-1">
                      <img src={arrow} alt="" />
                    </div>
                  </button>
                </div>
              </div>
              {/* Right: Image */}
              <div className="order-first lg:order-none">
                <div className="overflow-hidden rounded-l-2xl shadow-md">
                  <img
                    src={productsec}
                    alt="Produção própria zona oeste"
                    className="w-full h-[300px] sm:h-[520px] lg:h-[700px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Brand Slider Section */}

      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
