import Image from "next/image";
import TzNextImage from "../TzNextImage";
export default function LogoInfo(props: { logo: string; logoUrl: string;className?:string;size?:'large'|'small' }) {


  let { logo, logoUrl,className,size } = props;
  return (
    <div className={`flex flex-col items-center px-[20px] min-w-[100px] ${className}`}>
      <TzNextImage src={logoUrl} width={size=='large'?80:52} height={52} />
      <div className="font-bold text-sm text-[#585858] leading-[21px] text-center mt-3">
        {logo}
      </div>
    </div>
  );
}
 