import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D91023] selection:text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-zinc-800 rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            SOBRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">NOSOTROS</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            AkllAI nace de la necesidad de cerrar la brecha entre la complejidad política y la ciudadanía peruana.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-[#D91023] pl-4">¿Quiénes somos?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Somos un equipo multidisciplinario apasionado por la tecnología y la transparencia. Creemos que la inteligencia artificial no solo debe servir para la productividad personal, sino como una herramienta fundamental para el fortalecimiento de la democracia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold border-l-4 border-[#D91023] pl-4">Nuestro Origen</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              El proyecto surgió al observar cómo la desinformación y el desinterés electoral afectaban las decisiones cruciales de nuestro país. Decidimos crear una plataforma que analice, sintetice y presente la información de manera imparcial y accesible para todos.
            </p>
          </section>

          <div className="pt-8 text-center">
            <Link
              href="/mision"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all"
            >
              Conoce nuestra Misión
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
