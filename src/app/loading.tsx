"use client";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";
interface Props {}

function Loading(props: Props) {
  const {} = props;
  return (
    <div className="h-screen flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height={200}
        width={200}
        color="#ffffff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
