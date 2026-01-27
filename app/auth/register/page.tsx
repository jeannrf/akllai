"use client"; // Indica que este componente tiene interacción (clics, escritura)

import { useState } from "react";
import { createClient } from "@/lib/supabase"; // Importamos la función para crear el cliente

export default function RegisterPage() {
  // Inicializamos el cliente de Supabase
  const supabase = createClient();

  // Estos son "estados": guardan lo que el usuario escribe en las cajitas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Esta función se activa cuando el usuario pulsa el botón
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue sola
    setMensaje("Cargando...");

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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Registro en Akllai 🗳️</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Campo para el Email */}
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Campo para la Contraseña */}
          <input
            type="password"
            placeholder="Tu contraseña"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Botón de envío - RF-01 */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        {/* Aquí se mostrará si salió bien o mal el registro */}
        {mensaje && <p className="mt-4 text-center text-sm font-medium">{mensaje}</p>}
      </div>
    </div>
  );
}