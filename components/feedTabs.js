import React, { useState, useEffect } from "react";

export default function feedTabs(openTab, setOpenTab) {
    return (
        <div className="bg-white pt-4 pb-2 justify-left fixed w-full z-10 mt-10 rounded-b-lg px-5">
            <ul
                className="flex mb-0 list-none flex-wrap pb-4 flex-row"
                role="tablist"
            >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                        className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 1
                                ? "text-" + "black" + " bg-white"
                                : "text-" + "black" + " bg-white text-opacity-25")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#discovery"
                        role="tablist"
                    >
                        Discovery
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                        className={
                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === 2
                                ? "text-" + "black" + " bg-white"
                                : "text-" + "black" + " bg-white text-opacity-25")
                        }
                        onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#membership"
                        role="tablist"
                    >
                        Membership
                  </a>
                </li>
            </ul>
        </div>
    );
}