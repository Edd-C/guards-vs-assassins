import React from "react";
import Cell from "./Cell";
import { GridData } from "../data/boardConfigArr";
import { GridEntity } from "../class/Pathfinder";

interface GridProps {
  gridData: GridData;
  isHighlightChecked: boolean;
}

function Grid(props: GridProps) {
  const { gridData, isHighlightChecked } = props;

  const getCellColorClass = (cellContent: string): string => {
    let className = "";

    if (!isHighlightChecked) return className;

    switch (cellContent) {
      case GridEntity.Walkable:
        className = "walkable-bg";
        break;
      case GridEntity.Assassin:
        className = "assassin-bg";
        break;
      case GridEntity.Blockade:
        className = "blockade-bg";
        break;
      case GridEntity.GuardLOS:
        className = "guardLOS-bg";
        break;
      case GridEntity.NorthGuard:
      case GridEntity.EastGuard:
      case GridEntity.SouthGuard:
      case GridEntity.WestGuard:
        className = "guard-bg";
        break;
      case GridEntity.Exit:
        className = "exit-bg";
        break;
      case GridEntity.ExitPath:
        className = "exitPath-bg";
        break;
      default:
        break;
    }

    return className;
  };

  return (
    <div>
      {gridData.map((row, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="d-flex flex-row board-row" key={i}>
          {row.split("").map((cell, ii) => (
            <Cell
              content={cell}
              additionalClassNames={getCellColorClass(cell)}
              // eslint-disable-next-line react/no-array-index-key
              key={ii}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
