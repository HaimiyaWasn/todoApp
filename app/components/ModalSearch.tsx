"use state";

import { useEffect, useState } from "react";

type Props = {
  openModal: boolean;
  closeModal: () => void;
};

export default function ModalSearch({ openModal, closeModal }: Props) {
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
    ></div>
  );
}
