import img from "@/public/IONL.webp";
import Image from "next/image";

export const CartList = () => {
  return (
    <div className="flex justify-between mt-9">
      <div className="flex space-x-10">
        <div>
          <Image src={img} alt="items" height={200} width={200} />
        </div>
        <div className="space-y-2">
          <p>RED WOLVES</p>
          <p>$ 299</p>
          <p> SIZE: XXXL</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row h-10 w-full rounded-lg relative border-[1px] border-black bg-transparent mt-1">
          <button className=" w-20 rounded-l cursor-pointer outline-none">
            -
          </button>
          <input
            className="focus:outline-none  text-center font-medium text-md  md:text-basecursor-default items-center outline-none"
            type="text"
            value="0"
          />
          <button className="w-20 rounded-l cursor-pointer outline-none">
            +
          </button>
        </div>
      </div>
      <div className="mr-10">
        <p>$ 499</p>
      </div>
    </div>
  );
};
