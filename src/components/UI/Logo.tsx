import Link from "next/link";
import Image from 'next/image';
import SvgLogo from '@public/images/logo.png';
export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      {/* <Image src={SvgLogo} alt="My Icon" width={100} height={100} /> */}
      <img src="/images/logo.jpg" alt="" style={{width: 150,height:40}} />
      {/* <SvgLogo/> */}
    </Link>
  );
}
