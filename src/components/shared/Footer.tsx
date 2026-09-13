import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="bg-gray-50 mt-12">
      {/* Upper Footer */}
      <div className="grid grid-cols-4 gap-8 p-8 border-b border-gray-200">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Logo" />
          <p className="text-sm text-gray-500 mt-2">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <ul className="flex gap-4 text-sm text-gray-700 mt-6">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold text-gray-800">Product</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company  */}
        <div>
          <h3 className="font-semibold text-gray-800">Company</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                  Terms of Service
                </a>
              </li>
            </ul>
         </div>
      </div>

      {/* Lower Footer */}
      <div className="flex flex-row items-center justify-between p-4">
        <p className="text-sm text-gray-500 text-center py-4">
          &copy; 2026 DevStack. All rights reserved.
        </p>
        <ul className="flex gap-4">
            <li className="text-sm text-gray-500 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li className="text-sm text-gray-500 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Terms
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
