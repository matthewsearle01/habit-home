import { useState } from "react";

type Habit = {
  id: string;
  name: string;
};

const habits: Habit[] = [
  { id: "water", name: "Drink water" },
  { id: "walk", name: "Go for a walk" },
  { id: "read", name: "Read 10 pages" },
];

export default function TodayPage() {
  const [doneIds, setDoneIds] = useState<string[]>([]);

  function toggleDone(id: string) {
    setDoneIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((existingId) => existingId !== id);
      }
      return [...prev, id];
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Today</h1>

      <ul className="space-y-2">
        {habits.map((habit) => {
          const done = doneIds.includes(habit.id);

          return (
            <li
              key={habit.id}
              className={`border rounded-md p-3 flex items-center justify-between ${
                done ? "text-zinc-400 line-through" : ""
              }`}
            >
              <span>{habit.name}</span>

              <button
                type="button"
                onClick={() => toggleDone(habit.id)}
                className={`text-sm rounded-md px-3 py-1 ${
                  done ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900"
                }`}
              >
                {done ? "Undo" : "Mark done"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
