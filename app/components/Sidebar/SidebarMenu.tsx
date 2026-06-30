"use client";

import { useState } from "react";
import {
  FaCalendarDay,
  FaCalendarWeek,
  FaChevronRight,
  FaInbox,
  FaPlus,
  FaRegCheckSquare,
  FaRegTrashAlt,
} from "react-icons/fa";

export default function SideBarMenu() {
  const [openLists, setOpenLists] = useState(true);

  return (
    <>
      <aside className="hidden md:flex flex-col fixed left-12.5 top-0 h-screen w-80 bg-black/25 border-r-2 border-black/30 backdrop-blur-lg">
        <div className="flex-1 overflow-y-auto px-5 py-7">
          <div className="space-y-2">
            <button className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer">
              <FaCalendarDay size={20} />
              <span>Today</span>
            </button>
            <button className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer">
              <FaCalendarWeek size={20} />
              <span>Next 7 Days</span>
            </button>
            <button className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer">
              <FaInbox size={20} />
              <span>Inbox</span>
            </button>
          </div>

          <hr className="my-7 border-white/10" />

          <div className="flex flex-col gap-4">
            <div className="rounded-lg bg-zinc-900">
              <div
                onClick={() => setOpenLists(!openLists)}
                className="flex w-full items-center justify-between px-4 py-2 hover:bg-zinc-800 rounded-lg transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FaChevronRight
                    size={10}
                    className={`text-zinc-400 transition-transform duration-300 ${
                      openLists ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  <span className="text-xs text-zinc-400 font-medium">
                    Lists
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="rounded-full p-1 text-zinc-400 hover:bg-zinc-500 hover:text-white transition cursor-pointer"
                >
                  <FaPlus size={10} />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openLists ? "max-h-96": "max-h-0"
                }`}
              >
                <div className="rounded-lg bg-zinc-900 px-4 py-3">
                  <p className="text-sm leading-6 text-zinc-400">
                    Use lists to categorize and manage your tasks and notes
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-3 border-white/10" />

            <div className="space-y-2">
              <button className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer">
                <FaRegCheckSquare size={20} />
                <span>Completed</span>
              </button>

              <button className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition cursor-pointer">
                <FaRegTrashAlt size={20} />
                <span>Trash</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
