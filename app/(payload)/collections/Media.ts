import {CollectionConfig} from "payload";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "filename",
        defaultColumns: ["filename", "mimetype", "size", "createdAt"],

    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: "filename",
                    type: "text",
                    required: true,
                },
                {
                    name: "url",
                    type: "text",
                    required: true,
                },
                {
                    name: "createdAt",
                    type: "date",
                    defaultValue: new Date(),
                },
            ]
        },
    ],
}