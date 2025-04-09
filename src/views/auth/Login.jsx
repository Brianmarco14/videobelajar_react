import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";

const Login = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center md:h-[100svh] px-6 xl:px-0 py-5 xl:py-0">
      <Card className={"p-5 md:p-9"}>
        <Title
          title={"Masuk ke Akun"}
          sub={"Yuk, lanjutin belajarmu di videobelajar."}
        />
        <form className="flex flex-col gap-4">
          <Input
            label={"E-Mail"}
            name={"email"}
            type={"text"}
            isRequired={true}
          />
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            isRequired={true}
          />
          <a
            href="#"
            className="text-end text-sm md:text-base font-dm/[140%] text-text-third font-medium tracking-[0.2px]">
            Lupa Password?
          </a>
          <Button type="submit" className={"text-white bg-success"}>Masuk</Button>
          <Link to={'/register'}>
            <Button className={"text-success bg-success/20"}>Daftar</Button>
          </Link>
          <div className="relative flex justify-center items-center">
            <span className="absolute w-full h-0.5 bg-border-card"></span>
            <p className="bg-white z-10 py-1 px-3 text-sm md:text-base font-dm/[140%] text-text-third tracking-[0.2px] ">
              atau
            </p>
          </div>
          <Button
            className={
              "text-text-third border border-border-card flex items-center justify-center gap-2"
            }>
            <img src="./src/assets/google.png" /> Masuk dengan Google
          </Button>
        </form>
      </Card>
    </div>
    </>
  );
};

export default Login;
