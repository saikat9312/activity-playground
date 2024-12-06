import React from "react";

export default function ActivityInput({ input, onInputChange, onAdd }) {
  return (
    <div className="input-bar">
      <input value={input} onChange={onInputChange} />
      <button onClick={onAdd} className="add">
        Add Activity
      </button>
    </div>
  );
}
