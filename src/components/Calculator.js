import React, { useState } from 'react';


const Calculator = props => {
    
    
    const [newFirstInput, setNewFirstInput] = useState( '' );
    const [newSecondInput, setNewSecondInput] = useState( '' );

    const result = parseFloat(newFirstInput) + parseFloat(newSecondInput);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
      
        <div>
            <h1>
                Welcome to my Calculator!
            </h1> 
            <form>
                <label htmlFor="firstInput">Input 1:</label>
                <input type="text" 
                       id="firstInput"
                       onChange={e => { setNewFirstInput( e.target.value ) }}
                       value={newFirstInput} />
                
                <label htmlFor="selectBox"> Operation:</label>
                <select id="selectBox" name="selectBox" htmlFor="selectBox">
                        <option value="addition">+ (Add)</option>
                        <option value="substraction">- (Sub)</option>
                        <option value="multiplication">* (Mul)</option>
                        <option value="division">/ (Div)</option>
                </select>

                <label htmlFor="secondInput">Input 2:</label>
                <input type="text" 
                       id="secondInput"
                       onChange={e => { setNewSecondInput( e.target.value ) }}
                       value={newSecondInput} />

                <input type='submit' value="Calculate!" />
            </form>
            <p>Result : {result}</p>
        </div>
      
    );
}
  
export default Calculator 