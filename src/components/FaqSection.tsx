const questions = [
  {
    title: "Quanto tempo demora a aplicação de poliuréia?",
    answer:
      "Antes de qualquer aplicação, o espaço é devidamente preparado. Limpezas, tratamento de fissuras ou de estrutura e aplicação dos primários. Depois de tudo pronto e isolado, a aplicação em si é extremamente rápida devido ao tempo de reação e de secagem rápidos característicos da Poliuréia.",
  },
  {
    title: "Que tipo de poliuréia é aplicada?",
    answer:
      "Aplicamos única e exclusivamente materiais certificados. Cada caso é avaliado individualmente e aprovado conjuntamente com os especialistas dos fornecedores para cada tipo obra.  Adequamos a solução da aplicação ao problema, pelo que aplicamos tanto poliureias puras (isto é, 100% de Poliureia) como híbridas (mistura de Poliureia e Poliuretano) seja a quente ou a frio.",
  },
  {
    title: "Quais casos são indicado a aplicação de poliureia?",
    answer: (
      <>
        <span className="font-bold">
          Poliureia é ideal para a impermeabilização de:
        </span>
        <p>
          Tanques, depósitos Como sistema de proteção de elevada resistência
        </p>
        <span className="font-bold">Setor automotivo:</span>
        <p>isotérmicos, pick-ups, caminhões</p>
        <span className="font-bold">Setor Ferroviario: </span>
        <p>Containers e Vagões</p>
        <span className="font-bold">Como pavimento:</span>
        <p>Pisos com grande trafego</p>
        <span className="font-bold">Como solução de:</span>
        <ul className="list-disc pl-4">
          <li>Resistência ao fogo</li>
          <li>Resistencia a materias abrasivos</li>
        </ul>
      </>
    ),
  },
  {
    title: "Quão Impermeabilizante é a poliureia?",
    answer:
      "Aplicada da forma correta , extremamente impermeabilizante. A poliureia por ser uma membrana única sem ligações  e confere um  nível de impermeabilização que não é possível com outros materiais ou outras soluções.",
  },
  {
    title: "Quais cores são possiveis se utilizar?",
    answer:
      "A Poliureia pode ser aplicada em praticamente qualquer cor do catálogo. As mais comuns e resistentes aos ultravioletas são o preto, vermelho telha e vermelho-óxido.",
  },
  {
    title: "Quais tipos de acabamentos são possiveis?",
    answer:
      "Depois do tratamento inicial e a aplicação da Poliureia em si, o acabamento pode ser liso, rugoso, brilhante ou não brilhante em resina de poliuretano ou poliaspártica. É possível ainda usar areias de quarto com quartzo ou sílica.",
  },
  {
    title: "Quão duravel é a poliureia?",
    answer:
      "A Poliureia é particularmente conhecida por ser extremamente resistente à abrasão e contra o impacto devido à sua elasticidade.A utilização de Poliureia como pavimentos de alto tráfego, por exemplo zonas de circulação de empilhadeiras). O fato de ser uma membrana única torna-a especialmente resistente, uma vez que não há uniões que poderiam potencialmente ser mais sujeitas apresentar problemas.",
  },
  {
    title: "Quais as caracteristicas da Poliureia? ",
    answer: (
      <>
        <span className="font-bold">
          Na sua grande generalidade a Poliureia:
        </span>
        <ul className="list-disc pl-4">
          <li>Não usa solventes</li>
          <li>Não produz odores</li>
          <li>Tem tempos de reacção rápidos</li>
          <li>Reage entre 5 a 10 segundos</li>
          <li>Em 24 horas a cura está completa</li>
          <li>
            Grande resistência produtos corrosivos, química, sais ácidos e
            atritos diversos
          </li>
          <li>
            Por ser projetada adapta-se a estruturas com geometrias complexas
          </li>
          <li>
            Sem desperdícios e de grande eficiência: 100% do material fica em
            obra
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Qual valor por metro quadrado? (m²)",
    answer: (
      <>
        <span className="font-bold">
          O preço de metro quadrado varia devido a vários fatores:
        </span>
        <ul className="list-disc pl-4">
          <li>
            Quais preparações serão necessárias antes da aplicação da Poliureia
          </li>
          <li>Qual área sera aplicada</li>
          <li>
            Quantos mm de membrana serão necessários para ser aplicados por m²
          </li>
          <li>Quais acabamentos serão necessários</li>
        </ul>
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="max-w-screen-xl mx-auto py-32">
      <h2 className="text-indigo-800 font-bold text-5xl text-center mb-8">
        Perguntas Frequentes
      </h2>
      <div className="flex flex-col gap-4">
        {questions.map((question) => (
          <details
            key={question.title}
            className="bg-indigo-800 text-white rounded-lg px-4 py-3"
          >
            <summary className="font-bold text-xl mb-3">
              {question.title}
            </summary>
            <div className="pl-6">{question.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
