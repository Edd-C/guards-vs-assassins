import React from "react";

interface CellProps {
  content: string;
  additionalClassNames: string;
}

function Cell(props: CellProps) {
  const { content, additionalClassNames } = props;

  return <div className={`cell col ${additionalClassNames}`}>{content}</div>;
}

export default Cell;
