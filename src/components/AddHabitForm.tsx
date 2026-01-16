import { useState } from "react";

type AddHabitProps = {
  onAdd: (name: string) => void;
};

export default function AddHabit({ onAdd }: AddHabitProps) {
  const [newHabitName, setNewHabitName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onAdd(newHabitName);
    setNewHabitName("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2">
      <input
        type="text"
        value={newHabitName}
        onChange={(e) => setNewHabitName(e.target.value)}
        placeholder="Enter a task…"
        className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white"
      >
        Add
      </button>
    </form>
  );
}
