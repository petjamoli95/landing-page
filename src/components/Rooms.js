"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Rooms({ rooms }) {
  const container = useRef();
  const cardRefs = useRef([]);
  cardRefs.current = [];


  useGSAP(
    () => {
      gsap.from(cardRefs.current, {
        yPercent: 200,
        ease: "none",
        stagger: 0.5,
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=8000px',
          markers: true,
          scrub: true,
          pin: true,
          pinSpacing: true,
        }
      }
      )
  },
  { scope: container }
  );

  return (
    <div ref={container} className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center m-8">
        <div className="relative inline-block">
          <Image className="block" src={`http://35.179.72.232${rooms.items[0].mainImage.meta.download_url}`} width={1224} height={816} alt={rooms.items[0].mainImage.title} />
          <div className="p-8 absolute bg-dark w-1/3 h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-hidden">
            <h1 className="text-white absolute top-2 left-2 lg:top-5 lg:left-5 font-karla text-xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading tight">{rooms.items[0].title}</h1>
            <a href="" className="text-red absolute bottom-5 left-2 lg:bottom-40 lg:left-5 text-md sm:text-md md:text-2xl">View Details</a>
            <div className="absolute hidden lg:block flex lg:bottom-5 lg:left-5 flex-row">
              <button className='p-6 xl:p-10 font-karla text-2xl text-bold bg-red text-white'>BOOK</button>
              <button className='ml-3 xl:ml-6 p-6 xl:p-10 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
            </div>
          </div>
        </div>
      </div>
      {rooms.items.map((item, index) => index !== 0 ? (
        <div ref={(el) => cardRefs.current[index] = el} key={index} className="absolute inset-0 flex flex-col items-center justify-center m-8">
          <div className="relative inline-block">
            <Image className="block" src={`http://35.179.72.232${item.mainImage.meta.download_url}`} width={1224} height={816} alt={item.mainImage.title} />
            <div className="p-8 absolute bg-dark w-1/3 h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-hidden">
              <h1 className="text-white absolute top-2 left-2 lg:top-5 lg:left-5 font-karla text-xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading tight">{item.title}</h1>
              <a href="" className="text-red absolute bottom-5 left-2 lg:bottom-40 lg:left-5 text-md sm:text-md md:text-2xl">View Details</a>
              <div className="absolute hidden lg:block flex lg:bottom-5 lg:left-5 flex-row">
                <button className='p-6 xl:p-10 font-karla text-2xl text-bold bg-red text-white'>BOOK</button>
                <button className='ml-3 xl:ml-6 p-6 xl:p-10 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
              </div>
            </div>
          </div>
        </div>
      ): null
      )}
    </div>
  )
}
