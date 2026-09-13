import logo from "../../assets/logo-text.png";

const Navbar = () => {
    const path = "/"
    const items = [
        {
            label : "Home",
            url : "/"
        },
        {
            label : "Technologies",
            url : "/tech"
        },
        {
            label : "Projects",
            url : "/project"
        },
        {
            label : "About",
            url : "/about"
        },
        {
            label : "Contact",
            url : "/contact"
        }
    ]
  return (
    <div className="flex justify-between items-center border-b border-gray-100 py-3">
        {/* logo */}
        <div>
            <img src={logo} className="" alt="logo"></img>
        </div>
        {/* menu */}
        <ul className="flex items-center gap-4">
            {
                items.map(ele => {
                    return <li key={ele.label} className={path === ele.url ? "text-sm text-[#D91B7E] font-semibold" : "text-sm text-gray-600 font-semibold"}>
                        {ele.label}
                    </li>
                })
            }
        </ul>
        {/* button */}
        <div className="flex gap-2 items-center">
            <button className="text-xs font-medium">Sign in</button>
            <button className="bg-[#D91B7E] px-3 py-1 rounded-full text-xs text-white">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar