import Image from "next/image";
import { Navbar } from "./Navbar";
import header from "@/public/IONL.webp";

export const Header = () => {
  return (
    <header>
      <div>
        <Image src={header} alt="Header Image" />
      </div>
    </header>
  );
};
