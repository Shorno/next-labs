import { Block } from 'payload';

export const SmartphoneSpecsBlock: Block = {
    slug: 'smartphoneSpecs',
    labels: {
        singular: 'Smartphone Specs',
        plural: 'Smartphone Specs',
    },
    imageURL : '/images/smartphone-specs.jpg',
    imageAltText : 'Smartphone Specs Block Image',
    fields: [
        {
            name: 'brand',
            label: 'Brand',
            type: 'relationship',
            relationTo: 'brands',
            required: true,
        },
        {
            name: 'screenSize',
            label: 'Screen Size',
            type: 'relationship',
            relationTo: 'screen-sizes',
            required: true,
        },
        {
            name: 'ram',
            label: 'RAM',
            type: 'relationship',
            relationTo: 'ram-options',
            required: true,
        },
        {
            name: 'storage',
            label: 'Internal Storage',
            type: 'relationship',
            relationTo: 'storage-options',
            required: true,
        },
        {
            name: 'processor',
            label: 'Processor (Chipset)',
            type: 'relationship',
            relationTo: 'processors',
            required: true,
            filterOptions: ({ siblingData }) => {
                const sd = siblingData as { brand?: string | null };

                if (sd && sd.brand) {
                    return { brand: { equals: sd.brand } };
                }
                return true;
            },
        },
        {
            name: 'network',
            label: 'Network & Connectivity',
            type: 'relationship',
            relationTo: 'networks',
            hasMany: true,
            required: true,
        },
        {
            name: 'colors',
            label: 'Available Colors',
            type: 'relationship',
            relationTo: 'colors',
            hasMany: true,
            required: true,
        },
    ],
};
