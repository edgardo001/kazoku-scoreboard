# Dojo Kazoku — Gestión de Combate

Marcador digital para torneos de karate. Aplicación web de una sola página (`index.html`), sin dependencias externas, que funciona directamente en el navegador. Instalable como app nativa en cualquier dispositivo.

---

## Características

### Marcador (AKA / AO)

- Paneles laterales para los competidores **AKA** (rojo) y **AO** (azul).
- Botones de puntuación: **+1 Yuko**, **+2 Waza-Ari**, **+3 Ippon**, **-1** (corrección).
- Indicador de **Senshu** (botón circular "S"): se activa en el competidor que marcó primero; solo uno puede estar activo a la vez.
- Registro de **faltas progresivas** (5 niveles): Chukoku, Keikoku, Hansoku-Chui, Hansoku, Shikkaku. Clic sobre el nivel para activar/desactivar.

### Cronómetro

- Presets rápidos: **1:00 / 1:30 / 2:00 / 3:00**.
- Botón **START / STOP** para iniciar y pausar.
- **Centésimas** visibles en números pequeños junto al segundero (ej. `02:30.47`).
- Ajuste de tiempo con **flechas ▲▼** sobre los dígitos de minutos y segundos (solo cuando detenido).
- Ajuste con **scroll del mouse** al posicionar el cursor sobre los minutos o los segundos.
- **Barra de progreso** visual que se consume conforme avanza el tiempo.

#### Estados de color del cronómetro

| Estado | Color |
|---|---|
| Detenido | Blanco |
| Funcionando | Amarillo |
| Funcionando con ≤ 15 segundos | Rojo |

#### Sonidos (Web Audio API)

- **Aviso a 15 segundos**: dos bocinas cortas al cruzar el umbral.
- **Fin del combate (00:00)**: tres bocinas simultáneas al modal (la última más larga).
- Los sonidos usan síntesis de onda sawtooth + square con distorsión para imitar una bocina de árbitro.

#### Modal de fin de combate

Al llegar a cero, el modal **¡TIEMPO! — FIN DEL COMBATE** y el sonido se activan simultáneamente. No interrumpe el modo pantalla completa del navegador.

### Invertir posiciones

El botón **⇄ INVERTIR POSICIONES** en el panel central intercambia los paneles AKA y AO de lado, para reflejar la posición física de los competidores en el tatami. El indicador Senshu siempre apunta hacia el centro independientemente de la posición.

### Historial

Pestaña **HISTORIAL**: guarda automáticamente el resultado de cada combate (al llegar a cero o al resetear con puntos) en `localStorage`. Muestra hora y marcador final de cada pelea.

### Pantalla completa

Botón **⛶** en el encabezado para activar/desactivar modo pantalla completa. En dispositivos móviles intenta fijar la orientación horizontal.

### Resetear pelea

Enlace **RESETEAR PELEA** en el panel central. Guarda el resultado actual en el historial (si hay puntos) y reinicia marcadores, faltas, Senshu y banderas.

---

## Instalación como app (PWA)

La aplicación es una **Progressive Web App**: se instala directamente desde el navegador sin pasar por una tienda de apps, funciona sin conexión a internet y abre en pantalla completa con el ícono de Kazoku.

> **Requisito:** la app debe servirse desde un servidor HTTP (no funciona con `file://`). Opciones: servidor local, GitHub Pages, cualquier hosting estático.

### Android / Chrome / Edge (escritorio)

Al abrir la app aparece automáticamente un banner en la parte inferior con el botón **⬇ Instalar**. Al presionarlo se lanza el diálogo nativo del sistema operativo.

### iPhone / iPad (Safari)

Al abrir la app aparece el banner. Al presionar **⬇ Instalar** se muestra un modal con instrucciones:

1. Tocar el botón **Compartir** (□↑) en Safari.
2. Desplazarse y tocar **"Agregar a pantalla de inicio"**.
3. Confirmar tocando **"Agregar"**.

### Notas

- Si la app ya está instalada, el banner no aparece.
- El botón **✕** cierra el banner sin instalar.
- Una vez instalada, el historial de combates persiste entre sesiones gracias a `localStorage`.

---

## Actualizar la app en dispositivos instalados

Cuando publiques una nueva versión, los dispositivos que tienen la app instalada **no se actualizan solos** a menos que se cambie la versión del caché en `sw.js`.

### Pasos para publicar una actualización

1. Realiza los cambios en `index.html` (u otros archivos).
2. Abre `sw.js` y cambia el número de versión:
   ```js
   // Antes
   const VERSION = 'kazoku-v1.0.0';
   // Después (corrección menor)
   const VERSION = 'kazoku-v1.0.1';
   ```
3. Sube los archivos al servidor.

### ¿Qué pasa en los dispositivos?

| Momento | Comportamiento |
|---|---|
| Al abrir la app | El service worker detecta que hay una versión nueva y la descarga en segundo plano |
| Misma sesión | Sigue funcionando con la versión anterior (sin interrupciones) |
| Al cerrar y volver a abrir | Ya carga la versión nueva |

> La estrategia usada es **stale-while-revalidate**: siempre sirve rápido desde caché y actualiza en background, garantizando que la próxima apertura ya tenga los cambios.

### Resumen rápido

**Convención de versiones (semver):**

| Cambio | Ejemplo |
|---|---|
| Corrección de bug | `v1.0.0` → `v1.0.1` |
| Nueva funcionalidad | `v1.0.1` → `v1.1.0` |
| Cambio mayor / rediseño | `v1.1.0` → `v2.0.0` |

```
Nuevo cambio → subir archivos → actualizar VERSION en sw.js → subir sw.js
```

---

## Uso

1. Servir la carpeta desde un servidor HTTP local o remoto.
2. Abrir en un navegador moderno (Chrome, Edge, Firefox, Safari).
3. Opcionalmente instalar como app desde el banner.
4. Activar el **modo pantalla completa** y orientar el dispositivo en horizontal para uso en torneo.

---

## Compatibilidad

- Diseño responsive: funciona en escritorio, tablet y móvil.
- Modo **landscape** optimizado para pantallas pequeñas.
- Modo **portrait** con layout adaptado para móvil vertical.

---

## Estructura del proyecto

```
kazoku-scoreboard/
├── index.html      # Aplicación completa (HTML + CSS + JS)
├── manifest.json   # Configuración PWA
├── sw.js           # Service worker (caché offline)
├── icon-192.png    # Ícono de instalación 192×192
└── icon-512.png    # Ícono de instalación 512×512
```

---

## Dojo Kazoku — Ken Shin Kan
