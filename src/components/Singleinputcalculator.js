import React, { useState } from 'react';


const Singleinputcalculator = props => {
    
    
    const [inputData, setInputData] = useState( '' );
    const [result, setResult] = useState( '' );
    const inputArray = inputData.split(/(?=[-+*/])/); 
    console.log(inputArray);   
    const inputString = inputArray.toString();
    console.log(inputString);
    let num1 = parseInt(inputArray[0]);
    let num2 = parseInt(inputArray[1]);
    console.log(num2);
    
    const checkForOperator = () => {
        if(inputString.includes('+'))
        {
            console.log('add selected');            
            setResult(num1 + num2);
        }
        else if(inputString.includes('-'))
        {
            console.log('sub selected');            
            setResult(num1 + num2);
        }
        else if(inputString.includes('*'))
        {
            console.log('mul selected');            
            setResult(num2);
        }
        else
        {
            console.log('div selected');            
            setResult(num1 / num2);
        }
    }
    // submit event function
    const displayCalculate  = event => {
        event.preventDefault(); 
        
        checkForOperator();
                        
    } 
        
    
    //Retrun(JSX) 
    return (
      
        <div>
            <h1>
                Welcome to my Single Input Calculator!
            </h1> 
            <form onSubmit={displayCalculate}>
                <label htmlFor="inputData">Input :</label>
                <input type="text" 
                       id="inputData"
                       onChange={e => { setInputData( e.target.value ) }}
                       value={inputData} />                               
                <input type='submit' value="Calculate!" />
            </form>
            <p>Result : {result} </p>
        </div>
      
    );
}
  
export default Singleinputcalculator 