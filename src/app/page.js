import { fetchPageData, fetchRoomData } from '../services/api';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TitleAndText from '@/components/TitleAndText';
import Rooms from '@/components/Rooms';

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
    <div className='flex flex-col justify-center items-center w-screen'>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <TitleAndText title={titleData} />
        <Rooms rooms={roomData} />
      </div>
      {/* <Facilities facilities={facilityData} /> */}
      <Footer />
    </div>
    // <div>
    //   <h1>Page Data</h1>
    //   <pre>{JSON.stringify(pageData, null, 2)}</pre>
    // </div>
  )
}
