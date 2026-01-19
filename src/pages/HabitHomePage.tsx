import { useEffect, useState } from "react";
import TodayPage from "../components/TodayPage.tsx";
import AddHabit from "../components/AddHabitForm.tsx";
import type { Habit } from "../types.ts";

function loadHabits(): Habit[] {
  const stored = localStorage.getItem("habits");

  if (!stored) {
    return [];
  }

  try {
    return JSON.parse(stored) as Habit[];
  } catch {
    return [];
  }
}

export default function HabitHomePage() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

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
