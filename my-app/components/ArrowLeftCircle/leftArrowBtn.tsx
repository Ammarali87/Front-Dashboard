import React from 'react'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link';
//  now allow same name 

  interface LeftBtnType {
    text?:string;
    link?:string;
  } 
const leftArrowBtn: React.FC<LeftBtnType> = ({ text, link }) => {
  return (
    //  render text and link in div not in icon like siz 
    <div>
      <ArrowLeftCircle size={40} color="blue" />
      {text && <span>{text}</span>}
      {link && <Link href={link} />}
    </div> 
  )
}

export default leftArrowBtn
