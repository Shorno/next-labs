"use client"
import {Star, ShoppingCart} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import Image from "next/image"
import {useCartActions} from "@/store/cartStore";
import {Product} from "@/payload-types";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    const {addItem} = useCartActions()


    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i === Math.floor(rating) && rating % 1 !== 0
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                }`}
            />
        ))
    }
    const numericRating = product.rating
    const isLowStock = product.stock < 10
    const isOutOfStock = product.stock === 0

    return (
        <Card
            className="w-full max-w-sm mx-auto overflow-hidden hover:shadow-sm transition-shadow duration-200 flex flex-col shadow-xs p-0 rounded-md">
            <div className="relative bg-white p-4">
                <Image
                    src={product.thumbnail || "/placeholder.svg?height=260&width=256"}
                    alt={product.title}
                    width={260}
                    height={256}
                    className="w-full h-40 object-contain"
                />
                {isLowStock && !isOutOfStock && (
                    <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600 text-white text-xs">
                        Only {product.stock} left
                    </Badge>
                )}
                {isOutOfStock && (
                    <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs">
                        Out of Stock
                    </Badge>
                )}
            </div>

            <div className="p-4 flex flex-col flex-grow -mt-8">
                <div className="flex-grow">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight mb-2">
                        {product.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                        <div>
                            <div className="flex items-center">
                                {renderStars(numericRating)}
                                <span className="text-sm text-gray-600 ml-2">
                                {product.rating}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-gray-900">
                            {product.price}
                        </span>
                    </div>
                    <div className="text-xs text-gray-600">
                        {!isOutOfStock ? (
                            <>
                                <p className="font-medium text-green-700">
                                    ✓ In Stock ({product.stock} available)
                                </p>
                            </>
                        ) : (
                            <p className="font-medium text-red-600">
                                Currently unavailable
                            </p>
                        )}
                    </div>
                </div>

                <Button
                    onClick={() => addItem(product)}
                    className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium disabled:bg-gray-300 disabled:text-gray-500"
                    disabled={isOutOfStock}
                >
                    <ShoppingCart className="w-4 h-4 mr-2"/>
                    {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </Button>
            </div>
        </Card>
    )
}
