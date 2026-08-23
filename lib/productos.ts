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
    nombre: "Pack Transformación Total · Colágeno 3 piezas",
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
    linkPago: "https://mpago.la/32xVd17", // ⚠️ VERIFICA que abra con este monto
    precioAntes: "$3,747",
    facilidades: "Ahorras 24%",
    bono: "Envío gratis",
    // Aquí iba el testimonio propio. Se quitó: en la página del propio vendedor
    // se percibe como argumento de venta, no como prueba (probado con familiares).
    // Este espacio es para el testimonio de UNA CLIENTA, cuando tengas el primero.
    destacado: true,
  },
  {
    slug: "colageno-brilliance-2",
    nombre: "Pack Bienestar · Colágeno 2 piezas",
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
    linkPago: "https://mpago.la/2avBzQg", // ⚠️ VERIFICA que abra con este monto
    precioAntes: "$2,498",
    facilidades: "Ahorras 16%",
    bono: "Envío gratis",
  },
  {
    slug: "colageno-brilliance-1",
    nombre: "Pack de Prueba · Colágeno 1 pieza",
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
    linkPago: "https://mpago.la/2Vi5hU4", // ⚠️ VERIFICA que abra con este monto
    bono: "Envío gratis",
  },
  {
    slug: "combo-colageno-cafe-gold",
    nombre: "Combo Ritual · Colágeno + LUX coffee Gold",
    categoria: "Colágeno",
    paraQuien:
      "Para quien quiere el colágeno en polvo y también el café dorado que trae colágeno, todo junto y con el envío incluido.",
    beneficio:
      "Tu colágeno de frambuesa más el LUX coffee Gold en un solo pedido, sin costo de envío.",
    caracteristicas: [
      "Colágeno Pack de Prueba (300 g) más 1 LUX coffee Gold (330 g)",
      "Golden Glow: café arábica con colágeno, biotina y ácido hialurónico (contiene leche)",
      "Colágeno hidrolizado tipos I, II y III, sabor frambuesa",
    ],
    precio: "$2,049",
    facilidades: "El colágeno en $1,249 y el café en $800, juntos",
    bono: "Envío gratis",
  },

  // ── Línea Maná Café ──────────────────────────────────────────
  // Los cafés se venden EN DÚO, no sueltos. Motivo: el envío ($180)
  // se come el margen en una pieza suelta. Quien quiera solo uno,
  // lo pide junto con cualquier colágeno y va sin costo de envío.
  {
    slug: "mana-cafe-duo",
    nombre: "Pack Ritual Completo · LUX coffee Gold + Latte",
    categoria: "Maná Café",
    imagen: "/productos/lux-coffee-duo.jpg",
    paraQuien:
      "Para quien quiere sus dos rituales: el café dorado de la mañana y el latte de hongos para acompañar el resto del día.",
    beneficio:
      "Los dos LUX coffee juntos y con envío incluido: el mismo ritual de siempre, en dos versiones.",
    caracteristicas: [
      "Golden Glow: café arábica con colágeno, biotina y ácido hialurónico (contiene leche)",
      "Latte Glow: café arábica con una mezcla de 10 hongos funcionales",
      "330 g cada uno · libre de gluten y soya",
      // De aquí en adelante solo se ve al entrar a la ficha:
      "¿Solo quieres uno? Pídelo junto con cualquier colágeno y también va con envío gratis",
      "Melena de león, reishi, chaga, maitake, shiitake, cordyceps, turkey tail, agaricus y antrodia camphorata",
    ],
    precio: "$1,600",
    linkPago: "https://mpago.la/1niydkC", // Mercado Pago: el dueño editó el monto a $1,600 (mismo link)
    facilidades: "Te salen en $800 cada uno",
    bono: "Envío gratis",
    destacado: true,
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
