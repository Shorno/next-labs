import {db} from "@/db";
import {Product, products} from "@/db/schema/product-schema";
import {desc, inArray} from "drizzle-orm";

export type ProductsSearchParams = {
    page?: number;
    sort?: string;
    categories?: string[];
}

export const getProducts = async (params?: ProductsSearchParams): Promise<Product[] | undefined> => {
    const {sort, page = 1, categories} = params || {};

    console.log(categories)

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
            whereClause = inArray(products.category, categories);
        }


        return await db.query.products.findMany({
            limit,
            offset,
            orderBy,
            where: whereClause
        })
    } catch (error) {
        console.error(error)
    }
}