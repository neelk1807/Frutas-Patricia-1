import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Produção", href: "/production" },
  { label: "Marcas", href: "/brands" },
  { label: "Distribuição", href: "/distribution" },
  { label: "Leilão", href: "/auction" },
  { label: "Contactos", href: "/contact" },
];

const languages = [
  { code: "en", src: "../src/assets/Flag/uk.png", label: "English" },
  { code: "es", src: "../src/assets/Flag/es.png", label: "Español" },
  { code: "pt", src: "../src/assets/Flag/pt.png", label: "Português" },
];

export default function Header() {
  const [activeLang, setActiveLang] = useState("pt");
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[60] w-full">
      {/* Top bar */}
      <div className="bg-[var(--color-prime)] text-[var(--color-whitecustom)] text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex gap-6">
            <span>
              Email:{" "}
              <a
                href="mailto:geral@patriciapilar.pt"
                className="underline-offset-2 hover:underline"
              >
                geral@patriciapilar.pt
              </a>
            </span>
            <a href="#recrutamento" className="hover:opacity-80">
              Recrutamento
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-right">
            <span className="sm:inline">Segue-nos nas redes sociais</span>
            <a href="#" className="hover:opacity-80">
              <img src="../src/assets/Comman/facebook-fill.svg" alt="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="../src/assets/Comman/instagram-fill.svg" alt="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src="../src/assets/Comman/youtube-fill.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav area */}
      <div className="relative bg-[var(--color-whitecustom)] shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:py-6">
          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Left nav (desktop) */}
          <ul className="hidden lg:flex flex-1 justify-start gap-[64px] font-medium">
            {navItems.slice(0, 4).map((item) =>
              item.href.startsWith("#") ? (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[var(--color-gray2)] hover:text-[var(--color-prime)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end // exact match for the route
                    className={({ isActive }) =>
                      `transition-colors hover:text-[var(--color-prime)] ${
                        isActive
                          ? "text-[var(--color-prime)]"
                          : "text-[var(--color-gray2)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* Logo (center) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1">
            <div className="rounded-full bg-[var(--color-whitecustom)] p-2 shadow-lg">
              <a rel="stylesheet" href="/">
                <img
                  src="/logo.png"
                  alt="Patrícia Pilar"
                  className="h-26 w-26.5 rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Right nav (desktop) */}
          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex gap-[64px] font-medium">
              {navItems.slice(4).map((item) =>
                item.href.startsWith("#") ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[var(--color-gray2)] hover:text-[var(--color-prime)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) =>
                        `transition-colors hover:text-[var(--color-prime)] ${
                          isActive
                            ? "text-[var(--color-prime)]"
                            : "text-[var(--color-gray2)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            {/* Lang dropdown (both desktop + mobile) */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((prev) => !prev)}
                className="h-9 w-9 rounded-full overflow-hidden border-2 border-transparent hover:border-emerald-600 cursor-pointer"
              >
                <img
                  src={languages.find((l) => l.code === activeLang)?.src}
                  alt="active lang"
                  className="h-full w-full object-cover rounded-full"
                />
              </button>
              {langOpen && (
                <div className="absolute right-0 -left-3 mt-2 w-max rounded-full bg-[var(--color-whitecustom)] shadow-lg ring-1 ring-black/10 z-50 ">
                  <div className="flex flex-col p-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setActiveLang(lang.code);
                          setLangOpen(false);
                        }}
                        className={`h-8 w-8 rounded-full overflow-hidden border-2 transition cursor-pointer ${
                          activeLang === lang.code
                            ? "border-emerald-600"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={lang.src}
                          alt={lang.label}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[55] bg-black/40 transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <nav
        className={`fixed left-0 top-0 z-[60] h-full w-72 max-w-[80vw] bg-white transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-semibold text-gray-800">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="h-9 w-9 flex items-center justify-center rounded-md"
          >
            <img src="../src/assets/Home/cross.svg" alt="" />
          </button>
        </div>
        <ul className="px-4 py-4 space-y-2 text-[var(--color-gray2)]">
          {navItems.map((it) => (
            <li key={it.href}>
              {it.href.startsWith("#") ? (
                // anchor link
                <a
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 transition-colors ${
                    it.href === window.location.hash
                      ? "text-emerald-600"
                      : "hover:bg-emerald-50 hover:text-emerald-600"
                  }`}
                >
                  {it.label}
                </a>
              ) : (
                // route link
                <NavLink
                  to={it.href}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 transition-colors ${
                      isActive
                        ? " text-emerald-600"
                        : "hover:bg-emerald-50 hover:text-emerald-600"
                    }`
                  }
                >
                  {it.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
