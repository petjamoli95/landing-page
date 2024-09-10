"use client";

import RoomCard from "./RoomCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Rooms({ rooms }) {
  const container = useRef();
  const cardRefs = useRef([]);
  cardRefs.current = [];


  useGSAP(
    () => {
      gsap.from(cardRefs.current, {
        yPercent: 200,
        ease: "power4.inOut",
        stagger: 0.5,
        delay: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=12000px',
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
    <div ref={container} className="h-screen flex relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center m-8">
        <RoomCard room={rooms.items[0]} />
      </div>
      {rooms.items.map((item, index) => index !== 0 ? (
        <div ref={(el) => cardRefs.current[index] = el} key={index} className="absolute inset-0 flex flex-col items-center justify-center m-8">
          <RoomCard room={item} />
        </div>
      ): null
      )}
    </div>
  )
}
