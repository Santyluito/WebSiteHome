import React from "react";

const HeadersComponents = ({title}) => {
  return (
    <div className="flex flex-wrap items-center justify-center text-center my-12">
      <h3 className="text-xl md:text-4xl font-bold text-gray-800 grid place-items-center font-Lobster">
        {title}
        <div className="h-1 w-3/4 bg-gradient-to-r from-cyan-500 to-pink-500 mt-2" />
      </h3>
    </div>
  );
};

export default HeadersComponents;
