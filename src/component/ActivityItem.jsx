import React from "react";

export default function ActivityItem({ item, onDelete, onCheck }) {
  return (
    <li className={item.status === "todo" ? "todo" : "completed"}>
      <input
        type="checkbox"
        checked={item.status === "completed"}
        onChange={(e) => onCheck(e, item.id)}
      />
      <span className="todo-text">{item.name}</span>
      <button onClick={() => onDelete(item.id)} className="delete">
        Delete
      </button>
    </li>
  );
}
