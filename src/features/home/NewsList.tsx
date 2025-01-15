"use client";
import React from "react";
import TitleCard from "@/components/cards/title-card";

const LiveStreamBlogs: React.FC = () => {
  const truncateText = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  const liveStreamData = [
    {
      id: 1,
      category: "CHAMPIONS LEAGUE",
      title: "Real Madrid vs Manchester City Live Stream",
      description:
        "Watch the thrilling Champions League semifinal as Real Madrid takes on Manchester City. Tune in for live coverage and updates.",
      image: "/live-match/live1.webp",
    },
    {
      id: 2,
      category: "PREMIER LEAGUE",
      title: "Liverpool vs Chelsea: Clash of Titans",
      description:
        "Catch live updates from Anfield as Liverpool faces Chelsea in a high-stakes Premier League match.",
      image: "/live-match/live2.webp",
    },
    {
      id: 3,
      category: "LA LIGA",
      title: "El Clasico: Barcelona vs Real Madrid",
      description:
        "Experience the intensity of El Clasico with live coverage of Barcelona vs Real Madrid.",
      image: "/live-match/live3.webp",
    },
    {
      id: 4,
      category: "BUNDESLIGA",
      title: "Bayern Munich vs Borussia Dortmund",
      description:
        "Don’t miss the live action as Bayern Munich battles Borussia Dortmund in the Bundesliga showdown.",
      image: "/live-match/live4.webp",
    },
  ];

  return (
    <TitleCard title="⚽ Live Stream Football Blogs" topMargin="mt-2">
     
      <div className="flex flex-wrap justify-between">
        {liveStreamData.map((stream) => (
          <div key={stream.id} className="mb-4">
            <div className="w-72 dark:bg-slate-900 dark:text-white">
              <figure>
                <img
                  src={stream.image}
                  alt={stream.title}
                  className="w-full object-cover rounded-md"
                />
              </figure>
              <div className="card-body pt-3 pl-0 pr-0">
                <h4 className="card-title text-xs font-semibold text-[#F5C451]">
                  {stream.category}
                </h4>
                <p className="font-medium text-base leading-5">{stream.title}</p>
                <span className="text-sm font-normal text-gray-500 leading-4">
                  {truncateText(stream.description, 70)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="divider mt-2"></div>
    </TitleCard>
  );
};

export default LiveStreamBlogs;
