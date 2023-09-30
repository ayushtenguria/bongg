import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/public/ZELIMO.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-[1000]">
      <nav className="md:flex justify-around space-x-2 hidden p-4 bg-slate-50">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex justify-between space-x-5 font-semibold">
            <li>Latest Drop</li>
            <li>About</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between space-x-5 font-semibold text-lg">
            <li>
              <a href="/">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="/cart">
                <ShoppingBagIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <MenuIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
