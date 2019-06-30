import React, { Component } from 'react';

class Buttons extends Component {

    render() {
        return (
            <div>
                <div className='Operator-Buttons'>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                </div>
                <div className='Bottom-Buttons'>
                    <div className='Number-Buttons'>
                        <div className='Row-1'>
                            <button>7</button>
                            <button>8</button>
                            <button>9</button>
                        </div>
                        <div className='Row-2'>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                        </div>
                        <div className='Row-3'>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                        <div className='Row-4'>
                            <button>0</button>
                            <button>.</button>
                            <button>C</button>
                        </div>
                    </div>
                    <div className='Equal-Button'>
                        <button>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buttons;