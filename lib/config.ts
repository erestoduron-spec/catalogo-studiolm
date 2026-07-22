import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Aura25",
    descripcion:
      "Péptidos de colágeno hidrolizado con NAD + Resveratrol. Tu ritual diario desde los 25.",
    logo: undefined, // pon "/logo.png" cuando subas tu logo a la carpeta public
    primario: "#D47FA6",
    secundario: "#DCA5B9",
    fondo: "claro",
    whatsappPrincipal: "526741118360",
    ciudad: "Durango, Durango",
    enlace: "https://aura25th.com/",
  },

  // Tu equipo. Cada quien comparte su liga: aura25th.com/?v=edgar
  // OJO: el WhatsApp va con código de país (52) y solo dígitos, o el botón
  // "Lo quiero" no abre el chat. Se corrigieron los dos números (les faltaba el 52).
  vendedores: [
    { slug: "edgar", nombre: "Edgar Duron", whatsapp: "526741118360" },
    { slug: "nathalie", nombre: "Nathalie Duron", whatsapp: "526771120733" },
  ],

  // Tus dos líneas de producto. El orden aquí es el orden en el catálogo.
  categorias: ["Colágeno", "Maná Café"],

  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
