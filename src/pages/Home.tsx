import { Hero } from '../components/sections/Hero';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Features } from '../components/sections/Features';
import { FAQ } from '../components/sections/FAQ';
import { Dashboard } from './Dashboard';

export function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
      
    </>
  );
}