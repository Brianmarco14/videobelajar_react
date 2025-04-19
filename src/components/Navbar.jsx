import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ isProfile }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <div className=" flex items-center justify-center border-b border-border-navbar px-6 md:px-0 py-4 md:py-3 bg-white w-full fixed top-0 shadow-xl md:shadow-none z-40">
      <div className="max-w-screen-xl w-full flex items-center justify-between relative">
        <Link to={'/'}>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="w-32 md:w-48 h-6 md:h-10"
          />
        </Link>
        {isProfile && (
          <button onClick={handleOpen} className="hidden md:flex items-center gap-6 cursor-pointer">
            <span className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium">Kategori</span>
            <img src="/assets/Avatar.png" alt="logo" className="size-10" />
          </button>
        )}

        {
          isProfile && (
            <button className="block md:hidden">
              <IoMenu className="text-2xl text-text-secondary" />
            </button>
          )
        }
        <div className={`${isOpen ? ' scale-y-100' : 'scale-y-0'} origin-top w-[200px] rounded-b-md duration-200 py-1 bg-white absolute right-0 top-12 shadow-sm z-50`}>
          <Link to={'/'} className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium border border-border-navbar py-4 px-3 flex gap-5 items-center">Profil Saya</Link>
          <Link to={'/'} className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium border border-border-navbar py-4 px-3 flex gap-5 items-center">Kelas Saya</Link>
          <Link to={'/'} className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium border border-border-navbar py-4 px-3 flex gap-5 items-center">Pesanan Saya</Link>
          <Link to={'/'} className="font-dm/[140%] text-danger tracking-[0.2px] font-medium border border-border-navbar py-4 px-3 flex gap-1 items-center">Keluar <FiLogOut /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
