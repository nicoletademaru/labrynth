import React, { useState, useEffect } from "react";
import Tile from "../tile/tile";
import "./board.css";

export default function Board(props) {
  function getRandOrientation() {
    const orientations = [0, 90, 180, 270]
    return orientations[Math.floor(Math.random() * orientations.length)]
  }
  const nonfixedTilesArray = [];

  const nonfixedTreasures = [
    "owl",
    "spider",
    "lizard",
    "mouse",
    "moth",
    "scarab",
    "lady",
    "bat",
    "wildThing",
    "dragon",
    "ghost",
    "djinn"
  ];
  let treasureIdx = 0;

  for (let i = 0; i < 34; i++) {
    let tile = {
      spawn: 0,
      orientation: getRandOrientation(),
      extra: false,
      used: false,
    }

    if (i === 0) tile.extra = true; 
    
    switch (true) {
      case (i < 6): // treasure and L
        tile.shape = "L"
        tile.treasure = nonfixedTreasures[treasureIdx];
        treasureIdx++;
        break;
      case (i < 15):
        tile.shape = "L";
        break;
      case (i < 21):
        tile.shape = "T";
        tile.treasure = nonfixedTreasures[treasureIdx];
        treasureIdx++;
        break;
      default:
        tile.shape = "I"
        break;
    }

    nonfixedTilesArray.push(tile)
  }

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
      treasure: "book",
      orientation: 270,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "coins",
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
      treasure: "map",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "crown",
      orientation: 270,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "keys",
      orientation: 180,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "skull",
      orientation: 180,
      shape: "T",
      extra: false,
      used: true
    }],
    [null, null, null, null, null, null, null], 
    [{
      spawn: 0,
      treasure: "ring",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "chest",
      orientation: 0,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "emerald",
      orientation: 90,
      shape: "T",
      extra: false,
      used: true
    }, null,{
      spawn: 0,
      treasure: "sword",
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
      treasure: "menorah",
      orientation: 90,
      shape: "T",
      extra: false,
      used: true
    }, null, {
      spawn: 0,
      treasure: "helmet",
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
            <ul key={colIdx} style={{ padding: "3px" }}>
              {
                row.map((tile, rowIdx) => (
                  <Tile key={`${rowIdx}-tile`} tile={tile}></Tile>
                ))
              }
            </ul>
          ))
        }
      </ul>
      <Tile tile={nonfixedTilesArray.filter((tile) => !tile.used)[0]}></Tile>
    </div>
  );
}