/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-27 17:48:26
 * @LastEditTime: 2024-01-04 11:32:40
 */
import { Outlet, RouterProvider } from "react-router-dom"
import { routers } from "./routers"

function App() {
  return (
    <RouterProvider
      router={routers}
      future={{
        // Wrap all state updates in React.startTransition()
        v7_startTransition: true,
      }}
      fallbackElement={<p>loading...</p>}
    />
  )
}

export default App
