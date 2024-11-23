import Image from "next/image";
export function Navbar() {

  const links = [
    { href: "#inicio", text: "Início" },
    { href: "#sobre", text: "Sobre" },
    { href: "#procedimentos", text: "Procedimentos" },
    { href: "#profissionais", text: "Profissionais" },
    { href: "#avaliacoes", text: "Avaliações" },
    { href: "#localizacao", text: "Localização" },
    { href: "#contato", text: "Contato" },
  ];

  const NavLink = ({ href, text }: { href: string; text: string }) => (
    <a
      href={href}
      className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white 
        after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 
        after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 
        after:ease-in-out hover:after:w-full">
      {text}
    </a>
  );

  return (
    <nav className="fixed w-full shadow-md px-12 h-[96px] bg-primary flex justify-between items-center z-50">
    <div className="text-white text-2xl font-bold">
        <Image src={"/milabarreto_logo.png"} alt="Logo da clínica" width={200} height={50} />
    </div>
    <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} text={link.text} />
          </li>
        ))}
      </ul>
</nav>
  )
}