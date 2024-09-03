import { fetchPageData, fetchRoomData } from '../services/api';
import parse from 'html-react-parser';
import Image from 'next/image';

async function Button() {
  return (
    <div>
      <button className='p-12 font-karla text-3xl bg-red text-white'>BOOK</button>
    </div>
  )
}

function Header() {
  return (
    <div className='flex items-center justify-between px-8 py-16 bg-dark w-full'>
      <div>
        <Image src="/logo.svg" alt="The Hugo" title="The Hugo" width={300} height={109} />
      </div>
      <Button />
    </div>
  )
}

function TitleAndText({ title }) {
  return (
    <div className='flex flex-col xl:flex-row my-36 h-full'>
      <div className='flex-1' />
      <div className='flex-1 px-60'>
        <div className='font-karla text-6xl leading-tight tracking-wide'>
          {parse(title.value.title2)}
        </div>
        <div className='font-merriweather text-3xl my-16 leading-tight'>
        {parse(title.value.text)}
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function RoomCard() {
  return (
    <div>
      <div>
        Image
      </div>
      <div>
        Text
      </div>
    </div>
  ) 
}

function Rooms({ rooms }) {
  return (
    <div>
      Room Cards
    </div>
  )
}

function Facilities ({ facilities }) {
  return (
    <div>
      <div>
        Facilities
      </div>
      <div>
        <FacilityIcon />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}

function FacilityIcon() {
  return (
    <div>
      Facility Icons
    </div>
  )
}

function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}

export async function generateMetadata() {
  const { meta } = await fetchPageData();

  return {
    tite: meta.seo_title,
    description: meta.search_description
  };
}

export default async function Page() {
  const [pageData, roomData] = await Promise.all([fetchPageData(), fetchRoomData()]);
  const titleData = pageData.body[0];
  const facilityData = pageData.body[1];

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <TitleAndText title={titleData} />
        <Rooms rooms={roomData} />
      </div>
      {/* <Facilities facilities={facilityData} />
      <Footer /> */}
    </div>
    // <div>
    //   <h1>Page Data</h1>
    //   <pre>{JSON.stringify(pageData, null, 2)}</pre>
    // </div>
  )
}
