import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContex } from './AuthProvider';


const Login = () => {

  const {userLogin} = useContext(AuthContex);

  function handleLogin(e){
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    userLogin(email,pass)

    .then((res) => {
        console.log(res.user);
          //  update last log in time
         const lastLoginTime = res?.user?.metadata?.lastSignInTime;
         const lastLogin = {email, lastLoginTime}
    })
    .catch((error) => {
     console.log(error.message);
     fetch(`http://localhost:5000/users`,{
      method: "PATCH",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(lastLoginn)
     })
     .then(res=>res.json())
     .then(data => {
      console.log('sign in user methode',data);
     })
  
    });

        const newUser = {pass, email};
        console.log(newUser);

        e.target.reset()
}


  return (
    <div className="card bg-base-100 w-full mx-auto my-11 border max-w-sm shrink-0 shadow-2xl">
    <form className="card-body" onSubmit={handleLogin}>
 
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-warning">Login</button>
      </div>
      <div><h2 className='text-red-500 text-center'><Link to={'/register'}>Do Not Have an Account Register</Link></h2></div>
    </form>
  </div>
  )
}

export default Login