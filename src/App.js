import React, { useState, useEffect } from "react";
import ActivityInput from "./component/ActivityInput";
import ActivityList from "./component/ActivityList";

import "./index.css";

export default function App() {
  const [input, setInput] = useState("");
  const [activityList, setActivityList] = useState(() => {
    const savedActivities = localStorage.getItem("activities");
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  useEffect(() => {
    if (window.localStorage) {
      localStorage.setItem("activities", JSON.stringify(activityList));
    }
  }, [activityList]);

  const handleInput = (e) => setInput(e.target.value);

  const handleAdd = () => {
    const list = [...activityList];
    setActivityList([
      ...list,
      { id: activityList.length + 1, name: input, status: "todo" },
    ]);
    setInput("");
  };

  const handleDelete = (id) => {
    const list = [...activityList].filter((e) => e.id !== id);
    setActivityList(list);
  };

  const handleCheck = (e, id) => {
    const list = activityList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: e.target.checked ? "completed" : "todo",
        };
      }
      return item;
    });
    setActivityList(list);
  };

  return (
    <main>
      <h1>Activity List...</h1>

      <ActivityInput
        input={input}
        onInputChange={handleInput}
        onAdd={handleAdd}
      />

      <ActivityList
        activityList={activityList}
        onDelete={handleDelete}
        onCheck={handleCheck}
      />
    </main>
  );
}
