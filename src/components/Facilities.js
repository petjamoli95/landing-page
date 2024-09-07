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
    <div className="w-full h-5/6 flex flex-col bg-dark justify-between py-16 items-center">
      <div className="text-white font-karla text-5xl">
        Facilities
      </div>
      <div ref={container} className="flex flex-nowrap my-16 overflow-hidden">
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
      </div>
    </div>
  )
}
