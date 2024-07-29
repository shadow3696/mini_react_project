import React, { useContext, useState } from 'react';
import { Context } from './testContext';

// make a condition for check the value input field when is null not create Task

const TopForm = () => {
    const [task, setTask] = useState('');

    const { taskItem, setTaskItem } = useContext(Context);

    const handleSetTask = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskItem([...taskItem, { id: Math.random(), title: task, done: false }]);
        setTask("");
    };

    return(
        <>
            <h4 className = "text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
            <form onSubmit = {handleAddTask}>
                <div className = "form-group d-flex">
                    <input type = "text" className = "form-control" value = {task} onChange = {handleSetTask}/>
                    <button type = "submit" className = "btn btn-success me-1">ثبت</button>
                </div>
            </form>
        </>
    )
}

export default TopForm;