const UserTable = (props) => {
  
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nombre de usuario</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {
        props.users.length > 0 ? 
          props.users.map((user) => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>
                <button className="button muted-button" onClick={()=>{props.editRow(user)}}><i className="fa fa-pencil" aria-hidden="true"> </i></button>
                <button className="button muted-button" onClick={()=>{props.deleteUser(user.id)}}><i className="fa fa-trash" aria-hidden="true"></i></button>
              </td>
            </tr>
          ) : (
          <td colSpan={3}>No users</td> 
        )
        }
      </tbody>
    </table>
  );
};

export default UserTable;
