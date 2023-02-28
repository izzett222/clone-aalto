import Button from "./Button";
import Wrapper from "./Wrapper";
import Link from "next/link";
import spot from "/public/spot.jpg";
import Image from "next/image";

export default function Spotlight() {
  const data = [
    {
      title: "Shrinking from the heat",
      text: "Reactive fabrics respond to changes in temperature",
      date: "31.3.-2.4.2023 | Events",
      img: spot,
    },
    {
      title: "Shrinking from the heat",
      text: "Reactive fabrics respond to changes in temperature",
      date: "31.3.-2.4.2023 | Events",
      img: spot,
    },
    {
      title: "Shrinking from the heat",
      text: "Reactive fabrics respond to changes in temperature",
      date: "31.3.-2.4.2023 | Events",
      img: spot,
    },
  ];
  return (
    <div className="pt-10 md:pt-10 xl:pt-20 pb-[56px]">
      <Wrapper>
        <div className="flex justify-between mb-4 items-center">
          <h2 className="heading">Spotlight</h2>
          <div className="hidden md:block">
            <Button>See all Aalto University news</Button>
          </div>
        </div>
        <p className="text--md mb-6">
          Find more current news and interesting events on the{" "}
          <Link href={"/"} className="underline hover:bg-[#4A4A4A]">
            News and events page.
          </Link>
        </p>
        <div className="flex gap-4 flex-col sm:flex-row sm:flex-wrap">
          {data.map((el, i) => {
            return (
              <div key={i} className={`border border-white group ${i === 0 ? 'w-full md:w-auto md:flex-1' : 'flex-1'}`}>
                <div className="relative w-full aspect-[819/356]">
                  <Image alt="" src={el.img} className="group-hover:brightness-50" fill />
                </div>
                <div className="p-4">
                  <h4 className="text--md group-hover:bg-[#4A4A4A] w-fit">{el.title}</h4>
                  <p className="text mb-14 mt-[25px]">{el.text}</p>
                  <span className="text--sm">{el.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 md:hidden">
            <Button>See all Aalto University news</Button>
          </div>
      </Wrapper>
    </div>
  );
}
