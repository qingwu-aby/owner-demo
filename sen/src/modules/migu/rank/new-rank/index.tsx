/*
 * @Author: yangyuan
 * @Description:
 * @Date: 2023-12-28 16:40:38
 * @LastEditTime: 2023-12-28 17:04:15
 */
import { useLoaderData } from "react-router-dom"
const NewRank = () => {
  const { data } = useLoaderData() as INewRankLoader
  return (
    <div>
      {data?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

interface INewRankLoader {
  data: number[]
}

const newRankLoader = async () => {
  await new Promise((res) => setTimeout(res, 500))
  return {
    data: [1, 2, 3],
  } as INewRankLoader
}

export { NewRank, newRankLoader }
