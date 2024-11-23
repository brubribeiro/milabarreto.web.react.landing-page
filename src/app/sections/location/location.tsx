export function Location() {
  return (
    <section
      className="h-[100vh] py-16 sm:py-[200px] px-6 sm:px-8 bg-white"
      id="localizacao">
      <h2 className="text-center text-4xl mb-12 text-gray-dark font-bold">
        Nossa Localização
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 animate-fadeIn_1_5">
        <div className="rounded-lg overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14648.809468394285!2d-46.7099398!3d-23.3808953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee5dcae2b85c9%3A0xf33151b900343047!2sMila%20Barreto%20Est%C3%A9tica%20Avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1732390243497!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Endereço</h3>
          <p className="text-gray-dark">R. Arminda Cavalieri Dartora, 229 - 1° andar</p>
          <p className="text-gray-dark">San Marino - Caieiras/SP</p>
          <p className="text-gray-dark">CEP: 07743-420</p>
          <h3 className="text-lg font-semibold mt-8 mb-1">
            Horário de Funcionamento
          </h3>
          <p className="text-gray-dark">Segunda a Sexta: 8h às 18h</p>
          <p className="text-gray-dark">Sábado: 7h às 13h</p>
        </div>
      </div>
    </section>
  );
}
