'use client'

import Image from "next/image";
import { ic_arrow } from "../../../public/assets/icon/index";
import { useRouter } from "next/navigation";

export function BackButton(props) {

  const router = useRouter();


  return (
    <button
      className="flex flex-row items-center h-auto bg-white w-full p-1 px-4  shadow-md"
      onClick={router.back}
    >
      <div className="bg-white rotate-180 w-10 h-10">
        <Image
          src={ic_arrow}
          alt="ic_arrow"
        />
      </div>
      <div className="bg-slate-700 self-center">
        <h1 className="text-white">Page</h1>
      </div>
    </button>
  )
}
