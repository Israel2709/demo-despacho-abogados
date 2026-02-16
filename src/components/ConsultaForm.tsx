"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { consultaSchema, type ConsultaFormData } from "@/lib/schemas";
import { PRACTICE_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const TIPO_ASUNTO = [
  "Derecho corporativo",
  "Litigio civil o mercantil",
  "Derecho laboral",
  "Contratos y cumplimiento",
  "Asesoría preventiva",
  "Otro",
];

const URGENCIA = [
  { value: "baja", label: "Baja - Puede esperar" },
  { value: "media", label: "Media - En las próximas semanas" },
  { value: "alta", label: "Alta - Requiere atención pronto" },
];

const MODALIDAD = [
  { value: "presencial", label: "Presencial" },
  { value: "virtual", label: "Virtual" },
];

const STORAGE_KEY = "herrera-ultima-consulta";

export function ConsultaForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ConsultaFormData>({
    resolver: zodResolver(consultaSchema),
  });

  const formValues = watch();

  useEffect(() => {
    if (formValues.tipoAsunto || formValues.descripcion) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
      } catch {
        // ignore
      }
    }
  }, [formValues]);

  const onSubmit = async (data: ConsultaFormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Consulta form submitted:", data);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[var(--border)] p-8 md:p-12 text-center max-w-2xl mx-auto">
        <p className="font-serif text-2xl md:text-3xl text-[var(--foreground)] mb-4">
          Consulta registrada
        </p>
        <p className="text-[var(--muted)] mb-6">
          Hemos recibido su solicitud de consulta. Un miembro de nuestro equipo se pondrá en contacto en un plazo de 24 horas hábiles para confirmar la cita.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Si requiere atención urgente, llame al {"+52 55 6789 1234"}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-2xl"
      noValidate
    >
      <div>
        <label htmlFor="tipoAsunto" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Tipo de asunto *
        </label>
        <select
          id="tipoAsunto"
          {...register("tipoAsunto")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          aria-invalid={!!errors.tipoAsunto}
        >
          <option value="">Seleccione el tipo de asunto</option>
          {TIPO_ASUNTO.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.tipoAsunto && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.tipoAsunto.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Breve descripción del asunto *
        </label>
        <textarea
          id="descripcion"
          rows={5}
          {...register("descripcion")}
          placeholder="Describa de forma general su situación o consulta..."
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] resize-y"
          aria-invalid={!!errors.descripcion}
        />
        {errors.descripcion && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.descripcion.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="urgencia" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Urgencia *
        </label>
        <select
          id="urgencia"
          {...register("urgencia")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          aria-invalid={!!errors.urgencia}
        >
          <option value="">Seleccione el nivel de urgencia</option>
          {URGENCIA.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
        {errors.urgencia && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.urgencia.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="modalidad" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Modalidad preferida *
        </label>
        <select
          id="modalidad"
          {...register("modalidad")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          aria-invalid={!!errors.modalidad}
        >
          <option value="">Seleccione la modalidad</option>
          {MODALIDAD.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
        {errors.modalidad && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.modalidad.message}
          </p>
        )}
      </div>

      <div className="border-t border-[var(--border)] pt-6">
        <h3 className="font-serif text-lg font-medium text-[var(--foreground)] mb-4">
          Datos de contacto
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Nombre *
            </label>
            <input
              id="nombre"
              type="text"
              {...register("nombre")}
              className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
              autoComplete="name"
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.nombre.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Correo electrónico *
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
              autoComplete="email"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="telefono" className="block text-sm font-medium text-[var(--foreground)] mb-2">
            Teléfono *
          </label>
          <input
            id="telefono"
            type="tel"
            {...register("telefono")}
            className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] md:max-w-xs"
            autoComplete="tel"
            aria-invalid={!!errors.telefono}
          />
          {errors.telefono && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.telefono.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando…" : "Solicitar consulta"}
      </Button>
    </form>
  );
}
