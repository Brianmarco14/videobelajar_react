const Navbar = ({isProfile}) => {
  return (
    <div className="flex items-center justify-between border-b border-border-navbar px-6 md:px-[120px] py-4 md:py-3 bg-white w-full fixed top-0 shadow-xl md:shadow-none z-50">
        <img src="./src/assets/logo.png" alt="logo" className="w-32 md:w-48 h-6 md:h-10"/>
    </div>
  )
}

export default Navbar