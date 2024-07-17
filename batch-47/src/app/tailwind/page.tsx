import TailwindBtn from "@/component/tailwind/Button";
import HeadingX from "@/component/tailwind/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <HeadingX/>
      <HeadingX />
      <button id="btn-0">Click Me0</button>
      <button className="green-btn" id="btn-1">
        Click Me1
      </button>
      <button className="green-btn" id="btn-3">
        Click Me3
      </button>
      <TailwindBtn />
    </>
  );
};

export default page;