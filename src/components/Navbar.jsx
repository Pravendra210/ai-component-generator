import React from "react";
import { FiMoon, FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-800 bg-primary">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <span className="text-lg font-bold text-white">A</span>
          </div>

          <h1 className="text-xl font-bold text-white">
            AI <span className="text-purple-400">Com Gen</span>
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-secondary hover:text-white"
            title="Toggle theme"
          >
            <FiMoon size={20} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-secondary hover:text-white"
            title="Settings"
          >
            <FiSettings size={20} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;