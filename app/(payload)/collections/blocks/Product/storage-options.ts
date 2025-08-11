import { CollectionConfig } from 'payload';

export const StorageOptions: CollectionConfig = {
    slug: 'storage-options',
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
