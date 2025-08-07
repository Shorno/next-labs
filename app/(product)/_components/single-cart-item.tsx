import Image from "next/image";
import {Product} from "@/db/schema/product-schema";

interface CartItemProps {
    product: Product;
}

export default function SingleCartItem({product}: CartItemProps) {
    return (
        <div className="flex items-center gap-3 p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex-shrink-0">
                <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-md border p-1"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 ">
                    {product.title}
                </h3>
            </div>
            <div className="flex-shrink-0">
                <p className="text-sm font-semibold text-gray-900">
                    {product.price}
                </p>
            </div>
        </div>
    );
}
