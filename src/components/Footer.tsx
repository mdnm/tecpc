import { ReactComponent as Logo } from "../assets/logo.svg";

export function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center md:items-stretch px-4 w-full md:max-w-screen-xl mx-auto bg-white pt-10 pb-5">
        <p className="font-bold mb-4">
          <Logo />
        </p>
        <p className="mb-1">
          <span className="font-bold">Whatsapp:</span> +55 (19) 993932319
        </p>
        <p>
          <span className="font-bold">Email:</span> danilo@tecpc.com.br
        </p>
      </footer>
      <div className="bg-white pt-4 pb-10">
        <div className="flex justify-center items-center flex-wrap">
          <div>
            © Copyright <span className="font-bold">TEC PC</span>.
          </div>
          {/* <div>
                Made in Italy 🇮🇹 by{"  "}
                <a
                  href="https://www.linkedin.com/in/mateusdnm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mateus De Nardo
                </a>
              </div> */}
        </div>
      </div>
    </>
  );
}
