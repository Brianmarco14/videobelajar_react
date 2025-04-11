import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-w-screen-xl w-full bg-[url(./src/assets/hero-bg.jpg)] bg-center bg-cover px-5 md:px-36 pt-20 pb-16 relative flex flex-col items-center gap-6 rounded-xl overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-full bg-black/80 "></span>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white z-10 font-poppins font-bold text-2xl md:text-5xl text-center md:max-w-[850px] w-full">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-white z-10 text-center font-dm/[140%] text-sm md:text-base md:max-w-[850px] w-full">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <Button type="submit" className={"text-white bg-success z-10 w-fit px-2 md:px-10"}>
            Temukan Video Course untuk Dipelajari!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
