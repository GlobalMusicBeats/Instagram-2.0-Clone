import React from "react";
import { SearchIcon, MenuIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function LoginHeader() {
  return (
    <div className="shadow-sm border-b big-white sticky top-0 z-58 mb-1">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24">
          <img
            className="mt-4 mb-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt=""
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <img
            className="mt-6"
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Black-Logo.wine.svg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <p className="font-bold cursor-pointer">Login</p>
        </div>
      </div>
    </div>
  );
}

export default LoginHeader;
