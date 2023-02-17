import React from "react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <p className="text-2xl font-extrabold text-primary dark:text-gray-100">
        Tanbel Inc.
      </p>
    </Link>
  );
}
