// lib/config.ts
import type { Config } from "./tipos";

export const CONFIG: Config = {
  marca: {
    negocio: "Studio LM",
    descripcion:
      "Cortes, color, alaciados y peinados para hombre y mujer. También cejas, pestañas y tratamientos capilares. Pachuca, Hidalgo.",
    logo: "/logo.png",
    primario: "#1B7A3F",
    secundario: "#C9A227",
    fondo: "claro",
    whatsappPrincipal: "5217711839195",
    ciudad: "Pachuca, Hidalgo",
    enlace: "instagram.com/_.studiolm",
  },
  vendedores: [
    { slug: "studiolm", nombre: "Studio LM", whatsapp: "5217711839195" },
  ],
  categorias: ["Cortes, color y peinado", "Tratamientos capilares", "Cejas y pestañas"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar precio y cómo agendo?",
};
