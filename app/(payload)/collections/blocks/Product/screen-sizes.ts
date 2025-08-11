import { CollectionConfig } from 'payload';

export const ScreenSizes: CollectionConfig = {
    slug: 'screen-sizes',
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
