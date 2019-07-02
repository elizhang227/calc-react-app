import React, { Component } from 'react';

class Buttons extends Component {
    state = {
        number: 0,
        test: ''
    }

    handleClick = async (e) => {
        e.preventDefault();

        let num = this.state.test + e.target.innerHTML
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

    compute = async (e) => {
        e.preventDefault();

        let currentString = this.state.test;
        // let numberStringArray;
        // if (currentString[0] === '-') {
        //     //currentString = currentString.split('-').join('')
        //     numberStringArray = currentString.split(/\+|\*|\//g);
        //     //numberStringArray = currentString.split(/\+|\*|\-|\//g);
        // } else {
        //     numberStringArray = currentString.split(/\+|\-|\*|\//g);
        // }
        // console.log(numberStringArray)
        let numberStringArray;
        if (currentString[0] === '-') {
            numberStringArray = currentString.split(/\+|\-|\*|\//g);
            numberStringArray[1] = '-' + numberStringArray[1]
            console.log(numberStringArray)
        }
        // let operatorsArray;
        // if (currentString[0] === '-') {
        //     operatorsArray = currentString.replace(/[0-9]|\-|\./g, "").split("");
        // } else {
        //     operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
        // }
        // console.log('yooo', numberStringArray, operatorsArray)

        let numbersArray = [];
        numberStringArray.forEach(function(number) {
            numbersArray.push(Number(number));
        });
        console.log('number array', numbersArray);

        let operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
        console.log('before', operatorsArray)
        operatorsArray = operatorsArray.slice(1)
        console.log('after', operatorsArray)

        let multiply = operatorsArray.indexOf("*");
        while (multiply != -1) {
            numbersArray.splice(multiply, 2, numbersArray[multiply] * numbersArray[multiply + 1]);
            operatorsArray.splice(multiply, 1); // removes one instance of the multiply, effectively deletes it from array because no replacement is given
            multiply = operatorsArray.indexOf('*');
        }
    
        let divide = operatorsArray.indexOf("/");
        while (divide != -1) {
            numbersArray.splice(divide, 2, numbersArray[divide] / numbersArray[divide + 1]);
            operatorsArray.splice(divide, 1);
            divide = operatorsArray.indexOf('/');
        }
    
        let add = operatorsArray.indexOf("+");
        while (add != -1) {
            numbersArray.splice(add, 2, numbersArray[add] + numbersArray[add + 1]);
            operatorsArray.splice(add, 1);
            add = operatorsArray.indexOf('+');
        }
    
        let subtract = operatorsArray.indexOf("-");
        while (subtract != -1) {
            numbersArray.splice(subtract, 2, numbersArray[subtract] - numbersArray[subtract + 1]);
            operatorsArray.splice(subtract, 1);
            subtract = operatorsArray.indexOf('-');
        }

        this.setState({
            number: numbersArray,
            test: numbersArray
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
                            <button onClick={(e) => this.compute(e)}>=</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Buttons;