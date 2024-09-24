import Link from "next/link";
import Image from 'next/image';
import SvgLogo from '@public/images/广创担保横.svg';
export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      {/* <Image src={myIcon} alt="My Icon" width={100} height={100} /> */}
      <SvgLogo/>
    </Link>
  );
}
