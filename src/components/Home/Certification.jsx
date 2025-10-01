import React from "react";
import imagetomato from "../../assets/Home/tomatotree.jpg";
import badgetomato from "../../assets/Home/portugal.png";
import arrow from "../../assets/Home/rightarrow.svg"
import { useNavigate } from "react-router-dom";



export default function CertificationHero({
  imageSrc = imagetomato,
  badgeSrc = badgetomato,
  titleHighlight = "Qualidade:",
  title = "as nossas\ncertificações",
  description = "O nosso Departamento de Qualidade da trabalha continuamente de forma a implementar diversas normas, que visam assegurar e garantir a segurança alimentar do consumidor final.",
  ctaText = "Ver mais",
}) {const navigate = useNavigate();

const onCtaClick = () => {
  navigate("/production#certifications");

  setTimeout(() => {
    const section = document.getElementById("certifications");
    if (section) {
      const yOffset = -200;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 100);
};

  return (
    <section className="w-full bg-[var(--color-whitecustom)]">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-0 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-30 items-center">
          {/* Left: Image with badge */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-e-2xl shadow-md">
              <img
                src={imageSrc}
                alt="Fresh tomatoes on the vine"
                className="h-[300px] sm:h-[520px] lg:h-[700px] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* Circular badge */}
            <div
              className="absolute -bottom-10 right-6 sm:-right-15 sm:bottom-15 lg:-right-15 lg:bottom-20 hidden sm:hidden md:block md:right-0 md:-bottom-15 lg:block"
            >
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 rounded-full bg-[var(--color-whitecustom)] shadow-[10px_13px_30px_0_rgba(4,58,83,0.24)] grid place-items-center">
                <div className="absolute inset-0 rounded-full ring-1 ring-black/5" />
                <img
                  src={badgeSrc}
                  alt="Portugal Sou Eu"
                  className="h-auto w-20 sm:h-30 sm:w-30 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right: Copy & CTA */}
          <div className="order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="text-[var(--color-prime)]">
                {titleHighlight}
              </span>
              <br />
              <span className="text-[var(--color-dark)] whitespace-pre-line">
                {title}
              </span>
            </h1>

            <p className="mt-6 text-[var(--color-gray2)] text-base sm:text-lg leading-relaxed max-w-lg">
              {description}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-5 rounded-full px-6 py-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-emerald-700/20 bg-[var(--color-prime)] text-[var(--color-whitecustom)] hover:bg-[#27a95b] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                {ctaText}
                <div className="arrow bg-[#27a95b] rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
