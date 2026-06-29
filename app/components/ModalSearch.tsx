"use state";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

type Props = {
  openModal: boolean;
  closeModal: () => void;
};

export default function ModalSearch({ openModal, closeModal }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 z-10 flex items-center justify-center transition-all duration-300 ${
        openModal
          ? "bg-black/25 backdrop-blur-xs opacity-100 visible"
          : "bg-black/0 opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl border border-blue-600 w-full max-w-2xl mx-5 overflow-hidden transform transition-all duration-300 ${
          openModal
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-5 opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 p-5">
          <FaSearch size={20} className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none w-full text-black text-xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <FaCircleXmark
            onClick={handleCloseModal}
            size={24}
            className="text-zinc-600 hover:text-black cursor-pointer transition"
          />
        </div>

        <div className={`my-2 h-0.5 transition-colors duration-300 ${
          isFocused
            ? "bg-blue-600"
            : "bg-zinc-700"
        }`} />

        <div className="h-100 flex flex-col items-center justify-center text-black gap-7">
          <div className="text-8xl">🔍</div>

          <p className="font-bold text-lg">Enter the Keyword</p>
        </div>
      </div>
    </div>
  );
}
