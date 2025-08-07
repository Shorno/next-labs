import Link from "next/link";
import MobileFilterDrawer from "@/components/product/mobile-filter-drawer";
import {SearchBar} from "@/components/product/search-bar";
import Cart from "@/app/(product)/_components/cart";

export default function Navbar() {
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
                {/* Top row - Logo, Filter, Cart */}
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <Link href={"/"} className="text-xl sm:text-2xl md:text-3xl font-bold">
                            TechStore
                        </Link>
                    </div>

                    {/* Desktop search bar */}
                    <div className="hidden md:block flex-1 max-w-md mx-8">
                        <SearchBar/>
                    </div>
                    <Cart/>
                </div>

                {/* Mobile search bar */}
                <div className="md:hidden pb-4">
                    <SearchBar/>
                </div>

                {/* Desktop filter (if needed) */}
                <div className="hidden sm:block md:hidden py-2">
                    <MobileFilterDrawer/>
                </div>
            </div>
        </div>
    );
}
