import React from 'react';
import Box from './Box';

class BoxList extends React.Component {
    static defaultProps = {
      listedBoxes: [
        { boxColor: 'red', boxHeight: '200px', boxWidth: '200px'},
       { boxColor: 'blue', boxHeight: '50px', boxWidth: '200px'},
       { boxColor: 'orange', boxHeight: '200px', boxWidth: '50px'}
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
            {this.props.listedBoxes.length > 0 ? (<div>{this.props.listedBoxes.map(colorBox => <Box boxColor={colorBox.boxColor} boxWidth={colorBox.boxWidth} boxheight={colorBox.boxheight}/>)}</div>) : (<div>No boxes available..</div>)}
        </div>)
    }
}

export default BoxList;