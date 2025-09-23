import React from "react";
import arrow from "../../assets/Empresa/arrow.png";

export default function HistoriaWithSvgArrow() {
  return (
    <section className="bg-[#F3F6F7] py-14 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading + intro (optional) */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            A nossa História
          </h2>
          <p className="mt-5 text-[var(--color-dark)] leading-relaxed text-base sm:text-lg">
            A Frutas Patrícia Pilar foi fundada em 1992 com o objetivo de
            fornecer produtos hortofrutícolas de elevada qualidade,
            estabelecendo parcerias sólidas com produtores nacionais. Ao longo
            dos anos, temos expandido significativamente a nossa capacidade de
            armazenamento e embalagem - um crescimento superior a 300% - o que
            nos posiciona hoje como uma referência consolidada no mercado
            hortofrutícola.
          </p>
        </header>

        {/* ===== Tablet/Desktop with SVG arrow ===== */}
        <div className="hidden md:grid mt-12 lg:mt-16 gap-0">
          {/* Top milestones (columns 2 and 4) */}
          <div className="grid grid-cols-5 gap-6 items-end">
            <div />
            <MilestoneTop
              title="1995–1998"
              text="Mudança para os Casais do Rijo, marcando o início da expansão."
              imgSrc={arrow}
              imgAlt="1995–1998"
            />
            <div />
            <MilestoneTop
              title="2000–2018"
              text="Novas instalações nas Paradas, consolidando o crescimento e expansão no setor."
              imgSrc={arrow}
              imgAlt="2000–2018"
            />
            <div />
          </div>

          {/* Bottom milestones (columns 1, 3, 5) */}
          <div className="grid grid-cols-5 gap-6 items-start -mt-8 lg:-mt-9.5">
            <MilestoneBottom
              title="1992–1995"
              text="Fundação da empresa na Lourinhã, com foco na comercialização de produtos hortofrutícolas."
              imgSrc={arrow}
              imgAlt="1992–1995"
            />
            <div />
            <MilestoneBottom
              title="1998–2000"
              text="Nova mudança para o Vale da Borra, aumentando a capacidade de operação."
              imgSrc={arrow}
              imgAlt="1998–2000"
            />
            <div />
            <MilestoneBottom
              title="Atualmente"
              text="Sede em A-dos-Cunhados, Torres Vedras; evolução contínua e fortalecimento no mercado hortofrutícola."
              imgSrc={arrow}
              imgAlt="Atualmente"
            />
          </div>
        </div>

        {/* ===== Mobile (vertical only; images hidden) ===== */}
        <div className="md:hidden mt-10 space-y-8">
          {[
            {
              t: "1992–1995",
              d: "Fundação da empresa na Lourinhã, com foco na comercialização de produtos hortofrutícolas.",
            },
            {
              t: "1995–1998",
              d: "Mudança para os Casais do Rijo, marcando o início da expansão.",
            },
            {
              t: "1998–2000",
              d: "Nova mudança para o Vale da Borra, aumentando a capacidade de operação.",
            },
            {
              t: "2000–2018",
              d: "Novas instalações nas Paradas, consolidando o crescimento e expansão no setor.",
            },
            {
              t: "Atualmente",
              d: "Sede em A-dos-Cunhados, Torres Vedras; evolução contínua e fortalecimento no mercado hortofrutícola.",
            },
          ].map((it, i) => (
            <div key={i} className="relative pl-8">
              <img src={arrow} className="absolute rotate-90 w-20 sm:w-15 sm:-left-5 -left-7  top-8 bottom-0" />
              <h4 className="text-emerald-600 font-extrabold text-xl">
                {it.t}
              </h4>
              <p className="mt-1 text-slate-700 text-sm leading-relaxed">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== helpers (with images) ===== */
function MilestoneTop({ title, text, imgSrc, imgAlt = "" }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="px-2 max-w-[16rem]">
        <h3 className="text-[var(--color-prime)] font-bold text-xl lg:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-slate-700 text-sm leading-relaxed">{text}</p>
      </div>

      {/* Image appears UNDER the text (desktop/tablet only) */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="hidden md:block mt-4 w-40 sm:w-48 lg:w-56 h-auto sm:h-auto lg:h-auto object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function MilestoneBottom({ title, text, imgSrc, imgAlt = "" }) {
  return (
    <div className="text-center flex flex-col items-center">
      {/* Image appears ABOVE the text (desktop/tablet only) */}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="hidden md:block mt-4 w-40 sm:w-48 lg:w-56 h-auto sm:h-auto lg:h-auto object-cover mb-5"
          loading="lazy"
        />
      )}

      <div className="px-2 max-w-[16rem]">
        <h3 className="text-[var(--color-prime)] font-bold text-xl lg:text-3xl">
          {title}
        </h3>
        <p className="mt-2 text-slate-700 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
