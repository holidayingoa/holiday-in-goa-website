import { WhatsApp } from "./icons";
import { site } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappUrl}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
    >
      <WhatsApp size={26} />
    </a>
  );
}
