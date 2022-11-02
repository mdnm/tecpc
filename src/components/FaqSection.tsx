const questions = [
  {
    title: "Quanto tempo demora a aplicação de Políureia?",
    answer:
      "Antes de qualquer aplicação, o espaço é devidamente preparado. Limpezas, tratamento de fissuras ou de estrutura e aplicação dos primários. Depois de tudo pronto e isolado, a aplicação em si é extremamente rápida devido ao tempo de reação e de secagem rápidos característicos da Políureia.",
  },
  {
    title: "Que tipo de Políureia é aplicada?",
    answer:
      "Aplicamos única e exclusivamente materiais certificados. Cada caso é avaliado individualmente e aprovado conjuntamente com os especialistas dos fornecedores para cada tipo obra.",
  },
  {
    title: "Quais benefícios da Políureia para Empresas de Mineração?",
    answer: (
      <>
        <ul className="list-disc pl-4">
          <li>Perda de metal paralisada</li>
          <li>Aplicação na empresa do cliente em instalação temporária</li>
          <li>Parada do vagão menor que 2 dias</li>
          <li>Não é necessário repintar a parte externa do vagão</li>
          <li>Mais rápido e mais barato do que refazer a chaparia</li>
          <li>Possibilidade de transportar materiais mais agressivos</li>
          <li>
            Flexibilidade para optar por vagões construídos com aços menos
            nobres
          </li>
          <li>
            Re-aplicável, de forma que apenas com uma inspeção periódica o vagão
            pode durar indefinidamente
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Quão impermeabilizante é a Políureia?",
    answer:
      "Aplicada da forma correta , extremamente impermeabilizante. A Políureia por ser uma membrana única sem ligações  e confere um  nível de impermeabilização que não é possível com outros materiais ou outras soluções.",
  },
  {
    title: "Quais as opções de cores?",
    answer:
      "A Poliureia pode ser aplicada em praticamente qualquer cor do catálogo. As mais comuns e resistentes aos ultravioletas são o preto, vermelho telha e vermelho-óxido.",
  },
  {
    title: "Quais são os possíveis tipos de acabamentos?",
    answer:
      "Depois do tratamento inicial e a aplicação da Políureia, o acabamento pode ser liso, rugoso, brilhante ou não brilhante em resina de poliuretano ou poliaspártica. É possível ainda usar areias de quarto com quartzo ou sílica.",
  },
  {
    title: "Quão durável é a Políureia?",
    answer:
      "A Políureia é conhecida por ser extremamente resistente à abrasão e contra o impacto devido à sua elasticidade. Por ser uma membrana única e adaptável a qualquer geometria, ela é extremamente resistente.",
  },
  {
    title: "Quais as características da Políureia? ",
    answer: (
      <>
        <ul className="list-disc pl-4">
          <li>Não usa solventes</li>
          <li>Não produz odores</li>
          <li>Tem reação rápida (reage entre 5 a 10 segundos)</li>
          <li>Cura completa em 24 horas</li>
          <li>
            Extrema resistência a produtos corrosivos, químicos, sais ácidos e
            atritos diversos
          </li>
          <li>Adaptável a geometrias complexas</li>
          <li>Grande eficiência (100% do material fica em obra)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Qual valor por metro quadrado? (m²)",
    answer: (
      <>
        <span className="font-bold">
          O preço de metro quadrado varia devido aos seguintes fatores:
        </span>
        <ul className="list-disc pl-4">
          <li>
            Quais preparações serão necessárias antes da aplicação da Políureia
          </li>
          <li>Qual área será aplicada</li>
          <li>
            Quantos milímetros (mm) de membrana serão necessários para ser
            aplicados por metro quadrado (m²)
          </li>
          <li>Quais acabamentos serão necessários</li>
        </ul>
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full md:max-w-screen-xl mx-auto px-4 py-32">
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
