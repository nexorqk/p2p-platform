import todosData from "./todoDB.json";

let todos: ITodo[] = [...todosData];

export interface ITodo {
  id: string;
  todo: string;
  completed: boolean;
}

export interface TodoUpdate {
  todo?: string;
  completed?: boolean;
}

export interface TodoUpdate {
  todo?: string;
  completed?: boolean;
}

async function create(todo: ITodo): Promise<ITodo> {
  todos.push(todo);
  return todo;
}

async function readAll(): Promise<ITodo[]> {
  return todos;
}

async function read(todoId: string): Promise<ITodo | undefined> {
  return todos.find((todo) => todo.id === todoId);
}

async function update(
  id: string,
  update: TodoUpdate
): Promise<ITodo | undefined> {
  todos.forEach((todo) => {
    if (todo.id === id) {
      return { ...todo, update };
    }
  });
  return await read(id);
}

async function deleteTodo(todoId: string): Promise<ITodo[]> {
  return todos.filter((todo) => todo.id !== todoId);
}

async function reset() {
  todos = [...todosData];
}

export { create, read, deleteTodo, reset, update, readAll };
