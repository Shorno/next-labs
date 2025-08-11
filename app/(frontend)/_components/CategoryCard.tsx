import Image from 'next/image'
import Link from 'next/link'
import {Card, CardContent} from '@/components/ui/card'

interface Category {
    id: string
    name: string
    slug: string
    image: string
    description: string
}

interface CategoryCardProps {
    category: Category
}

export function CategoryCard({category}: CategoryCardProps) {
    return (
        <Link href={category.slug}>
            <Card className="group cursor-pointer transition-transform hover:scale-105 p-0">
                <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {category.name}
                        </h3>
                        <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}