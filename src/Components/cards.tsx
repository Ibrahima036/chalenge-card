
export default function Card({imgIlustration, impProfile, publisheAt, info ,name}) {
  return (
    <div className="bg-[#FFFFFF] p-4 h-auto w-72 max-w-[1440px] min-w-[375px] mx-auto border-t-2 border-l-2 border-r-8 border-b-8 rounded-2xl border-gray-900">
       <div className="flex flex-col gap-y-3">
        <img src={imgIlustration} alt="imge" className="rounded-md" />
       <button className="w-20 rounded-sm shadow-xl border-1 h-7 bg-[#D3C32A] font-bold text-sm mt-3 text-center">Learning</button>
       <small>{publisheAt}</small>
       </div>
       <p className="text-xl text-[#0A0A0A] hover:text-[#D3C32A] hover:cursor-pointer mt-4 font-bold">HTML & CSS foundations</p>
       <p className="text-base text-[#808080] mt-4">{info}</p>
       <div className="flex gap-x-2 items-center mt-8">
        <img src={impProfile} alt="profil" className="size-10"/>
        <small className="text-sm font-bold">{name}</small>
       </div>
      </div>
  );
}