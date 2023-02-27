import Image from "next/image";
import logo from "/public/logo.svg";
import menu from "/public/menu.svg";
import search from "/public/search.svg";
import lock from "/public/lock.svg";
import world from "/public/world.svg";
import heart from "/public/heart.svg";
import down from "/public/down.svg";
import Link from "next/link";

export default function Header() {
  const data = [
    {
      img: lock,
      text: "For personnel",
      link: "/",
    },
    {
      img: heart,
      text: "Support",
      link: "/",
    },
    {
      line: true,
    },
    {
      img: world,
      text: "EN",
    },
    {
      img: search,
      text: "Search",
    },
    {
      img: menu,
      text: "Menu",
    },
  ];
  return (
    <header className="px-4 md:pl-20 md:pr-14 flex  justify-between items-center h-[50px]  md:h-[110px] text-white">
      <Image src={logo} alt="" className="h-[33px] w-[37px] md:w-[98px] md:h-[69px]" />
      <div className="hidden md:flex text-white items-center gap-1 lg:gap-6 xl:gap-10">
        {data.map((el, id) => {
          if (el.line) {
            return <div key={id} className="bg-white w-[1px] h-[26px]"></div>;
          } else if (el.link) {
            return (
              <Link
                href={el.link}
                key={id}
                className="flex items-center p-1 hover:bg-[#4A4A4A] gap-2"
              >
                <Image alt="" src={el.img} className="w-[20px] h-[20px] " />{" "}
                <span>{el.text}</span>
              </Link>
            );
          } else {
            return (
              <button
                key={id}
                className="flex items-center gap-2 p-1 hover:bg-[#4A4A4A]"
              >
                <Image alt="" src={el.img} className="w-[20px] h-[20px] " />{" "}
                <span>{el.text}</span>
              </button>
            );
          }
        })}
        <button className="bg-white hover:bg-[#0058AD] py-2.5 px-[31px] rounded-[29px] text-black hover:text-white">
          Login
        </button>
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <Image alt="" src={search} className="w-[20px] h-[20px] " />
        <div className="bg-white w-[1px] h-[26px]"></div>
        <button className="flex items-center gap-2 p-1 hover:bg-[#4A4A4A]">
          Menu
        </button>
      </div>
    </header>
  );
}
