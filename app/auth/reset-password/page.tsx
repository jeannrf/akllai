"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrorMsg("");

    // La URL a la que redirigirá el link del correo. 
    // Debería ser una página donde el usuario ponga su nueva contraseña.
    // Por ahora apuntaremos a /auth/update-password (que crearemos luego si lo necesitas)
    // o al mismo login si solo es un reset mágico. 
    // Supabase standard envía un link tipo magic link que loguea al usuario.
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });

    if (error) {
      setErrorMsg("Error: " + error.message);
    } else {
      setMessage("¡Listo! Revisa tu correo, te hemos enviado un enlace para recuperar tu contraseña.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Elementos decorativos de fondo (luces ambientales) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-white mb-2 tracking-tight">Recuperar Contraseña</h1>
            <p className="text-zinc-400 text-sm">Ingresa tu correo y te enviaremos las instrucciones</p>
          </div>

          <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
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

            {/* Mensajes de feedback */}
            {errorMsg && (
              <div className="bg-red-500/10 text-red-400 border border-red-500/20 p-4 rounded-lg text-sm font-medium text-center animate-in fade-in slide-in-from-bottom-2">
                {errorMsg}
              </div>
            )}

            {message && (
              <div className="bg-green-500/10 text-green-400 border border-green-500/20 p-4 rounded-lg text-sm font-medium text-center animate-in fade-in slide-in-from-bottom-2">
                {message}
              </div>
            )}

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar enlace"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-zinc-500">
            <Link href="/auth/login" className="text-white hover:text-red-400 font-medium transition-colors flex items-center justify-center gap-2">
              <span>←</span> Volver al inicio de sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
