import React, { useState, useEffect } from "react";
import Tile from "../tile/tile.jsx";
import "./board.css";

export default function Board(props) {

  // const [spawn, setSpawn] = useState(null); // num
  // const [treasure, setTreasure] = useState(null); // string
  // const [orientation, setOrientation] = useState(null); // num
  // const [shape, setShape] = useState(null); // string/char
  // const [extra, setExtra] = useState(null); // bool

  function getRandOrientation() {
    const orientations = [0, 90, 180, 270]

    return orientations[Math.floor(Math.random()* orientations.length)]
  }

  const nonfixedTiles = [
    {
      spawn: 0,
      treasure: "",
      orientation: getRandOrientation(),
      shape: "A",
      extra: false,
      used: false
    },
    {
      spawn: 0,
      treasure: "",
      orientation: getRandOrientation(),
      shape: "B",
      extra: false,
      used: false
    },
    {
      spawn: 0,
      treasure: "",
      orientation: getRandOrientation(),
      shape: "C",
      extra: false,
      used: false
    },
    {
      spawn: 0,
      treasure: "",
      orientation: getRandOrientation(),
      shape: "D",
      extra: false,
      used: false
    },
    {
      spawn: 0,
      treasure: "",
      orientation: getRandOrientation(),
      shape: "E",
      extra: false,
      used: false
    },
  ];
  const fixedBoard = [
    [{
      spawn: 1,
      treasure: "",
      orientation: 90,
      shape: "L",
      extra: false,
      used: true
    }, null, {
      spawn: 2,
      treasure: "",
      orientation: 0,
      shape: "L",
      extra: false,
      used: true
    }],
    [null, null, null],
    [{
      spawn: 4,
      treasure: "",
      orientation: 180,
      shape: "L",
      extra: false,
      used: true
    }, null, {
      spawn: 3,
      treasure: "",
      orientation: 270,
      shape: "L",
      extra: false,
      used: true
    }]
  ]; // matrix filled with every fixed tile

  // itr through fixed board
  // if we're on an empty spot pick random number in nonfixedTiles

  for (let i = 0; i < fixedBoard.length; i++) {
    for (let j = 0; j < fixedBoard.length;) {
      const currTile = fixedBoard[i][j];
      if (!currTile) {
        let randNum = Math.floor(Math.random() * nonfixedTiles.length);
        console.log(randNum)
        console.log(nonfixedTiles[randNum].used)
      
        if (!nonfixedTiles[randNum].used) {
          fixedBoard[i][j] = nonfixedTiles[randNum];
          nonfixedTiles[randNum].used = true;
          j++;
        } 
      } else {
        j++;
      }
    }
  }

  return (
    <div>
      <ul className="gameboard">
        {
          fixedBoard.map((row, colIdx) => (
            <ul key={colIdx}>
              {
                row.map((tile, rowIdx) => (
                  <Tile key={`${rowIdx}-tile`} tile={tile}></Tile>
                ))
              }
            </ul>
          ))
        }
      </ul>
    </div>
  );
}