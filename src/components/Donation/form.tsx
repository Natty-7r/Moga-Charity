import { useState } from "react";
export const DonationForm = () => {
  const [formError, setFormError] = useState("");

  return (
    <form
      className="text-center my-8 mx-auto w-[90%] md:w-[30%] px-[3%] py-[5%]   rounded-lg  text-white bg-main"
      onSubmit={() => {
        alert("submitting form ");
      }}
    >
      <h1 className="text-2xl md:text-4xl xl:text-3xl font-bold uppercase tracking-wider text-center  mb-3  mx-auto  ">
        Donation form
      </h1>

      <p
        className={`capitalize text-error tracking-wider ${
          formError != "" ? "opacity-100" : "opacity-0"
        }`}
      >
        {formError != "" ? formError : "error"}
      </p>

      <div className="input_container my-6  md:w-[100%] mx-auto ">
        <input
          required={true}
          type="text"
          placeholder="First name"
          className="bg-transparent w-full px-4 py-3 outline-none border-2 rounded border-gray_lighter  tracking-wider placeholder-white_dimmer focus:border-white_dimmer  transition-all"
        />
      </div>
      <div className="input_container my-6  md:w-[100%] mx-auto ">
        <input
          required={true}
          type="text"
          placeholder="Last name"
          className="bg-transparent w-full px-4 py-3 outline-none border-2 rounded border-gray_lighter  tracking-wider placeholder-white_dimmer focus:border-white_dimmer  transition-all"
        />
      </div>
      <div className="input_container my-6  md:w-[100%] mx-auto ">
        <input
          required={true}
          type="text"
          placeholder="Email"
          className="bg-transparent w-full px-4 py-3 outline-none border-2 rounded border-gray_lighter  tracking-wider placeholder-white_dimmer focus:border-white_dimmer  transition-all"
        />
      </div>
      <div className="input_container my-6  md:w-[100%] mx-auto ">
        <input
          required={true}
          type="text"
          placeholder="Phone number"
          className="bg-transparent w-full px-4 py-3 outline-none border-2 rounded border-gray_lighter  tracking-wider placeholder-white_dimmer focus:border-white_dimmer  transition-all"
        />
      </div>
      <div className="input_container my-16  md:w-[100%] mx-auto ">
        <input
          required={true}
          type="text"
          placeholder="Donation amount"
          className="bg-transparent w-full px-4 py-3 outline-none border-2 rounded border-gray_lighter  tracking-wider placeholder-white_dimmer focus:border-white_dimmer  transition-all"
        />
      </div>

      <button
        type="submit"
        className={` w-full px-4 py-3 h-12  sm:px-8 sm:py-4 capitalize tracking-wider  font-semibold relative group
        
   `}
        onBlur={() => {}}
        onClick={(e) => {}}
      >
        <p
          className={` bg-main_darker  absolute top-0 left-0 w-full h-full z-[3] origin-left rounded not:(hover):animate-slideLeft 
         `}
        ></p>
        <p className=" text-main_darker bg-white absolute top-0 left-0 w-full h-full z-[2]  origin-left group-hover:z-[3] rounded group-hover:animate-slideLeft "></p>
        <p className="  text-white z-[5] bg-transparent absolute top-0 left-0 w-full h-full z-[5] flex items-center justify-center py-4 tracking-wider group-hover:text-main_darker ">
          donate
        </p>
      </button>
    </form>
  );
};
