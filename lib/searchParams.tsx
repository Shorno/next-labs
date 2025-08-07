import {parseAsInteger, createLoader, parseAsString, parseAsArrayOf} from 'nuqs/server'

export const productsSearchParams = {
    page: parseAsInteger.withDefault(1),
    sort: parseAsString.withDefault("newest"),
    categories: parseAsArrayOf(parseAsString).withDefault([]),
}

export const loadSearchParams = createLoader(productsSearchParams)