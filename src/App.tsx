import Styles from './App.module.css';
import './index.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todo from './components/Todo/Todo';
import { useEffect, useState } from 'react';
import { ToDoType } from './components/Todo/Todo';
import SampleData from './static/data/sampleTodos.json';

function App() {
  const sampleData: ToDoType[] = JSON.parse(JSON.stringify(SampleData));
  const [todos, setTodos] = useState<ToDoType[]>([]);
  const renderTodos: (todo: ToDoType) => React.ReactElement = (todo) => {
    return (
      <Todo
        id={todo?.id}
        title={todo?.title}
        details={todo?.details}
        todo={todo.todo}
        updateTodo={updateTodo}
      />
    );
  };
  const updateTodo = (id: string, data: ToDoType) => {
    setTodos((prev: ToDoType[]) => {
      return prev.map((todo: ToDoType) => {
        if (todo?.id === id) return { ...todo, ...data };
        else return todo;
      });
    });
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className={Styles.App}>
      <div className={Styles.addTodoSection}>
        <AddTodo insertTodo={setTodos} />
      </div>
      <div className={[Styles.listSection].join(' ')}>
        {todos?.length ? (
          todos.map(renderTodos)
        ) : (
          <span className={[Styles.emptyTodosMsg].join(' ')}>
            no todo's to display
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
