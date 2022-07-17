import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import { auth, provider } from "../firebase";
import { signInWithGoogle } from "../firebase";
import { useHistory } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
//import { useStateValue } from './StateProvider';

function SignIn() {
  const [{}, dispath] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispath({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <LoginHeader />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -m-56 px-14 text-center pt-60">
        <img
          className="w-70"
          src="https://www.pngmart.com/files/13/Instagram-Logo-PNG-Transparent.png"
          alt=""
        />
        <p className="font-xs italic">
          This is not a Real app, it is build for educational purpose only
        </p>
        <div className="mt-20">
          <div>
            <button
              className="p-3 bg-blue-500 rounded-lg text-white"
              onClick={signIn}
            >
              <i></i>Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
