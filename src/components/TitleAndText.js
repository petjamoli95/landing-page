import Button from "./Button";
import parse from 'html-react-parser';

export default function TitleAndText({ title }) {
  return (
    <div className='flex flex-col 2xl:flex-row my-16 md:my-20 lg:my-24 xl:my-28 2xl:my-32 w-full'>
      <div className='flex-1' />
      <div className='flex-1 px-20 lg:px-40 2xl:px-80'>
        <div className='font-karla text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight 2xl:leading-tight tracking-wide'>
          {parse(title.value.title2)}
        </div>
        <div className='font-merriweather text-lg md:text-xl lg:text-2xl xl:text-3xl my-8 md:my-12 lg:my-14 xl:my-16 xl:leading-snug 2xl:leading-snug'>
        {parse(title.value.text)}
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}