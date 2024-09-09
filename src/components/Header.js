import Button from "./Button";
import Image from "next/image";

export default function Header() {
  return (
    <div className='flex items-center justify-between px-8 py-12 bg-dark w-full'>
      <div className="mr-8">
        <Image src="/logo.svg" alt="The Hugo" title="The Hugo" width={300} height={109} />
      </div>
      <Button />
    </div>
  )
}