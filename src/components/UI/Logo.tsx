import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="inline-flex text-2xl leading-6 font-bold" aria-label="Cruip">
      {/* <Image src={SvgLogo} alt="My Icon" width={100} height={100} /> */}
      {/* <Image src="/images/logo.png" alt="logo" width={62} height={46} /> */}
      <span className="text-[#2372e1] pr-[3px]">元易融</span>  | 
      {/* <SvgLogo/> */}
    </Link>
  );
}
