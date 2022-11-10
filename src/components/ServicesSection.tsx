import poliueiraEmCaminhao from "../assets/aplicacao-poliureia-caminhao.jpg";
import poliueiraEmMoinho from "../assets/aplicacao-poliureia-moinho.jpg";
import poliueiraEmPavimento from "../assets/aplicacao-poliureia-pavimento.jpeg";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { Button } from "./Button";

const services = [
  {
    title: "Caminhões e vagões",
    image: {
      url: poliueiraEmCaminhao,
      alt: "Aplicação de Políureia em caminhões",
    },
    description: (
      <>
        <p className="mb-8">
          Particularmente nas caçambas, o uso da Políureia tem um benefício
          adicional. A Políureia aumenta a produtividade do caminhão e/ou vagão
          devido à redução de contrafluxo na descarga do material.
        </p>
        <p className="mb-8">
          Isso acontece pois o material desliza com facilidade devido ao mínimo
          coeficiente de fricção na superfície.
        </p>
        <p>
          As possibilidades no segmento de mineração vão desde caçambas de
          caminhões, vagões de trem, tanques de aço, correias transportadoras e
          estruturas de contenção secundária entre outros.
        </p>
      </>
    ),
  },
  {
    title: "Pisos e pavimentos",
    image: {
      url: poliueiraEmPavimento,
      alt: "Aplicação de Políureia em pavimentos",
    },
    description: (
      <>
        <p className="mb-8">
          Aplicamos em pavimentos antiderrapantes de alta resistência para
          armazéns ou zonas de carga/descarga.
        </p>
        <p className="mb-8">
          Destacamos que os revestimentos são 100% impermeáveis, possuem grande
          resistência físico-mecânica e formam uma camada unica sem juntas ou
          costuras, uma vez que se adaptam a qualquer tipo de superfície, por
          mais complexa que seja.
        </p>
        <p>
          O produto é aplicado em spray através de máquina de alta pressão e
          secam em questão de minutos, possibilitando rápido retorno às
          atividades.
        </p>
      </>
    ),
  },
  {
    title: "Moinhos de bola",
    image: {
      url: poliueiraEmMoinho,
      additionalClasses: "object-bottom",
      alt: "Moinho de bola com Políureia aplicada",
    },
    description: (
      <>
        <ul className="list-disc pl-4 flex flex-col gap-2">
          <li>Rápida aplicação, medida em horas e não em dias;</li>
          <li>
            Pode ter sua espessura aumentada em moinhos antigos, onde o desgaste
            já está presente;
          </li>
          <li>Facilmente reparável em situações de dano;</li>
          <li>
            Sem desgaste sob anel de areia após 5 anos de serviço (injeção);
          </li>
          <li>Fácil acesso para inspeções não destrutivas de soldas;</li>
          <li>Sem necessidade de primers para aderências de 7 Mpa;</li>
          <li>Aplicações com primer para aderências acima de 12 Mpa;</li>
        </ul>
      </>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 bg-gray-100">
      <div className="w-full md:max-w-screen-xl px-4 mx-auto">
        <h2 className="text-indigo-800 font-bold text-5xl text-center mb-8">
          Serviços prestados
        </h2>
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-baseline flex-wrap md:flex-nowrap gap-8 mb-16">
          {services.map((service) => (
            <div
              className="w-full md:w-1/3 flex flex-col rounded-md shadow-md bg-white"
              key={service.title}
            >
              <span className="font-bold bg-indigo-800 uppercase text-white text-center py-3 rounded-t-md">
                {service.title}
              </span>
              <img
                className={`max-h-48 object-cover ${
                  service.image.additionalClasses || ""
                }`}
                src={service.image.url}
                alt={service.image.alt}
                loading="lazy"
              />
              <p className="mt-3 px-4 pb-6">{service.description}</p>
              <Button href="#contato" className="rounded-t-none">
                <div className="w-full flex items-center justify-center gap-2">
                  Faça um orçamento
                  <ArrowDown />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
