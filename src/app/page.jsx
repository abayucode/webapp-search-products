"use client"

import Image from "next/image";
import { SearchComponent } from "@/components/search_input/page";
import { Loading } from "@/components/loading/page";
import { useEffect, useState, useContext, useCallback } from "react";
import Link from "next/link";
import { AppContext } from "@/hooks/context/AppContext";
import { useDisplayProducts } from "@/hooks/custom/usePostApi";

export default function Home() {

  const [dataProducts, setDataProducts] = useState([])
  
  const { postData } = useDisplayProducts()
  
  const { state } = useContext(AppContext)
  const { displayProductData } = state;



  const triggerSearch = (value) => {
    if (value) {
      postData({ value })
    }
  }

  useEffect(() => {
    
    if (displayProductData) {
      setDataProducts(displayProductData.result)
      console.log(displayProductData);
    }

  }, [displayProductData])
  
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-emerald-50 p-5">
      <SearchComponent triggerSearch={triggerSearch}  />
      {state.loading ? <Loading /> : null}
      <div
        className="grid grid-cols-2 gap-3">
        {
          dataProducts?.map((item, index) => (
            <Link
              key={index}
              className="flex flex-col items-center bg-gray-300 rounded-xl p-3 border border-blue-300 shadow-lg hover:-translate-y-1 hover:duration-500 h-fit"
              href={{
                pathname: 'product_detail',
                query: item
              }}
            >
              <div className="mb-6 mix-blend-multiply">
                <Image
                  src={item.productImageUrl}
                  alt="product"
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
              <div className="self-start">
                <label className="text-black font-bold line-clamp-2">{item.productName}</label>
                <label className="text-black flex">Rp. <p className="text-black font-bold">{item.productPrice}</p></label>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  );
}
