"use client"

import Image from "next/image";
import { ic_search } from "../../public/assets/icon";
import { SearchComponent } from "@/components/search_input/page";
import { Loading } from "@/components/loading/page";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [dataProducts, setIsDataProducts] = useState([])

  useEffect(() => {
    try {
      async function fetchAPI() {
        const response = await fetch('http://localhost:8081/api/v1.0/b2c/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
            // 'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization,Content-Length,X-Requested-With'
          },
          body: JSON.stringify({
            "value": "fanta"
          })
        })
        const result = await response.json();
        setIsDataProducts(result.result)
        
      }

      fetchAPI()
    } catch (error) {
      console.error('ini errornya suu ', error)
    }
  }, [])
  

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-emerald-50 p-5">
      <SearchComponent />
      {isLoading ? <Loading /> : null}
      <div
        className="grid grid-cols-2 gap-3">
        {
          dataProducts.map((item, index) => (
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
