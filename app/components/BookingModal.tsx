import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTogglersContext } from "../context/togglers";

function BookingModal() {
  const { bookingModal, setBookingModal } = useTogglersContext();

  if (!bookingModal) return null;

  return (
    <div className="bg-white fixed inset-x-0 top-0 bottom-0 z-1000">
      <div className="bg-custom-orange flex items-center justify-between text-white text-2xl p-4 font-bold">
        <h1>COMPLETE RESERVATION</h1>
        <button onClick={() => setBookingModal(false)}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default BookingModal;
