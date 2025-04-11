import { cn } from "../utils/cn"

const Button = ({type, children, className}) => {
  return (
    <button type={type} className={cn("text-sm md:text-base cursor-pointer w-full font-dm/[140%] font-normal md:font-bold tracking-[0.2px] md:px-3 py-2 rounded-[10px]", className)}>{children}</button>
  )
}

export default Button