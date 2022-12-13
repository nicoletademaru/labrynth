import React, { useEffect, useRef } from "react";

export default function Canvas(props) {
  const {draw, height, width} = props;
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    draw(ctx);
  });

  return (
    <canvas ref={canvas} height={height} width={width}></canvas>
  );
}