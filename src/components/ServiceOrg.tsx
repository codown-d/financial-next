import React from "react";
import InvestmentServices from "./UI/InvestmentServices";
import PolicyArea from "./UI/PolicyArea";
import ServiceAgency from "./UI/ServiceAgency";



export default function ServiceOrg() {

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ServiceAgency />
        </div>
        <div className="flex flex-col w-full my-16">
          <InvestmentServices />
        </div>
      </div>
    </div>
  );
}
