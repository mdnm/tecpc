import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { Button } from "./Button";

export function AboutUsSection() {
  return (
    <section className="max-w-screen-xl mx-auto py-32" id="sobre-nos">
      <h2 className="text-indigo-800 font-bold text-5xl text-center mb-3">
        Quem Somos
      </h2>
      <p className="mb-2">
        TECPC Soluções Para Pintura LTDA é uma empresa de consultoria,
        treinamento e gerenciamento que utiliza inspetor NACE-CIP 1 como
        instrutor, para implantar as melhores soluções em impermeabilização,
        aplicação e revestimento a base de Poliureia, com foco em projetos
        especiais para peças de mineração que sofrem com danos mecânicos e
        atritos constantes em todo seu processo de manuseio e transporte.
      </p>
      <p className="mb-16">
        O sucesso de nossa empresa se deve com KNOW-HOW obtido ao longo de
        dezessete anos de experiência no mercado de pintura industrial e
        jateamento. Visitando empresas de diversos seguimentos da indústria,
        fazendo especificações de equipamentos para pintura, formações de
        equipes, feiras OFFSHORE e implantando sistemas automáticos de pintura
        de tubos e chapas.
      </p>
      <h3 className="text-indigo-800 font-bold text-3xl text-center mb-3">
        Segmentação
      </h3>
      <p className="mb-2">
        Atuamos com um portfólio especifico para o{" "}
        <span className="font-bold">segmento de mineração</span>,
        disponibilizamos soluções de alto desempenho para promover a proteção de
        superfícies e prolongar a vida útil de equipamentos e infraestrutura.
        Através de impermeabilização com poliuréia que protege contra abrasão,
        corrosão, umidade e o impacto em ambientes químicos agressivos.
      </p>
      <p className="mb-16">
        Os revestimentos são{" "}
        <span className="font-bold">100% impermeáveis</span>, possuem grande
        resistência físico-mecânica e formam uma camada unica sem juntas ou
        costuras, uma vez que se adaptam a qualquer tipo de superfície, por mais
        complexa que seja. O produto é aplicado em spray através de máquina de
        alta pressão e secam em questão de minutos, possibilitando rápido
        retorno às atividades. As possibilidades no segmento de mineração vão
        desde caçambas de caminhões, vagões de trem, tanques de aço, correias
        transportadoras e estruturas de contenção secundária.
      </p>
      <Button href="#contato" className="max-w-max mx-auto">
        Consulte-nos agora <ArrowDown />
      </Button>
    </section>
  );
}
