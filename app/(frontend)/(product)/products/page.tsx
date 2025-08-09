import ProductGrid from "@/components/product/product-grid";
import {Suspense} from "react";
import ProductGridSkeleton from "@/components/product/product-grid-skeleton";
import {SearchParams} from "nuqs";
import {loadSearchParams} from "@/lib/searchParams";
import ProductsSort from "@/components/product/products-sort";
import ProductsSortSkeleton from "@/components/product/ProductsSortSkeleton";
import MobileFilterDrawer from "@/components/product/mobile-filter-drawer";
import {getProducts} from "@/data/payload/payload";

interface PageProps {
    searchParams: Promise<SearchParams>
}


export default async function ProductsPage({searchParams}: PageProps) {
    const searchParamsData = await loadSearchParams(searchParams)

    const result = await getProducts()

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-4 items-end  md:justify-between">
                <div className="text-sm text-muted-foreground">
                    Showing {result.totalDocs} results
                </div>
                <div className="sm:hidden">
                    <MobileFilterDrawer />
                </div>
                <Suspense fallback={<ProductsSortSkeleton/>}>
                    <ProductsSort/>
                </Suspense>
            </div>
            <Suspense fallback={<ProductGridSkeleton/>} key={searchParamsData.page}>
                <ProductGrid/>
            </Suspense>
        </>
    );
}
