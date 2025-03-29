import { useFilters } from '../../hooks/useFilters.js'

export function Filters() {
    const { setFilters } = useFilters()
    const handleChangeCategoria = (event) => {
        setFilters(() => ({
            categoria: event.target.value
        }))
    }

    return (
        <section>
            <label htmlFor='categoria_blackmarket'>Categoria</label>
            <select onChange={handleChangeCategoria} id='categoria_blackmarket'>
                <option value={'all'}>Todas</option>
                <option value={'1'}>Primer</option>
                <option value={'2'}>Segon</option>
                <option value={'3'}>Postres</option>
            </select>
        </section>
    )
}