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
    <div className="flex justify-center mx-auto mt-16">
      <Login />
    </div>
  );
}

export default RollLogin;
