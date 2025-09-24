import React, { useRef } from "react";
import Slider from "react-slick";
import slider1 from "../../assets/Empresa/slider1.png";
import slider2 from "../../assets/Empresa/slider2.png";
import slider3 from "../../assets/Empresa/slider3.png";
import slider4 from "../../assets/Empresa/slider4.png";


export default function InfraestruturasSlider() {
  const sliderRef = useRef(null);

  const slides = [
    {
      tag: "Infraestruturas",
      title: "Porta de embarque",
      desc: "Atualmente com 24 cais de cargas e descargas, as mesmas permitem uma constante operacionalização e dinâmica de recolha e envio de produtos 24h/dia.",
      images: {
        left: slider2,
        main: slider1,
        right: slider4,
      },
    },
    {
      tag: "Infraestruturas",
      title: "Armazenamento",
      desc: "Capacidade para mais de 2000 toneladas de armazenamento em um espaço de quase 5000 m2. Isso garante uma gestão de produtos com qualidade e frescura.",
      images: {
        left: slider1,
        main: slider4,
        right: slider3,
      },
    },
    {
      tag: "Infraestruturas",
      title: "CÂMARAS REFRIGERADAS",
      desc: "Contamos com uma capacidade de armazenamento refrigerado até 10.000 toneladas de produtos, mantidos em atmosfera controlada, garantindo a frescura e qualidade dos produtos.",
      images: {
        left: slider4,
        main: slider3,
        right: slider2,
      },
    },
    {
      tag: "Infraestruturas",
      title: "CENTRO DE OPERAÇÕEs",
      desc: "A zona de embalamento tem uma capacidade para 300 funcionários, que preparam 600 toneladas/dia. Com 14 linhas de embalamento de alta tecnologia para diversas frutas e legumes, incluindo máquinas de flowpack, retrátil e sacos.",
      images: {
        left: slider3,
        main: slider2,
        right: slider1,
      },
    },
  ];

  const settings = {
    dots: false, // default: OFF (tablet/desktop)
    dotsClass: "slick-dots mobile-dots",
    arrows: false,
    infinite: true,
    fade: true,
    speed: 600,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 640, // < 640px
        settings: { dots: true },
      },
    ],
  };

  const prev = () => sliderRef.current?.slickPrev();
  const next = () => sliderRef.current?.slickNext();

  return (
    <section className="bg-[#F3F6F7] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((s, idx) => (
            <div key={idx}>
              {/* 1-col on mobile/tablet (text above, image below); 12-col on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Text */}
                <div className="lg:col-span-5">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-prime)] text-white px-5 py-2 text-sm font-semibold shadow-sm">
                    {s.tag}
                  </span>

                  <h2 className="mt-6 whitespace-pre-line text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
                    {s.title}
                  </h2>

                  <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Image area */}
                <div className="lg:col-span-7">
                  <div className="relative h-[40vh] sm:h-[340px] lg:h-[460px]">
                    {/* LEFT thumbnail (Prev) — hidden on mobile */}
                    <button
                      type="button"
                      onClick={prev}
                      className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                      aria-label="Slide anterior"
                    >
                      <img  
                        src={s.images.left}
                        alt=""
                        className="h-[70%] w-28 sm:w-60 lg:w-68 object-cover rounded-[26px] hover:brightness-105 transition"
                        loading="lazy"
                      />
                    </button>

                    {/* MAIN image (fills container) */}
                    <div className="absolute lg:left-24 lg:right-24 sm:left-60 sm:right-60 z-10">
                      <img
                        src={s.images.main}
                        alt=""
                        className="h-auto sm:h-full lg:h-full w-full object-cover rounded-[32px]"
                        loading="eager"
                      />
                    </div>

                    {/* RIGHT thumbnail (Next) — hidden on mobile */}
                    <button
                      type="button"
                      onClick={next}
                      className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 focus:outline-none cursor-pointer"
                      aria-label="Próximo slide"
                    >
                      <img
                        src={s.images.right}
                        alt=""
                        className="h-[70%] w-28 sm:w-60 lg:w-68 object-cover rounded-[26px] hover:brightness-105 transition"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
