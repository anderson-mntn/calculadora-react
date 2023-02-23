import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";


const App = () => {

  // Implementando funções da calculadora

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('0')

  const handleAddNumber = (number) => {
    console.log(number, currentNumber);
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  
  }

  // ---- Clear ----
  const handleOnClear = () => {
    setCurrentNumber('0');
  }


  // ---- Sum ----
  const handleSum = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('+');
      setFirstNumber('0');
      
    }
  }

  // ---- Sub ----
  const handleSubstraction = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('-');
      setFirstNumber('0');
      
    }
  }

    // ---- Division ----
  const handleDivision = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('/');
      setFirstNumber('0');
    }
  }
  // ---- Multiplication ----
  const handleMultiplication = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber(0);
      setOperation('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('x');
      setFirstNumber('0');
    }
  }
  
  // ---- Result/Equals ----
  const handleEquals = () => {
  
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+': handleSum();
        break;
        case '-': handleSubstraction();
        break;
        case '/': handleDivision();
        break;
        case 'X': handleMultiplication();
        break;
        case 'C': handleBackspace();
        break;
        default:
        break;
      }
    }
  }

  const handleBackspace = () =>{
    
    setCurrentNumber(currentNumber.slice(0, -1));
    console.log(currentNumber);

  }

   // Prints current numbers and operations in console.
   const handleToConsole = () =>{
    console.log("current number: " + currentNumber + ", first number: " + firstNumber + ", operation: " + operation);
   }

  return (
    <Container>
     <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%"/>
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="C" onClick={handleBackspace}/>
          <Button label="/" onClick={handleDivision}/>
        
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="X" onClick={handleMultiplication}/>
       
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubstraction}/>
        
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+"  onClick = {handleSum}/>
      
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="Dio" onClick={handleToConsole} />
        </Row>
      </Content>   
    </Container>
  );
}

export default App;
