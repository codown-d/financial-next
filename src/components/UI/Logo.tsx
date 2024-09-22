import Link from "next/link";
import Image from 'next/image';
import myIcon from '@public/assets/广信担保logo.jpg';
export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={myIcon} alt="My Icon" width={100} height={100} />
    </Link>
  );
}
