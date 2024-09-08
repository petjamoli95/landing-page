"use client";

import parse from 'html-react-parser';

import Image from "next/image";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Facilities ({ facilities }) {
  const container = useRef();
  const facilityRefs = useRef([]);
  facilityRefs.current = [];

  return (
    <div className="h-screen overflow-hidden bg-dark">
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-center'>
        {facilities.map((item, index) =>
          <div ref={(el) => facilityRefs.current[index] = el} key={index} className='bg-white mx-5'>
            <div className='w-96 h-96 flex items-center justify-center'>
              <Image src={`http://35.179.72.232${item.image.original.src}`} width={312} height={312} alt={item.image.original.alt}/>
            </div>
          </div>
        )}
        </div>
      </div>
      {/* <div className="text-white font-karla text-5xl">
        Facilities
      </div>
      <div ref={container} className="w-full h-full flex flex-nowrap my-16 overflow-hidden">
        {facilities.map((item, index) =>
          <div ref={(el) => facilityRefs.current[index] = el} key={index} className="bg-white flex p-16 flex-nowrap flex-col mx-4 items-center justify-center">
            <Image src={`http://35.179.72.232${item.image.original.src}`} width={312} height={312} alt={item.image.original.alt}/>
            <div className="font-karla text-4xl justify-center items-center">
              {parse(item.title)}
            </div>
          </div>
        )}
      </div>
      <div>
        <Button />
      </div> */}
    </div>
  )
}
