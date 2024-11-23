import { AboutUs } from '@/app/sections/about-us/about-us';
import { Welcome } from '@/app/sections/welcome/welcome';
import { Location } from '@/app/sections/location/location';
import { Navbar } from './components/navbar/navbar';
import { WhatsAppFloat } from './components/whatsapp-float/whatsapp-float';
import { Footer } from './sections/footer/footer';
import { Ratings } from './sections/ratings/ratings';
import { Procedures } from './sections/procedures/procedures';
import { Contact } from './sections/contact/contact';

export default function Home() {
  return (
    <>
      <WhatsAppFloat />
      <Navbar />
      <Welcome/>
      <AboutUs/>
      <Procedures />
      <Ratings/>
      <Location />
      <Contact />
      <Footer />
    </>
  );
}
