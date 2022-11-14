import { AStarFinder } from "astar-typescript";
import { IPoint } from "astar-typescript/dist/interfaces/astar.interfaces";
import { GridData } from "../data/boardConfigArr";
import { replaceAt } from "../helpers/stringHelper";

interface Coord {
  x: number;
  y: number;
}

export enum GridEntity {
  Walkable = ".",
  Assassin = "A",
  Blockade = "X",
  GuardLOS = "o",
  NorthGuard = "^",
  EastGuard = ">",
  SouthGuard = "V",
  WestGuard = "<",
  Exit = "E",
  ExitPath = "=",
}

class Pathfinder {
  private readonly baseGridData: GridData;

  private readonly hSetGridData;

  private readonly hSetCanEscape;

  private modifiedGridData: GridData;

  public constructor({
    baseGridData,
    hSetGridData,
    hSetCanEscape,
  }: {
    baseGridData: GridData;
    hSetGridData: (data: GridData) => void;
    hSetCanEscape: (data: boolean | null) => void;
  }) {
    this.baseGridData = baseGridData;
    this.modifiedGridData = [...baseGridData];
    this.hSetGridData = hSetGridData;
    this.hSetCanEscape = hSetCanEscape;
  }

  static isGuard(char: string): boolean {
    switch (char) {
      case GridEntity.NorthGuard:
      case GridEntity.EastGuard:
      case GridEntity.WestGuard:
      case GridEntity.SouthGuard:
        return true;
      default:
        return false;
    }
  }

  public reset(): void {
    this.hSetGridData(this.baseGridData);
    this.hSetCanEscape(null);
  }

  // eslint-disable-next-line class-methods-use-this
  public solve(): void {
    const myMatrix = this.toWalkableMatrix();
    const assassinCoord = this.getEntityCoord(GridEntity.Assassin);
    const exitCoord = this.getEntityCoord(GridEntity.Exit);

    const aStarInstance = new AStarFinder({
      grid: {
        matrix: myMatrix,
      },
      diagonalAllowed: false,
    });

    const exitPathway = aStarInstance.findPath(
      assassinCoord as IPoint,
      exitCoord as IPoint
    );

    if (exitPathway.length > 0) {
      this.setExitPath(exitPathway);
      this.hSetCanEscape(true);
    } else {
      this.hSetCanEscape(false);
    }
  }

  public calcLOS(): void {
    this.baseGridData.map((row, y) =>
      row
        .split("")
        .map((cell, x) => {
          if (Pathfinder.isGuard(cell)) {
            this.convertGuardLOS(x, y, cell);
          }
          return cell;
        })
        .join("")
    );

    this.hSetGridData(this.modifiedGridData);
  }

  public setExitPath(exitPathway: number[][]): void {
    exitPathway.map((coord) => {
      const x = coord[0];
      const y = coord[1];

      if (
        ![GridEntity.Exit, GridEntity.Assassin].includes(
          this.modifiedGridData[y][x] as GridEntity
        )
      )
        this.modifiedGridData[y] = replaceAt(
          this.modifiedGridData[y],
          x,
          GridEntity.ExitPath
        );

      return null;
    });

    this.hSetGridData(this.modifiedGridData);
  }

  public toWalkableMatrix(): number[][] {
    this.calcLOS();

    return this.modifiedGridData.map((row) =>
      row.split("").map((cell) => {
        if (
          [GridEntity.Walkable, GridEntity.Assassin, GridEntity.Exit].includes(
            cell as GridEntity
          )
        ) {
          return 0;
        }
        return 1;
      })
    );
  }

  // eslint-disable-next-line class-methods-use-this
  private convertGuardLOS(col: number, row: number, guard: string): void {
    switch (guard) {
      case GridEntity.NorthGuard:
        for (let y = Math.max(row - 1, 0); y >= 0; y -= 1) {
          if (this.modifiedGridData[y][col] === GridEntity.Walkable) {
            this.modifiedGridData[y] = replaceAt(
              this.modifiedGridData[y],
              col,
              GridEntity.GuardLOS
            );
          } else if (this.modifiedGridData[y][col] === GridEntity.GuardLOS) {
            // eslint-disable-next-line no-continue
            continue;
          } else {
            break;
          }
        }
        break;

      case GridEntity.EastGuard:
        for (
          let x = Math.min(col + 1, this.modifiedGridData[row].length);
          x < this.modifiedGridData[row].length;
          x += 1
        ) {
          if (this.modifiedGridData[row][x] === GridEntity.Walkable) {
            this.modifiedGridData[row] = replaceAt(
              this.modifiedGridData[row],
              x,
              "o"
            );
          } else if (this.modifiedGridData[row][x] === GridEntity.GuardLOS) {
            // eslint-disable-next-line no-continue
            continue;
          } else {
            break;
          }
        }
        break;

      case GridEntity.WestGuard:
        for (let x = Math.max(col - 1, 0); x >= 0; x -= 1) {
          if (this.modifiedGridData[row][x] === GridEntity.Walkable) {
            this.modifiedGridData[row] = replaceAt(
              this.modifiedGridData[row],
              x,
              "o"
            );
          } else if (this.modifiedGridData[row][x] === GridEntity.GuardLOS) {
            // eslint-disable-next-line no-continue
            continue;
          } else {
            break;
          }
        }
        break;

      case GridEntity.SouthGuard:
        for (
          let y = Math.min(row + 1, this.modifiedGridData.length);
          y < this.modifiedGridData.length;
          y += 1
        ) {
          if (this.modifiedGridData[y][col] === GridEntity.Walkable) {
            this.modifiedGridData[y] = replaceAt(
              this.modifiedGridData[y],
              col,
              "o"
            );
          } else if (this.modifiedGridData[y][col] === GridEntity.GuardLOS) {
            // eslint-disable-next-line no-continue
            continue;
          } else {
            break;
          }
        }
        break;

      default:
        break;
    }
  }

  private getEntityCoord(entity: GridEntity): Coord | null {
    for (let row = 0; row < this.modifiedGridData.length; row += 1) {
      for (let cell = 0; cell < this.modifiedGridData[row].length; cell += 1) {
        if (this.modifiedGridData[row][cell] === entity) {
          return { x: cell, y: row };
        }
      }
    }
    return null;
  }
}

export { Pathfinder };
