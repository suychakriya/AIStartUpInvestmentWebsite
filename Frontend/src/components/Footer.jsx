import React from "react";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import { GlobeAltIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-16 sm:px-20 py-5  text-gray-600">
        <div className="space-y-4">
         <img 
         src="/Images/logo.png"
         alt="logo" />
        </div>

        <div className="space-y-4 ">
          <Link href="">
            <h5 className="font-bold text-sm text-primary p-3">About us</h5>
          </Link>
          <Link href="/property-type/camping">
            <h5 className="font-bold text-sm text-primary p-3">Terms and Conditions</h5>
          </Link>
          
        </div>

        <div className="space-y-4 ">
            <Link href="">
                <h5 className="font-bold text-sm text-primary p-3">Privacy Policy</h5>
             </Link>
            <Link href="/property-type/camping">
                <h5 className="font-bold text-sm text-primary p-3">Blog</h5>
            </Link>
        </div>
        <div className="space-y-4">
            <p className="text-sm font-bold">Inquiry</p>
            <form
            className="mx-auto  hidden  justify-center md:flex"
            >
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="w-[110%] border rounded-l-lg border-gray-300 p-1 text-sm bg-gray-200 focus:ring-0"
                placeholder="Email Address"
              />
              <button
                className="w-[40%] rounded-r-lg shadow-md px-2 text-sm font-bold text-white bg-primary"
                type="submit"
                id="button-addon2"
              >
                <p className="pb-1">Contact me</p>
              </button>
            </form>
        </div>
      </div>
      <div className="flex items-center justify-center w-11/12" />
      <div
        className="w-11/12 mx-auto  "
        style={{ border: "1px solid lightgray" }}
      ></div>
      <div className="  w-11/12 p-2">
        <p className="relative text-xs text-black" style={{ left: "5%" }}>
         Copyright © {new Date().getFullYear()} Suy Chakriya
        </p>
      </div>
    </div>
  );
}


