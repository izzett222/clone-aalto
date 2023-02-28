import Image from "next/image";
import menus from "/public/menus.svg";
import form from "/public/form.svg";
import grad from "/public/grad.svg";
import ham from "/public/ham.svg";
import world from "/public/world.svg";
import Link from "next/link";
import { useEffect } from "react";
import MenuItem from "./MenuItem";
import Button from "./Button";
import lock from "/public/lock.svg";
import heart from "/public/heart.svg";

export default function Menu({ scrolled }) {
  const icons = [
    {
      img: lock,
      text: "personnel",
    },
    {
      img: heart,
      text: "Support",
    },
    {
      img: menus,
      text: "services",
    },
    {
      img: ham,
      text: "Site index",
    },
    {
      img: grad,
      text: "Student guide",
    },
    {
      img: form,
      text: "Apply to Aalto",
    },
  ];
  const links = [
    {
      text: "Admissions and applying",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "News and events",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "Research and art",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "For students",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "Schools and departments",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "Tools",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "About us",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
    {
      text: "Collaboration",
      links: [
        "Research and art",
        "Teaching and learning for teachers",
        "Research portal researchaaltofi",
        "Doctoral education",
        "Doctoral programmes",
        "Tenure track",
        "Research and learning facilities",
        "Aalto Networking Platform",
      ],
    },
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });
  return (
    <div
      className={`fixed ${
        scrolled ? "top-[50px] h-raised" : "top-[48px] md:top-[110px] h-open"
      }   z-30 inset-x-0 flex-1 bg-[#fffc] flex justify-end`}
    >
      <div className="w-full md:w-[90%] h-full bg-[#2d2d2d] overflow-auto px-4 md:p-14 pt-4">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex gap-2">
            {icons.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 hover:bg-[#4A4A4A] p-4"
                >
                  <Image src={el.img} width={28} height={28} alt="" />
                  <p className="text--sm text-center font-semibold text-xs">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
          <h2 className="text--sm">
            Aalto community members please{" "}
            <Link href="/" className="font-medium underline">
              log in
            </Link>{" "}
            to see internal content
          </h2>
        </div>
        <div>
          {links.map((el, i) => {
            return (
              <div key={i}>
                <MenuItem links={el.links}>{el.text}</MenuItem>
              </div>
            );
          })}
        </div>
        <div className="border-y border-y-white py-4 md:hidden flex gap-3 items-center">
          <Image alt="" src={world} className="w-[20px] h-[20px] " />
          <Button secondary small>
            EN
          </Button>
          <Button small>FI</Button>
          <Button small>SV</Button>
        </div>
        <div className="md:hidden py-2">
        {icons.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 hover:bg-[#4A4A4A] p-3"
                >
                  <Image src={el.img} width={20} height={20} alt="" />
                  <p className="text--sm text-center font-semibold text-xs">
                    {el.text}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="py-4 mt-2 border-t md:hidden border-t-white">
        <p className="text mb-4">Aalto community members please log in to see internal content</p>
        <button className="bg-white hover:bg-[#0058AD] py-2.5 px-[31px] rounded-[29px] text-black hover:text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
