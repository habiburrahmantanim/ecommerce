import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex gap-4">
      <div>
        <div className="w-1/2">
          {/* picture */}
          <div className="">
            <Image
              src="/slider1.avif"
              alt="Slider 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>cart</div>
      </div>
    </div>
  );
};

export default page;
