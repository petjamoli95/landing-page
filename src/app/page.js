import { fetchPageData, fetchRoomData } from '../services/api';
import Button from '@/components/Button';
import Facilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Rooms from '@/components/Rooms';
import TitleAndText from '@/components/TitleAndText';

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
      <div className='min-h-screen relative overflow-auto flex flex-col justify-between items-center'>
        <Header />
        <TitleAndText title={titleData} />
      </div>
      <Rooms rooms={roomData} />
      <div className='h-screen flex flex-col justify-between items-center'>
        <Facilities facilities={facilityData} />
        <Footer />
      </div>
      
    </div>
    // <div>
    //   <h1>Page Data</h1>
    //   <pre>{JSON.stringify(pageData, null, 2)}</pre>
    // </div>
  )
}
