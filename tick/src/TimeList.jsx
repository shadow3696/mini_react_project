import React, { useContext } from 'react';
import Item from './Item';
import { Context } from './testContext';

const TimeList = () => {
  const {timeList} = useContext(Context);
  return (<>
    <div className='main_time_list'>
        {timeList.map((c, i)=>(
            <Item key={i}>{c}</Item>
        ))}
    </div>
    </>);
};

export default TimeList;
