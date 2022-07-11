import React, {Component} from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            'box-color' : '',
            'box-width' : '',
            'box-height' : ''
        }
    }
    render(){
        return(
            <div>
                <form>
                    <label htmlFor='box-color'>Box Color: </label>
                    <input name='box-color' id='box-color' placeholder='box color' />
                    <label htmlFor='box-height'>Box Height: </label>
                    <input name='box-height' id='box-height'  placeholder='box height'/>
                    <label htmlFor='box-width'>Box Width: </label>
                    <input name='box-width' id='box-width' placeholder='box width'/>
                    <button>Create Box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;