"use client"

import { useState } from "react";
import { FaChevronDown, FaPlus } from "react-icons/fa";

export default function SideBarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="hidden md:flex flex-col fixed left-12.5 top-0 h-screen w-80 bg-black/25 border-r-2 border-black/30 backdrop-blur-lg">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 px-5 py-7">
            <div className="rounded-lg bg-zinc-900">
              <div
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-zinc-800 rounded-lg transition"
              >
                <div className="flex items-center gap-2">
                  <FaChevronDown size={10} className={`text-zinc-400 transition-transform duration-300 ${
                    open ? "rotate-0" : "-rotate-90"
                  }`} />
                  <span className="text-xs text-zinc-400 font-medium">
                    Lists
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-500 hover:text-white transition"
                >
                  <FaPlus size={10} />
                </button>
              </div>
            </div>

            <div className="h-0.5 w-full bg-zinc-700" />
          </div>
        </div>
      </aside>
    </>
  )
}