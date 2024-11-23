import { GradientCircle } from '@/app/components/gradient-circle/gradient-circle';

export function AboutUs() {
  return (
    <section className="h-[100vh] py-16 sm:py-[200px] px-6 sm:px-8 relative bg-gradient-to-br from-white to-secondary flex justify-center" id="sobre">
      <div className='max-w-5xl w-full'>
        <h2 className="text-center text-3xl sm:text-4xl mb-8 sm:mb-12 text-gray-dark font-bold">Sobre nossa Clínica</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className="about-text">
            <h3>Excelência em Estética Avançada</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu leo consectetur lorem pharetra consequat nec eu augue. Morbi maximus odio sed metus cursus molestie. Sed a malesuada diam, a euismod turpis. Duis vel urna non nisl congue convallis. Ut tincidunt, dolor eu bibendum sodales, risus ipsum condimentum orci, sed consectetur velit ex eleifend velit. In ligula eros, pretium in dignissim egestas, tempor et ante. Suspendisse libero erat, efficitur lacinia lorem ac, condimentum sollicitudin ligula. Sed dignissim purus iaculis varius commodo. Etiam hendrerit velit ipsum, vel imperdiet leo condimentum eu. Sed facilisis mauris lectus, id dictum tortor aliquet vitae. Sed rhoncus mollis magna, in tristique ante. Phasellus id malesuada lacus, ac rutrum tellus.</p>
          </div>
          <div className="hidden sm:block">
            <GradientCircle />
          </div>
        </div>
      </div>
    </section>
  )
}
