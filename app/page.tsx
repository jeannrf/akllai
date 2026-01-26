import Hero from "@/components/Hero";
import RealidadNacional from "@/components/RealidadNacional";
import CandidatosPropuestas from "@/components/CandidatosPropuestas";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <RealidadNacional />
      <CandidatosPropuestas />
    </main>
  );
}
