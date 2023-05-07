import React, { useEffect, useState } from "react";

export default function Button({
  children,
  onClick,
  loading,
  loaderText = "Loading",
  ...props
}) {
  const [loader, setLoader] = useState("...");
  useEffect(() => {
    setInterval(() => {
      setLoader((prev) => {
        if (prev === "...") {
          return "";
        } else if (prev === "") {
          return ".";
        } else if (prev === ".") {
          return "..";
        } else if (prev === "..") {
          return "...";
        }
      });
    }, 300);
  }, []);
  return (
    <div
      onClick={onClick}
      className="cursor-pointer px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
    >
      {loading ? <p className="w-[70px]">{loaderText + loader}</p> : children}
    </div>
  );
}
