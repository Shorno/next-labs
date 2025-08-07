import {db} from "@/db";
import {Product, products} from "@/db/schema/product-schema";
import {desc, inArray} from "drizzle-orm";
import {unstable_cache} from "next/cache"

export type ProductsSearchParams = {
    page?: number;
    sort?: string;
    categories?: string[];
}

export const getProducts = unstable_cache(
    async (params?: ProductsSearchParams): Promise<Product[] | undefined> => {
        const {sort, page = 1, categories} = params || {}


        try {
            const limit = 10;
            const offset = (page - 1) * limit;

            let orderBy;

            switch (sort) {
                case "newest":
                    orderBy = desc(products.createdAt)
                    break;
                case "price-high-low":
                    orderBy = desc(products.price)
                    break;
                case "price-low-high":
                    orderBy = products.price
                    break;
                case "rating":
                    orderBy = desc(products.rating)
                    break;
                default:
                    orderBy = desc(products.createdAt);
            }

            let whereClause;
            if (categories && categories.length > 0) {
                const transformedCategories = categories.map(category =>
                    category.replace(/-/g, ' ')
                );
                whereClause = inArray(products.category, transformedCategories);
            }

            return await db.query.products.findMany({
                limit,
                offset,
                orderBy,
                where: whereClause
            })
        } catch (error) {
            console.error(error)
            return undefined;
        }
    },
    ['products'],
    {
        tags: ['products'],
        revalidate: 300
    }
)