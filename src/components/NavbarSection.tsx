import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PhoneWithCircle } from "../assets/phone-with-circle.svg";
import { Button } from "./Button";

const navBarItems = [
  { href: "#home", label: "Home" },
  { href: "#sobre-nos", label: "Empresa" },
  { href: "#servicos", label: "Serviços" },
  { href: "#faq", label: "F.A.Q" },
  { href: "#contato", label: "Contato" },
];

export function NavbarSection() {
  return (
    <div className="flex items-center py-8 px-9 shadow-md">
      <a href="#home" aria-label="Logo da TECPC">
        <Logo />
      </a>
      <div aria-controls="navbar" />
      <nav id="navbar" className="ml-20 grow flex justify-between items-center">
        <ul className="flex items-center gap-8">
          {navBarItems.map((navBarItem) => (
            <li key={navBarItem.href}>
              <a href={navBarItem.href} className="font-bold">
                {navBarItem.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-8">
          <Button href="#contato">
            Faça um orçamento <ArrowRight />
          </Button>
          <div className="flex items-center gap-2">
            <PhoneWithCircle />
            <span className="font-mono text-xl">(19) 993932319</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
