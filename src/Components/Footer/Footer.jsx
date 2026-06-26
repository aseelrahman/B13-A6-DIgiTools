import { FaFacebook, FaInstagram, FaRegCopyright } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="container mx-auto pt-30 pb-10 ">
        <div className="space-y-10 grid grid-cols-3 gap-10">
          <div className="col-span-1 space-y-4">
            <h2 className="text-4xl">DigiTools</h2>
            <p className="opacity-80">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-4">
              <ul className="space-y-4">
                <li className="text-[20px]">Product</li>
                <li className="opacity-80">Features</li>
                <li className="opacity-80">Pricing</li>
                <li className="opacity-80">Templates</li>
                <li className="opacity-80">Integrations</li>
              </ul>
              <ul className="space-y-4">
                <li className="text-[20px]">Company</li>
                <li className="opacity-80">About</li>
                <li className="opacity-80">Blog</li>
                <li className="opacity-80">Careers</li>
                <li className="opacity-80">Press</li>
              </ul>
              <ul className="space-y-4">
                <li className="text-[20px]">Resources</li>
                <li className="opacity-80">Documentation</li>
                <li className="opacity-80">Help Center</li>
                <li className="opacity-80">Community</li>
                <li className="opacity-80">Contact</li>
              </ul>
              <div className="space-y-4 flex flex-col">
                <span className="text-[20px]">Social Links</span>
                <span className="flex gap-3 text-[30px]">
                  <FaFacebook />
                  <FaInstagram />
                  <FaSquareXTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider before:bg-white after:bg-white mt-20 opacity-80"></div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 opacity-80">
            <FaRegCopyright /> 2026 Digitools. All rights reserved.
          </div>
          <div className="flex gap-6 opacity-80">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
