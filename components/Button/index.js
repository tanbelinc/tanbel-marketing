import React from "react";

export default function Button({ children, onClick, ...props }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
    >
      {children}
    </div>
  );
}
