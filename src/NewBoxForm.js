import React, {Component} from 'react';
import { v4 as uuid } from 'uuid';

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxColor : '',
            boxWidth : '',
            boxHeight : '',
            id: uuid(),

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt){

    }


    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({ boxColor : '', boxWidth : '', boxHeight : '',  id: uuid(),})
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='boxColor'>Box Color: </label>
                    <input name='boxColor' id='boxColor' placeholder='box color' value={this.state.boxColor} onChange={this.handleChange}/>
                    <label htmlFor='boxHeight'>Box Height: </label>
                    <input name='boxHeight' id='boxHeight'  placeholder='box height px' value={this.state.boxHeight} onChange={this.handleChange}/>
                    <label htmlFor='boxWidth'>Box Width: </label>
                    <input name='boxWidth' id='boxWidth' placeholder='box width px' value={this.state.boxWidth} onChange={this.handleChange}/>
                    <button>Create Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;