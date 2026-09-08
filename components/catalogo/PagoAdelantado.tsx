"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";

/**
 * Botón discreto "Aparta tu cita". Cerrado no muestra nada; al tocarlo abre
 * un panel con los datos de pago (banco, titular, tarjeta y CLABE) con botón
 * de copiar, más una liga para mandar el comprobante por WhatsApp.
 * Si `marca.pago` no está configurado, el botón no aparece.
 */
export function PagoAdelantado() {
  const pago = CONFIG.marca.pago;
  const [abierto, setAbierto] = useState(false);
  const [copiado, setCopiado] = useState<string | null>(null);

  if (!pago) return null;

  async function copiar(valor: string, cual: string) {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(cual);
      setTimeout(() => setCopiado(null), 1800);
    } catch {
      /* sin portapapeles disponible */
    }
  }

  const waLink = `https://wa.me/${CONFIG.marca.whatsappPrincipal}?text=${encodeURIComponent(
    "Hola, ya hice mi pago para apartar. Aquí va mi comprobante."
  )}`;

  return (
    <section className="no-print mx-auto my-8 w-full max-w-md px-5 text-center">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        className="btn-ghost mx-auto"
        aria-expanded={abierto}
      >
        <Icon name="lucide:calendar-check" size={18} />
        {abierto ? "Ocultar datos de pago" : "Aparta tu cita"}
        <Icon name={abierto ? "lucide:chevron-up" : "lucide:chevron-down"} size={16} />
      </button>

      {abierto && (
        <div className="card mt-3 p-5 text-left">
          <p className="mb-4 text-sm text-ink-mute">
            {pago.nota ??
              "Transfiere o deposita para apartar tu cita y mándanos tu comprobante."}
          </p>

          <dl className="grid gap-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-ink-mute">Banco</dt>
              <dd className="font-semibold">{pago.banco}</dd>
            </div>
            {pago.titular && (
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-mute">A nombre de</dt>
                <dd className="font-semibold">{pago.titular}</dd>
              </div>
            )}
            {pago.tarjeta && (
              <Dato
                etiqueta="Tarjeta"
                valor={pago.tarjeta}
                copiado={copiado === "tarjeta"}
                onCopy={() => copiar(pago.tarjeta!, "tarjeta")}
              />
            )}
            {pago.clabe && (
              <Dato
                etiqueta="CLABE"
                valor={pago.clabe}
                copiado={copiado === "clabe"}
                onCopy={() => copiar(pago.clabe!, "clabe")}
              />
            )}
          </dl>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-marca btn-wa mt-5 w-full"
          >
            <Icon name="lucide:message-circle" size={18} /> Mandar comprobante
          </a>
        </div>
      )}
    </section>
  );
}

function Dato({
  etiqueta,
  valor,
  copiado,
  onCopy,
}: {
  etiqueta: string;
  valor: string;
  copiado: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div className="min-w-0">
        <dt className="text-xs uppercase tracking-wide text-ink-mute">{etiqueta}</dt>
        <dd className="break-all font-semibold tabular-nums">{valor}</dd>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="btn-ghost shrink-0 text-xs"
        style={{ padding: "0.45rem 0.75rem" }}
        aria-label={`Copiar ${etiqueta}`}
      >
        <Icon name={copiado ? "lucide:check" : "lucide:copy"} size={15} />
        {copiado ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}
