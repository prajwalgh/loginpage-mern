import React,{useState} from 'react'

const Login = () => {
    const [loginform,setLoginform] =useState({username:'',password:''});
    // const [pass,setPass] =useState('');
  //handel user input
  const handelInput=(e)=>{
    const {name,value} = e.target;
    setLoginform((previousFormData)=>({
      ...previousFormData, 
      [name]:value,}));

  };
  //handel submit form

const handleSubmit = async (event) => {
  event.preventDefault();
   console.log('Form data before sending:', loginform);
  try {
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        loginform
      ),
    });

    const data = await response.json();
    console.log(data); // Log the response data to see the error message from the server
  } catch (error) {
    console.error('Error:', error); // Log any error that occurred during the request
  }
};

  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username
                <input 
                  type="text"
                  name="username"
                  value={loginform.username}
                  onChange={handelInput}
                  required                  />
        </label>
        
        <label>Password
                <input 
                  type='password' 
                  name="password"
                  value={loginform.password}  
                  onChange={handelInput}
                  required                  />
        </label>
        <button className='btn btn-light' type="submit" >Login</button>
      </form>
    </div>
  )
}

export default Login
