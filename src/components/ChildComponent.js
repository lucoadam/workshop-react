import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent(props) {
  /**
   * State for holding the changed <input/> data
   */  
  const [inputValue, setInputValue] = React.useState('');



  function InputChange(event){
      setInputValue(event.target.value);     
  }  

  function TrackingKeyDown(event){
      console.log(event.key)
      if(event.key === 'Enter'){
          /**
           * Array (prev.push(newValue)) or ([...prev, newValue])
           * Object ({...prev, newKey: newValue})
           */
          // updates parent state by pushing the input value to parentState array
          props.setParentState(previousState=> [...previousState,inputValue])
          
          // setting current input of input tag to blank
          setInputValue("")
          /**
           * Updating state using functional argument
           * 
           * fuction(){ parameter provides previousState Value 
           * }
           */
         /* props.setParentState(function (previousState){
              console.log("previousState", previousState)
              // pushing to array
              return [...previousState, 'newValue']
          })
          */
      }
  }

  return <div>
      Child component
      <br/>
      <input 
        type="text"
        value={inputValue/** For syncing the input tag value with state inputValue  */} 
        onInput={InputChange/** Updating inputValue state */}
        onKeyDown={TrackingKeyDown}
      />
      <p>Input value: {inputValue}</p>
  </div>;
}

/**
 * For validating props
 * this child component accepts two props (parentState, setParentState)
 * (type of props (define))
 * (validated the props must be passed before using the child component)
 */

ChildComponent.propTypes = {
    parentState: PropTypes.array.isRequired,
    setParentState: PropTypes.func.isRequired
};

export default ChildComponent;
