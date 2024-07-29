import React, { useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import { Context } from './testContext';

const App = ()=>{

    const [taskItem, setTaskItem] = useState([]);

    return (
        <div className = "container w-100 h-100 p-3">
            <div className = "row h-100 justify-content-center align-align-items-start">
                <div className = "col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
                    <Context.Provider value = {{taskItem, setTaskItem}}>
                        <TopForm />
                        <TaskItems />
                    </Context.Provider>
                </div>
            </div>
        </div>
    ) 
}


export default App;
