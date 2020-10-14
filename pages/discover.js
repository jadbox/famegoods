import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import angleRightSolid from '@iconify/icons-la/angle-right-solid';
import ProfileCard from '../components/ProfileCard';


export default function Discover() {
    return (
        <section className="blog text-gray-700 body-font">
            <div className="container px-5 pt-24 md:pt-32 mx-auto overflow-auto">
                <div className="flex flex-wrap w-full flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Discover Creators</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-2">
                        <div className="my-2 flex sm:flex-row flex-col">
                            <div className="relative">
                                <select
                                    className="appearance-none h-full rounded-lg border-2 border-gray-200 block w-full bg-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-200">
                                    <option>New Tokens</option>
                                    <option>Date created</option>
                                    <option>Value</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="grid grid-cols-3 gap-x-6 gap-y-0">
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                                <div
                                    class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
                                >
                                    <ProfileCard></ProfileCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


