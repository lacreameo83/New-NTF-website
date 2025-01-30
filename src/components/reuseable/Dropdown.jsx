import { useState } from "react";

const Dropdown = ({ options = [], placeholder = "Category", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // Trigger callback
  };

  return (
    <div className="relative w-full border-l-[1px] flex items-center justify-between">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className=" flex justify-between w-full inter text-[16px] leading-[24px] text-[rgba(38,40,64,1)] items-center "
      >
        {selected}
        <svg
          className={`w-5 h-5 ml-2 transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div  className="absolute top-[150%] mt-2 w-full bg-white rounded-lg shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                style={{padding:'10px'}}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
