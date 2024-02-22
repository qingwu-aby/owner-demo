/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-28 16:32:43
 * @LastEditTime: 2024-01-04 14:47:38
 */
import { createBrowserRouter } from "react-router-dom"

import Home from "./modules/home"
import Person from "./modules/migu/person"
import ErrorPage from "./modules/error-page"
import QiuMing from "./modules/qiuming/qiu-ming"

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/migu",
        element: <Person />,
        children: [
          {
            index: true,
            element: <Person />,
          },
          {
            path: "rank",
            lazy: () => import("./modules/migu/rank/index"),
            children: [
              {
                path: "hot",
                async lazy() {
                  let { hotRankLoader, HotRank } = await import(
                    "./modules/migu/rank/hot-rank"
                  )
                  return {
                    loader: hotRankLoader,
                    Component: HotRank,
                  }
                },
              },
              {
                path: "new",
                async lazy() {
                  let { newRankLoader, NewRank } = await import(
                    "./modules/migu/rank/new-rank"
                  )
                  return {
                    loader: newRankLoader,
                    Component: NewRank,
                  }
                },
              },
            ],
          },
        ],
      },
      {
        path: "/qiuming",
        element: <QiuMing />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])

export { routers }
