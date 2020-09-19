import React from "react";
import Head from "next/head";
import Link from "next/link";
import FeedButton from "components/Desktop/feedButton"
import DiscoverButton from "components/Desktop/discoverButton"
import ExchangeButton from "components/Desktop/exchangeButton"
import ProfileButton from "components/Desktop/profileButton"

export default function Header() {
    return (
        <div>
            <nav className="fixed h-16 bg-white w-full top-0 flex rounded-t-lg">
                <div className="flex items-center justify-between w-4/5 mx-auto py-2">
                    <FeedButton></FeedButton>
                    <DiscoverButton></DiscoverButton>
                    <ExchangeButton></ExchangeButton>
                    <ProfileButton></ProfileButton>
                </div>
            </nav>
        </div>
    );
}
