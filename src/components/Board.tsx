import React, { useState } from "react";
import Grid from "./Grid";
import { boardConfigArr, GridData } from "../data/boardConfigArr";
import BoardOptionsTable from "./BoardOptionsTable";
import ControlBar from "./ControlBar";
import { Pathfinder } from "../class/Pathfinder";
import SolveMessage from "./SolveMessage";

function Board() {
  const [currBoard, setCurrBoard] = useState(0);
  const boardDataArr: string[][] = boardConfigArr.map((board) => board.data);

  const [canEscape, setCanEscape] = useState<boolean | null>(null);
  const hSetCanEscape = (val: boolean | null): void => {
    setCanEscape(val);
  };

  const [gridData, setGridData] = useState(boardDataArr[currBoard]);
  const hSetGridData = (data: GridData): void => {
    setGridData([...data]);
  };

  let Pf: Pathfinder = new Pathfinder({
    baseGridData: boardDataArr[currBoard],
    hSetGridData,
    hSetCanEscape,
  });

  const [isHighlightChecked, setHighlight] = useState(true);
  const hChangeHighlight = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHighlight(e.target.checked);
  };

  const hLoadBoard = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    if (id >= 0 && id < boardDataArr.length) {
      setCurrBoard(id);
      hSetGridData(boardDataArr[id]);
      Pf = new Pathfinder({
        baseGridData: boardDataArr[currBoard],
        hSetGridData,
        hSetCanEscape,
      });
      hSetCanEscape(null);
    }
  };

  return (
    <div>
      <BoardOptionsTable
        currBoard={currBoard}
        boardConfigArr={boardConfigArr}
        hLoadBoard={hLoadBoard}
        Pf={Pf}
      />
      <Grid isHighlightChecked={isHighlightChecked} gridData={gridData} />
      <ControlBar
        isHighlightChecked={isHighlightChecked}
        hChangeHighlight={hChangeHighlight}
      />
      <SolveMessage canEscape={canEscape} />
    </div>
  );
}

export default Board;
