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
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-6xl mb-3 max-w-lg">
          Rápido, Eficiente e Seguro
        </h1>
        <p className="text-lg mb-12 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi quam id
          varius ipsum scelerisque faucibus at id. Metus ante nulla consequat
          faucibus ornare ultricies. Morbi quam ac erat.
        </p>
        <Button href="#servicos" className="max-w-max">
          Nossos Serviços <ArrowDown />
        </Button>
      </div>
    </main>
  );
}
