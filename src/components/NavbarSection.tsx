import { useEffect, useState } from "react";
import { ReactComponent as OpenMenuIcon } from "../assets/3-bars.svg";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as PhoneWithCircle } from "../assets/phone-with-circle.svg";
import { ReactComponent as ClosedMenuIcon } from "../assets/x.svg";
import { Button } from "./Button";

const navBarItems = [
  { href: "#home", label: "Home" },
  { href: "#sobre-nos", label: "Empresa", hideOnLg: true },
  { href: "#servicos", label: "Serviços" },
  { href: "#faq", label: "F.A.Q", hideOnLg: true },
  { href: "#contato", label: "Contato" },
];

export function NavbarSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.screen.width);
    });
  }, []);

  const isWithMobileScreenSize = screenSize <= 768;

  return (
    <div className="flex md:items-center py-8 md:px-9 shadow-md flex-col md:flex-row">
      <div className="flex justify-between items-center px-9">
        <a href="#home" aria-label="Logo da TECPC">
          <Logo />
        </a>
        <button
          className="md:hidden"
          aria-controls="navbar"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <ClosedMenuIcon className="w-9 h-9" />
          ) : (
            <OpenMenuIcon className="w-9 h-9" />
          )}
        </button>
      </div>
      {(isMobileMenuOpen || !isWithMobileScreenSize) && (
        <nav
          id="navbar"
          className="mt-4 md:mt-0 md:ml-10 xl:ml-20 grow flex justify-between items-center flex-col md:flex-row"
        >
          <ul className="flex items-center gap-3 xl:gap-8 flex-col md:flex-row">
            {navBarItems.map((navBarItem) => (
              <li key={navBarItem.href}>
                <a
                  href={navBarItem.href}
                  className={`font-bold ${
                    navBarItem.hideOnLg && "inline md:hidden xl:inline"
                  }`}
                >
                  {navBarItem.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-full md:w-auto flex md:items-center gap-8 mt-4 md:mt-0">
            <Button
              href="#contato"
              className="w-full md:w-auto rounded-none md:rounded-md h-20 md:h-auto mb-[-2rem] md:mb-0"
            >
              Faça um orçamento <ArrowRight />
            </Button>
            <div className="items-center gap-2 hidden lg:flex">
              <PhoneWithCircle />
              <span className="font-mono text-xl">(19) 993932319</span>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
