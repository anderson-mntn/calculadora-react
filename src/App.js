import { Container, Content, Row, Column } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { ButtonContainer } from "./components/Button/style";
import { useState } from "react";


const App = () => {

  // Implementando funções da calculadora

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleAddNumber = (number) => {
    console.log(number, currentNumber);
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  
  }
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  const handleSum = () => {
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      
    }
  }
  

  return (
    <Container>
     <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%"/>
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="C" />
          <Button label="/"/>
        
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x"/>
       
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-"/>
        
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+"  onClick = {handleSum}/>
      
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="="/>
          <Button label="Dio" />
        </Row>
      </Content>   
    </Container>
  );
}

export default App;
