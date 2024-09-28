import Image from "next/image"
import { ic_truck } from "../../../public/assets/icon"

export const Loading = () => {
  return (
    <div className="min-h-screen flex bg-slate-500 bg-opacity-90 absolute">
      <Image src={ic_truck} alt="loading" className="h-28 self-end animate-slideRight" />
    </div>
  )
}
