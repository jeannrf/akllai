"use client"; // Indica que este componente tiene interacción (clics, escritura)

import { useState } from "react";
import { createClient } from "@/lib/supabase"; // Importamos la función para crear el cliente
import Link from "next/link"; // Para enlaces de navegación

export default function RegisterPage() {
  // Inicializamos el cliente de Supabase
  const supabase = createClient();

  // Estos son "estados": guardan lo que el usuario escribe en las cajitas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Esta función se activa cuando el usuario pulsa el botón
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue sola
    setMensaje("");
    setIsLoading(true);

    // Aquí le decimos al "Portero" (Supabase) que cree un nuevo usuario
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMensaje("Error: " + error.message);
    } else {
      setMensaje("¡Éxito! Revisa tu correo para confirmar tu cuenta.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Elementos decorativos de fondo (luces ambientales) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Crea tu cuenta</h1>
            <p className="text-zinc-400 text-sm">Únete a AkllAI y descubre tu afinidad</p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-5">
            {/* Campo para el Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Email</label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                className="w-full bg-black/20 border border-white/10 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all placeholder:text-zinc-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo para la Contraseña */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-black/20 border border-white/10 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 transition-all placeholder:text-zinc-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creando cuenta..." : "Registrarse"}
            </button>
          </form>

          {/* Mensajes de feedback */}
          {mensaje && (
            <div className={`mt-6 p-4 rounded-lg text-sm font-medium text-center animate-in fade-in slide-in-from-bottom-2 ${mensaje.includes("Error") ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-green-500/10 text-green-400 border border-green-500/20"}`}>
              {mensaje}
            </div>
          )}

          <div className="mt-8 text-center text-sm text-zinc-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-white hover:text-red-400 font-medium transition-colors">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}