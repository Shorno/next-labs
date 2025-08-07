import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSortSkeleton() {
    return (
        <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="w-48 h-10" />
        </div>
    )
}