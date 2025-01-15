import React from "react";

interface ScheduleData {
  team1: string;
  team2: string;
  date: string;
  time: string;
  location: string;
}

interface Props {
  scheduleData: ScheduleData[];
}

function ScheduleContent({ scheduleData }: Props) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Team 1</th>
              <th className="border border-gray-300 px-4 py-2">Team 2</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{row.team1}</td>
                <td className="border border-gray-300 px-4 py-2">{row.team2}</td>
                <td className="border border-gray-300 px-4 py-2">{row.date}</td>
                <td className="border border-gray-300 px-4 py-2">{row.time}</td>
                <td className="border border-gray-300 px-4 py-2">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleContent;
