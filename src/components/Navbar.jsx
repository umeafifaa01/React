import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-4 bg-white border">
        <div className="text-2xl font-bold">LOGO</div>
        <ul className="flex justify-end gap-4 m-2">
          <li>Courses</li>
          <li>Plugins</li>
          <li>Blog</li>
          <li>
            <button className="rounded bg-purple-500 px-2 text-white">
              Donate
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
