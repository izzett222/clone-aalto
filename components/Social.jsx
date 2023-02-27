import Link from "next/link";
import Wrapper from "./Wrapper";

export default function Social() {
  return (
    <div className="bg-[#2D2D2D] py-14">
      <div className="bg-[#004C97] h-[400px]">
        <Wrapper>
          <div className="flex items-center justify-center h-[400px] text-center">
            <div>
              <h2 className="text-[30px] leading-[36px] sm:text-[56px] sm:leading-[66px] md:text-[75px] md:leading-[88px] text-white font-bold">
                Follow us
              </h2>
              <p className="text-white text-[36px] leading-[42px]">
                <Link href={"/"} className="text-white underline text-[36px] leading-[42px] hover:text-black hover:bg-white">facebook</Link>,{" "}
                <Link href={"/"} className="text-white underline text-[36px] leading-[42px] hover:text-black hover:bg-white">twitter</Link>,{" "}
                <Link href={"/"} className="text-white underline text-[36px] leading-[42px] hover:text-black hover:bg-white">instagram</Link> & {" "}
                <Link href={"/"} className="text-white underline text-[36px] leading-[42px] hover:text-black hover:bg-white">linkedin</Link>
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
