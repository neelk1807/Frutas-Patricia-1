import React, { useState } from "react";
import arrow from "../../assets/Home/rightarrow.svg"

export default function AuctionContactSimple() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // eslint-disable-next-line no-unused-vars
    const data = Object.fromEntries(new FormData(form).entries());
    // TODO: send `data` to your API/email service here

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[var(--color-whitecustom)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold text-[var(--color-dark)]">
            Envie-nos uma mensagem.
          </h2> 
          <p className="mt-3 text-[var(--color-gray2)]">
            Contacte-nos através do formulário. 
            <br className="hidden sm:block" />
           A sua mensagem será respondida com a maior brevidade.
          </p>
          <div className="mt-6 h-px bg-slate-200" />
        </header>

        {sent && (
          <div className="mt-6 rounded-lg bg-[var(--color-whitecustom)] px-4 py-3 text-emerald-800">
            Obrigado! A sua mensagem foi enviada com sucesso.
          </div>
        )}

        <form
          noValidate
          onSubmit={onSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* Name */}
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
              </svg>
            </span>
            <input
              name="name"
              type="text"
              required
              minLength={2}
              placeholder="Nome"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 px-3 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Email */}
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z" />
              </svg>
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-3 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Contact */}
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.69.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.69 1 1 0 0 1-.25 1.01l-2.22 2.09Z" />
              </svg>
            </span>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Contacto"
              pattern="[0-9 +()\-]{9,}"
              title="Introduza um contacto válido"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 px-3 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Subject */}
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
              </svg>
            </span>
            <input
              name="subject"
              type="text"
              required
              placeholder="Assunto"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 px-3 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 relative w-full">
            <span className="absolute left-3 top-1/7 -translate-y-1/2 text-slate-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
              </svg>
            </span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Como podemos ajudar?"
              className="w-full pl-10 rounded-lg border border-slate-300 bg-white p-3 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Privacidade + enviar */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                name="privacy"
                required
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 placeholder:text-[#92A7B0]"
              />
              <span>
                Aceitar{" "}
                <a
                  href="/privacy-policy"
                  className="text-[var(--color-prime)] font-medium hover:underline"
                >
                  Política de Privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="mx-auto sm:mx-0 ml-auto inline-flex items-center gap-4 rounded-full bg-[var(--color-prime)] px-6 py-2.5 font-semibold text-white shadow-sm ring-1 ring-emerald-700/20 hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            >
              Enviar
              <div className="arrow bg-[#27a95b] rounded-full p-1">
                <img src={arrow} alt="" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
