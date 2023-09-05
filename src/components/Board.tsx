import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(new Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState<string | boolean>("X");

  const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let logic of winnerLogic) {
    const [a, b, c] = logic;
    if (state[a] === state[b] && state[a] === state[c]) {
      return state[a];
    }

    return false;
  }

  // const isWinner = checkWinner();

  const handleClick = (index: number) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  // const handleReset = () => {
  //   setState(Array(9).fill(null));
  // };

  return (
    <div style={{ height: "450px", width: "450px" }}>
      <div style={{ display: "flex" }}>
        <Square
          value={state[0]}
          handleClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={state[1]}
          handleClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={state[2]}
          handleClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          value={state[3]}
          handleClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={state[4]}
          handleClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={state[5]}
          handleClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Square
          value={state[6]}
          handleClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={state[7]}
          handleClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={state[8]}
          handleClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
