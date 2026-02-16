import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(10, "Ingrese un teléfono válido"),
  area: z.string().min(1, "Seleccione un área de interés"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const consultaSchema = z.object({
  tipoAsunto: z.string().min(1, "Seleccione el tipo de asunto"),
  descripcion: z.string().min(20, "La descripción debe tener al menos 20 caracteres"),
  urgencia: z.string().min(1, "Seleccione el nivel de urgencia"),
  modalidad: z.string().min(1, "Seleccione la modalidad"),
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  telefono: z.string().min(10, "Ingrese un teléfono válido"),
});

export type ConsultaFormData = z.infer<typeof consultaSchema>;
