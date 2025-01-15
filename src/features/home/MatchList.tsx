"use client";

import React from "react";

interface Team {
  rank: number;
  club: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
}

const standings: Team[] = [
  { rank: 1, club: "Liverpool", mp: 19, w: 14, d: 4, l: 1, gf: 47, ga: 19, gd: 28, pts: 46 },
  { rank: 2, club: "Arsenal", mp: 20, w: 11, d: 7, l: 2, gf: 39, ga: 18, gd: 21, pts: 40 },
  { rank: 3, club: "Nottingham Forest", mp: 20, w: 12, d: 4, l: 4, gf: 29, ga: 19, gd: 10, pts: 40 },
  { rank: 4, club: "Chelsea", mp: 20, w: 10, d: 6, l: 4, gf: 39, ga: 24, gd: 15, pts: 36 },
  { rank: 5, club: "Newcastle", mp: 20, w: 10, d: 5, l: 5, gf: 34, ga: 22, gd: 12, pts: 35 },
  { rank: 6, club: "Manchester City", mp: 20, w: 10, d: 4, l: 6, gf: 36, ga: 27, gd: 9, pts: 34 },
  { rank: 7, club: "Bournemouth", mp: 20, w: 9, d: 6, l: 5, gf: 30, ga: 23, gd: 7, pts: 33 },
  { rank: 8, club: "Aston Villa", mp: 20, w: 9, d: 5, l: 6, gf: 30, ga: 32, gd: -2, pts: 32 },
  { rank: 9, club: "Fulham", mp: 20, w: 7, d: 9, l: 4, gf: 30, ga: 27, gd: 3, pts: 30 },
  { rank: 10, club: "Brighton", mp: 20, w: 6, d: 10, l: 4, gf: 30, ga: 29, gd: 1, pts: 28 },
  { rank: 11, club: "Brentford", mp: 20, w: 8, d: 3, l: 9, gf: 38, ga: 35, gd: 3, pts: 27 },
  { rank: 12, club: "Tottenham", mp: 20, w: 7, d: 3, l: 10, gf: 42, ga: 30, gd: 12, pts: 24 },
  { rank: 13, club: "Manchester United", mp: 20, w: 6, d: 5, l: 9, gf: 23, ga: 28, gd: -5, pts: 23 },
  { rank: 14, club: "West Ham", mp: 20, w: 6, d: 5, l: 9, gf: 24, ga: 39, gd: -15, pts: 23 },
  { rank: 15, club: "Crystal Palace", mp: 20, w: 4, d: 9, l: 7, gf: 21, ga: 28, gd: -7, pts: 21 },
  { rank: 16, club: "Everton", mp: 19, w: 3, d: 8, l: 8, gf: 15, ga: 25, gd: -10, pts: 17 },
  { rank: 17, club: "Wolves", mp: 20, w: 4, d: 4, l: 12, gf: 31, ga: 45, gd: -14, pts: 16 }
];

const MatchList: React.FC = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border border-gray-300">Sr No.</th>
            <th className="p-2 border border-gray-300">Club</th>
            <th className="p-2 border border-gray-300">MP</th>
            <th className="p-2 border border-gray-300">W</th>
            <th className="p-2 border border-gray-300">D</th>
            <th className="p-2 border border-gray-300">L</th>
            <th className="p-2 border border-gray-300">GF</th>
            <th className="p-2 border border-gray-300">GA</th>
            <th className="p-2 border border-gray-300">GD</th>
            <th className="p-2 border border-gray-300">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr
              key={team.rank}
              className="hover:bg-gray-200 transition-colors"
            >
              <td className="p-2 border border-gray-300">{team.rank}</td>
              <td className="p-2 border border-gray-300">{team.club}</td>
              <td className="p-2 border border-gray-300">{team.mp}</td>
              <td className="p-2 border border-gray-300">{team.w}</td>
              <td className="p-2 border border-gray-300">{team.d}</td>
              <td className="p-2 border border-gray-300">{team.l}</td>
              <td className="p-2 border border-gray-300">{team.gf}</td>
              <td className="p-2 border border-gray-300">{team.ga}</td>
              <td className="p-2 border border-gray-300">{team.gd}</td>
              <td className="p-2 border border-gray-300">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchList;
