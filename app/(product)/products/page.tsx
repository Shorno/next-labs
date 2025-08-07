import ProductGrid from "@/components/product/product-grid";
import {Suspense} from "react";
import ProductGridSkeleton from "@/components/product/product-grid-skeleton";
import {SearchParams} from "nuqs";
import {loadSearchParams} from "@/lib/searchParams";
import {getProducts} from "@/data/products";
import ProductsSort from "@/components/product/products-sort";
import ProductsSortSkeleton from "@/components/product/ProductsSortSkeleton";

interface PageProps {
    searchParams: Promise<SearchParams>
}


export default async function ProductsPage({searchParams}: PageProps) {
    const searchParamsData = await loadSearchParams(searchParams)

    const products = await getProducts()

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-4 items-end  md:justify-between">
                <div className="text-sm text-muted-foreground">
                    Showing {products?.length} results
                </div>
                <Suspense fallback={<ProductsSortSkeleton/>}>
                    <ProductsSort/>
                </Suspense>
            </div>
            <Suspense fallback={<ProductGridSkeleton/>} key={searchParamsData.page}>
                <ProductGrid searchParams={searchParamsData}/>
            </Suspense>
        </>
    );
}
