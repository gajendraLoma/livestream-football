"use client";

import TitleCard from "@/components/cards/title-card";

interface Player {
    id: number;
    name: string;
    country: string;
    position: string;
    image: string;
  }

  const players: Player[] = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      country: "Portugal",
      position: "Forward",
      image: "/player/player1.jpg"
    },
    {
      id: 2,
      name: "Kevin De Bruyne",
      country: "Belgium",
      position: "Midfielder",
      image: "/player/player2.jpg"
    },
    {
      id: 3,
      name: "Virgil van Dijk",
      country: "Netherlands",
      position: "Defender",
      image: "/player/player3.jpg"
    },
    {
      id: 4,
      name: "Luka Modrić",
      country: "Croatia",
      position: "Midfielder",
      image: "/player/player4.jpeg"
    },
    {
      id: 5,
      name: "Lionel Messi",
      country: "Argentina",
      position: "Forward",
      image: "/player/player5.webp"
    },
    {
      id: 6,
      name: "Sergio Busquets",
      country: "Spain",
      position: "Midfielder",
      image: "/player/player6.jpg"
    },
    {
      id: 7,
      name: "Neymar Jr.",
      country: "Brazil",
      position: "Forward",
      image: "/player/player7.jpeg"
    },
    {
      id: 8,
      name: "Sergio Ramos",
      country: "Spain",
      position: "Defender",
      image: "/player/player8.jpeg"
    },
    {
      id: 9,
      name: "Thibaut Courtois",
      country: "Belgium",
      position: "Goalkeeper",
      image: "/player/player9.jpeg"
    }
  ];
  

function Players() {
  return (
    <TitleCard title="Meet The Players" topMargin="mt-2">
    <div className="bg-gradient-to-r min-h-screen py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map(player => (
          <div key={player.id} className="text-black p-6 rounded-2xl shadow-xl hover:scale-105 transform transition-all">
            <div className="relative">
              <img
                src={player.image}
                alt={player.name}
                className="w-32 h-32 rounded-full border-4 border-green-500 mx-auto mb-4"
              />
              <div className={`absolute top-0 left-0 p-2 bg-gradient-to-r ${player.position === 'Forward' ? 'from-blue-500 to-blue-700' : player.position === 'Midfielder' ? 'from-red-500 to-red-700' : player.position === 'Defender' ? 'from-yellow-500 to-orange-700' : 'from-gray-500 to-gray-700'} text-white rounded-lg shadow-md text-xs font-bold`}>
                {player.position}
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-center text-green-800 mb-2">{player.name}</h2>
            <p className="text-center text-gray-600 mb-4">{player.country}</p>
            <div className="flex justify-center gap-4">
              <button className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors">
                Stats
              </button>
              <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </TitleCard>
  );
}

export default Players;
