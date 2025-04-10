import Button from "./Button";

const CtaSection = () => {
  return (
    <section className="max-w-screen-xl w-full bg-[url(./src/assets/hero-bg.jpg)] bg-center bg-cover px-5 md:px-36 pt-20 pb-16 relative flex flex-col items-center gap-6 rounded-xl overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-full bg-black/80 "></span>
      <div className="z-10 md:max-w-[500px] w-full  flex flex-col items-center gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-text-news z-10 text-center font-dm/[140%] text-lg font-medium w-full">
            NEWSLETTER
          </p>
          <h1 className="text-white z-10 font-poppins font-semibold text-3xl text-center max-w-[850px] w-full">
            Mau Belajar Lebih Banyak?
          </h1>
          <p className="text-white z-10 text-center font-dm/[140%] text-base max-w-[850px] w-full">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
        </div>
        <div className="bg-transparent md:bg-white w-full rounded-xl md:ps-8 md:py-2 md:pe-2">
          <form className="flex flex-col md:flex-row justify-between gap-2.5 w-full">
            <input type="text" placeholder="Masukkan Emailmu" className="w-full border-none outline-none bg-white p-2 rounded-[10px] text-center md:text-start" required/>
            <Button className={'bg-warning-secondary text-white w-full md:w-fit'}>Subscribe</Button>
          </form> 
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
