import Image from "next/image";
export default function LogoInfo(props: { logo: string; logoUrl: string;className?:string;size?:'large'|'small' }) {


  let { logo, logoUrl,className,size } = props;
  return (
    <div className={`flex flex-col items-center w-[200px] ${className}`}>
      <Image src={logoUrl} alt={""} width={size=='large'?80:52} height={52} />
      <div className="font-bold text-sm text-[#585858] leading-[21px] text-center mt-3">
        {logo}
      </div>
    </div>
  );
}
 