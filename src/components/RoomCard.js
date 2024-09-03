import Image from "next/image"

export default function RoomCard({ room }) {
  return (
    <div className="card">
      <Image src={`http://35.179.72.232${room.mainImage.meta.download_url}`} width={1274} height={700} alt={room.mainImage.title} />
    </div>
  ) 
}
