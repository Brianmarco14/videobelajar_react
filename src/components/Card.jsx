import { cn } from "../utils/cn"

const Card = ({children, className}) => {
  return (
    <div className={cn("bg-white max-w-[590px] w-full flex flex-col gap-5 md:gap-8 border border-border-card rounded-sm", className)}>{children}</div>
  )
}

export default Card