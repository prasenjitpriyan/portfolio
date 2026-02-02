import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        width={50}
        height={50}
        priority
        src="/pd-logo-black-and-white.png"
        alt="Prasenjit Das"
        className="rounded-lg max-w-full cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
