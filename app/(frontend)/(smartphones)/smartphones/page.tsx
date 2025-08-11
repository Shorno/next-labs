import {FilterSidebar} from "@/components/smartphones/smartphone-filter-sidebar"
import {Suspense} from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 md:px-0 py-8">
                <div className="flex gap-8">
                    <Suspense>
                        <FilterSidebar/>
                    </Suspense>
                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold mb-2">Smartphones</h1>
                            <p className="text-muted-foreground">
                                Discover the latest smartphones with advanced features and cutting-edge technology.
                            </p>
                        </div>

                        {/* Product Grid Placeholder */}
                    </div>
                </div>
            </div>
        </div>
    )
}
