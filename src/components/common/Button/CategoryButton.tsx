import React from "react";
import clsx from "clsx";

interface CategoryButtonProps {
  title: string;
  icon: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

const CategoryButton = ({
  title,
  icon,
  selected = false,
  onClick,
}: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-200",
        selected
          ? "bg-black text-white shadow-md"
          : "bg-transparent text-gray-500 hover:text-black",
      )}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-semibold text-base">{title}</span>
    </button>
  );
};

export default CategoryButton;
