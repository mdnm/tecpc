import { ReactComponent as Whatsapp } from "../assets/whatsapp.svg";

export function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5519993932319"
      target="_blank"
      className="fixed rounded-full flex justify-center items-center w-16 h-16 bottom-5 right-5 bg-green-300 hover:bg-green-400 transition-colors"
      // style={{
      //   backgroundColor: "#25D366",
      // }}
      rel="noreferrer"
    >
      <Whatsapp />
    </a>
  );
}
