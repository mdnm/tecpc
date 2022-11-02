import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Phone } from "../assets/phone.svg";

const contacts = [
  {
    icon: Phone,
    contactLink: "https://api.whatsapp.com/send/?phone=5519993932319",
    contactLabel: "(19) 993932319",
  },
  {
    icon: Mail,
    contactLink: "mailto:danilo@tecpc.com.br",
    contactLabel: "danilo@tecpc.com.br",
  },
  {
    icon: LinkedIn,
    contactLink: "https://www.linkedin.com/in/danilo-santos-4398b6215/",
    contactLabel: "LinkedIn",
  },
];

export function ContactSection() {
  return (
    <section className="bg-gray-100 py-32" id="contato">
      <div className="w-full md:max-w-screen-xl px-4 mx-auto">
        <h2 className="text-indigo-800 font-bold text-5xl text-center mb-8">
          Contato
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start">
          <div className="flex flex-col lg:flex-row items-stretch md:items-center gap-3 w-full md:w-1/2">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.contactLabel}
                  className="flex flex-col items-center shadow-md bg-white hover:shadow-lg transition-colors rounded-md px-4 py-6 gap-6 md:w-52 lg:w-auto"
                  href={contact.contactLink}
                >
                  <Icon className="w-7 h-7" />
                  <span>{contact.contactLabel}</span>
                </a>
              );
            })}
          </div>
          <form
            className="mt-8 md:mt-0 flex flex-col gap-3 w-full md:w-1/2"
            action="mailto:danilo@tecpc.com.br"
            method="post"
            encType="text/plain"
          >
            <input
              className="rounded-md px-3 py-4 focus:outline-indigo-800"
              type="text"
              placeholder="Nome"
              name="nome"
            />
            <input
              className="rounded-md px-3 py-4 focus:outline-indigo-800"
              type="email"
              placeholder="E-mail"
              name="email"
            />
            <textarea
              className="rounded-md px-3 py-4 focus:outline-indigo-800"
              rows={3}
              placeholder="Mensagem"
              name="mensagem"
            />
            <button
              className="w-full mt-4 bg-green-700 hover:bg-green-800 transition-colors text-white rounded-md md:max-w-max md:self-end px-3 py-4"
              type="submit"
            >
              Enviar uma mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
