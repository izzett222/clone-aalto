import Image from "next/image";
import Wrapper from "./Wrapper";
import hero from "/public/hero.webp";
import right from "/public/right.svg";
import rightSm from "/public/right-sm.svg";

export default function Hero() {
  return (
    <div className="relative">
      <div className="bg-black text-white py-6 xl:max-w-[680px] xl:absolute -bottom-10 left-14 z-10">
        <Wrapper small>
          <h1 className="text-[34px] leading-[42px] mb-4">
            How tech is transforming diagnostics and care
          </h1>
          <p className="text--md mb-4">
            Read three inspiring stories of how Aaltonians are bringing new hope
            to people who suffer from
          </p>
          <div className="ga-2 flex flex-col">
            {["Alzheimers disease", "ADHD", "Alcoholism"].map((el, i) => {
              return (
                <div key={i} className="group">
                  <div className="flex gap-2 items-center  group-hover:bg-white w-fit">
                    <Image src={right} alt="" className="text w-5 h-5 " />
                    <span className="text underline group-hover:text-black">
                      {el}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center rotate-180">
              <Image src={rightSm} className="w-5 h-5" alt="" />
            </div>
            <div className="flex items-center">
                {[0, 1, 2, 3].map(el => {
                    return <div key={el} className={`w-6 h-6 ${el ? "p-2" : "p-1"}`}><div className={`w-full h-full bg-white rounded-full`}></div></div>
                })}
            </div>
            <div className="w-8 h-8 border border-white rounded-full flex justify-center items-center">
              <Image src={rightSm} className="w-5 h-5" alt="" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="relative w-full aspect-[3/1]">
        <Image src={hero} className="object-cover" priority alt="" fill />
      </div>
    </div>
  );
}
