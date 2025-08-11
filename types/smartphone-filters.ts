export interface FilterOption {
    id: string
    label: string
    count?: number
}

export interface FilterCategory {
    id: string
    label: string
    type: "checkbox" | "radio" | "range" | "slider"
    options?: FilterOption[]
    min?: number
    max?: number
    step?: number
    unit?: string
}

export interface FilterSection {
    id: string
    label: string
    categories: FilterCategory[]
    defaultExpanded?: boolean
}

export interface FilterState {
    brands: string[]
    priceRange: [number, number]
    screenSize: string[]
    ram: string[]
    storage: string[]
    processor: string[]
    battery: string[]
    rearCamera: string[]
    frontCamera: string[]
    cameraCount: string[]
    network: string[]
    os: string[]
    bodyMaterial: string[]
    waterResistance: string[]
    screenType: string[]
    colors: string[]
    fingerprint: string[]
    features: string[]
}
