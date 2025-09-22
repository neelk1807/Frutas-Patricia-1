import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const leftPages = [
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Produção", href: "/production" },
  { label: "Distribuição", href: "/distribution" },
  { label: "Contactos", href: "/contact" },
];

const rightPages = [
  { label: "Recrutamento", href: "/job" },
  { label: "Leilão", href: "/auction" },
  { label: "Apoios", href: "/support" },
  { label: "Código de ética e conduta", href: "/code-of-ethics" },
];

function Social({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-prime)] text-[var(--color-whitecustom)] transition hover:bg-[#27a95b]"
    >
      <span className="text-lg">{children}</span>
    </a>
  );
}

function Contact({ icon, text, href }) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[var(--color-prime)]">{icon}</span>
      <span className="leading-6 break-words break-all whitespace-normal">
        {text}
      </span>
    </div>
  );
  return (
    <li className="max-w-full">
      {href ? (
        <a
          href={href}
          className="hover:text-emerald-700 break-words break-all whitespace-normal"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--color-whitecustom)]">
      {/* main grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid sm:grid-cols-2 gap-10 md:gap-10 md:grid-cols-12 items-top">
          {/* Brand + description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Patrícia Pilar"
                className="h-25 w-25 object-contain"
              />
            </div>
            <p className="mt-5 max-w-xs text-[var(--color-gray2)]">
              Empresa de importação e exportação em A-do-Cunhados e na Maceira
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <Social href="#" label="Facebook">
                <FaFacebookF />
              </Social>
              <Social href="#" label="Instagram">
                <FaInstagram />
              </Social>
              <Social href="#" label="LinkedIn">
                <FaLinkedinIn />
              </Social>
              <Social href="#" label="YouTube">
                <FaYoutube />
              </Social>
            </div>
          </div>

          {/* Pages column 1 */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[var(--color-prime)]">
              Páginas
            </h3>
            <ul className="mt-5 space-y-3 text-[var(--color-gray2)]">
              {leftPages.map((i) => (
                <li key={i.label}>
                  <a className="hover:text-emerald-700" href={i.href}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages column 2 */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[var(--color-prime)]">
              Páginas
            </h3>
            <ul className="mt-5 space-y-3 text-[var(--color-gray2)]">
              {rightPages.map((i) => (
                <li key={i.label}>
                  <a className="hover:text-emerald-700" href={i.href}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-semibold text-[var(--color-prime)]">
              Contactos
            </h3>
            <ul className="mt-5 space-y-4 text-[var(--color-gray2)]">
              <Contact
                icon={<FiMapPin />}
                text={
                  <>
                    Rua Poço de Arroz Nº2, Casal da
                    <br />
                    Lapa 2560-030 A-dos-Cunhados
                  </>
                }
              />
              <Contact
                icon={<FiMail />}
                text="geral@patriciapilar.pt"
                href="mailto:geral@patriciapilar.pt"
              />
              <Contact
                icon={<FiPhone />}
                text="(+351) 261 982 465"
                href="tel:+351261982465"
              />
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[var(--color-graycustom)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm font-medium text-[#92A7B0] md:flex-row">
          <p>©2025 DEVTECH.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            <li>
              <a className="hover:text-[#009B3E]" href="/code-of-ethics">
                Código de ética e conduta
              </a>
            </li>
            <li>
              <a className="hover:text-[#009B3E]" href="support">
                Apoios
              </a>
            </li>
            <li>
              <a className="hover:text-[#009B3E]" href="privacy-policy">
                Política de privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
