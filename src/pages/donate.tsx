import { DonationDescription, DonationForm } from "@/components/Donation";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";
const CreateMentor = () => {
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: Event) => {
    console.log("submitting form");
  };

  return (
    <div className="donate_page flex flex-col sm:flex-row sm:justify-between bg-white bg-red-400 my-0  h-auto ">
      <DonationForm />
      <DonationDescription />
    </div>
  );
};
export default CreateMentor;
