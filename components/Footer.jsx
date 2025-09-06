// components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Brand */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">EventNest</h1>
          <p className="text-sm mt-3 text-gray-500 ">
            EventNest helps you discover, manage, and attend events <br />
            effortlessly. From workshops and meetups to conferences,
            <br /> find everything in one cozy, modern platform.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 md:mt-0 flex gap-4">
          <a href="#" className="hover:text-primary">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-primary">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-primary">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-primary">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-base-300 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EventNest. All rights reserved.
      </div>
    </footer>
  );
}
