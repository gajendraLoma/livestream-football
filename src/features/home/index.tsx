"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Match from './Match';
import MatchList from './MatchList';
import NewsList from './NewsList';

const Home: React.FC = () => {
 
    return (
        <>
            <div className="grid">
                <div className="flex flex-col w-full h-[92vh] overflow-y-auto">
                    <div className="relative w-full h-[30vh] flex items-center">
                        <div className='flex items-center overflow-hidden h-full w-full'>
                            <Image src="/uclchamp.jpg" alt="" height={1080} width={1920} />
                        </div>
                        <div className="absolute px-3 text-white justify-center top-0 left-0 w-full flex flex-col bg-black/50 h-full">
                            <p className="text-lg font-semibold opacity-80">UCL</p>
                            <div className="flex xs:text-xl flex-wrap">
                                <p className="mt-2 font-semibold">uefa champions league draw to be confirmed</p>
                            </div>
                            <Link href={`/home`} className=''>
                                <button className={`py-1 flex mt-3 w-[150px] items-center justify-center duration-300 border-orange-600/90 border-2 text-white px-4`}>
                                    <p>More Details</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className='font-bold text-lg mt-3 ml-3'>Premier League</h1>
                        <div className={`flex flex-col rounded-lg`}>
                            <div className={`grid ltab:grid-cols-2 xtab:grid-cols-3 pb-3 phone:px-3 pt-0`}>
                      
                                    <Match />
                                
                            </div>
                            <Link href='matches'>
                                <p className='text-orange-600 mx-3 cursor-pointer hover:underline mb-2'>See All Matches</p>
                            </Link>


            <div className={`grid ltab:grid-cols-2 xtab:grid-cols-3 pb-3 phone:px-3 pt-0`}>
                      
                      <MatchList />
                  
            </div>
            <div className={`grid ltab:grid-cols-2 xtab:grid-cols-3 pb-3 phone:px-3 pt-0`}>
                      
                      <NewsList />
                  
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
