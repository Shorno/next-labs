import type {FilterSection} from "@/types/smartphone-filters"


export const filterSections: FilterSection[] = [
    {
        id: "price",
        label: "Price Range",
        defaultExpanded: true,
        categories: [
            {
                id: "priceRange",
                label: "Price Range",
                type: "slider",
                min: 0,
                max: 1500,
                step: 50,
                unit: "$",
            },
        ],
    },
    {
        id: "brand",
        label: "Brand",
        defaultExpanded: true,
        categories: [
            {
                id: "brands",
                label: "Brands",
                type: "checkbox",
                options: [
                    {id: "apple", label: "Apple", count: 45},
                    {id: "samsung", label: "Samsung", count: 67},
                    {id: "xiaomi", label: "Xiaomi", count: 34},
                    {id: "oneplus", label: "OnePlus", count: 23},
                    {id: "realme", label: "Realme", count: 28},
                    {id: "motorola", label: "Motorola", count: 19},
                    {id: "google", label: "Google", count: 12},
                    {id: "oppo", label: "Oppo", count: 31},
                    {id: "vivo", label: "Vivo", count: 29},
                ],
            },
        ],
    },

    {
        id: "technical",
        label: "Technical Specifications",
        defaultExpanded: false,
        categories: [
            {
                id: "screenSize",
                label: "Screen Size",
                type: "checkbox",
                options: [
                    {id: "5.0-5.9", label: '5.0" - 5.9"', count: 45},
                    {id: "6.0-6.5", label: '6.0" - 6.5"', count: 78},
                    {id: "6.5+", label: 'Above 6.5"', count: 34},
                ],
            },
            {
                id: "ram",
                label: "RAM",
                type: "checkbox",
                options: [
                    {id: "4gb", label: "4 GB", count: 45},
                    {id: "6gb", label: "6 GB", count: 67},
                    {id: "8gb", label: "8 GB", count: 89},
                    {id: "12gb+", label: "12 GB & above", count: 34},
                ],
            },
            {
                id: "storage",
                label: "Internal Storage",
                type: "checkbox",
                options: [
                    {id: "64gb", label: "64 GB", count: 34},
                    {id: "128gb", label: "128 GB", count: 78},
                    {id: "256gb+", label: "256 GB & above", count: 45},
                ],
            },
            {
                id: "processor",
                label: "Processor (Chipset)",
                type: "checkbox",
                options: [
                    {id: "snapdragon", label: "Snapdragon Series", count: 89},
                    {id: "apple-a", label: "Apple A-Series", count: 45},
                    {id: "mediatek", label: "MediaTek Dimensity/Helio", count: 56},
                    {id: "exynos", label: "Exynos Series", count: 34},
                    {id: "kirin", label: "Kirin", count: 12},
                ],
            },
        ],
    },
    {
        id: "connectivity",
        label: "Network & Connectivity",
        defaultExpanded: false,
        categories: [
            {
                id: "network",
                label: "Network",
                type: "checkbox",
                options: [
                    {id: "4g", label: "4G LTE", count: 123},
                    {id: "5g", label: "5G Support", count: 89},
                    {id: "dual-sim", label: "Dual SIM", count: 156},
                    {id: "esim", label: "eSIM Support", count: 67},
                    {id: "nfc", label: "NFC", count: 98},
                    {id: "wifi6", label: "Wi-Fi 6", count: 78},
                ],
            },
        ],
    },
    {
        id: "system",
        label: "Operating System",
        defaultExpanded: false,
        categories: [
            {
                id: "os",
                label: "OS",
                type: "checkbox",
                options: [
                    {id: "android", label: "Android", count: 234},
                    {id: "ios", label: "iOS", count: 45},
                ],
            },
        ],
    },
    {
        id: "design",
        label: "Build & Design",
        defaultExpanded: false,
        categories: [
            {
                id: "bodyMaterial",
                label: "Body Material",
                type: "checkbox",
                options: [
                    {id: "glass", label: "Glass", count: 89},
                    {id: "metal", label: "Metal", count: 67},
                    {id: "plastic", label: "Plastic", count: 45},
                ],
            },
            {
                id: "waterResistance",
                label: "Water Resistance",
                type: "radio",
                options: [
                    {id: "yes", label: "Yes", count: 123},
                    {id: "no", label: "No", count: 89},
                ],
            },
            {
                id: "screenType",
                label: "Screen Type",
                type: "checkbox",
                options: [
                    {id: "lcd", label: "LCD", count: 67},
                    {id: "amoled", label: "AMOLED", count: 89},
                    {id: "dynamic-amoled", label: "Dynamic AMOLED", count: 34},
                    {id: "oled", label: "OLED", count: 45},
                ],
            },
        ],
    },
    {
        id: "color",
        label: "Color",
        defaultExpanded: false,
        categories: [
            {
                id: "colors",
                label: "Available Colors",
                type: "checkbox",
                options: [
                    {id: "black", label: "Black", count: 156},
                    {id: "white", label: "White", count: 134},
                    {id: "blue", label: "Blue", count: 89},
                    {id: "red", label: "Red", count: 67},
                    {id: "green", label: "Green", count: 45},
                    {id: "gold", label: "Gold", count: 78},
                    {id: "silver", label: "Silver", count: 56},
                    {id: "purple", label: "Purple", count: 34},
                    {id: "gradient", label: "Gradient / Multi-color", count: 23},
                ],
            },
        ],
    },
]
