import React, {Component} from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            'boxColor' : '',
            'boxWidth' : '',
            'boxHeight' : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(evt){

    }


    handleSubmit(evt){

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
                    <input name='box-color' id='boxColor' placeholder='box color' value={this.state.boxColor}/>
                    <label htmlFor='boxHeight'>Box Height: </label>
                    <input name='box-height' id='boxHeight'  placeholder='box height' value={this.state.boxHeight}/>
                    <label htmlFor='boxWidth'>Box Width: </label>
                    <input name='box-width' id='boxWidth' placeholder='box width' value={this.state.boxWidth}/>
                    <button>Create Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;