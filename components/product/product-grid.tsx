import ProductCard from "./product-card"
import PaginationControls from "./pagination-controls";
import {getProducts} from "@/data/payload/payload";


export type ProductsSearchParams = {
    page: number;
    sort: string;
    categories: string[];
}

interface ProductGridProps {
    searchParams: ProductsSearchParams;
}

export default async function ProductGrid({searchParams}: ProductGridProps) {
    const result = await getProducts(searchParams)

    if (!result) {
        return (
            <div className="container mx-auto px-4 md:px-0 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h1>
            </div>
        )
    }

    if (result.totalDocs === 0) {
        return (
            <div className="container mx-auto  text-center px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h1>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
        )
    }


    return (
        <div className="container mx-auto px-4 md:px-0 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {result.docs.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            <PaginationControls/>
        </div>
    )
}
