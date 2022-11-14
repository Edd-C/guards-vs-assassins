import React, { MouseEventHandler } from "react";
import { BoardConfig } from "../data/boardConfigArr";
import { Pathfinder } from "../class/Pathfinder";

interface BoardTableProps {
  boardConfigArr: BoardConfig[];
  currBoard: number;
  hLoadBoard: (e: React.MouseEvent<HTMLButtonElement>, i: number) => void;
  Pf: Pathfinder;
}

function BoardOptionsTable(props: BoardTableProps) {
  const { boardConfigArr, hLoadBoard, currBoard, Pf } = props;

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Size</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {boardConfigArr.map((gridData: BoardConfig, i) => (
            <tr
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={`${currBoard === i ? "fw-bold" : ""}`}
            >
              <td>{i + 1}</td>
              <td>{gridData.title}</td>
              <td>{`${gridData.data[0].length} x ${gridData.data.length}`}</td>

              <td className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn teal-btn btn-sm mx-1"
                  onClick={(e) => hLoadBoard(e, i)}
                  disabled={currBoard === i}
                >
                  Load
                </button>

                <button
                  type="button"
                  className="btn teal-btn btn-sm mx-1"
                  onClick={() => Pf.calcLOS()}
                  disabled={currBoard !== i}
                >
                  CalcLOS
                </button>

                <button
                  type="button"
                  className="btn teal-btn btn-sm mx-1"
                  onClick={() => Pf.solve()}
                  disabled={currBoard !== i}
                >
                  Solve
                </button>

                <button
                  type="button"
                  className="btn teal-btn btn-sm mx-1"
                  onClick={() => Pf.reset()}
                  disabled={currBoard !== i}
                >
                  Reset
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardOptionsTable;
