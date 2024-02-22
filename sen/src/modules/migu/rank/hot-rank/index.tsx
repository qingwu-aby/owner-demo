/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-28 16:40:36
 * @LastEditTime: 2023-12-28 17:03:45
 */
import { useLoaderData } from "react-router-dom"
const HotRank = () => {
  const { data } = useLoaderData() as IHotRankLoader
  return (
    <div>
      {data?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

interface IHotRankLoader {
  data: number[]
}

const hotRankLoader = async () => {
  await new Promise((res) => setTimeout(res, 500))
  return {
    data: [1, 2, 3],
  } as IHotRankLoader
}

export { HotRank, hotRankLoader }
