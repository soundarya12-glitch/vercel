import { FaFacebookF, FaTwitter, FaInstagram ,FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export function Newsletter() {
return (
    <div className="hidden lg:block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 sm:px-6 py-2 text-sm shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        
        {/* Left: Social Media Icons */}
        <div className="flex space-x-4 items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Center: Newsletter Text */}
         <Link to="/subscription" className="text-center text-xs sm:text-sm font-medium px-2 ">
          📬 Subscribe to our newsletter for updates and offers!
          </Link>
       

        {/* Right: Navigation Links */}
        <div className="flex space-x-3 text-xs sm:text-sm font-medium">
          <Link to="/Aboutus" className="hover:text-yellow-300 hover:underline">About Us</Link>
          <Link to="/trackus" className="hover:text-yellow-300 hover:underline">Track Us</Link>
          <Link to="/faq" className="hover:text-yellow-300 hover:underline">FAQ</Link>
        </div>
      </div>
    </div>
  );
}

