import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
    return (
        <Card className="w-full max-w-sm mx-auto overflow-hidden">
            <CardContent className="p-0">
                {/* Product Image Skeleton - matches aspect-square container */}
                <div className="relative bg-white p-4 aspect-square">
                    <Skeleton className="w-full h-64" />
                    {/* Stock Badge Skeleton - matches position top-2 right-2 */}
                    <Skeleton className="absolute top-2 right-2 w-20 h-5 rounded" />
                </div>

                {/* Product Details Skeleton - matches space-y-3 */}
                <div className="p-4 space-y-3">
                    {/* Product Title Skeleton - matches text-sm, line-clamp-2 */}
                    <div className="space-y-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>

                    {/* Rating and Reviews Skeleton - matches flex items-center gap-2 */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="w-4 h-4 rounded-sm" />
                            ))}
                        </div>
                        <Skeleton className="h-4 w-24" />
                    </div>

                    {/* Description Skeleton - matches text-xs, line-clamp-2 (optional) */}
                    <div className="space-y-1">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-3/4" />
                    </div>

                    {/* Price Skeleton - matches text-2xl font-bold */}
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-20" />
                    </div>

                    {/* Stock and Delivery Info Skeleton - matches text-xs */}
                    <div className="space-y-1">
                        <Skeleton className="h-3 w-36" />
                        <Skeleton className="h-3 w-40" />
                    </div>

                    {/* Add to Cart Button Skeleton - matches w-full mt-4 */}
                    <Skeleton className="w-full h-10 mt-4" />
                </div>
            </CardContent>
        </Card>
    )
}