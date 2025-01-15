"use client";

import { useState } from "react";
import TitleCard from "@/components/cards/title-card";
import Image from 'next/image';
import Link from 'next/link';

interface Match {
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  matchDate: string;
  matchTime: string;
  stadium: string;
}

const matchData: Match[] = [
  {
    team1: "West Ham",
    team1Logo: "./tem1.png",
    team2: "Liverpool",
    team2Logo: "./36.png",
    matchDate: "2025-01-14",
    matchTime: "19:30",
    stadium: "London Stadium",
  },
  {
    team1: "Chelsea",
    team1Logo: "./49.png",
    team2: "Manchester United",
    team2Logo: "./35.png",
    matchDate: "2025-01-14",
    matchTime: "20:00",
    stadium: "Stamford Bridge",
  },
  {
    team1: "Barcelona",
    team1Logo: "./55.png",
    team2: "Real Madrid",
    team2Logo: "./50.png",
    matchDate: "2025-01-15",
    matchTime: "22:00",
    stadium: "Camp Nou",
  },
  {
    team1: "Bayern Munich",
    team1Logo: "./tem1.png",
    team2: "Paris Saint-Germain",
    team2Logo: "./36.png",
    matchDate: "2025-01-15",
    matchTime: "18:30",
    stadium: "Allianz Arena",
  },
  {
    team1: "Juventus",
    team1Logo: "./49.png",
    team2: "AC Milan",
    team2Logo: "./35.png",
    matchDate: "2025-01-16",
    matchTime: "21:00",
    stadium: "Allianz Stadium",
  },
  {
    team1: "Manchester City",
    team1Logo: "./55.png",
    team2: "Tottenham Hotspur",
    team2Logo: "./50.png",
    matchDate: "2025-01-16",
    matchTime: "19:00",
    stadium: "Etihad Stadium",
  },
  {
    team1: "Arsenal",
    team1Logo: "./tem1.png",
    team2: "Newcastle United",
    team2Logo: "./36.png",
    matchDate: "2025-01-17",
    matchTime: "20:45",
    stadium: "Emirates Stadium",
  },
  {
    team1: "AC Milan",
    team1Logo: "./49.png",
    team2: "Inter Milan",
    team2Logo: "./35.png",
    matchDate: "2025-01-18",
    matchTime: "22:00",
    stadium: "San Siro",
  },
  {
    team1: "Real Madrid",
    team1Logo: "./55.png",
    team2: "Atletico Madrid",
    team2Logo: "./50.png",
    matchDate: "2025-01-19",
    matchTime: "19:00",
    stadium: "Santiago Bernabéu",
  },
  {
    team1: "Borussia Dortmund",
    team1Logo: "./49.png",
    team2: "RB Leipzig",
    team2Logo: "./50.png",
    matchDate: "2025-01-20",
    matchTime: "18:30",
    stadium: "Signal Iduna Park",
  },
];

function Matches() {
  return (
    <>
      <div className="grid">
                <div className="flex flex-col w-full pb-8 overflow-y-auto">
                    <div className="relative w-full h-[40vh] flex items-center">
                        <div className='flex items-center overflow-hidden h-full w-full'>
                            <Image src="/match-banner.png" alt="" height={1080} width={1920} />
                        </div>
                        <div className="absolute px-3 text-white justify-center top-0 left-0 w-full flex flex-col bg-black/50 h-full">
                        <img src="./match-banner-logo.webp" className="w-20	h-20 mb-2" alt=""  />

                            <p className="text-3xl font-semibold opacity-80">Supercopa de Espana
                            </p>
                            <div className="flex xs:text-xl flex-wrap pt-3">
                                <p className="mt-2 font-semibold"><span className="uppercase text-black italic bg-slate-50 p-2"> Football </span> &nbsp; &nbsp; 08 Jan - 12 Jan, 2025 &nbsp; &nbsp; &nbsp; • 10 Matches </p>
                            </div>
                           
                        </div>
                    </div>
                     </div>
                    </div>
      <TitleCard title="⚽ Football Match | List" topMargin="mt-2">
    



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchData.map((match, index) => (
            <div
              key={index}
              className="flex gap-4 items-center border-[#e5e7eb] hover:bg-stone-300/30 gap-y-[15px] rounded-[16px] border px-[39px] pt-[30px] pb-[15px]"
            >
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                  src={match.team1Logo}
                  alt={match.team1}
                />
                <p className="font-semibold mt-2 text-center">{match.team1}</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                  src="./39.png"
                  alt="Match Time"
                />
                <p className="font-semibold mt-2 text-center">
                  {match.matchDate} <br />
                  {match.matchTime}
                </p>
                <p className="font-semibold mt-2 text-center">{match.stadium}</p>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <img
                  className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                  src={match.team2Logo}
                  alt={match.team2}
                />
                <p className="font-semibold mt-2 text-center">{match.team2}</p>
              </div>
            </div>
          ))}
        </div>
      </TitleCard>
    </>
  );
}

export default Matches;
