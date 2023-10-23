import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { NavLink } from "../common/Link";
import Title from "../common/Title";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "About Us",

    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "Contact us ",
    path: "/contact",
  },
];
type MobileNavPropI = {
  mobileView: boolean;
  blueBg: boolean;
  router: any;
  closeMobileView: Function;
};

const MobileNav = (props: MobileNavPropI) => {
  const { mobileView, blueBg, router, closeMobileView } = props;
  return (
    <div
      className={`mobile_nav  bg-gradient-to-br  fixed flex flex-col w-full h-full left-0 top-[8vh]  border-t-gray_lighter border-t  sm:hidden  origin-top z-[500] ${
        mobileView ? "animate-mobileNav_slideDown" : "animate-mobileNav_slideUp"
      }
        ${
          blueBg
            ? "from-main to-main_lighter"
            : "from-white_dim to-white_dimmer"
        } `}
    >
      <div className="mobile_navbar_navlist flex flex-col gap-10 px-4 pt-[15%]  capitalize  justify-around items-center px-[20%] gap-6 capitalize tracking-wider">
        {navLinks.map((link, index) => (
          <NavLink
            color={blueBg ? "text-white" : "text-main_black"}
            key={index}
            link={link}
            pathname={router?.pathname}
            handler={closeMobileView}
          />
        ))}
      </div>
      {true ? (
        <div className=" text-center my-8  capitalize tracking-wider text-base flex flex-col gap-6  w-fit mx-auto">
          <button
            className="font-semibold px-12 py-3 w-fit  border border-transparent  text-center text-base 
    rounded-full   sm:bg-main_darker sm:hover:border-white sm:hover:bg-transparent  text-white  tracking-wider capitalize"
            onClick={() => {
              closeMobileView();
            }}
          >
            sign in
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default (props: { bg: string }) => {
  const { bg } = props;
  const blueBg = bg.includes("main") ? true : false;
  const [mobileView, setMobileView] = useState(false);
  const [accountDisplay, setAccountDisplay] = useState(false);
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  const closeMobileView = () => {
    setMobileView(false);
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("click", (e) => {
        setAccountDisplay(false);
      });
      window.addEventListener("scroll", (e) => {
        setScrollY(window.scrollY);
      });
    }

    return () => {
      if (window)
        window.removeEventListener("click", (e) => {
          setAccountDisplay(false);
        });
    };
  });

  return (
    <div
      className={`navbar flex justify-between  
     items-center px-4 lg:px-8 py-4  top-0 sticky z-[2]  2x:py-2   shodow-fullsm  h-[8vh] sm:h-auto   ${bg}   
     ${
       scrollY > 50
         ? blueBg
           ? " border-b border-main_lighter"
           : "border-b border-white_blueDark"
         : blueBg
         ? " border-b border-main_lighter sm:border-transparent"
         : "border-b border-white_blueDark sm:border-transparent "
     }  
      `}
    >
      <MobileNav
        router={router}
        blueBg={blueBg}
        mobileView={mobileView}
        closeMobileView={closeMobileView}
      />
      <div
        className={`navbar_left  gap-2 flex  items-center ${
          blueBg ? "text-white" : "text-main_black"
        }`}
      >
        <Title color={blueBg ? "text-white" : "text-main_black"} />
      </div>
      <div className="navbar_navlist hidden justify-around gap-6 md:flex">
        {navLinks.map((link, index) => (
          <NavLink
            color={blueBg ? "text-white" : "text-main_black"}
            key={index}
            link={link}
            pathname={router.pathname}
            handler={closeMobileView}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <div className="text-2xl ">
          {mobileView ? (
            <AiOutlineClose
              className={`block sm:hidden ${blueBg ? "text-white" : ""}`}
              onClick={(e) => setMobileView(false)}
            />
          ) : (
            <AiOutlineMenu
              className={`block sm:hidden ${blueBg ? "text-white" : ""}`}
              onClick={(e) => setMobileView(!mobileView)}
            />
          )}
        </div>

        <div className="">
          <div
            className="navbar_right  gap-2 
            items-center hidden sm:flex "
          >
            <button
              className="font-semibold px-12 py-3 w-fit  border border-transparent  text-center text-base 
    rounded-full   bg-main_darker hover:border-white hover:bg-transparent  text-white  tracking-wider capitalize"
              onClick={(e) => {}}
            >
              sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
