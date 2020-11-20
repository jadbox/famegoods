import React from 'react';
import { Icon } from "@iconify/react";
import searchSolid from "@iconify/icons-la/search-solid";

export default function ButtonWhite() {

    return (
        <button
            className="block w-full h-12 py-2 rounded-full text-black bg-white border-2 border-gray-200 font-karla text-sm font-medium uppercase tracking-wider shadow-md hover:shadow hover:bg-white hover:text-black focus:shadow-none focus:outline-none transition duration-150 ease-in-out mb-3"
            onClick={this.props.handleClick}>{this.props.label}</button>
    )
}