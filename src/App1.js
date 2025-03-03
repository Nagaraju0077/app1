import React from 'react'
import { useEffect, useState } from "react";
// import { getUser } from "host/Auth";
import {AuthProvider} from "host/AuthProvider";
import SearchComponent from 'host/SearchComponent';
import UserTable from './UserData';
import Grievance from './Griviance';
import { useSelector, useDispatch } from "react-redux";

const App1 = () => {
    const user = useSelector((state) => state.user);
   

  console.log(user.username);
  // console.log(userDetails);
  
  // const [user, setUser] = useState();
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
  const [filteredData, setFilteredData] = useState(data);

  // useEffect(() => {
  //   setUser(getUser());
  
  // }, []);

  return user ? (
    
    <>
      <h1>Welcome to Grievance, (Role: {user.role})</h1> <br/>
      {user.role === 'superadmin' ? (
        <>
            <Grievance />
          <SearchComponent data={data} onSearch={setFilteredData} />
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <div>User role ::: {user.role} </div>

        </>
      ) : (
        <>
          {/* <SearchComponent data={data} onSearch={setFilteredData} /> */}
          {/* <Grievance /> */}
          <SearchComponent data={data} onSearch={setFilteredData} />
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  ) : (
    <p>Please log in first</p>
  );
};

export default App1;

