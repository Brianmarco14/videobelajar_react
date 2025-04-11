import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ isProfile }) => {
  return (
    <div className=" flex items-center justify-center border-b border-border-navbar px-6 md:px-0 py-4 md:py-3 bg-white w-full fixed top-0 shadow-xl md:shadow-none z-50">
      <div className="max-w-screen-xl w-full flex items-center justify-between">
        <Link to={'/'}>
        <img
          src="./src/assets/logo.png"
          alt="logo"
          className="w-32 md:w-48 h-6 md:h-10"
          />
          </Link>
        {isProfile && (
          <button className="hidden md:flex items-center gap-6 cursor-pointer">
            <span className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium">Kategori</span>
            <img src="./src/assets/Avatar.png" alt="logo" className="size-10" />
          </button>
        )}

        {
          isProfile && (
            <button className="block md:hidden">
              <IoMenu className="text-2xl text-text-secondary"/>
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
