import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w[1240px] max-auto flex justify-between items-center sm:px-16 px-6 py-4  hover:shadow-md">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-slate-100 min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
