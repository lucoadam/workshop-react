import InputText from './components/InputText';
import ParenetComponent from './components/ParenetComponent';
import Text from './Text';
import './App.css'
import Form from './components/Form';
/**
 * 
 * @param {*} props 
 * @returns 
 * 1. Sending via attributes 
 * 2. Sending through children
 * Data that can be transmitted to component
 * 1. String
 * 2. Array
 * 3. And all other data types of Javsascript.
 */
const Data = (props) => {  // data maintain
  // console.log('dataprops', props)
  // console.log(typeof props.name)
  return <div>{props.name ?? 'Default'}</div>
}

function App() {
  return (
    <div className="App"> 
      <Data name="Python"/>
      <Data name="Javascript"/>
      <Data/>
      <Data>
        something. {/** Children of Data Component */}
      </Data>
      <hr/>
      <Text/> {/**Single Tag */}
      <hr/>
      <InputText/>
      <hr/>
      <p>Working with form</p>
      <Form/>
      <hr/>
      <ParenetComponent/>
      <hr/>
   
    </div> 
  );
}



/**
 * div => 
 *    tag in terms of HTML / component in terms React 
 * className =>
 *     attributes in terms of HTML / props in terms React
 * children
 */

export default App;
