import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import { Link } from './Link.jsx'
import { camiActualAra } from './utils.js'

vi.mock('./utils.js', () => ({
    camiActualAra: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it('should render without problems', () => {
        render(<Router rutes={[]} />)
        expect(true).toBeTruthy()
    })
    it('should render 404 if no rutes match', () => {
        render(<Router rutes={[]} componentPerDefecte={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })
    it('should render the component of the list first route that matches', () => {
        camiActualAra.mockReturnValue('/')
        const rutes = [
            {
                cami: '/',
                Component: () => <h1>Inici</h1>
            },
            {
                cami: 'equip',
                Component: () => <h1>Equip</h1>
            }
        ]
        render(<Router rutes={rutes} />)
        expect(screen.getByText('Inici')).toBeTruthy()
    })
    /*it('should navigate using Links', async () => {
        camiActualAra.mockReturnValueOnce('/')
        render(
            <Router>
                <Route
                    cami='/' Component={() => {
                        return (
                            <>
                                <h1>Inici</h1>
                                <Link to='/equip'>Ir a Equip</Link>
                            </>
                        )
                    }}
                />
                <Route
                    cami='/equip' Component={() => <h1>Equip</h1>}
                />
            </Router>
        )
        //Click on the link
        const button = screen.getByText(/Ir a Equip/)
        fireEvent.click(button)
        const equipTitol = await screen.findByText('Equip')
        //Check that the new route is rendered
        expect(equipTitol).toBeTruthy()
    })*/
})