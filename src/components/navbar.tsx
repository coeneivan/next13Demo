import Image from "next/image";
import logo from "../images/Logo.png";

export default function Navbar({absolute}:{absolute?:boolean}) {
  return (
    <div className={`w-full flex py-4 ${absolute? 'absolute': ''}`}>
      <div className="container inline-flex justify-between items-center">
        <div id="links" className="gap-4 flex w-full">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Blog </a>
          <a href="">Contact</a>
        </div>
        <div id="logo" className="w-full flex justify-center">
          <Image src={logo} width={200} height={50} alt={"Logo Weblighting"} />
        </div>
        <div id="socials" className="gap-4 flex w-full justify-end">
          <img src="https://via.placeholder.com/20x20" />
          <img src="https://via.placeholder.com/20x20" />
          <img src="https://via.placeholder.com/20x20" />
        </div>
      </div>
    </div>
  );
}
