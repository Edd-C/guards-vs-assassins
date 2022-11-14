import React from "react";

interface Props {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

function Checkbox(props: Props) {
  const { label, isChecked, handleChange } = props;

  return (
    <div className="form-check">
      <label className="form-check-label" htmlFor={label}>
        {label}
      </label>
      <input
        type="checkbox"
        className="form-check-input"
        id={label}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
}
export default Checkbox;
