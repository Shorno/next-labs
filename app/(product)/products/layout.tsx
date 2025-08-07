import FilterSidebar from "@/components/product/filter-sidebar";
import {Suspense} from "react";
import FilterSidebarSkeleton from "@/components/product/FilterSidebarSkeleton";
import MobileFilterDrawer from "@/components/product/mobile-filter-drawer";
import Link from "next/link";
import {SearchBar} from "@/components/product/search-bar";

export default function ProductsLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="container  mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
                        <Link href={"/"} className="text-2xl md:text-3xl font-bold mb-4">TechStore</Link>
                        <div className="flex items-center gap-4">
                            <MobileFilterDrawer/>
                        </div>
                    </div>
                    <div className={"flex justify-center"}>
                        <SearchBar/>
                    </div>
                </div>
            </div>

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
