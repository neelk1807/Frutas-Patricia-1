import React from "react";
import tomate from "../../assets/Home/tomate.png";
import capisum from "../../assets/Home/capsicum.png";
import courgate from "../../assets/Home/courgate.png";
import apple from "../../assets/Home/apple.png";



const products = [
  {
    name: "Tomate Salada",
    description1:
      "Caracteriza-se pela casca fina e polpa firme.",
    description2: "Tem sabor suave e é conhecido pela sua excelente frescura e facilidade de consumo.",
    image: tomate,
  },
  {
    name: "Pimento",
    description1:
      "Caracteriza-se pela casca fina e textura firme.",
    description2: "Tem sabor suave e é conhecido pela sua excelente frescura e facilidade de consumo.",
    image: capisum,
  },
  {
    name: "Courgete",
    description1:
      "Caracteriza-se pela sua forma alongada e pele lisa.",
    description2: "Tem sabor delicado e cremoso, sendo conhecida pela sua excelente frescura e facilidade de consumo.",
    image: courgate,
  },
  {
    name: "Maçã Fuji",
    description1:
      "Caracteriza-se pela casca densa e crocante, com tons vermelho-claro e polpa branca.",
    description2: "Tem um sabor muito doce, com pouca acidez.",
    image: apple  ,
  },
];

export default function Specialties() {
  return (
    <section className="py-10 md:py-16 bg-[var(--color-whitecustom)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span className="bg-[var(--color-prime)] text-[var(--color-whitecustom)] px-4 py-1 rounded-full text-lg font-regular">
            Produtos
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-4">
          As nossas especialidades
        </h2>
        <p className="text-center text-lg md:text-xl text-[var(--color-gray2)] max-w-4xl mx-auto mb-12">
          Produtos de grande qualidade disponíveis todo o ano e distribuídos
          nacional e internacionalmente.
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-graycustom)] rounded-2xl p-5 text-center shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />
              <div className="card-content">
                <h3 className="font-bold text-2xl mb-2">{item.name}</h3>
                <p className="text-lg text-[var(--color-gray2)] pb-5">{item.description1}</p>
                <p className="text-lg text-[var(--color-gray2)]">{item.description2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
