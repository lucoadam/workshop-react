import React from 'react';

export default function InputText() {
  const [program, setProgram] = React.useState("value from state"); 
  function buttonClick(){
        setProgram("Value from button click")
  }

  function onInputChange(event){
    console.log(event.target /** Gets input element */);
    console.log(event.target.value /** gives the current value of input element */);
    setProgram(event.target.value);
  }

  return <div>
      <h3>Working with input field</h3>
      {/**
       * Value props determines input value
       * onInput (event) => triggers when keyboard is pressed
       */}
      <input value={program}  onInput={onInputChange} type="text"/>
      <button onClick={buttonClick}>Click to change</button>
      <p>{program}</p>
  </div>;
}
