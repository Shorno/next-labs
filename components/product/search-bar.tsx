import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function SearchBar() {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-3 w-full text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
        </div>
    )
}
