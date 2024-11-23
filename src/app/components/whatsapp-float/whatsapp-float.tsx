import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511963130417"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg z-50 transition-transform duration-300 ease-in-out animate-pulseWhatsApp hover:scale-110 hover:bg-[#20ba57]"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Image src={"/whatsapp.svg"} alt="Whatsapp" width={35} height={35} />
    </a>
  );
};
