import React from "react";
import Link from "next/link";

export default function Logo({dark}) {
  return (
    <Link href="/">
      <p className={`text-2xl font-extrabold ${dark ? "text-gray-100" : "text-primary dark:text-gray-100"}`}>
        Tanbel Inc.
      </p>
    </Link>
  );
}
