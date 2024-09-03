"use client";

import RoomCard from "./RoomCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Rooms({ rooms }) {
  return (
    <div className="flex flex-col items-center">
      {rooms.items.map((item, index) => (
        <div key={index}>
          <RoomCard room={item} />
        </div>
      ))}
    </div>
  )
}
