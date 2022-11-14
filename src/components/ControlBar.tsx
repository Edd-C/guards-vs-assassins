import React from "react";
import Checkbox from "./checkbox";

interface ControlBarProps {
  isHighlightChecked: boolean;
  hChangeHighlight: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ControlBar(props: ControlBarProps) {
  const { isHighlightChecked, hChangeHighlight } = props;
  return (
    <div>
      <Checkbox
        handleChange={hChangeHighlight}
        isChecked={isHighlightChecked}
        label="Highlight entities"
      />
    </div>
  );
}

export default ControlBar;
