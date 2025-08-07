import Image from 'next/image'
import Link from "next/link";

export function Banner() {
    return (
        <div className="relative w-full h-[400px] bg-gray-100 overflow-hidden">
            <Image
                src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="E-commerce banner"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">TechStore</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl">
                        Discover the latest technology products at unbeatable prices
                    </p>
                    <Link href={"/products"}
                          className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}