import { AddProduct } from './Icons.jsx'

export function Products ({ apats }) {
    return (
        <main>
            <ul>
                {apats.slice(0, 6).map(apat => (
                    <li key={apat.id}>
                        <strong>{apat.nom}</strong>
                        <p>{apat.categoria}</p>
                        <button style={{width: '200px', height: '50px'}}><AddProduct /></button>
                    </li>
                ))}
            </ul>
        </main>
    )
}