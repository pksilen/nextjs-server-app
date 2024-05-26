import { useTodosStore } from '@/app/todos/stores/todos/todosStore';

export const useTodo = (id: string) => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);

  const { editTodo, removeTodo, setEditableTodo, toggleTodoDone } = useTodosStore(
    (store) => store.actions
  );

  return {
    editTodo: editTodo(id),
    isEditable: editableTodoId === id,
    removeTodo: () => removeTodo(id),
    setAsEditableTodo: () => setEditableTodo(id),
    toggleTodoDone: () => toggleTodoDone(id)
  };
};
