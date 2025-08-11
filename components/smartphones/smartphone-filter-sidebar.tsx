"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, X, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { filterSections } from "@/data/filters/smartphone-filter-data"
import { useFilterState } from "@/hooks/use-smartphone-filter-state"
import type { FilterCategory } from "@/types/smartphone-filters"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
    className?: string
}

export function FilterSidebar({ className }: FilterSidebarProps) {
    const { filters, updateFilter, resetFilters, getActiveFiltersCount } = useFilterState()
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
        filterSections.reduce(
            (acc, section) => {
                acc[section.id] = section.defaultExpanded ?? false
                return acc
            },
            {} as Record<string, boolean>,
        ),
    )

    const toggleSection = (sectionId: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }))
    }

    const handleCheckboxChange = (categoryId: string, optionId: string, checked: boolean) => {
        const currentValues = (filters[categoryId as keyof typeof filters] as string[]) || []
        const newValues = checked ? [...currentValues, optionId] : currentValues.filter((id) => id !== optionId)
        updateFilter(categoryId, newValues)
    }

    const handleRadioChange = (categoryId: string, value: string) => {
        updateFilter(categoryId, [value])
    }

    const handleSliderChange = (categoryId: string, values: number[]) => {
        updateFilter(categoryId, [values[0], values[1]])
    }

    const renderFilterCategory = (category: FilterCategory) => {
        const currentValues = (filters[category.id as keyof typeof filters] as string[]) || []

        switch (category.type) {
            case "checkbox":
                return (
                    <div className="space-y-3">
                        {category.options?.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`${category.id}-${option.id}`}
                                    checked={currentValues.includes(option.id)}
                                    onCheckedChange={(checked) => handleCheckboxChange(category.id, option.id, checked as boolean)}
                                />
                                <Label htmlFor={`${category.id}-${option.id}`} className="flex-1 text-sm font-normal cursor-pointer">
                                    {option.label}
                                </Label>
                                {option.count && <span className="text-xs text-muted-foreground">({option.count})</span>}
                            </div>
                        ))}
                    </div>
                )

            case "radio":
                return (
                    <RadioGroup value={currentValues[0] || ""} onValueChange={(value) => handleRadioChange(category.id, value)}>
                        {category.options?.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.id} id={`${category.id}-${option.id}`} />
                                <Label htmlFor={`${category.id}-${option.id}`} className="flex-1 text-sm font-normal cursor-pointer">
                                    {option.label}
                                </Label>
                                {option.count && <span className="text-xs text-muted-foreground">({option.count})</span>}
                            </div>
                        ))}
                    </RadioGroup>
                )

            case "slider":
                const minValue = Number.parseInt(filters.priceMin) || category.min || 0
                const maxValue = Number.parseInt(filters.priceMax) || category.max || 1500
                return (
                    <div className="space-y-4">
                        <div className="px-2">
                            <Slider
                                value={[minValue, maxValue]}
                                onValueChange={(values) => handleSliderChange(category.id, values)}
                                max={category.max}
                                min={category.min}
                                step={category.step}
                                className="w-full"
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {category.unit}
                  {minValue}
              </span>
                            <span>
                {category.unit}
                                {maxValue}
              </span>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    const SidebarContent = () => (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    <h2 className="text-lg font-semibold">Filters</h2>
                    {getActiveFiltersCount() > 0 && (
                        <Badge variant="secondary" className="ml-2">
                            {getActiveFiltersCount()}
                        </Badge>
                    )}
                </div>
                {getActiveFiltersCount() > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <X className="h-4 w-4 mr-1" />
                        Reset
                    </Button>
                )}
            </div>

            <Separator />

            {/* Filter Sections */}
            <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="space-y-6 pr-4">
                    {filterSections.map((section) => (
                        <div key={section.id} className="space-y-4">
                            <Collapsible open={expandedSections[section.id]} onOpenChange={() => toggleSection(section.id)}>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-left">
                                        <span>{section.label}</span>
                                        {expandedSections[section.id] ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="space-y-4 mt-4">
                                    {section.categories.map((category) => (
                                        <div key={category.id} className="space-y-3">
                                            {section.categories.length > 1 && (
                                                <h4 className="text-sm font-medium text-muted-foreground">{category.label}</h4>
                                            )}
                                            {renderFilterCategory(category)}
                                        </div>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                            <Separator />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )

    return (
        <>
            {/* Desktop Sidebar */}
            <div className={cn("hidden lg:block w-80  bg-background", className)}>
                <div className="p-6">
                    <SidebarContent />
                </div>
            </div>

            {/* Mobile Sheet */}
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Filter className="h-4 w-4" />
                            Filters
                            {getActiveFiltersCount() > 0 && (
                                <Badge variant="secondary" className="ml-1">
                                    {getActiveFiltersCount()}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 p-0">
                        <SheetHeader className="p-6 pb-0">
                            <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <div className="p-6 pt-4">
                            <SidebarContent />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}
