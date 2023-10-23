import Link from "next/link";

type NavLinkPropI = {
  children?: any;
  style?: string;
  link: { path: string; title: string | any };
  pathname: string;
  color: string;
  handler: Function | null;
};
type NavButtonPropI = {
  bg: string | null;
  text: string;
  link: string;
  color: string;
  blueBg: boolean;
  bold: boolean;
};

export const CustomeLink = (props: NavButtonPropI) => {
  const { bg, text, link, color, blueBg, bold } = props;
  return (
    <Link
      href={link}
      className={` px-6 py-3 2xl:px-8 2xl:py-4   capitalize tracking-wider  border border-transparent rounded-full hover:bg-transparent text-lg md:text-xl xl:text-xl  2l:text-3xl s ${
        bold ? "font-bold" : ""
      } ${blueBg ? "hover:border-white_dim" : "hover:border-main_black"} 
      ${bg}
      ${!blueBg && bg ? `text-white hover:text-main_darker` : `${color} `}
       `}
    >
      {text}
    </Link>
  );
};

export const NavLink = (props: NavLinkPropI) => {
  const { link, pathname, handler, color, style, children } = props;
  return (
    <Link
      href={link.path}
      key={link.title}
      className={`capitalize tracking-wider text-xs sm:text-sm font-normal  ${style}   ${color} ${
        pathname == link.path ? "font-bold" : " hover:opacity-80"
      }`}
      onClick={(e) => {
        if (handler) handler();
      }}
    >
      {children ? children : link.title}
    </Link>
  );
};
