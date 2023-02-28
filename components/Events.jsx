import Button from "./Button";
import Wrapper from "./Wrapper";
import Link from "next/link";
import event from "/public/event.webp";
import Image from "next/image";

export default function Events() {
  const data = [
    {
      title: "Solve the SDGs 2023",
      text: "A hackathon on two continents for one purpose: building a better tomorrow.",
      date: "31.3.-2.4.2023 | Events",
      img: event,
    },
    {
      title: "Solve the SDGs 2023",
      text: "A hackathon on two continents for one purpose: building a better tomorrow.",
      date: "31.3.-2.4.2023 | Events",
      img: event,
    },
    {
      title: "Solve the SDGs 2023",
      text: "A hackathon on two continents for one purpose: building a better tomorrow.",
      date: "31.3.-2.4.2023 | Events",
      img: event,
    },
  ];
  return (
    <div className="pt-20 md:pt-10 xl:pt-20 py-[72px] bg-[#252525]">
      <Wrapper>
        <div className="flex justify-between mb-4 items-center">
          <h2 className="heading">Join our many events</h2>
          <div className="hidden md:block">
            <Button>See all Events</Button>
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
              <div key={i} className={`group border border-white ${i === 0 ? 'w-full md:w-auto md:flex-1' : 'flex-1'}`}>
                <div className="relative w-full aspect-[819/356]">
                  <Image alt="" src={el.img} className="group-hover:brightness-50" fill />
                </div>
                <div className="p-4">
                  <h4 className="text--md group-hover:bg-[#4A4A4A] w-fit">{el.title}</h4>
                  <p className="text mb-[28px] mt-[25px]">{el.text}</p>
                  <span className="text--sm">{el.date}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 md:hidden">
            <Button>See all Events</Button>
          </div>
      </Wrapper>
    </div>
  );
}
