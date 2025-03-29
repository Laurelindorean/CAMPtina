import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
    const { filters, setFilters } = useContext(FiltersContext)

    /* FILTRAR UN ARRAY !IMPORTANT ESTUDIAR! */
    const filterApats = (apats) => {
        return apats.filter(apat => {
            return (
                filters.categoria === 'all' ||
                apat.categoria === filters.categoria
            )
        })
    }

    return { filters, setFilters, filterApats,  }
}