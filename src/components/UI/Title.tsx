import Link from "next/link";
import Image from "next/image";
import SvgLogo from "@public/images/logo.png";
export default function Title(props: { title: any; bg: any; }) {
  let {title,bg} = props
  return (
    <div className="py-6 relative">
      <Image src={bg} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0"  width={712} height={40}/>
      <div className="text-center text-[40px] leading-10">{title}</div>
    </div> 
  );
}
