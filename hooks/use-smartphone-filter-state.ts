import { useQueryStates, parseAsArrayOf, parseAsString } from "nuqs"

export function useFilterState() {
    const [filters, setFilters] = useQueryStates({
        brands: parseAsArrayOf(parseAsString).withDefault([]),
        priceMin: parseAsString.withDefault("0"),
        priceMax: parseAsString.withDefault("1500"),
        screenSize: parseAsArrayOf(parseAsString).withDefault([]),
        ram: parseAsArrayOf(parseAsString).withDefault([]),
        storage: parseAsArrayOf(parseAsString).withDefault([]),
        processor: parseAsArrayOf(parseAsString).withDefault([]),
        battery: parseAsArrayOf(parseAsString).withDefault([]),
        rearCamera: parseAsArrayOf(parseAsString).withDefault([]),
        frontCamera: parseAsArrayOf(parseAsString).withDefault([]),
        cameraCount: parseAsArrayOf(parseAsString).withDefault([]),
        network: parseAsArrayOf(parseAsString).withDefault([]),
        os: parseAsArrayOf(parseAsString).withDefault([]),
        bodyMaterial: parseAsArrayOf(parseAsString).withDefault([]),
        waterResistance: parseAsArrayOf(parseAsString).withDefault([]),
        screenType: parseAsArrayOf(parseAsString).withDefault([]),
        colors: parseAsArrayOf(parseAsString).withDefault([]),
        fingerprint: parseAsArrayOf(parseAsString).withDefault([]),
        features: parseAsArrayOf(parseAsString).withDefault([]),
    })

    const updateFilter = (categoryId: string, value: string | string[] | [number, number]) => {
        if (categoryId === "priceRange") {
            const [min, max] = value as [number, number]
            setFilters({
                priceMin: min.toString(),
                priceMax: max.toString(),
            })
        } else {
            setFilters({
                [categoryId]: value,
            })
        }
    }

    const resetFilters = () => {
        setFilters({
            brands: [],
            priceMin: "0",
            priceMax: "1500",
            screenSize: [],
            ram: [],
            storage: [],
            processor: [],
            battery: [],
            rearCamera: [],
            frontCamera: [],
            cameraCount: [],
            network: [],
            os: [],
            bodyMaterial: [],
            waterResistance: [],
            screenType: [],
            colors: [],
            fingerprint: [],
            features: [],
        })
    }

    const getActiveFiltersCount = () => {
        let count = 0
        Object.entries(filters).forEach(([key, value]) => {
            if (key === "priceMin" || key === "priceMax") return
            if (Array.isArray(value) && value.length > 0) count += value.length
        })
        if (filters.priceMin !== "0" || filters.priceMax !== "1500") count += 1
        return count
    }

    return {
        filters,
        updateFilter,
        resetFilters,
        getActiveFiltersCount,
    }
}
