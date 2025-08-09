import {Banner} from "@/app/(frontend)/_components/Banner";
import {CategoryCard} from "@/app/(frontend)/_components/CategoryCard";

const categories = [
    {
        id: 'smartphones',
        name: 'Smartphones',
        slug: 'smartphones',
        image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Latest smartphones and mobile devices'
    },
    {
        id: 'desktop',
        name: 'Desktop Computers',
        slug: 'desktop',
        image: 'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'High-performance desktop computers'
    },
    {
        id: 'laptop',
        name: 'Laptops',
        slug: 'laptop',
        image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Portable laptops for work and gaming'
    },
    {
        id: 'accessories',
        name: 'Accessories',
        slug: 'accessories',
        image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Tech accessories and peripherals'
    }
]

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Banner/>

            <section className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our wide range of products across different categories
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category}/>
                    ))}
                </div>
            </section>
        </main>
    )
}