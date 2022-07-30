import React from 'react'
import '../styles/App.css';


const App = () => {
  
  return (
    <div>
      <form>
      <input id='name' placeholder='username' type='text' />
      <label for='name'>Username</label>
      <br/>
      <input id='email' placeholder='email' type='email' />
      <label for='email'>Email</label>
      <br />
      <input id='password' placeholder='password' type='password' />
      <label for='password'>Password</label>
      <br />
      <input id='consent' type='checkbox' />
      <label for='consent'>Consent</label>
      <br />
      <button>Signup</button>
      </form>
    </div>
  )
}


export default App;
