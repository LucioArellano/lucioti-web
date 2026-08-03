import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resenas = defineCollection({
    loader: glob({ base: './src/content/resenas', pattern: '**/*.{md,mdx}' }),
    schema: () =>
        z.object({
            titulo: z.string(),
            descripcion: z.string(),
            imagen: z.string(),
            categoria: z.string(),
            enlaceAfiliado: z.string().optional(),
            // Usamos coerce.date para transformar automáticamente el texto de la fecha en un objeto Date válido
            fechaPublicacion: z.coerce.date(),
        }),
});

export const collections = { resenas };