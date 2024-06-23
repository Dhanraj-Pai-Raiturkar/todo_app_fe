import Styles from './Todo.module.css';
import useUpdateTodo from '../../hooks/useUpdateTodo';
import React, { useEffect } from 'react';

export interface ToDoType {
  id: string;
  title: string;
  details: string;
  todo: boolean;
  updateTodo: Function;
  createdAt: number;
  updatedAt: number;
}

export type TodoProps = {
  id: string;
  title: string;
  details: string | undefined;
  todo?: boolean;
  updateTodo: Function;
};

const Todo: React.FC<TodoProps> = (props) => {
  const {
    editTitle,
    editDetails,
    updatedTitle,
    updatedDetails,
    updateTodo,
    setEditTitle,
    setEditDetails,
    setUpdatedTitle,
    setUpdatedDetails,
    setUpdateTodo
  } = useUpdateTodo();
  const updatedTitleValue = updatedTitle ? updatedTitle : props?.title;
  const updatedDetailsValue = updatedDetails ? updatedDetails : props?.details;
  const submitUpdateTodoForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {
      title: updatedTitle ? updatedTitle : props?.title,
      details: updatedDetails ? updatedDetails : props?.details,
      updatedAt: new Date().toISOString()
    };
    props?.updateTodo(props?.id, data);
    setEditTitle(false);
    setEditDetails(false);
  };
  const handleTitleChange = (event: React.SyntheticEvent) => {
    setUpdatedTitle((event?.target as HTMLInputElement)?.value);
  };
  const handleDetailsChange = (event: React.SyntheticEvent) => {
    setUpdatedDetails((event?.target as HTMLInputElement)?.value);
  };
  const handleTitleClick = () => {
    setEditTitle((prev) => !prev);
    setEditDetails(false);
    setUpdatedDetails('');
  };
  const handleDetailsClick = () => {
    setEditDetails((prev) => !prev);
    setEditTitle(false);
    setUpdatedTitle('');
  };
  const toggleTodo = () => setUpdateTodo(!props?.todo);
  const renderTitle = () =>
    editTitle ? (
      <input
        className={[Styles.updateTodoForm, Styles.todoTitle].join(' ')}
        autoFocus={editTitle}
        type="text"
        value={updatedTitleValue}
        onChange={handleTitleChange}
      />
    ) : (
      <h4 onClick={handleTitleClick} className={[Styles.todoTitle].join(' ')}>
        {props?.title ?? '-'}
      </h4>
    );
  const renderDetails = () =>
    editDetails ? (
      <input
        className={[Styles.updateTodoForm, Styles.todoDetails].join(' ')}
        autoFocus={editDetails}
        type="text"
        value={updatedDetailsValue}
        onChange={handleDetailsChange}
      />
    ) : (
      <p
        onClick={handleDetailsClick}
        className={[Styles.todoDetails].join(' ')}
      >
        {props?.details ?? '-'}
      </p>
    );
  useEffect(() => {
    const data = {
      todo: updateTodo,
      updatedAt: new Date().toISOString()
    };
    if (props?.todo !== updateTodo) props?.updateTodo(props?.id, data);
  }, [updateTodo]);
  return (
    <form id="updateTodoForm" onSubmit={submitUpdateTodoForm}>
      <div className={[Styles.todo].join(' ')}>
        <div className={[Styles.todoRow1].join(' ')}>
          {renderTitle()}
          {renderDetails()}
        </div>
        <div className={[Styles.todoRow2].join(' ')}>
          <input
            onChange={toggleTodo}
            type="checkbox"
            id="todoCheckbox"
            defaultChecked={props.todo}
          />
        </div>
      </div>
    </form>
  );
};

export default Todo;
