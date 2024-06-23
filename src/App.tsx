import Styles from './App.module.css';
import './index.css'
import AddTodo from './components/AddTodo/AddTodo';
import Todo from './components/Todo/Todo';
import { useState } from 'react';
import { TodoProps } from './components/Todo/Todo';
import SampleData from "./static/data/sampleTodos.json"

function App() {
  const sampleData: TodoProps[] = JSON.parse(JSON.stringify(SampleData));
  const [todos, setTodos] = useState<TodoProps[]>(sampleData);
  const renderTodos: (todo: TodoProps) => React.ReactElement = (todo) => {
    return <Todo title={todo?.title} details={todo?.details} todo={todo.todo} />
  }
  return (
    <div className={Styles.App}>
      <div className={Styles.addTodoSection}>
        <AddTodo insertTodo={setTodos} />
      </div>
      <div className={[Styles.listSection].join(' ')}>
        {
          todos.map(renderTodos)
        }
      </div>
    </div>
  );
}

export default App;
