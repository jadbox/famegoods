import React, { useEffect } from 'react';
import dynamic from "next/dynamic";
import LoginWithRoll from '../components/RollLogin';

function RollLogin() {

  // useEffect(function onFirstMount() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   console.log(urlParams);
  // }, [])

  const Login = dynamic(
    () => {
      return import("../components/RollLogin");
    },
    { ssr: false }
  );

  return (
    <>
      <div className="flex justify-center mx-auto mt-16">
        <Login />
      </div>
      <div >
        <a href='https://app.tryroll.com/createAccount/no_claim' target='_blank'>
          <button className="flex justify-center mx-auto mt-16 bg-blue-500 rounded-lg p-3 text-white text-center">
            Register on Roll
          </button>
        </a>
      </div>

    </>
  );
}

export default RollLogin;
