import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
// 🖼 Brand logos
import brand1 from "../../assets/Comman/brand1.png";
import brand2 from "../../assets/Comman/brand2.png";
import brand3 from "../../assets/Comman/brand3.png";
import brand4 from "../../assets/Comman/brand4.png";
import brand5 from "../../assets/Comman/brand5.png";
import brand6 from "../../assets/Comman/brand6.png";
import brand7 from "../../assets/Comman/brand7.png";
import brand8 from "../../assets/Comman/brand8.png";
import brand9 from "../../assets/Comman/brand9.png";
import brand10 from "../../assets/Comman/brand10.png";
import brand11 from "../../assets/Comman/brand11.png";
import brand12 from "../../assets/Comman/brand12.png";
import brand13 from "../../assets/Comman/brand13.png";
import brand14 from "../../assets/Comman/brand14.png";
import brand15 from "../../assets/Comman/brand15.png";
import brand16 from "../../assets/Comman/brand16.png";
import brand17 from "../../assets/Comman/brand17.png";
import brand18 from "../../assets/Comman/brand18.png";
import brand19 from "../../assets/Comman/brand19.png";
import brand20 from "../../assets/Comman/brand20.png";
import brand21 from "../../assets/Comman/brand21.png";


const DEFAULT_LOGOS = [
  { src: brand1, alt: "Demo Douro" },
  { src: brand2, alt: "Hortoriba" },
  { src: brand3, alt: "Vitam Pavel" },
  { src: brand4, alt: "QLT" },
  { src: brand5, alt: "Fresh Exacta" },
  { src: brand6, alt: "PDR" },
  { src: brand7, alt: "Lloretrans" },
  { src: brand8, alt: "Medal" },
  { src: brand9, alt: "Seal" },
  { src: brand10, alt: "Seal" },
  { src: brand11, alt: "Seal" },
  { src: brand12, alt: "Seal" },
  { src: brand13, alt: "Seal" },
  { src: brand14, alt: "Seal" },
  { src: brand15, alt: "Seal" },
  { src: brand16, alt: "Seal" },
  { src: brand17, alt: "Seal" },
  { src: brand18, alt: "Seal" },
  { src: brand19, alt: "Seal" },
  { src: brand20, alt: "Seal" },
  { src: brand21, alt: "Seal" },
];

export default function BrandMarqueeSlick({
  items,
  interval = 3000,
  pauseOnHover = true,
  className = "bg-[var(--color-prime)]",
}) {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(9);

  const logos = useMemo(() => (items?.length ? items : DEFAULT_LOGOS), [items]);

  // Dynamically adjust slidesToShow based on window width
  const updateSlides = () => {
    const w = window.innerWidth;
    if (w >= 1280) setSlidesToShow(9);
    else if (w >= 1024) setSlidesToShow(7);
    else if (w >= 768) setSlidesToShow(5);
    else if (w >= 640) setSlidesToShow(4);
    else setSlidesToShow(4);
  };

  useEffect(() => {
    updateSlides(); // initial set
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Autoplay interval
  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) sliderRef.current?.slickNext();
    }, interval);
    return () => clearInterval(id);
  }, [interval, paused]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: logos.length > slidesToShow,
    speed: 450,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    autoplay: false,
    cssEase: "linear",
  };

  return (
    <section
      className={`${className} py-3 sm:py-4`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div className="mx-auto w-full px-4 sm:px-6">
        <Slider ref={sliderRef} {...settings}>
          {logos.map((logo, idx) => (
            <div key={`${logo.src}-${idx}`} className="px-4">
              <img
                src={logo.src}
                alt={logo.alt || "brand"}
                className="h-20 sm:h-20 w-full py-3 object-contain mx-auto select-none items-center"
                draggable="false"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
