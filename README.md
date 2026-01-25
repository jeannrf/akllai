# 🗳️ AKLLAI - Plataforma de Voto Informado con IA

> "Proporcionar una plataforma transparente y centralizada que empodere al ciudadano peruano mediante datos abiertos e inteligencia artificial."

## 📖 Sobre el Proyecto

**AKLLAI** (vocablo que evoca "elección" o "selección") es una iniciativa tecnológica nacida para cerrar la brecha de información entre los ciudadanos y los candidatos políticos en Perú. Este proyecto sirve como laboratorio de aprendizaje para implementar arquitecturas modernas de software, incluyendo **RAG (Retrieval-Augmented Generation)**, **Búsqueda Vectorial** y **Desarrollo Web Fullstack**.

## 🛠️ Stack Tecnológico

El proyecto utiliza una arquitectura **Serverless** centrada en **JavaScript/TypeScript**:

- **Frontend & Backend**: Next.js 14 (App Router) + React.
- **Estilos**: Tailwind CSS + Shadcn/ui.
- **Base de Datos & Auth**: Supabase (PostgreSQL + Auth).
- **Motor de IA**: LangChain.js (Orquestación) + OpenAI (Embeddings & LLM).
- **Búsqueda Vectorial**: pgvector (Extensión de PostgreSQL en Supabase).

## ✨ Características (Requerimientos)

El desarrollo se rige por los siguientes módulos funcionales:

### 1. Gestión de Usuarios y Perfiles (RF-01, RF-02)
- **Auth**: Login y Registro seguro (gestionado por Supabase Auth).
- **Onboarding**: Encuesta inicial de preferencias políticas (Economía, Seguridad, Social) editable desde el perfil.
- **Privacidad (RNF-01)**: Los datos sensibles de la encuesta no se utilizan para reentrenar modelos de IA ni se comparten con terceros.

### 2. Explorador de Candidatos (RF-01, RF-04)
- **Cards Informativas**: Visualización clara de la hoja de vida, foto y partido político.
- **Partidos**: Sección dedicada a la ideología y estructura de las organizaciones políticas.

### 3. Motor de Afinidad con IA (RF-01, RF-02)
El corazón del proyecto. Utilizamos Embeddings para calcular la similitud semántica.
- **Algoritmo**: Compara el vector de preferencias del usuario contra los vectores de los Planes de Gobierno almacenados en la base de datos.
- **Match**: Muestra un porcentaje de afinidad en cada card.
- **Transparencia (RNF-02)**: Toda afirmación o resumen generado cita obligatoriamente la fuente oficial (página del plan de gobierno) para evitar difamaciones.

### 4. Educación Cívica (RF-04)
- **Guía para Novatos**: Infografías interactivas sobre cómo votar.
- **Modo Offline (RNF-03)**: Recursos descargables para zonas con baja conectividad.
- **Historial**: Análisis de campañas y mandatos anteriores con estadísticas visuales.
