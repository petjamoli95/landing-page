"use client";

import Image from "next/image";

import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Rooms({ rooms }) {
  const container = useRef();
  const cardRefs = useRef([]);
  cardRefs.current = [];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(cardRefs.current, {
        yPercent: 100,
        stagger: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
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

  const addToCardRefs = el => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div ref={container} className="h-screen relative">
      {rooms.items.map((item, index) => (
          // <RoomCard room={item} ref={addToCardRefs} key={index} />
        <div ref={addToCardRefs} key={index} className="absolute inset-0 flex items-center justify-center">
          <Image className="h-4/5 w-4/5 object-contain" src={`http://35.179.72.232${item.mainImage.meta.download_url}`} width={1274} height={700} alt={item.mainImage.title} />
        </div>
      ))}
    </div>
  )
}
