"use client";

import UploadBox from "@/components/UploadBox";

export default function page() {
  return (
    <div className="h-screen bg-inherit">
      <div className="h-[90%] flex justify-center items-center font-bold">
        <div className=" space-y-5">
          <p className="text-[25px]">drop your image here</p>
          <UploadBox />
        </div>
      </div>
    </div>
  );
}
