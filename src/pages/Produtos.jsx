import React from "react";
import { Link } from "react-router-dom";
import { data as allData } from "../data/form.js";
import arrow from "../assets/Home/rightarrow.svg"

/* ---------- small UI blocks ---------- */
const ProductCard = ({ name, img, showInfo = true }) => (
  <article className="group rounded-2xl bg-white p-8 sm:p-5 lg:p-8 shadow-[0_4px_23.5px_0px_rgba(0,0,0,0.26)] ring-1 ring-slate-900/5">
    <div className="h-20 sm:h-24 lg:h-28 flex items-center justify-center">
      <img
        src={img}
        alt={name}
        className="h-20 lg:h-30 w-auto object-contain group-hover:scale-[1.02] transition"
        loading="lazy"
      />
    </div>

    <h3 className="mt-4 text-center text-[18px] sm:text-[20px] lg:text-[24px] font-normal text-slate-900 min-h-[1.9rem]">
      {name}
    </h3>

    {showInfo && (
      <div className="mt-2 flex justify-center">
        <Link
          to="/contact"
          className="text-[11px] lg:text-lg sm:text-xs font-bold text-[var(--color-dark)] hover:text-emerald-800 inline-flex items-center gap-1"
        >
          Mais info
        </Link>
      </div>
    )}
  </article>
);

const ProductGrid = ({ items, showInfo = true }) => (
  <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((p, i) => (
      <ProductCard key={i} {...p} showInfo={showInfo} />
    ))}
  </div>
);

/* ---------- page ---------- */
export default function Produtos() {
  // read ONLY product arrays from JSON
  const specialties = Array.isArray(allData)
    ? allData.find((b) => b.id === "products_specialties")?.items ?? []
    : [];

  const packaged = Array.isArray(allData)
    ? allData.find((b) => b.id === "products_packaged")?.items ?? []
    : [];

  return (
    <main className="bg-[#F3F6F7] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        {/* Section 1 (static text) */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[60px] font-bold text-slate-900">
            As nossas especialidades
          </h2>
          <p className="mt-3 text-xs sm:text-sm lg:text-xl pb-8 text-slate-700">
            Oferecemos uma gama diversificada de produtos de alta qualidade, disponíveis durante todo o ano e com distribuição garantida nos mercados nacional e internacional.
          </p>
        </header>

        <ProductGrid items={specialties} showInfo />

        {/* Button between sections */}
        <div className="my-8 sm:my-10 lg:my-20 flex justify-center">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-4 rounded-full bg-[var(--color-prime)] text-white px-5 py-2.5 text-sm font-semibold
                       shadow-sm ring-1 ring-inset ring-emerald-700/20 hover:bg-[#27a95b] focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Ver mais
            <span className="arrow bg-[#27a95b] rounded-full p-1">
              <img src={arrow} alt="" />
            </span>
          </Link>
        </div>

        {/* Section 2 (static title; no "Mais info") */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[60px] py-8 font-bold text-slate-900">
            Produtos embaladoos
          </h2>
        </header>

        <ProductGrid items={packaged} showInfo={false} />
      </div>
    </main>
  );
}
