import React, { useState } from 'react';
import Navbar from './Navbar';
import UserGrid from './UserGrid';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar onGetUsers={getUsers} />
      {isLoading ? <div className="loader">Loading...</div> : <UserGrid users={users} />}
    </div>
  );
};

export default App;