import {CollectionConfig} from "payload";


export const Product: CollectionConfig = {
    slug: "products",
    access: {
        read: () => true, // Public read access
        create: ({req}) => !!req.user, // Allow authenticated users to create products
    },
    admin: {
        useAsTitle: "title",
        group: "Catalog",
        description: "Manage your products here",
        defaultColumns: ["title", "category", "price", "createdAt"],
    },
    fields: [
        // ---------- BASIC INFO ----------
        {
            type: "row",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    maxLength: 255,
                },
                {
                    name: "category",
                    type: "relationship",
                    required: true,
                    relationTo: "categories",
                    admin: {
                        description: 'Select a category for this product',
                    },
                },
                {
                    name: "slug",
                    type: "text",
                    required: true,
                    unique: true,
                    admin: {
                        readOnly: true,
                        width: "30%",
                        position: "sidebar",
                        description: "Auto-generated from title",
                    },
                },
            ],
        },
        {
            type: "row",
            fields: [

                {
                    name: "description",
                    type: "richText",
                },
            ],
        },

        // ---------- PRICING & STOCK ----------
        {
            type: "row",
            fields: [
                {
                    name: "price",
                    type: "number",
                    required: true,
                    defaultValue: 0.0,
                    admin: {step: 1},
                },
                {
                    name: "stock",
                    type: "number",
                    required: true,
                    defaultValue: 0,
                    min: 0,
                },
                {
                    name: "rating",
                    type: "number",
                    required: true,
                    defaultValue: 0.0,
                    min: 0,
                    max: 5,
                },
            ],
        },

        // ---------- MEDIA ----------
        {
            type: "row",
            fields: [
                {
                    name: "thumbnail",
                    type: "text", // switch to upload type if needed
                    required: true,
                    admin: {width: "100%"},
                },
            ],
        },

        {
            type: "row",
            fields: [
                {
                    name: "createdAt",
                    type: "date",
                    admin: {readOnly: true, width: "50%"},
                    defaultValue: () => new Date().toISOString(),
                },
                {
                    name: "updatedAt",
                    type: "date",
                    admin: {readOnly: true, width: "50%"},
                    defaultValue: () => new Date().toISOString(),
                },
            ],
        },
    ],

    hooks: {
        beforeChange: [
            async ({data, req}) => {
                if (data?.title && (!data.slug || data.slug === "")) {
                    const slugify = (str: string) =>
                        str.toLowerCase().trim().replace(/[\s\W-]+/g, "-");

                    let baseSlug = slugify(data.title);
                    let slug = baseSlug;

                    let count = 0;
                    while (true) {
                        const existing = await req.payload.find({
                            collection: "products", // 🚨 cast to CollectionSlug if using TS strict mode
                            where: {
                                slug: {equals: slug},
                            },
                            limit: 1,
                        });
                        if (!existing || existing.docs.length === 0) break;
                        count++;
                        slug = `${baseSlug}-${count}`;
                    }

                    return {...data, slug};
                }
                return data;
            },
        ],
    },
};
