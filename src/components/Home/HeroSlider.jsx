"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/Home/Banner1.png";
import banner2 from "../../assets/Home/Banner2.png";
import banner3 from "../../assets/Home/Banner3.png";
import banner4 from "../../assets/Home/Banner4.png";
import banner5 from "../../assets/Home/Banner5.png";



// Make sure these two CSS files are imported globally (e.g., _app.js or index.js):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: banner1,
      title: <>Há <span className="text-[var(--color-prime)]">30 anos</span> a levar o melhor da terra até si!</>,
      description:
        "Produtos de qualidade superior, escolhidos e aprovados por consumidores que valorizam o melhor da produção nacional.A sua confiança é o nosso maior orgulho.",
    },
    {
      id: 2,
      image: banner2,
      title: <>O melhor da nossa <span className="text-[var(--color-prime)]">produção própria nacional.</span></>,
      description:
        "Com produção própria e enraizados na agricultura portuguesa, garantimos produtos frescos e autênticos. Cada colheita reflete o compromisso do Grupo Patrícia Pilar com a excelência e a tradição nacional.",
    },
     {
      id: 3,
      image: banner3,
      title: <>Compromisso com a <span className="text-[var(--color-prime)]">qualidade</span>.</>,
      description:
        "Com instalações de última geração e uma logística eficiente, asseguramos que cada produto chega até si com a máxima frescura e qualidade.",
    },
     {
      id: 4,
      image: banner4,
      title: <>Compromisso com a <span className="text-[var(--color-prime)]">qualidade</span>.</>,
      description:
        "Com instalações de última geração e uma logística eficiente, asseguramos que cada produto chega até si com a máxima frescura e qualidade.",
    },
     {
      id: 5,
      image: banner5,
      title: <>Compromisso com a <span className="text-[var(--color-prime)]">qualidade</span>.</>,
      description:
        "Com instalações de última geração e uma logística eficiente, asseguramos que cada produto chega até si com a máxima frescura e qualidade.",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,         
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  return (
    <section className="relative w-full">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[87vh] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* content block (text + buttons INSIDE) */}
              <div className="relative z-10 max-w-full lg:max-w-4xl px-8 mr-0 lg:mr-30 sm:mr-0 ml-auto text-center lg:text-right flex flex-col justify-center h-full pb-10">
                <h2 className="italic text-[var(--color-whitecustom)] text-2xl sm:text-3xl lg:text-[52px] font-bold leading-snug max-w-full lg:max-w-4xl">
                  {slide.title}
                </h2>
                <p className="mt-4 text-[var(--color-whitecustom)] text-sm sm:text-base lg:text-xl leading-relaxed">
                  {slide.description}
                </p>

                {/* inside-nav */}
                <div className="mt-6 flex items-center justify-center lg:justify-end gap-6">
                  <button onClick={goPrev} className="text-[var(--color-whitecustom)] hover:text-[var(--color-prime)] text-base flex items-center gap-1 cursor-pointer">
                    <span className="-mt-px"><img src="../src/assets/Home/leftarrowslide.svg" alt="" /></span> Anterior
                  </button>
                  <span className="text-white/50"><img src="../src/assets/Home/divider.svg" alt="" /></span>
                  <button onClick={goNext} className="text-[var(--color-whitecustom)] hover:text-[var(--color-prime)] text-base flex items-center gap-1 cursor-pointer">
                    Próximo <span className="-mt-px"><img src="../src/assets/Home/rightarrowslide.svg" alt="" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
