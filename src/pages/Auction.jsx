import React, { useMemo, useState } from "react";
import BrandMarqueeSlick from "../components/Comman/brandslider.jsx";

export default function AuctionLogin({ onLogin }) {
  const [values, setValues] = useState({ username: "", password: "" });
  const [touched, setTouched] = useState({ username: false, password: false });
  const [showPw, setShowPw] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // simple field validation
  const errors = useMemo(() => {
    const e = {};
    if (!values.username.trim()) e.username = "Obrigatório.";
    else if (values.username.trim().length < 3)
      e.username = "Mínimo 3 caracteres.";
    if (!values.password) e.password = "Obrigatório.";
    else if (values.password.length < 6) e.password = "Mínimo 6 caracteres.";
    return e;
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((s) => ({ ...s, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, password: true });
    if (Object.keys(errors).length) return;

    try {
      setSubmitting(true);
      // TODO: call your API
      await new Promise((r) => setTimeout(r, 900));
      onLogin?.(values);
      // just demo:
      alert("Login efetuado!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-auto mx-auto">
      <section className="relative min-h-[70vh] sm:min-h-[78vh] lg:min-h-[86vh] flex items-center justify-center bg-[url('../src/assets/Home/bg.jpg')] bg-cover bg-center">
        {/* optional soft overlay for readability */}
        <div className="absolute inset-0 bg-emerald-700/10" />

        <div className="relative w-full px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/95 backdrop-blur shadow-xl ring-1 ring-black/5 p-6 sm:p-8">
            <header className="mb-5">
              <h2 className="text-[22px] sm:text-[24px] font-extrabold text-slate-900">
                Área pessoal
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Entre na sua área pessoal, consulte a informação sobre os
                leilões e mantenha atualizados os seus dados.
              </p>
            </header>

            <form noValidate onSubmit={handleSubmit} className="space-y-2">
              {/* Username */}
              <div>
                <label htmlFor="username" className="sr-only">
                  Utilizador
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  inputMode="text"
                  placeholder="Utilizador"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(touched.username && errors.username)}
                  aria-describedby={
                    touched.username && errors.username ? "user-err" : undefined
                  }
                  className={[
                    "block w-full rounded-xl border px-4 py-3 text-[15px] border-[#E4E4E4] text-slate-900",
                    "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500",
                    touched.username && errors.username
                      ? "border-red-500"
                      : "border-slate-200",
                  ].join(" ")}
                />
                {touched.username && errors.username && (
                  <p id="user-err" className="mt-1 text-xs text-red-600">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div
                  className={[
                    "flex items-center rounded-xl border",
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  <input
                    id="password"
                    name="password"
                    type={showPw ? "text" : "password"}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.password && errors.password)}
                    aria-describedby={
                      touched.password && errors.password ? "pw-err" : undefined
                    }
                    className="flex-1 rounded-xl px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-700 focus:outline-none"
                    aria-label={
                      showPw ? "Ocultar password" : "Mostrar password"
                    }
                    title={showPw ? "Ocultar password" : "Mostrar password"}
                  >
                    {showPw ? (
                      /* eye-off */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-5-10-7 0-.89.473-1.969 1.287-3.056M21 21L3 3m4.35 4.35C4.463 8.092 2 10.42 2 12c0 2 4.477 7 10 7 1.292 0 2.528-.256 3.675-.717M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12"
                        />
                      </svg>
                    ) : (
                      /* eye */
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p id="pw-err" className="mt-1 text-xs text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-3 font-semibold text-[var(--color-prime)] focus:outline-none focus-visible:ring-2
                           focus-visible:ring-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "A entrar..." : "Entrar"}
                  <span className="rounded-full p-1">
                    {/* right arrow icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="branslider">
        <BrandMarqueeSlick />
      </div>
    </div>
  );
}
