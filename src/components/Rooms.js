"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
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
        yPercent: 100,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=4000px',
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative inline-block">
          <Image className="block" src={`http://35.179.72.232${rooms.items[0].mainImage.meta.download_url}`} width={1274} height={816} alt={rooms.items[0].mainImage.title} />
          <div className="p-8 font-karla absolute bg-dark w-1/3 h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-auto">
            <h1 className="text-white text-5xl leading tight">{rooms.items[0].title}</h1>
            <p className="text-red my-12 text-2xl">View Details</p>
            <div className="flex flex-row">
              <Button />
              <button className='ml-6 p-8 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
            </div>
          </div>
        </div>
      </div>
      {rooms.items.map((item, index) => index !== 0 ? (
        <div ref={(el) => cardRefs.current[index] = el} key={index} className="absolute inset-0 flex items-center justify-center">
          <div className="relative inline-block">
            <Image className="block" src={`http://35.179.72.232${item.mainImage.meta.download_url}`} width={1274} height={816} alt={item.mainImage.title} />
            <div className="p-8 font-karla absolute bg-dark w-1/3 h-1/2 bottom-10 left-10 flex flex-col justify-center overflow-auto">
              <h1 className="text-white text-5xl leading-tight">{item.title}</h1>
              <p className="text-red my-12 text-2xl">View Details</p>
              <div className="flex flex-row">
                <Button />
                <button className='ml-6 p-8 font-karla text-2xl text-bold bg-white'>ENQUIRE</button>
              </div>
            </div>
          </div>
        </div>
      ): null
      )}
    </div>
  )
}
