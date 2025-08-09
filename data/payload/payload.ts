import {Product} from "@/payload-types";
import {payload} from "@/lib/payload";
import {PaginatedDocs} from "payload";


export async function getProducts(): Promise<PaginatedDocs<Product>> {
    return await payload.find({collection: "products", depth: 0},)
}


