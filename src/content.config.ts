import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';
const servicios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servicios" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    imageBanner: z.string().optional(),
    video: z.string().optional(),
    categoria: z.string().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        title: z.string().optional(),
      })
    ).optional(),
    content: z.string().optional(),
    url: z.string().optional(),
    icon: z.string().optional(),
  }),
});

const paquetes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/paquetes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.string(),
    includes: z.array(z.string()),
    video: z.string().optional(),
    imageBanner: z.string().optional(),
    url: z.string(),
    content: z.string().optional(),
  }),
});

const eventos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/eventos" }),
  schema: z.object({
    id: z.number(),
    nombre: z.string(),
    tipoServicio: z.string(),
    fecha: z.string(),
    ubicacion: z.string(),
    video: z.string().optional(),
    imagen: z.string().optional(),
    descripcion: z.string(),
    serviciosIncluidos: z.array(z.string()),
    duracion: z.string(),
    asistentes: z.number(),
  }),
});

const actividades = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/actividades" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    imageBanner: z.string().optional(),
    video: z.string().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
        title: z.string().optional(),
      })
    ).optional(),
    content: z.string().optional(),
    url: z.string().optional(),
    icon: z.string().optional(),
  }),
});

const inflables = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/inflables" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().optional(),
    imageBanner: z.string().optional(),
    material: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    ).optional(),
    dimensiones: z.string().optional(),
    capacidad: z.string().optional(),
  }),
});

export const collections = {
  servicios,
  paquetes,
  eventos,
  actividades,
  inflables,
};