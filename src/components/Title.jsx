
const Title = ({title, sub}) => {
  return (
    <div className="flex flex-col gap-2.5 text-center">
        <h1 className="font-poppins text-xl md:text-[32px] font-semibold text-text-primary ">{title}</h1>
        <h6 className="font-dm text-text-secondary text-sm md:text-base/[140%] tracking-[0.2px]">{sub}</h6>
    </div>
  )
}

export default Title