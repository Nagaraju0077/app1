// src/UserTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({});

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => setUsers(response.data.users))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e, column) => {
    setSearch({ ...search, [column]: e.target.value });
  };

  const filteredUsers = users.filter(user =>
    Object.keys(search).every(column =>
      user[column]?.toString().toLowerCase().includes(search[column]?.toLowerCase())
    )
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              ID
              <input type="text" onChange={(e) => handleSearch(e, 'id')} />
            </th>
            <th>
              First Name
              <input type="text" onChange={(e) => handleSearch(e, 'firstName')} />
            </th>
            <th>
              Last Name
              <input type="text" onChange={(e) => handleSearch(e, 'lastName')} />
            </th>
            <th>
              Email
              <input type="text" onChange={(e) => handleSearch(e, 'email')} />
            </th>
            <th>
              Age
              <input type="text" onChange={(e) => handleSearch(e, 'age')} />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;