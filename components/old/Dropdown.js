const Dropdown = ({
  buttons,
  toggleDropdown,
  handleTitleClick,
  isOpen,
  selectedTitle,
}) => {
  return (
    <div className="relative">
      <div
        className="py-2 pl-3 pr-8 bg-white rounded-md shadow-md cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="font-medium">{selectedTitle}</span>
        <svg
          className={`absolute top-0 right-0 w-5 h-5 mt-2.5 mr-3 transition-transform duration-200 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="#099DFD"
        >
          <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute top-11 left-0 z-50 w-full bg-white rounded-md shadow-md">
          <ul className="py-2">
            {buttons?.map((title) => (
              <li
                key={title}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedTitle === title ? "bg-gray-100 font-medium" : ""
                }`}
                onClick={() => handleTitleClick(title)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
