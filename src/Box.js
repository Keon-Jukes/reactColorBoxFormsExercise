import React from 'react';

class Box extends React.Component {
    // static defaultProps = {
    //     boxColor: 'red',
    //     boxHeight: '200px',
    //     boxWidth: '200px'
    // }
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div style={{ backgroundColor: this.props.boxColor, width: this.props.boxWidth, height: this.props.boxHeight }}>
            </div>
        )
    }
}

export default Box;