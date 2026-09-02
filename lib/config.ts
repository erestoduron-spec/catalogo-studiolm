// lib/config.ts
import type { Config } from "./tipos";

export const CONFIG: Config = {
  marca: {
    negocio: "Studio LM",
    descripcion:
      "Corte de cabello para dama, caballero y niñ@, color, alisados, permanentes, peinados, maquillajes, tratamientos capilares, pestañas y cejas.",
    logo: "/logo.png",
    primario: "#1B7A3F",
    secundario: "#C9A227",
    fondo: "claro",
    whatsappPrincipal: "5217711839195",
    ciudad: "Pachuca, Hidalgo",
    enlace: "instagram.com/_.studiolm",
    horario:
      "Lunes a viernes de 10:30 am a 8:00 pm\nSábados de 10:30 am a 6:00 pm\nHorario de comida de 3:00 a 4:00 pm",
  },
  vendedores: [
    { slug: "studiolm", nombre: "Studio LM", whatsapp: "5217711839195" },
  ],
  categorias: ["Cortes, color y peinado", "Tratamientos capilares", "Cejas, pestañas y maquillaje"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar precio y cómo agendo?",
};
