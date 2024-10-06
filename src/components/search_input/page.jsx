"use client"

import Image from "next/image"
import { ic_search } from "../../../public/assets/icon"
import { useState } from "react"

export const SearchComponent = (props) => {

  const [values, setValues] = useState("");

  const handleInput = (event) => {
    setValues(event.target.value);
  }

  return (
    <button onClick={() => props.triggerSearch(values)} className="flex justify-end items-center w-72 hover:-translate-y-1 duration-300 fixed top-5">
      <input onKeyUp={handleInput} className="bg-teal-300 text-black p-2 rounded-lg min-w-full outline-none font-semibold font-mono shadow-slate-800 hover:outline-slate-950 focus:outline-slate-500" />
      <Image src={ic_search} alt="ic_search" priority={true} className="flex w-12 h-10 absolute bg-teal-600 rounded-r-lg hover:bg-teal-500" />
    </button>
  )
}
