import React, { useEffect, useState } from 'react';

import Timer from './Timer'
import Hello from './Hello'
import { Context } from './testContext';
import TimeList from './TimeList';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       title: "hi every one"
//     }
//   }

// render(){
//  return (
//       <div className="main">
//         <Hello title={this.state.title}/>
//         <Timer setTitle={this.handleSetTitle}/>
//       </div>
//     );
//   }
// };

const App = ()=>{
  const [title, setTitle] = useState('hi every one');
  const [isLight, setIsLight] = useState(false);
  const [timeList, setTimeList] = useState(["00 : 00 : 00"]);

  useEffect(()=>{
    console.log("useEffect");
    return ()=>{

    };
  }, [isLight]);

  const handleSetIsLight = ()=>{
    setIsLight(!isLight);
  };
  return(
//<Context.Provider value={{timeList:timeList, setTimeList:setTimeList}}> it is old model and new  model is object literal 
    <Context.Provider value={{timeList, setTimeList}}> 
    <div className={isLight ? "main dark" : "main light"}>
      <Hello title={title}/>
      <Timer handleSetIsLight={handleSetIsLight} isLight={isLight}/>
      <TimeList/>
    </div>
    </Context.Provider>
  );
};

export default App;
