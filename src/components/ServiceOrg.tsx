import React from "react";
import InvestmentServices from "./UI/InvestmentServices";
import PolicyArea from "./UI/PolicyArea";
import ServiceAgency from "./UI/ServiceAgency";

export default function ServiceOrg() {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full">
      <div className="max-w-screen-lg">
        <div id="institutionalServices" className="flex flex-col w-full my-16">
          <ServiceAgency />
        </div>
        <div id="investmentServices" className="flex flex-col w-full my-16">
          <InvestmentServices />
        </div>
      </div>
    </div>
  );
}
