export default function Button({children, secondary, small}) {
    return <button className={`rounded-[29px] text--sm border border-white ${small ? "py-1.5 px-4": "py-[10px] px-[31px]"}  ${secondary ? "bg-white text-black" : "text-white"} hover:text-white hover:bg-[#0058AD] hover:border-[#0058AD]`}>{children}</button>
}