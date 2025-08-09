import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
    return (
        <Card className="w-full max-w-sm mx-auto overflow-hidden hover:shadow-sm transition-shadow duration-200 flex flex-col shadow-xs p-0 rounded-md">
            {/* Product Image Skeleton - matches relative bg-white p-4 */}
            <div className="relative bg-white p-4">
                <Skeleton className="w-full h-40" />
            </div>

            {/* Product Details Skeleton - matches p-4 flex flex-col flex-grow -mt-8 */}
            <div className="p-4 flex flex-col flex-grow -mt-8">
                <div className="flex-grow">
                    {/* Product Title Skeleton - matches text-sm font-medium, line-clamp-2, mb-2 */}
                    <div className="mb-2">
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>

                    {/* Rating and Reviews Skeleton - matches flex items-center gap-2 mb-2 */}
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="w-4 h-4 rounded-sm mr-0.5" />
                            ))}
                            <Skeleton className="h-4 w-8 ml-2" />
                        </div>
                    </div>

                    {/* Price Skeleton - matches text-2xl font-bold, mb-2 */}
                    <div className="flex items-center gap-2 mb-2">
                        <Skeleton className="h-8 w-20" />
                    </div>

                    {/* Stock Info Skeleton - matches text-xs */}
                    <div className="text-xs">
                        <Skeleton className="h-3 w-40" />
                    </div>
                </div>

                {/* Add to Cart Button Skeleton - matches w-full mt-4 with yellow styling */}
                <Skeleton className="w-full h-10 mt-4 bg-gray-200" />
            </div>
        </Card>
    )
}
