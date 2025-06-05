import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="border rounded-none h-55 ">
          <ul className="flex justify-end gap-4 m-2">
            <li className="mr-80">LOGO</li>
            <li>Cousres</li>
            <li>Pluggins</li>
            <li>Blog</li>
            <li>
              <button className="rounded bg-purple-500 px-2 text-white">
                Denote
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
