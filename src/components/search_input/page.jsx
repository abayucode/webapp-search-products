"use client"

import Image from "next/image"
import { ic_search } from "../../../public/assets/icon"
import { useState } from "react"

export const SearchComponent = ({ triggerSearch }) => {

  const [values, setValues] = useState("");

  return (
    <div className="flex justify-end items-center w-72 hover:-translate-y-1 duration-300 fixed top-5">
      <input onChange={(event) => setValues(event.target.value)} value={values} className="bg-teal-300 text-black p-2 rounded-lg min-w-full outline-none font-semibold font-mono shadow-slate-800 hover:outline-slate-950 focus:outline-slate-500" />
      <button onClick={() => triggerSearch(values)} className="flex w-12 h-10 absolute bg-teal-600 rounded-r-lg hover:bg-teal-500">
        <Image src={ic_search} alt="ic_search" priority={true} />
      </button>
    </div>
  )
}
