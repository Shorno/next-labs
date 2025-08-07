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
    const {page, sort, categories} = await loadSearchParams(searchParams)

    const products = await getProducts()

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <Suspense fallback={<ProductsSortSkeleton/>}>
                    <ProductsSort/>
                </Suspense>
                <div className="text-sm text-muted-foreground">
                    Showing {products?.length} results
                </div>
            </div>

            <Suspense fallback={<ProductGridSkeleton/>} key={page}>
                <ProductGrid page={page} sort={sort} categories={categories}/>
            </Suspense>
        </>
    );
}
