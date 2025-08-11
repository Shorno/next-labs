import {CollectionConfig} from 'payload';

export const Colors: CollectionConfig = {
    slug: 'colors',
    admin: {
        useAsTitle: 'label',
        group: 'Options',
    },
    access: {read: () => true},
    fields: [
        {
            name: 'label',
            label: 'Color Name',
            type: 'text',
            required: true,
        },
        {
            name: 'value',
            label: 'Value Key',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'Used as the ID/value (e.g., "black", "gold", "gradient")',
            },
        },
        {
            name: 'hex',
            label: 'Hex Color Code',
            type: 'text',
            required: true,
            admin: {
                description: 'Enter a valid hex color code (e.g., #FFFFFF for white)',
            },
        },
    ],
};
