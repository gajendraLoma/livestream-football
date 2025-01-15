"use client";

import Link from "next/link";
import { useState } from "react";
import TitleCard from "@/components/cards/title-card";
import Image from "next/image";

interface Data {
  id: number;
  name: string;
  logo: string;
}

const leagues: Data[] = [
  { id: 1, name: "Premier League", logo: "/leagues/league1.webp" },
  { id: 2, name: "Premier League", logo: "/leagues/league2.webp" },
  { id: 3, name: "Premier League", logo: "/leagues/league3.webp" },
  { id: 4, name: "Premier League", logo: "/leagues/league4.webp" },
  { id: 5, name: "Premier League", logo: "/leagues/league5.webp" },
  { id: 6, name: "Premier League", logo: "/leagues/league6.webp" },
  { id: 7, name: "Premier League", logo: "/leagues/league7.webp" },
  { id: 8, name: "Premier League", logo: "/leagues/league8.webp" },
  { id: 9, name: "Premier League", logo: "/leagues/league9.webp" },
  { id: 10, name: "Premier League", logo: "/leagues/league10.webp" },
  { id: 11, name: "Premier League", logo: "/leagues/league11.webp" },
  { id: 12, name: "Premier League", logo: "/leagues/league12.webp" },
  { id: 13, name: "Premier League", logo: "/leagues/league13.webp" },
  { id: 14, name: "Premier League", logo: "/leagues/league14.webp" },
  { id: 15, name: "Premier League", logo: "/leagues/league15.webp" },
  { id: 16, name: "Premier League", logo: "/leagues/league16.webp" },
  { id: 17, name: "Premier League", logo: "/leagues/league17.webp" },
  { id: 18, name: "Premier League", logo: "/leagues/league18.webp" },
];

const cups: Data[] = [
  { id: 1, name: "FIFA World Cup", logo: "/cups/cups1.webp" },
  { id: 2, name: "UEFA Champions League", logo: "/cups/cups2.webp" },
  { id: 3, name: "FA Cup", logo: "/cups/cups3.webp" },
  { id: 4, name: "Copa del Rey", logo: "/cups/cups4.webp" },
  { id: 5, name: "Copa Libertadores", logo: "/cups/cups5.webp" },

];


function Leagues() {
  const [activeTab, setActiveTab] = useState<"leagues" | "cups">("leagues");

  const displayedData = activeTab === "leagues" ? leagues : cups;

  return (
    <>
      <TitleCard title="Leagues and Cups Information" topMargin="mt-2">
        <div className="tabs tabs-boxed flex justify-start mb-4">
          <button
            className={`tab ${activeTab === "leagues" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("leagues")}
          >
            Leagues
          </button>
          <button
            className={`tab ${activeTab === "cups" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("cups")}
          >
            Cups
          </button>
        </div>
        <div className="flex flex-col min-h-[78.5vh] justify-between w-full h-full">
          <div className={`w-full h-full border-x-2 border-b-2`}>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
            >
              {displayedData.map((league: Data) => (
                <Link href={`/leagues/${league.id}`} key={league.id}>
                  <div
                    className={`flex border-2 flex-col items-center cursor-pointer`}
                  >
                    <Image
                      className="min-h-full object-cover aspect-square rounded-full my-2"
                      height="100"
                      width="100"
                      src={league.logo}
                      alt={`${league.name} Logo`}
                    />
                    <p className="text-center">Name: {league.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </TitleCard>
    </>
  );
}

export default Leagues;
