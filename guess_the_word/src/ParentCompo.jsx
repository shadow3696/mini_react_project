import { Component, createRef } from 'react';
// import PureComponents from './PureComponent'; // for class base CP(ComPonents)
import FPureComponent from './FPureComponent' // for modular CP

class ParentCompo extends Component {
    constructor(){
        super()

        // this.componentRef = createRef();
        this.myInput = createRef();
    }    

    componentDidMount() {
        // this.componentRef.current.myInput.current.focus()
        this.myInput.current.focus();
    }

    render(){
        return(
            <div>
                {/* <PureComponents ref={this.componentRef}/> */}
                <FPureComponent ref={this.myInput}/>
            </div>
        )
    }
}


export default ParentCompo; // memo(ParentCompo) in functional component memo is a highter order component for make PureComponent
