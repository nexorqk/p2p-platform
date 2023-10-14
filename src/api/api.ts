// import { setupWorker, rest } from "msw";
import * as todosDB from "./server";

interface TodoBody {
  todo: todosDB.ITodo;
}

interface TodoId {
  todoId: string;
}

interface TodoUpdate extends TodoId {
  update: {
    todo?: string;
    completed?: boolean;
  };
}

const apiUrl = "https:todos";

// export const worker = setupWorker(
// rest.get<TodoId>(`${apiUrl}/todo`, async (req, res, ctx) => {
//   const { todoId } = req.body;
//   const todo = await todosDB.read(todoId);
//   if (!todo) {
//     return res(
//       ctx.status(404),
//       ctx.json({ status: 404, message: "Book not found" })
//     );
//   }

//   return res(ctx.json({ todo }));
// }),

// rest.get(`${apiUrl}/todo/all`, async (req, res, ctx) => {
//   const todos = await todosDB.readAll();
//   return res(ctx.json(todos));
// }),

// rest.post<TodoBody>(`${apiUrl}/todo`, async (req, res, ctx) => {
//   const { todo } = req.body;
//   const newTodo = await todosDB.create(todo);
//   return res(ctx.json({ todo: newTodo }));
// }),

// rest.put<TodoUpdate>(`${apiUrl}/todo/update`, async (req, res, ctx) => {
//   const { todoId, update } = req.body;
//   const newTodo = await todosDB.update(todoId, update);
//   return res(ctx.json({ todo: newTodo }));
// }),

// rest.delete<TodoId>(`${apiUrl}/todo/delete`, async (req, res, ctx) => {
//   const { todoId } = req.body;
//   const todos = await todosDB.deleteTodo(todoId);
//   return res(ctx.json({ todos: todos }));
// })
// );
