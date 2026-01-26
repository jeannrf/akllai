import Hero from "@/components/common/Hero";
import RealidadNacional from "@/components/common/RealidadNacional";
import CandidatosPropuestas from "@/components/common/CandidatosPropuestas";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <RealidadNacional />
      <CandidatosPropuestas />
    </main>
  );
}
