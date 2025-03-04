export function Results() {
  const resultsData = [
    {
      procedure: "Preenchimento Labial",
      image: "/labial.jpeg",
    },
    {
      procedure: "Preenchimento de Olheira",
      image: "/olheira.jpeg",
    },
    {
      procedure: "Rinomodelação",
      image: "/rino.jpeg",
    },
  ];

  return (
    <section
      id="resultados"
      className="py-16 sm:py-[200px] px-6 sm:px-8 bg-gradient-to-br from-gray-200 to-white"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Resultados dos Nossos Pacientes
      </h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resultsData.map((result, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={result.image}
              alt={`Resultado: ${result.procedure}`}
              className="w-full h-auto object-cover"
            />
            <p className="text-center p-4 font-semibold">{result.procedure}</p>
          </div>
        ))}
      </div>
    </section>
  );
}