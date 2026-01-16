import { useState } from "react";

export default function AddHabit() {
  const [newHabitName, setNewHabitName] = useState("");

  return (
    <div className="p-6">
      <form text-sm rounded-md px-3 py-1>
        <label>
          Enter your task:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}
