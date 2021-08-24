/** @jsxImportSource @emotion/react */
import React from "react"
import { Header } from "components/molecules/Header"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import { TabNavBar } from "components/atoms/Navtabs"
import { ProbabilityPage } from "components/page/Probability"

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
        {/* <Route path="/battlegroup" component={AppOld} />
        <Route path="/difficulty" component={AppOld} /> */}
        <Route component={ProbabilityPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
