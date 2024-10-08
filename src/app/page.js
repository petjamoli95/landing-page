import Facilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Rooms from '@/components/Rooms';
import TitleAndText from '@/components/TitleAndText';

import { fetchPageData, fetchRoomData } from '../services/api';

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
  const facilityData = pageData.body[1].value.icons;

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-start items-center'>
        <Header />
        <TitleAndText title={titleData} />
      </div>
      <Rooms rooms={roomData} />
      <Facilities facilities={facilityData} />
      <Footer />
    </div>
  )
}
