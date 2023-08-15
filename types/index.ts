import { manufacturers } from "@/constants";
import { MouseEventHandler } from "react";
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles:string;
  rightIcon:string;
  isDisabled:boolean
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (setManuFacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
