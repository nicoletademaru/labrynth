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
  const nonfixedTilesArray = [];

  for (let i = 0; i < 34; i++) {
    let tile = {
      spawn: 0,
      orientation: getRandOrientation(),
      extra: false,
      used: false,
    }

    if (i === 0) tile.extra = true; 
    
    switch (true) {
      case (i < 15):
        tile.shape = "L";
        break;
      case (i < 21):
        tile.shape = "T";
        break;
      default:
        tile.shape = "I"
        break;
    }

    nonfixedTilesArray.push(tile)
  }

  // const nonfixedTiles = [
  //   {
  //     spawn: 0,
  //     treasure: "",
  //     orientation: getRandOrientation(),
  //     shape: "A",
  //     extra: false,
  //     used: false
  //   },
  //   {
  //     spawn: 0,
  //     treasure: "",
  //     orientation: getRandOrientation(),
  //     shape: "B",
  //     extra: false,
  //     used: false
  //   },
  //   {
  //     spawn: 0,
  //     treasure: "",
  //     orientation: getRandOrientation(),
  //     shape: "C",
  //     extra: false,
  //     used: false
  //   },
  //   {
  //     spawn: 0,
  //     treasure: "",
  //     orientation: getRandOrientation(),
  //     shape: "D",
  //     extra: false,
  //     used: false
  //   },
  //   {
  //     spawn: 0,
  //     treasure: "",
  //     orientation: getRandOrientation(),
  //     shape: "E",
  //     extra: false,
  //     used: false
  //   },
  // ];
  const fixedBoard = [
    [{
      spawn: 1,
      treasure: "",
      orientation: 90,
      shape: "L",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "",
      orientation: 270,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "",
      orientation: 270,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 2,
      treasure: "",
      orientation: 0,
      shape: "L",
      extra: false,
      used: true
    }
  ],
    [null, null, null, null, null, null, null],
    [{
      spawn: 0,
      treasure: "",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 270,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 180,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 180,
      shape: "T",
      extra: false,
      used: true
    }],
    [null, null, null, null, null, null, null], 
    [{
      spawn: 0,
      treasure: "",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 90,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "",
      orientation: 180,
      shape: "T",
      extra: false,
      used: true
    }],
    [null, null, null, null, null, null, null],   
    [{
      spawn: 3,
      treasure: "",
      orientation: 180,
      shape: "L",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "",
      orientation: 90,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "",
      orientation: 90,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 4,
      treasure: "",
      orientation: 270,
      shape: "L",
      extra: false,
      used: true
    }
  ]]; // matrix filled with every fixed tile

  // itr through fixed board
  // if we're on an empty spot pick random number in nonfixedTiles

  for (let i = 0; i < fixedBoard.length; i++) {
    for (let j = 0; j < fixedBoard.length;) {
      const currTile = fixedBoard[i][j];
      if (!currTile) {
        let randNum = Math.floor(Math.random() * nonfixedTilesArray.length);
        if (!nonfixedTilesArray[randNum].used) {
          fixedBoard[i][j] = nonfixedTilesArray[randNum];
          nonfixedTilesArray[randNum].used = true;
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