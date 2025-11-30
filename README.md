📘 README.md — AILucid Studio Web Architecture
# AILucid Studio — Modular Web Architecture

Sitio web oficial del laboratorio **AILucid Studio**, diseñado bajo una arquitectura modular, escalable y completamente estática.  
El objetivo del proyecto es construir un ecosistema web que represente:

- El Laboratorio Central  
- Los roles oficiales  
- El sistema interno  
- El modelo de colaboración  
- La filosofía de trabajo  
- La identidad visual futurista y minimalista del estudio  

Este repositorio está preparado para ser potenciado por **GitHub Copilot**.  
Más abajo se describen instrucciones específicas para la IA.

---

# 🏗️ 1. Objetivo del Proyecto

Construir un sitio web modular basado en **HTML + CSS + JS (vanilla)** que pueda crecer de forma ordenada a medida que el laboratorio evoluciona.

El sitio debe ser:

- Modular  
- Expandible  
- Consistente  
- Minimalista futurista  
- 100% estático  

---

# 🧱 2. Arquitectura de Carpetas



/ (root)
│ index.html
│
├─ css/
│ └── main.css
│
├─ js/
│ └── main.js
│
├─ assets/
│ ├── logo.png
│ ├── logo.png
│ └── textures/
│
├─ laboratorio/
│ └── index.html
│
├─ sistema/
│ └── index.html
│
├─ roles/
│ ├── index.html
│ ├── arquitecto-notion.html
│ ├── community-manager-ia.html
│ ├── content-creator-ia.html
│ └── integrador-sistemas.html
│
├─ colaborar/
│ └── index.html
│
└─ comunidad/
└── index.html


---

# 🧩 3. Componentes Reutilizables

Todos los estilos del sitio provienen del `index.html` original del fundador.  
**Copilot debe reutilizar exactamente estas clases:**

### Layout
- `<header>`, `<footer>`
- `.wrap`
- `.nav`, `.brand`, `.logo`

### Contenido
- `.hero`
- `.card`, `.tile`
- `.lead`, `.text-spaced`
- `.cols`
- `.list`, `.li`, `.dot`
- `.chips`, `.chip`
- `.cta-row`, `.btn`, `.btn.primary`

### Bloque de Fórmula
```html
<div class="tile">
  <p><strong>Fórmula:</strong></p>
  <p class="text-spaced">Valor = (Atención × Transformación × Acción) ÷ Entropía</p>
</div>

🎨 4. Estilos Globales (CSS)

Todos los estilos del sitio deben estar en:

/css/main.css


Copilot debe extraer el <style> del index.html original y pegarlo allí.

Cada página debe incluir:

<link rel="stylesheet" href="/css/main.css">

🔧 5. JavaScript Global

Archivo requerido:

/js/main.js


Debe contener:

Lógica del modal de email que ya existe

Utilidades globales (copiar email, abrir Gmail, manejar mailto)

Comportamientos compartidos

Importación:

<script src="/js/main.js"></script>

📄 6. Plantilla Base para Páginas Nuevas

Copilot debe usar esta estructura en todas las nuevas páginas:

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{TITLE}} — AILucid Studio</title>
    <meta name="description" content="{{DESCRIPTION}}" />
    <link rel="stylesheet" href="/css/main.css" />
  </head>

  <body>
    <!-- HEADER global -->
    <header>
      <!-- Copiar header del Home -->
    </header>

    <main class="wrap">
      {{PAGE_CONTENT}}
    </main>

    <!-- FOOTER global -->
    <footer>
      <!-- Copiar footer del Home -->
    </footer>

    <script src="/js/main.js"></script>
  </body>
</html>

📌 7. Contenido que debe incluir cada página
/index.html (Home)

Qué es AILucid Studio

Áreas clave

Cómo trabajamos

Llamadas a la acción

Enlaces a laboratorio, sistema, roles, comunidad

/laboratorio/index.html

Basado en el Corporate Overview:

Misión y visión

Pilares: Excelencia, Colaboración, Impacto

Áreas del laboratorio

Estructura distribuida

Modelo de crecimiento (Niveles 1, 2 y 3)

/sistema/index.html

Basado en los documentos del sistema interno:

Sprints cortos

Roles fluidos

Fórmulas clave del laboratorio

Herramientas internas (Notion, IA, Automatizaciones)

/roles/index.html

Grid de tarjetas con todos los roles:

Arquitecto en Notion

Community Manager IA

AI Content Creator

Integrador de Sistemas

Otros futuros roles

Cada tarjeta debe tener:

Título

3 bullets

Botón: “Ver rol”

Páginas individuales de roles

Cada rol debe tener:

Hero (nombre + descripción)

Fórmula del rol (si existe)

Responsabilidades

Requisitos obligatorios

Habilidades deseables

Proceso de selección

CTA “Aplicar al rol”

/colaborar/index.html

Debe reunir:

Cómo colaborar como talento

Sistema de pago flexible (CM IA)

Proyectos piloto para empresas

CTA final

/comunidad/index.html

Basado en “Community Support”:

Filosofía de interacción

Ejemplos de respuestas

Enlaces a redes

Formulario de contacto

🤖 8. Instrucciones para GitHub Copilot

Copilot debe seguir estas reglas al generar cualquier archivo del proyecto:

GitHub Copilot — reglas obligatorias:

1. Siempre usa la arquitectura modular definida en este README.
2. No crear CSS inline; usar siempre /css/main.css.
3. No duplicar header ni footer; copiar del Home.
4. Todas las páginas deben incluir main.css y main.js.
5. Usa siempre .wrap, .tile, .cols, .card, .cta-row, .btn, etc.
6. Para nuevas páginas, usa la plantilla base.
7. Para nuevos roles, crear un archivo dentro de /roles/ y actualizar /roles/index.html.
8. Mantener el estilo futurista minimalista del diseño original.
9. Mantener todo el sitio 100% estático (sin frameworks).
10. Mantener orden de carpetas estrictamente igual al definido.

🚀 9. Deploy Recomendado

GitHub Pages

Netlify

Vercel (sin SSR)

✔️ Estado del Proyecto

Esta arquitectura sirve como punto de partida para:

Construcción incremental

Integración con Notion + automatizaciones

Escalamiento del laboratorio

Futuras versiones de la plataforma colaborativa

🧠 AILucid Studio

Human Intelligence + AI
Impulsando el futuro a través de la inteligencia.


---
