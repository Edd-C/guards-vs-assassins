export type GridData = string[];

export interface BoardConfig {
  title: string;
  data: GridData;
}

export const boardConfigArr: BoardConfig[] = [
  // Board 1
  {
    title: "Stormy seas",
    data: ["A.X...X.", "..X.X...", "....X.X.", "X..X..XE"],
  },
  {
    title: "Snake",
    data: [
      "....V...........",
      "..V...V.>.V...V.",
      ".X..............",
      "................",
      ".X..............",
      "................",
      "X...X.^.^...^...",
      "A..............E",
    ],
  },

  {
    title: "Gauntlet",
    data: [
      "....................",
      ".>................<.",
      ".>.....X............",
      ".X.....X.X.........<",
      ".>...V.X....V...V...",
      "..............X.....",
      ">..V.XXXXXX.......V.",
      "..........X.........",
      ".X.V....<.X.........",
      ".X..................",
      ".X...>...X..........",
      ".X..................",
      ".X.X>...X.^.X...X...",
      "AX........V...^...^E",
    ],
  },

  {
    title: "Gotcha' now",
    data: [
      ">..V.V.V.V.V.V.V.V.....V.V.V.V.V.V.V.V..",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "........................................",
      "....................A...................",
      "........................................",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ".>......................................",
      "......................................<.",
      ">.^.^.^.^.^.^.^.^.^...^.^.^.^.^.^.^.^.^E",
    ],
  },
];