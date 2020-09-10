import React from 'react';

const Calculator = props => {
    return (
      
        <div>
            <h1>
                Welcome to my Calculator!
            </h1> 
            <form>
                <label htmlFor="firstInput">Input 1:</label>
                <input type="text" id="firstInput" name="firstInput"></input>
                
                <label htmlFor="selectBox"> Operation:</label>
                <select id="selectBox" name="selectBox" htmlFor="selectBox">
                        <option value="addition">+</option>
                        <option value="substraction">-</option>
                        <option value="multiplication">*</option>
                        <option value="division">/</option>
                </select>

                <label htmlFor="secondInput">Input 2:</label>
                <input type="text" id="secondInput" name="secondInput"></input>

                <input type='submit' value="Calculate!"></input>
            </form>
        </div>
      
    );
  }
  
  export default Calculator 