import logo from "../../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const path = "/";
  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Technologies",
      url: "#",
    },
    {
      label: "Projects",
      url: "#",
    },
    {
      label: "About",
      url: "#",
    },
    {
      label: "Contact",
      url: "#",
    },
  ];
  return (
    <div className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-gray-200 rounded-xl flex justify-between items-center py-3">
      <div className="sm:hidden">
        <RxHamburgerMenu />
      </div>
      {/* logo */}
      <div>
        <a href="/">
          <img src={logo} className="" alt="logo"></img>
        </a>
      </div>
      {/* menu */}
      <ul className="hidden sm:flex items-center gap-4">
        {items.map((ele) => {
          return (
            <li
              key={ele.label}
              className={
                path === ele.url
                  ? "text-sm text-[#D91B7E] font-semibold"
                  : "text-sm text-gray-600 font-semibold"
              }
            >
              <a href={ele.url} className="hover:text-[#D91B7E]">
                {ele.label}
              </a>
            </li>
          );
        })}
      </ul>
      {/* button */}
      <div className="flex gap-2 items-center">
        <button className="text-xs font-medium">
          <a href="#" className="hover:text-[#D91B7E]">
            Sign in
          </a>
        </button>
        <button className="bg-[#D91B7E] px-3 py-1 rounded-full text-xs text-white">
          <a href="#" className="hover:text-[#000000]">
            Sign up
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
