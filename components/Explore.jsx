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
import voice from "/public/voice.jpg"

export default function Explore() {
  const data = [
    {
      img: pencil,
      text: "For personnel",
    },
    {
      img: pencil,
      text: "Aalto Handbook",
    },
    {
      img: pencil,
      text: "Safety",
    },
  ];
  const schools = [
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
    {
      img: school,
      title: "School of Arts, Design and Architecture",
      text: "The School of Arts, Design and Architecture is one of the most prestigious universities in its fields. We educate our students to create imaginative, collaborative, compassionate and unconventional approaches to the most pressing challenges of today.",
    },
  ];
  const campuses = [
    {
      img: campus,
      title: "Campus - lively and thriving",
      text: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.",
      links: [
        "Explore our vibrant innovation ecosystem",
        "Explore our campus",
        "Book a space",
      ],
      aspect: "aspect-[4/3]",
    },
    {
      img: campus2,
      title: "Campus - lively and thriving",
      text: "Aalto University's campus in Otaniemi is a renewable and living environment for research, art, learning, entrepreneurship and housing. The campus area inspires people to collaborate, try out new ideas and innovate together.",
      links: [
        "Explore our vibrant innovation ecosystem",
        "Explore our campus",
        "Book a space",
      ],
      reverse: true,
      aspect: "aspect-[690/431]",
    },
  ];
  const blogs = [
    {
      img: blog,
      text: "Building Finland's first quantum computer. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      img: blog,
      text: "Creative sustainability. Photo: Aalto University / Mikko Raskinen.",
    },
    {
      img: blog,
      text: "Architectural gems of Otaniemi. Photo: Aalto University / Tuomas Uusheimo.",
    },
    {
      img: blog,
      text: "Trail to the Laajalahti Nature Reserve and one of South Finland's best birdwatching bay. Photo: Aalto University.",
    },
    {
      img: blog,
      text: "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi.",
    },
    {
      img: blog,
      text: "Developing a connected campus. Photo: Aalto University / Jaakko Kahilaniemi.",
    },
    {
      img: blog,
      text: "One of the most international universities in Europe. Photo: Aalto Design Factory / Bijan Mokhtari.",
    },
    {
      img: blog,
      text: "Educating future thought-leaders. Photo: Aalto Vision Forum / Lasse Lecklin.",
    },
  ];
  const voices = [
    {
        img: voice,
        text: "Watch our videos"
    },
    {
        img: voice,
        text: "Watch our videos"
    },
    {
        img: voice,
        text: "Watch our videos"
    },
  ]
  return (
    <div className="pt-14 pb-[72px]">
      <div className="relative">
        <Image className="w-full h-[400px]" alt="" src={explore} />
        <div className="absolute z-10 inset-x-0 bottom-0">
          <Wrapper>
            <h2 className="text-[30px] leading-[36px] sm:text-[56px] sm:leading-[66px] bg-primary pt-6 px-6 md:px-10 md:pt-10 pb-20 border-b border-b-white text-white md:text-[75px] font-bold md:leading-[88px]">
              Explore Aalto University
            </h2>
          </Wrapper>
        </div>
      </div>
      <Wrapper>
        <div className="bg-primary border-b md:flex">
          {["Study at Aalto", "Open position", "Contact us"].map((el, i) => {
            return (
              <div
                key={i}
                className={`flex items-center justify-center p-6 md:h-[112px] md:px-6 md:py-2 md:flex-1 ${
                  i < 2 &&
                  "md:border-r md:border-r-white border-b border-b-white md:border-b-0 md:border-b-transparent"
                }`}
              >
                <Link
                  href={"/"}
                  className="heading underline hover:bg-white hover:text-black"
                >
                  {el}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-[72px] mb-14">
          <h2 className="heading mb-4 font-medium text-center">
            Important quicklinks
          </h2>
          <div className="flex flex-col gap-4 sm:gap-0 justify-center sm:flex-row sm:justify-between">
            {[
              data.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="group w-[258px] mx-auto sm:mx-0 sm:w-auto flex-1 flex justify-center"
                  >
                    <div className="w-full sm:w-auto flex gap-2 sm:gap-0 sm:flex-col md:flex-row md:gap-2 items-center">
                      <Image
                        src={el.img}
                        alt=""
                        className="w-[88px] h-[88px] rounded-full group-hover:brightness-75"
                      />
                      <span className="text--md group-hover:bg-[#4A4A4A]">{el.text}</span>
                    </div>
                  </div>
                );
              }),
            ]}
          </div>
        </div>
        <div className="mb-[72px]">
          <h2 className="heading mb-4 h-[66px] sm:h-auto">
            Explore our six schools
          </h2>
          <p className="text mb-6">
            Scientific research and artistic activities are carried out at six
            schools and their departments and units.
          </p>
          <div className="gap-y-2 sm:gap-y-6 gap-x-4 grid md:grid-cols-2">
            {schools.map((el, i) => {
              return (
                <div
                  key={i}
                  className="flex h-[82px] sm:h-[120px] md:h-40 border border-white group"
                >
                  <div className="flex-1 flex flex-col justify-end px-3 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-4">
                    <h3 className="text--md mb-2 max-h-[50px] overflow-hidden group-hover:bg-[#4A4A4A]">{el.title}</h3>
                    <div className="overflow-hidden w-full h-[25px] hidden sm:block">
                      <p className="text--sm overflow-hidden h-[25px]">
                        {el.text}
                      </p>
                    </div>
                  </div>
                  <div className="w-[82px] h-[82px] sm:w-[120px] sm:h-[120px] md:w-40 md:h-40 relative">
                    <Image src={el.img} alt="" fill className="object-cover group-hover:brightness-[0.8]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-14 mb-14">
          {campuses.map((el, i) => {
            return (
              <div
                key={i}
                className={`flex flex-col ${
                  el.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div
                  className={`relative mb-8 md:mb-0 aspect-[4/3]- ${el.aspect} md:w-1/2`}
                >
                  <Image src={el.img} alt="" className="object-cover" fill />
                </div>
                <div className="flex-1">
                  <div
                    className={`${
                      el.reverse ? "md:pr-14" : "md:pl-14"
                    } md:py-16 pb-16`}
                  >
                    <h2 className="heading mb-4">{el.title}</h2>
                    <p className="text mb-6">{el.text}</p>
                    <div>
                      {el.links.map((el, i) => {
                        return (
                          <Link
                            href="/"
                            key={i}
                            className="flex text items-center gap-2.5 mb-4 group hover:bg-[#4A4A4A] w-fit group"
                          >
                            <Image
                              src={right}
                              alt=""
                              className="text w-5 h-5 group-hover:translate-x-1 duration-300"
                            />
                            <span className="underline ">{el}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col h-[1110px] sm:h-[720px] md:h-[850px] xl:h-[574px] flex-wrap content-start mb-14">
          {blogs.map((el, i) => {
            return (
              <div key={i} className="px-1 pb-2 w-1/2 sm:w-[33.333333%] xl:w-1/4 h-min group">
                <div className="relative aspect-[251/167]">
                  <Image src={el.img} alt="" fill className="group-hover:brightness-[0.8]" />
                </div>
                <p className="text--xs pt-1 mb-1 text-[#e3e3e3]">{el.text}</p>
              </div>
            );
          })}
        </div>
        <div>
            <h2 className="heading text-center mb-4">Community voices</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm;gap-10 items-center">
                {voices.map((el, i) => {
                    return <div key={i} className="flex group sm:flex-col hover:cursor-pointer sm:justify-center sm:flex-1 md:flex-row items-center gap-2">
                        <Image src={el.img} alt="" className="w-16 h-16 rounded-full group-hover:brightness-[0.8]" />
                        <p className="text group-hover:bg-[#4A4A4A]">{el.text}</p>
                    </div>
                })}
            </div>
        </div>
      </Wrapper>
    </div>
  );
}
