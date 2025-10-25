// const LeftArrowBtn: React.FC<LeftBtnType> = ({ text, link }) => {
//     //  render text and link in div not in icon like siz 
//       <ArrowLeftCircle size={40} color="blue" />
//       {text && <span>{text}</span>}
//       {link && <Link href={link} />}
//  

"use client";

import React from "react";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface LeftBtnType {
  text?: string;
  link?: string;
}
            //  link = "/"   just add /  not need to know what page it is     
const LeftArrowBtn: React.FC<LeftBtnType> = ({ text = "Back", link = "/" }) => {
  return (
    <Link href={link} className="inline-flex items-center gap-2">
      <ArrowLeftCircle size={24} color="blue" />
      <span>{text}</span>
    </Link>
  );
};

export default LeftArrowBtn;