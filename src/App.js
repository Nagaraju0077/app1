import React from 'react'
import { useEffect, useState } from "react";
// import { getUser } from "host/Auth";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "host/userSlice";

import SearchComponent from 'host/SearchComponent';
import UserTable from './UserData';
import Grievance from './Griviance';

const App1 = () => {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  console.log("Hello",user.role);


  // const [user, setUser] = useState(null);
  const data = [
    { name: 'one' },
    { name: 'two' },
    { name: 'three' },
    { name: 'four' },
    { name: 'react' },
    { name: 'angular' },
    { name: 'Vue' },
    { name: 'Ionic' },
  ];
  const [fillteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  //   setUser(getUser());
  // }, []);

  return user ? (
    <div>
      <h1>Welcome to Griviance, (Role: {user.role})</h1> <br/>
      {user.role === "superadmin" ? (
        <>
          <SearchComponent data={data} onSearch={setFilteredData}/>
          <ul>
            
            {fillteredData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>User role ::: {user.role} </div>
        </>
      ) : (
        <>
          {/* <SearchComponent data={data} onSearch={setFilteredData}/> */}
          <Grievance/>
        </>
      )}
      {/* <UserTable /> */}
    </div>
  ) : (
    <p>Please log in first. <a href="/login">Click here to login</a></p>
  );
};

export default App1;
