import React from "react"
import { Route, Routes as Switch } from "react-router-dom"

/**
 * pages
 */

import { AboutUs, Landing } from "../pages"

const HomeRoutes = function() {
  return <Switch>
    <Route index element={<Landing/>} />
    <Route  path="about-us" element={<AboutUs/>} />
  </Switch>
}

export default HomeRoutes