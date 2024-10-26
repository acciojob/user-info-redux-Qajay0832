
import React, { useState } from "react";
import './../styles/App.css';
import { useUser } from "../redux/useReducer";

const App = () => {
  const [fullName, setFullName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const { user, setName, setEmail } = useUser();
  console.log(user, setName, setEmail);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User Information</h1>
      <div>
        <div>
          <label htmlFor='name' >Name :</label>
          <input type="text" id="fullName" value={user.name} onChange={(e) => setName(e.target.value)} /></div>
        <div>
          <label htmlFor='email' >Email :</label>
          <input type="email" id="email" value={user.email} onChange={(e) => setEmail(e.target.value)} />
        </div>

      </div>
      <div>
        <p>Current values in store :</p>
        <div>
          <div>
            <p style={{display:'inline'}}>Name :</p>
            <p style={{display:'inline'}}>{user.name}</p>
          </div>
          <div>
            <p style={{display:'inline'}}>Email :</p>
            <p style={{display:'inline'}}>{user.email}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
