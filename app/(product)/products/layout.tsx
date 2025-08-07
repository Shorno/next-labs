import FilterSidebar from "@/components/product/filter-sidebar";
import {Suspense} from "react";
import FilterSidebarSkeleton from "@/components/product/FilterSidebarSkeleton";
import Navbar from "@/app/(product)/_components/navbar";

export default function ProductsLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex gap-8">
                    <aside className="hidden lg:block flex-shrink-0">
                        <div className="sticky top-8">
                            <Suspense fallback={<FilterSidebarSkeleton/>}>
                                <FilterSidebar/>
                            </Suspense>
                        </div>
                    </aside>

                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
