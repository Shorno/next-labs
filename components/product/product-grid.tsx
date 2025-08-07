import ProductCard from "./product-card"
import {getProducts, ProductsSearchParams} from "@/data/products";
import PaginationControls from "./pagination-controls";


export default async function ProductGrid({page, sort, categories}: ProductsSearchParams) {
    const products = await getProducts({sort, page, categories})

    if (!products) {
        return (
            <div className="container mx-auto px-4 md:px-0 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h1>
            </div>
        )
    }

    if (products.length === 0) {
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
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            <PaginationControls/>
        </div>
    )
}
