export default function Button({children, secondary}) {
    return <button className={`rounded-[29px] text--sm border border-white py-[10px] px-[31px] ${secondary ? "bg-white text-black" : "text-white"} hover:text-white hover:bg-[#0058AD] hover:border-[#0058AD]`}>{children}</button>
}