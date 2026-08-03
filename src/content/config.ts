// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Definimos la estructura y reglas estrictas de nuestras reseñas
const resenasCollection = defineCollection({
    type: 'content', 
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        imagen: z.string(),
        // Usamos z.enum() para obligar a usar solo estas categorías exactas
        categoria: z.enum([
            "Cómputo y accesorios",
            "Hogar inteligente",
            "Gaming y entretenimiento",
            "Telefonía y móviles",
            "Wearables"
        ]),
        enlaceAfiliado: z.string().url().optional(), 
        fechaPublicacion: z.coerce.date(),
    }),
});

export const collections = {
    'resenas': resenasCollection,
};