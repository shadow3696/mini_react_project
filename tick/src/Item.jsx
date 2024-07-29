import React, { useContext } from 'react';
import { Context } from './testContext';

const Item = (props) => {
    const context = useContext(Context);

    const handleDeleteItem = (e)=>{
        context.setTimeList(context.timeList.filter(t => t !== e.target.innerHTML));
    };
  return (<>
    <div onClick={handleDeleteItem} className='time_item'>{props.children}</div>
    </>);
};

export default Item;
