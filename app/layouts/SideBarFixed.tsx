"use client";

import { useState } from "react";
import {
  FaCheckSquare,
  FaQuestionCircle,
  FaSearch,
  FaSync,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import ModalSearch from "../components/ModalSearch";

export default function SideBarFixed() {
  const [activeMenu, setActiveMenu] = useState("task");
  const [openModalSearch, setOpenModalSearch] = useState(false);

  return (
    <>
      <aside className="fixed left-0 top-0 items-center justify-between h-screen w-12.5 bg-black/10 border-r border-black/15 backdrop-blur-lg hidden md:flex flex-col items py-7">
        <div className="flex flex-col gap-5">
          <div
            className="tooltip tooltip-right before:ml-3 after:ml-3"
            data-tip="Task"
          >
            <button
              onClick={() => setActiveMenu("task")}
              className={`transition-all ${
                activeMenu === "task"
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-400"
              }`}
            >
              <FaCheckSquare size={24} />
            </button>
          </div>
          <div
            className="tooltip tooltip-right before:ml-3 after:ml-3"
            data-tip="Search"
          >
            <button
              onClick={() => {
                setActiveMenu("search");
                setOpenModalSearch(true);
              }}
              className={`transition-all ${
                activeMenu === "search"
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-400"
              }`}
            >
              <FaSearch size={24} />
            </button>
          </div>
        </div>

        {/* <div className="flex flex-col items-center gap-5">
          <div
            className="tooltip tooltip-right before:ml-3 after:ml-3"
            data-tip="Sync"
          >
            <button className="text-zinc-500 hover:text-zinc-400 transition-all">
              <FaSync size={24} />
            </button>
          </div>
          <div
            className="tooltip tooltip-right before:ml-3 after:ml-3"
            data-tip="More"
          >
            <button className="text-zinc-500 hover:text-zinc-400 transition-all">
              <FaQuestionCircle size={24} />
            </button>
          </div>
          <div
            className="tooltip tooltip-right before:ml-3 after:ml-3"
            data-tip="Setting"
          >
            <button className="text-zinc-500 hover:text-zinc-400 transition-all">
              <FaGear size={24} />
            </button>
          </div>
        </div> */}
      </aside>

      <ModalSearch
        openModal={openModalSearch}
        closeModal={() => {
          setOpenModalSearch(false)
          setActiveMenu("task")
        }}
      />
    </>
  );
}
