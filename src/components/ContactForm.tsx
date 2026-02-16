"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { PRACTICE_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[var(--border)] p-8 md:p-12 text-center">
        <p className="font-serif text-2xl text-[var(--foreground)] mb-2">
          Mensaje enviado
        </p>
        <p className="text-[var(--muted)]">
          Hemos recibido su mensaje. Nos pondremos en contacto a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
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
          aria-describedby={errors.nombre ? "nombre-error" : undefined}
        />
        {errors.nombre && (
          <p id="nombre-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
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
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Teléfono *
        </label>
        <input
          id="telefono"
          type="tel"
          {...register("telefono")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          autoComplete="tel"
          aria-invalid={!!errors.telefono}
          aria-describedby={errors.telefono ? "telefono-error" : undefined}
        />
        {errors.telefono && (
          <p id="telefono-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.telefono.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Área de interés *
        </label>
        <select
          id="area"
          {...register("area")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)]"
          aria-invalid={!!errors.area}
          aria-describedby={errors.area ? "area-error" : undefined}
        >
          <option value="">Seleccione un área</option>
          {PRACTICE_AREAS.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.title}
            </option>
          ))}
        </select>
        {errors.area && (
          <p id="area-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.area.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-[var(--foreground)] mb-2">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          rows={5}
          {...register("mensaje")}
          className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--gold)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] resize-y"
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.mensaje.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
