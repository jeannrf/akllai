# 🗳️ AKLLAI - Plataforma de Voto Informado con IA

<p align="center">
  <img src="/public/images/palacio.jpg" alt="AkllAI Banner" width="100%" style="border-radius: 12px; border: 1px solid #333;">
</p>

> **"Empoderando al ciudadano peruano a través de datos abiertos, transparencia e inteligencia artificial."**

---

## 📖 Sobre el Proyecto

**AKLLAI** (del quechua: *elegir* o *seleccionar*) es una plataforma diseñada para cerrar la brecha informativa entre ciudadanos y candidatos políticos en el Perú. Utilizando tecnologías de vanguardia como **RAG (Retrieval-Augmented Generation)** y **Búsqueda Vectorial**, permitimos a los usuarios encontrar su afinidad política real basándose en datos oficiales, no en retórica.

Este proyecto sirve como un entorno colaborativo para implementar arquitecturas modernas de software y promover la educación cívica digital.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Next.js 15+** | Framework React con App Router para alto rendimiento y SEO. |
| **Supabase** | Backend-as-a-Service (PostgreSQL, Auth, Storage). |
| **Tailwind CSS** | Sistema de diseño moderno y responsivo con estética Dark Mode. |
| **LangChain.js** | Orquestación de lógica de IA y flujos RAG. |
| **OpenAI / Groq** | Embeddings y modelos de lenguaje (LLM). |
| **Lucide React** | Librería de iconos vectoriales consistentes. |

---

## ✨ Características Principales

### 🧠 Motor de Afinidad con IA
El "corazón" de AkllAI. Utilizamos embeddings para calcular la similitud semántica entre las preocupaciones del usuario y los planes de gobierno oficiales.
- **Match Preciso:** Porcentajes de afinidad calculados matemáticamente.
- **Transparencia Total:** Toda respuesta generada por la IA cita obligatoriamente la página y el documento oficial.

### 👤 Perfiles y Onboarding
- **Auth Seguro:** Gestión de usuarios mediante Supabase Auth.
- **Encuesta de Preferencias:** Un flujo interactivo para definir qué temas importan más al ciudadano (seguridad, economía, salud).

### 🏛️ Explorador de Candidatos
- **Dashboard Interactivo:** Visualización de hojas de vida, trayectorias y partidos.
- **Visualización de Datos:** Comparativas gráficas entre propuestas del mismo sector.

---

## 🚀 Guía de Inicio Rápido

Para levantar el proyecto localmente y empezar a colaborar:

### 1. Clonar y Configurar
```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
```

### 2. Variables de Entorno (.env.local)
Asegúrate de configurar las siguientes llaves en tu archivo local:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
# Añadir llaves de OpenAI o Groq de ser necesario
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
```

---

## 📂 Estructura del Proyecto

```text
akllai/
├── app/              # Rutas, layouts y componentes de página (App Router)
├── components/       # Componentes de UI reutilizables (common, layout, ui)
├── lib/              # Configuración de clientes (Supabase, Langchain, etc.)
├── public/           # Assets estáticos (imágenes, logos)
├── types/            # Definiciones de interfaces TypeScript
└── middleware.ts     # Control de sesiones y protección de rutas
```

---

## 🤝 Contribución

Si eres parte del equipo de desarrollo de AkllAI:
1. Asegúrate de tener tu `.env.local` configurado con el proyecto actual de Supabase.
2. Usa el estándar de **2 espacios** para la indentación (configurado en `.editorconfig`).
3. Crea una rama para cada feature: `git checkout -b feature/nombre-de-la-mejora`.
4. Antes de subir cambios, ejecuta `npm run lint` para verificar errores.

---

<p align="center">
  Hecho con ❤️ para el fortalecimiento de la democracia en el Perú.
</p>
