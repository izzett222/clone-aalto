import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Wrapper from "./Wrapper";
import logo from "/public/logo.svg";
import instagram from "/public/instagram.svg";
import youtube from "/public/youtube.svg";
import twitter from "/public/twitter.svg";
import snapchat from "/public/snapchat.svg";
import linkedin from "/public/linkedin.svg";
import facebook from "/public/facebook.svg";
import edit from "/public/edit.svg";

export default function Footer() {
  const data = [
    facebook,
    linkedin,
    twitter,
    instagram,
    youtube,
    snapchat,
    edit,
  ];
  return (
    <footer className="bg-[#2D2D2D] pt-2.5">
      <div className="border-t border-t-white pt-6">
        <Wrapper>
          <div className="flex flex-col sm:flex-row flex-wrap border-b border-b-white pb-6">
            <div className="w-auto sm:w-1/2 md:w-[33.333333%] xl:w-1/4  pr-8 order-1">
              <div>
                <Image src={logo} className="w-[98px] h-[69px] mb-6" alt="" />
                <p className="text">
                  Aalto University <br />
                  P.O. Box 11000 (Otakaari 1B) <br />
                  FI-00076 AALTO <br />
                  Switchboard: +358 9 47001
                </p>
                <p className="text--md mt-6 mb-2">Follow us:</p>
                <div className="flex items-center">
                  {data.map((el, i) => {
                    return (
                      <div key={i} className="p-1 w-8 h-8">
                        <Image src={el} alt="" className="w-full h-full" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-auto sm:w-1/2 md:w-[33.333333%] xl:w-1/4  pr-8 order-2">
              <div>
                <h3 className="text--md mb-2">Quicklinks</h3>
                <div className="flex flex-col gap-2">
                  {[
                    "Research and artistic outputs",
                    "Library Learning Centre",
                    "Admissions",
                    "Alumni",
                    "Media",
                    "IT services",
                    "Open University",
                    "Aalto University Shop",
                  ].map((el, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
                    >
                      {el}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text--md mb-2">Latest</h3>
                <div className="flex flex-col gap-2">
                  {["News", "Events", "Careers"].map((el, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
                    >
                      {el}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-auto sm:w-1/2 md:w-[33.333333%] xl:w-1/4  pr-8 order-3 sm:order-4 md:order-3">
              <div>
                <h3 className="text--md mb-2">Contact</h3>
                <div className="flex flex-col gap-2">
                  {["Campus maps", "Contact information"].map((el, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
                    >
                      {el}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text--md mb-2">For students</h3>
                <div className="flex flex-col gap-2">
                  {[
                    "Student Guide",
                    "Webmail",
                    "MyCourses",
                    "MyStudies",
                    "Sisu",
                  ].map((el, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
                    >
                      {el}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-auto sm:w-1/2 pr-8 md:pr-0 md:w-auto xl:w-1/4 py-6 border-t mt-6 sm:border-t-0 sm:border-t-transparent sm:mt-0  border-t-white xl:py-0 order-4 sm:order-3 md:order-4">
              <h2 className="heading mb-4">Together towards a better world.</h2>
              <p className="text mb-6">
                Support new ideas, research, work and leadership development
                towards a stronger Finland.
              </p>
              <Button secondary>Donate to Aalto University</Button>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="flex flex-col sm:flex-row justify-between pt-6 pb-10 gap-16 sm:gap-0">
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3">
            {[
              "Privacy",
              "notice",
              "Cookie",
              "policy",
              "Feedback",
              "Accessibility",
              "statement",
              "Cookie",
              "settings",
            ].map((el, i) => (
              <Link
                key={i}
                href="/"
                className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
              >
                {el}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3">
            {["Suomeksi", "Svenska", "English"].map((el, i) => (
              <Link
                key={i}
                href="/"
                className="text--sm underline hover:bg-[#e3e3e3] hover:bg-opacity-10"
              >
                {el}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
