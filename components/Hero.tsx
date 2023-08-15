"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

export default function () {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          strealime your car rental experince with our effortless booking
          process
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container mt-[50px]">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Car Image"
            fill
            className="object-contain mt-5"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
