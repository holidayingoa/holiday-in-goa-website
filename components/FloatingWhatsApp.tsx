import { WhatsApp, Facebook } from "./icons";
import { site } from "@/lib/data";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <a
        href={site.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Holiday In Goa on Facebook"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow-[0_10px_30px_rgba(24,119,242,0.45)] transition-transform hover:scale-105"
      >
        <Facebook size={24} />
      </a>
      <a
        href={site.whatsappUrl}
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105"
      >
        <WhatsApp size={26} />
      </a>
    </div>
  );
}
