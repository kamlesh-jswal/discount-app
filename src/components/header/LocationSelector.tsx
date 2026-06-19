"use client";

const LocationSelector = () => {
  return (
    <button
      className="
        flex
        flex-col
        items-start
        rounded-lg
        border
        px-4
        py-2
        hover:bg-gray-50
      "
    >
      <span className="text-xs text-gray-500">Delivering to</span>

      <span className="font-medium">Greater Noida West</span>
    </button>
  );
};

export default LocationSelector;
