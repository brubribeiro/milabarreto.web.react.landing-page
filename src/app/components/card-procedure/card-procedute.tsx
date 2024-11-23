import Image from "next/image";

interface ProcedureCardProps {
  category: string;
  icon: string;
  items: string[];
}

export function ProcedureCard({ category, icon, items }: ProcedureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col animate-slideInRight opacity-0 min-h-[350px]">
      <div className="text-3xl text-primary mb-4 flex justify-center items-center min-h-20">
        <Image src={icon} alt="Ícone categoria" width={40} height={40}/>
      </div>
      <h3 className="text-xl text-primary font-semibold mb-4">{category}</h3>
      <ul className="space-y-2 text-left">
        {items.map((item: string, index: number) => (
          <li
            key={index}
            className="border-b border-[#cfc49333] py-2 hover:pl-2 hover:text-primary transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
