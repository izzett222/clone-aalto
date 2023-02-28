import Wrapper from "./Wrapper";
import course from "/public/course.webp";
import Image from "next/image";

export default function Courses() {
  const data = [
    {
      title: "Solve the SDGs 2023",
      text: "Select a solution that suits you, ranging from individual courses to programmes that are open ",
      img: course,
    },
    {
      title: "Solve the SDGs 2023",
      text: "Select a solution that suits you, ranging from individual courses to programmes that are open ",
      img: course,
    },
    {
      title: "Solve the SDGs 2023",
      text: "Select a solution that suits you, ranging from individual courses to programmes that are open ",
      img: course,
    },
  ];
  return (
    <div className="bg-[#252525] pt-14 pb-[96px]">
      <Wrapper>
        <h2 className="heading mb-11"> Studies and courses open to all</h2>
        <div className="flex gap-4 flex-col sm:flex-row sm:flex-wrap">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className={` bg-[#2D2D2D]  group hover:cursor-pointer ${
                  i === 0 ? "w-full md:w-auto md:flex-1" : "flex-1"
                }`}
              >
                <div className="relative w-full aspect-[819/356]">
                  <Image alt="" src={el.img} className="object-cover group-hover:brightness-[0.8]" fill />
                </div>
                <div className="p-4 pb-3">
                  <h4 className="text--md group-hover:bg-[#4A4A4A] w-fit">{el.title}</h4>
                  <p className="text mb-[28px] mt-[25px]">{el.text}</p>
                  <span className="text--sm">{el.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
