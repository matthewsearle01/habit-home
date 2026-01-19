import { useState } from "react";
import type { Habit } from "./types.ts";

type TodayPageProps = {
  habits: Habit[];
};

export default function TodayPage({ habits }: TodayPageProps) {
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
      <h2 className="text-2xl font-semibold mb-4">Today's Tasks</h2>

      {habits.length === 0 ? (
        <p className="text-sm text-zinc-500">
          No habits yet. Add one to get started.
        </p>
      ) : (
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
                    done ? "bg-zinc-900 text-white" : "bg-zinc-100 text-white"
                  }`}
                >
                  {done ? "Undo" : "Mark Complete"}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
