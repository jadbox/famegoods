import { useState, useEffect } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.contentUrl.value);
  //Submit url somewhere or store it in local state?
}

export default function ExternalContentSubmitForm() {

	return (
		<div className="mt-6">
      <form onSubmit={handleSubmit} >
        <label className="text-gray-800 uppercase tracking-wide font-bold">
          Enter your content's URL
        </label>
        <input
          name="contentUrl"
          className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
          type="text"
        />
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
	);
}