import React, { useContext } from 'react';
import { Context } from './testContext';

const TaskItems = () => {
    const { taskItem, setTaskItem } = useContext(Context);

    const handleSetDoneTask = (id) => {
        const index = taskItem.findIndex(t => t.id === id);
        let newTaskItem = [...taskItem];
        newTaskItem[index].done = !newTaskItem[index].done;
        setTaskItem(newTaskItem);
    }

    const handleDeleteTask = (id) => {
        let newTask = taskItem.filter(t => t.id !== id);
        setTaskItem(newTask);
    }

    if (taskItem.length) {
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {
                    taskItem.map((t, i) => (
                        <li key={i} className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                            {t.title}
                            <span>
                                <i onClick={() => handleSetDoneTask(t.id)} className={`me-3 pointer text-success transition_200 fas text_hover_shadow ${t.done ? 'text-warning fa-times' : 'fa-check'}`}></i>
                                <i onClick={() => handleDeleteTask(t.id)} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                            </span>
                        </li>
                    ))
                }
    
            </ul>
        );
    } else {
        return (
            <h4 className='text-center text-danger mt-4'>هیچ کاری ثبت نشده !</h4>
        );
    };
};

export default TaskItems;