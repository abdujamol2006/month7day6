import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="not">
      <div class="container">
        <h1 className="h1">404</h1>
        <p className="p">Page Not Found</p>
        <p className="p">
          The link you clicked may be broken or the page may have been removed.
        </p>
        <div class="dots"></div>
        <p className="p">Please use the menu:</p>
        <div class="menu">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
