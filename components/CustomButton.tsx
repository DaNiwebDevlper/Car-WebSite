"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  textStyles,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image src={rightIcon} alt="Arrow" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}
