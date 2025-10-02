import React from "react";
import { useInView } from "react-intersection-observer";
import useCountUp from "../../../hooks/useCountUp";

function WolseyInNumbers() {
  const { ref, inView } = useInView({ triggerOnce: true });

   const numberData = [
    {
      name: "Years of expertise",
      number: useCountUp(50, inView, 3000),
      icon: "+",
    },
    {
      name: "Wolsey’s full team",
      number: useCountUp(20, inView, 3000),
      icon: "+",
    },
    { name: "Clients", number: useCountUp(150, inView, 3000), icon: "+" },
    {
      name: "Recurring clients",
      number: useCountUp(95, inView, 3000),
      icon: "%",
    },
    { name: "Countries", number: useCountUp(10, inView, 3000), icon: "+" },
    { name: "Projects", number: useCountUp(3000, inView, 3000), icon: "+" },
  ]; 
  
  return (
    <>
      <div className="bg-[url('/about/numbers.webp')]  bg-cover bg-center relative py-10 ">
        <p className="custom-text-xl text-white text-center ">
          WOLSEY STRUCTURAL ENGINEERING IN NUMBERS
        </p>
        <div
          ref={ref}
          className="grid lg:grid-cols-6 gap-7 sm:grid-cols-3 grid-cols-2 py-5 "
        >
          {numberData.map(({ name, number, icon }, index) => (
            <React.Fragment key={index}>
              <div className="col-span-1 text-white flex flex-col justify-center items-center ">
                <p className="text-white !custom-text-numbers">
                  {number}
                  {icon}
                </p>
                <p className="text-white">{name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default WolseyInNumbers;
