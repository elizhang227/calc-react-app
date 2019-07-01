import React, { Component } from 'react';

class Buttons extends Component {
    state = {
        number: 0,
        test: ''
    }

    handleClick = async (e) => {
        e.preventDefault();

        let num = this.state.test + e.target.innerHTML
        // num += e.target.innerHTML
        console.log('this is num', num)
        this.setState({
            number: num,
            test: num
        })
    }

    clearScreen = async (e) => {
        e.preventDefault();

        this.setState({
            number: 0,
            test: ''
        })
    }

    render() {
        const { number } = this.state;
        return (
            <div>
                <div className='Display'>
                    <p>{number}</p>
                </div>
                <div className='Operator-Buttons'>
                    <button onClick={(e) => this.handleClick(e)}>+</button>
                    <button onClick={(e) => this.handleClick(e)}>-</button>
                    <button onClick={(e) => this.handleClick(e)}>*</button>
                    <button onClick={(e) => this.handleClick(e)}>/</button>
                </div>
                <div className='Bottom-Buttons'>
                    <div className='Number-Buttons'>
                        <div className='Row-1'>
                            <button onClick={(e) => this.handleClick(e)}>7</button>
                            <button onClick={(e) => this.handleClick(e)}>4</button>
                            <button onClick={(e) => this.handleClick(e)}>1</button>
                            <button onClick={(e) => this.handleClick(e)}>0</button>
                        </div>
                        <div className='Row-2'>
                            <button onClick={(e) => this.handleClick(e)}>8</button>
                            <button onClick={(e) => this.handleClick(e)}>5</button>
                            <button onClick={(e) => this.handleClick(e)}>2</button>
                            <button onClick={(e) => this.handleClick(e)}>.</button>
                        </div>
                        <div className='Row-3'>
                            <button onClick={(e) => this.handleClick(e)}>9</button>
                            <button onClick={(e) => this.handleClick(e)}>6</button>
                            <button onClick={(e) => this.handleClick(e)}>3</button>
                            <button onClick={(e) => this.clearScreen(e)}>C</button>
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