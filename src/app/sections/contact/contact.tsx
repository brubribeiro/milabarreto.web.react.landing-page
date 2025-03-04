import Image from "next/image";

export function Contact() {
  return (
    <section
      className="h-[100vh] py-16 sm:py-[200px] px-6 sm:px-8 bg-gradient-to-br from-secondary to-white"
      id="contato"
    >
      <h2 className="text-center text-4xl mb-12 text-gray-dark font-bold">
        Entre em contato
      </h2>
      <div className="mx-auto text-center animate-fadeIn_1_5">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Estamos à disposição para atendê-lo
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Entre em contato através de nossas redes sociais ou WhatsApp para
            agendar sua consulta.
          </p>
          <div className="flex justify-center gap-8 flex-wrap mt-8">
            <a
              href="https://www.instagram.com/dra.milabarreto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white text-lg px-6 py-3 rounded-full bg-primary shadow-lg transform transition-all hover:translate-y-[-3px] hover:shadow-xl hover:bg-secondary hover:text-white min-w-[200px]"
            >
              <Image src={'/instagram.svg'} alt="Ícone instagram" width={20} height={20}/>
              <span>@dra.milabarreto</span>
            </a>
            <a
              href="https://www.tiktok.com/@milabarretoea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white text-lg px-6 py-3 rounded-full bg-primary shadow-lg transform transition-all hover:translate-y-[-3px] hover:shadow-xl hover:bg-secondary hover:text-white min-w-[200px]"
            >
              <Image src={'/tiktok.svg'} alt="Ícone tiktok" width={20} height={20}/>
              <span>@milabarretoea</span>
            </a>
            <a
              href="https://wa.me/5511963130417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white text-lg px-6 py-3 rounded-full bg-primary shadow-lg transform transition-all hover:translate-y-[-3px] hover:shadow-xl hover:bg-secondary hover:text-white min-w-[200px]"
            >
              <Image src={'/whatsapp.svg'} alt="Ícone whatsapp" width={20} height={20}/>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
