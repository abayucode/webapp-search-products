import { BackButton } from "@/components/back_button/page";
import Image from "next/image";

export default function ProductDetail(props) {
  const { searchParams } = props;
  
  return (
    <main className="bg-emerald-50 h-fit">
      <BackButton />
      <div className="flex flex-col">
        <picture className="mix-blend-normal w-fit shadow-md hover:scale-125 hover:duration-300 ease-in">
          <Image
            src={searchParams.productImageUrl}
            alt="img_product"
            width={750}
            height={750}
          />
        </picture>
        <div className="p-5">
          <div className="flex justify-between line-clamp-1">
            <div>
              <p className="text-black font-bold">{searchParams.productName}</p>
              <p className="text-black">Rp. <p className="text-black font-bold">{searchParams.productPrice}</p></p>
            </div>
            <div>
              <p className="text-black font-bold line-clamp-1 float-end">{searchParams.storeName}</p>
              <button className="bg-white p-2 rounded-xl font-bold text-zinc-600 border-2 border-red-400 float-end">
                Kunjungi Toko
              </button>
              <p className="text-black float-end">5 Km dari tempat anda</p>
            </div>
          </div>
          <p className="text-black text-justify">{searchParams.productDescription}</p>
        </div>
      </div>
    </main>
  ) 
}