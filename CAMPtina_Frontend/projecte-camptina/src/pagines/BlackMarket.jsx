import { useState } from 'react'
import { apats as apatsInicials } from '../dades/dades-plantilla.json'
import { Products } from './black-market-components/Products.jsx'
import { Filters } from './black-market-components/Filters.jsx'
import { useFilters } from '../hooks/useFilters.js'
import { Link } from '../Link.jsx'



export default function BlackMarket() {
    const [apats] = useState(apatsInicials)
    const { filterApats } = useFilters()
    const filteredApats = filterApats(apats)

    return (
        <>
            <Link to='/'>Inici</Link>
            <h1>Black Market</h1>
            <Filters />
            <Products apats={filteredApats} />
        </>
    )
}