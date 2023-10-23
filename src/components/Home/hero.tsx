import { HomeCurve } from "@/constants/icons";
import { CustomeLink } from "../common/Link";
export const Hero = (props: {
  project: {
    image: string;
    content: {
      headerbold1: string;
      headerbold2: string;
      headerthin: string;
      body: string;
    };
  };
}) => {
  const { project } = props;
  console.log(project.image);
  return (
    <div className="hero  flex flex-col items-center tracking-wide w-full h-auto  relative z-[1]  font-inter ">
      <img
        src={HomeCurve.src}
        className="absolute bottom-0  left-0 w-[100vw]   z-[-1] bg-white border-none outline-none"
      />
      <div className="hero_text bg-main  basis-4/5 md:basis-1/2 pt-16 lg:pt-24  px-8 sm:px-16 lg:px-[12%] xl:px-[13%] lg:pb-4   text-white text-center  ">
        <div className="text-center my-4 font-bold  tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl  ">
          {project?.content.headerbold1}
          <br /> {project?.content.headerbold2}
          <span className="italic  font-normal text-white_dim  text-3xl sm:text-4xl md:text-5xl lg:text-6xl   ">
            {" "}
            <br />
            {project?.content.headerthin}
          </span>{" "}
        </div>
        <div className="font-normal my-8 text-xs sm:text-sm  md:text-sm  lg:text-base  2xl:text-lg px-[5%] sm:px-[20%] md:leading-[2rem]   ">
          {project?.content.body}
        </div>{" "}
        <div className="hero_text_buttons my-8 justify-center flex gap-4 ">
          <CustomeLink
            bold={true}
            text={"Donate now "}
            link={"donate"}
            blueBg={true}
            color={"text-white"}
            bg={"bg-main_darker"}
          />
        </div>
      </div>
      <div className="hero_image mb-8 w-[60%] lg:w-[40%] 2xl:w-[40%]  sm:block    ">
        <img src={project?.image} alt={"home image"} className="w-full " />
      </div>
    </div>
  );
};
