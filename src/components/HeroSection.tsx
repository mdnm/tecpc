import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import heroBg from "../assets/hero-bg.png";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <main
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="py-44 text-white bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full px-4 md:max-w-screen-xl mx-auto">
        <h1 className="font-bold text-6xl mb-3 w-full md:max-w-lg text-center md:text-start">
          Resistência + Durabilidade = Economia
        </h1>
        <p className="text-md mb-3 w-full md:max-w-lg text-center md:text-start">
          Se esses fatores são importantes para sua empresa, a{" "}
          <span className="font-bold text-indigo-300">Políureia</span> é a
          solução adequada. A{" "}
          <span className="font-bold text-indigo-300">Políureia</span>,
          diferente de outros sistemas de revestimentos, atinge resultados
          incomparáveis.
        </p>
        <p className="text-md mb-12 w-full md:max-w-lg text-center md:text-start">
          A aplicação de{" "}
          <span className="font-bold text-indigo-300">Políureia</span>{" "}
          proporciona: Alta resistência ao impacto, rápida aplicação e liberação
          usualmente em minutos ou horas, aplicação em alta espessura e em uma
          só camada, impermeabilidade, fácil reparo e manutenção.
        </p>
        <Button href="#servicos" className="md:max-w-max text-lg uppercase">
          Saiba mais <ArrowDown />
        </Button>
      </div>
    </main>
  );
}
