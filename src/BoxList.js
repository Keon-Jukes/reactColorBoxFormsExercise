import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
// import { v4 as uuid } from 'uuid';

class BoxList extends React.Component {
    // static defaultProps = {
    //   listedBoxes: [
    //     { boxColor: 'red', boxHeight: '200px', boxWidth: '200px', id: uuid()},
    //    { boxColor: 'blue', boxHeight: '50px', boxWidth: '200px', id: uuid()},
    //    { boxColor: 'orange', boxHeight: '200px', boxWidth: '50px', id: uuid()}
    //   ]
    // }

    constructor(props){
        super(props)
        this.state = {
            listOfBoxes: []
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    removeBox(){

    }

addBox(newBox){
    this.setState(state => ({
        listOfBoxes: [...state.listOfBoxes, newBox]
    }));
}

    render(){
        return(<div>
            {this.state.listOfBoxes.length > 0 ? (<div>{this.state.listOfBoxes.map(colorBox => <div key={colorBox.id}><Box boxColor={colorBox.boxColor} boxWidth={colorBox.boxWidth} boxHeight={colorBox.boxHeight} boxId={colorBox.id}/> <button>X</button></div>)} </div>) : (<div>No boxes available..</div>)}
            <NewBoxForm addBox={this.addBox}/>
        </div>)
    }
}

export default BoxList;