import { cn } from "../utils/cn"

const Card = ({children, className}) => {
  return (
    <div className={cn("bg-white flex flex-col border border-border-card rounded-sm", className)}>{children}</div>
  )
}

export default Card