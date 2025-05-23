import { Link, Outlet } from "react-router-dom";
import { 
  FaBoxes, FaRegSquare, FaToggleOn, FaSlidersH, FaTextHeight, FaDotCircle,
  FaPowerOff, FaUserCircle, FaMedal, FaExclamationTriangle, FaSpinner, FaIcons,
  FaList, FaTable, FaInfoCircle, FaFont, FaPlusCircle, FaCheckCircle, FaCircleNotch 
} from 'react-icons/fa';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed w-64 h-screen bg-gradient-to-b from-[#4B5EAA] to-[#3B4A8A] text-white p-6 flex flex-col shadow-lg">
        <div className="flex items-center mb-10">
          <img 
            src="/image1.png.jpg" 
            alt="Logo" 
            className="w-10 h-10 mr-3 rounded-full" 
          />
          <h2 className="text-3xl font-extrabold tracking-tight">UI-KIT</h2>
        </div>
        <nav className="space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#5C7CFA] scrollbar-track-[#3B4A8A] pr-2">
          <Link
            to="/buttons"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaToggleOn className="text-lg" />
            <span>Buttons</span>
          </Link>
          <Link
            to="/cards"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaBoxes className="text-lg" />
            <span>Cards</span>
          </Link>
          <Link
            to="/checkbox"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaRegSquare className="text-lg" />
            <span>Checkboxes</span>
          </Link>
          <Link
            to="/input"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaTextHeight className="text-lg" />
            <span>Input</span>
          </Link>
          <Link
            to="/slider"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaSlidersH className="text-lg" />
            <span>Slider</span>
          </Link>
          <Link
            to="/Textfield"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaTextHeight className="text-lg" />
            <span>Text Field</span>
          </Link>
          
          <Link
            to="/RadioButton"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaDotCircle className="text-lg" />
            <span>Radio Group</span>
          </Link>
          <Link
            to="/SwitchButton"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaPowerOff className="text-lg" />
            <span>Switch</span>
          </Link>
          <Link
            to="/Avatar"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaUserCircle className="text-lg" />
            <span>Avatar</span>
          </Link>
          <Link
            to="/Badge"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaMedal className="text-lg" />
            <span>Badge</span>
          </Link>
          <Link
            to="/Alert"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaExclamationTriangle className="text-lg" />
            <span>Alert</span>
          </Link>
          <Link
            to="/progress"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaSpinner className="text-lg" />
            <span>Progress</span>
          </Link>
         
          
          
          <Link
            to="/table"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaTable className="text-lg" />
            <span>Table</span>
          </Link>
          <Link
            to="/Tooltip"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaInfoCircle className="text-lg" />
            <span>Tooltip</span>
          </Link>
          <Link
            to="/Typography"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaFont className="text-lg" />
            <span>Typography</span>
          </Link>
          <Link
            to="/FloatButton"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaPlusCircle className="text-lg" />
            <span>Float Button</span>
          </Link>
          <Link
            to="/Result"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaCheckCircle className="text-lg" />
            <span>Result</span>
          </Link>
          <Link
            to="/Loader"
            className="flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md
              transition-all duration-300 ease-in-out"
          >
            <FaCircleNotch className="text-lg" />
            <span>Loader</span>
          </Link>
        </nav>
        <div className="mt-auto text-sm text-gray-200">
          © Workwise
        </div>
      </div>

      {/* Main View Area */}
      <div className="flex-1 ml-64 p-8 bg-gray-100 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;