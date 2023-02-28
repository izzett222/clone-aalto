import Image from "next/image";
import plus from "/public/plus.svg";
import minus from "/public/minus.svg";
import { useState } from "react";
import Link from "next/link";
export default function MenuItem({ children, links }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <button
        onClick={handleClick}
        className={`px-3 text-left py-[9px] md:py-6 md:pr-8 md:pl-4 border-t w-full ${!open && "border-b-white border-b"} border-t-white hover:bg-[#4A4A4A] flex justify-between items-center`}
      >
        <p className="text-[21px] md:text-[28px] leading-[25px] md:leading-[33px] text-white font-medium md:font-bold">{children}</p>
        <div>
          {!open && (
            <Image
              src={plus}
              className="w-10 h-10 transform translate-x-3 md:translate-x-6"
              alt=""
            />
          )}
          {open && (
            <Image
              src={minus}
              className="w-10 h-10 transform translate-x-3 md:translate-x-6"
              alt=""
            />
          )}
        </div>
      </button>
      <div className={`grid md:grid-cols-2 ${!open && "hidden"}`}>
        {links.map((el, i) => {
            return <Link href="/" key={i} className="text py-[13px] px-4 hover:bg-[#4A4A4A] inline-block underline">{el}</Link>
        })}
      </div>
    </>
  );
}
