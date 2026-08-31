import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";
import { estiloMarca, claseTema } from "@/lib/marca";

// Tu dirección pública. En Vercel se toma sola del dominio del proyecto;
// en tu compu usa localhost. Así la vista previa al compartir apunta bien
// sin que tengas que cambiar nada a mano.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${CONFIG.marca.negocio} · Catálogo`,
  description: CONFIG.marca.descripcion,
  openGraph: {
    title: `${CONFIG.marca.negocio} · Catálogo`,
    description: CONFIG.marca.descripcion,
    type: "website",
    // Imagen que aparece al compartir por WhatsApp o Facebook.
    images: [{ url: "/logo.png", width: 1200, height: 675, alt: CONFIG.marca.negocio }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" style={estiloMarca(CONFIG.marca)} className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${claseTema(CONFIG.marca)} min-h-full`}>
        <div className="bg-marca" />
        {children}
      </body>
    </html>
  );
}
