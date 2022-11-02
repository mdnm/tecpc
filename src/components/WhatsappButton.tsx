import { ReactComponent as Whatsapp } from "../assets/whatsapp.svg";

export function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5519993932319"
      target="_blank"
      className="flex fixed rounded-full justify-center items-center w-16 h-16 bottom-5 right-5 bg-green-wpp hover:bg-green-400 transition-colors"
      rel="noreferrer"
    >
      <Whatsapp />
    </a>
  );
}
