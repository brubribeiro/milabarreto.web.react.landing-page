import { GradientCircle } from '@/app/components/gradient-circle/gradient-circle';

export function AboutUs() {
  return (
    <section className="py-32 px-8 relative bg-gradient-to-br from-white to-secondary flex justify-center" id="sobre">
      <div className='max-w-[70%]'>
        <h2 className="text-center text-4xl mb-12 text-gray-dark font-bold">Sobre nossa Clínica</h2>
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="about-text">
            <h3>Excelência em Estética Avançada</h3>
            <p>Com mais de 15 anos de experiência, nossa clínica é referência em tratamentos estéticos inovadores e
              seguros. Utilizamos tecnologia de ponta e contamos com profissionais altamente qualificados.</p>
          </div>
          <div className="about-image">
            <GradientCircle />
          </div>
        </div>
      </div>
    </section>
  )
}
