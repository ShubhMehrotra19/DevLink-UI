import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoTriangle } from "react-icons/io5";

const EditCardLink = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 2000); // 1000 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Link href="/form">
        <div className="justify-center items-center rounded-full bg-white shadow-md hover:scale-[102%] active:scale-95 cursor-pointer transition duration-300 ease-in-out md:block p-1">
          <img src="/icons/pencil.png" alt="" />
        </div>
      </Link>
      {showTooltip && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
          <div className="relative flex flex-col items-center ">
            <IoTriangle className="-mb-1" color="white" />
            <div className="w-fit px-5 py-1 bg-white rounded-md shadow-md">
              Edit card
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCardLink;
