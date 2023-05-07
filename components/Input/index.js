import React from "react";

export default function Input({ placeholder, value, onChange, name }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full h-12 dark:bg-gray-800 mt-1 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
    />
  );
}
