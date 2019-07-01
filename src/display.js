import React, { Component } from 'react';

import Buttons from './buttons';

class Display extends Component {

    render() {
        const { display } = this.props.Buttons;
        console.log('this is display', display);
        return (
            <div className='Display'>
                <input type='text' placeholder='enter number'></input>
            </div>
        )
    }
}

export default Display;