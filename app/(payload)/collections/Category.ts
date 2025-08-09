import type {CollectionConfig} from 'payload';

export const Category: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'name',
        group: 'Catalog',
        description: 'Product categories for classification',
        defaultColumns: ['name', 'createdAt'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            maxLength: 100,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                description: 'Unique slug for frontend URLs (auto-generated from name)',
            },
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {readOnly: true},
            defaultValue: () => new Date().toISOString(),
        },
    ], hooks: {
        beforeChange: [
            async ({data, req}) => {
                if (data?.name && (!data.slug || data.slug === '')) {
                    const slugify = (str: string) =>
                        str.toLowerCase().trim().replace(/[\s\W-]+/g, '-');

                    let baseSlug = slugify(data.name);
                    let slug = baseSlug;
                    let count = 0;

                    while (true) {
                        const existing = await req.payload.find({
                            collection: 'categories',
                            where: {slug: {equals: slug}},
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
    }

};
