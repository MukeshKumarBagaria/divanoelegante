import { Hero } from "@/components/hero";
import { FactoryVideo } from "@/components/factory-video";
import { PromoBanner } from "@/components/promo-banner";
import { Products } from "@/components/products";
import { ErgonomicSitting } from "@/components/ergonomic-sitting";
import { Manufacturing } from "@/components/manufacturing";
import { BoothBento } from "@/components/booth-bento";

export default function Home() {
  return (
    <>
      <Hero />
      <FactoryVideo />
      <PromoBanner />
      <Manufacturing />
      <Products />
      <BoothBento />
      <ErgonomicSitting />
    </>
  );
}
