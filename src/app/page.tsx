import { Hero } from "@/components/hero";
import { FactoryVideo } from "@/components/factory-video";
import { PromoBanner } from "@/components/promo-banner";
import { Products } from "@/components/products";
import { ErgonomicSitting } from "@/components/ergonomic-sitting";
import { BoothBento } from "@/components/booth-bento";
import { ConsultationBand } from "@/components/consultation-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FactoryVideo />
      <PromoBanner />
      <Products />
      <BoothBento />
      <ErgonomicSitting />
      <ConsultationBand />
    </>
  );
}
