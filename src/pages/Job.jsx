import React, { useState, useMemo } from "react";


const UserIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M5 20c1.6-3 4.2-4.5 7-4.5s5.4 1.5 7 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);
const MailIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2a1 1 0 011.1-.22c1.2.5 2.5.77 3.8.77a1 1 0 011 1V20a1 1 0 01-1 1C9.95 21 3 14.05 3 5a1 1 0 011-1h3.05a1 1 0 011 1c0 1.3.26 2.6.77 3.8a1 1 0 01-.22 1.1l-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);
const UploadIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 16V6m0 0l-4 4m4-4l4 4"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <rect
      x="4"
      y="16"
      width="16"
      height="4"
      rx="1.2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>
);
const ArrowRight = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

function Field({
  id,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  inputProps = {},
}) {
  return (
    <div>
      <div
        className={`flex items-center gap-3 rounded-sm border bg-white px-4 py-3.5 
        ${
          error ? "border-rose-400" : "border-slate-300 hover:border-slate-400"
        } 
        focus-within:ring-2 focus-within:ring-emerald-500`}
      >
        <span className="text-slate-500">{icon}</span>
        <input
          id={id}
          type={type}
          className="w-full bg-transparent outline-none placeholder:text-slate-400"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-rose-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function JobPage() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [accept, setAccept] = useState(false);
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  /* ---------- validation ---------- */
  const errors = useMemo(() => {
    const e = {};
    if (!name.trim()) e.name = "Insira o seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) e.mail = "Email inválido.";
    if (!/^\+?[0-9\s()-]{6,}$/.test(phone)) e.phone = "Contacto inválido.";
    if (!accept) e.accept = "Tem de aceitar a Política de Privacidade.";
    if (file) {
      const okType = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
      if (!okType) e.file = "Apenas PDF, DOC ou DOCX.";
      if (file.size > 5 * 1024 * 1024) e.file = "Máximo 5MB.";
    }
    return e;
  }, [name, mail, phone, accept, file]);

  const canSubmit = Object.keys(errors).length === 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!canSubmit) return;

    try {
      setSending(true);

      // build payload for your backend
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", mail);
      formData.append("phone", phone);
      if (file) formData.append("cv", file);


      // demo only:
      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
      setName("");
      setMail("");
      setPhone("");
      setFile(null);
      setAccept(false);
      setTouched(false);
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="bg-[var(--color-whitecustom)] py-12 sm:py-16 lg:py-30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-10">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900">
            Preencha o formulário
          </h1>
          <p className="mt-5 text-slate-700 text-base sm:text-lg">
            Contacte-nos se tiver qualquer dúvida sobre a nossa empresa. <br />
            Iremos responder-lhe o mais brevemente possível.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          noValidate
        >
          <Field
            id="name"
            icon={<UserIcon />}
            placeholder="Nome"
            value={name}
            onChange={setName}
            error={touched ? errors.name : ""}
          />
          <Field
            id="email"
            type="email"
            icon={<MailIcon />}
            placeholder="Email"
            value={mail}
            onChange={setMail}
            error={touched ? errors.mail : ""}
          />
          <Field
            id="phone"
            icon={<PhoneIcon />}
            placeholder="Contacto"
            value={phone}
            onChange={setPhone}
            error={touched ? errors.phone : ""}
          />

          {/* File upload */}
          <div>
            <label
              htmlFor="cv"
              className={`flex items-center gap-3 rounded-sm border bg-white px-4 py-3.5 cursor-pointer
                ${
                  touched && errors.file
                    ? "border-rose-400"
                    : "border-slate-300 hover:border-slate-400"
                } 
                focus-within:ring-2 focus-within:ring-emerald-500`}
            >
              <span className="text-slate-500">
                <UploadIcon />
              </span>
              <span className="text-slate-400">
                {file ? file.name : "Carrega aqui o teu cv"}
              </span>
              <input
                id="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
            {touched && errors.file && (
              <p className="mt-1.5 text-sm text-rose-600">{errors.file}</p>
            )}
          </div>

          {/* Privacy + Submit (full row) */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-1">
            <label className="inline-flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
                className="h-5 w-5 rounded border-slate-300 text-[var(--color-prime)] focus:ring-emerald-500"
              />
              <span className="text-slate-700">
                Aceitar{" "}
                <a
                  className="text-[var(--color-prime)] font-semibold hover:underline"
                  href="/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Privacidade
                </a>
              </span>
            </label>

            {/* error for privacy on small screens */}
            {touched && errors.accept && (
              <p className="text-sm text-rose-600 sm:order-3">
                {errors.accept}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || sending}
              className={`sm:ml-auto inline-flex items-center justify-between gap-3 rounded-full px-6 py-3 font-semibold text-white
                ring-1 ring-emerald-700/20 transition
                ${
                  canSubmit && !sending
                    ? "bg-[var(--color-prime)] hover:bg-emerald-700"
                    : "bg-[var(--color-prime)] cursor-not-allowed"
                }`}
            >
              {sending ? "A enviar..." : "Enviar"}
              <span className="grid place-items-center h-7 w-7 rounded-full bg-emerald-700">
                <ArrowRight />
              </span>
            </button>
          </div>
        </form>

        {/* success notice */}
        {sent && (
          <div className="mt-6 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800">
            Obrigado! Recebemos a sua candidatura.
          </div>
        )}
      </div>
    </main>
  );
}
