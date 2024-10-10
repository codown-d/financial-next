import React from "react";
import InvestmentServices from "./UI/InvestmentServices";
import PolicyArea from "./UI/PolicyArea";
import ServiceAgency from "./UI/ServiceAgency";

export default function PolicyServices() {
  return (
    <div
      id="policyServices"
      className="bg-gradient-to-b from-white-300 to-white-500 w-full"
    >
      <div className="max-w-screen-lg  mx-auto ">
        <PolicyArea />
      </div>
    </div>
  );
}
