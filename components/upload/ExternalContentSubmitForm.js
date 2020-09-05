import { useState, useEffect } from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  const url = e.target.contentUrl.value;
  //Send url to ContentCard?
}

export default function ExternalContentSubmitForm() {

	return (
		<div className="mt-6">
      <span>Share a private link with your community. Make sure that the content is only visible for those who have the link. <a className="text-blue-400">Learn more...</a></span>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex justify-center my-6">
          <textarea
            name="description"
            placeholder="Add a description..."
            className="leading-tight tracking-wide appearance-none border-2 border-gray-500 mt-2 p-2 rounded-lg w-full placeholder-gray-600 font-normal leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center pb-6">
          <input
            name="contentUrl"
            placeholder="https://"
            className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
          />
        </div>        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Share the Link
          </button>
        </div>
      </form>
    </div>
	);
}