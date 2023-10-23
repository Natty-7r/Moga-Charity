import ReactPlayer from "react-player";

export const DonationDescription = () => {
  return (
    <div className="text-center my-8 mx-auto w-[90%] md:w-[65%] py-[20%] md:p-[5%]  ext-main_black sm:flex  justify-around items-center  ">
      <div className="desc basis-[35%] text-left">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold capitalize tracking-wider my-6  mx-auto  ">
          Donation
          <br />& giving
        </h1>
        <p className="style h-6 bg-error w-1 my-6"></p>
        <p className="text text-lg text-justify my-6  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          exercitationem voluptate enim, officiis perspiciatis corporis eum
          optio. At corporis recusandae adipisci? Laudantium, ad quibusdam nisi
          adipisci ratione unde corporis fugiat!
        </p>
      </div>
      <div className="vid basis-[45%] h-[22rem]  flex justify-center items-center mx-auto aspect-square bg- rounded relative ">
        <ReactPlayer
          width={"100%"}
          // height={"100%"}
          muted={true}
          loop={true}
          playing={true}
          url="/videos/moga.mp4"
          style={{
            aspectRatio: "1/1",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  );
};
