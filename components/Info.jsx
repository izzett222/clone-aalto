import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import explore from "/public/explore.jpg";
import pencil from "/public/pencil.webp";
import school from "/public/school.webp";
import campus from "/public/campus.webp";
import campus2 from "/public/campus2.webp";
import blog from "/public/blog.webp";
import right from "/public/right.svg";
import voice from "/public/voice.jpg";
export default function Info() {
  const schools = [
    {
      img: school,
      title: "Ukraine war",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "Information on coronavirus",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
  ];
  return (
    <div className="py-14 ">
      <Wrapper>
        <h2 className="heading mb-4 md:mb-11">
          {" "}
          Information on Ukraine and coronavirus
        </h2>
        <div className="gap-y-2 sm:gap-y-2 gap-x-4 grid md:grid-cols-2">
          {schools.map((el, i) => {
            return (
              <div
                key={i}
                className="flex h-[82px] sm:h-[120px] border border-white group hover:cursor-pointer"
              >
                <div className="flex-1 flex flex-col justify-end px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-4">
                  <h3 className="text--md mb-2 group-hover:bg-[#4a4a4a] w-fit">{el.title}</h3>
                  <div className="overflow-hidden w-full h-[25px] hidden sm:block">
                    <p className="text--sm overflow-hidden h-[25px]">
                      {el.text}
                    </p>
                  </div>
                </div>
                <div className="w-[82px] h-[82px] sm:w-[120px] sm:h-[120px] relative">
                  <Image src={el.img} alt="" fill className="object-cover group-hover:brightness-[0.8]" />
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
