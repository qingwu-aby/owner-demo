/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-25 17:53:15
 * @LastEditTime: 2024-01-04 11:55:37
 */
import { Outlet, useNavigate } from "react-router-dom"
const Home = () => {
  let navigate = useNavigate()
  return (
    <>
      <nav>
        <div
          onClick={() =>
            navigate("/qiuming", {
              replace: true,
              unstable_viewTransition: true,
            })
          }
        >
          中国诗
        </div>
        <div
          onClick={() => navigate("/migu", { unstable_viewTransition: true })}
        >
          咪咕音乐
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Home
