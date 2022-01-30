import React from 'react';
import { Container,Table, Button} from 'react-bootstrap'
import axios from 'axios'

function DataRow(props){

    return <tr>
    <td>{props.name ?? 'Default Name'}</td>
    <td>{props.age ?? '-'}</td>
    <td>{props.location ?? '-'}</td>
    <td>
        {/**
         * p specifies padding,
         * m specifies margin
         */}
        <Button  className='p-1' variant="warning">Edit</Button>
        <Button className='p-1 m-1' variant="danger">Delete</Button>
    </td>
</tr>
}

export default function Users() {
  /**
   * Creating a state that holds the users array
   */  

  const [loading, setLoading] = React.useState(true)
  const [users, setUsers] = React.useState([])
  /**
   * React useState useEffect
   * useState ==> defining component state 
   *               useState(params) params=> takes initial state value
   *               returns array of length 2 which of them contains 
   *               1. variable for holding state vale
   *               2. Function for changing the value
   * 
   * useEffect ==> Listener 
   *                useEffect(callback function, list of dependencies)
   *                callback function is triggered when the value of dependencies changes 
   *                list of dependencies => state, props, ...,etc
   *                if empty list of dependency is sent
   *                    then callback function is called on first time rendenring of page.
   */
  const getUserData = ()=>{
    axios.get('http://localhost:3001/users')
    .then(res=>{
        if(res.status === 200){ // got valid response from server
          setUsers(res.data)
        }
        setLoading(false)
    })
  }
  React.useEffect(()=>{
      setLoading(true)
      getUserData()
  }, [])


  

  React.useEffect(()=>{
      console.log('value of loading chaged', loading)
  }, [loading])
  /**
   * Used React bootstrap component for displaying user page
   * created a table
   */
 
  return <Container>
        <div className='display-4'>User</div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/** Looping through the state data 
                 *  const a1 = [1,2,3]
                 * a1.map(item=>item*3) ==> [3,6, 9]
                 * a1.map(function(data){ return tranformedData})
                 * a1.map((data)=>{ return transformedData})
                 * users = [ {name: 'name1', id: '', age: '', location: ''}, {name: '', id: '', age: '', location: ''} ]
                 *                  ||
                 * users.map(item=><DataRow key={item.id} {...item}/>)
                 *                 ||
                 *                \\//
                 * [<DataRow name="name1" id="" age="" location="" />, <DataRow name="" age="" location=""/>]
                 * 
                 * var a1 = [1, 2,3]
                 * for(let i=0;i<a1.length;i++){
                 *      a1[i] = a1[i] *3
                 * }
                 * a1
                 */}
                {!loading && users.map(item=><DataRow onDeleteClick={()=>setLoading(prev=>!prev)} key={item._id} {...item}/>)}
                {loading && <tr>
                        <td colSpan={4}>Loading</td>
                    </tr>}
            </tbody>
        </Table>
      </Container>;
}
