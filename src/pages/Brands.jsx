// src/pages/ProductsPage.jsx
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { data as allData } from "../data/form.js";

export default function ProductsPage() {
  
  const marcas = Array.isArray(allData)
    ? allData.find((s) => s.id === "marcas")?.items ?? []
    : [];
  const empresas = Array.isArray(allData)
    ? allData.find((s) => s.id === "empresas")?.items ?? []
    : [];

  const [active, setActive] = useState(null); 

  // --- modal helpers ---
  const onClose = useCallback(() => setActive(null), []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (active) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onClose]);

  return (
    <section className="bg-[#F5F7F8] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ====== MARCAS DO GRUPO ====== */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold text-slate-900">
            Marcas do Grupo
          </h1>
          <p className="my-8 text-[14px] md:text-[22px] text-[var(--color-dark)]">
            O Grupo Patrícia Pilar reúne marcas complementares que, em conjunto, asseguram uma resposta abrangente às exigências do mercado, reforçando a posição do grupo como referência no setor.
          </p>
        </header>

        <CardsGrid items={marcas} onCardClick={setActive} />

        {/* ====== EMPRESAS DO GRUPO ====== */}
        <header className="text-center max-w-3xl mx-auto mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-slate-900">
            Empresas do grupo
          </h2>
          <p className="my-8 text-[14px] md:text-[22px] text-[var(--color-dark)]">
            Com uma estratégia focada na expansão e na colaboração, o Grupo Patrícia Pilar tem consolidado a sua presença no setor, assegurando competitividade e capacidade de resposta às necessidades do mercado.
          </p>
        </header>

        <CardsGrid items={empresas} onCardClick={setActive} />
      </div>

      {/* ===== Modal shared by both sections ===== */}
      {active && (
        <Modal onClose={onClose}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
            <div className="w-full">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                {active.name}
              </h3>

              {active.mheading && (
                <p className="mt-6 text-[var(--color-dark)] font-bold text-justify text-[14px] md:text-[18px] leading-relaxed">
                  {active.mheading}
                </p>
              )}

              <div className="mt-6 text-[var(--color-dark)] leading-relaxed space-y-4">
                {Array.isArray(active.story) ? (
                  active.story.map((para, i) => (
                    <p
                      key={i}
                      className="text-justify text-[14px] md:text-[18px]"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-justify text-[14px] md:text-[18px]">
                    {active.story}
                  </p>
                )}
              </div>

              <Link
                to="/contactos"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--color-prime)] px-6 py-3 font-semibold text-white shadow-sm ring-1 ring-emerald-700/20 hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Saber mais
                <span className="inline-grid place-items-center rounded-full bg-[#27a95b] p-1">
                  <img src="../src/assets/Home/rightarrow.svg" alt="" />
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-center w-22 h-22 md:h-full md:w-full lg:h-full -order-1 md:order-0">
              <img
                src={active.logo || active.thumb}
                alt={active.name}
                className="max-h-[320px] w-auto  object-contain"
              />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

function CardsGrid({ items, onCardClick }) {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {items.map((it) => (
        <article
          key={it.id}
          onClick={() => onCardClick(it)}
          className="group cursor-pointer rounded-[20px] bg-white shadow-[0px_4px_23.5px_0_rgba(0,0,0,0.25)] ring-1 ring-black/5 p-7"
        >
          <div className="flex items-center gap-4 h-32 w-32">
            <img
              src={it.thumb || it.logo}
              alt={it.name}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          {it.short && (
            <p className="mt-4 text-base text-[var(--color-dark)] leading-relaxed line-clamp-3">
              {it.short}
            </p>
          )}

          <div className="mt-4">
            <Link
              to="/contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[var(--color-prime)] font-bold hover:text-emerald-700"
            >
              Mais info
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}


function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-[101] w-full max-w-5xl rounded-2xl bg-white p-3 sm:p-8 shadow-xl">
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
