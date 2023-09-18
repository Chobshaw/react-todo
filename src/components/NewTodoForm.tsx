import { FormEvent, useState } from "react";

interface NewTodoFormProps {
  onSubmit: (item: string) => void;
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
