import { useState } from "react";
import TodayPage from "../components/TodayPage.tsx";
import AddHabit from "../components/AddHabitForm.tsx";
import type { Habit } from "../types.ts";

const initialHabits: Habit[] = [
  { id: "water", name: "Drink water" },
  { id: "walk", name: "Go for a walk" },
  { id: "read", name: "Read 10 pages" },
];

export default function HabitHomePage() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  function addHabit(name: string) {
    setHabits((prev) => [{ id: crypto.randomUUID(), name }, ...prev]);
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Habit Home</h1>
      <p className="mt-2 text-zinc-600">
        Personal habit tracker built with React and TypeScript.
      </p>
      <AddHabit onAdd={addHabit} />
      <TodayPage habits={habits} />
    </div>
  );
}
