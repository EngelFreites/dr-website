import { FaWhatsapp } from "react-icons/fa";
export function Whatsapp() {
  return (
    <a
      href="https://wa.me/+593984675397"
      className="fixed bottom-7 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50  "
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-11 h-11" />
    </a>
  );
}