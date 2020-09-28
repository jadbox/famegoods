import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import SetTicket from "./SetTicket";


export default function ExternalContentSubmitForm() {
  const [state, setState] = useState({});
  const [formdata, setFormData] = useState({ tokens: 1 });

  const { state: ostate, actions } = useOvermind();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.contentUrl.value;
    console.log(url);
    setState((x) => ({ ...x, contentUrl: url }));
  }

  function onTokenChange(tokens) {
    // console.log("onTokenChange", tokens);
    setFormData((x) => ({ ...x, tokens }));
  }

  return (
    <div className="justify-center mt-6">
      <span>Share a private link with your community. Make sure that the content is only visible for those who have the link. <a className="text-purple-600">Learn more...</a></span>
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
        {ostate.user.balances.length > 0 && (
          <SetTicket
            tokens={ostate.user.balances}
            onChange={onTokenChange}
          ></SetTicket>
        )}
        {ostate.user.balances.length === 0 && (
          <p>You currently do not have any tokens</p>
        )}
        <div className="flex justify-center mb-8">
          <button
            type="submit"
            className="overflow-visible mb-8 mt-4 w-full h-12 bg-black rounded-lg hover:bg-gray-700 text-white font-semibold rounded shadow-lg sm:h-16"
          >
            Share the Link
          </button>
        </div>
      </form>
    </div>
  );
}