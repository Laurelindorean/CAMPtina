import './App.css'
import { lazy, Suspense } from 'react'
import { Router } from './Router.jsx'
import { Route } from './Route.jsx'
import Inici from './pagines/Inici.jsx' // Import estático
import Apats from './pagines/Apats.jsx'
const LazyEquip = lazy(() => import('./pagines/Equip.jsx')) // Import dinámico
import Contacte from './pagines/Contacte.jsx'

import Menus from './pagines/apats/Menus.jsx'
import TriarApat from './pagines/apats/TriarApat.jsx'
import CrearApat from './pagines/apats/CrearApat.jsx'

import EquipDev from './pagines/equip/EquipDev.jsx'
import Gerent from './pagines/equip/Gerent.jsx'


import User from './pagines/User.jsx'
import Login from './pagines/Login.jsx'
import SignUp from './pagines/SignUp.jsx'
import Page404 from './pagines/Page404.jsx'
import SearchPage from './pagines/Search.jsx'
import Contrasenya from './pagines/Contrasenya.jsx'
import BlackMarket from './pagines/BlackMarket.jsx'

const rutesApp = [
  {
    cami: '/apats/menus',
    Component: Menus
  },
  {
    cami: '/apats/triar-apat',
    Component: TriarApat
  },
  {
    cami: '/apats/crear-apat',
    Component: CrearApat
  },
  {
    cami: '/equip/equip-dev',
    Component: EquipDev
  },
  {
    cami: '/equip/gerent',
    Component: Gerent
  },
  {
    cami: '/user',
    Component: User
  },
  {
    cami: '/login',
    Component: Login
  },
  {
    cami: '/sign-up',
    Component: SignUp
  },
  {
    cami: '/send-mail',
    Component: Contrasenya
  },
  {
    cami: '/search/:query',
    Component: SearchPage
  },
  {
    cami: '/:lang/login',
    Component: Login
  },
  {
    cami: '/blackmarket',
    Component: BlackMarket
  }
]

function App() {
  const className_pagina = 'cn-pagina';
  return (
    <>
      <div className={className_pagina}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router rutes={rutesApp} componentPerDefecte={Page404}>
            <Route cami='/' Component={Inici} />
            <Route cami='/apats' Component={Apats} />
            <Route cami='/equip' Component={LazyEquip} />
            <Route cami='/contacte' Component={Contacte} />
          </Router>
        </Suspense>
      </div>
    </>
  )
}

export default App