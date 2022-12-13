import React, { useState, useEffect } from "react";
import "./path.css";

export default function Path(props) {
  const [clicked, setClicked] = useState(null); // bool
  
  useEffect(() => {
    if (props.path) {
      setClicked(props.path.clicked)
    }
  }, [props])

  return (
    <p className="path"></p>
  );
}