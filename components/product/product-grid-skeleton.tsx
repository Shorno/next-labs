import ProductCardSkeleton from "@/components/product/product-card-skeleton";
export default function ProductGridSkeleton() {
    return (
        <div className="container mx-auto px-4 md:px-0 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <ProductCardSkeleton key={index}/>
                ))}
            </div>
        </div>
    )
}


