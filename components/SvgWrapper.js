import React from "react";

const SvgWrapper = ({ children, size = 24, className, onClick }) => {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {children}
    </svg>
  );
};

export default SvgWrapper;
