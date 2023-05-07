import React from "react";

export default function Text({ children, className }) {
  return (
    <p className={`text-gray-900 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
}
