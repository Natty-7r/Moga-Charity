import { BsGlobe2 } from "react-icons/bs";
import { MdStars } from "react-icons/md";
export const HowItWork = () => {
  return (
    <div className="my-32  sm:px-16">
      <div className="header flex items-center justify-between my-12 px-4">
        <div className="title  leading-1 font-semibold text-main text-left text-xl sm:text-3xl ">
          We collaborate with industy leaders
          <br /> for AI excellencee
        </div>
        <div className="spots flex justify-center items-end gap-2 sm:gap-8">
          <div className="spot-small aspect-square bg-main_lighest rounded-full  h-1 sm:h-2"></div>
          <div className="spot-small aspect-square bg-main_lighter rounded-full h-4 sm:h-6"></div>
          <div className="spot-large aspect-square bg-main rounded-full  h-8 sm:h-16"></div>
        </div>
      </div>
      <div className="lists px-8 sm:px-0 my-6 flex flex-col md:flex-row flex-wrap justify-around items-center  ">
        <div className="list basis-4/5 sm:basis-[48%]  lg:basis-[23%] xl:basis-[20%] my-6   ">
          <div className="list_header text-main my-6 text-3xl flex items-center gap-1">
            logo <BsGlobe2 className="" /> ipsom
          </div>
          <div className="list_body leading-6 text-main_lighter text-left text-sm font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloribus unde, atque perspiciatis magnam.
          </div>
        </div>
        <div className="list basis-4/5 sm:basis-[48%]  lg:basis-[23%] xl:basis-[20%] my-6  ">
          <div className="list_header text-main my-6 text-3xl flex items-center gap-1">
            <MdStars className="" /> logo ipsom
          </div>
          <div className="list_body leading-6 text-main_lighter text-left text-base  font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloribus unde, atque perspiciatis magnam.
          </div>
        </div>
        <div className="list basis-4/5 sm:basis-[48%]  lg:basis-[23%] xl:basis-[20%] my-6   ">
          <div className="list_header text-main my-6 text-3xl flex items-center gap-1">
            <MdStars className="" /> logo ipsom
          </div>
          <div className="list_body leading-6 text-main_lighter text-left text-sm font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloribus unde, atque perspiciatis magnam.
          </div>
        </div>
        <div className="list basis-4/5 sm:basis-[48%]  lg:basis-[23%] xl:basis-[20%] my-6  font-normal  ">
          <div className="list_header text-main my-6 text-3xl flex items-center gap-1">
            logo <BsGlobe2 className="" /> ipsom
          </div>
          <div className="list_body leading-6 text-main_lighter text-left text-sm font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloribus unde, atque perspiciatis magnam.
          </div>
        </div>
      </div>
    </div>
  );
};
