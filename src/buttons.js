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
                            <button>4</button>
                            <button>1</button>
                            <button>0</button>
                        </div>
                        <div className='Row-2'>
                            <button>8</button>
                            <button>5</button>
                            <button>2</button>
                            <button>.</button>
                        </div>
                        <div className='Row-3'>
                            <button>9</button>
                            <button>6</button>
                            <button>3</button>
                            <button>C</button>
                        </div>
                        <div className='Equal-Button'>
                            <button>=</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Buttons;