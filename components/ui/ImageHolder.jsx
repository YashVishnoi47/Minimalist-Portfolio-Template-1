import Image from "next/image";
import React from "react";

const ImageHolder = ({ image }) => {
  return (
    <div className="w-10 h-10 bg-gradient-to-b from-blue-400 to-blue-600 shadow-xl  shadow-shadow-primary rounded-[4px] flex justify-center items-center">
      {image && (
        <Image
          src={image}
          alt={"Image"}
          width={24}
          height={24}
          className=" rounded-[4px] bg-white/20"
        />
      )}
    </div>
  );
};

export default ImageHolder;
