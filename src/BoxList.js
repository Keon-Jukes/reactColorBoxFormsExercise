import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

class BoxList extends React.Component {
    static defaultProps = {
      listedBoxes: [
        { boxColor: 'red', boxHeight: '200px', boxWidth: '200px', id: uuid()},
       { boxColor: 'blue', boxHeight: '50px', boxWidth: '200px', id: uuid()},
       { boxColor: 'orange', boxHeight: '200px', boxWidth: '50px', id: uuid()}
      ]
    }

    constructor(props){
        super(props)
        this.state = {
            listOfBoxes: []
        }
    }
    render(){
        return(<div>
            {this.props.listedBoxes.length > 0 ? (<div>{this.props.listedBoxes.map(colorBox => <Box boxColor={colorBox.boxColor} boxWidth={colorBox.boxWidth} boxheight={colorBox.boxheight} key={colorBox.id}/>)}</div>) : (<div>No boxes available..</div>)}
            <NewBoxForm />
        </div>)
    }
}

export default BoxList;