import React from "react";

export default function MiddleContainer(props) {
  return (
    <div className="px-2 w-full h-full relative flex flex-grow">
      <div className="absolute top-0 left-0 right-0 bottom-0">
          {props.children}
      </div>
    </div>
  );
}