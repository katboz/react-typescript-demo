import React, { useState } from 'react';
import Button from './Button';
import Card from './Card'; 
import ButtonGreet from './ButtonGreet';
import { Greet } from './Greet';

function App() {
  const [greeting, setGreeting]= useState({greeting:'Hello', counter:0});
  //function that returns array with 2 items in it, myState Array with 2 bellow
  const changeGreeting = () => {
    setGreeting({greeting:'Good bye', counter:greeting.counter+1})
  }
  console.log(greeting)
  return (
    <>
      <h1>'Hello World'</h1>
      <Greet name = 'Kat' />
      <ButtonGreet
        greeting={greeting}
        changeGreeting={changeGreeting}
        />
      <Button color='pink'></Button>
      <Button color='blue'></Button>
      <Button color='green'></Button>
      <Button></Button>
      <Button></Button>
      <Card></Card>
    </>
  );   
}

export default App;
