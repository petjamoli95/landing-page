import Image from "next/image";

export default function RoomCard({ room }) {
  return (
    <div className="relative inline-block">
      <Image className="block" src={`http://35.179.72.232${room.mainImage.meta.download_url}`} width={1224} height={816} alt={room.mainImage.title} />
      <div className="p-8 absolute bg-dark w-1/3 h-1/4 xs:h-1/3 lg:h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-hidden">
        <h1 className="text-white absolute top-1 left-1 xs:top-2 xs:left-2 lg:top-5 lg:left-5 font-karla text-md xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">{room.title}</h1>
        <a href="" className="text-red absolute bottom-1 left-1 xs:bottom-2 lg:bottom-40 lg:left-5 text-xs md:text-lg lg:text-xl xl:text-2xl">View Details</a>
        <div className="absolute hidden lg:block flex lg:bottom-5 lg:left-5 flex-row">
          <button className='p-6 xl:p-10 font-karla text-2xl text-bold bg-red text-white'>BOOK</button>
          <button className='ml-3 xl:ml-6 p-6 xl:p-10 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
        </div>
      </div>
    </div>
  )
}
