import { CONFIG } from "@/lib/config";

/** Pie del catálogo: nombre del negocio, ciudad y horario. */
export function Pie() {
  return (
    <footer className="border-t border-line py-10 text-center text-sm text-ink-mute">
      <p className="font-medium text-ink-soft">{CONFIG.marca.negocio}</p>
      {CONFIG.marca.ciudad && <p className="mt-1">{CONFIG.marca.ciudad}</p>}
      {CONFIG.marca.horario && (
        <div className="mt-4">
          <p className="font-medium text-ink-soft">Horario</p>
          <p className="mt-1 whitespace-pre-line">{CONFIG.marca.horario}</p>
        </div>
      )}
    </footer>
  );
}
