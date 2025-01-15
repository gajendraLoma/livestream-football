"use client";
import React, { useState } from 'react'
import TitleCard from "@/components/cards/title-card";

interface Team {
  id: number;
  name: string;
  country: string;
  league: string;
  logo: string;
}

const teams: Team[] = [
  {
    id: 1,
    name: "Angers",
    country: "England",
    league: "Premier League",
    logo: "/teams/77.webp"
  },
  {
    id: 2,
    name: "Barcelona",
    country: "Spain",
    league: "La Liga",
    logo: "/teams/79.webp"
  },
  {
    id: 3,
    name: "Real Madrid",
    country: "Spain",
    league: "La Liga",
 logo: "/teams/80.webp"
  },
  {
    id: 4,
    name: "Bayern Munich",
    country: "Germany",
    league: "Bundesliga",
   logo: "/teams/81.webp"
  },
  {
    id: 5,
    name: "Paris Saint-Germain",
    country: "France",
    league: "Ligue 1",
 logo: "/teams/82.webp"
  },
  {
    id: 6,
    name: "Juventus",
    country: "Italy",
    league: "Serie A",
logo: "/teams/83.webp"
  },
  {
    id: 7,
    name: "Liverpool",
    country: "England",
    league: "Premier League",
 logo: "/teams/84.webp"
  },
  {
    id: 8,
    name: "Chelsea",
    country: "England",
    league: "Premier League",
 logo: "/teams/85.webp"
  },
  {
    id: 9,
    name: "Manchester City",
    country: "England",
    league: "Premier League",
  logo: "/teams/91.webp"
  },
  {
    id: 10,
    name: "AC Milan",
    country: "Italy",
    league: "Serie A",
logo: "/teams/93.webp"
  }
];

function Teams() {

  const [content, setContent] = useState("Player")

    const handleContentChange = (name: string) => {
      setContent(name)
    }

  return (
    <>
    <TitleCard title="Meet The Football Teams" topMargin="mt-2">
    <div className="bg-gradient-to-r min-h-screen">
   
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teams.map(team => (
          <div
            key={team.id}
            className="bg-white text-black p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all"
          >
            <div className="flex justify-center mb-4">
              <img
                src={team.logo}
                alt={team.name}
                className="rounded-lg object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-blue-800 mb-2">{team.name}</h3>
            <p className="text-center text-gray-600 mb-2">{team.country}</p>
            <p className="text-center text-gray-600 mb-4">{team.league}</p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>



    </TitleCard>
</>
  );
}

export default Teams;
