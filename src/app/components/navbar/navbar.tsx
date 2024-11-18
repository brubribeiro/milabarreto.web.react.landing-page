export function Navbar() {
  return (
    <nav className="fixed w-full shadow-md px-12 py-8 bg-primary flex justify-between items-center z-50">
    <div className="text-white text-2xl font-bold">
        <h2>Estética Avançada</h2>
    </div>
    <div className="flex gap-8">
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#inicio">Início</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#sobre">Sobre</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#fotos">Fotos</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#procedimentos">Procedimentos</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#profissionais">Profissionais</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#avaliacoes">Avaliações</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#localizacao">Localização</a>
        <a className="text-white font-semibold relative transition-all duration-300 ease-in-out pb-[5px] hover:text-white after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full" href="#contato">Contato</a>
    </div>
</nav>
  )
}