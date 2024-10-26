
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
      <p>Current values in store :</p>
      <div className="output">
        Name - {user.name}
        Email - {user.email}
      </div>
    </div>
  )
}

export default App
