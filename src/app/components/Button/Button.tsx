import React from "react";
import "./_button.css";

interface Props {
  title: string;
  className?: string;
  handleClick?: () => void;
}

const Button = ({ title, className, handleClick }: Props) => {
  return (
    <button
      className={`buttonWhitelist font-[600] rounded-[40px] px-[2.3rem] py-3 shadow-xl cursor-pointer hover:scale-[0.98] active:scale-[0.94] transition-all duration-300 relative text-[17px] md:text-[20px] ${className} `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
