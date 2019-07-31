/** @jsx jsx */
import { jsx, css, Interpolation } from "@emotion/core"
import React from "react"
import { Header } from "components/molecules/Header"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import { AppOld } from "AppOld"
import { TabNavBar } from "components/atoms/Navtabs"

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Header>
        <h1>Craftsman Needs New Tools</h1>
        <sub>1.1.0</sub>
      </Header>
      <TabNavBar>
        <NavLink to="/difficulty">Difficulties</NavLink>
        <NavLink to="/battlegroup">Battlegroups</NavLink>
      </TabNavBar>
      <Switch>
        <Route path="/battlegroup" component={AppOld} />
        <Route path="/difficulty" component={AppOld} />
        <Route component={AppOld} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
