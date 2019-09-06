import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DeleteTodo;
  payload: number;
}

const url = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const reponse = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.FetchTodos,
      payload: reponse.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.DeleteTodo,
    payload: id
  };
};
