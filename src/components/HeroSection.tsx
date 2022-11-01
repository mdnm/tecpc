import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import heroBg from "../assets/hero-bg.png";

export function HeroSection() {
  return (
    <main
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="pt-24 pb-36 text-white bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-lg ml-64">
        <h1 className="font-bold text-6xl mb-3">Rápido, Eficiente e Seguro</h1>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi quam id
          varius ipsum scelerisque faucibus at id. Metus ante nulla consequat
          faucibus ornare ultricies. Morbi quam ac erat.
        </p>
        <a
          href="#contact"
          className="max-w-max flex justify-between items-center font-bold px-3 py-3.5 rounded-md bg-indigo-800 hover:bg-indigo-900 transition-colors text-white gap-2"
        >
          Nossos Serviços <ArrowDown />
        </a>
      </div>
    </main>
  );
}
