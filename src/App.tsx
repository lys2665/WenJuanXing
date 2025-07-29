import React from "react";
import { RouterProvider } from "react-router-dom";
import "antd/dist/reset.css"

import routerConfig from "./router"

function App() {
  return (
    <RouterProvider router={routerConfig}></RouterProvider>
  )
}

export default App