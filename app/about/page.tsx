import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/common/TypewriterText";


export default function About() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D91023] selection:text-white overflow-x-hidden">
      {/* Background Effects - Matching Hero Style */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* We can reuse the image or use a gradient if specific image not available for about, 
                    but to keep consistency let's use a similar vibe or abstract */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

        {/* Red Atmospheric Glow - Similar to Hero */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#D91023] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-10" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 container mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            <span className="block text-white mb-2">LA MISIÓN DE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91023] to-orange-400 drop-shadow-[0_0_15px_rgba(217,16,35,0.35)]">
              AKLLAI
            </span>
          </h1>
          <TypewriterText
            className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed min-h-[6rem] md:min-h-[4rem]"
            text="Democratizando la información política a través de la inteligencia artificial."
            speed={20}
            delay={500}
          />
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D91023] to-transparent mx-auto rounded-full" />
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
          {/* Card 1: El Problema */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm hover:border-[#D91023]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,16,35,0.1)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D91023]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 group-hover:border-[#D91023]/50 transition-colors">
                <span className="text-2xl">🗳️</span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-[#D91023] transition-colors">
                Voto Informado
              </h2>
              <TypewriterText
                className="text-zinc-400 leading-relaxed min-h-[8rem]"
                text="En un mar de desinformación y campañas ruidosas, encontrar propuestas reales es difícil. AkllAI simplifica el análisis de planes de gobierno, permitiéndote comparar candidatos objetivamente."
                speed={15}
                delay={1500}
              />
            </div>
          </div>

          {/* Card 2: La Tecnología */}
          <div className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 group-hover:border-orange-500/50 transition-colors">
                <span className="text-2xl">🤖</span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                Análisis con IA
              </h2>
              <TypewriterText
                className="text-zinc-400 leading-relaxed min-h-[6rem]"
                text="Utilizamos modelos de lenguaje avanzados para procesar miles de páginas de documentos oficiales, extrayendo los puntos clave, contradicciones y viabilidad de cada propuesta."
                speed={15}
                delay={2000}
              />
            </div>
          </div>

          {/* Card 3: Transparencia (Full Width) */}
          <div className="md:col-span-2 group relative p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:bg-zinc-900/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  Nuestra Visión
                </h2>
                <TypewriterText
                  className="text-lg text-zinc-300 leading-relaxed min-h-[6rem]"
                  text="Imaginamos un futuro donde cada ciudadano tenga un asistente personal imparcial que le ayude a navegar la complejidad de la política nacional. AkllAI no te dice por quién votar, te da las herramientas para que tú decidas."
                  speed={15}
                  delay={2500}
                />
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/Prueba Akllai"
                    className="px-6 py-3 bg-gradient-to-r from-[#D91023] to-orange-400 text-white rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:scale-105"
                  >
                    Prueba Akllai
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-3 border border-zinc-600 text-white rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
                  >
                    Volver al Inicio
                  </Link>
                </div>
              </div>
              {/* Decorative element roughly resembling a ballot box or tech node */}
              <div className="relative w-48 h-48 flex-shrink-0 hidden md:flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-zinc-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-zinc-700/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-24 h-24 bg-gradient-to-br from-[#D91023] to-orange-500 rounded-full opacity-20 blur-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
