import React from "react";
import ActivityItem from "./ActivityItem";

export default function ActivityList({ activityList, onDelete, onCheck }) {
  return (
    <ul>
      {!activityList.length
        ? "No activity..."
        : activityList.map((item) => (
            <ActivityItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onCheck={onCheck}
            />
          ))}
    </ul>
  );
}
