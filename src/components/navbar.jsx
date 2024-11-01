
export default function Navbar() {
    return (
      <nav className="navbar w-full z-10 bg-black/20 backdrop-blur-sm py-5 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-lg font-bold">MyWebsite</div>
          <ul className="flex space-x-10 font-bold text-lg">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Work</a></li>
            <li><a href="#" className="hover:text-gray-300">Resume</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>    
    );
  }
