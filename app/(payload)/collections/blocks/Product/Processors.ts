import { CollectionConfig } from 'payload';

export const Processors: CollectionConfig = {
    slug: 'processors',
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
        },
        {
            name: 'brand',
            type: 'relationship',
            relationTo: 'brands',
            required: true,
            admin: { description: 'Only processors linked to a specific brand' },
        },
    ],
};
