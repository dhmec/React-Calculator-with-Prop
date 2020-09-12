import React, { useState } from 'react';


const Calculator = props => {
    
    let result;
    const [newFirstInput, setNewFirstInput] = useState( '' );
    const [newSecondInput, setNewSecondInput] = useState( '' );
    const [newOption, setNewOption] = useState( 'addition' );
    const firstInputNumber = parseFloat(newFirstInput);
    const secondInputNumber = parseFloat(newSecondInput);
   
    const displayCalculate  = event => {
        event.preventDefault();
        console.log('clicked');
        
        if (newOption ==='addition')
        {
            console.log('add selected');
            result =  firstInputNumber + secondInputNumber;
            console.log(result);
        }
        else if (newOption === 'substraction')
        {
            console.log('substraction selected');
            result =  firstInputNumber - secondInputNumber;
            console.log(result);
        }
        else if (newOption === 'multiplication')
        {
            console.log('multiplication selected');
            result =  firstInputNumber * secondInputNumber;
            console.log(result);
        }
        else 
        {
            console.log('division selected');
            result =  firstInputNumber / secondInputNumber;
            console.log(result);
        }
                
    }  
    
    
       
    
    return (
      
        <div>
            <h1>
                Welcome to my Calculator!
            </h1> 
            <form onSubmit={displayCalculate}>
                <label htmlFor="firstInput">Input 1:</label>
                <input type="text" 
                       id="firstInput"
                       onChange={e => { setNewFirstInput( e.target.value ) }}
                       value={newFirstInput} />
                
                <label htmlFor="selectBox"> Operation:</label>
                <select id="selectBox" onChange={e => {setNewOption (e.target.value)}} value={newOption} htmlFor="selectBox">
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
            <p>Result : {result} </p>
        </div>
      
    );
}
  
export default Calculator 