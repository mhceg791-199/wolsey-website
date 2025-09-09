import React, { useContext } from "react";
import { careerModalContext } from "../../../context/careerContext";
import CareerModal from "../BriefCareer/CareerModel/CareerModel";

function ReadyToJoin() {
  const { setOpen } = useContext(careerModalContext);
  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="bg-mainGray py-8">
        <div className="  w-3/4 m-auto">
          <h2 className="text-mainBrown text-center font-semibold custom-text-xl">
            Ready to Join Us?
          </h2>
          <p className="text-center mt-5">
            Pioneer the future with a team dedicated to ambition, excellence, and boundless growth. Explore opportunities to elevate your career with a firm invested in your global impac</p>
          <div className="text-center mt-5">
            <button
              onClick={() => {
                openModal();
              }}
              className="bg-mainBrown rounded-full px-8 py-2  text-white m-auto text-center"
            >
              Become Part of Our Team
            </button>
            <CareerModal />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToJoin;
