import { AboutUs } from '@/app/sections/about-us/about-us';
import { Welcome } from '@/app/sections/welcome/welcome';
import { Navbar } from './components/navbar/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome/>
      <AboutUs/>
    </>
  );
}
