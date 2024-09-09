import Image from "next/image";

export default function RoomCard({ room }) {
  return (
    <div className="relative flex inline-block">
      <Image className="block" src={`http://35.179.72.232${room.mainImage.meta.download_url}`} width={1224} height={816} alt={room.mainImage.title} />
      <div className="absolute bg-dark w-1/3 h-1/3 lg:h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-hidden">
        <div className="p-2 xs:p-4 sm:p-6 lg:p-8 flex flex-col">
          <h1 className="text-white font-karla text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-tight">{room.title}</h1>
          <a href="" className="text-red my-2 md:my-4 lg:my-8 xl:my-12 text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl">View Details</a>
          <div className="hidden lg:block flex flex-row">
            <button className='p-4 xl:p-8 font-karla text-2xl text-bold bg-red text-white'>BOOK</button>
            <button className='ml-2 xl:ml-6 p-4 xl:p-8 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
