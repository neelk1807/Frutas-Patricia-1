import React from "react";
import allSections from "../data/form.json";

export default function Support() {
  const section = allSections.find((s) => s.id === "support") || {
    images: [],
  };
  return (
    <div className="max-w-7xl mx-auto p-6 text-center py-30">
      <h1 className="text-5xl lg:text-[60px] font-bold text-[var(--color-prime)] mb-15">
        Apoios
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {section.images.map((img, i) => (
          <figure
            key={i}
            className={`relative overflow-hidden rounded-2xl ${
              i === 1 ? "lg:col-span-1" : "lg:col-span-1"
            }`}
          >
            <img
              src={img.src}
              alt={img.name}
              loading="lazy"
              className="w-full h-auto sm:h-[70vh] lg:h-auto object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
