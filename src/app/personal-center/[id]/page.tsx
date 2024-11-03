"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import User from "../components/User";
import Account from "../components/Account";
import Enterprise from "../components/Enterprise";
import Financing from "../components/Financing";
import RealName from "../components/RealName";

const ProductDetailPage = () => {
  const { id } = useParams();
  let getDom = useMemo(() => {
    switch (id) {
      case "user":
        return <User />;
      case "financing":
        return <Financing />;
      case "real-name":
        return <RealName />;
      case "enterprise":
        return <Enterprise />;
      case "account":
        return <Account />;
    }
  }, [id]);
  return <>{getDom}</>;
};

export default ProductDetailPage;
