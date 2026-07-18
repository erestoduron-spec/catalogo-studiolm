import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS — Aura25.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md).
 *
 *  Copia redactada con lo que dicen TUS empaques, sin promesas médicas
 *  (COFEPRIS): describo ingredientes y ritual, no efectos. Revisa cada
 *  "beneficio" con tu criterio antes de publicar.
 *
 *  PENDIENTES OPCIONALES:
 *   - testimonio para los Maná Café (dejé el tuyo solo en el colágeno)
 *   - marca tu MÁS VENDIDO de la línea Café con `destacado: true`
 *   - si ofreces envío gratis / bono, agrégalo en `bono`
 *   - `escasez` SOLO si es real (nunca inventada)
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  // ── Colágeno Brilliance — producto principal, en 3 packs ─────
  // Objetivo: llevar al cliente al pack de 3. Por eso va primero,
  // es el "destacado" y muestra el mayor ahorro (ancla = precio por
  // pieza suelta × 3). Cada tarjeta tiene su botón "Lo quiero", así
  // el mensaje de WhatsApp ya dice qué pack pidió.
  {
    slug: "colageno-brilliance-3",
    nombre: "Colágeno Brilliance · Pack 3 piezas",
    categoria: "Colágeno",
    imagen: "/productos/colageno-pack-3.webp", // foto con las 3 bolsas: se ve lo que se lleva
    paraQuien:
      "Para quien de los 25 en adelante quiere cuidarse en serio y hacer del colágeno un hábito diario, no un gusto de una sola vez.",
    beneficio:
      "Tu colágeno en pack de 3, al mejor precio por pieza: hidrolizado con NAD y Resveratrol, sabor frambuesa.",
    caracteristicas: [
      "Colágeno hidrolizado tipos I, II y III (bovino y marino)",
      "Con NAD, Resveratrol y antioxidantes",
      "Sabor frambuesa · 300 g cada una",
    ],
    precio: "$2,850",
    precioAntes: "$3,747",
    facilidades: "Ahorras 24%",
    bono: "Envío gratis",
    prueba:
      "Lo tomo yo desde hace 2 años; por eso lo recomiendo con confianza.",
    destacado: true,
  },
  {
    slug: "colageno-brilliance-2",
    nombre: "Colágeno Brilliance · Pack 2 piezas",
    categoria: "Colágeno",
    imagen: "/productos/colageno-pack-2.webp", // foto con las 2 bolsas + frambuesas
    paraQuien:
      "Para quien de los 25 en adelante quiere cuidarse en serio y hacer del colágeno un hábito diario, no un gusto de una sola vez.",
    beneficio:
      "Tu colágeno en pack de 2, con buen ahorro: hidrolizado con NAD y Resveratrol, sabor frambuesa.",
    caracteristicas: [
      "Colágeno hidrolizado tipos I, II y III (bovino y marino)",
      "Con NAD, Resveratrol y antioxidantes",
      "Sabor frambuesa · 300 g cada una",
    ],
    precio: "$2,100",
    precioAntes: "$2,498",
    facilidades: "Ahorras 16%",
    bono: "Envío gratis",
  },
  {
    slug: "colageno-brilliance-1",
    nombre: "Colágeno Brilliance · 1 pieza",
    categoria: "Colágeno",
    imagen: "/productos/colageno-brilliance.webp",
    paraQuien:
      "Para quien quiere empezar su ritual y probar el colágeno antes de llevarse el pack completo.",
    beneficio:
      "Prueba tu colágeno hidrolizado con NAD y Resveratrol, sabor frambuesa, para arrancar tu rutina.",
    caracteristicas: [
      "Colágeno hidrolizado tipos I, II y III (bovino y marino)",
      "Con NAD, Resveratrol y antioxidantes",
      "Sabor frambuesa · 300 g",
    ],
    precio: "$1,249",
    bono: "Envío gratis",
  },

  // ── Línea Maná Café ──────────────────────────────────────────
  {
    slug: "mana-cafe-golden-glow",
    nombre: "Maná Café · Golden Glow",
    categoria: "Maná Café",
    imagen: "/productos/golden-glow.webp",
    paraQuien:
      "Para quien no quiere dejar su café de la mañana y busca que además le sume a su rutina de belleza.",
    beneficio:
      "Tu café dorado de siempre, ahora con biotina y ácido hialurónico: el mismo ritual, con un plus.",
    caracteristicas: [
      "Con biotina y ácido hialurónico",
      "Cafeína natural",
      "Sin azúcar · libre de gluten y soya · 330 g",
    ],
    precio: "$800",
    facilidades: "Envío gratis si llevas 2 cafés o lo acompañas con cualquier colágeno",
    // destacado: true,  // ← marca aquí tu más vendido de la línea Café
  },
  {
    slug: "mana-cafe-latte-glow",
    nombre: "Maná Café · Latte Glow",
    categoria: "Maná Café",
    imagen: "/productos/latte-glow.webp",
    paraQuien:
      "Para quien busca un café distinto, con hongos funcionales, para acompañar su día.",
    beneficio:
      "Un latte cremoso con una mezcla de 10 hongos funcionales —melena de león, reishi, cordyceps y más— para tu ritual diario.",
    caracteristicas: [
      // Los 3 primeros son los que se ven en la tarjeta del catálogo.
      "Café arábica con una mezcla de 10 hongos funcionales",
      "Melena de león, reishi, chaga, maitake, shiitake y cordyceps",
      "Sabor latte · libre de gluten y soya · 330 g",
      // De aquí en adelante SOLO se ven al entrar a la ficha del producto.
      "Turkey tail, agaricus blazei, agaricus subrufescens y antrodia camphorata completan los 10",
      "Una taza al día, en lugar de tu café de siempre",
    ],
    precio: "$750",
    facilidades: "Envío gratis si llevas 2 cafés o lo acompañas con cualquier colágeno",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
