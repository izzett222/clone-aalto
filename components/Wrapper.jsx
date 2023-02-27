export default function Wrapper({children, small}) {
    return (
        <div className={`px-4 sm:px-10 ${!small && 'md:px-20'} max-w-[1540px] mx-auto`}>{children}</div>
    )
}