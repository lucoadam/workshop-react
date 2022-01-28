import React from 'react' //ES6
// const some = require('react') //ES5
/**
 * React Component
 **/
function Text(){
    /**
     * Data of any component (state) => change => component render
     * 
     */
    /** Parts of states
     * 1. Variable holding the value of state
     * 2. Function for changing the value of state
     */
    const [name, setName ] = React.useState('initial Name'/** takes parameter for providing inintial value */)

    function buttonClick(){
        setName('changed name')
    }

    return <div>
         <h1>Working with State</h1>
         <p>Current state value: {name} </p>
         <button onClick={buttonClick}>Click to change value of name</button>
    </div>
}


// modules.export // ES5 -> Echma Script 5

export default Text // ES6