import { FaCcMastercard } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
export default function MasterCard({nameCard, number, fullname, code}) {
  return (
    <>
      <div className="bg-red-500 h-64 w-[26rem] border-2  border-gray-100 rounded-3xl p-6 bg-[url('./assets/image-mesh-gradient.png')] bg-cover bg-center flex flex-col gap-y-28 text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{nameCard}</h1>
          <FaWifi className="size-8"/>
        </div>
         <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div className="flex gap-x-4">
              <span className="uppercase">{fullname}</span>
              <span>{code}</span>
            </div>
            <p>{number}</p>
          </div>
          <FaCcMastercard className="size-10"/>
        </div>
      </div>
    </>
  )

}