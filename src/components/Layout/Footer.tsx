import React from "react";
import Title from "../common/Title";
import { NavLink } from "../common/Link";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { title } from "process";
const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "About",

    path: "/about",
  },
  {
    title: "Contact us ",
    path: "/contact",
  },

  // {
  //   title: "articles",
  //   path: "/article",
  // },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 sm:p-4 sm:py-8 ">
      <div className="flex justify-between items-start  py-4 px-8 sm:px-8">
        <div className=" flex flex-col justify-start gap-3 ">
          <Title color="blue-950 gap-4 " />
          <div className="link  justify-start gap-3 flex sm:hidden ">
            <NavLink
              color={"text-black"}
              link={{ path: "#terms", title: `` }}
              children={<FaInstagram className="text-base md:text-2xl" />}
              pathname={""}
              handler={() => {}}
            />
            <NavLink
              color={"text-black"}
              link={{ path: "#terms", title: `` }}
              children={<FaLinkedinIn className="text-base md:text-2xl" />}
              pathname={""}
              handler={() => {}}
            />
            <NavLink
              color={"text-black"}
              link={{ path: "#terms", title: `` }}
              children={<FaYoutube className="text-base md:text-2xl" />}
              pathname={""}
              handler={() => {}}
            />
          </div>
        </div>
        <div className="link flex flex-col sm:flex-row justify-center  items-center gap-2 ">
          {navLinks.map((link, index) => (
            <NavLink
              color={"text-black"}
              key={index}
              link={link}
              pathname={""}
              handler={() => {}}
            />
          ))}
        </div>
        <div className="link flex gap-3 hidden sm:flex ">
          <NavLink
            color={"text-black"}
            link={{ path: "#terms", title: `` }}
            children={<FaInstagram className="text-base md:text-2xl" />}
            pathname={""}
            handler={() => {}}
          />
          <NavLink
            color={"text-black"}
            link={{ path: "#terms", title: `` }}
            children={<FaLinkedinIn className="text-base md:text-2xl" />}
            pathname={""}
            handler={() => {}}
          />
          <NavLink
            color={"text-black"}
            link={{ path: "#terms", title: `` }}
            children={<FaYoutube className="text-base md:text-2xl" />}
            pathname={""}
            handler={() => {}}
          />
        </div>
      </div>
      <div className="border-t text-xs  border-white_dimmer sm:mx-16 my-2 py-2 px-2 flex flex-col sm:flex-row justify-around  sm:justify-center items-center gap-6 text-gray_normal text-center capitalize">
        <div className="links flex flex-col sm:flex-row gap-1 ">
          <NavLink
            style="underline"
            color={"text-black"}
            link={{ title: "Privacy policy", path: "#privacy" }}
            pathname={""}
            handler={() => {}}
          />
          <NavLink
            style="underline"
            color={"text-black"}
            link={{ path: "#terms", title: "terms and conditions" }}
            pathname={""}
            handler={() => {}}
          />
        </div>
        <div>@2023 MogaCharity. All right reserved </div>
      </div>
    </footer>
  );
}
