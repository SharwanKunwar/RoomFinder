import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TbRulerMeasure } from "react-icons/tb";

function OwnerRoomCard() {
  const [available, setAvailable] = useState(true);

  return (
    <div className="w-full bg-[#1f3447] rounded-xl p-4 flex gap-4 shadow-md">
      
      {/* Image */}
      <div className="w-[130px] h-[100px] rounded-lg overflow-hidden relative flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="room"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 text-xs bg-white text-black px-2 py-[2px] rounded">
          FLAT
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 text-white">
        <h2 className="text-lg font-semibold">
          2BHK Apartment in New Baneshwor
        </h2>

        <p className="text-sm text-gray-300 flex items-center gap-1 mt-1">
          <MdLocationOn size={16} />
          New Baneshwor, Kathmandu
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-300 mt-3">
          <span className="flex items-center gap-1">
            <IoBedOutline /> 2 Bed
          </span>
          <span className="flex items-center gap-1">
            <LuBath /> 1 Bath
          </span>
          <span className="flex items-center gap-1">
            <TbRulerMeasure /> 850 sqft
          </span>
        </div>

        <p className="mt-3 text-sm text-gray-400">Monthly Rent</p>
        <p className="text-blue-400 font-semibold text-lg">
          NPR 25,000
        </p>
      </div>

      {/* Availability Toggle */}
      <div className="flex flex-col justify-between items-end">
        <span
          className={`text-sm font-medium ${
            available ? "text-green-400" : "text-red-400"
          }`}
        >
          {available ? "Available" : "Not Available"}
        </span>

        <label className="inline-flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={available}
            onChange={() => setAvailable(!available)}
          />
          <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-blue-500 relative transition">
            <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default OwnerRoomCard;
