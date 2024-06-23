import Styles from './AddTodo.module.css';
import Global from '../../global/css/Global.module.css';
import useAddTodo from '../../hooks/useAddTodo';
import React from 'react';
import { TodoProps } from '../Todo/Todo';
import { v4 as uuidv4 } from 'uuid';

export type AddTodo = {
  insertTodo: Function;
};

const AddTodo: React.FC<AddTodo> = ({ insertTodo }) => {
  const { title, details, setTitle, setDetails } = useAddTodo();
  const resetForm = () => {
    setTitle('');
    setDetails('');
  };
  const submitTodo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const newTodo = {
        id: uuidv4(),
        title,
        details,
        todo: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      insertTodo((prev: TodoProps[]) => {
        return [...prev, newTodo];
      });
      resetForm();
    } catch (error) {
      console.error('submitTodo error', error);
      throw error;
    }
  };
  return (
    <>
      <form
        id="addTodoForm"
        className={Styles.addTodoForm}
        onSubmit={submitTodo}
      >
        <h2 className={[Styles.todoTitle].join(' ')}>Add Todo</h2>
        <label
          htmlFor="todo_title_field"
          className={[Global.formTitles].join(' ')}
        >
          Title
        </label>
        <input
          id="todo_title_field"
          type="text"
          value={title}
          onChange={(event: React.SyntheticEvent) =>
            setTitle((event.target as HTMLInputElement)?.value)
          }
          className={[Styles.textInputField, Global.textFields].join(' ')}
        />
        <label
          htmlFor="todo_details_field"
          className={[Global.formTitles].join(' ')}
        >
          Details
        </label>
        <input
          id="todo_details_field"
          type="text"
          value={details}
          onChange={(event: React.SyntheticEvent) =>
            setDetails((event.target as HTMLInputElement)?.value)
          }
          className={[Styles.textInputField, Global.textFields].join(' ')}
        />
        <div className={Styles.displayBox}>
          <input
            type="submit"
            value="submit"
            className={[Global.button, Styles.todo_submit].join(' ')}
          />
          <input
            type="button"
            value="cancel"
            className={[Global.button, Styles.todo_submit].join(' ')}
          />
        </div>
      </form>
    </>
  );
};

export default AddTodo;
