import React, { Component } from 'react';

import Buttons from './buttons';
import Display from './display';

class Calculator extends Component {


    render() {
        return (
            <div className='Calculator'>
                <h1>Calculator</h1>
                <Display />
                <Buttons />
            </div>
        )
    }
}

export default Calculator;