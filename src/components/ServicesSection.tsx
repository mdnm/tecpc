import poliueiraGenerica from "../assets/aplicacao-poliureia-generica.jpg";
import poliueiraEmMineracao from "../assets/aplicacao-poliureia-mineracao.jpg";
import poliueiraEmPavimento from "../assets/aplicacao-poliureia-pavimento.jpeg";

const services = [
  {
    title: "PROJEÇÕES EM POLIUREIA",
    image: poliueiraGenerica,
    description:
      "Equipe Certificada e com formação  na aplicação de Poliureia, tanto para impermeabilização como para revestimentos.",
  },
  {
    title: "PAVIMENTOS INDUSTRIAIS",
    image: poliueiraEmPavimento,
    description:
      "Aplicamos em pavimentos antiderrapantes de alta resistência para armazéns ou zonas de carga.",
  },
  {
    title: "POLIUREIA NO SETOR DE MINERAÇÃO",
    image: poliueiraEmMineracao,
    description:
      "O setor de mineração é caracterizado por atividades sob alta pressão, temperatura e materiais abrasivos. Portanto, a vedação à indústria desse segmento é fator fundamental para proteção de equipamentos, segurança de colaboradores e economia para empresa. Em comparação com sistemas convencionais de proteção, os elastômeros de alta performance, aumentam a produtividade e diminuem drasticamente o tempo e a frequência de manutenção. Particularmente nas caçambas, o uso da poliureia tem um benefício adicional: aumenta a produtividade do caminhão devido à redução de contrafluxo na descarga do material. Isso acontece pois o material desliza com facilidade devido ao mínimo coeficiente de fricção na superfície.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-32 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-indigo-800 font-bold text-5xl text-center mb-8">
          Serviços prestados
        </h2>
        <div className="flex justify-between items-baseline gap-8 mb-16">
          {services.map((service) => (
            <div
              className="w-1/3 flex flex-col rounded-md shadow-md bg-white"
              key={service.title}
            >
              <span className="font-bold bg-indigo-800 text-white text-center py-3 rounded-t-md">
                {service.title}
              </span>
              <img
                className="max-h-48 object-cover"
                src={service.image}
                alt="test"
              />
              <p className="mt-3 px-4 pb-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
