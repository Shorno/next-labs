import {Product} from "@/payload-types";
import {payload} from "@/lib/payload";
import {PaginatedDocs} from "payload";
import {ProductsSearchParams} from "@/components/product/product-grid";


export async function getProducts(params?: ProductsSearchParams): Promise<PaginatedDocs<Product>> {
    // const {page = 1, sort, categories = []} = params || {}
    //
    // const where: Record<string, any> = {};
    // // ✅ category filter
    // if (categories && categories.length > 0) {
    //     where["category.slug"] = {in: ["electronics-technologys"] };
    // }

    // ✅ sorting
    //
    // let sortField = "createdAt";
    // let sortOrder: "asc" | "desc" = "desc";
    //
    //
    // if (sort === "price-low-high") {
    //     sortField = "price";
    //     sortOrder = "asc";
    // } else if (sort === "price-high-low") {
    //     sortField = "price";
    //     sortOrder = "desc";
    // } else if (sort === "rating") {
    //     sortField = "rating";
    //     sortOrder = "desc";
    // }
    //

    return await payload.find({
        collection: "products",
        // where : {
        //     ...where,
        //     "category.slug": {
        //         equals: "electronics-technology",
        //     },
        // },
        // // sort: `${sortField}:${sortOrder}`,
        // page,
        // limit: 12,
        // depth: 1,
    })
}


