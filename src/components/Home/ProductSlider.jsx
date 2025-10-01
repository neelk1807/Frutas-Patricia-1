import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import productslider1 from "../../assets/Home/productslider1.png";
import productslider2 from "../../assets/Home/productslider2.png";
import productslider3 from "../../assets/Home/productslider3.png";
import productslider5 from "../../assets/Home/productslider5.png";
import productslider6 from "../../assets/Home/productslider6.png";
import productslider7 from "../../assets/Home/productslider7.png";
import productslider8 from "../../assets/Home/productslider8.png";
import productslider9 from "../../assets/Home/productslider9.png";
import productslider10 from "../../assets/Home/productslider10.png";

const products = [
  { id: 1, title: "Pera Rocha", blurb: "Armazenamento em atmosfera controlada ou em frio normal.", image: productslider10 },
  { id: 2, title: "Maçã Reineta", blurb: "Armazenamento em atmosfera controlada ou em frio normal.", image: productslider9 },
  { id: 3, title: "Maçã Royal Gala", blurb: "Armazenamento em atmosfera controlada ou em frio normal.", image: productslider8 },
  { id: 4, title: "Maçã Fuji", blurb: "Textura suave e sabor equilibrado, ótima para sobremesas.", image: productslider7 },
  { id: 5, title: "Courgete", blurb: "Armazenamento em temperatura entre os 5 e os 10ºC e uma humidade relativa de 95%.", image: productslider5},
  { id: 6, title: "Feijão Verde", blurb: "A pré-refrigeração é feita após a colheita, de forma a não comprometer o tempo de con...", image: productslider6 },
  { id: 7, title: "Batata Doce", blurb: "As batatas doces são armazenadas num local fresco, mas não escuro e húmido e fr...", image: productslider3 },
  { id: 8, title: "Feijão Verde", blurb: "A pré-refrigeração é feita após a colheita, de forma a não comprometer o tempo de con...", image: productslider6 },
  { id: 9, title: "Abóbora Butternut", blurb: "É feito num local seco, arejado, com temperatura entre 10º a 14ºC e humidade ...", image: productslider1 },
  { id: 10, title: "Abóbora Comprida", blurb: "É feito num local seco, arejado, com temperatura entre 10º a 14ºC e humidade ...", image: productslider2 },
  { id: 11, title: "Abóbora Musquée", blurb: "É feito num local seco, arejado, com temperatura entre 10º a 14ºC e humidade ...", image: productslider3 },
  { id: 12, title: "Abóbora Comprida", blurb: "Armazenamento em atmosfera controlada ou em frio normal.", image: productslider10 },
];

export default function OutrosProdutosSlider() {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const updateSlides = () => {
    const w = window.innerWidth;
    if (w >= 1280) setSlidesToShow(2);
    else if (w >= 1024) setSlidesToShow(2);
    else setSlidesToShow(1);
  };

  useEffect(() => {
    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    customPaging: () => <button className="dot" />,
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="custom-dots-row">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="w-full bg-[var(--color-graycustom)] py-12 sm:py-16 lg:py-25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl lg:text-[60px] font-bold text-[var(--color-dark)]">Outros produtos</h2>
          <button onClick={() => window.location.href = "/produtos"} className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)] hover:opacity-80">
            Ver todos <span aria-hidden><img src="../src/assets/Home/greenarrow.svg" alt="" /></span>
          </button>
        </div>

        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id} className="px-3 py-5">
              <article className="grid lg:grid-cols-2 items-center justify-between gap-3 rounded-2xl bg-[var(--color-whitecustom)] px-7 py-12">
                <div className="max-w-full sm:max-w-xl lg:max-w-lg order-2 lg:order-1">
                  <h3 className="text-lg sm:text-3xl font-extrabold text-[#111827]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-dark)] leading-relaxed">{p.blurb}</p>
                  <button className="mt-4 inline-flex items-center rounded-full bg-[var(--color-prime)] cursor-pointer px-4 py-1.5 text-lg font-semibold text-[var(--color-whitecustom)] hover:bg-[var(--color-prime)]">
                    ver mais
                  </button>
                </div>
                <div className="shrink-0 mt-5 order-1 lg:order-2">
                  <img src={p.image} alt={p.title} className="h-24 w-auto sm:h-28 lg:h-30 object-cover" />
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
