"use client";

import React from "react";
import { useRouter } from "next/navigation"; 


const Match = () => {
 
	const router = useRouter();
    return (
        <>
    <div className={`flex pt-4 justify-between items-center`}>
        <div onClick={() => router.push(`/matches`)} className="flex gap-4 items-center border-[#e5e7eb] bg-stone-300/30 gap-y-[15px] rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./tem1.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img className="aspect-square max-w-[70px] max-w-[60px] max-w-[40px]"
                    src="./39.png"
                   
                />
                <p className="font-semibold mt-2 text-center">
                    2025-01-14 <br/>

                    19:30</p>
                <p className="font-semibold mt-2 text-center">
                London Stadium</p>
            </div>
           
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./36.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
           
        </div>
        <div className="flex gap-4 items-center border-[#e5e7eb] hover:bg-stone-300/30 gap-y-[15px] rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./49.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square max-w-[70px] max-w-[60px] max-w-[40px]"
                    src="./39.png"
                   
                />
                <p className="font-semibold mt-2 text-center">
2025-01-14 <br/>

19:30</p>
                <p className="font-semibold mt-2 text-center">
                London Stadium</p>
            </div>
           
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./35.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
           
        </div>
        <div className="flex gap-4 items-center border-[#e5e7eb] hover:bg-stone-300/30  gap-y-[15px] rounded-[16px] border  px-[39px] pt-[30px] pb-[15px]">
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./55.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square max-w-[70px] max-w-[60px] max-w-[40px]"
                    src="./39.png"
                   
                />
                <p className="font-semibold mt-2 text-center">
2025-01-14 <br/>

19:30</p>
                <p className="font-semibold mt-2 text-center">
                London Stadium</p>
            </div>
           
            <div className="flex flex-col items-center cursor-pointer">
                <img
                    className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
                    src="./50.png"
                   
                />
                <p className="font-semibold mt-2 text-center">West Ham</p>
            </div>
           
        </div>
    </div>
   
    </>
    )}

export default Match;
