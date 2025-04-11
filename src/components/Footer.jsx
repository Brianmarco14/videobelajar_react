import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col items-center border border-border-card py-5 md:py-16 px-6 md:px-32">
      <div className="max-w-screen-xl w-full bg-white flex flex-col gap-5">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-white">
          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[50%]">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-48 h-10"
            />
            <div className="flex flex-col gap-2 md:gap-3">
              <h1 className="w-full md:w-[60%] font-dm/[140%] text-lg font-bold text-text-primary">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </h1>
              <p className="font-dm/[140%] text-base font-normal text-text-primary tracking-[0.2px]">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="font-dm/[140%] text-base font-normal text-text-primary tracking-[0.2px]">
                +62-877-7123-1234
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-12 w-full md:w-auto">
            <ul className="font-dm/[140%] text-text-primary tracking-[0.2px] font-normal flex flex-col gap-3.5">
              <li className="font-bold flex justify-between items-center">
                <span>Kategori</span>
                <IoIosArrowForward className="block md:hidden" />
              </li>
              <li className="hidden md:block">
                <a href="">Digital & Teknologi</a>
              </li>
              <li className="hidden md:block">
                <a href="">Pemasaran</a>
              </li>
              <li className="hidden md:block">
                <a href="">Manajemen Bisnis</a>
              </li>
              <li className="hidden md:block">
                <a href="">Pengembangan Diri</a>
              </li>
              <li className="hidden md:block">
                <a href="">Desain</a>
              </li>
            </ul>
            <ul className="font-dm/[140%] text-text-primary tracking-[0.2px] font-normal flex flex-col gap-3.5">
              <li className="font-bold flex justify-between items-center">
              <span>Perusahaan</span>
              <IoIosArrowForward className="block md:hidden" />
              </li>
              <li className="hidden md:block">
                <a href="">Tentang Kami</a>
              </li>
              <li className="hidden md:block">
                <a href="">FAQ</a>
              </li>
              <li className="hidden md:block">
                <a href="">Kebijakan Privasi</a>
              </li>
              <li className="hidden md:block">
                <a href="">Ketentuan Layanan</a>
              </li>
              <li className="hidden md:block">
                <a href="">Bantuan</a>
              </li>
            </ul>
            <ul className="font-dm/[140%] text-text-primary tracking-[0.2px] font-normal flex flex-col gap-3.5">
              <li className="font-bold flex justify-between items-center">
              <span>Komunitas</span>
              <IoIosArrowForward className="block md:hidden" />
              </li>
              <li className="hidden md:block">
                <a href="">Tips Sukses</a>
              </li>
              <li className="hidden md:block">
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-border-navbar"></div>
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-2">
          <div className="font-dm/[140%] text-text-secondary tracking-[0.2px] font-medium">
            @2023 Gerobak Sayur All Rights Reserved.
          </div>
          <div className="flex gap-3.5">
            <div className="rounded-full border-2 border-border-navbar p-3">
              <FaLinkedinIn className="text-xl" />
            </div>
            <div className="rounded-full border-2 border-border-navbar p-3">
            <FaFacebookF className="text-xl" />
            </div>
            <div className="rounded-full border-2 border-border-navbar p-3">
            <FaInstagram className="text-xl" />
            </div>
            <div className="rounded-full border-2 border-border-navbar p-3">
            <FaTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
