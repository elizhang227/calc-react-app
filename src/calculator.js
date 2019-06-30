import React, { Component } from 'react';

import Buttons from './buttons';

class Calculator extends Component {


    render() {
        return (
            <div className='Calculator'>
                <h1>Calculator</h1>
                <Buttons />
            </div>
        )
    }
}

export default Calculator;