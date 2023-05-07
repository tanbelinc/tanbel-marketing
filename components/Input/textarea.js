import React from "react";

export default function Textarea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className="w-full mt-1 p-5 dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
      cols="20"
    >
      {value}
    </textarea>
  );
}
