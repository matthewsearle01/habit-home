import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodayPage from "./components/TodayPage";
import AddHabit from "./components/AddHabit.tsx";
import type { Habit } from "./types.ts";

import "./App.css";

const initialHabits: Habit[] = [
  { id: "water", name: "Drink water" },
  { id: "walk", name: "Go for a walk" },
  { id: "read", name: "Read 10 pages" },
];

export default function App() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Habit Home</h1>
      <p className="mt-2 text-zinc-600">
        Personal habit tracker built with React and TypeScript.
      </p>
      <AddHabit />
      <TodayPage habits={habits} />
    </div>
  );
}
