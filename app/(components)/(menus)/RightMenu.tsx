import Link from "next/link";
import React from "react";

const RightMenu = () => {
  return (
    <div className="absolute top-[200px] lg:top-[385px] left-[65px] lg:left-[130px]">
      <ul className="flex flex-row">
        <li className="mx-2 lg:mx-4">
          <Link href="/">Tees</Link>
        </li>
        <li className="mx-2 lg:mx-4">
          <Link href="/">Hoodies</Link>
        </li>
      </ul>
    </div>
  );
};

export default RightMenu;
