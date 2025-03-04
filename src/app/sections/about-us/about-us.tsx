import { GradientCircle } from '@/app/components/gradient-circle/gradient-circle';

export function AboutUs() {
  return (
    <section className="min-h-[100vh] py-16 sm:py-[200px] px-6 sm:px-8 relative bg-gradient-to-br from-white to-secondary flex justify-center" id="sobre">
      <div className='max-w-5xl w-full'>
        <h2 className="text-center text-3xl sm:text-4xl mb-8 sm:mb-12 text-gray-dark font-bold">Sobre nossa Clínica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className="about-text flex flex-col gap-2">
            <h3>Excelência em Estética Avançada</h3>
            <p>Mila Barreto Estética Avançada é uma clínica recém inaugurada e fundada pela biomédica especializada em estética, Camila Barreto.</p>
            <p>Com dois anos de experiência na área, Camila traz uma bagagem sólida, incluindo residência em harmonização orofacial e diversos cursos voltados para as mais modernas técnicas estéticas. Agora, ela realiza o sonho de liderar seu próprio espaço, unindo conhecimento técnico e paixão pelo cuidado com a autoestima de seus pacientes.</p>
            <p>Ao lado de Beatriz Vitorino, esteticista e cosmetóloga pós-graduada em saúde estética, a clínica oferece uma ampla gama de tratamentos com procedimentos faciais, corporais e capilares.</p>
            <p>A clínica tem como diferencial o uso de tecnologias avançadas e produtos de alta qualidade, garantindo segurança e excelência em cada atendimento.</p>
          </div>
          <div className="hidden sm:block">
            <GradientCircle />
          </div>
        </div>
      </div>
    </section>
  )
}
