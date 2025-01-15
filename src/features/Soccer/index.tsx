"use client";

import { useState } from "react";
import TitleCard from "@/components/cards/title-card";
import FollowContent from "./followContent";
import EndContent from "./EndContent";
import ScoreContent from "./ScoreContent";
import ScheduleContent from "./ScheduleContent";


const followData = [
  {
    competition: "Taiwan Basketball",
    chapter: "Chapter 2",
    session1: 26,
    session2: 17,
    session3: 24,
    session4: 19,
    upAndDown: "43/43",
    audience: 86,
    pointsDifference: "Half: 2",
    totalScore: "Half: 88",
    isFavorite: true,
  },
  {
    competition: "Earth Armor",
    chapter: "Chapter 1",
    session1: 24,
    session2: 20,
    session3: null,
    session4: null,
    upAndDown: "44/44",
    audience: 81,
    pointsDifference: "Half: 7",
    totalScore: "Half: 81",
    isFavorite: false,
  },
  {
    competition: "Taiwan Basketball",
    chapter: "Chapter 2",
    session1: 26,
    session2: 17,
    session3: 24,
    session4: 19,
    upAndDown: "43/43",
    audience: 86,
    pointsDifference: "Half: 2",
    totalScore: "Half: 88",
    isFavorite: true,
  },
  {
    competition: "Earth Armor",
    chapter: "Chapter 1",
    session1: 24,
    session2: 20,
    session3: null,
    session4: null,
    upAndDown: "44/44",
    audience: 81,
    pointsDifference: "Half: 7",
    totalScore: "Half: 81",
    isFavorite: false,
  },
];

const scoreData = [
  {
    team1: "Barcelona",
    team2: "Real Madrid",
    score1: 2,
    score2: 3,
    date: "2025-01-12",
    time: "19:00",
    location: "Camp Nou",
    status: "Finished",
  },
  {
    team1: "Bayern Munich",
    team2: "Manchester City",
    score1: 1,
    score2: 1,
    date: "2025-01-13",
    time: "20:45",
    location: "Allianz Arena",
    status: "Draw",
  },
  {
    team1: "Barcelona",
    team2: "Real Madrid",
    score1: 2,
    score2: 3,
    date: "2025-01-12",
    time: "19:00",
    location: "Camp Nou",
    status: "Finished",
  },
  {
    team1: "Bayern Munich",
    team2: "Manchester City",
    score1: 1,
    score2: 1,
    date: "2025-01-13",
    time: "20:45",
    location: "Allianz Arena",
    status: "Draw",
  },
];

const endData = [
  {
    team1: "Arsenal",
    team2: "Chelsea",
    score1: 3,
    score2: 1,
    date: "2025-01-10",
    time: "18:30",
    location: "Emirates Stadium",
    status: "Finished",
    remarks: "Home Win",
  },
  {
    team1: "Liverpool",
    team2: "Tottenham",
    score1: 2,
    score2: 2,
    date: "2025-01-11",
    time: "20:00",
    location: "Anfield",
    status: "Draw",
    remarks: "Thrilling Match",
  },
  {
    team1: "Arsenal",
    team2: "Chelsea",
    score1: 3,
    score2: 1,
    date: "2025-01-10",
    time: "18:30",
    location: "Emirates Stadium",
    status: "Finished",
    remarks: "Home Win",
  },
  {
    team1: "Liverpool",
    team2: "Tottenham",
    score1: 2,
    score2: 2,
    date: "2025-01-11",
    time: "20:00",
    location: "Anfield",
    status: "Draw",
    remarks: "Thrilling Match",
  },
];

const scheduleData = [
  {
    team1: "Inter Milan",
    team2: "Juventus",
    date: "2025-01-14",
    time: "21:00",
    location: "San Siro",
  },
  {
    team1: "Paris Saint-Germain",
    team2: "Marseille",
    date: "2025-01-15",
    time: "19:45",
    location: "Parc des Princes",
  },
  {
    team1: "Inter Milan",
    team2: "Juventus",
    date: "2025-01-14",
    time: "21:00",
    location: "San Siro",
  },
  {
    team1: "Paris Saint-Germain",
    team2: "Marseille",
    date: "2025-01-15",
    time: "19:45",
    location: "Parc des Princes",
  },
];


function Soccer() {
  const [activeTab, setActiveTab] = useState<"Follow" | "Score" | "End" | "Schedule">("Follow");

 

  return (
    <TitleCard title="Soccer">
      <div className="tabs tabs-boxed flex justify-start mb-4">
        {["Follow", "Score", "End", "Schedule"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "tab-active" : ""}`}
            onClick={() => setActiveTab(tab as "Follow" | "Score" | "End" | "Schedule")}
          >
            {tab}
          </button>
        ))}
      </div>

        {activeTab === "Follow" && <FollowContent followData={followData} />}
        {activeTab === "Score" && <ScoreContent scoreData={scoreData} />}
        {activeTab === "End" && <EndContent  endData={endData} />}
        {activeTab === "Schedule" && <ScheduleContent scheduleData={scheduleData} />}

    </TitleCard>
  );
}

export default Soccer;
