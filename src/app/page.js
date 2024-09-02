import { fetchPageData, fetchRoomData } from '../services/api';
import parse from 'html-react-parser';

async function Button() {
  return (
    <div>
      <button className='py-6 px-7 font-karla bg-red text-white'>BOOK</button>
    </div>
  )
}

function Header() {
  return (
    <div>
      <Button />
    </div>
  )
}

function TitleAndText({ title }) {
  return (
    <div className='flex flex-col xl:flex-row p-64'>
      <div className='flex-1' />
      <div className='flex-1'>
        <div className='font-karla text-5xl'>
          {parse(title.value.title2)}
        </div>
        <div className='font-merriweather text-xl my-10'>
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
      {/* <Header /> */}
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
