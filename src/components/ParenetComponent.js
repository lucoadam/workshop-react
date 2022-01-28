import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParenetComponent() {
    /**
     * An array state for holidng multi value
     */
    const [parentState, changeParentState] = React.useState([]);
  return <div>
      Parent Component
      <p>
          Parent state : {parentState.join(', ')}
      </p>
      <br/>
      {/**
       * Parent State and changeParentState function pass
       */}
      <ChildComponent 
        parentState={parentState} 
        setParentState={changeParentState}
    />
  </div>;
}
