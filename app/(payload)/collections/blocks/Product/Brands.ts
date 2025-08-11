import { CollectionConfig } from 'payload';

export const Brands: CollectionConfig = {
    slug: 'brands',
    admin: {
        useAsTitle: 'name',
        group: 'Options',
    },
    access: { read: () => true },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'logoUrl',
            label: 'Brand Logo URL',
            type: 'text',
        },
    ],
};
