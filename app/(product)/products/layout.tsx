import SearchBar from "@/components/product/search-bar";
import FilterSidebar from "@/components/product/filter-sidebar";
import MobileFilterDrawer from "@/components/product/mobile-filter-drawer";

export default function ProductsLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                        <div className="flex items-center gap-4">
                            <MobileFilterDrawer/>
                        </div>
                    </div>
                    <SearchBar/>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex gap-8">
                    <aside className="hidden lg:block flex-shrink-0">
                        <div className="sticky top-8">
                            <FilterSidebar/>
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
