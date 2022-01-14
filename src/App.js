import React from 'react';
import UsersList from "./UsersList";
import AddUser from './Users/AddUser';

function App() {
  return (
      <div>
        <AddUser/>
        <UsersList users={[]}/>
      </div>

    
  );
}

export default App;
