import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="max-w-5xl mx-auto  py-5 flex justify-between items-center">
      <h1>Logo</h1>
      <nav className="flex gap-[100px]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
