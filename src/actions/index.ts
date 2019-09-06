import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = `https://jsonplaceholder.typicode.com/todos`;

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const reponse = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.FetchTodos,
      payload: reponse.data
    });
  };
};
