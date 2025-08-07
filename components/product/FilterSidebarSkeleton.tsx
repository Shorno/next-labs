import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Skeleton} from "@/components/ui/skeleton"

export default function FilterSidebarSkeleton() {
    return (
        <div className="w-60 space-y-6">
            <Card className={"rounded-xs"}>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold">Categories</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="space-y-3">
                        {/* Render 8 category skeleton items to match the original */}
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Skeleton className="h-4 w-4 rounded-sm" />
                                <div className="flex-1">
                                    <Skeleton className="h-4 w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Skeleton for clear filters button */}
                    <Skeleton className="mt-4 h-9 w-full rounded-md" />
                </CardContent>
            </Card>

            <Card className={"rounded-xs"}>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold">Availability</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Skeleton className="h-4 w-4 rounded-sm" />
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Skeleton className="h-4 w-4 rounded-sm" />
                            <div className="flex items-center space-x-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-4 w-8" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}