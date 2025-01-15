import React from "react";

interface EndData {
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  date: string;
  time: string;
  location: string;
  status: string;
  remarks: string;
}

interface Props {
  endData: EndData[];
}

function EndContent({ endData }: Props) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Team 1</th>
              <th className="border border-gray-300 px-4 py-2">Team 2</th>
              <th className="border border-gray-300 px-4 py-2">Score 1</th>
              <th className="border border-gray-300 px-4 py-2">Score 2</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {endData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{row.team1}</td>
                <td className="border border-gray-300 px-4 py-2">{row.team2}</td>
                <td className="border border-gray-300 px-4 py-2">{row.score1}</td>
                <td className="border border-gray-300 px-4 py-2">{row.score2}</td>
                <td className="border border-gray-300 px-4 py-2">{row.date}</td>
                <td className="border border-gray-300 px-4 py-2">{row.time}</td>
                <td className="border border-gray-300 px-4 py-2">{row.location}</td>
                <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                <td className="border border-gray-300 px-4 py-2">{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EndContent;
