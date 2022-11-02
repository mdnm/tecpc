import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { Button } from "./Button";

export function AboutUsSection() {
  return (
    <section
      className="w-full md:max-w-screen-xl px-4 mx-auto py-32"
      id="sobre-nos"
    >
      <h2 className="text-indigo-800 font-bold text-5xl text-center mb-3">
        Quem Somos
      </h2>
      <p className="mb-2 text-center md:text-start">
        TECPC Soluções Para Pintura LTDA é uma empresa de consultoria,
        treinamento e gerenciamento que utiliza &quot;Inspetor NACE-CIP 1&quot;
        como instrutor, para implantar as melhores soluções em
        impermeabilização, aplicação e revestimento a base de Políureia, com
        foco em projetos especiais para peças de mineração que sofrem com danos
        mecânicos e atritos constantes em todo seu processo de manuseio e
        transporte.
      </p>
      <p className="mb-16 text-center md:text-start">
        O sucesso de nossa empresa se deve com KNOW-HOW obtido ao longo de
        dezessete anos de experiência no mercado de pintura industrial e
        jateamento. Visitando empresas de diversos seguimentos da indústria,
        fazendo especificações de equipamentos para pintura, formações de
        equipes, feiras OFFSHORE e implantando sistemas automáticos de pintura
        de tubos e chapas.
      </p>
      <h3 className="text-indigo-800 font-bold text-3xl text-center mb-3">
        Setor de Mineração
      </h3>
      <p className="mb-2 text-center md:text-start">
        O setor de mineração é caracterizado por atividades sob alta pressão,
        temperatura e materiais abrasivos. Portanto, a vedação à indústria desse
        segmento é fator fundamental para proteção de equipamentos, segurança de
        colaboradores e economia para empresa. Em comparação com sistemas
        convencionais de proteção, os elastômeros de alta performance, aumentam
        a produtividade e diminuem drasticamente o tempo e a frequência de
        manutenção.
      </p>
      <p className="mb-16 text-center md:text-start">
        Atuamos com um portfólio especifico para o segmento de mineração,
        disponibilizando soluções de alto desempenho capaz de promover proteção
        as superfícies, prolongar a vida útil de equipamentos e infraestrutura.
        Somos uma equipe certificada com formação em aplicação de Políureia,
        tanto em impermeabilização como para revestimentos, oferecendo o que há
        de melhor para o mercado de mineração.
      </p>
      <Button href="#contato" className="md:max-w-max mx-auto">
        Consulte-nos agora <ArrowDown />
      </Button>
    </section>
  );
}
