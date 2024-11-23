import Image from "next/image";

export function Welcome() {
  return (
      <section className="bg-gradient-to-br from-secondary to-white min-h-screen p-8 flex items-center justify-center text-center relative" id="inicio">
        <div className="max-w-[800px] flex flex-col items-center animate-fadeIn_1_5">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-solid border-primary mb-4">
            <Image className="object-cover object-bottom" alt="Foto profissional do especialista em estética" src="/milabarreto.jpeg" width="300" height="300" />
          </div>
          <h1 className="text-2xl text-gray-dark font-bold">Transforme sua beleza conosco</h1>
          <p className="text-base mb-5">Experimente o mais alto padrão em tratamentos estéticos avançados</p>
          <button className="bg-primary text-white py-[1.2rem] px-[2.5rem] rounded-[30px] text-[1.1rem] font-semibold cursor-pointer transition-transform duration-300 ease-in-out hover:bg-[#b99e71] hover:-translate-y-1 animate-pulseShadow mt-4">
            Agendar Consulta
          </button>
        </div>
      </section>
  );
}
