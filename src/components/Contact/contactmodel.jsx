import React, { useEffect, useState, useCallback } from "react";
import email from "../../assets/Contact/email.png"
import phone from "../../assets/Contact/phone.png"
import map from "../../assets/Contact/map.png"


/* ------------- department data for the modal ------------- */
const departments = [
  { title: "Traporte e Logística", email: "transportes@patriciapilar.pt" },
  { title: "Direção Financeira", email: "brigite.jorge@patriciapilar.pt" },
  { title: "Vasilhame", email: "transportes@patriciapilar.pt" },
  { title: "Recursos Humanos", email: "transportes@patriciapilar.pt" },
  { title: "Comercial", email: "transportes@patriciapilar.pt" },
  { title: "Qualidade", email: "transportes@patriciapilar.pt" },
];

function DepartmentModal({ open, onClose }) {
  const esc = useCallback((e) => e.key === "Escape" && onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", esc);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", esc);
    };
  }, [open, esc]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] p-4 flex items-center justify-center">
      <div className="absolute inset-0 bg-[var(--color-dark)]" onClick={onClose} />
      <div className="relative z-[101] w-full max-w-6xl rounded-2xl bg-[var(--color-whitecustom)] p-5 sm:p-8 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 rounded-full p-2 text-slate-600 hover:bg-slate-100 cursor-pointer"
        >
          {/* replace with your svg x icon if you have */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 py-5 px-2 md:px-10">
          {departments.map((d, i) => (
            <article
              key={i}
              className="rounded-2xl bg-bg-[var(--color-whitecustom)] shadow-[0_4px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/5 p-5"
            >
              <h3 className="text-sm md:text-lg sm:text-xl font-bold text-bg-[var(--color-dark)]">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-bg-[var(--color-gray2)]">{d.email}</p>

              <a
                href={`mailto:${d.email}`}
                className="mt-0 md:mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-prime)] hover:text-emerald-700"
              >
                Enviar email
                <span className="inline-grid place-items-center rounded-ful text-bg-[var(--color-whitecustom)] w-5 h-5">
                  {/* right arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="#009b3e"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactStrip() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-40 bg-cover bg-center bg-[url('../../assets/Home/bg.jpg')]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card: Email */}
          <article className="rounded-2xl bg-[var(--color-whitecustom)] shadow-[0_8px_28px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6">
            <div className="flex-1 items-center gap-3">
              <span className="inline-grid size-18 place-items-center rounded-full bg-[var(--color-whitecustom)] text-[var(--color-prime)]">
                <img src={email} alt="" />
              </span>
              <h3 className="text-xl font-semibold text-bg-[var(--color-dark)] mt-4">Email</h3>
            </div>

            <p className="mt-1 text-sm text-bg-[var(--color-gray2)]">
              Envie-nos um email com a sua questão e respondemos com a maior brevidade.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-prime)] hover:text-emerald-700 cursor-pointer"
            >
              Enviar email
              <span className="inline-grid place-items-center rounded-ful text-[var(--color-whitecustom)] w-5 h-5">
                {/* right arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#009b3e"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </article>

          {/* Card: Telefone */}
          <article className="rounded-2xl bg-[var(--color-whitecustom)] shadow-[0_8px_28px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6">
            <div className="flex-1 items-center gap-3">
              <span className="inline-grid size-18 place-items-center rounded-full bg-[var(--color-whitecustom)] text-[var(--color-prime)]">
                <img src={phone} alt="" />
              </span>
              <h3 className="text-xl mt- font-semibold text-[var(--color-dark)] mt-4">Telefone</h3>
            </div>

            <p className="mt-1 text-sm text-slate-600">
              Ligue caso necessite de uma resposta imediata.
            </p>

            <a
              href="tel:+351261982465"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-prime)] hover:text-emerald-700 cursor-pointer"
            >
              (+351) 261 982 465
              <span className="inline-grid place-items-center rounded-ful text-[var(--color-whitecustom)] w-5 h-5">
                {/* right arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#009b3e"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </article>

          {/* Card: Localização */}
          <article className="rounded-2xl bg-[var(--color-whitecustom)] shadow-[0_8px_28px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6">
            <div className="flex-1 items-center gap-3">
              <span className="inline-grid size-18 place-items-center rounded-full bg-[var(--color-whitecustom)] text-[var(--color-prime)]">
                <img src={map} alt="" />
              </span>
              <h3 className="text-xl font-semibold text-[var(--color-dark)] mt-4">
                Localização
              </h3>
            </div>

            <p className="mt-1 text-sm text-slate-600">
              Estamos disponíveis para o receber nas nossas instalações.
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[var(--color-prime)] hover:text-emerald-700 cursor-pointer"
            >
              Obter direções
              <span className="inline-grid place-items-center rounded-ful text-[var(--color-dark)] w-5 h-5">
                {/* right arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#009b3e"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </article>
        </div>
      </div>

      <DepartmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
