"use client"

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {parseAsString, useQueryState} from "nuqs";


const sortingOptions: { key: string, value: string }[] = [
    {key: "newest", value: "Newest First"},
    {key: "price-low-high", value: "Price: Low to High"},
    {key: "price-high-low", value: "Price: High to Low"},
    {key: "rating", value: "Customer Rating"},
];


export default function ProductsSort() {
    const [sort, setSort] = useQueryState("sort", parseAsString.withDefault("newest").withOptions({
        shallow: false
    }));


    return (
        <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                        Sort by:
                    </span>
            <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-48 bg-white">
                    <SelectValue placeholder={"Sort products"}/>
                </SelectTrigger>
                <SelectContent>
                    {sortingOptions.map(({key, value}) => (
                        <SelectItem key={key} value={key.toString()}>
                            {value}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}