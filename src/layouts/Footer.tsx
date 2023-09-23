import logo from "@icon/basil_image-solid.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="mt-24 py-5 border-[3px] flex flex-col lg:flex-row md:justify-between justify-center items-center border-neutral-800">
        <figure className="flex gap-3 items-center">
          <Image src={logo} width={65} height={65} alt="logo" />
          <h1 className="font-bold text-neutral-800 text-lg">Image Gallery</h1>
        </figure>
      </footer>
    </>
  );
};

export default Footer;
