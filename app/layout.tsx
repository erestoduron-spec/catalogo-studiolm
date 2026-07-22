import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";
import { estiloMarca, claseTema } from "@/lib/marca";

export const metadata: Metadata = {
  // ⚠️ Tu dirección de Vercel. Si algún día cambias el nombre del proyecto
  // o le pones dominio propio, actualiza esta línea o la vista previa
  // al compartir seguirá apuntando al lugar viejo.
  metadataBase: new URL("https://catalogo-vivo-liard.vercel.app"),
  title: `${CONFIG.marca.negocio} · Catálogo`,
  description: CONFIG.marca.descripcion,
  openGraph: {
    title: `${CONFIG.marca.negocio} · Catálogo`,
    description: CONFIG.marca.descripcion,
    type: "website",
    // Imagen que aparece al compartir por WhatsApp o Facebook.
    // Va en JPG y en 1200x630 porque es lo que mejor leen esas apps.
    images: [{ url: "/portada.jpg", width: 1200, height: 630, alt: CONFIG.marca.negocio }],
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
