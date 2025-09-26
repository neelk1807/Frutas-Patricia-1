"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import banner1 from "../../assets/Home/Banner1.png";
import banner2 from "../../assets/Home/Banner2.png";
import banner3 from "../../assets/Home/Banner3.png";
import banner4 from "../../assets/Home/Banner4.png";
import banner5 from "../../assets/Home/Banner5.png";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const slides = [banner1, banner2, banner3, banner4, banner5];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 4000, 
    cssEase: "ease",    
  };

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[87vh]">
      {/* Background slider */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((image, idx) => (
          <div key={idx}>
            <div
              className="w-full h-[400px] sm:h-[500px] lg:h-[87vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>

      {/* Static content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end px-6 lg:px-20 text-center lg:text-right z-10">
        <h2 className="italic text-[var(--color-whitecustom)] text-2xl sm:text-3xl lg:text-[52px] font-bold leading-snug max-w-4xl">
          Há <span className="text-[var(--color-prime)]">30 anos</span> a levar o melhor da terra até si!
        </h2>
        <p className="mt-4 text-[var(--color-whitecustom)] text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl">
          Produtos de qualidade superior, escolhidos e aprovados por consumidores que valorizam o melhor da produção nacional. A sua confiança é o nosso maior orgulho.
        </p>
      </div>
    </section>
  );
}
