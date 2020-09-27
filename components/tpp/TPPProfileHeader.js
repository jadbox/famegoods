import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";

export default function ProfileHeader({ address }) {



    return (
        <div className="flex flex-auto">
            <img
                className="h-12 w-12 object-cover rounded-full shadow-lg"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                alt="User profile image"
            />
            <div className="flex font-mont">
                <p className="ml-4 text-extrabold tracking-wide text-black text-lg align-text-top font-mont align-middle capitalize">
                    Jennifer Tran
                </p>
            </div>
        </div>
    );
}