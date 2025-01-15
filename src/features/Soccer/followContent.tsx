import React from "react";

interface FollowData {
  competition: string;
  chapter: string;
  session1: number | null;
  session2: number | null;
  session3: number | null;
  session4: number | null;
  upAndDown: string;
  audience: number;
  pointsDifference: string;
  totalScore: string;
  isFavorite: boolean;
}

interface Props {
  followData: FollowData[];
}

function FollowContent({ followData }: Props) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Competition</th>
              <th className="border border-gray-300 px-4 py-2">Chapter</th>
              <th className="border border-gray-300 px-4 py-2">Session 1</th>
              <th className="border border-gray-300 px-4 py-2">Session 2</th>
              <th className="border border-gray-300 px-4 py-2">Session 3</th>
              <th className="border border-gray-300 px-4 py-2">Session 4</th>
              <th className="border border-gray-300 px-4 py-2">Up and Down</th>
              <th className="border border-gray-300 px-4 py-2">Audience</th>
              <th className="border border-gray-300 px-4 py-2">Points Difference</th>
              <th className="border border-gray-300 px-4 py-2">Total Score</th>
              <th className="border border-gray-300 px-4 py-2">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {followData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{row.competition}</td>
                <td className="border border-gray-300 px-4 py-2">{row.chapter}</td>
                <td className="border border-gray-300 px-4 py-2">{row.session1 || "-"}</td>
                <td className="border border-gray-300 px-4 py-2">{row.session2 || "-"}</td>
                <td className="border border-gray-300 px-4 py-2">{row.session3 || "-"}</td>
                <td className="border border-gray-300 px-4 py-2">{row.session4 || "-"}</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-green-700">{row.upAndDown}</td>
                <td className="border border-gray-300 px-4 py-2">{row.audience}</td>
                <td className="border border-gray-300 px-4 py-2">{row.pointsDifference}</td>
                <td className="border border-gray-300 px-4 py-2">{row.totalScore}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className={row.isFavorite ? "text-orange-500" : "text-gray-500"}>
                    {row.isFavorite ? "★" : "☆"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FollowContent;
