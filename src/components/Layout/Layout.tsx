import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export type LayoutPropI = {
  children: ReactNode;
};
export default (props: LayoutPropI) => {
  const { children } = props;
  const bg = true ? "bg-main" : "bg-white_dim";

  return (
    <>
      <Navbar bg={bg} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
