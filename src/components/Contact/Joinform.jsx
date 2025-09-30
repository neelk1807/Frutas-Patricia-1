import React, { useState } from "react";
import arrow from "../../assets/Home/rightarrow.svg"

export default function JoinTeam() {
  const [sent, setSent] = useState(false);
  const [cvName, setCvName] = useState("");

  // Max file size: 8 MB
  const MAX_FILE_MB = 8;
  const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024;
  const ACCEPTED = [
    "application/pdf",
    "text/plain",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const handleFile = (fileInput) => {
    const file = fileInput.files?.[0];
    if (!file) {
      setCvName("");
      fileInput.setCustomValidity("");
      return;
    }

    if (!ACCEPTED.includes(file.type)) {
      fileInput.setCustomValidity(
        "Formato inválido. Use PDF, TXT, DOC ou DOCX."
      );
      setCvName("");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      fileInput.setCustomValidity(
        `O ficheiro é demasiado grande (máx. ${MAX_FILE_MB} MB).`
      );
      setCvName("");
      return;
    }

    fileInput.setCustomValidity("");
    setCvName(file.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Dispara a validação nativa do browser
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // eslint-disable-next-line no-unused-vars
    const data = Object.fromEntries(new FormData(form).entries());
    // TODO: enviar `data` e o ficheiro para o seu backend
    // fetch('/api/jobs', { method: 'POST', body: new FormData(form) })

    setSent(true);
    form.reset();
    setCvName("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[#F2F5F6] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold text-slate-900">
            Junte-se à nossa equipa!
          </h2>
          <p className="mt-3 text-slate-600">
            Estamos sempre à procura de talentos excecionais para se juntarem à
            nossa equipa e contribuírem para o nosso sucesso contínuo.
          </p>
        </header>

        {sent && (
          <div className="mt-6 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800">
            Obrigado! A sua candidatura foi enviada com sucesso.
          </div>
        )}

        <form
          noValidate
          onSubmit={onSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {/* Nome */}
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400"
              aria-hidden="true"
            >
              {/* user */}
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
              className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 pl-10 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400"
              aria-hidden="true"
            >
              {/* mail */}
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
              className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 pl-10 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Contacto */}
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400"
              aria-hidden="true"
            >
              {/* phone */}
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
              className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 pl-10 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Cargo/Departamento */}
          <div className="relative">
            <span
              className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400"
              aria-hidden="true"
            >
              {/* briefcase */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 6V5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1h4a2 2 0 0 1 2 2v4H2V8a2 2 0 0 1 2-2h5Zm2-1a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v1h-2V5Zm-9 9h20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6Zm9 2v2h2v-2h-2Z" />
              </svg>
            </span>
            <input
              name="role"
              type="text"
              required
              placeholder="Cargo/Departamento"
              className="w-full rounded-lg border border-slate-300 bg-white py-3 px-3 pl-10 text-[15px] outline-none focus:border-emerald-600 placeholder:text-[#92A7B0]"
            />
          </div>

          {/* Upload CV */}
          <div className="md:col-span-2">
            <div className="grid sm:items-center gap-3">
              <label className="inline-flex justify-center sm:justify-start">
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.txt,.doc,.docx"
                  required
                  onChange={(e) => handleFile(e.currentTarget)}
                  className="peer sr-only"
                />
                <span className="inline-flex  items-center gap-2 rounded-full bg-[var(--color-prime)] px-4 py-2 font-semibold text-white shadow-sm ring-1 ring-emerald-700/20 hover:bg-[#27a95b] cursor-pointer">
                  <div className="arrow bg-[#27a95b] rounded-full p-1 -rotate-90">
                    <img src={arrow} alt="" />
                  </div>
                  Carregue o seu CV.
                </span>
              </label>

              <span className="text-sm text-slate-500">
                {cvName ? (
                  <strong className="text-slate-700">{cvName}</strong>
                ) : (
                  <>Formatos suportados: PDF, TXT, WORD DOC</>
                )}
              </span>
            </div>
          </div>

          {/* Privacidade + Enviar */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                name="privacy"
                required
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
              />
              <span>
                Aceitar{" "}
                <a
                  href="/privacy-policy"
                  className="text-emerald-700 font-medium hover:underline"
                >
                  Política de Privacidade
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="mx-auto sm:mx-0 ml-auto inline-flex items-center gap-2 rounded-full bg-[var(--color-prime)] cursor-pointer px-6 py-2.5 font-semibold text-white shadow-sm ring-1 ring-emerald-700/20 hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Enviar Candidatura
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
