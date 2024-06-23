import Styles from './Todo.module.css';

export type TodoProps = {
    title: string;
    details: string | undefined;
    todo?: boolean;
}

const Todo: React.FC<TodoProps> = (props) => {
    return <div className={[Styles.todo].join(' ')}>
        <div className={[Styles.todoRow1].join(' ')}>
            <h4 className={[Styles.todoTitle].join(' ')}>{props?.title ?? "-"}</h4>
            <p className={[Styles.todoDetails].join(' ')}>{props?.details ?? "-"}</p>
        </div>
        <div className={[Styles.todoRow2].join(' ')}>
            <form>
                <input type="checkbox" id="todoCheckbox" defaultChecked={props.todo}/>
            </form>
        </div>
        
    </div>
}

export default Todo;