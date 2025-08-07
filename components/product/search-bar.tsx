import {Search} from 'lucide-react'
import {Input} from '@/components/ui/input'

export function SearchBar() {
    return (
        <form className="relative sm:w-full max-w-xl">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6"/>
                <Input
                    type="text"
                    name="search"
                    placeholder="Search products..."
                    className="pl-12 pr-24 h-10"
                />
            </div>
        </form>
    )
}