/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-28 16:35:18
 * @LastEditTime: 2024-01-03 16:56:03
 */
import { useLoaderData } from "react-router-dom"

export async function loader() {
  await new Promise((r) => setTimeout(r, 500))
  return "I came from the About.tsx loader function!"
}

export const Rank = () => {
  let data = useLoaderData() as string
  return <div>Rank{data}</div>
}
