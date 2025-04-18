import Image from "next/image";
export default function TitleBg(props: { title: React.ReactNode; bg: any;className?:string }) {
  let {title,bg,className} = props
  return (
    <div className={`py-6 relative ${className}`}>
      <Image src={bg} alt="" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0"  width={712} height={40}/>
      <div className="text-center text-[40px] leading-10">{title}</div>
    </div> 
  );
}
