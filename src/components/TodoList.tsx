import { Todo } from "../App";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
}
