import UserTable from './Components/UserTable';
import UserForm from './Components/UserForm';
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react';
function App() {
  
  const userData = [
    { id: uuidv4(), name: 'b1', userName: 'c1' },
    { id: uuidv4(), name: 'b2', userName: 'c2' },
    { id: uuidv4(), name: 'b3', userName: 'c3' }
  ]

  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser]= useState({
    id: null, name: '', userName: ''
  });

  const editRow=(user)=>{
   setEditing(true)
    setCurrentUser({id:user.id, name:user.name, userName:user.userName})
  }
  const updateUser=(id, updateUser)=>{
    setEditing(true) 
    setUsers(users.map(user=>(id===user.id ? updateUser: user)))
  }
  const deleteUser=(id)=>{
    setUsers(users.filter(user=> id !== user.id))
  }
  
  const addUsers = (user) => 
    {
      setEditing(false)
      user.id = uuidv4;
      setUsers([
        ...users,
        user
      ])
    }
  
  
  return (
    <div className="container">
      <div>
        {
          editing ? (
            <div>                            
              <UserForm msg={'Editar'} currentUser={currentUser} updateUser={updateUser} setEditing={true}/>
            </div>
          ) : (
            <UserForm msg={'Agregar'} currentUser={currentUser} addUsers={addUsers}/>
          )
        }
        
        <div className='container' ><UserTable deleteUser={deleteUser} editRow={editRow} users={users}/></div>
       
      </div>
    </div>
  );
}

export default App;
