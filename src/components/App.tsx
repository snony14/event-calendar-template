import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { FC } from 'react'
import { styled } from '../theme'

import { Navbar } from './molecule'
import { navLinks } from '../config/navigationLinks'

const NavbarRouterStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 1rem;
  height: 100%;
`

const LazyMolecule = (url: string) => {
  return React.lazy(() => import(`./pages/${url}`).catch(e => import('./molecule/Placeholder')))
}

const getRoutes = () => (
  <React.Suspense fallback={<p>Loading</p>}>
    <Route exact path="/" component={() => <div />} />
    {navLinks.map(navLink => (
      <React.Fragment key={navLink.title}>
          <Route path={`/${navLink.url}`} component={LazyMolecule(navLink.title)} key={navLink.url} />
      </React.Fragment>
    ))}
  </React.Suspense>
)

const AppRouter: FC = () => (
  <Router>
    <NavbarRouterStyle>
        <Navbar />
        <div>{getRoutes()}</div>
    </NavbarRouterStyle>
  </Router>
)

export default AppRouter