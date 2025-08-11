import { CollectionConfig } from 'payload';
import { SmartphoneSpecsBlock } from '@/app/(payload)/collections/blocks/smartphone';

export const Product: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
        group: 'Catalog',
        description: 'Manage your products here',
        defaultColumns: ['title', 'category', 'price', 'stock', 'createdAt'],
    },
    access: {
        read: () => true,
        create: ({ req }) => !!req.user,
    },
    fields: [
        // --- BASIC INFO ---
        {
            type: 'row',
            fields: [
                { name: 'title', type: 'text', required: true },
                {
                    name: 'category',
                    type: 'relationship',
                    required: true,
                    relationTo: 'categories',
                    admin: { description: 'Select product category' },
                },
                { name: 'sku', label: 'SKU', type: 'text', required: true, unique: true },
            ],
        },

        { name: 'description', type: 'richText' },
        { name: 'shortDescription', type: 'text', required: true },

        // --- PRICING & STOCK ---
        {
            type: 'row',
            fields: [
                { name: 'price', type: 'number', required: true, min: 0, admin: { step: 1, width: '33%' } },
                { name: 'stock', type: 'number', required: true, min: 0, defaultValue: 0, admin: { width: '33%' } },
                {
                    name: 'status',
                    type: 'select',
                    required: true,
                    admin: { width: '33%' },
                    options: [
                        { label: 'In Stock', value: 'in_stock' },
                        { label: 'Out of Stock', value: 'out_of_stock' },
                        { label: 'Preorder', value: 'preorder' },
                    ],
                },
            ],
        },

        // --- META ---
        {
            type: 'row',
            fields: [
                { name: 'rating', label: 'Average Rating', type: 'number', min: 0, max: 5, defaultValue: 0 },
                { name: 'totalReviews', label: 'Total Reviews', type: 'number', min: 0, defaultValue: 0 },
            ],
        },
        {
            type: 'row',
            fields: [
                { name: 'bestseller', type: 'checkbox', admin: { width: '17%' } },
                { name: 'featured', type: 'checkbox', admin: { width: '17%' } },
                { name: 'newArrival', type: 'checkbox', admin: { width: '17%' } },
                { name: 'onSale', type: 'checkbox', admin: { width: '17%' } },
            ],
        },

        // --- MEDIA ---
        {
            name: 'images',
            label: 'Product Images',
            type: 'array',
            fields: [
                { name: 'url', label: 'Image URL', type: 'text', required: true },
            ],
        },
        { name: 'thumbnail', label: 'Thumbnail Image URL', type: 'text', required: true },

        // --- SPECIFICATIONS ---
        {
            name: 'specifications',
            label: 'Product Specifications',
            type: 'blocks',
            required: true,
            blocks: [
                {
                    ...SmartphoneSpecsBlock,
                },
            ],
        },

        // --- SIDEBAR FIELDS ---
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
                readOnly: true,
                description: 'Auto-generated from title',
            },
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
            defaultValue: () => new Date().toISOString(),
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
            defaultValue: () => new Date().toISOString(),
        },
    ],

    hooks: {
        beforeChange: [
            async ({ data, req }) => {
                if (data?.title && (!data.slug || data.slug === '')) {
                    const slugify = (str: string) =>
                        str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');

                    let baseSlug = slugify(data.title);
                    let slug = baseSlug;
                    let count = 0;

                    while (true) {
                        const existing = await req.payload.find({
                            collection: 'products',
                            where: { slug: { equals: slug } },
                            limit: 1,
                        });
                        if (!existing || existing.docs.length === 0) break;
                        count++;
                        slug = `${baseSlug}-${count}`;
                    }
                    return { ...data, slug };
                }
                return data;
            },
        ],
    },
};
