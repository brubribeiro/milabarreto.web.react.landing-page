import { ProcedureCard } from "../../components/card-procedure/card-procedute";

export function Procedures() {

  const proceduresData = [
    {
      category: "Procedimentos Faciais",
      icon: "/face.svg",
      items: [
        "Botox",
        "Preenchimento Labial",
        "Skinbooster",
        "Peeling Químico",
        "Microagulhamento",
      ],
    },
    {
      category: "Procedimentos Corporais",
      icon: "/person.svg",
      items: ["Hidrolipoclasia", "Intradermaterapia para Gordura Localizada", "Secagem de Microvasos"],
    },
    {
      category: "Procedimentos Capilares",
      icon: "/hair.svg",
      items: ["Intradermaterapia Capilar"],
    },
  ];

  return (
    <section className="h-[100vh] py-16 sm:py-[200px] px-6 sm:px-8 bg-gradient-to-br from-gray-200 to-white" id="procedimentos">
      <h2 className="text-4xl font-bold text-center text-gray-dark mb-12">Nossos Procedimentos</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proceduresData.map((procedure, index) => (
          <ProcedureCard
            key={index}
            category={procedure.category}
            icon={procedure.icon}
            items={procedure.items}
          />
        ))}
      </div>
    </section>
  );
}
