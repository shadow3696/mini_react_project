import React, { forwardRef, useRef, useState } from "react";

const FPureComponent = forwardRef((prop, ref) => { // when we used ref from parent component we didnt need to create a ref here
    const [name, setName] = useState('');
    
    const counter = useRef(0); // ref model for counter
    // const [counter, setCounter] = useState(0) // useState model for counter


    const handleChangeName = () => {
        // setName(myinput.current.value);
        setName(ref.current.value);
    };

    // useEffect(() => {
    //     myinput.current.focus();
    // }, [])

    return (
        <div className="form-fa-group text-center mt-4 p-3">
            <h3 className="text-center text-dark">
                guess word
            </h3>
            <input ref={ref} type="text" className="form-control" style={{width:'30%'}} autoComplete="off" />


            <button className="btn btn-warning my-3" onClick={handleChangeName}>success</button>
            <button className="btn btn-secondary my-3 mx-2" onClick={() => { ref.current.value = ""}}>hidden</button>

            <br/>
            
            <span>{counter.current++}</span>

        </div>
    );
});

export default FPureComponent; // use (highter order component) forwardRef for use parent ref from parent component
