import { CollectionConfig } from 'payload';

export const Networks: CollectionConfig = {
    slug: 'networks',
    admin: {
        useAsTitle: 'label',
        group: 'Options',
    },
    access: { read: () => true },
    fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true, unique: true },
    ],
};
