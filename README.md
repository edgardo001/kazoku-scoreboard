# Dojo Kazoku — Gestión de Combate

Marcador digital para torneos de karate. Aplicación web de una sola página (`index.html`), sin dependencias externas, que funciona directamente en el navegador.

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

- **Aviso a 15 segundos**: dos bocinas cortas.
- **Fin del combate (00:00)**: tres bocinas (la última más larga), seguidas del modal de aviso.
- Los sonidos usan síntesis de onda sawtooth + square con distorsión para imitar una bocina de árbitro.

#### Modal de fin de combate

Al llegar a cero, después de reproducir el sonido completo, aparece un modal propio de la aplicación con el mensaje **¡TIEMPO! — FIN DEL COMBATE**. No interrumpe el modo pantalla completa del navegador.

### Invertir posiciones

El botón **⇄ INVERTIR POSICIONES** en el panel central intercambia los paneles AKA y AO de lado, para reflejar la posición física de los competidores en el tatami. El indicador Senshu siempre apunta hacia el centro independientemente de la posición.

### Historial

Pestaña **HISTORIAL**: guarda automáticamente el resultado de cada combate (al llegar a cero o al resetear con puntos) en `localStorage`. Muestra hora y marcador final de cada pelea.

### Pantalla completa

Botón **⛶** en el encabezado para activar/desactivar modo pantalla completa. En dispositivos móviles intenta fijar la orientación horizontal.

### Resetear pelea

Enlace **RESETEAR PELEA** en el panel central. Guarda el resultado actual en el historial (si hay puntos) y reinicia marcadores, faltas, Senshu y banderas.

---

## Uso

1. Abrir `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
2. No requiere servidor web ni instalación.
3. Para un uso óptimo en torneos, activar el **modo pantalla completa** y orientar el dispositivo en horizontal.

---

## Compatibilidad

- Diseño responsive: funciona en escritorio, tablet y móvil.
- Modo **landscape** optimizado para pantallas pequeñas.
- Modo **portrait** con layout adaptado para móvil vertical.

---

## Estructura del proyecto

```
kazoku-scoreboard/
└── index.html   # Aplicación completa (HTML + CSS + JS en un solo archivo)
```

---

## Dojo Kazoku — Ken Shin Kan
