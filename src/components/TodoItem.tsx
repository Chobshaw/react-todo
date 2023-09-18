import { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}
