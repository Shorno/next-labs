"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {parseAsArrayOf, useQueryState} from "nuqs";
import {parseAsString} from "nuqs";
import {Button} from "@/components/ui/button";


const categories = [
    {id: "audio", label: "Audio"},
    {id: "gaming-consoles", label: "Gaming Consoles"},
    {id: "smartphones", label: "Smartphones"},
    {id: "wearables", label: "Wearables"},
    {id: "action-cameras", label: "Action Cameras"},
    {id: "laptops", label: "Laptops"},
    {id: "cameras", label: "Cameras"},
    {id: "storage", label: "Storage"}
]

export default function FilterSidebar() {
    const [selectedCategories, setSelectedCategories] = useQueryState(
        "categories",
        parseAsArrayOf(parseAsString).withDefault([]).withOptions({
            shallow: false
        })
    );

    const handleCategoryChange = (categoryId: string, checked: boolean) => {
        if (checked) {
            if (!selectedCategories.includes(categoryId)) {
                setSelectedCategories([...selectedCategories, categoryId]);
            }
        } else {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        }
    };

    return (
        <div className="w-60 space-y-6">
            <Card className={"rounded-xs"}>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold">Categories</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="space-y-3">
                        {categories.map((category) => {
                            const isSelected = selectedCategories.includes(category.id);

                            return (
                                <div key={category.id} className="flex items-center space-x-3">
                                    <Checkbox
                                        id={category.id}
                                        checked={isSelected}
                                        onCheckedChange={(checked) =>
                                            handleCategoryChange(category.id, checked as boolean)
                                        }
                                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                    />
                                    <label
                                        htmlFor={category.id}
                                        className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex justify-between items-center"
                                    >
                                        <span className={isSelected ? "font-semibold text-blue-600" : ""}>
                                            {category.label}
                                        </span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    {selectedCategories.length > 0 &&
                        <Button className={"mt-4 w-full"}
                                onClick={() => setSelectedCategories([])}
                                variant={"outline"}>Clear filters
                        </Button>}
                </CardContent>
            </Card>

            <Card className={"rounded-xs"}>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold">Availability</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Checkbox id="in-stock" defaultChecked/>
                            <label htmlFor="in-stock" className="text-sm font-medium leading-none cursor-pointer">
                                In Stock <span className="text-gray-500">(1,156)</span>
                            </label>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Checkbox id="low-stock"/>
                            <label htmlFor="low-stock" className="text-sm font-medium leading-none cursor-pointer">
                                Low Stock <span className="text-gray-500">(94)</span>
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
