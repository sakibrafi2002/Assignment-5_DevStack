import logo from "../../assets/logo-text.png";

const Navbar = () => {
  const path = "/";
  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Technologies",
      url: "/technologies",
    },
    {
      label: "Projects",
      url: "/project",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center border-b border-gray-100 py-3">
      {/* logo */}
      <div>
        <a href="/">
          <img src={logo} className="" alt="logo"></img>
        </a>
      </div>
      {/* menu */}
      <ul className="flex items-center gap-4">
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
