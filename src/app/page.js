"use client"

import Image from "next/image";
import { ic_search } from "../../public/assets/icon";
import { SearchComponent } from "@/components/search_input/page";
import { Loading } from "@/components/loading/page";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    try {
      async function fetchAPI() {
        const response = await fetch('http://localhost:8081/api/v1.0/b2c/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Authorization,Content-Length,X-Requested-With'
          },
          body: JSON.stringify({
            "value": "Scintific"
          })
        })

        console.log('res ', response.json());
      }

      fetchAPI()
    } catch (error) {
      console.error('ini errornya suu ', error)
    }
  }, [])

  return (
    <main className="flex min-h-screen justify-center items-center bg-emerald-50">
      <SearchComponent />
      {isLoading ? <Loading /> : null}
    </main>
  );
}
